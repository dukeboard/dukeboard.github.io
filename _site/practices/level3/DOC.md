Make your own adaptation
---------------

This last practice, aims at make you confident at writing your own elastic system. It require KevScript skills `(levek2)` and a working compilation tools chain `(level1)`.

### Objectives

The main objective of this practice is to learn you to create reactive adaptation system. A reactive system is caracterized by adaptations, self triggered by events. In other word it means  that adaptation strategy must be encapsulate into your components. The overall goal of this practice is to create an elastic manager for Web servers and Kevoree Cloud nodes.

### Setting up your environment

Step 1 Cloud nodes
---------------
This first section will allows to be confident with node encapsulation of Kevoree.
First of all, as level 0 and 2 start the runtime of your choice. Then open an editor on it.

* Load the model from your node : `File / Load model from node`
* Load the Cloud Web library through : `Model / Load Library / Cloud / org.kevoree.library.cloud.web`
* Drag and drop a WebFrontend component in your node
* Deploy the new model on your node : `click on node` then `click button push`

Your model should look like the following picture. 

> [Figure 1: The Kevoree Cloud web frontend](id:fig-runtime)
> <img src="figures/cloudFrontend.png" width="100%"/>

You should see a message : `Update sucessfully completed` in your runtime. 


>Open a browser, a type the following url  
***************
```
http://localhost:8080
```

***Add a child node from the web interface***
We can now observe a web version of the model. The add default button allows you to quicly add a child node. Because JavaNode is started by default, the child node will run in a separated virtual machine.

After adding a new node you can re do the step open from node on editor and obersve that the current model reflect the addition of the node. 

***Add a child node from KevScript***

Similarly you can now modify the model from the editor, open the KevScript panel and type 

```
add node0.newKChild : JavaNode
```

or simply drag and drop a JavaNode inside the node0 and add a HelloJava component as example.

Then execute and push your model to the platform, you will observe the creation of a node a the start of the hosted component.

Step 2
---------------In the next section, you will have to write your own component with trigger an adaptation. The idea is to create a BreakdownAlone component which will supress himself after a time. In order to realize this step, you should take the same developpement environement than the level1.
In addition you will find the Kevoree-samples github project a starting project named Breakdown.
* Open the project in your IDE :-)* Open BreakdownAlone Java class* Add annotation and start and stop methods
* Fork a thread in the start method to delay an action
* In the action put a code to self-uninstall the component, it should like that ...

```java
@KevoreeInject
ModelService modelService;
@KevoreeInject
Context context;
@KevoreeInject
KevScriptService kevScriptService;
	@Override
    public void run() {
        try {
            Log.info("i'm alone... kill myself...");
            ModelCloner cloner = new DefaultModelCloner();
            ContainerRoot clonedModel = cloner.clone(modelService.getCurrentModel().getModel());
            kevScriptService.execute("remove " + context.getNodeName() + "." + context.getInstanceName(), clonedModel);
            modelService.update(clonedModel, null);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
```

* Open the main.kevs file `src/main/kevs/main.kevs` , you will find the default boot configuration.

>Open a terminal, and type the following command to start a new 
***************
```
mvn clean install
mvn kev:run
```
You should see a TODO in the terminal, this mean that your have to complete the code.
You can then redo mvn install en kev:run.

The kev:run is simply a maven plugin which allows you to be bootstrap on a kevScript file. This is more easier for developement phase.

####                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           Test the correction