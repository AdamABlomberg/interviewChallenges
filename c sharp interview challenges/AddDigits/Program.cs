using System;

namespace HelloWorld
{
    class Solution
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Console.WriteLine(AddDigits(345));

        }
        static int AddDigits(int num)
        {
          if(num == 0)
          {
            return 0;
          }
          int result = num;
          while(result >= 10)
          {
            result = AddDigitsOneNumber(result);
          }

          return result;
        }
        static int AddDigitsOneNumber(int num)
        {
          int result = 0;
          int count = 1;
          int lowestDigit;
          while(num >0)
          {
            lowestDigit = (int)(num % Math.Pow(10, count));
            result = result + (int)(lowestDigit/Math.Pow(10, count-1));
            num = num - lowestDigit;
            count++;
          }

          return result;
        }
    }
}
