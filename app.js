// import functions and grab DOM elements
import { renderPoll1 } from "./utils.js"

const questionOneEL = document.querySelector('.question1')
const questionTwoEL = document.querySelector('.question2')

const optionACountEL = document.querySelector('.optA-count')
const optionAEL = document.querySelector('.optA')

const optionCountBEL = document.querySelector('.optB-count')
const optionBEL = document.querySelector('.optB')

const pollOneADDEL = document.querySelector('.poll1-increment')
const pollOneSUBTRACTEL = document.querySelector('.poll1-decrement')


const pollTwoADDEL = document.querySelector('.poll2-increment')
const pollTwoSUBTRACTEL = document.querySelector('.poll2-decrement')


const pollQuestionSubmitEL = document.querySelector('.poll-form')
const closePollBTNEL = document.querySelector('.close-poll')

const pollPastEL = document.querySelector('.poll-Past')

// let state
let question1 = ''
let question2 = ''
let optionA = ''
let optionB = ''
let countA = 0
let countB = 0
// let obj = {
//   question1: '',
//   question2: '',
//   countA: 0,
//   countB: 0
// }
let pollARR = []

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
  pollQuestionSubmitEL.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log('you clicked');
    let formData = new FormData(pollQuestionSubmitEL);
    question1 = formData.get('q1')
    question2 = formData.get('q2')
    optionA = formData.get('optA')
    optionB = formData.get('optB')
    // console.log(question1, 'this is q1');
    // console.log(question2, 'this is q2');
    displayCurrentPoll()
  })


pollOneADDEL.addEventListener('click', () => {
  // console.log('click');?
  countA++
  displayCurrentPoll()
})

pollOneSUBTRACTEL.addEventListener('click', () => {
  // console.log('click');
  countA--
  displayCurrentPoll()
})

pollTwoADDEL.addEventListener('click', () => {
  // console.log('click');
  countB++
  displayCurrentPoll()
})

pollTwoSUBTRACTEL.addEventListener('click', () => {
  // console.log('click');
  countB--
  displayCurrentPoll()
})

closePollBTNEL.addEventListener('click', () => {
  // console.log('click');
  makePoll()
  displayAllPolls()
})




  function displayCurrentPoll() {
    
       let obj = {
      question1,
      question2,
      optionA,
      optionB,
      countA,
      countB
    } 
    renderPoll(obj)


    // questionOneEL.append(questionOneEL)
  }


  function makePoll() {
    let closedPoll = {
      question1,
      question2,
      optionA,
      optionB,
      countA,
      countB,
    }
  
    pollARR.push(closedPoll)
    console.log(pollARR);
  }

  function renderPoll(poll) {
    questionOneEL.textContent = `Question 1: ${poll.question1}`
    questionTwoEL.textContent = `Question 2: ${poll.question2}`
    optionAEL.textContent = `Option A: ${poll.optionA}`
    optionBEL.textContent = `Option B: ${poll.optionB}`
    optionACountEL.textContent = `A: ${poll.countA}`
    optionCountBEL.textContent = `B: ${poll.countB}`
  }





  function displayAllPolls() {
    pollPastEL.textContent = ''
    // let closedPoll = {
    //   question1,
    //   question2,
    //   countA,
    //   countB,
    // }
    let p = document.createElement('p')
    for (let poll of pollARR) {
      console.log(poll);
      p = renderPoll1(poll)

      pollPastEL.append(p)
    }
  }
