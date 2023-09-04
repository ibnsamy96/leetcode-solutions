function lengthOfLongestSubstring(s: string): number {
    let longestSubstring = ``
    
    let tempString = ``
    for (const char of s) {
        const charIndex = tempString.indexOf(char)
        
        if (charIndex == -1) tempString += char                      
        else {
            if(isNewLongSubstringFound()) longestSubstring = tempString
            tempString = tempString.slice(charIndex+1) + char
    }
    }


    function isNewLongSubstringFound () {
        return tempString.length > longestSubstring.length
    } 


    return isNewLongSubstringFound() ? tempString.length : longestSubstring.length
};