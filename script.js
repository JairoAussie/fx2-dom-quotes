let quotes = [
    {
      quote:"Hard work beats talent when talent doesn’t work hard.",
      source:"Tim Notke",
    },
    {
      quote:"It’s hard to beat a person who never gives up.",
      source:"Babe Ruth",
      year:1930,
      sport:"Baseball player"
    },
    {
      quote:"The harder the battle, the sweeter the victory.",
      source:"Les Brown",
      sport:"Boxer"
  
    },
    {
      quote:"Never say never because limits, like fears, are often just an illusion.",
      source:"Michael Jordan",
      citation:"Chicago Tribune",
      sport:"Basketball player"
    },
    {
      quote:"You miss 100% of the shots you don’t take",
      source:"Wayne Gretzky"
    },
    {
      quote:"Today, you have 100% of your life left.",
      source:"Tom Landry",
    },
    {
      quote:"You have to expect things of yourself before you can do them.",
      source:"Michael Jordan",
      citation:"Chicago",
      sport:"Basketball player"
    },
    {
      quote:"Winning isn’t everything, but wanting to win is.",
      source:"Vince Lombardi"
    },
    {
      quote:"There may be people that have more talent than you, but there’s no excuse for anyone to work harder than you do.",
      source:"Derek Jeter"
    },
    {
      quote:"I became a good pitcher when I stopped trying to make them miss the ball and started trying to make them hit it.",
      source:"Sandy Koufax",
      year: 1950
    }];

//data from https://gist.github.com/mucar/3898821
var colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

document.body.style.backgroundColor = colors[0]
const quoteBox = document.querySelector("#quote-box")
console.log(quoteBox)
quoteBox.style.border = `solid 2px ${colors[6]}`
const showListButton = document.createElement("button")
showListButton.textContent = "Hide list"
document.body.querySelector(".container").appendChild(showListButton)
let fullQuote = quoteBox.getElementsByTagName("p")
for (item of fullQuote){
  item.style.color = "white"
}
//fullQuote[0].style.fontSize = "30px"
let mainQuote = document.querySelector(".quote")
mainQuote.style.fontSize = "30px"

const quoteUL = document.createElement("ul")
document.body.querySelector(".container").appendChild(quoteUL)

// for (item of quotes){
//   let litem = document.createElement("li")
//   litem.innerText = item.quote.slice(0,10) + "..."
//   litem.addEventListener('click', ()=>{
//     console.log(litem.innerText)
//   })

//   quoteUL.appendChild(litem)
// }
function clickListItem(event){
  mainQuote.innerText = quotes[event.target.value].quote
  fullQuote[1].textContent = quotes[event.target.value].source
}

for (index in quotes){
  let litem = document.createElement("li")
  litem.innerText = quotes[index].quote.slice(0,10) + "..."
  litem.value = index

  litem.addEventListener('click', clickListItem)

  quoteUL.appendChild(litem)
}

function toggleList(){
  if (quoteUL.style.display == 'none'){
    quoteUL.style.display = 'list-item'
    showListButton.innerText = "Hide list"
  }else{
    quoteUL.style.display = 'none'
    showListButton.innerText = "Show list"
  }
}
console.log(typeof toggleList())
//An event that hide/show the list of quotes
showListButton.addEventListener('click', toggleList)
//callback(event)
function getRandomQuote(){
  rNumber = Math.floor(Math.random() * quotes.length)
  console.log(rNumber)
  return quotes[rNumber]
}

function changeMainQuote() {
  let quote = getRandomQuote()
  mainQuote.textContent = quote.quote
  fullQuote[1].textContent = quote.source
}
mainQuote.addEventListener('click', changeMainQuote)

// mainQuote.addEventListener('click', ()=>{
//   let quote = getRandomQuote()
//   //console.log(quote)
//   mainQuote.textContent = quote.quote
//   fullQuote[1].textContent = quote.source
// })