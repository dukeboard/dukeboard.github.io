//create a cloud
var cloud = factory.createCloud();
//create a node
var myAmazonEC2node = factory.createNode();
myAmazonEC2node.setID("EC2_0");
//add node to your cloud
cloud.addNode(myAmazonEC2node);
//create a software
var myNginx = factory.createSoftware();
myNginx.setID("SRV0");
//attach the software to your new node
myAmazonEC2node.addNode(myNginx);


for(i=0;i<20;i++){
	console.log("Hi");
}