// Generated from /Users/mariajoaomirapaulo/Desktop/Joao/Feup_3Ano/feup-comp/src/grammar/DotFile.g4 by ANTLR 4.6
package grammar;
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link DotFile}.
 */
public interface DotFileListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link DotFile#r}.
	 * @param ctx the parse tree
	 */
	void enterR(DotFile.RContext ctx);
	/**
	 * Exit a parse tree produced by {@link DotFile#r}.
	 * @param ctx the parse tree
	 */
	void exitR(DotFile.RContext ctx);
	/**
	 * Enter a parse tree produced by {@link DotFile#instruction}.
	 * @param ctx the parse tree
	 */
	void enterInstruction(DotFile.InstructionContext ctx);
	/**
	 * Exit a parse tree produced by {@link DotFile#instruction}.
	 * @param ctx the parse tree
	 */
	void exitInstruction(DotFile.InstructionContext ctx);
	/**
	 * Enter a parse tree produced by {@link DotFile#stateTransition}.
	 * @param ctx the parse tree
	 */
	void enterStateTransition(DotFile.StateTransitionContext ctx);
	/**
	 * Exit a parse tree produced by {@link DotFile#stateTransition}.
	 * @param ctx the parse tree
	 */
	void exitStateTransition(DotFile.StateTransitionContext ctx);
	/**
	 * Enter a parse tree produced by {@link DotFile#labeling}.
	 * @param ctx the parse tree
	 */
	void enterLabeling(DotFile.LabelingContext ctx);
	/**
	 * Exit a parse tree produced by {@link DotFile#labeling}.
	 * @param ctx the parse tree
	 */
	void exitLabeling(DotFile.LabelingContext ctx);
	/**
	 * Enter a parse tree produced by {@link DotFile#shaping}.
	 * @param ctx the parse tree
	 */
	void enterShaping(DotFile.ShapingContext ctx);
	/**
	 * Exit a parse tree produced by {@link DotFile#shaping}.
	 * @param ctx the parse tree
	 */
	void exitShaping(DotFile.ShapingContext ctx);
	/**
	 * Enter a parse tree produced by {@link DotFile#startpoint}.
	 * @param ctx the parse tree
	 */
	void enterStartpoint(DotFile.StartpointContext ctx);
	/**
	 * Exit a parse tree produced by {@link DotFile#startpoint}.
	 * @param ctx the parse tree
	 */
	void exitStartpoint(DotFile.StartpointContext ctx);
}