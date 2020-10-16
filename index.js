const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const newTutorials = tutorials.map(makeTitleCased)
  return newTutorials
}

function makeTitleCased(sentence) {
  const words = sentence.split(' ')
  let newSentence = ''
  for (let word of words) {
    let newWord = word[0].toUpperCase() + word.slice(1)
    if (words.indexOf(word) === 0) {
      newSentence += newWord
    } else {
      newSentence += ' ' + newWord
    }
  }
  return newSentence
}