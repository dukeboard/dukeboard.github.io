/* KMF Cloud metamodel Playground */
/* Select your snippet on TOP */
/* Modify and run it */
/* By default these variable are initialize : */
/* saver : JSONSaver
   loader : JSONLoader
   cloner : ModelCLoner
   factory : Cloud Factory
   ActionType : Event and Trace types
*/

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
draw(cloud,"Final result");
