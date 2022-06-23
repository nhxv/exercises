const arr: number[] = [5, 9, 6, 8, 4, 6];
console.log(calculateSum(arr, arr.length));

function calculateSum(arr, size): number {
  if (size < 1) return 0;
  return calculateSum(arr, size - 1) + arr[size - 1];
}