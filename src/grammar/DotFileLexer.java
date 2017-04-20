// Generated from /Users/mariajoaomirapaulo/Desktop/Joao/Feup_3Ano/feup-comp/src/grammar/DotFileLexer.g4 by ANTLR 4.6
package grammar;
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
		WS=1, GRAPH=2, LABEL=3, STYLE=4, SHAPE=5, DOUBLE_CIRCLE=6, TRANSITION=7, 
		QUOTATION=8, EQUAL=9, SEMICOLON=10, OPEN_BRACKET=11, CLOSE_BRACKET=12, 
		OPEN_SQUARE=13, CLOSE_SQUARE=14, NAME=15, DIGIT=16;
	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"WS", "GRAPH", "LABEL", "STYLE", "SHAPE", "DOUBLE_CIRCLE", "TRANSITION", 
		"QUOTATION", "EQUAL", "SEMICOLON", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_SQUARE", 
		"CLOSE_SQUARE", "NAME", "DIGIT"
	};

	private static final String[] _LITERAL_NAMES = {
		null, null, "'graph'", "'label'", "'style'", "'shape'", "'doublecircle'", 
		"'->'", "'\"'", "'='", "';'", "'{'", "'}'", "'['", "']'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "WS", "GRAPH", "LABEL", "STYLE", "SHAPE", "DOUBLE_CIRCLE", "TRANSITION", 
		"QUOTATION", "EQUAL", "SEMICOLON", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_SQUARE", 
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
	public String getGrammarFileName() { return "DotFileLexer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd\2\22i\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\3\2\6\2%\n"+
		"\2\r\2\16\2&\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3"+
		"\5\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7"+
		"\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\t\3\t\3\n\3\n\3\13\3\13\3\f"+
		"\3\f\3\r\3\r\3\16\3\16\3\17\3\17\3\20\3\20\7\20c\n\20\f\20\16\20f\13\20"+
		"\3\21\3\21\2\2\22\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31"+
		"\16\33\17\35\20\37\21!\22\3\2\6\5\2\13\f\17\17\"\"\4\2C\\c|\5\2\62;C\\"+
		"c|\3\2\62;j\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2"+
		"\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27"+
		"\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2"+
		"\2\3$\3\2\2\2\5*\3\2\2\2\7\60\3\2\2\2\t\66\3\2\2\2\13<\3\2\2\2\rB\3\2"+
		"\2\2\17O\3\2\2\2\21R\3\2\2\2\23T\3\2\2\2\25V\3\2\2\2\27X\3\2\2\2\31Z\3"+
		"\2\2\2\33\\\3\2\2\2\35^\3\2\2\2\37`\3\2\2\2!g\3\2\2\2#%\t\2\2\2$#\3\2"+
		"\2\2%&\3\2\2\2&$\3\2\2\2&\'\3\2\2\2\'(\3\2\2\2()\b\2\2\2)\4\3\2\2\2*+"+
		"\7i\2\2+,\7t\2\2,-\7c\2\2-.\7r\2\2./\7j\2\2/\6\3\2\2\2\60\61\7n\2\2\61"+
		"\62\7c\2\2\62\63\7d\2\2\63\64\7g\2\2\64\65\7n\2\2\65\b\3\2\2\2\66\67\7"+
		"u\2\2\678\7v\2\289\7{\2\29:\7n\2\2:;\7g\2\2;\n\3\2\2\2<=\7u\2\2=>\7j\2"+
		"\2>?\7c\2\2?@\7r\2\2@A\7g\2\2A\f\3\2\2\2BC\7f\2\2CD\7q\2\2DE\7w\2\2EF"+
		"\7d\2\2FG\7n\2\2GH\7g\2\2HI\7e\2\2IJ\7k\2\2JK\7t\2\2KL\7e\2\2LM\7n\2\2"+
		"MN\7g\2\2N\16\3\2\2\2OP\7/\2\2PQ\7@\2\2Q\20\3\2\2\2RS\7$\2\2S\22\3\2\2"+
		"\2TU\7?\2\2U\24\3\2\2\2VW\7=\2\2W\26\3\2\2\2XY\7}\2\2Y\30\3\2\2\2Z[\7"+
		"\177\2\2[\32\3\2\2\2\\]\7]\2\2]\34\3\2\2\2^_\7_\2\2_\36\3\2\2\2`d\t\3"+
		"\2\2ac\t\4\2\2ba\3\2\2\2cf\3\2\2\2db\3\2\2\2de\3\2\2\2e \3\2\2\2fd\3\2"+
		"\2\2gh\t\5\2\2h\"\3\2\2\2\5\2&d\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}