namespace c_sharp_interview_challenges;
public class Solution
{
    static void Main(string[] args)
    {
        Console.WriteLine(MySqrt(2147395599));
    }
    static int MySqrt(int x)
    {
        if(x == 1)
        {
            return 1;
        }
    long result = x/2;
    while(result*result>x)
        {
            result = result/2;
            Console.WriteLine(result);
        }
    while(!(result*result <= x && (result+1)*(result+1) > x))
        {
            result++;
        }

    return (int)result;
    }
}
