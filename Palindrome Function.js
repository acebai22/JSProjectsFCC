//function tests a word or phrase to see if it is a palindrome. Ignores spaces, case, and special characters.

function palindrome(str) {
    //convert to lowercase
    str = str.toLowerCase();
    //remove spaces
    str = str.replace(/\s+/g, '');
    //remove special characters
    str = str.replace(/[^a-zA-Z0-9 ]/g, '');
    //place each remaining character into an array
    str = str.split('');

    let newArr = [];
    //Iterates through all letters to see if they match. 
    //First letter compared to last, 2nd letter compared to 2nd last, etc.
    for (let i = 0; i < str.length; i++) {
        //pushes either True or False result to newArr.
        newArr.push(str[i] === str[str.length - (i + 1)]);
    }
    //Checks to see if newArr has any 'false' iterations. 
    //If it does, we return 'false' to show that the phrase is not a palindrome.
    if (newArr.includes(false) == true) {
        return false;
    }
    else {
        return true;
    }

}

console.log(palindrome('# Tenet'));
palindrome('# Tteenet');