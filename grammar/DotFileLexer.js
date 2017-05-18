// Generated from DotFileLexer.g4 by ANTLR 4.5.2
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\u0012i\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0003\u0002\u0006\u0002%\n\u0002\r\u0002",
    "\u000e\u0002&\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u0010\u0003\u0010\u0007\u0010c\n\u0010\f\u0010\u000e\u0010",
    "f\u000b\u0010\u0003\u0011\u0003\u0011\u0002\u0002\u0012\u0003\u0003",
    "\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013",
    "\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011",
    "!\u0012\u0003\u0002\u0006\u0005\u0002\u000b\f\u000f\u000f\"\"\u0004",
    "\u0002C\\c|\u0005\u00022;C\\c|\u0003\u00022;j\u0002\u0003\u0003\u0002",
    "\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002",
    "\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002",
    "\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002",
    "\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002",
    "\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002",
    "\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002",
    "\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002",
    "\u0002\u0002\u0002!\u0003\u0002\u0002\u0002\u0003$\u0003\u0002\u0002",
    "\u0002\u0005*\u0003\u0002\u0002\u0002\u00070\u0003\u0002\u0002\u0002",
    "\t6\u0003\u0002\u0002\u0002\u000b<\u0003\u0002\u0002\u0002\rB\u0003",
    "\u0002\u0002\u0002\u000fO\u0003\u0002\u0002\u0002\u0011R\u0003\u0002",
    "\u0002\u0002\u0013T\u0003\u0002\u0002\u0002\u0015V\u0003\u0002\u0002",
    "\u0002\u0017X\u0003\u0002\u0002\u0002\u0019Z\u0003\u0002\u0002\u0002",
    "\u001b\\\u0003\u0002\u0002\u0002\u001d^\u0003\u0002\u0002\u0002\u001f",
    "`\u0003\u0002\u0002\u0002!g\u0003\u0002\u0002\u0002#%\t\u0002\u0002",
    "\u0002$#\u0003\u0002\u0002\u0002%&\u0003\u0002\u0002\u0002&$\u0003\u0002",
    "\u0002\u0002&\'\u0003\u0002\u0002\u0002\'(\u0003\u0002\u0002\u0002(",
    ")\b\u0002\u0002\u0002)\u0004\u0003\u0002\u0002\u0002*+\u0007i\u0002",
    "\u0002+,\u0007t\u0002\u0002,-\u0007c\u0002\u0002-.\u0007r\u0002\u0002",
    "./\u0007j\u0002\u0002/\u0006\u0003\u0002\u0002\u000201\u0007n\u0002",
    "\u000212\u0007c\u0002\u000223\u0007d\u0002\u000234\u0007g\u0002\u0002",
    "45\u0007n\u0002\u00025\b\u0003\u0002\u0002\u000267\u0007u\u0002\u0002",
    "78\u0007v\u0002\u000289\u0007{\u0002\u00029:\u0007n\u0002\u0002:;\u0007",
    "g\u0002\u0002;\n\u0003\u0002\u0002\u0002<=\u0007u\u0002\u0002=>\u0007",
    "j\u0002\u0002>?\u0007c\u0002\u0002?@\u0007r\u0002\u0002@A\u0007g\u0002",
    "\u0002A\f\u0003\u0002\u0002\u0002BC\u0007f\u0002\u0002CD\u0007q\u0002",
    "\u0002DE\u0007w\u0002\u0002EF\u0007d\u0002\u0002FG\u0007n\u0002\u0002",
    "GH\u0007g\u0002\u0002HI\u0007e\u0002\u0002IJ\u0007k\u0002\u0002JK\u0007",
    "t\u0002\u0002KL\u0007e\u0002\u0002LM\u0007n\u0002\u0002MN\u0007g\u0002",
    "\u0002N\u000e\u0003\u0002\u0002\u0002OP\u0007/\u0002\u0002PQ\u0007@",
    "\u0002\u0002Q\u0010\u0003\u0002\u0002\u0002RS\u0007$\u0002\u0002S\u0012",
    "\u0003\u0002\u0002\u0002TU\u0007?\u0002\u0002U\u0014\u0003\u0002\u0002",
    "\u0002VW\u0007=\u0002\u0002W\u0016\u0003\u0002\u0002\u0002XY\u0007}",
    "\u0002\u0002Y\u0018\u0003\u0002\u0002\u0002Z[\u0007\u007f\u0002\u0002",
    "[\u001a\u0003\u0002\u0002\u0002\\]\u0007]\u0002\u0002]\u001c\u0003\u0002",
    "\u0002\u0002^_\u0007_\u0002\u0002_\u001e\u0003\u0002\u0002\u0002`d\t",
    "\u0003\u0002\u0002ac\t\u0004\u0002\u0002ba\u0003\u0002\u0002\u0002c",
    "f\u0003\u0002\u0002\u0002db\u0003\u0002\u0002\u0002de\u0003\u0002\u0002",
    "\u0002e \u0003\u0002\u0002\u0002fd\u0003\u0002\u0002\u0002gh\t\u0005",
    "\u0002\u0002h\"\u0003\u0002\u0002\u0002\u0005\u0002&d\u0003\b\u0002",
    "\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function DotFileLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

DotFileLexer.prototype = Object.create(antlr4.Lexer.prototype);
DotFileLexer.prototype.constructor = DotFileLexer;

DotFileLexer.EOF = antlr4.Token.EOF;
DotFileLexer.WS = 1;
DotFileLexer.GRAPH = 2;
DotFileLexer.LABEL = 3;
DotFileLexer.STYLE = 4;
DotFileLexer.SHAPE = 5;
DotFileLexer.DOUBLE_CIRCLE = 6;
DotFileLexer.TRANSITION = 7;
DotFileLexer.QUOTATION = 8;
DotFileLexer.EQUAL = 9;
DotFileLexer.SEMICOLON = 10;
DotFileLexer.OPEN_BRACKET = 11;
DotFileLexer.CLOSE_BRACKET = 12;
DotFileLexer.OPEN_SQUARE = 13;
DotFileLexer.CLOSE_SQUARE = 14;
DotFileLexer.NAME = 15;
DotFileLexer.DIGIT = 16;


DotFileLexer.modeNames = [ "DEFAULT_MODE" ];

DotFileLexer.literalNames = [ null, null, "'graph'", "'label'", "'style'", 
                              "'shape'", "'doublecircle'", "'->'", "'\"'", 
                              "'='", "';'", "'{'", "'}'", "'['", "']'" ];

DotFileLexer.symbolicNames = [ null, "WS", "GRAPH", "LABEL", "STYLE", "SHAPE", 
                               "DOUBLE_CIRCLE", "TRANSITION", "QUOTATION", 
                               "EQUAL", "SEMICOLON", "OPEN_BRACKET", "CLOSE_BRACKET", 
                               "OPEN_SQUARE", "CLOSE_SQUARE", "NAME", "DIGIT" ];

DotFileLexer.ruleNames = [ "WS", "GRAPH", "LABEL", "STYLE", "SHAPE", "DOUBLE_CIRCLE", 
                           "TRANSITION", "QUOTATION", "EQUAL", "SEMICOLON", 
                           "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_SQUARE", 
                           "CLOSE_SQUARE", "NAME", "DIGIT" ];

DotFileLexer.grammarFileName = "DotFileLexer.g4";



exports.DotFileLexer = DotFileLexer;

