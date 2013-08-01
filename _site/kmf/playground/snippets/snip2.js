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

//Save in human readable JSON
var savedModel = jsonSaver.serialize(myCloud);
console.log(jsonSaver.serialize(myCloud));

//Load from JSON
var cloudLoaded = jsonLoader.loadFromString(savedModel);

//Clone the entire model
var clonedModel = cloner.clone(cloudLoaded);

//Clone to a readonly structure
var clonedModel2 = cloner.clone(cloud,true);

//Only clone a part of model, share the first node
clonedModel.getNodes().get(0).setRecursiveReadOnly();
var clonedModel3 = cloner.partialClone(clonedModel);

//verify the integrity
console.log("Software found : "+clonedModel3.findByPath("nodes[EC2_0]/softwares[SRV0]").getName());


