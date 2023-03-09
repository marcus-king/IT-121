function translatePhrase() {
  const input = document.getElementById("inputText");
  let returnField = document.getElementById("returnField");
  let words = input.split(" ");
  words.forEach(translateWord);
  let output = [];

  function translateWord(word) {
    let vowel = "aeiou";
    const vowels = (vowel + vowel.toUpperCase()).split("");
    const letters = value.split("");
    const suffix = ["ay", "way"];
    if (vowels.contains.letters[0]) {
      word = letters.join(" ") + suffix[1];
    } else {
      while (!vowels.contains.letters[0]) {
        letters[letters.length] = letters.shift();
      }
      word = letters.join(" ") + suffix[0];
    }
    output.push(word);
  }
  output = ouput.join(" ");
  returnField.innerText = output;
}