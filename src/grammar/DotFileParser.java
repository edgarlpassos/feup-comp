// Generated from grammar/DotFile.g4 by ANTLR 4.7
package grammar;
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
	static { RuntimeMetaData.checkVersion("4.7", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		WS=1, GRAPH=2, LABEL=3, STYLE=4, SHAPE=5, DOUBLE_CIRCLE=6, TRANSITION=7, 
		QUOTATION=8, EQUAL=9, SEMICOLON=10, OPEN_BRACKET=11, CLOSE_BRACKET=12, 
		OPEN_SQUARE=13, CLOSE_SQUARE=14, NAME=15, DIGIT=16;
	public static final int
		RULE_r = 0, RULE_instruction = 1, RULE_stateTransition = 2, RULE_labeling = 3, 
		RULE_shaping = 4;
	public static final String[] ruleNames = {
		"r", "instruction", "stateTransition", "labeling", "shaping"
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
		public InstructionContext instruction() {
			return getRuleContext(InstructionContext.class,0);
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
			setState(10);
			match(GRAPH);
			setState(11);
			match(NAME);
			setState(12);
			match(OPEN_BRACKET);
			setState(13);
			instruction();
			setState(14);
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

	public static class InstructionContext extends ParserRuleContext {
		public TerminalNode NAME() { return getToken(DotFileParser.NAME, 0); }
		public StateTransitionContext stateTransition() {
			return getRuleContext(StateTransitionContext.class,0);
		}
		public ShapingContext shaping() {
			return getRuleContext(ShapingContext.class,0);
		}
		public InstructionContext instruction() {
			return getRuleContext(InstructionContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(DotFileParser.SEMICOLON, 0); }
		public InstructionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_instruction; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DotFileListener ) ((DotFileListener)listener).enterInstruction(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DotFileListener ) ((DotFileListener)listener).exitInstruction(this);
		}
	}

	public final InstructionContext instruction() throws RecognitionException {
		InstructionContext _localctx = new InstructionContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_instruction);
		try {
			setState(24);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NAME:
				enterOuterAlt(_localctx, 1);
				{
				setState(16);
				match(NAME);
				setState(17);
				stateTransition();
				setState(18);
				shaping();
				setState(19);
				instruction();
				}
				break;
			case SEMICOLON:
				enterOuterAlt(_localctx, 2);
				{
				setState(21);
				match(SEMICOLON);
				setState(22);
				instruction();
				}
				break;
			case CLOSE_BRACKET:
				enterOuterAlt(_localctx, 3);
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
		public LabelingContext labeling() {
			return getRuleContext(LabelingContext.class,0);
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
			setState(36);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(26);
				match(TRANSITION);
				setState(27);
				match(NAME);
				setState(28);
				stateTransition();
				setState(29);
				labeling();
				setState(30);
				match(SEMICOLON);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(32);
				match(TRANSITION);
				setState(33);
				match(NAME);
				setState(34);
				labeling();
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

	public static class LabelingContext extends ParserRuleContext {
		public TerminalNode OPEN_SQUARE() { return getToken(DotFileParser.OPEN_SQUARE, 0); }
		public TerminalNode LABEL() { return getToken(DotFileParser.LABEL, 0); }
		public TerminalNode EQUAL() { return getToken(DotFileParser.EQUAL, 0); }
		public List<TerminalNode> QUOTATION() { return getTokens(DotFileParser.QUOTATION); }
		public TerminalNode QUOTATION(int i) {
			return getToken(DotFileParser.QUOTATION, i);
		}
		public TerminalNode NAME() { return getToken(DotFileParser.NAME, 0); }
		public TerminalNode CLOSE_SQUARE() { return getToken(DotFileParser.CLOSE_SQUARE, 0); }
		public LabelingContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_labeling; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DotFileListener ) ((DotFileListener)listener).enterLabeling(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DotFileListener ) ((DotFileListener)listener).exitLabeling(this);
		}
	}

	public final LabelingContext labeling() throws RecognitionException {
		LabelingContext _localctx = new LabelingContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_labeling);
		try {
			setState(46);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(38);
				match(OPEN_SQUARE);
				setState(39);
				match(LABEL);
				setState(40);
				match(EQUAL);
				setState(41);
				match(QUOTATION);
				setState(42);
				match(NAME);
				setState(43);
				match(QUOTATION);
				setState(44);
				match(CLOSE_SQUARE);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
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

	public static class ShapingContext extends ParserRuleContext {
		public TerminalNode OPEN_SQUARE() { return getToken(DotFileParser.OPEN_SQUARE, 0); }
		public TerminalNode SHAPE() { return getToken(DotFileParser.SHAPE, 0); }
		public TerminalNode EQUAL() { return getToken(DotFileParser.EQUAL, 0); }
		public List<TerminalNode> QUOTATION() { return getTokens(DotFileParser.QUOTATION); }
		public TerminalNode QUOTATION(int i) {
			return getToken(DotFileParser.QUOTATION, i);
		}
		public TerminalNode DOUBLE_CIRCLE() { return getToken(DotFileParser.DOUBLE_CIRCLE, 0); }
		public TerminalNode CLOSE_SQUARE() { return getToken(DotFileParser.CLOSE_SQUARE, 0); }
		public ShapingContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_shaping; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DotFileListener ) ((DotFileListener)listener).enterShaping(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DotFileListener ) ((DotFileListener)listener).exitShaping(this);
		}
	}

	public final ShapingContext shaping() throws RecognitionException {
		ShapingContext _localctx = new ShapingContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_shaping);
		try {
			setState(56);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OPEN_SQUARE:
				enterOuterAlt(_localctx, 1);
				{
				setState(48);
				match(OPEN_SQUARE);
				setState(49);
				match(SHAPE);
				setState(50);
				match(EQUAL);
				setState(51);
				match(QUOTATION);
				setState(52);
				match(DOUBLE_CIRCLE);
				setState(53);
				match(QUOTATION);
				setState(54);
				match(CLOSE_SQUARE);
				}
				break;
			case SEMICOLON:
			case CLOSE_BRACKET:
			case NAME:
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

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\22=\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\3\2\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\5\3\33\n\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\5\4\'"+
		"\n\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\5\5\61\n\5\3\6\3\6\3\6\3\6\3\6\3"+
		"\6\3\6\3\6\5\6;\n\6\3\6\2\2\7\2\4\6\b\n\2\2\2=\2\f\3\2\2\2\4\32\3\2\2"+
		"\2\6&\3\2\2\2\b\60\3\2\2\2\n:\3\2\2\2\f\r\7\4\2\2\r\16\7\21\2\2\16\17"+
		"\7\r\2\2\17\20\5\4\3\2\20\21\7\16\2\2\21\3\3\2\2\2\22\23\7\21\2\2\23\24"+
		"\5\6\4\2\24\25\5\n\6\2\25\26\5\4\3\2\26\33\3\2\2\2\27\30\7\f\2\2\30\33"+
		"\5\4\3\2\31\33\3\2\2\2\32\22\3\2\2\2\32\27\3\2\2\2\32\31\3\2\2\2\33\5"+
		"\3\2\2\2\34\35\7\t\2\2\35\36\7\21\2\2\36\37\5\6\4\2\37 \5\b\5\2 !\7\f"+
		"\2\2!\'\3\2\2\2\"#\7\t\2\2#$\7\21\2\2$\'\5\b\5\2%\'\3\2\2\2&\34\3\2\2"+
		"\2&\"\3\2\2\2&%\3\2\2\2\'\7\3\2\2\2()\7\17\2\2)*\7\5\2\2*+\7\13\2\2+,"+
		"\7\n\2\2,-\7\21\2\2-.\7\n\2\2.\61\7\20\2\2/\61\3\2\2\2\60(\3\2\2\2\60"+
		"/\3\2\2\2\61\t\3\2\2\2\62\63\7\17\2\2\63\64\7\7\2\2\64\65\7\13\2\2\65"+
		"\66\7\n\2\2\66\67\7\b\2\2\678\7\n\2\28;\7\20\2\29;\3\2\2\2:\62\3\2\2\2"+
		":9\3\2\2\2;\13\3\2\2\2\6\32&\60:";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}