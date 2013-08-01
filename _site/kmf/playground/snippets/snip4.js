var cloud = factory.createCloud();
var myAmazonEC2node = factory.createNode();
myAmazonEC2node.setId("EC2_0");
cloud.addNodes(myAmazonEC2node);
var myNginx = factory.createSoftware();
myNginx.setName("SRV0");
myAmazonEC2node.addSoftwares(myNginx);

var listener = { elementChanged : function(event){
 switch(event.getType()){
  case ActionType.$ADD:
    console.log("Add event ! "+event);
	break;
  case ActionType.$SET:
    console.log("Set event ! "+event);
	break;
 }
}};
//Add as Tree (meaning global) listener
cloud.addModelTreeListener(listener);
//Std listener only listen local event
//cloud.addModelListener(listener);
var node = factory.createNode();
node.setId("EC1");
//Trigger event ADD 
cloud.addNodes(node);
//Trigger event SET
node.setId("EC2_1");

console.log("Software found : "+cloud.findByPath("nodes[EC2_1]").getId());

/* Declare a new instance of cloud */
var newCloud = factory.createNode();
var applicator = new ModelTraceApplicator(newCloud);
/* Declare a new listener */
var listener2 = { elementChanged : function(event){
    var traces = event2trace.convert(event);
	//send trace to network or browser events
	//for remote synchronization
    applicator.applyTraceOnModel(traces);
}};
cloud.addModelTreeListener(listener2);

var newNode = factory.createNode();
newNode.setId("newNode")
cloud.addNodes(newNode);

console.log(cloud.findByPath("nodes[newNode]").getId());
console.log(newCloud.findByPath("nodes[newNode]").getId());






