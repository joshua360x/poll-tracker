

export function renderPoll1(poll) {
  const contain = document.createElement('div')
  const p = document.createElement('p')
  const p1 = document.createElement('p')
  const p2 = document.createElement('p')
  const p3 = document.createElement('p')
  const optionContainer = renderOption(poll.question1, poll.question2, poll.countA, poll.countB)

  p.textContent = `Question 1: ${poll.question1}`
  p1.textContent = `Question 2: ${poll.question2}`
  p2.textContent = `A: ${poll.countA}`
  p3.textContent = `B: ${poll.countB}`
  contain.append(p, p1, p2, p3, optionContainer)
  return contain
}

export function renderOption(q1, q2, scoreA, scoreB) {
  const contain = document.createElement('div')
const questionDiv = document.createElement('span')
const scoreDiv = document.createElement('span')

questionDiv.textContent = `With ${q1} and ${q2}`
scoreDiv.textContent = ` A vs B: ${scoreA > scoreB ? 'Option A has won' : scoreA < scoreB ? 'Option B has won' : 'This is a tie'}`
contain.append(questionDiv, scoreDiv)

  return contain
}