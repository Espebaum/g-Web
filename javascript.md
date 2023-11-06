<숫자놀이>
~~~html
<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="utf-8">

    <title>Number guessing game</title>

    <style>
      html {
        font-family: sans-serif;
      }

      body {
        width: 50%;
        max-width: 800px;
        min-width: 480px;
        margin: 0 auto;
      }
      
      .form input[type="number"] {
        width: 200px;
      }

      .lastResult {
        color: white;
        padding: 3px;
      }
    </style>
  </head>

  <body>
    <h1>Number guessing game</h1>

    <p>We have selected a random number between 1 and 100. See if you can guess it in 10 turns or fewer. We'll tell you if your guess was too high or too low.</p>

    <div class="form">
      <label for="guessField">Enter a guess: </label>
      <input type="number" min="1" max="100" required id="guessField" class="guessField">
      <input type="submit" value="Submit guess" class="guessSubmit">
    </div>

    <div class="resultParas">
      <p class="guesses"></p>
      <p class="lastResult"></p>
      <p class="lowOrHi"></p>
    </div>

    <script>

      // Your JavaScript goes here

    </script>
  </body>
</html>
~~~

~~~js
function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses: ";
  }
  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!GAME OVER!!!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}
~~~

~~~js
const lotsOfDecimal = 1.766584958675746364;
console.log(lotsOfDecimal);

const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log(twoDecimalPlaces);
~~~

~~~md
1.7665849586757463
1.77 
~~~

 => toFixed(2)

~~~js
let myNumber = "74"
myNumber += 3

console.log(myNumber)
console.log(typeof myNumber)

let myNum = "74"
myNum = Number(myNum) + 3
console.log(myNum)
console.log(typeof myNum)
~~~

~~~md
743 
string 
77
number
~~~


~~~js
const button = document.querySelector("button");

function greet() {
  const name = prompt("Hi?");
  const greeting = document.querySelector("#greeting");
  console.log(greeting);
  greeting.textContent = `Hello ${name}, nice to see you!`;
}

button.addEventListener("click", greet);
~~~

**prompt()** -> 표준입력 받음
**.textContext** -> 웹 개발에서 실제로 사용되는 표준 DOM(Document Object Model) 속성 중 하나입니다. DOM은 웹 페이지의 구조를 표현하고 조작하는 데 사용되는 API(응용 프로그래밍 인터페이스)입니다.

.textContent 속성은 특정 HTML 요소의 텍스트 내용을 나타내며, 이를 읽거나 변경할 수 있습니다. 이것은 JavaScript를 사용하여 동적으로 웹 페이지의 텍스트를 조작하고 업데이트하는 데 유용한 방법 중 하나입니다.



~~~js
let string = "This is my string";
console.log(string[string.length - 1])

if (string.indexOf("your") === -1) {
  console.log(123);
  console.log(string.slice(11))
  console.log(string.toUpperCase())
  console.log(string.toLowerCase())
  string = string.replace('string', 'song')
  console.log(string)
}
~~~

string.replace('string', 'song') 만으로는 string 자체가 바뀌지 않는다. string


`string.replace('string', 'song')`: 이 부분은 문자열 string의 "string" 부분을 "song"으로 대체하는 시도입니다. 그러나 이 코드는 `replace` 함수가 실제로 문자열을 변경하지 않습니다. 문자열은 불변(immutable)하며, replace 함수가 호출된 결과를 반환하므로 변경된 문자열을 캡처하거나 원래 문자열을 다시 할당해야 합니다. 예를 들어 `string = string.replace('string', 'song')`와 같이 사용해야 합니다.

코드를 수정하여 replace 함수가 적절하게 작동하도록 변경할 수 있습니다.
-> (string = string.replace('string', 'song'))


~~~js
<h2>Live output</h2>

<div class="output" style="min-height: 150px;">
  <ul></ul>
  <p></p>
</div>

<script>
    let list = document.querySelector('.output ul');
    let totalBox = document.querySelector('.output p');
    let total = 0;
    list.innerHTML = '';
    totalBox.textContent = '';
    
    let products = ['Underpants:6.99', 'Socks:5.99', 'T-shirt:14.99',
    'Trousers:31.99', 'Shoes:23.99']

    for (var i = 0; i <= products.length; i++) { 
        let subArray = products[i].split(":");
        let name = subArray[0];
        let price = subArray[1];
        total += price;
        itemText = name + ' - $ ' + price;

        let listItem = document.createElement('li');
        listItem.textContent = itemText;
        list.appendChild(listItem);
    }
    totalBox.textContent = 'Total: $' + total.toFixed(2);
</script>
~~~


~~~js
<h2>Live output</h2>

<div class="output" style="min-height: 150px;">
  <input type="text" /> 
  <button>Search</button>

  <ul></ul>
</div>

<script>
    var list = document.querySelector('.output ul');
    var searchInput = document.querySelector('.output input');
    var searchBtn = document.querySelector('.output button');

    list.innerHTML = '';
    var myHistory = [];

    searchBtn.onclick = function() {
    // we will only allow a term to be entered if the search input isn't empty
    if (searchInput.value !== '') {
        myHistory.unshift(searchInput.value)
        list.innerHTML = '';

        // loop through the array, and display all the search terms in the list
        for (var i = 0; i < myHistory.length; i++) 
        {
            itemText = myHistory[i];
            var listItem = document.createElement('li');
            listItem.textContent = itemText;
            list.appendChild(listItem);
        }
        console.log(list);
            // If the array length is 5 or more, remove the oldest search term
        if (myHistory.length >= 5) 
        {
            myHistory.pop();
        }
        // empty the search input and focus it, ready for the next term to be entered
        searchInput.value = '';
        searchInput.focus();
    }
}  


</script>
~~~


홈페이지 색깔 바꾸기(html)
~~~html
<label for="theme">Select theme: </label>
<select id="theme">
  <option value="white">White</option>
  <option value="black">Black</option>
</select>

<h1>This is my website</h1>
~~~

홈페이지 색깔 바꾸기(js)
~~~js
const select = document.querySelector("select")
const html = document.querySelector("html")

document.body.style.padding = "10px"

function update(bgColor, textColor)
{
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.onchange = function Handler () 
{
  (select.value === "black") 
    ? update("black", "white")
    : update("white", "black");
}
~~~