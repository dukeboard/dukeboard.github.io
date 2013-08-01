var cloud = factory.createCloud();
var myAmazonEC2node = factory.createNode();
myAmazonEC2node.setId("EC2_0");
cloud.addNodes(myAmazonEC2node);
var myNginx = factory.createSoftware();
myNginx.setName("SRV0");
myAmazonEC2node.addSoftwares(myNginx);

var emptyCloud = factory.createCloud();

//Produce the trace sequence of MO -> M1
var diffSeq = compare.diff(emptyCloud,cloud);
oldConsole.log(diffSeq);
console.log(diffSeq.exportToString());

//Produce the trace sequence of MO inter M1
var interSeq = compare.inter(emptyCloud,cloud);


for(i=0;i < diffSeq.getTraces().$size;i++){
	//Print the comparison between M0 and M1
	console.log(diffSeq.getTraces()[i]);
}
//Merge M1 into M0
new ModelTraceApplicator(model0)
   .applyTraceOnModel(traces);
assert(model1.modelEquals(m0));
var model3 = factory.createCloud();
new ModelTraceApplicator(model3)
   .applyTraceOnModel(tracesInter);
//model3 is now the common part of M0 and M1