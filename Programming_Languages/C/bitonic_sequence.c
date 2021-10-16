 #include<stdio.h>
int bitonic(int arr[], int left, int right) 
{ 
    if (left <= right) 
    { 
        int mid = (left+right)/2; 
  
   
        if (arr[mid-1]<arr[mid] && arr[mid]>arr[mid+1]) 
            return mid; 
  
  
        if (arr[mid] < arr[mid+1]) 
            return bitonic(arr, mid+1,right); 
        else
            return bitonic(arr, left, mid-1); 
    } 
  
    return -1; 
} 
  

int main() 
{ 
    int arr[] = {55, 72, 132, 97, 15, 27, 177, -35, -85, -127}; 
    int n = sizeof(arr)/sizeof(arr[0]); 
    int index = bitonic(arr, 1, n-2); 
    if (index != -1) 
       printf("the point is : %d",index);
    return 0; 
} 
