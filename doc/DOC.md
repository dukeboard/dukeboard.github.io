Getting started
---------------

### Kevoree and Models
Kevoree makes an intensive use of Models. Physically, models are structured files in JSON or XMI format, used to carry the description of a component, an entire library, the location where the binary files can be found and/or the description of a software system to deploy with all the component instances and their connections. 

### The Kevoree Editor

The Kevoree Editor provides a model authoring tool specialized for Kevoree Models.
It offers a Graphical Editor in which modifications on models are made principally using drag&drop mechanisms.
It also embeds a Kevoree Scripting engine developed to simplify the modifications.

### Kevoree Runtimes
Kevoree offers several runtime environments. Among others, the Java runtime of Kevoree wraps a Java Virtual Machine with all the necessary features to handle the deployment of models received from editors or local components.


 
Making a component
---------------

### Process

1. Create the business code of the component. Make sure it works by simply adding a main, that creates, starts and stops your component.
2. Decorate your code with the Kevoree Annotations to specify that your class is a Kevoree Component, which are the Input ports, Required services, the Output ports, the Provided services, the parameters of your component and the services your require from the runtime.
3. Compile your code using the Kevoree Annotaion plugin, then the code compiler dependent of your implementation language.
4. Enjoy !


### The Annotation API

The Annotation API is made to provide a simple and flexible way to decorate your existing code to declare it as a `component`, `channel`, `node` or `group`.

#### Types
**Components**   
New kind of Component are declared by placing a `@ComponentType` annotation on their implementation class.    
**Channels**   
The channels are in charge of the transpot of messages and objects, from output to input ports. Each channel type has a different behavior (sync, async, parallel, sequential, first-answer, etc.) and is declared by putting a `@ChannelType` on its implementation class.   
**Groups**   
The groups are responsible for the dispatch and synchronization of the models between several nodes. Just as the channels, they can have different dispatch and synchronization policies for each type. They are declared by putting a `@GroupType` annotation on their implementation class.   
**Nodes**   
The nodes support the deployment of components or sub-nodes, so that the runtime always conforms to the last consistent model a node received. They are declared by putting a `@NodeType` annotation on their implementation class.

>Java
*************

```
@ComponentType
public class HelloProducerComponent{...}

@ChannelType
public class AsyncBroadcast implements ChannelDispatch {...}

@GroupType
public class WebSocketGroup {...}

@NodeType
@Library(name = "Java")
public class JavaNode implements ModelListener, org.kevoree.api.NodeType {...}
```
>Kotlin
*************

```
public ComponentType class HelloProducerComponent{...}

public ChannelType class AsyncBroadcast implements ChannelDispatch {...}

public GroupType class WebSocketGroup {...}

public NodeType class JavaNode implements ModelListener, org.kevoree.api.NodeType {...}
```


#### Input Ports - Provided Methods

If you are used to Message-Oriented approaches, you just have to put a `@Input` annotation on the method you want to expose as an input port. If you are more familiar with Service-Oriented approaches, you will have to put a `@Provided` annotation on  each method you want to expose/offer.    
The port gets its name from the method name. The mapped methods have to declare a unique `Object`-typed parameter. In case this parameter is missing, the method will be called and any parameter from the caller will be dropped. In case the method has more than one parameter, an error will be triggered.    
In Kevoree, we have mixed the Message and Service oriented approaches. To this end, each call on a port can declare an optional `Callback` method. Any value returned from an `Input` or a `Provided` method will be forwarded to the caller and passed as parameter to the callback method it declared.

>Java
*************

```Java
@Input
public void sayHelloTo(Object msg) {...}

@Provides
public Boolean getTemp() {...}
```

>Kotlin
*************

``` Kotlin
public Input void sayHelloTo(Object msg) {...}

public Provides Boolean getTemp() {...}	```

#### Output Ports - Required Methods

If you are used to Message-Oriented approaches, you just have to put a `@Output` annotation on a field of the class that will host the port. This field has to be typed as `Port` from the Kevoree API. If you are more familiar with Service-Oriented approaches, you will have to put a `@Required` annotation on  each method you want to use.    
The port gets its name from the field name.    
In Kevoree, we have mixed the Message and Service oriented approaches. To this end, each call on a port can declare an optional `Callback` method. This method is called as soon as the execution of the call is completed. The parameter of the callback is the value of the return of the `Input / Provided` port connected.

>Java
*************

> **Without callback**   
 
```Java
@Output
private org.kevoree.api.Port helloProduced;

public void onHelloProduced(String greetingMessage) {
	helloProduced.call(greetingMessage);
}
```
> **With callback**    

```Java
@Required
private org.kevoree.api.Port userDecision;

public boolean askUser(String questionMessage) {
	userDecision(greetingMessage, new Callback() {
		public void run(Object result) {
        	return (Boolean)result;
        }
    });
}
```

#### Parameters

Parameters are sometimes useful to adapt the behavior of a piece of code. These parameter can be used to set the delay of a timeout, the name of a component, the color of a frame, etc.    
Kevoree only supports the `Param` annottaion on *Primitive* types and their boxing equivalent.


>Java
*************

```Java
@Param
String name;

@Param
int delay = 2000;
```

>Kotlin
*************

``` Kotlin
Param var name : String = "default" ;
```

#### Library  

The Library annotation makes it possible for you to organize the components you create into virtual Libraries. It has nothing to do with the deployment, the location of the binaries or the behavior of your component. It can be whatever you want.

