package main;;
import grammar.*;
import org.antlr.v4.runtime.*;

import java.io.IOException;

/**
 * Created by epassos on 4/3/17.
 */
public class Main {
    public static void main(String[] args){
       try {
            DotFileLexer lexer = new DotFileLexer(new ANTLRFileStream(args[0]));
            CommonTokenStream commonTokenStream = new CommonTokenStream(lexer);
            DotFile dotFile = new DotFile(commonTokenStream);

        } catch (IOException e) {
            e.printStackTrace();
        }

    }
}
