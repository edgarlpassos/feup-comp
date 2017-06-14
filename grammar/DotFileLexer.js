// Generated from DotFileLexer.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\u0013o\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0003\u0002\u0006\u0002",
    "\'\n\u0002\r\u0002\u000e\u0002(\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0007",
    "\u0010g\n\u0010\f\u0010\u000e\u0010j\u000b\u0010\u0003\u0011\u0003\u0011",
    "\u0003\u0012\u0003\u0012\u0002\u0002\u0013\u0003\u0003\u0005\u0004\u0007",
    "\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017",
    "\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013\u0003",
    "\u0002\u0006\u0005\u0002\u000b\f\u000f\u000f\"\"\u0004\u0002C\\c|\u0005",
    "\u00022;C\\c|\u0003\u00022;p\u0002\u0003\u0003\u0002\u0002\u0002\u0002",
    "\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002",
    "\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002",
    "\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002",
    "\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002",
    "\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002",
    "\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002",
    "\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002",
    "!\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0003&\u0003",
    "\u0002\u0002\u0002\u0005,\u0003\u0002\u0002\u0002\u00074\u0003\u0002",
    "\u0002\u0002\t:\u0003\u0002\u0002\u0002\u000b@\u0003\u0002\u0002\u0002",
    "\rF\u0003\u0002\u0002\u0002\u000fS\u0003\u0002\u0002\u0002\u0011V\u0003",
    "\u0002\u0002\u0002\u0013X\u0003\u0002\u0002\u0002\u0015Z\u0003\u0002",
    "\u0002\u0002\u0017\\\u0003\u0002\u0002\u0002\u0019^\u0003\u0002\u0002",
    "\u0002\u001b`\u0003\u0002\u0002\u0002\u001db\u0003\u0002\u0002\u0002",
    "\u001fd\u0003\u0002\u0002\u0002!k\u0003\u0002\u0002\u0002#m\u0003\u0002",
    "\u0002\u0002%\'\t\u0002\u0002\u0002&%\u0003\u0002\u0002\u0002\'(\u0003",
    "\u0002\u0002\u0002(&\u0003\u0002\u0002\u0002()\u0003\u0002\u0002\u0002",
    ")*\u0003\u0002\u0002\u0002*+\b\u0002\u0002\u0002+\u0004\u0003\u0002",
    "\u0002\u0002,-\u0007f\u0002\u0002-.\u0007k\u0002\u0002./\u0007i\u0002",
    "\u0002/0\u0007t\u0002\u000201\u0007c\u0002\u000212\u0007r\u0002\u0002",
    "23\u0007j\u0002\u00023\u0006\u0003\u0002\u0002\u000245\u0007n\u0002",
    "\u000256\u0007c\u0002\u000267\u0007d\u0002\u000278\u0007g\u0002\u0002",
    "89\u0007n\u0002\u00029\b\u0003\u0002\u0002\u0002:;\u0007u\u0002\u0002",
    ";<\u0007v\u0002\u0002<=\u0007{\u0002\u0002=>\u0007n\u0002\u0002>?\u0007",
    "g\u0002\u0002?\n\u0003\u0002\u0002\u0002@A\u0007u\u0002\u0002AB\u0007",
    "j\u0002\u0002BC\u0007c\u0002\u0002CD\u0007r\u0002\u0002DE\u0007g\u0002",
    "\u0002E\f\u0003\u0002\u0002\u0002FG\u0007f\u0002\u0002GH\u0007q\u0002",
    "\u0002HI\u0007w\u0002\u0002IJ\u0007d\u0002\u0002JK\u0007n\u0002\u0002",
    "KL\u0007g\u0002\u0002LM\u0007e\u0002\u0002MN\u0007k\u0002\u0002NO\u0007",
    "t\u0002\u0002OP\u0007e\u0002\u0002PQ\u0007n\u0002\u0002QR\u0007g\u0002",
    "\u0002R\u000e\u0003\u0002\u0002\u0002ST\u0007/\u0002\u0002TU\u0007@",
    "\u0002\u0002U\u0010\u0003\u0002\u0002\u0002VW\u0007$\u0002\u0002W\u0012",
    "\u0003\u0002\u0002\u0002XY\u0007?\u0002\u0002Y\u0014\u0003\u0002\u0002",
    "\u0002Z[\u0007=\u0002\u0002[\u0016\u0003\u0002\u0002\u0002\\]\u0007",
    "}\u0002\u0002]\u0018\u0003\u0002\u0002\u0002^_\u0007\u007f\u0002\u0002",
    "_\u001a\u0003\u0002\u0002\u0002`a\u0007]\u0002\u0002a\u001c\u0003\u0002",
    "\u0002\u0002bc\u0007_\u0002\u0002c\u001e\u0003\u0002\u0002\u0002dh\t",
    "\u0003\u0002\u0002eg\t\u0004\u0002\u0002fe\u0003\u0002\u0002\u0002g",
    "j\u0003\u0002\u0002\u0002hf\u0003\u0002\u0002\u0002hi\u0003\u0002\u0002",
    "\u0002i \u0003\u0002\u0002\u0002jh\u0003\u0002\u0002\u0002kl\u0007\u03b7",
    "\u0002\u0002l\"\u0003\u0002\u0002\u0002mn\t\u0005\u0002\u0002n$\u0003",
    "\u0002\u0002\u0002\u0005\u0002(h\u0003\b\u0002\u0002"].join("");


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
DotFileLexer.EPS = 16;
DotFileLexer.DIGIT = 17;


DotFileLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

DotFileLexer.prototype.literalNames = [ null, null, "'digraph'", "'label'", 
                                        "'style'", "'shape'", "'doublecircle'", 
                                        "'->'", "'\"'", "'='", "';'", "'{'", 
                                        "'}'", "'['", "']'", null, "'ε'" ];

DotFileLexer.prototype.symbolicNames = [ null, "WS", "GRAPH", "LABEL", "STYLE", 
                                         "SHAPE", "DOUBLE_CIRCLE", "TRANSITION", 
                                         "QUOTATION", "EQUAL", "SEMICOLON", 
                                         "OPEN_BRACKET", "CLOSE_BRACKET", 
                                         "OPEN_SQUARE", "CLOSE_SQUARE", 
                                         "NAME", "EPS", "DIGIT" ];

DotFileLexer.prototype.ruleNames = [ "WS", "GRAPH", "LABEL", "STYLE", "SHAPE", 
                                     "DOUBLE_CIRCLE", "TRANSITION", "QUOTATION", 
                                     "EQUAL", "SEMICOLON", "OPEN_BRACKET", 
                                     "CLOSE_BRACKET", "OPEN_SQUARE", "CLOSE_SQUARE", 
                                     "NAME", "EPS", "DIGIT" ];

DotFileLexer.prototype.grammarFileName = "DotFileLexer.g4";



exports.DotFileLexer = DotFileLexer;

