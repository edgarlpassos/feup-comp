// Generated from DotFile.g4 by ANTLR 4.5.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var DotFileListener = require('./DotFileListener').DotFileListener;
var grammarFileName = "DotFile.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0012A\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0005\u0003\u001d\n\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0005\u0004)\n\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0005\u00053\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006=\n\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0002\u0002\b\u0002\u0004\u0006",
    "\b\n\f\u0002\u0002@\u0002\u000e\u0003\u0002\u0002\u0002\u0004\u001c",
    "\u0003\u0002\u0002\u0002\u0006(\u0003\u0002\u0002\u0002\b2\u0003\u0002",
    "\u0002\u0002\n<\u0003\u0002\u0002\u0002\f>\u0003\u0002\u0002\u0002\u000e",
    "\u000f\u0007\u0004\u0002\u0002\u000f\u0010\u0007\u0011\u0002\u0002\u0010",
    "\u0011\u0007\r\u0002\u0002\u0011\u0012\u0005\u0004\u0003\u0002\u0012",
    "\u0013\u0007\u000e\u0002\u0002\u0013\u0003\u0003\u0002\u0002\u0002\u0014",
    "\u0015\u0007\u0011\u0002\u0002\u0015\u0016\u0005\u0006\u0004\u0002\u0016",
    "\u0017\u0005\n\u0006\u0002\u0017\u0018\u0005\u0004\u0003\u0002\u0018",
    "\u001d\u0003\u0002\u0002\u0002\u0019\u001a\u0007\f\u0002\u0002\u001a",
    "\u001d\u0005\u0004\u0003\u0002\u001b\u001d\u0003\u0002\u0002\u0002\u001c",
    "\u0014\u0003\u0002\u0002\u0002\u001c\u0019\u0003\u0002\u0002\u0002\u001c",
    "\u001b\u0003\u0002\u0002\u0002\u001d\u0005\u0003\u0002\u0002\u0002\u001e",
    "\u001f\u0007\t\u0002\u0002\u001f \u0007\u0011\u0002\u0002 !\u0005\u0006",
    "\u0004\u0002!\"\u0005\b\u0005\u0002\"#\u0007\f\u0002\u0002#)\u0003\u0002",
    "\u0002\u0002$%\u0007\t\u0002\u0002%&\u0007\u0011\u0002\u0002&)\u0005",
    "\b\u0005\u0002\')\u0003\u0002\u0002\u0002(\u001e\u0003\u0002\u0002\u0002",
    "($\u0003\u0002\u0002\u0002(\'\u0003\u0002\u0002\u0002)\u0007\u0003\u0002",
    "\u0002\u0002*+\u0007\u000f\u0002\u0002+,\u0007\u0005\u0002\u0002,-\u0007",
    "\u000b\u0002\u0002-.\u0007\n\u0002\u0002./\u0007\u0011\u0002\u0002/",
    "0\u0007\n\u0002\u000203\u0007\u0010\u0002\u000213\u0003\u0002\u0002",
    "\u00022*\u0003\u0002\u0002\u000221\u0003\u0002\u0002\u00023\t\u0003",
    "\u0002\u0002\u000245\u0007\u000f\u0002\u000256\u0007\u0007\u0002\u0002",
    "67\u0007\u000b\u0002\u000278\u0007\n\u0002\u000289\u0007\b\u0002\u0002",
    "9:\u0007\n\u0002\u0002:=\u0007\u0010\u0002\u0002;=\u0003\u0002\u0002",
    "\u0002<4\u0003\u0002\u0002\u0002<;\u0003\u0002\u0002\u0002=\u000b\u0003",
    "\u0002\u0002\u0002>?\u0005\u0002\u0002\u0002?\r\u0003\u0002\u0002\u0002",
    "\u0006\u001c(2<"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, "'graph'", "'label'", "'style'", "'shape'", 
                     "'doublecircle'", "'->'", "'\"'", "'='", "';'", "'{'", 
                     "'}'", "'['", "']'" ];

