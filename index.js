//Code your solution here
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget () {
  return document.getElementById("nested")
}

function increaseRankBy (n) {
  let lis =  document.getElementById("ul.ranked-list li")
  
  for (let i = 1; i < lis.length; i++) {
  lis[i].innerHTML = (i + n).toString()
  }
  console.log("lis")
}

function deepestChild() {
  return document.querySelector("")
}