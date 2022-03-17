public class Min {
    public static void main (String[] args){
        System.out.println("The minimum number of the following is: "+ min(12, 13));
    }
    public static int min (int num1, int num2){
        int output = 0;
        if (num1<num2)
            output = num1;
        else
            output=num2;
        return output;
    }
}
