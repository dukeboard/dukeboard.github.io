//create a cloud
var cloud = factory.createCloud();
//create a node
var myAmazonEC2node = factory.createNode();
myAmazonEC2node.setId("EC2_0");
//add node to your cloud
cloud.addNodes(myAmazonEC2node);
//create a software
var myNginx = factory.createSoftware();
myNginx.setName("SRV0");
//attach the software to your new node
myAmazonEC2node.addSoftwares(myNginx);

console.log("Software found : "+cloud.findByPath("nodes[EC2_0]/softwares[SRV0]").getName());
console.log(saver.serialize(cloud));