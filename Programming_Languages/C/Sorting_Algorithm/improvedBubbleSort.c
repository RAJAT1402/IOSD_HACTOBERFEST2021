// Here is an optimized implementation of Bubble sort.It is optimized with stopping the algorithm if inner loop didn’t cause any swap. 

#include <stdio.h>
#include <stdbool.h>

void swap(int *x, int *y)
{
	int temp = *x;
	*x = *y;
	*y = temp;
}

// optimized version of Bubble Sort
void bubbleSort(int arr[], int n)
{
int i, j;
bool swapped;
for (i = 0; i < n-1; i++)
{
	swapped = false;
	for (j = 0; j < n-i-1; j++)
	{
		if (arr[j] > arr[j+1])
		{
		swap(&arr[j], &arr[j+1]);
		swapped = true;
		}
	}

	// if swapping didn;t happen by inner loop, then break
	if (swapped == false)
		break;
}
}

//print an array 
void printArray(int arr[], int size)
{
	int i;
	for (i=0; i < size; i++)
		printf("%d ", arr[i]);
	printf("\n");
}

int main()
{
	int arr[6] = {7,9,1,6,2,8};
	int n = sizeof(arr)/sizeof(arr[0]);
	bubbleSort(arr, n);
	printf("Sorted array: ");
	printArray(arr, n);
	return 0;
}
