// Generated from DotFile.g4 by ANTLR 4.6
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class DotFileParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.6", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		WS=1, GRAPH=2, START=3, LABEL=4, STYLE=5, SHAPE=6, DOUBLE_CIRCLE=7, TRANSITION=8, 
		EQUAL=9, SEMICOLON=10, OPEN_BRACKET=11, CLOSE_BRACKET=12, OPEN_SQUARE=13, 
		CLOSE_SQUARE=14, NAME=15, DIGIT=16;
	public static final int
		RULE_r = 0, RULE_content = 1, RULE_stateTransition = 2;
	public static final String[] ruleNames = {
		"r", "content", "stateTransition"
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

	@Override
	public String getGrammarFileName() { return "DotFile.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public DotFileParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class RContext extends ParserRuleContext {
		public TerminalNode GRAPH() { return getToken(DotFileParser.GRAPH, 0); }
		public TerminalNode NAME() { return getToken(DotFileParser.NAME, 0); }
		public TerminalNode OPEN_BRACKET() { return getToken(DotFileParser.OPEN_BRACKET, 0); }
		public ContentContext content() {
			return getRuleContext(ContentContext.class,0);
		}
		public TerminalNode CLOSE_BRACKET() { return getToken(DotFileParser.CLOSE_BRACKET, 0); }
		public RContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_r; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DotFileListener ) ((DotFileListener)listener).enterR(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DotFileListener ) ((DotFileListener)listener).exitR(this);
		}
	}

	public final RContext r() throws RecognitionException {
		RContext _localctx = new RContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_r);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(6);
			match(GRAPH);
			setState(7);
			match(NAME);
			setState(8);
			match(OPEN_BRACKET);
			setState(9);
			content();
			setState(10);
			match(CLOSE_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ContentContext extends ParserRuleContext {
		public TerminalNode START() { return getToken(DotFileParser.START, 0); }
		public StateTransitionContext stateTransition() {
			return getRuleContext(StateTransitionContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(DotFileParser.SEMICOLON, 0); }
		public ContentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_content; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DotFileListener ) ((DotFileListener)listener).enterContent(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DotFileListener ) ((DotFileListener)listener).exitContent(this);
		}
	}

	public final ContentContext content() throws RecognitionException {
		ContentContext _localctx = new ContentContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_content);
		try {
			setState(17);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case START:
				enterOuterAlt(_localctx, 1);
				{
				setState(12);
				match(START);
				setState(13);
				stateTransition();
				setState(14);
				match(SEMICOLON);
				}
				break;
			case CLOSE_BRACKET:
				enterOuterAlt(_localctx, 2);
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StateTransitionContext extends ParserRuleContext {
		public TerminalNode TRANSITION() { return getToken(DotFileParser.TRANSITION, 0); }
		public TerminalNode NAME() { return getToken(DotFileParser.NAME, 0); }
		public StateTransitionContext stateTransition() {
			return getRuleContext(StateTransitionContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(DotFileParser.SEMICOLON, 0); }
		public StateTransitionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stateTransition; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DotFileListener ) ((DotFileListener)listener).enterStateTransition(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DotFileListener ) ((DotFileListener)listener).exitStateTransition(this);
		}
	}

	public final StateTransitionContext stateTransition() throws RecognitionException {
		StateTransitionContext _localctx = new StateTransitionContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_stateTransition);
		try {
			setState(27);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(19);
				match(TRANSITION);
				setState(20);
				match(NAME);
				setState(21);
				stateTransition();
				setState(22);
				match(SEMICOLON);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(24);
				match(TRANSITION);
				setState(25);
				match(NAME);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd\3\22 \4\2\t\2\4\3\t"+
		"\3\4\4\t\4\3\2\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\5\3\24\n\3\3\4"+
		"\3\4\3\4\3\4\3\4\3\4\3\4\3\4\5\4\36\n\4\3\4\2\2\5\2\4\6\2\2\37\2\b\3\2"+
		"\2\2\4\23\3\2\2\2\6\35\3\2\2\2\b\t\7\4\2\2\t\n\7\21\2\2\n\13\7\r\2\2\13"+
		"\f\5\4\3\2\f\r\7\16\2\2\r\3\3\2\2\2\16\17\7\5\2\2\17\20\5\6\4\2\20\21"+
		"\7\f\2\2\21\24\3\2\2\2\22\24\3\2\2\2\23\16\3\2\2\2\23\22\3\2\2\2\24\5"+
		"\3\2\2\2\25\26\7\n\2\2\26\27\7\21\2\2\27\30\5\6\4\2\30\31\7\f\2\2\31\36"+
		"\3\2\2\2\32\33\7\n\2\2\33\36\7\21\2\2\34\36\3\2\2\2\35\25\3\2\2\2\35\32"+
		"\3\2\2\2\35\34\3\2\2\2\36\7\3\2\2\2\4\23\35";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}