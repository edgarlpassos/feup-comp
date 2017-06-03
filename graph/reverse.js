const Graph = require('./graph.js').Graph;
const Node = require("../graph/graphNode.js").Node;
const Edge = require("../graph/graphEdge.js").Edge;

/**
 * Reverse Graph
 * @param {*} graph 
 */
function Reverse(graph){
    this.graph = graph;
    this.newStartNode = new Node("start", false);
    this.changeStartNode();
    console.log(graph);
}
 
Reverse.prototype = Object.create(Object.prototype);
Reverse.prototype.constructor = Reverse;

/**
 * Add start node with ε transitios to old final states, make them non acceptable nodes
 */
Reverse.prototype.changeStartNode = function(){
   for(var i = 0; i < this.graph.getNodeSet().length; i++){
        if(this.graph.getNodeSet()[i].isAcceptanceNode()){
            let edge = new Edge(this.graph.getNodeSet()[i]," ");
             this.newStartNode.addEdge(edge);
        }  
        this.graph.getNodeSet()[i].acceptanceNode = false;
    }
    this.invertTransitions();
}

/**
 * Invert transitions avoiding new transitions, change start node to acceptable node
 */
Reverse.prototype.invertTransitions = function(){

    console.log(this.graph);

    for(var i = 0; i < this.graph.getNodeSet().length; i++){
       var node = this.graph.getNodeSet()[i];

        if(node.nodeEquals(node,this.graph.startNode)){
             node.acceptanceNode = true;
        }

        for(var j=0; j< node.getEdgeSet().length; j++){

            if(! node.getEdgeSet()[j].new){
                var nodeTo = node.getEdgeSet()[j].nodeTo;
                var transition = node.getEdgeSet()[j].transition;
                node.deleteEdge(transition,nodeTo);
                var edge = new Edge(node,transition);
                edge.new = true;
                nodeTo.addEdge(edge);
            }
     }
    
    }
    this.graph.addNode(this.newStartNode);
    this.graph.setStartNode(this.newStartNode);
}

exports.Reverse = Reverse;