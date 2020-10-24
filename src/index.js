const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let rowMorse = ''
    let result = ''
    let arr = []
    for (let i = 0; i < expr.length; i+=10) {
        arr.push(expr.slice(i, i + 10))
    }
    for(let code of arr) {
        if (code === '**********') rowMorse += '_'
        else {
            let startIndex = code.indexOf(1)
            for (let i = startIndex; i < code.length; i+=2) {
                if (code[i+1] === '0') rowMorse += '.'
                else rowMorse += '-'
            }
        }
        rowMorse += ' '
    }
    let arrMorse = rowMorse.trim().split(' ')
    for(let letter of arrMorse) {
        if (letter === '_') result += ' '
        else result += MORSE_TABLE[letter]
    }
    return result
}

module.exports = {
    decode
}