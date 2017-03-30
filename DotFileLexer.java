// Generated from DotFile.g4 by ANTLR 4.6
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class DotFileLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.6", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		WS=1, GRAPH=2, START=3, LABEL=4, STYLE=5, SHAPE=6, DOUBLE_CIRCLE=7, TRANSITION=8, 
		EQUAL=9, SEMICOLON=10, OPEN_BRACKET=11, CLOSE_BRACKET=12, OPEN_SQUARE=13, 
		CLOSE_SQUARE=14, NAME=15, DIGIT=16;
	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"WS", "GRAPH", "START", "LABEL", "STYLE", "SHAPE", "DOUBLE_CIRCLE", "TRANSITION", 
		"EQUAL", "SEMICOLON", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_SQUARE", 
		"CLOSE_SQUARE", "NAME", "DIGIT"
	};

	private static final String[] _LITERAL_NAMES = {
		null, null, "'graph'", "'start'", "'label'", "'style'", "'shape'", "'doublecircle'", 
		"'->'", "'='", "';'", "'{'", "'}'", "'['", "']'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "WS", "GRAPH", "START", "LABEL", "STYLE", "SHAPE", "DOUBLE_CIRCLE", 
		"TRANSITION", "EQUAL", "SEMICOLON", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_SQUARE", 
		"CLOSE_SQUARE", "NAME", "DIGIT"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public DotFileLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "DotFile.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd\2\22m\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\3\2\6\2%\n"+
		"\2\r\2\16\2&\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3"+
		"\5\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7"+
		"\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\n\3"+
		"\n\3\13\3\13\3\f\3\f\3\r\3\r\3\16\3\16\3\17\3\17\3\20\3\20\7\20g\n\20"+
		"\f\20\16\20j\13\20\3\21\3\21\2\2\22\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n"+
		"\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\22\3\2\6\5\2\13\f\17\17\"\""+
		"\4\2C\\c|\5\2\62;C\\c|\3\2\62;n\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2"+
		"\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2"+
		"\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2"+
		"\2\37\3\2\2\2\2!\3\2\2\2\3$\3\2\2\2\5*\3\2\2\2\7\60\3\2\2\2\t\66\3\2\2"+
		"\2\13<\3\2\2\2\rB\3\2\2\2\17H\3\2\2\2\21U\3\2\2\2\23X\3\2\2\2\25Z\3\2"+
		"\2\2\27\\\3\2\2\2\31^\3\2\2\2\33`\3\2\2\2\35b\3\2\2\2\37d\3\2\2\2!k\3"+
		"\2\2\2#%\t\2\2\2$#\3\2\2\2%&\3\2\2\2&$\3\2\2\2&\'\3\2\2\2\'(\3\2\2\2("+
		")\b\2\2\2)\4\3\2\2\2*+\7i\2\2+,\7t\2\2,-\7c\2\2-.\7r\2\2./\7j\2\2/\6\3"+
		"\2\2\2\60\61\7u\2\2\61\62\7v\2\2\62\63\7c\2\2\63\64\7t\2\2\64\65\7v\2"+
		"\2\65\b\3\2\2\2\66\67\7n\2\2\678\7c\2\289\7d\2\29:\7g\2\2:;\7n\2\2;\n"+
		"\3\2\2\2<=\7u\2\2=>\7v\2\2>?\7{\2\2?@\7n\2\2@A\7g\2\2A\f\3\2\2\2BC\7u"+
		"\2\2CD\7j\2\2DE\7c\2\2EF\7r\2\2FG\7g\2\2G\16\3\2\2\2HI\7f\2\2IJ\7q\2\2"+
		"JK\7w\2\2KL\7d\2\2LM\7n\2\2MN\7g\2\2NO\7e\2\2OP\7k\2\2PQ\7t\2\2QR\7e\2"+
		"\2RS\7n\2\2ST\7g\2\2T\20\3\2\2\2UV\7/\2\2VW\7@\2\2W\22\3\2\2\2XY\7?\2"+
		"\2Y\24\3\2\2\2Z[\7=\2\2[\26\3\2\2\2\\]\7}\2\2]\30\3\2\2\2^_\7\177\2\2"+
		"_\32\3\2\2\2`a\7]\2\2a\34\3\2\2\2bc\7_\2\2c\36\3\2\2\2dh\t\3\2\2eg\t\4"+
		"\2\2fe\3\2\2\2gj\3\2\2\2hf\3\2\2\2hi\3\2\2\2i \3\2\2\2jh\3\2\2\2kl\t\5"+
		"\2\2l\"\3\2\2\2\5\2&h\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}