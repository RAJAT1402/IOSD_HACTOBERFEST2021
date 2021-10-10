import java.io.*;
import java.util.*;

public class Main {
   static class Edge {
      int src;
      int nbr;
      int wt;

      Edge(int src, int nbr, int wt) {
         this.src = src;
         this.nbr = nbr;
         this.wt = wt;
      }
   }
   public static class Pair{
       int v;
       String psf;
       int level;
       
       Pair(int v,String psf,int level){
           this.v=v;
           this.psf=psf;
           this.level=level;
       }
   }

   public static void main(String[] args) throws Exception {
      BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

      int vtces = Integer.parseInt(br.readLine());
      ArrayList<Edge>[] graph = new ArrayList[vtces];
      for (int i = 0; i < vtces; i++) {
         graph[i] = new ArrayList<>();
      }

      int edges = Integer.parseInt(br.readLine());
      for (int i = 0; i < edges; i++) {
         String[] parts = br.readLine().split(" ");
         int v1 = Integer.parseInt(parts[0]);
         int v2 = Integer.parseInt(parts[1]);
         int wt = Integer.parseInt(parts[2]);
         graph[v1].add(new Edge(v1, v2, wt));
         graph[v2].add(new Edge(v2, v1, wt));
      }

      // write your code here
      int[] visited=new int[vtces];
      Arrays.fill(visited,-1);
      for(int v=0;v<vtces;v++){
          if(visited[v]!=-1){
              boolean IsComponent=Bipardite(graph,v,visited);
              if(IsComponent==false){
                  System.out.println(false);
                  return;
              }
          }
      }
      System.out.println(true);
   }
   public static boolean Bipardite(ArrayList<Edge>[] graph, int src,int[] visited){
       ArrayDeque<Pair> q=new ArrayDeque<>();
       q.add(new Pair(src,src+"",0));
       
       while(q.size()>0){
           Pair rem=q.removeFirst();
           
           if(visited[rem.v]!=-1){
               if(rem.level!=visited[rem.v]){
                   return false;
               }
           }else{
               visited[rem.v]=rem.level;
           }
           
           for(Edge e: graph[rem.v]){
               if(visited[e.nbr]==-1){
                   q.add(new Pair(e.nbr,rem.psf+e.nbr,rem.level+1));
               }
           }
       }
       return true;
   } 
}
