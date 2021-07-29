function anagram(str1, str2) {
  if (str1.length !== str2.length) console.log(false)
  let str1Count = {};
  let str2Count = {};

  for (let letter of str1) {
    str1Count[letter] = (str1Count[letter] | 0) + 1;
  }
  for (let letter of str2) {
    str2Count[letter] = (str2Count[letter] | 0) + 1;
  }

  for (let letter of str1) {
    if (str1Count[letter] !== str2Count[letter]) {
      console.log('false');
      return false;
    }
  }
  console.log('true');
  return true
}

anagram("cinema", "iceman");