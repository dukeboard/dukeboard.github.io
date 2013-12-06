KevScript and Dynamic Adaptations
---------------

### Objectives
In this practice, you’ll work with the model of the application, at runtime. You’ll modify it, at runtime, do add components; and you’ll navigate through the model in order to get statistics.   
We will then use a kevoree script to create a model, and then, deploy this model on a runtime.

### Setting up your environment
Download from the FSTC-Moodle, the zip file of Practice C containing the source code.
Open the project in IntelliJ. (Launch IntelliJ, Open Project, and select the pom.xml file in the folder).   
For this practice, you’ll have two components, two frames, and a data struc- ture. Each component creates an instance of its corresponding JFrame and make it visible at start.
The StatFrame should display statistical information about the system, but doesn’t work yet. The CommandFrame will be used to execute kev script commands that will update the model.
To ease your work, you can launch a runtime with pre-configured component instances by running ”mvn kev:run” or, in IntelliJ, clicking on plugins / kev / kev:run. This action will just use a Kevoree Runner plugin to launch a blanck runtime, and then execute the kevscript located in src/main/kevs. You can get help for KevScript on the Github Wiki of Kevoree:https: //github.com/dukeboard/kevoree/wiki/Getting-Started-KevScript


Modify the model
---------------
You first have to complete the //TODO line 43 of the CommandFrame class. This TODO is located in the actionPerformed method of the listener of one button, which will be called each time the button will be pressed. In this method, you have to make use of a KevScriptEngine to execute a pre-defined kevScript localy. This script have to deploy a chat application (2 consoles, 2 channels, 4 bindings).   
To simplify the tunning of your kevScript, open a Kevoree Editor. You can get help from the KevScript editor.


Do something on model updates
--------------
Each time the local model is updated, the runtime informs any interested part by mean of a listener mechanism.    
First, you have to make the StatComponent implement the ModelListener interface from the Kevoree API. Then, you have to look for the ModelHan- dlerService from the runtime, in order to register the component instance as a model listener.    
Finally, each time the model is updated, you have to create a new Stat- sRecord and fill it up with data collected from the new model deployed.


The second button
---------------
You mission now is too complete the second button listener. On a click
on the second button, the kevScript to execute is the one typed in the JTextField.
The result of the execution has to be displayed in a JOptionPane.messageDialog.


If you have time
---------------
Create a loop that goes through the model and prints out the component instances names , their type and their ports connected and the channel name the port is connected to.