using System;

namespace PlusOne;
class Program
{
    static void Main(string[] args)
    {
        int[] inputArray = {9,9,9};
        foreach(int integer in PlusOne(inputArray))
        {
            Console.WriteLine(integer);
        };
    }
    static int[] PlusOne(int[] digits)
    {
        int i = digits.Length;
        int value;
        do
        {
            i--;
            value = digits[i]+1;
            if(value < 10)
            {
                digits[i] = value;
            }
            else
            {
                digits[i] = 0;
            }
        }
        while (digits[i] == 0 && i > 0);
        if (digits[i] == 0)
        {
            Array.Resize(ref digits, digits.Length + 1);
            digits[0] = 1;
        }
        return digits;
    }

}
