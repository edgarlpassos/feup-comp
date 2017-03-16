package src;

import java.io.File;

/**
 * Created by mariajoaomirapaulo on 16/03/17.
 */
public class ParserLauncher {


    public static void main(String args[]){
        String filepath = args[0];
        File dotFile = null;

        try {
            dotFile = new File(filepath);
        }
        catch (NullPointerException e){
            System.out.println("Error : Pathname Argument is null");
            e.printStackTrace();
        }

        Parser dotFileParser = new Parser(dotFile);

    }

}
