//offsets the input phrase by 13 letters for 'decoding' messages.

function rot13(str) {
    //creates alphabet table
    let myTable = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    //uppercases the string to be able to search the table
    str = str.toUpperCase();
    //splits uppercase string into array
    let myArr = str.split('');
    //iterates through array
    for (let j = 0; j < myArr.length; j++) {
        //switch deals with punctuation by leaving it in its spot. 
        //I'd like to rewrite this to ignore anything that isn't a letter and leave it in place.
        switch (myArr[j]) {
            case ' ':
                myArr[j] = ' ';
                break;
            case '!':
                myArr[j] = '!';
                break;
            case '.':
                myArr[j] = '.';
                break;
            case '?':
                myArr[j] = '?';
                break;
            //defaults to if/else, looking up letters from the table
            default:
                //if statement deals with looping back to the start of the table
                //since this is an alphabet, and an unchanging table
                if (myTable.indexOf(myArr[j]) + 13 >= 26) {
                    myArr[j] = myTable[myTable.indexOf(myArr[j]) + 13 - 26];
                }
                else {
                    myArr[j] = myTable[myTable.indexOf(myArr[j]) + 13];
                }
        }

    }
    //puts the array back into a string.
    return myArr.join('');

}

rot13("gur DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");