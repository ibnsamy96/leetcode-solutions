function lengthOfLongestSubstring(s: string): number {
  let longestString = ``
  
  let tempString = ``
  for (const char of s) {
    const charIndex = tempString.indexOf(char)
    
    if (charIndex == -1) {
      tempString += char
              // console.log({char,tempString,comp:tempString.includes(char)})                      
     }

    else {
      // const subsequance = 
      if(tempString.length > longestString.length) longestString = tempString
        tempString = tempString.slice(charIndex+1) + char
   }
  }


return tempString.length > longestString.length ? tempString.length : longestString.length
};




/*
function lengthOfLongestSubstring(s: string): number {
  let longestString = ``
  
  let tempString = ``
  for (const char of s) {
    const charIndex = tempString.indexOf(char)
    if (charIndex == -1)
      tempString += char
    else if(tempString.length > longestString.length)
      [longestString,tempString] = [tempString,char]
  }


return tempString.length > longestString.length ? tempString.length : longestString.length
};
*/