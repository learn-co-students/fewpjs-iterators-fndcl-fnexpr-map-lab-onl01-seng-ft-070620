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
  return tutorials.map(tutorial => {
    let words = tutorial.split(" ")
    words = words.map(function(word){
      let letters = word.split("")
      letters[0] = letters[0].toUpperCase()
      return letters.join("")
    })
    tutorial = words.join(" ")
    return tutorial
  })
}
