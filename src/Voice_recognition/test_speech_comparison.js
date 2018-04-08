/**
 * Recognized text comparison
 * Author: Christian Roncal
 **/

/* return true if char is space */
function isWhiteSpace(char) {
    return " \t\n".includes(char);
}

/* return true if char is punctuation */
function isPunct(char) {
    return ";:.,?!-'\"(){}".includes(char);
}

/* strip punctuation and spaces from @param string */
function compress(string) {
    return string
      .split("")
      .filter(char => !isWhiteSpace(char) && !isPunct(char))
      .join("");
}

/* checks if result, phrase are the same */
exports.compare_strings = function compare_strings(result, phrase)
{
    var result_punctuationless = compress(result).toUpperCase();
    var phrase_punctuationless = compress(phrase).toUpperCase();

      console.log("result punctuationless: " + result_punctuationless);
      console.log("phrase punctuationless: " + phrase_punctuationless);
      return (result_punctuationless === phrase_punctuationless);
}
