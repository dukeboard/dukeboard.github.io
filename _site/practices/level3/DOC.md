Make your own adaptation
---------------

This last practice, aims at make you confident at writing your own elastic system. It require KevScript skills `(levek2)` and a working compilation tools chain `(level1)`.

### Objectives

The main objective of this practice is to learn you to create reactive adaptation system. A reactive system is caracterized by adaptations, self triggered by events. In other word it means  that adaptation strategy must be encapsulate into your components. The overall goal of this practice is to create an elastic manager for Web servers.

### Setting up your environment

Needed: 

* Kevoree Runtime


Step 1 Breakdown alone component
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

Step 2 WebServer Scaler
-----------------------

