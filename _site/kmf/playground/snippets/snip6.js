var cloud = factory.createCloud();
var myAmazonEC2node = factory.createNode();
myAmazonEC2node.id  = "EC2_0";
cloud.addNodes(myAmazonEC2node);
var myNginx = factory.createSoftware();
myNginx.name = "SRV0";
myAmazonEC2node.addSoftwares(myNginx);

draw(cloud,"Original");

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
node.id = "EC1";
//Trigger event ADD 
cloud.addNodes(node);
//Trigger event SET
node.id = "EC2_1";

draw(cloud,"After Add");

console.log("Software found : "+cloud.findByPath("nodes[EC2_1]").id);

/* Declare a new instance of cloud */
var newCloud = factory.createCloud();
/* Declare a new listener */
var listener2 = { elementChanged : function(event){
    var traces = event2trace.convert(event);
	//send trace to network or browser events
	//for remote synchronization
    traces.applyOn(newCloud);
}};
cloud.addModelTreeListener(listener2);

var newNode = factory.createNode();
newNode.id = "newNode";
cloud.addNodes(newNode);

console.log(cloud.findByPath("nodes[newNode]").id);
console.log(newCloud.findByPath("nodes[newNode]").id);

draw(cloud,"Original+Added node");
draw(newCloud,"Last event sync");






