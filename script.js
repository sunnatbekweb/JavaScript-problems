// -------------------- front22 --------------------

/*
function front22(str){
  let front = str.substring(0, 2);
  return front + str + front
}
*/

// -------------------- startHi --------------------

/*
function startHi(str) {
    return str.startsWith('hi');
}
*/

// -------------------- in1020 ---------------------

/*
function in1020(a, b) {
    return (a >= 10 && a <= 20 || (b >= 10 && b <= 20))
}
*/


// -------------------- hasTen ---------------------

/*
function hasTeen(a, b, c) {
    return (a >= 13 && a <= 19) || (b >= 13 && b <= 19) || (c >= 13 && c <= 19)
}
*/

// -------------------- loneTeen --------------------

/*
function loneTeen(a, b) {
    if ((a >= 13 && a <= 19) && (b >= 13 && b <= 19)){
        return false
    } else if ((a >= 13 && a <= 19) || (b >= 13 && b <= 19)) {
        return true
    } else {
        return false
    }
}
*/

// -------------------- delDel --------------------

/*
function delDel(str) {
    if (str.substring(1, 4) === 'del') {
        return str.substring(0, 1) + str.substring(4);
    }
    return str;
}
*/

// -------------------- mixStart --------------------

/*
function mixStart(str) {
    return (/^.[iI][xX]/).test(str);
}
*/

// -------------------- startOz --------------------

/*
function startOz(str) {
    var result = "";
    if (str.length >= 1 && str.charAt(0) == 'o') {
        result = result + str.charAt(0);
    }
    if (str.length >= 2 && str.charAt(1) == 'z') {
        result = result + str.charAt(1);
    }
    return result;
}
*/

// -------------------- intMax --------------------

/*
function intMax(a, b, c) {
    return Math.max(a, b, c)
}
*/

// -------------------- close10 --------------------

/*
function close10(a, b) {
    if (Math.abs(10 - a) < Math.abs(10 - b)) {
        return a;
    } else if (Math.abs(10 - a) > Math.abs(10 - b)) {
        return b;
    } else {
        return 0;
    }
}
*/

// -------------------- in3050 --------------------

/*
function in3050(a, b) {
    if ((a >= 30 && a <= 40 && b >= 30 && b <= 40) || (a >= 40 && a <= 50 && b >= 40 && b <= 50)) {
        return true;
    } else {
        return false;
    }
}
*/

// -------------------- max1020 --------------------

/*
function max1020(a, b) {
    function inRange(v) {
        return v >= 10 && v <= 20 ? v : 0;
    }
    return Math.max(inRange(a), inRange(b));
}
*/

// -------------------- stringE --------------------

/*
function stringE(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === 'e') {
            count++;
        }
    }
    if (count > 0 && count < 4) {
        return true
    } else {
        return false
    }
}

*/

// -------------------- lastDigit --------------------

/*
function lastDigit(a, b, c){
  return a % 10 === b % 10;
}
*/

// -------------------- endUP ----------------------

/*
function endUp(str) {
    if (str.length < 3) {
        return str.toUpperCase();
    } else {
        return str.slice(0, -3) + str.slice(-3).toUpperCase();
    }
}
*/

// -------------------- everyNth -----------------------

function everyNth(str, n) {
    let result = '';
    for (let i = 0; i < str.length; i += n) {
        result += str.charAt(i);
    }
    return result;
}