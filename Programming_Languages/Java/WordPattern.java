import java.util.*;

public class WordPattern {

  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    String pattern = scn.nextLine();
    String words = scn.nextLine();
    System.out.println(wordPattern(pattern, words));
  }

  public static boolean wordPattern(String pattern, String str) {
    String[] words = str.split(" ");
    if (arr.length != pattern.length()) {
      return false;
    }
    HashMap< Character, String> map = new HashMap< Character, String>();
    HashMap< Character, String> used = new HashMap< String, Boolean>();

    for (int i = 0; i < pattern.length(); i++) {
      char c = pattern.charAt(i);
      if (map.containsKey(c) == false) {
        if
        (used.containsKey(words[i]) == true) {
          return false;
        }
        else {
          used.put(words[i], true);
          map.put(c, words[i]);
        }
      }
      else {
        String
        mwith = map.get(c);
        if (mwith.equals(words[i]) == false) {
          return false;
        }
      }
    }
    return true;
  }
}