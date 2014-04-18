Polymer Framework
=======
# Introduction
Multi-objective optimization is applied to several software applications domains to solve problems in which solutions have to achieve trade-offs between conflicting objectives.
Cloud infrastructure management leaverages multi-objective optimization to solve for example the trade-offs between cost and performance.
Such problems are complex in terms of data representation and in terms of problem parameters encoding. 
The polymer framework builds an optimization layer on the top of your models to give you a support for runtime optimization.

#  Polymer & Models Optimization Support
To design a specific domain, people rely on modeling to represent the different concepts that are pertinent for a given domain.
Models@runtime enable to reduce the software complexity by providing a layer that permits to represent the system while it is in a running state. Polymer propones an optimization layer on the top of models to optimize systems while they are in a running state.
We build KMF framework, to have a efficient modeling layer for runtime usage.
The Polymer framework is built upon KMF framework and aims at achieving optimization on any KMF compliant model, expressed in MOF concepts.
Polymer supports current MOEA (Multi-objective Evolutionary Algorithms), and proposes a new hyper-heuristic that works on top of MOEA for runtime concerns.
> Polymer framework is dedicated to perform multi-objective optimization on top of MOF compliant models.

# Optimization Constraints and run.time constraints 
# Basic Concepts
## MOEA: Multiobjective Evolutionary Algorithms (MOEAs)
Multi-objective evolutionary algorithm (MOEA) are driven by elitism rules that favor the survival of strongest species in analogy to natural selection. 
Applied to software engineering, species are candidate solutions to complex optimization problem, these solutions constitute what is called a generation.
MOEA are based on an iterative search in which a set of individuals is selected and mutated in each iteration to constitute a new generation.
MOEA algorithms leverage an evolution principle based on Darwinian rules that try to derive from an initial population of solution, solutions combining acceptable trade-offs between objectives. 
##  Population
An evolutionary algorithm maintains a set of candidate solutions called a population. 
##  Fitness Functions
Fitness functions are used to evaluate solutions to solve a specific optimization problem, in analogy 
to natural selection where species qualities are evaluated according to their surrounding context. 
##  Operators
Genetic operators are used to emulate natural mutation in order to generate a new generation composed of mutated solutions.
We distinguish between 3 genetic operators:
###  Mutation Operators
Mutation operators introduce small changes with a small probability to preserve the population diversity 
###  Crossover Operators
Crossover operators create new individuals by genetic recombination.
###  Selection Operators
Selection operators choose an individual from the current generation’s population for inclusion in the next generation’s population. 
##  SPUTNIK
Hyper-heuristics are self-tuning heuristics that are based on parameters adaptation during optimization processing. 
In general, hyper-heuristics introduce modifications on the algorithm itself, in order to improve its efficiency to handle a specific purpose.
Sputnik hyper-heuristic leverages a continuous ranking of operators according to their impact on fitness functions to smartly select dynamically the mutation operators according to the problem to solve.
We focus on performance as a key factor for runtime usage to reach faster acceptable trade-offs while saving computation time and generation cycles. For instance, the acceleration Sputnik provides is useful for adaptive systems when a solution/reaction has to be found in a short time.
# Polymer Configuration
The following steps show how to configure a Polymer engine.
##  Creating a model
First, you need to create your model. The model is simply a presentation of a real system.
The example shown in class *CloudPopulationFactory* is an example of model creation that represents a cloud infrastructure. This model contains a population of size n where each individual represents a model that contains 50 nodes. Each node contains a web component.
***************
```
public class CloudPopulationFactory implements PopulationFactory<Cloud> {
    @Override
    public List<Cloud> createPopulation() {
        ArrayList<Cloud> populations = new ArrayList<Cloud>();
        for (int i = 0; i < n; i++) {
            Cloud cloud = cloudfactory.createCloud();
            for (int j = 0; j < 50; j++) {
            VirtualNode myAmazonEC2node = cloudfactory.createAmazon();
            VirtualNode myRackspacenode = cloudfactory.createRackspace();
            Software web = cloudfactory.createSoftware();
            web.setName("web");            
            web.setLatency(100.0);            
            myAmazonEC2node.setId("EC2_"+j);
            myAmazonEC2node.setPricePerHour(10.0);
            myAmazonEC2node.addSoftwares(web);
            cloud.addNodes(myAmazonEC2node);  
            myRackspacenode.setId("Rack_"+j);
            myRackspacenode.setPricePerHour(5.0);
            myRackspacenode.addSoftwares(web);
            cloud.addNodes(myRackspacenode);          
            }
            populations.add(cloud);
        }
        return populations;
    }
}
```  

##  Configuring a Fitness Function

