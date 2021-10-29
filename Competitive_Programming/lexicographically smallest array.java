import java.util.*;
import java.io.*;
public class Main{
  public static void main(String[] args) throws IOException{
   BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
   int t = Integer.parseInt(br.readLine());
   while(t-->0){
     String[] inp = br.readLine().split(" ");
     int n = Integer.parseInt(inp[0]),k = Integer.parseInt(inp[1]);
     String[] ar = br.readLine().split(" ");
     int[] a = new int[n];
     for(int i = 0 ; i < n ; i++){
          a[i] = Integer.parseInt(ar[i]);
      }
     int li=0,ri=n-1;
     while(k>0&&li<ri){
        if(a[li]==0){
           li++;
           continue;
        }
        a[li] = a[li] -1;
        a[ri] = a[ri] +1; 
        k-=1;
     }
     for(int i = 0 ; i < n ; i++){
          System.out.print(a[i]+" ");
      }
   }
}
}
