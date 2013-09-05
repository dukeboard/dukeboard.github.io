//Just define a deep cloud model
var cloud = factory.createCloud();
for(var nodeI=0;nodeI<5;nodeI++){
    var newNode = factory.createNode();
    newNode.id = "Node_"+nodeI;
    cloud.addNodes(newNode);
    for(var softI=0;softI<3;softI++){
       var newSoft = factory.createSoftware();
       newSoft.name = "Soft_"+nodeI+"_"+softI;
       newNode.addSoftwares(newSoft);
    }
}

/* Utility function */
String.prototype.repeat = function( num ){return new Array( num + 1 ).join(this);}

//Pretty print aspect on all nodes
Object.getPrototypeOf(factory.createNode()).prettyPrint = function prettyPrint(){
	console.log("--"+this.id+":"+this.metaClassName());
}
//Pretty print aspect on all softwares
Object.getPrototypeOf(factory.createSoftware()).prettyPrint = function prettyPrint(){
	console.log("----"+this.name+":"+this.metaClassName());
}

//Run deep visit
var childVisitor = new ModelVisitor();
Object.getPrototypeOf(childVisitor).visit = function(modelElem){
	modelElem.prettyPrint();
}
cloud.visit(childVisitor,true,true,false)

//draw it
draw(cloud,"Final result");
