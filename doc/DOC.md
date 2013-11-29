Kevoree
=======

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

The Annotation API is made to provide a simple and flexible way to decorate your existing code to declare it as a component/a channel/a node/a group.

* `add` adds a new instance of Component, Node, Channel or Group.
```
add <component_name>@<node_name> : ComponentType
add <node_name> : <node_type>
```

* `remove`
* `move`
* `set`


### The Kevoree Maven Plugin


Kevoree Script (aka KevScript)
---------------
KevScript is a scripting language developed to simplify the authoring of models at design and run-time.

### How to script
1. First, write your adaptation script. Describe the modifications you want to operate on the model in the editor on of the running system.

1. Then 


### KevScript Commands





Cloud Management with Kevoree
---------------








