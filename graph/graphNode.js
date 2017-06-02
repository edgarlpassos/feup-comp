const Edge = require('./graphEdge.js').Edge;

function GraphNode(val){
    this.edgeSet = {};
    this.val = val;
}

GraphNode.prototype = Object.create(Object.prototype);
GraphNode.prototype.constructor = GraphNode;

GraphNode.prototype.getEdgeSet = function(){
    return this.edgeSet;
}

GraphNode.prototype.toDotFile = function(){

    if(edgeSet.length == 0)
        return val;

    let ret = val;

    for(let edge in edgeSet){
        let node = edge.getNodeTo();
        ret += node.toDotFile();
    }

    return ret;
}

exports.Node = Node;