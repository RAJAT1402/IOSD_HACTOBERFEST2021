//Here is a C implementation of Bubble sort algorithm ,that works by 
//repeatedly swapping the adjacent elements if they are not following proper order.
#include <stdio.h>

void swap(int *x, int *y)
{
	int temp = *x;
	*x = *y;
	*y = temp;
}

// implementing bubble sort (assending order)
void bubbleSort(int arr[], int n)
{
int i, j;
for (i = 0; i < n-1; i++)	

	// last i elements are already in place
	for (j = 0; j < n-i-1; j++)
		if (arr[j] > arr[j+1])
			swap(&arr[j], &arr[j+1]);
}

// printing  array 
void printArray(int arr[], int size){
	int i;
	for (i=0; i < size; i++)
		printf("%d\n", arr[i]);
}

int main()
{
	int arr[6] ={7,9,1,6,2,8};
	int n = sizeof(arr)/sizeof(arr[0]);
	bubbleSort(arr, n);
	printf("Sorted array: \n");
	printArray(arr, n);
	return 0;
}
