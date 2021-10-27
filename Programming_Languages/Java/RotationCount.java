package com.raman;

public class RotationCount {
    public static void main(String[] args) {
        int arr[]= {1,2,3,4,5,6};
        int pivot = pivot(arr);
        System.out.println(pivot+1);
    }
    static int pivot(int[] arr){
        int start = 0;
        int end = arr.length - 1;
        while (start<=end){
            int mid = start + (end-start)/2;
            if(mid<arr.length-1 && arr[mid]>arr[mid+1]){
                return mid;
            }
            if(mid<arr.length-1 && arr[mid-1]>arr[mid]){
                return mid-1;
            }
            if(arr[start] >= arr[mid]){
                end = mid-1;
            }
            if(arr[start] < arr[mid]){
                start = mid +1;
            }
        }
        return -1;
    }
}
