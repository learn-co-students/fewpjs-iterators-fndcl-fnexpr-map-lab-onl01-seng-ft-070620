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

// split each tutorial string into words
// capitalize the first letter for each word and append it with the rest of the word
// join the words back into a full string
const titleCased = () => {
  return tutorials.map(tutorial =>
    tutorial.split(" ")
    .map( str => str[0].toUpperCase() + str.slice(1) )
    .join(" ")
  )
}
