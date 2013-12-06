Make your own Components
---------------

### Objectives
This practice aims at making you familiar with the Kevoree compilation chain and the KevScript engine. To this end, you will make use of the Kevoree Maven plugin to compile a sample component.

### Setting up your environment
First of all, you need to have a `JRE 1.6` at least.    
Make sure you have a running installation of [Apache Maven 3](http://maven.apache.org/download.cgi) installed. Check it out by opening a console and typing `mvn -version`. Otherwise follow the Apache instructions.    
For the Java development, we would suggest using [IntelliJ](http://www.jetbrains.com/idea/download/index.html) or [NetBeans](https://netbeans.org/downloads/index.html), because Maven is well integrated.       
Then browse to the [Kevoree Samples Repository](https://github.com/kevoree/kevoree-samples/releases "Title") and download the last stable version of the Project Sample. Unzip the file in a convenient place (avoid spaces in the path). 

> [Apache Maven 3 >](http://maven.apache.org/download.cgi)    

> [Sample Project >](https://github.com/kevoree/kevoree-samples/releases)

Compile with Maven
---------------

Check your Internet connection is on. On its first launch, Maven may need to download several plugins and artifacts from the Internet. It looks like it downloads the entire world... that’s true, but don’t worry, this world is finite,.. more or less.   
Open a terminal, cd into the unzipped folder, and launch the installation of the artifact on the local repository of the system: mvn install.    
On the first launch, it may take up to 3 minutes (according to the load of the network). The mvn install command first executes the Kevoree Annotation Plugin. Basically, this plugin    
(1) extracts models of components from their source code and    
(2) generates some classes necessary for the runtime (mostly proxy classes). Then, the code is compiled and packaged in a Jar.
The outcome of this command can be found under the target folder created in the same folder as the pom file.   
In this folder, you can find the generated classes, the model extracted from your components (generated-sources/kevoree/KEV-INF/lib.kev). Both the model and compiled classes has been packaged in the Jar file at the root of the target folder.   
Also a copy of this Jar has been placed in your local Maven repository (usually user.home/.m2/repository).

>In a console   
***************
```
cd org.kevoree.library.java.producerconsumer
mvn install
```


What did we do?
---------------

Now it is time to go a bit deeper in the code.   
Open IntelliJ :-). Then File / OpenProject and select the POM file in the sample project folder.

### The components

Have a look in the `src/main/java` folder. Here is the code of the components we just compiled. As you can imagine, these components implement a Producer/Consumer example.   
The HelloProducerThread is a utility class that produces HelloWorld messages regularly. The two components (in Kevoree terms) are those called *Component*.   
Open the consumer. This rather simple component just displays on the console what it receives on the ”consumeHello” port (see the *consumeHello* method).   
Open the producer. This slightly more complex component creates a HelloProducer thread on start, and registers a listener (Observer pattern) (see *helloProduced* method). Each time a message is produced by the thread, the listener is called, and the message is sent through the ”helloProducedPort” outputPort. Also, notice the delay between two messages, set by a property of the component.

### The POM

Open now the pom.xml file. This file is the configuration file for Maven executions.
At top, the Identity section provides information about the group, unique name, display name and version of the artifact.   
In our sample, we inherit some of these information (groupId, version) from a *parent* artefact.    
This POM declares no specific *dependencies*, because all the libraries necessary for this project are inherited from the parent, mainly the Kevoree Annotation API (for component description) and probably a Logger.   
The Build section specify which plugins must be executed at which phase of the compilation process. The Kevoree Annotation plugin registers to the *prepare-package* phase of the maven process, and will execute its *generate* goal during this phase. This goal extracts the Kevoree components’ model and places it into a proper location for it to be embedded within the Jar file.


### Run it !
Launch a runtime, and open an editor.   
Open the model from the runtime you just launched, and add the *Channels* library.   
Import your components in the editor: `Model / Load Library` and select the Jar file that have been created in the *target* folder or the Sample Project.   
You should now see the Producer and Consumer components. Deploy one instance of each, and connect then together with a channel.   
Push to the node(runtime) and check out the console of the runtime.   
If you wanna play, you can change the delay of 'hello generation' on the producer.



Port with Callback
---------------

In the previous example, the producer do not require any answer from the consumers. Thus Messge-Oriented communications (one-way Input-Output) is a good solution. However, some components may need to get an answer, a result from other components.    
In this case, you may use the mechanism of Callback. To illustrate this mechanism, checkout the Frame and Popup components.    
Basically, the frame displays a prompt line and a button. On click, what has been entered in the line is sent through the *textEntered* port, and a callback method is created to specify the actions to take when an answer is received.   
On its side, the Popup component will simply display the message received and ask for an answer.    

Deploy and instance of each and checkout their behavior.



Do It Yourself
---------------

Now, you have in hands all you need to make your own components.   
You know how to prepare your Maven project, you have examples of components, with input and output ports, and examples of calls with and without callbacks. By the way, you also have examples of how to create a frame, with a button, or a popup window.   

I now want you to create two components. You can do it in the same project (tooooo easy) or create a new project from scratch (yeah !... you can still get inspired by the sample project).    
On one side, I want a component that has a integer parameter called *num*. This component also displays a frame with a single button. On cllick this frame sends the value of *num* throug an output port, and waits for an answer to know if this number is positive or negative.    
On the other side, another component that answers *true* if the number is strictly positive, false otherwise. You can add a frame for that if you want.
