//Multiple ways to solve the same problem, some more efficient than others

var string = "Hellowjnbvjekwbvkjwerbv.kjhberqfbvqkejb  $%%R$^%$^   12563542388343847347v"

const charCount = (str) => {
    let object = {}

    let charArray = str.toLowerCase().split("")

    let acceptableChar = "abcdefghijklmnopqrstuvwxyz123456789"
    let acceptableCharArray = acceptableChar.split("")

    for (let i = 0; i < charArray.length; i++) {
        if (acceptableCharArray.includes(charArray[i])) {
            if (object[charArray[i]] > 0) {
                object[charArray[i]] += 1
            } else {
                object[charArray[i]] = 1
            }
        }
    }

    console.log(object)
}


// charCount(string)

//improved, with regex, avoids need for creating acceptable string/array, as well as replaces for loop with for of loop, simplifying the whole expression, replacing if else with a ternary


const charCount2 = (str) => {
    let object = {}

    let charArray = str.toLowerCase().split("")


    for (let char of charArray) {
        if (/[a-z0-9]/.test(char)) {
            object[char] > 0 ? object[char] += 1 : object[char] = 1
            //or 
            // object[char] = ++object[char] || 1
        }
    }

    console.log(object)
}

//charCount2(string)


//here we replace regex with a helper function, supposedly character codes are most efficient then regex
const charCount3 = (str) => {
    let object = {}
    let string = str.toLowerCase()
    for (let char of string) {
        if (isAlphaNumeric(char)) {
            object[char] > 0 ? object[char] += 1 : object[char] = 1
            //or 
            // object[char] = ++object[char] || 1
        }
    }

    console.log(object)
}


const isAlphaNumeric = (char) => {
    const code = char.charCodeAt(0)
    if (!(code > 47 && code < 58) && // numeric 0-9
        !(code > 64 && code < 91) && // upper case letters 
        !(code > 96 && code < 123)) {  // lower case numbers
        return false
    }

    return true
}

charCount3(string)