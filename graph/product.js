const Graph = require('./graph.js').Graph;
const Node = require("../graph/graphNode.js").Node;
const Edge = require("../graph/graphEdge.js").Edge;

/**
 * Product Graph
 * @param {*} graph 
 */
function Product(graph1, graph2){
    this.graph1 = graph1;
    this.graph2 = graph2;
    let graph = new Graph();
    this.resultGraph = graph;
    this.chooseNodes();
    this.setTransitions(graph1);
    this.setTransitions(graph2);
    this.addTransitions()
    console.log(graph);
}

Product.prototype = Object.create(Object.prototype);
Product.prototype.constructor = Product;

/**
 * Adds nodes to result graph { Nodes Graph1 } x { Nodes Graph2 }
 */
Product.prototype.chooseNodes = function(){
    for(var i = 0; i < this.graph1.nodeSet.length; i++){
        let node1 = this.graph1.nodeSet[i];
        let name = node1.val;

        for(var j = 0; j < this.graph2.nodeSet.length; j++){
            let node2 = this.graph2.nodeSet[j];
            let newVal = [name, node2.val];
            
            let newNode;
            if(node1.acceptanceNode || node2.acceptanceNode)
                newNode = new Node(newVal,true);
            else newNode = new Node(newVal,false);

            this.resultGraph.addNode(newNode);

            if(node1.nodeEquals(node1,this.graph1.startNode) && node2.nodeEquals(node2, this.graph2.startNode))
                this.resultGraph.startNode = newNode;
    
         }
    }
}

Product.prototype.addTransitions = function(){

    for(var i = 0; i < this.resultGraph.nodeSet.length; i++){

        let node = this.resultGraph.nodeSet[i];
        let nameNode1 = node.val[0];
        console.log("Node 1: " + nameNode1);
        let nameNode2 = node.val[1];
        console.log("Node 2: " + nameNode2);
        
        let transitionsArray = this.resultGraph.getTransitionsArray();

        for(var j = 0; j < transitionsArray.length; j++){
            //graph containing that node

            let transitionVal = transitionsArray[j];
            console.log("Transition: " +transitionVal);
            let graph = this.graphResponsibleForNode(nameNode1);
            let graph2 = this.graphResponsibleForNode(nameNode2);
            let destinationNode1Name, destinationNode2Name;

            for(var k=0; k < graph.nodeSet.length; k++){
                if(graph.nodeSet[k].val == nameNode1){
                    console.log("encontrei node with value " + graph.nodeSet[k].val);
                    for(var l=0; l < graph.nodeSet[k].edgeSet.length; l++){
                        if(graph.nodeSet[k].edgeSet[l].transition==transitionVal){
                            console.log("tentando encontrar node destino com transição "+ graph.nodeSet[k].edgeSet[l].transition);
                             destinationNode1Name = graph.nodeSet[k].edgeSet[l].nodeTo.val;
                        }
                            
                    }
                }
            }

            for(var l=0; l < graph2.nodeSet.length; l++){
                if(graph2.nodeSet[l].val == nameNode2){
                    for(var m=0; m < graph2.nodeSet[l].edgeSet.length; m++){
                        if(graph2.nodeSet[l].edgeSet[m].transition==transitionVal)
                            destinationNode2Name = graph2.nodeSet[l].edgeSet[m].nodeTo.val;
                    }
                }
            }

            let destination = [destinationNode1Name,destinationNode2Name];
            let destinationNode = this.getNode(destination);
            let edge = new Edge(destinationNode, transitionVal);
            node.addEdge(edge);
        }
    }
}

Product.prototype.getNode = function(destination){

    console.log("procurar node with : " + destination);

    for(var i = 0; i < this.resultGraph.nodeSet.length; i++){
        if(this.resultGraph.nodeSet[i].val.toString()===destination.toString()){
            return this.resultGraph.nodeSet[i];
        }
            
    }
}

Product.prototype.setTransitions = function(graph){

    for(var i = 0; i < graph.nodeSet.length; i++){
        for(var j=0; j< graph.nodeSet[i].edgeSet.length; j++){
            this.resultGraph.addTransitions(graph.nodeSet[i].edgeSet[j].transition);
        }
    }
}

Product.prototype.graphResponsibleForNode = function(value){
    let array = new Array();

    for(var i = 0; i < this.graph1.nodeSet.length; i++){
        let name = this.graph1.nodeSet[i].val;
        if(name==value)
            return this.graph1;
    }

    for(var i = 0; i < this.graph2.nodeSet.length; i++){
        let name = this.graph2.nodeSet[i].val;
        if(name==value)
            return this.graph2;
    }

}

exports.Product = Product;