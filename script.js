/*
  1. Take the contents of the sonnet div and place it in a variable
  2. Find and output the starting position of the word "orphans"
  3. Output the number of characters in the sonnet
  4. Replace the first occurance of the string "winter" with "yuletide"
  5. Replace all occurances of the string "the" with "a large"
  6. Set the content of the sonnet div with the new string
*/

var sonnetElement = document.getElementById("sonnet");

var sonnetText = sonnetElement.innerHTML;
console.log("sonnetText", sonnetText);

var indexOfOrphans = sonnetText.indexOf("orphans");
console.log("indexOfOrphans", indexOfOrphans);
console.log("length of sonnet", sonnetText.length)

sonnetElement.innerHTML = sonnetText.replace("winter", "yuletide");
sonnetElement.innerHTML = sonnetText.replace(/the/g, "a large");