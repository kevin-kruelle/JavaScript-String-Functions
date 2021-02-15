console.log('connected...')


//Step 1
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

//Step 2
function reverse(string) {
    let newString = '';
    let words = string.split(' ');
    newString = words.reverse().join(' ');
    return newString;
}

console.log(reverse('How are you today Kevin and Fear'));

//Step 3
function camelCaseReverse(string) {
    let newString = '';
    let words = string.split(' ');
    for(let i = 0; i < words.length; i++) {
       words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1);
    }
    newString = words.reverse().join('');
    return newString
}

console.log(camelCaseReverse('How are you today Kevin and Fear'));

//Step 4
function removeFirstAndLast(string) {
    let newString = '';
    let words = string.split(' ');
    for(let i = 0; i < words.length; i++) {
       words[i] = words[i].slice(1, -1);
    }
    newString = words.join(' ');
    return newString
}

console.log(removeFirstAndLast('How are you today Kevin and Fear'))