After creating your model, you need to create your fitness functions.
Each fitness function has to implement the interface *FitnessFunction* which defines the *evalute* method.
The fitness function shown in the example of the class *CloudCostFitness* presents a cost fitness function that evaluates the 
cost of model that contains Rackspace ou Amazon nodes based on the price per hour of each node. 
***************
```
public class CloudCostFitness implements FitnessFunction<Cloud> {
    @Override
    public double evaluate(Cloud model, GenerationContext<Cloud> cloudGenerationContext) {
        double pres = 0;
        for(VirtualNode node : model.getNodes())
        {
            if ((node instanceof  Amazon) || (node instanceof  Rackspace)  )
            {
                //System.out.println(node.getId());
                pres=pres + node.getPricePerHour();
            }
        }
        return ((pres / (model.getNodes().size()*10)));
    }
   }   
``` 
##  Configuring an operator
This step consists in defining the mutation operators that are needed to create new individuals.
Each mutation operator implements the interface *CloudCostFitness* which defines the *mutate* method.
The following example shows an example of a mutation operator that takes as input a model and adds a cloud node.
The operator sets the price and the id for the new added node.
***************
```
public class AddNodeMutator implements <Cloud> {
    private Random rand = new Random();
    private DefaultCloudFactory cloudfactory = new DefaultCloudFactory();
    @Override
    public List<MutationVariable> enumerateVariables(Cloud cloud) {
    return Arrays.asList((MutationVariable) new QueryVar("target", "nodes[*]"));
    }
    @Override
    public void mutate(Cloud parent, MutationParameters mutationParameters) {
        int i = rand.nextInt(1);
        if (i==0)
        {
        VirtualNode node = cloudfactory.createAmazon();
        node.setId("EC2_"+Math.abs(rand.nextInt()));
        node.setPricePerHour(10.0);
        parent.addNodes(node);
        }
        else
        {
        VirtualNode node = cloudfactory.createRackspace();
        node.setId("Rack_"+Math.abs(rand.nextInt()));
        node.setPricePerHour(5.0);
        parent.addNodes(node);}
    }
}
``` 
##  MOEA Algorithm Setup
The following section demonstrates how to configure an MOEA resolution engine.
###  Declaring a new resolution engine
We start by creating an instance of the genetic engine.  GeneticEngine is a generic type that is parameterized over different types. The example that we take in this tutorial is the type *Cloud*.
***************
```
  GeneticEngine<Cloud> engine = new GeneticEngine<Cloud>();
  ```
###  Adding an operator
We configure the engine with the different operators using the method *addOperator*.

***************
```
  engine.addOperator(new AddNodeMutator());
  ```

###  Adding a fitness function
The engine is configured with our defined fitness functions:

***************
```
   engine.addFitnessFuntion(new CloudCostFitness());
   ```

###  Setting a mutation strategy
We define the mutation strategy supported by our engine.
Polymer supports the following mutation selection strategies: the *random muation selection strategy*, *SPUTNIK_ELITIST selection strategy*. While the *random muation selection strategy* uses a random selection during the search process, 
*SPUTNIK_ELITIST selection strategy* selects operators based on their effect to improve fitness function scores during the search process.  
  ***************
```
    engine.setMutationSelectionStrategy(MutationSelectionStrategy.SPUTNIK_ELITIST);
  ```

###  Setting a generation number

The setMaxGeneration method defines the generation number.   
  ***************
```
     engine.setMaxGeneration(300);
```


###  Setting a population size
 The setPopulationFactory method defines the population size. 
   ***************
```    
 engine.setPopulationFactory(new CloudPopulationFactory().setSize(10));
  ```
  
###  Setting an MOEA Algorithm             
The setAlgorithm method defines the algorithm considered. 

Polymer framework supports the following algorithms: NSGA II, NSGA II with Hypervolume, epsilon-MOEA
  
 ***************
 ```    
 engine.setAlgorithm(GeneticAlgorithm.HypervolumeMOEA);
  ```
             
### Launching the resolution
The solve method launches the resolution.

 ***************
 ```    
 List<Solution<Cloud>> result = engine.solve();
  ```
  

### Putting All together

Once all the parameters that are needed for the resolution are configured, you might have a resolution engine that looks like the following code:

 ***************
 ```    
 GeneticEngine<Cloud> engine = new GeneticEngine<Cloud>(); 
        /*Setting the MOEA algorithm used for the resolution*/
        engine.setAlgorithm(GeneticAlgorithm.EpsilonCrowdingNSGII);
         /*Setting the different operators*/
        engine.addOperator(new AddNodeMutator());
        engine.addOperator(new RemoveNodeMutator());
        engine.addOperator(new AddSoftwareMutator());
         engine.addOperator(new CloneNodeMutator());
        engine.addOperator(new RemoveSoftwareMutator());
        /*Setting the different fitness functions*/
        engine.addFitnessFuntion(new CloudCostFitness());
        engine.addFitnessFuntion(new CloudSimilarityFitness());
        engine.addFitnessFuntion(new CloudLatencyFitness());
        engine.addFitnessFuntion(new CloudRedundancyFitness());
        /*Setting the mutation strategy*/
        engine.setMutationSelectionStrategy(MutationSelectionStrategy.SPUTNIK_ELITIST);
        /*Setting the generation number*/
        engine.setMaxGeneration(300);
        /*Setting the population size*/
        engine.setPopulationFactory(new CloudPopulationFactory().setSize(10));       
  ```
  
# Charts Generation

Polymer enables users to generate output results into CSV files or html files.
To facilitate results usage, we have defined the following metamodel to ease exploitation of results.
The metamodel for is shown in the Figure below.
To initiate the execution model to retrieve results, we use the method *getExecutionModel()*

```   
     ExecutionModel model = engine.getExecutionModel();
```


To generate CSV file (named results for instance), we add the following methods:


```   
     ExecutionModelExporter.instance$.exportMetrics(model,new File("results"));
```    


To be able to visualize the results using html files, we add the following lines:

```   
      Server.instance$.serveExecutionModel(model);
```


> [Figure 1: Execution Model metamodel](id:metamodel)
> <img src="metamodel.png" width="100%"/>



