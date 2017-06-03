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
    this.addTransitions(this.graph1);
    this.addTransitions(this.graph2);
    console.log(graph);
}

Product.prototype = Object.create(Object.prototype);
Product.prototype.constructor = Product;

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

Product.prototype.addTransitions = function(graph){

    console.log(graph);

    for(var i = 0; i < graph.nodeSet.length; i++){
        let node = graph.nodeSet[i];
        
        for(var j=0; j< node.edgeSet.length; j++){
            var edge = node.edgeSet[j];
            var transition = edge.transition;

            console.log(edge);

            var arrayNodes = this.getRelatedNodes(node);
            console.log("Array originial");
            console.log(arrayNodes);
            console.log("Array Destino");
            var destinationNodes = this.getRelatedNodes(edge.nodeTo);
            console.log(destinationNodes);

             for(var k=0; k< arrayNodes.length; k++){
                for(var l=0; k < destinationNodes.length; k++){
                    if(!destinationNodes[l].nodeEquals(destinationNodes[l],arrayNodes[k])){
                        let edge = new Edge(destinationNodes[l],transition);
                        arrayNodes[k].addEdge(edge);
                    }
                }      
            }
        }
    }
}

Product.prototype.getRelatedNodes = function(node){
    let array = new Array();

    for(var i = 0; i < this.resultGraph.nodeSet.length; i++){
        let nodeR = this.resultGraph.nodeSet[i].val;
        if(nodeR.includes(node.val))
            array.push(this.resultGraph.nodeSet[i]);
    }

    return array;
}

exports.Product = Product;