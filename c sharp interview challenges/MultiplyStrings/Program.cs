using System;

namespace MultiplyStrings;
class Program
{
    static void Main(string[] args)
    {
        //Console.WriteLine("Hello, World!");
        Console.WriteLine(Multiply("-5","10"));
    }
    static string Multiply(string num1, string num2)
    {
        int number1;
        int number2;
        int.TryParse(num1, out number1);
        int.TryParse(num2, out number2);
        int result = number1*number2;
        string resultString = result.ToString();
        return resultString;
    }
}
