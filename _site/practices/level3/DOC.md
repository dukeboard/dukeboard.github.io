Make your own adaptation
---------------

### Objectives

A reactive system is caracterized by adaptations, self triggered by internal or external events. In other words, it means that adaptation strategy must be encapsulate into your deployed components. The overall goal of this practice is to create an elastic manager for Web servers. Along this practice, you will learn to write your own elastic system only by manipulate models. KevScript skills are required, the documentation `http://kevoree.org/doc` can help you. In addition you should have a working compilation toolchain like described in the `(level1)`.

### Setting up your environment

* Kevoree Runtime (of your choice)
* Working toolchain (Maven and IDE)
* Clone of the Kevoree-Samples repository (github / Kevoree organization)

Step 1 Breakdown alone component
---------------
In the next section, you will have to write your own component with trigger himself adaptation. The idea is to create a BreakdownAlone component which will supress himself after a time if no message is arrived in his input port. In order to realize this step, you should take the same developpement environement than the level1. In addition you will find the Kevoree-samples github project a starting project named Breakdown.First of all open the Breakdown sample project.

>Open a terminal, and type the following command to compile the current version and bootstrap on it (`main.kevs` file)
***************
```
mvn clean install
mvn kev:run
```If everything is working well, you should see : `00:01 INFO: A friend! delay my suppression`
That because current the squeletton of the project is initialized, but not action is taken, in addition we use a ticker to keep alive the component

> Open a Kevoree editor and load the model from the node : `File > load from node` leave by default `localhost:9000`. So current if you look carefully in the property initialized by the `main.kevs` file, currently the ticker send data every `1s` and the composant is breakdown is no data arrive on is port every `2s`. So everything is fine, now change the time value to `3000` and push the model to the platform. 

Now you should observe : `Feeling alone, should suppress myself...
I'm breakdown`. That's great, the event is trigger, but no action is taken.

Let's add this action
* Open the project in your IDE* Open BreakdownAlone Java class* In the action put a code to self-uninstall the component, it should like that ...
You can use ModelService to lokkup your name and you current node name. In addition the kevScript engine allows to modify a model. Juste a Kevoree specificities, models given by the getCurrentModel are in read only, to modify it before perform a clone like below:

```java
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

>Each time you want to test your code, juste use the following commands:
***************
```
mvn clean install
mvn kev:run
```
The kev:run is simply a maven plugin which allows you to be bootstrap on a kevScript file. This is more easier for developement phase.

At the end of this step, you should have a component, which uninstall himself after printing the message. Verify that everything has worked by refresh the model in the editor after the supression of the breakdown component.

Step 2 WebServer Scaler
-----------------------

#### Understand web <=> component Kevoree mapping



#### Web elastic manager

In order to reply to an increasing load, web instratructure commonly use a load balancer as front end and several web server has back-ends. Due to a various load the number of needed backend to ensure a satisfactory quality of service will vary. In this step we will build a component which aims at scaling (add and remove back-ends).

`WARNING :` the load balancer component only work on Nix and OSX operating system, for windows user, please commend the corresponding line in `main.kevs` : `add node0.lb : HAProxy` , you will not have the load balancer page, but still you can execute the scaler and observe result in the console.

* First of all open in your IDE the sample project scaler.
* We can find the sample project a `main.kevs` which correspond to the initial model
* We can find as well a `Scaler.java` which has to be fixed. In order to perform the fix, localize the two `TODO` and replace by a call of the kevScript engine with a `add hostName.replaceByComponentName : NanoBlogServer` and `remove hostName.replaceByComponentName`.
* Compile the code through `mvn clean install`
* Run the sample through `mvn kev:run`
* Open a browser to `http://localhost:8070` (login/mdp : kev/kev). Now you can access to the load balancer web admin page, please notice the list of backend with exactelly correspond to the number of BlogServer component deployed.
* Open a browser an naviguate `http://localhost:8080` , you normally oberve that the load balancer dispatch you to one or other BlogServer.
* Open the model from the node `File / Open from node`
* Modify the parameter of the scaler
* Refresh the page of the Load balancer






