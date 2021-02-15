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

function reverse(string) {
    let newString = '';
    let words = string.split(' ');
    newString = words.reverse().join(' ');
    return newString;
}

console.log(reverse('How are you today Kevin and Fear'));

