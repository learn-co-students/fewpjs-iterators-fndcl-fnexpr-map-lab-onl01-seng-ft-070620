// pry = require('pryjs')

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
  let newTutorials = tutorials.map( title => {
    let words = title.split(" ")
    
    let titleCase = words.map( word => {
      return word.replace(word.charAt(0), word[0].toUpperCase())
    })
    return titleCase.join(" ")
  })
  return newTutorials
}

// console.log(titleCased())