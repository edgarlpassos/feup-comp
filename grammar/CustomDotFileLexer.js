const DotFileLexer = require('./DotFileLexer.js').DotFileLexer;

function CustomDotFileLexer(input){
    DotFileLexer.call(this);
}

CustomDotFileLexer.prototype = Object.create(DotFileLexer.prototype);
CustomDotFileLexer.prototype.constructor = CustomDotFileLexer;

CustomLexer.prototype.notifyListeners = function(e) {
	var start = this._tokenStartCharIndex;
	var stop = this._input.index;
	var text = this._input.getText(start, stop);
	var msg = "token recognition error at: '" + this.getErrorDisplay(text) + "'";
	var listener = this.getErrorListenerDispatch();
    throw "line " + this._tokenStartLine + ":" + this._tokenStartColumn + " " + msg;
};