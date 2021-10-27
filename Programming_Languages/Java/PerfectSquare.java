package com.raman;

public class PerfectSquare {
    public static void main(String[] args) {
        System.out.println(isPerfectSquare(5));
    }
    static boolean isPerfectSquare(int num) {
        int start = 2;
        int end = num;
        while(start<=end){
            int mid = start + (end - start) / 2;
            if(mid == num/mid){
                if(num % mid == 0){
                    return true;
                }
                else {
                    return false;
                }
            } else if(mid > num/mid){
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return false;
    }
}