var symbolicNames = [ null, "WS", "GRAPH", "LABEL", "STYLE", "SHAPE", "DOUBLE_CIRCLE", 
                      "TRANSITION", "QUOTATION", "EQUAL", "SEMICOLON", "OPEN_BRACKET", 
                      "CLOSE_BRACKET", "OPEN_SQUARE", "CLOSE_SQUARE", "NAME", 
                      "DIGIT" ];

var ruleNames =  [ "entry", "instruction", "stateTransition", "labeling", 
                   "shaping", "startpoint" ];

function DotFileParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

DotFileParser.prototype = Object.create(antlr4.Parser.prototype);
DotFileParser.prototype.constructor = DotFileParser;

Object.defineProperty(DotFileParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

DotFileParser.EOF = antlr4.Token.EOF;
DotFileParser.WS = 1;
DotFileParser.GRAPH = 2;
DotFileParser.LABEL = 3;
DotFileParser.STYLE = 4;
DotFileParser.SHAPE = 5;
DotFileParser.DOUBLE_CIRCLE = 6;
DotFileParser.TRANSITION = 7;
DotFileParser.QUOTATION = 8;
DotFileParser.EQUAL = 9;
DotFileParser.SEMICOLON = 10;
DotFileParser.OPEN_BRACKET = 11;
DotFileParser.CLOSE_BRACKET = 12;
DotFileParser.OPEN_SQUARE = 13;
DotFileParser.CLOSE_SQUARE = 14;
DotFileParser.NAME = 15;
DotFileParser.DIGIT = 16;

DotFileParser.RULE_entry = 0;
DotFileParser.RULE_instruction = 1;
DotFileParser.RULE_stateTransition = 2;
DotFileParser.RULE_labeling = 3;
DotFileParser.RULE_shaping = 4;
DotFileParser.RULE_startpoint = 5;

function EntryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DotFileParser.RULE_entry;
    return this;
}

EntryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EntryContext.prototype.constructor = EntryContext;

EntryContext.prototype.GRAPH = function() {
    return this.getToken(DotFileParser.GRAPH, 0);
};

EntryContext.prototype.NAME = function() {
    return this.getToken(DotFileParser.NAME, 0);
};

EntryContext.prototype.OPEN_BRACKET = function() {
    return this.getToken(DotFileParser.OPEN_BRACKET, 0);
};

EntryContext.prototype.instruction = function() {
    return this.getTypedRuleContext(InstructionContext,0);
};

EntryContext.prototype.CLOSE_BRACKET = function() {
    return this.getToken(DotFileParser.CLOSE_BRACKET, 0);
};

EntryContext.prototype.enterRule = function(listener) {
    if(listener instanceof DotFileListener ) {
        listener.enterEntry(this);
	}
};

EntryContext.prototype.exitRule = function(listener) {
    if(listener instanceof DotFileListener ) {
        listener.exitEntry(this);
	}
};




DotFileParser.EntryContext = EntryContext;

DotFileParser.prototype.entry = function() {

    var localctx = new EntryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, DotFileParser.RULE_entry);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 12;
        this.match(DotFileParser.GRAPH);
        this.state = 13;
        this.match(DotFileParser.NAME);
        this.state = 14;
        this.match(DotFileParser.OPEN_BRACKET);
        this.state = 15;
        this.instruction();
        this.state = 16;
        this.match(DotFileParser.CLOSE_BRACKET);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function InstructionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DotFileParser.RULE_instruction;
    return this;
}

InstructionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InstructionContext.prototype.constructor = InstructionContext;

InstructionContext.prototype.NAME = function() {
    return this.getToken(DotFileParser.NAME, 0);
};

InstructionContext.prototype.stateTransition = function() {
    return this.getTypedRuleContext(StateTransitionContext,0);
};

InstructionContext.prototype.shaping = function() {
    return this.getTypedRuleContext(ShapingContext,0);
};

InstructionContext.prototype.instruction = function() {
    return this.getTypedRuleContext(InstructionContext,0);
};

InstructionContext.prototype.SEMICOLON = function() {
    return this.getToken(DotFileParser.SEMICOLON, 0);
};

