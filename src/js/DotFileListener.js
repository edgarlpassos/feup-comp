// Generated from DotFile.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by DotFile.
function DotFileListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

DotFileListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
DotFileListener.prototype.constructor = DotFileListener;

// Enter a parse tree produced by DotFile#r.
DotFileListener.prototype.enterR = function(ctx) {
};

// Exit a parse tree produced by DotFile#r.
DotFileListener.prototype.exitR = function(ctx) {
};


// Enter a parse tree produced by DotFile#instruction.
DotFileListener.prototype.enterInstruction = function(ctx) {
};

// Exit a parse tree produced by DotFile#instruction.
DotFileListener.prototype.exitInstruction = function(ctx) {
};


// Enter a parse tree produced by DotFile#stateTransition.
DotFileListener.prototype.enterStateTransition = function(ctx) {
};

// Exit a parse tree produced by DotFile#stateTransition.
DotFileListener.prototype.exitStateTransition = function(ctx) {
};


// Enter a parse tree produced by DotFile#labeling.
DotFileListener.prototype.enterLabeling = function(ctx) {
};

// Exit a parse tree produced by DotFile#labeling.
DotFileListener.prototype.exitLabeling = function(ctx) {
};


// Enter a parse tree produced by DotFile#shaping.
DotFileListener.prototype.enterShaping = function(ctx) {
};

// Exit a parse tree produced by DotFile#shaping.
DotFileListener.prototype.exitShaping = function(ctx) {
};


// Enter a parse tree produced by DotFile#startpoint.
DotFileListener.prototype.enterStartpoint = function(ctx) {
};

// Exit a parse tree produced by DotFile#startpoint.
DotFileListener.prototype.exitStartpoint = function(ctx) {
};



exports.DotFileListener = DotFileListener;