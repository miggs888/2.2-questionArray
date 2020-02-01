const questionList = [
    {question: 'What is the name of Morty\'s crush?', answer: 'Jessica'},
    {question: 'What is Rick\'s last name?', answer: 'Sanchez'},
    {question: 'What does Beth do for a living?', answer: 'Horse Surgeon'},
    {question: 'What is Rick\'s universe number?', answer: 'C-137'},
    {question: 'Whos is Rick\'s best freind?', answer: 'Bird Person'},
    {question: 'Who killed Bird Person?', answer: 'Tammy'},
    {question: 'What does Rick use to travel between universes?', answer: 'portal gun'},
    {question: 'What type of food does Rick turn himself into to avoid family therapy?', answer: 'pickle'},
    {question: 'What did Jerry major in while in college?', answer: 'civics'}
]
const randomQuestionIdx = questionList[Math.round(Math.random() * questionList.length -1)];
let userAnswer = prompt(randomQuestionIdx.question, "")
alert('You said "' + userAnswer + '".' + ' The correct answer is ' + randomQuestionIdx.answer +'.')
