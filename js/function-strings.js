console.log('connected...')



function camelCase(string) {
    let newString = '';
    let words = string.split(' ');
    for(let i = 0; i < words.length; i++) {
       words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1);
    }
    newString = words.join('');
    return newString
}

console.log(camelCase('How are you'));