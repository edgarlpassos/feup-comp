const Edge = require('./graphEdge.js').Edge;

function Node(val){
    this.edgeSet = {};
    this.val = val;
}

Node.prototype = Object.create(Object.prototype);
Node.prototype.constructor = Node;

Node.prototype.getEdgeSet = function(){
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