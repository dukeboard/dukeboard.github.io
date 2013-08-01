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
//Pretty print aspect
function prettyPrint(indice){
    var myIndice = indice;
    var children = this.containedElementsList();
    if(myIndice === undefined){myIndice=0;}
    var pre = "";for(var j=0;j<myIndice;j++){pre = pre + "-"}
    console.log(pre+this.metaClassName())
    for(var i=0;i<children.$size;i++){
         var child = children.get(i);
         if(child.prettyPrint === undefined){
             child.prettyPrint = prettyPrint;
         }  
         child.prettyPrint(myIndice+1);
    }
}
//Apply aspect on heap
cloud.prettyPrint = prettyPrint;
//Run pretty print
cloud.prettyPrint();
