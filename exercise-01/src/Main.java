public class Main {
    public static void main(String[] args) {
        int[] arr = {5, 9, 6, 8, 4, 6};
        System.out.println(calculateSum(arr, arr.length));
    }
    public static int calculateSum(int[] arr, int size) {
        if (size < 1) return 0;
        return calculateSum(arr, size - 1) + arr[size - 1];
    }
}
