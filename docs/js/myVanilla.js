// Parameter lang is the element's id.
// depending on the id, change the text of elementts, and resize the text to 75%
function mouseOver(lang) {
    switch (lang) {
        case "JAVA":
            document.getElementById(lang).innerHTML = lang + '<br>' + "most familiar although heavyweight";
            break;
        case "JavaScript":
            document.getElementById(lang).innerHTML = lang + '<br>' + "what I used to do this feature";
            break;
        case "Python":
            document.getElementById(lang).innerHTML = lang + '<br>' + "so coool";
            break;
        case "C":
            document.getElementById(lang).innerHTML = lang + '<br>' + "hope I don't have to use it";
            break;
        case "PHP":
            document.getElementById(lang).innerHTML = lang + '<br>' + "do people still use it?";
            break;
        case "SQL":
            document.getElementById(lang).innerHTML = lang + '<br>' + "nothing to say about it";
            break;
    }
    document.getElementById(lang).style.fontSize = "75%";

}

// Parameter lang is the element's id.
// change the text back, and resize the font to its original size
function mouseOut(lang) {
    document.getElementById(lang).innerHTML = lang;
    document.getElementById(lang).style.fontSize = "133%";
}
