/**
 * Created with IntelliJ IDEA.
 * User: edaubert
 * Date: 06/09/12
 * Time: 14:08
 */

function KPopupSlave(kslide) {
    var self = this;

    this.activate = function () {
        jQuery(document.body).on("INITIALIZE", function () {
            if (window.opener != null) {
                window.addEventListener('message', manageMessage, false);
            }
            jQuery(document.body).trigger("INITIALIZED");
        });
        // TODO INITIALIZE => master send the list of events I must forward to it

        jQuery(document.body).on("RUN", function () {
            window.opener.postMessage(stringify({type: "INITIALIZED"}), '*');
        });

        jQuery(document.body).on("START END SET_POSITION FORWARD BACK", toForward);
    };

    function toForward(message) {
        jQuery(document.body).off("START END SET_POSITION FORWARD BACK", toForward);
        window.opener.postMessage(stringify(message), '*');
        jQuery(document.body).on("START END SET_POSITION FORWARD BACK", toForward);
    }

    function manageMessage(event) {
        if (event.source === window.opener) {
            var message = JSON.parse(event.data);
            jQuery(document.body).off("START END SET_POSITION FORWARD BACK", toForward);
            jQuery(document.body).trigger(message);
            jQuery(document.body).on("START END SET_POSITION FORWARD BACK", toForward);
        }
    }
}

function KPopupMaster(kslideKeynote, slideUrl) {

    var self = this;
    var popup = null;

    // allow to close the popup when the window is unload
    function unload() {
        if (popup != null) {
            popup.close();
            popup = null;
        }
    }

    function createPopup() {
        unload();
        window.addEventListener('message', manageMessage);
        popup = window.open(slideUrl + "popup", 'slides', 'width=784px,height=569px,personalbar=0,toolbar=0,scrollbars=1,resizable=1');
    }

    this.activate = function () {
        jQuery(document.body).on("RUN", function () {
            window.addEventListener('unload', unload, false);
            var element = jQuery('#popup-button');
            element.on("touchstart", createPopup);
            element.click(createPopup);
            jQuery(document.body).on("START END SET_POSITION FORWARD BACK", onReceivedEvents);
        });
    };

    function onReceivedEvents(message) {
        if (popup != null) {
            popup.postMessage(stringify(message), '*');
        }
    }

    function manageMessage(event) {
        if (event.source === popup) {
            var message = JSON.parse(event.data);
            if (message.type === "INITIALIZED") {
                popup.postMessage(stringify({type: "SLIDE"}), '*');
                popup.postMessage(stringify({type: "SET_POSITION", position: kslideKeynote.getCurrentSlideNumber()}), '*');
            } else {
                jQuery(document.body).off("START END SET_POSITION FORWARD BACK", onReceivedEvents);
                jQuery(document.body).trigger(message);
                jQuery(document.body).on("START END SET_POSITION FORWARD BACK", onReceivedEvents);
            }
        }
    }
}