InstructionContext.prototype.enterRule = function(listener) {
    if(listener instanceof DotFileListener ) {
        listener.enterInstruction(this);
	}
};

InstructionContext.prototype.exitRule = function(listener) {
    if(listener instanceof DotFileListener ) {
        listener.exitInstruction(this);
	}
};




DotFileParser.InstructionContext = InstructionContext;

DotFileParser.prototype.instruction = function() {

    var localctx = new InstructionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, DotFileParser.RULE_instruction);
    try {
        this.state = 26;
        switch(this._input.LA(1)) {
        case DotFileParser.NAME:
            this.enterOuterAlt(localctx, 1);
            this.state = 18;
            this.match(DotFileParser.NAME);
            this.state = 19;
            this.stateTransition();
            this.state = 20;
            this.shaping();
            this.state = 21;
            this.instruction();
            break;
        case DotFileParser.SEMICOLON:
            this.enterOuterAlt(localctx, 2);
            this.state = 23;
            this.match(DotFileParser.SEMICOLON);
            this.state = 24;
            this.instruction();
            break;
        case DotFileParser.CLOSE_BRACKET:
            this.enterOuterAlt(localctx, 3);

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StateTransitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DotFileParser.RULE_stateTransition;
    return this;
}

StateTransitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StateTransitionContext.prototype.constructor = StateTransitionContext;

StateTransitionContext.prototype.TRANSITION = function() {
    return this.getToken(DotFileParser.TRANSITION, 0);
};

StateTransitionContext.prototype.NAME = function() {
    return this.getToken(DotFileParser.NAME, 0);
};

StateTransitionContext.prototype.stateTransition = function() {
    return this.getTypedRuleContext(StateTransitionContext,0);
};

StateTransitionContext.prototype.labeling = function() {
    return this.getTypedRuleContext(LabelingContext,0);
};

StateTransitionContext.prototype.SEMICOLON = function() {
    return this.getToken(DotFileParser.SEMICOLON, 0);
};

StateTransitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof DotFileListener ) {
        listener.enterStateTransition(this);
	}
};

StateTransitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof DotFileListener ) {
        listener.exitStateTransition(this);
	}
};




DotFileParser.StateTransitionContext = StateTransitionContext;

DotFileParser.prototype.stateTransition = function() {

    var localctx = new StateTransitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, DotFileParser.RULE_stateTransition);
    try {
        this.state = 38;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 28;
            this.match(DotFileParser.TRANSITION);
            this.state = 29;
            this.match(DotFileParser.NAME);
            this.state = 30;
            this.stateTransition();
            this.state = 31;
            this.labeling();
            this.state = 32;
            this.match(DotFileParser.SEMICOLON);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 34;
            this.match(DotFileParser.TRANSITION);
            this.state = 35;
            this.match(DotFileParser.NAME);
            this.state = 36;
            this.labeling();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);

            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LabelingContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DotFileParser.RULE_labeling;
    return this;
}

LabelingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LabelingContext.prototype.constructor = LabelingContext;

LabelingContext.prototype.OPEN_SQUARE = function() {
    return this.getToken(DotFileParser.OPEN_SQUARE, 0);
};

LabelingContext.prototype.LABEL = function() {
    return this.getToken(DotFileParser.LABEL, 0);
};

LabelingContext.prototype.EQUAL = function() {
    return this.getToken(DotFileParser.EQUAL, 0);
};

LabelingContext.prototype.QUOTATION = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(DotFileParser.QUOTATION);
    } else {
        return this.getToken(DotFileParser.QUOTATION, i);
    }
};


LabelingContext.prototype.NAME = function() {
    return this.getToken(DotFileParser.NAME, 0);
};

LabelingContext.prototype.CLOSE_SQUARE = function() {
    return this.getToken(DotFileParser.CLOSE_SQUARE, 0);
};

LabelingContext.prototype.enterRule = function(listener) {
    if(listener instanceof DotFileListener ) {
        listener.enterLabeling(this);
	}
};