>Java
*************

``` Java
@Library(name = "Java")
@NodeType
public class JavaNode implements ModelListener, org.kevoree.api.NodeType {...}
```
>Kotlin
*************

```kotlin
public ComponentType Library(name="Java") class HelloKotlin {...}
```



#### Kevoree services injection
Several services from the Kevoree runtime can be injected into a component, channel, group or node, on demand. To do so, just place a `KevoreeInject` annottaion on a variable typed by the servcie you need. The services available are:    
**ModelService**   
**BootstrapService**      
**KevScriptService**     
**Context**   
**ChannelContext**

>Java
*************

``` Java
@KevoreeInject
ChannelContext channelContext;
```

>Kotlin
*************

```kotlin
KevoreeInject ChannelContext channelContext;
```
    

#### Life Cycle
In Kevoree, Components, Channels, Groups and Nodes have a Life Cycle.   
Thus, the runtime must be able to  start, stop and update these elements when needed.    
Depending on these elements' implementation, it may sometimes be required to perform some actions when stoping, starting or updating them.
Life Cycle annotations are here to allow you to specify the methods to call on start, stop or update.
There is no constraint on the method you select for these operation.
<span class="warning-bloc"><span class="fa fa-exclamation-triangle fa-lg orange"></span> Be cautious about what you do in these methods, because you can freeze the entire runtime if you create a deadlock !</span>    
>Java
*************

``` Java
@Start
public void startComponent() {...}
    
@Stop
public void stopComponent() {...}
    
@Update
public void updateComponent() {...}
```
>Kotlin
*************

```kotlin
Start fun startComponent(){...}

Stop fun stopComponent(){...}

Update fun updateComponent(){...}
```

### The Kevoree Maven Plugin

The Kevoree Maven plugin is used to extract the Component-Model from the annotations placed in your code, and store it into a Kevoree Model packed along with the compiled class files.    
Also, for teh ease of use, the Kevoree Maven plugin ambeds a Kevoree runner. This runner launches a Kevoree runtime using a KevScript file. This file is supposed to be `src/main/resources/kevs/main.kevs` in the project. If otherwise, you can specify the location of the KevScript file you want to use in the configuration of the plugin.    
You can also specify the name of the node you want to launch.

```
<plugin>
	<groupId>org.kevoree.tools</groupId>
	<artifactId>org.kevoree.tools.mavenplugin</artifactId>
	<version>${kevoree.version}</version>
	<executions>
		<execution>
			<goals>
				<goal>generate</goal>
			</goals>
		</execution>
	</executions>
	<configuration>
		<nodename>MyNode</nodename>
		<model>src/main/kevs/main.kevs</model>
	</configuration>
</plugin>
```



Kevoree Script (aka KevScript)
---------------
KevScript is a scripting language developed to simplify the authoring of models at design and run-time.

### How to script
1. First, write your adaptation script. Describe the modifications you want to operate on the model in the editor on of the running system.

1. Then ask for its interpretation / application on models.


### KevScript Commands

**Comments**    

```
// this is a comment
// comments allow any characters ! \ù%*é=^``~&°.:!§,?/#çà][-|
```

**Repository**     
Adds a repository location for the resolution of binaries.
```
repo org.sonatype.org/foo/bar?a=b&c=d
repo http://oss.sonatype.org/content/repositories/releases
```

**Include**     
Imports a library of types in the model, makes the Types available.
```
include mvn:org.kevoree.library.javase:org.kevoree.library.javase.websocketgrp:2.0.5-SNAPSHOT
```

**Add**       
Adds a new instance of `Component`, `Node`, `Channel` or `Group`.       
<span class="warning-bloc"><span class="fa fa-exclamation-triangle fa-lg orange"></span> When adding an instance of component into your model, you have to specify the node instance it has to be deployed in, using the `@<nodeName>` synthax</span>
```
add <nodeName> : <NodeType>
add <groupName> : <GroupType>
add <channelName> : <ChannelType>
add <componentName>@<nodeName> : <ComponentType>

add node0, node1 : JavaSENode
add sync : HelloGroup
add comp0 : HelloWorld
add chan0 : HelloChannel
```

**Remove**   
Removes elements from the model.
```
remove node0, node1
remove sync
```

**Move**   
Moves one or several instances to another node. Instances can be of type `NodeTye` or `ComponentType`. The node the elements have to be moved to is always at the last position in the command.
```
move comp0 node0
move * node0
move *@node0 node1
move comp0, comp1 node1
```

**Set**   
Used to set parameters of instances.
```
set comp0 {foo="bar", baz='potato'}
set sync {forcePush="false"}, {port='8000'}@node0, {port='8001'}@node1
```
 
**Bind**   
Binds the port, or several ports, of a component instance to several channel instances. 
```
bind comp0.sendMsg chan0, chan1
```

**Unbind**   
Disconnects the port of a component from a channel.
```
unbind comp0.sendMsg chan1
unbind comp0.sendMsg *
```

**Attach**   
Attaches one or several node instances to a synchronization group. The group is always at the last position in the command.
```
attach node0 sync
attach node0, node1 sync
attach * sync
```

**Detach**   
Disconnects one or several node instances from a synchronization group. The group is always at the last position in the command.
```
detach node0 sync
detach node0, node1 sync
detach * sync
```

**Network**   
NOT IMPLEMENTED YET !
```
network node0 192.168.0.1
```
















Cloud Management with Kevoree
---------------








