// Generated from /Users/mariajoaomirapaulo/Desktop/Joao/Feup_3Ano/feup-comp/src/grammar/DotFile.g4 by ANTLR 4.6
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
public class DotFile extends Parser {
	static { RuntimeMetaData.checkVersion("4.6", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		WS=1, GRAPH=2, LABEL=3, STYLE=4, SHAPE=5, DOUBLE_CIRCLE=6, TRANSITION=7, 
		QUOTATION=8, EQUAL=9, SEMICOLON=10, OPEN_BRACKET=11, CLOSE_BRACKET=12, 
		OPEN_SQUARE=13, CLOSE_SQUARE=14, NAME=15, DIGIT=16;
	public static final int
		RULE_r = 0, RULE_instruction = 1, RULE_stateTransition = 2, RULE_labeling = 3, 
		RULE_shaping = 4, RULE_startpoint = 5;
	public static final String[] ruleNames = {
		"r", "instruction", "stateTransition", "labeling", "shaping", "startpoint"
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

	public DotFile(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class RContext extends ParserRuleContext {
		public TerminalNode GRAPH() { return getToken(DotFile.GRAPH, 0); }
		public TerminalNode NAME() { return getToken(DotFile.NAME, 0); }
		public TerminalNode OPEN_BRACKET() { return getToken(DotFile.OPEN_BRACKET, 0); }
		public InstructionContext instruction() {
			return getRuleContext(InstructionContext.class,0);
		}
		public TerminalNode CLOSE_BRACKET() { return getToken(DotFile.CLOSE_BRACKET, 0); }
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
			setState(12);
			match(GRAPH);
			setState(13);
			match(NAME);
			setState(14);
			match(OPEN_BRACKET);
			setState(15);
			instruction();
			setState(16);
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
		public TerminalNode NAME() { return getToken(DotFile.NAME, 0); }
		public StateTransitionContext stateTransition() {
			return getRuleContext(StateTransitionContext.class,0);
		}
		public ShapingContext shaping() {
			return getRuleContext(ShapingContext.class,0);
		}
		public InstructionContext instruction() {
			return getRuleContext(InstructionContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(DotFile.SEMICOLON, 0); }
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
			setState(26);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NAME:
				enterOuterAlt(_localctx, 1);
				{
				setState(18);
				match(NAME);
				setState(19);
				stateTransition();
				setState(20);
				shaping();
				setState(21);
				instruction();
				}
				break;
			case SEMICOLON:
				enterOuterAlt(_localctx, 2);
				{
				setState(23);
				match(SEMICOLON);
				setState(24);
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
		public TerminalNode TRANSITION() { return getToken(DotFile.TRANSITION, 0); }
		public TerminalNode NAME() { return getToken(DotFile.NAME, 0); }
		public StateTransitionContext stateTransition() {
			return getRuleContext(StateTransitionContext.class,0);
		}
		public LabelingContext labeling() {
			return getRuleContext(LabelingContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(DotFile.SEMICOLON, 0); }
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
			setState(38);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(28);
				match(TRANSITION);
				setState(29);
				match(NAME);
				setState(30);
				stateTransition();
				setState(31);
				labeling();
				setState(32);
				match(SEMICOLON);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(34);
				match(TRANSITION);
				setState(35);
				match(NAME);
				setState(36);
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
		public TerminalNode OPEN_SQUARE() { return getToken(DotFile.OPEN_SQUARE, 0); }
		public TerminalNode LABEL() { return getToken(DotFile.LABEL, 0); }
		public TerminalNode EQUAL() { return getToken(DotFile.EQUAL, 0); }
		public List<TerminalNode> QUOTATION() { return getTokens(DotFile.QUOTATION); }
		public TerminalNode QUOTATION(int i) {
			return getToken(DotFile.QUOTATION, i);
		}
		public TerminalNode NAME() { return getToken(DotFile.NAME, 0); }
		public TerminalNode CLOSE_SQUARE() { return getToken(DotFile.CLOSE_SQUARE, 0); }
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
			setState(48);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(40);
				match(OPEN_SQUARE);
				setState(41);
				match(LABEL);
				setState(42);
				match(EQUAL);
				setState(43);
				match(QUOTATION);
				setState(44);
				match(NAME);
				setState(45);
				match(QUOTATION);
				setState(46);
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
		public TerminalNode OPEN_SQUARE() { return getToken(DotFile.OPEN_SQUARE, 0); }
		public TerminalNode SHAPE() { return getToken(DotFile.SHAPE, 0); }
		public TerminalNode EQUAL() { return getToken(DotFile.EQUAL, 0); }
		public List<TerminalNode> QUOTATION() { return getTokens(DotFile.QUOTATION); }
		public TerminalNode QUOTATION(int i) {
			return getToken(DotFile.QUOTATION, i);
		}
		public TerminalNode DOUBLE_CIRCLE() { return getToken(DotFile.DOUBLE_CIRCLE, 0); }
		public TerminalNode CLOSE_SQUARE() { return getToken(DotFile.CLOSE_SQUARE, 0); }
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
			setState(58);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case OPEN_SQUARE:
				enterOuterAlt(_localctx, 1);
				{
				setState(50);
				match(OPEN_SQUARE);
				setState(51);
				match(SHAPE);
				setState(52);
				match(EQUAL);
				setState(53);
				match(QUOTATION);
				setState(54);
				match(DOUBLE_CIRCLE);
				setState(55);
				match(QUOTATION);
				setState(56);
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

	public static class StartpointContext extends ParserRuleContext {
		public RContext r() {
			return getRuleContext(RContext.class,0);
		}
		public StartpointContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_startpoint; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof DotFileListener ) ((DotFileListener)listener).enterStartpoint(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof DotFileListener ) ((DotFileListener)listener).exitStartpoint(this);
		}
	}

	public final StartpointContext startpoint() throws RecognitionException {
		StartpointContext _localctx = new StartpointContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_startpoint);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(60);
			r();
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
		"\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd\3\22A\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\3\2\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\5\3\35\n\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3"+
		"\4\5\4)\n\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\5\5\63\n\5\3\6\3\6\3\6\3\6"+
		"\3\6\3\6\3\6\3\6\5\6=\n\6\3\7\3\7\3\7\2\2\b\2\4\6\b\n\f\2\2@\2\16\3\2"+
		"\2\2\4\34\3\2\2\2\6(\3\2\2\2\b\62\3\2\2\2\n<\3\2\2\2\f>\3\2\2\2\16\17"+
		"\7\4\2\2\17\20\7\21\2\2\20\21\7\r\2\2\21\22\5\4\3\2\22\23\7\16\2\2\23"+
		"\3\3\2\2\2\24\25\7\21\2\2\25\26\5\6\4\2\26\27\5\n\6\2\27\30\5\4\3\2\30"+
		"\35\3\2\2\2\31\32\7\f\2\2\32\35\5\4\3\2\33\35\3\2\2\2\34\24\3\2\2\2\34"+
		"\31\3\2\2\2\34\33\3\2\2\2\35\5\3\2\2\2\36\37\7\t\2\2\37 \7\21\2\2 !\5"+
		"\6\4\2!\"\5\b\5\2\"#\7\f\2\2#)\3\2\2\2$%\7\t\2\2%&\7\21\2\2&)\5\b\5\2"+
		"\')\3\2\2\2(\36\3\2\2\2($\3\2\2\2(\'\3\2\2\2)\7\3\2\2\2*+\7\17\2\2+,\7"+
		"\5\2\2,-\7\13\2\2-.\7\n\2\2./\7\21\2\2/\60\7\n\2\2\60\63\7\20\2\2\61\63"+
		"\3\2\2\2\62*\3\2\2\2\62\61\3\2\2\2\63\t\3\2\2\2\64\65\7\17\2\2\65\66\7"+
		"\7\2\2\66\67\7\13\2\2\678\7\n\2\289\7\b\2\29:\7\n\2\2:=\7\20\2\2;=\3\2"+
		"\2\2<\64\3\2\2\2<;\3\2\2\2=\13\3\2\2\2>?\5\2\2\2?\r\3\2\2\2\6\34(\62<";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}