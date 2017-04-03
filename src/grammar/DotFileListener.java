// Generated from grammar/DotFile.g4 by ANTLR 4.7
package grammar;
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
	 * Enter a parse tree produced by {@link DotFileParser#instruction}.
	 * @param ctx the parse tree
	 */
	void enterInstruction(DotFileParser.InstructionContext ctx);
	/**
	 * Exit a parse tree produced by {@link DotFileParser#instruction}.
	 * @param ctx the parse tree
	 */
	void exitInstruction(DotFileParser.InstructionContext ctx);
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
	/**
	 * Enter a parse tree produced by {@link DotFileParser#labeling}.
	 * @param ctx the parse tree
	 */
	void enterLabeling(DotFileParser.LabelingContext ctx);
	/**
	 * Exit a parse tree produced by {@link DotFileParser#labeling}.
	 * @param ctx the parse tree
	 */
	void exitLabeling(DotFileParser.LabelingContext ctx);
	/**
	 * Enter a parse tree produced by {@link DotFileParser#shaping}.
	 * @param ctx the parse tree
	 */
	void enterShaping(DotFileParser.ShapingContext ctx);
	/**
	 * Exit a parse tree produced by {@link DotFileParser#shaping}.
	 * @param ctx the parse tree
	 */
	void exitShaping(DotFileParser.ShapingContext ctx);
}