class Cipher {
  constructor(key = randomChars(100).join('')) {
    if(!key || !key.search(/[^a-z]/g)) throw new Error('Bad key')
    this.key = key
  }

  encode(str) {
    return shiftUsingKey(this.key, str)
  }

  decode(str) {
    return shiftUsingKey(this.key, str, false)
  }
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function randomChar() {
  return String.fromCharCode(randomInt(97,122))
}

function randomChars(len) {
  return Array(len).fill(0).map(_ => randomChar())
}

function shiftUsingKey(key, str, encode = true) {
  // Reference: ensure key is at least as long as the target,
  // and convert to char codes.
  let shifts = [...key.repeat(Math.ceil(str.length / key.length))]
                      .map(char => char.charCodeAt(0) - 97)
  // Then map over the string, shifting each character
  return [...str].map((char, i) => {
    return (encode) ? shiftCharRight(char, shifts[i])
                    : shiftCharLeft(char, shifts[i])
  }).join('')
}

function shiftCharRight(char, shiftVal) {
  let ccode = char.charCodeAt(0) + shiftVal
  return String.fromCharCode((ccode > 122) ? 96 + (ccode - 122) : ccode)
}

function shiftCharLeft(char, shiftVal) {
  let ccode = char.charCodeAt(0) - shiftVal
  return String.fromCharCode((ccode < 97) ? 123 - (97 - ccode) : ccode)
}

export default Cipher