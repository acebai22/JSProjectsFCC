//function converts Arabic numbers to Roman numerals up to 9,999.
function convertToRoman(num) {
    //turns numbers into string
    let newNum = num.toString();
    //moves string characters to an array
    let myArr = newNum.split('');
    //creates blank array for roman numerals to be unshifted to
    let romNum = [];

    //Iterates through the ones place, then tens, then hundreds, then thousands and unshifts roman numeral value to each place.

    //ones place
    switch (myArr[myArr.length - 1]) {
        case '1':
            romNum.unshift('I');
            break;
        case '2':
            romNum.unshift('II');
            break;
        case '3':
            romNum.unshift('III');
            break;
        case '4':
            romNum.unshift('IV');
            break;
        case '5':
            romNum.unshift('V');
            break;
        case '6':
            romNum.unshift('VI');
            break;
        case '7':
            romNum.unshift('VII');
            break;
        case '8':
            romNum.unshift('VIII');
            break;
        case '9':
            romNum.unshift('IX');
            break;
    }
    //tens place
    switch (myArr[myArr.length - 2]) {
        case '1':
            romNum.unshift('X');
            break;
        case '2':
            romNum.unshift('XX');
            break;
        case '3':
            romNum.unshift('XXX');
            break;
        case '4':
            romNum.unshift('XL');
            break;
        case '5':
            romNum.unshift('L');
            break;
        case '6':
            romNum.unshift('LX');
            break;
        case '7':
            romNum.unshift('LXX');
            break;
        case '8':
            romNum.unshift('LXXX');
            break;
        case '9':
            romNum.unshift('XC');
            break;
    }
    //hundreds place
    switch (myArr[myArr.length - 3]) {
        case '1':
            romNum.unshift('C');
            break;
        case '2':
            romNum.unshift('CC');
            break;
        case '3':
            romNum.unshift('CCC');
            break;
        case '4':
            romNum.unshift('CD');
            break;
        case '5':
            romNum.unshift('D');
            break;
        case '6':
            romNum.unshift('DC');
            break;
        case '7':
            romNum.unshift('DCC');
            break;
        case '8':
            romNum.unshift('DCCC');
            break;
        case '9':
            romNum.unshift('CM');
            break;
    }
    //thousands place
    switch (myArr[myArr.length - 4]) {
        case '1':
            romNum.unshift('M');
            break;
        case '2':
            romNum.unshift('MM');
            break;
        case '3':
            romNum.unshift('MMM');
            break;
        case '4':
            romNum.unshift('MMMM');
            break;
        case '5':
            romNum.unshift('MMMMM');
            break;
        case '6':
            romNum.unshift('MMMMMM');
            break;
        case '7':
            romNum.unshift('MMMMMMM');
            break;
        case '8':
            romNum.unshift('MMMMMMMM');
            break;
        case '9':
            romNum.unshift('MMMMMMMMM');
            break;
    }

    //turns array back into a string of Roman numerals
    romNum = romNum.join('');
    return romNum;
}

convertToRoman(3999);