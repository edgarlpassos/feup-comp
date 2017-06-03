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
    this.addTransitions();
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
            let newVal = name + node2.val;
            
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
    
}

exports.Product = Product;