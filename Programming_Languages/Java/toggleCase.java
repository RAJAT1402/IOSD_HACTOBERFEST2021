import java.util.*;
import java.io.*;

public class toggleCase {
    
    public static String toggle(String s)
    {
        StringBuilder sb=new StringBuilder(s);
        for(int i=0;i<s.length();i++)
        {
            char ch =s.charAt(i);
            if(ch>='A' && ch<='Z')   
            {
                // CONVERTING TO LOWER CASE
                // if bada hai to chotey mei convert karna hai 
                char lc =(char )('a'+ch-'A');
                sb.setCharAt(i, lc);
            }
            else if(ch>='a' && ch<='z')
            {
                // CONVERTING TO UPPER CASE
                char uc =(char )(ch -'a'+'A'); 
                sb.setCharAt(i, uc); 
            }
        }
        return sb.toString();
    }
    public static void main(String [] args)
    {
        // suppose the string passes is PushanVerma then it will become -pUSHANvERMA
        Scanner scn =new Scanner(System.in);
        String s=scn.next();
         System.out.println( toggle(s) );  
    }

}

