
var repeatedSubstringPattern = function(s) {
    var repeatingString = '';
    var tempString = '';
    for(var i = 1; i < (s.length+1)/2; i++) {
        if (s.length%i == 0) {
            // check to see if the substring repeats
            repeatingString = s.substring(0,i);
            console.log(repeatingString);
            tempString = s;
            while(tempString.length > 0) {
                if(repeatingString != tempString.substring(0,i)) {
                    isRepeat = false;
                    break;
                }
                tempString = tempString.slice(i);
                if(tempString.length === 0) {
                    return true;
                }
            }

        }
    }
    return false;
};

console.log(repeatedSubstringPattern('ababababababa'));
