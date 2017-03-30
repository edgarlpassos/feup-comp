// Generated from DotFile.g4 by ANTLR 4.6
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link DotFileParser}.
 */
public interface DotFileListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link DotFileParser#r}.
	 * @param ctx the parse tree
	 */
	void enterR(DotFileParser.RContext ctx);
	/**
	 * Exit a parse tree produced by {@link DotFileParser#r}.
	 * @param ctx the parse tree
	 */
	void exitR(DotFileParser.RContext ctx);
	/**
	 * Enter a parse tree produced by {@link DotFileParser#content}.
	 * @param ctx the parse tree
	 */
	void enterContent(DotFileParser.ContentContext ctx);
	/**
	 * Exit a parse tree produced by {@link DotFileParser#content}.
	 * @param ctx the parse tree
	 */
	void exitContent(DotFileParser.ContentContext ctx);
	/**
	 * Enter a parse tree produced by {@link DotFileParser#stateTransition}.
	 * @param ctx the parse tree
	 */
	void enterStateTransition(DotFileParser.StateTransitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link DotFileParser#stateTransition}.
	 * @param ctx the parse tree
	 */
	void exitStateTransition(DotFileParser.StateTransitionContext ctx);
}