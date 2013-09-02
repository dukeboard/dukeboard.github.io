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

//Pretty print aspect on all nodes
factory.createNode().__proto__.prettyPrint = function prettyPrint(){
	console.log("--"+this.getId()+":"+this.metaClassName());
}
//Pretty print aspect on all softwares
factory.createSoftware().__proto__.prettyPrint = function prettyPrint(){
	console.log("----"+this.getName()+":"+this.metaClassName());
}

//Run deep visit
var childVisitor = new ModelVisitor();
childVisitor.visit = function(modelElem){
	modelElem.prettyPrint();
}
cloud.visit(childVisitor,true,true,false)

//draw it
draw(cloud,"Final result");