LabelingContext.prototype.exitRule = function(listener) {
    if(listener instanceof DotFileListener ) {
        listener.exitLabeling(this);
	}
};




DotFileParser.LabelingContext = LabelingContext;

DotFileParser.prototype.labeling = function() {

    var localctx = new LabelingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, DotFileParser.RULE_labeling);
    try {
        this.state = 48;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 40;
            this.match(DotFileParser.OPEN_SQUARE);
            this.state = 41;
            this.match(DotFileParser.LABEL);
            this.state = 42;
            this.match(DotFileParser.EQUAL);
            this.state = 43;
            this.match(DotFileParser.QUOTATION);
            this.state = 44;
            this.match(DotFileParser.NAME);
            this.state = 45;
            this.match(DotFileParser.QUOTATION);
            this.state = 46;
            this.match(DotFileParser.CLOSE_SQUARE);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);

            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ShapingContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DotFileParser.RULE_shaping;
    return this;
}

ShapingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ShapingContext.prototype.constructor = ShapingContext;

ShapingContext.prototype.OPEN_SQUARE = function() {
    return this.getToken(DotFileParser.OPEN_SQUARE, 0);
};

ShapingContext.prototype.SHAPE = function() {
    return this.getToken(DotFileParser.SHAPE, 0);
};

ShapingContext.prototype.EQUAL = function() {
    return this.getToken(DotFileParser.EQUAL, 0);
};

ShapingContext.prototype.QUOTATION = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(DotFileParser.QUOTATION);
    } else {
        return this.getToken(DotFileParser.QUOTATION, i);
    }
};


ShapingContext.prototype.DOUBLE_CIRCLE = function() {
    return this.getToken(DotFileParser.DOUBLE_CIRCLE, 0);
};

ShapingContext.prototype.CLOSE_SQUARE = function() {
    return this.getToken(DotFileParser.CLOSE_SQUARE, 0);
};

ShapingContext.prototype.enterRule = function(listener) {
    if(listener instanceof DotFileListener ) {
        listener.enterShaping(this);
	}
};

ShapingContext.prototype.exitRule = function(listener) {
    if(listener instanceof DotFileListener ) {
        listener.exitShaping(this);
	}
};




DotFileParser.ShapingContext = ShapingContext;

DotFileParser.prototype.shaping = function() {

    var localctx = new ShapingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, DotFileParser.RULE_shaping);
    try {
        this.state = 58;
        switch(this._input.LA(1)) {
        case DotFileParser.OPEN_SQUARE:
            this.enterOuterAlt(localctx, 1);
            this.state = 50;
            this.match(DotFileParser.OPEN_SQUARE);
            this.state = 51;
            this.match(DotFileParser.SHAPE);
            this.state = 52;
            this.match(DotFileParser.EQUAL);
            this.state = 53;
            this.match(DotFileParser.QUOTATION);
            this.state = 54;
            this.match(DotFileParser.DOUBLE_CIRCLE);
            this.state = 55;
            this.match(DotFileParser.QUOTATION);
            this.state = 56;
            this.match(DotFileParser.CLOSE_SQUARE);
            break;
        case DotFileParser.SEMICOLON:
        case DotFileParser.CLOSE_BRACKET:
        case DotFileParser.NAME:
            this.enterOuterAlt(localctx, 2);

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StartpointContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DotFileParser.RULE_startpoint;
    return this;
}

StartpointContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StartpointContext.prototype.constructor = StartpointContext;

StartpointContext.prototype.entry = function() {
    return this.getTypedRuleContext(EntryContext,0);
};

StartpointContext.prototype.enterRule = function(listener) {
    if(listener instanceof DotFileListener ) {
        listener.enterStartpoint(this);
	}
};

StartpointContext.prototype.exitRule = function(listener) {
    if(listener instanceof DotFileListener ) {
        listener.exitStartpoint(this);
	}
};




DotFileParser.StartpointContext = StartpointContext;

DotFileParser.prototype.startpoint = function() {

    var localctx = new StartpointContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, DotFileParser.RULE_startpoint);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 60;
        this.entry();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.DotFileParser = DotFileParser;
