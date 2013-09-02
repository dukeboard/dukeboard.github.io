/* KMF Cloud metamodel Playground */
/* Select your snippet on TOP */
/* Modify and run it */
/* By default these variable are initialize : */
/* saver : JSONSaver
   loader : JSONLoader
   cloner : ModelCLoner
   factory : Cloud Factory
   ActionType : Event and Trace types
   draw(model,"description") function for model vizu (playground internal)
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


//declare a simple visitor to print the metaClassName
var childVisitor = new ModelVisitor();
childVisitor.visit = function(modelElem){
	console.log(modelElem.metaClassName());
}

//run the visit
cloud.visit(childVisitor,true,true,false)
//Draw the model in the right panel (severals call stack results)
draw(cloud,"Final result");
