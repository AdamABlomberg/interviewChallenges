using System.Collections;

namespace ValidParentheses;
class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine(IsValid("}"));
    }
    static bool IsValid(string s)
    {
        //convert the string to a list of characters
        List<char> chars = new List<char>();
        chars.AddRange(s);
        List<char> parenthesesOpen = new List<char>();
        parenthesesOpen.Add('(');
        parenthesesOpen.Add('{');
        parenthesesOpen.Add('[');
        List<char> parenthesesClose = new List<char>();
        parenthesesClose.Add(')');
        parenthesesClose.Add('}');
        parenthesesClose.Add(']');
        // make a stack
        var parenthesePairs = new Dictionary<char, char>()
        {
            {'[',']'},
            {'{','}'},
            {'(',')'}
        };
        Stack myStack = new Stack();
        char top;
        bool popped;

        foreach(char c in chars)
        {
            popped = false;
            if (parenthesesOpen.IndexOf(c) != -1)
            {
                myStack.Push(c);
            }
            if(myStack.Count > 0)
            {
                top = (char)myStack.Peek();
                if(c == parenthesePairs[top])
                {
                    myStack.Pop();
                    popped = true;
                }
            }
            if(parenthesesClose.IndexOf(c) != -1 && !popped)
            {
                return false;
            }

        }
        if(myStack.Count > 0)
        {
            return false;
        }
        else
        {
            return true;
        }
    }
}
