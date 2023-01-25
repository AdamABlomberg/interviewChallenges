namespace RemoveDuplicates;
class Program
{
    static void Main(string[] args)
    {
        //Console.WriteLine("Hello, World!");
        int[] array = {1,1,1,3,4,5,6};
        Console.WriteLine(RemoveDuplicates(array));
    }
    static int RemoveDuplicates(int[] nums)
    {
        var numberPairs = new Dictionary<int, int>();
        foreach(int number in nums)
        {
            if(!numberPairs.ContainsKey(number))
            {
                numberPairs[number] = 1;
            }
            else
            {
                numberPairs[number]++;
            }
        }
        var keys = numberPairs.Keys;
        int[] result = new int [nums.Length];
        int i = 0;
        foreach (int key in keys)
        {
            result[i] = key;
            i++;
        }
        return nums.Length - keys.Count;
    }

}
