var cloud = factory.createCloud();
var myAmazonEC2node = factory.createNode();
myAmazonEC2node.id = "EC2_0";
cloud.addNodes(myAmazonEC2node);
var myNginx = factory.createSoftware();
myNginx.name = "SRV0";
myAmazonEC2node.addSoftwares(myNginx);

draw(cloud,"Original");

//save in JSON
var savedModel = saver.serialize(cloud);
console.log(savedModel);

//Load from JSON and take first package (only one in this model)
var cloudLoaded = loader.loadModelFromString(savedModel).get(0);
//Ensure integrity
console.log(cloudLoaded.findNodesByID("EC2_0"));

//Clone the entire model
var clonedModel = cloner.clone(cloudLoaded);
console.log(cloudLoaded);

draw(clonedModel,"First clone");

//Clone to a readonly structure
var clonedModel2 = cloner.clone(cloud,true);

//Only clone a part of model, share the first node
clonedModel.nodes.get(0).setRecursiveReadOnly();
var clonedModel3 = cloner.cloneMutableOnly(clonedModel);

//verify the integrity
console.log("Software found : "+clonedModel3.findByPath("nodes[EC2_0]/softwares[SRV0]").name);

draw(clonedModel3,"Partial clone");


//save into XMI format
var savedModel = xmiSaver.serialize(cloud);
//print it
console.log(savedModel);
//reload from XMI stream
var reloadCloud = xmiLoader.loadModelFromString(savedModel).get(0);

draw(reloadCloud,"Reload from XMI");

