// Generated from DotFile.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by DotFileParser.

function DotFileVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

DotFileVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
DotFileVisitor.prototype.constructor = DotFileVisitor;

// Visit a parse tree produced by DotFileParser#entry.
DotFileVisitor.prototype.visitEntry = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DotFileParser#instruction.
DotFileVisitor.prototype.visitInstruction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DotFileParser#stateTransition.
DotFileVisitor.prototype.visitStateTransition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DotFileParser#labeling.
DotFileVisitor.prototype.visitLabeling = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DotFileParser#shaping.
DotFileVisitor.prototype.visitShaping = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DotFileParser#labelname.
DotFileVisitor.prototype.visitLabelname = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DotFileParser#startpoint.
DotFileVisitor.prototype.visitStartpoint = function(ctx) {
  return this.visitChildren(ctx);
};



exports.DotFileVisitor = DotFileVisitor;