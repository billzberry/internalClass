function validatePasswords(passwords) {
    let result = []
    for (let i = 0; i < passwords.length; i++) {
        if (
            containsUppercaseLetter(passwords[i]) && 
            containsLowercaseLetter(passwords[i]) && 
            containsNumber(passwords[i]) && 
            containsSymbol(passwords[i]) && 
            fiveOrMore(passwords[i])
        ) {
            result.push('Valid')
        } else {
            result.push('Invalid')
        }
    }
    return result
}
  console.log(validatePasswords([
    "StUFf27%",
    "Pl3nty!",
    "Jai33",
    "shajsaUA**&&",
    "Pl3nty!",
  ]))
  // Returns true if string contains at least one uppercase letter.
  function containsUppercaseLetter(string) {
    return /[A-Z]/.test(string);
  }
  
  // Returns true if string contains at least one lowercase letter.
  function containsLowercaseLetter(string) {
    return /[a-z]/.test(string);
  }
  
  // Returns true if string contains at least one number.
  function containsNumber(string) {
    return /[0-9]/.test(string);
  }
  
  // Returns true if string contains at least one symbol.
  function containsSymbol(string) {
    return /[!#$%.*&]/.test(string);
  }
  
  function fiveOrMore(string) {
    return string.length >= 5;
  }