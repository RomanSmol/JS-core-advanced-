function printLastCharacter(str) {
    if (str.length === 0) {
        console.log("Строка пуста.");
    } 
    else {
        console.log(str[str.length - 1]);
    }
}

printLastCharacter("Hello, world!"); 
printLastCharacter("JavaScript");   
printLastCharacter("Привет");       
printLastCharacter("");           