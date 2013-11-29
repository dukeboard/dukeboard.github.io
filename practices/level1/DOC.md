Make your own Components
---------------

### ObjectivesThis practice aims at making you familiar with the Kevoree compilation chain and the KevScript engine. To this end, you will make use of the Kevoree Maven plugin to compile a sample component.

### Setting up your environment
First of all, you need to have a `JRE 1.6` at least, [Apache Maven 3](http://maven.apache.org/download.cgi) installed and your favourite Environment of Development for Java. We would suggest using [IntelliJ](http://www.jetbrains.com/idea/download/index.html) or [NetBeans](https://netbeans.org/downloads/index.html).    
Then browse to the [Kevoree Download Section](http://www.kevoree.org/download "Title") and download the last stable version of the Project Sample. Unzip the file in a convenient place (avoid spaces in the path). You may have to update the version of Kevoree used by the sample. To do so, open the pom.xml file located at the root of the sample project folder in a text editor. Replace the value of the `<version>` tag by the current release version number of Kevoree you are using.

> [Sample Project >](http://kevoree.org/sample.zip)


Compile with Maven
---------------
Check your Internet connection is on. On its first launch, Maven may need to download several plugins and artifacts from the Internet. It looks like it downloads the entire world... that’s true, but don’t worry, this world is finite,.. more or less.   Open a terminal, cd into the unzipped folder, and launch the installation of the artifact on the local repository of the system: mvn install. On the first launch, it may take up to 3 minutes (according to the load of the network). The mvn install command first executes the Kevoree Annotation Plugin. Basically, this plugin (1)extracts models of components from their source code and (2) generates some classes necessary for the runtime (mostly proxy classes). Then, the code is compiled and packaged in a Jar.The outcome of this command can be found under the target folder created in the same folder as the pom file.   In this folder, you can find the generated classes, the model extracted from your components (generated-sources/kevoree/KEV-INF/lib.kev). Both the model and compiled classes has been packaged in the Jar file at the root of the target folder.   Also a copy of this Jar has been placed in your local Maven repository (usually user.home/.m2/repository).


What did we do?
---------------

Now it is time to go a bit deeper in the code.   Open IntelliJ :-). Then File / OpenProject and select the POM file in the sample project folder.

### The components

Have a look in the src/main/java folder. Here is the code of the component we just compiled. As you can imagine, these components implements a Pro- ducer/Consumer example. The HelloProducerThread is a utility class that produces HelloWorld messages regularly. The two components (in Kevoree terms) are those called *Component.   Open the consumer. This rather simple component just displays on the con- sole what it receives on the ”consume” port.   Open the producer. This slightly more complex component creates a Hel- loProducer thread on start, and registers a listener (Observer pattern). Each time a message is produced, the listener is called, and a message is sent through the ”produce” outputPort. Also, notice the delay between two messages, set by a property of the component.

### The POM

Open now the pom.xml file. This file is the configuration file for Maven executions.At top, the Identity section provides information about the group, unique name, display name and version of the artifact.   Then, the Dependencies section lists the dependencies of the project. Maven will first check that all dependencies are available in the good ver- sion before each execution. If a dependency is missing, it uses both default and specific maven repositories, available on internet, to collect the required dependencies.In the dependencies of this project, you can notice the Kevoree framework (for component creation) and the Kevoree Annotation API (for component description).   The Build section specify which plugins must be executed at which phase of the compilation process. In the list, one can notice the Kevoree Annotation plugin. This plugin registers to the ”generate” goal of the maven process, and is responsible for extracting the Kevoree components’ model and generates some elements for the runtime. Then the maven-compiler- plugin compiles the Java files of the components (and siblings) as long as the generated files.


Continuous Design
-----------------
Ok, let deploy an instance of each component (producer and consumer) on a runtime.
### Initial deploymentShould you have any editor or runtime running, please close all of them. Start a runtime; start an Editor; open model from node.   Now we need to import in the library the components we just created. In the Editor menu, Model / Open Library an select the Jar file just created by the maven compilation (in the target folder). Connect the two components (you may need the JavaSE component library) and deploy on the runtime. See what append.
### Let make it speak French :-)Go back to IntelliJ, open the HelloProducerThread and change ”Hello time” by ”Bonjour numero”. Now that the thread speaks French, let compile the component again.    On the right hand side of IntelliJ you should have a ”Maven Project” tab. Open it, open the current project, open the lifecycle, and clic ”Install”. This should be quite rapid. This command will compile and update the binaries of the components. We then have to inform the runtime that a new version of the components are available.   Go back in the Kevoree Editor, clic on the node, select the ”Automerge” checkbox at the bottom and hit ”Push”. See the runtime reaction. :-)

Do It Yourself
---------------


I now want you to create two components. You can do it in the same project (tooooo easy) or create a new project from scratch (yeah !... you can still get inspired by the sample project).    The first will display a JFrame with a unique button. By hitting the button, the component will send a message through a port. When this component stops, the frame should disappear. Also, a click on the cross of the window should do nothing.    The second component has only one InputPort, and just shows up a Mes- sageDialog (JOptionPane) each time it receives something.

