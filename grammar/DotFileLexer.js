// Generated from DotFileLexer.g4 by ANTLR 4.6
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\u0012k\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0003\u0002\u0006\u0002%\n\u0002\r\u0002",
    "\u000e\u0002&\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0007\u0010e",
    "\n\u0010\f\u0010\u000e\u0010h\u000b\u0010\u0003\u0011\u0003\u0011\u0002",
    "\u0002\u0012\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007",
    "\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f",
    "\u001d\u0010\u001f\u0011!\u0012\u0003\u0002\u0006\u0005\u0002\u000b",
    "\f\u000f\u000f\"\"\u0004\u0002C\\c|\u0005\u00022;C\\c|\u0003\u00022",
    ";l\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002",
    "\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002",
    "\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002",
    "\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002",
    "\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002",
    "\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002",
    "\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002",
    "\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002",
    "\u0002\u0003$\u0003\u0002\u0002\u0002\u0005*\u0003\u0002\u0002\u0002",
    "\u00072\u0003\u0002\u0002\u0002\t8\u0003\u0002\u0002\u0002\u000b>\u0003",
    "\u0002\u0002\u0002\rD\u0003\u0002\u0002\u0002\u000fQ\u0003\u0002\u0002",
    "\u0002\u0011T\u0003\u0002\u0002\u0002\u0013V\u0003\u0002\u0002\u0002",
    "\u0015X\u0003\u0002\u0002\u0002\u0017Z\u0003\u0002\u0002\u0002\u0019",
    "\\\u0003\u0002\u0002\u0002\u001b^\u0003\u0002\u0002\u0002\u001d`\u0003",
    "\u0002\u0002\u0002\u001fb\u0003\u0002\u0002\u0002!i\u0003\u0002\u0002",
    "\u0002#%\t\u0002\u0002\u0002$#\u0003\u0002\u0002\u0002%&\u0003\u0002",
    "\u0002\u0002&$\u0003\u0002\u0002\u0002&\'\u0003\u0002\u0002\u0002\'",
    "(\u0003\u0002\u0002\u0002()\b\u0002\u0002\u0002)\u0004\u0003\u0002\u0002",
    "\u0002*+\u0007f\u0002\u0002+,\u0007k\u0002\u0002,-\u0007i\u0002\u0002",
    "-.\u0007t\u0002\u0002./\u0007c\u0002\u0002/0\u0007r\u0002\u000201\u0007",
    "j\u0002\u00021\u0006\u0003\u0002\u0002\u000223\u0007n\u0002\u000234",
    "\u0007c\u0002\u000245\u0007d\u0002\u000256\u0007g\u0002\u000267\u0007",
    "n\u0002\u00027\b\u0003\u0002\u0002\u000289\u0007u\u0002\u00029:\u0007",
    "v\u0002\u0002:;\u0007{\u0002\u0002;<\u0007n\u0002\u0002<=\u0007g\u0002",
    "\u0002=\n\u0003\u0002\u0002\u0002>?\u0007u\u0002\u0002?@\u0007j\u0002",
    "\u0002@A\u0007c\u0002\u0002AB\u0007r\u0002\u0002BC\u0007g\u0002\u0002",
    "C\f\u0003\u0002\u0002\u0002DE\u0007f\u0002\u0002EF\u0007q\u0002\u0002",
    "FG\u0007w\u0002\u0002GH\u0007d\u0002\u0002HI\u0007n\u0002\u0002IJ\u0007",
    "g\u0002\u0002JK\u0007e\u0002\u0002KL\u0007k\u0002\u0002LM\u0007t\u0002",
    "\u0002MN\u0007e\u0002\u0002NO\u0007n\u0002\u0002OP\u0007g\u0002\u0002",
    "P\u000e\u0003\u0002\u0002\u0002QR\u0007/\u0002\u0002RS\u0007@\u0002",
    "\u0002S\u0010\u0003\u0002\u0002\u0002TU\u0007$\u0002\u0002U\u0012\u0003",
    "\u0002\u0002\u0002VW\u0007?\u0002\u0002W\u0014\u0003\u0002\u0002\u0002",
    "XY\u0007=\u0002\u0002Y\u0016\u0003\u0002\u0002\u0002Z[\u0007}\u0002",
    "\u0002[\u0018\u0003\u0002\u0002\u0002\\]\u0007\u007f\u0002\u0002]\u001a",
    "\u0003\u0002\u0002\u0002^_\u0007]\u0002\u0002_\u001c\u0003\u0002\u0002",
    "\u0002`a\u0007_\u0002\u0002a\u001e\u0003\u0002\u0002\u0002bf\t\u0003",
    "\u0002\u0002ce\t\u0004\u0002\u0002dc\u0003\u0002\u0002\u0002eh\u0003",
    "\u0002\u0002\u0002fd\u0003\u0002\u0002\u0002fg\u0003\u0002\u0002\u0002",
    "g \u0003\u0002\u0002\u0002hf\u0003\u0002\u0002\u0002ij\t\u0005\u0002",
    "\u0002j\"\u0003\u0002\u0002\u0002\u0005\u0002&f\u0003\b\u0002\u0002"].join("");


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


DotFileLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

DotFileLexer.prototype.literalNames = [ null, null, "'digraph'", "'label'", 
                                        "'style'", "'shape'", "'doublecircle'", 
                                        "'->'", "'\"'", "'='", "';'", "'{'", 
                                        "'}'", "'['", "']'" ];

DotFileLexer.prototype.symbolicNames = [ null, "WS", "GRAPH", "LABEL", "STYLE", 
                                         "SHAPE", "DOUBLE_CIRCLE", "TRANSITION", 
                                         "QUOTATION", "EQUAL", "SEMICOLON", 
                                         "OPEN_BRACKET", "CLOSE_BRACKET", 
                                         "OPEN_SQUARE", "CLOSE_SQUARE", 
                                         "NAME", "DIGIT" ];

DotFileLexer.prototype.ruleNames = [ "WS", "GRAPH", "LABEL", "STYLE", "SHAPE", 
                                     "DOUBLE_CIRCLE", "TRANSITION", "QUOTATION", 
                                     "EQUAL", "SEMICOLON", "OPEN_BRACKET", 
                                     "CLOSE_BRACKET", "OPEN_SQUARE", "CLOSE_SQUARE", 
                                     "NAME", "DIGIT" ];

DotFileLexer.prototype.grammarFileName = "DotFileLexer.g4";



exports.DotFileLexer = DotFileLexer;

