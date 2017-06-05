const DotFileVisitor = require('./DotFileVisitor').DotFileVisitor;
const Graph = require('../graph/graph.js').Graph;
const Node = require('../graph/graphNode.js').Node;
const Edge = require('../graph/graphEdge.js').Edge;
const DotFile = require('./DotFile.js').DotFile;

CustomDotFileVisitor = function () {
  DotFileVisitor.call(this);
  return this;
}

CustomDotFileVisitor.prototype = Object.create(DotFileVisitor.prototype);
CustomDotFileVisitor.prototype.constructor = CustomDotFileVisitor;

/*
 * Overrides
 */

// Visit a parse tree produced by DotFileParser#entry.
DotFileVisitor.prototype.visitEntry = function (ctx) {
  let name = '';
  if (ctx.NAME() != null)
    name = ctx.NAME().getText();

  this.graph = new Graph(name);
  messages = [];

  if (ctx.instruction() != null) {
    messages = this.visitInstruction(ctx.instruction());
  }

  console.log(this.graph);
  console.log(this.graph.toDotFile());
  if(messages.length == 0){
    if(this.graph.isValid())
      return ['success',this.graph.toDotFile()];
    else return ['Graph has no starting node!'];
  }
    return messages;
}

// Visit a parse tree produced by DotFileParser#instruction.
DotFileVisitor.prototype.visitInstruction = function (ctx) {
  if (ctx.children == null)
    return null;

  let valToken = ctx.NAME();
  if (valToken != null) {
    let value = valToken.getText();
    let node = this.graph.getNode(value);
    if (node == null) {
      node = new Node(value);
      this.graph.addNode(node);
      if (this.graph.getStartNode() === null)
        this.graph.setStartNode(node);
    }

    /* Check for transitions */
    let transition = ctx.stateTransition();
    if (transition != null) {
      let edge = this.visitStateTransition(transition);
      if (edge != null) {
        node.addEdge(edge);
      }
    }

    /* Check for node shaping */
    let shaping = ctx.shaping();
    if (shaping != null) {
      let shape = this.visitShaping(shaping);
      if (shape != null) {
        node.setAcceptanceNode(true);
      }
    }
  }

  /* Semicolon Instruction */
  let instruction = ctx.instruction();
  if (instruction != null) {
    this.visitInstruction(instruction);
  }
};

// Visit a parse tree produced by DotFileParser#stateTransition.
DotFileVisitor.prototype.visitStateTransition = function (ctx) {
  if (ctx.children === null)
    return null;

  /* Get destination node */
  let valToken = ctx.NAME();
  if (valToken != null) {

    let value = valToken.getText();
    let node = this.graph.getNode(value);

    if (node == null) {
      node = new Node(value);
      this.graph.addNode(node);
      if (this.graph.getStartNode() == null)
        this.graph.setStartNode(node);
    }

    let transitionChar = '';
    let labeling = ctx.labeling();
    if (labeling != null)
      transitionChar = this.visitLabeling(labeling);

    let returnVal = new Edge(node, transitionChar);
    return returnVal;
  }
  return null;
};


// Visit a parse tree produced by DotFileParser#labeling.
DotFileVisitor.prototype.visitLabeling = function (ctx) {
  let labelname = ctx.labelname();
  if (labelname == null)
    return null;
  else return this.visitLabelname(labelname);
};


// Visit a parse tree produced by DotFileParser#labelname.
DotFileVisitor.prototype.visitLabelname = function (ctx) {
  let eps = ctx.EPS();
  if (eps != null)
    return eps.getText();
  let name = ctx.NAME();
  if (name != null)
    return name.getText();
  return null;
};

// Visit a parse tree produced by DotFileParser#shaping.
DotFileVisitor.prototype.visitShaping = function (ctx) {
  let shape = ctx.DOUBLE_CIRCLE();
  if (shape != null)
    return shape.getText();
};


// Visit a parse tree produced by DotFileParser#startpoint.
DotFileVisitor.prototype.visitStartpoint = function (ctx) {
  return this.visitChildren(ctx);
};


exports.CustomDotFileVisitor = CustomDotFileVisitor;