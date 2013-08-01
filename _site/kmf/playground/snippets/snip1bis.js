//Just define a deep cloud model
var cloud = factory.createCloud();
for(var nodeI=0;nodeI<5;nodeI++){
    var newNode = factory.createNode();
    newNode.setId("Node_"+nodeI);
    cloud.addNodes(newNode);
    for(var softI=0;softI<3;softI++){
       var newSoft = factory.createSoftware();
       newSoft.setName("Soft_"+nodeI+"_"+softI);
       newNode.addSoftwares(newSoft);
    }
}

/* Utility function */
String.prototype.repeat = function( num ){return new Array( num + 1 ).join(this);}

//Pretty print aspect
function prettyPrint(indice){
    indice = typeof indice !== 'undefined' ? indice : 0;
    var children = this.containedElementsList();    
    console.log("--".repeat(indice)+this.metaClassName())
    this.containedElementsList().array.forEach(function(entry) {
        entry.prettyPrint(indice+1);
    });
}

//Apply on all elements
factory.createCloud().__proto__.prettyPrint = prettyPrint;
factory.createNode().__proto__.prettyPrint = prettyPrint;
factory.createSoftware().__proto__.prettyPrint = prettyPrint;

//call it :-)
cloud.prettyPrint();
//draw it
draw(cloud,"Final result");
