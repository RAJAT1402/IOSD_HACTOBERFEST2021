import java.util.*;

public class GrayCode {

  public static List  grayCode(int n) {
    List< Integer> ans = new ArrayList< >();
    if (n == 0) {
      ans.add(0);
      return ans;
    }
    backtrack(ans, n);
    return ans;
  }

  static int temp;

  private static void backtrack(List ans, int n) {
    if (n == 0) {
      ans.add(temp);
      return;
    }

    backtrack(ans, n - 1);

    temp = temp ^ (1 << (n - 1));
    backtrack(ans, n - 1);
  } 
  
  public static void main(String[] args) {
    Scanner scn = new Scanner(System.in);
    List ans = grayCode(scn.nextInt());
    Collections.sort(ans);
    System.out.println(ans);
  }
}