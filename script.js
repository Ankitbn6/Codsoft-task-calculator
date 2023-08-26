var nums = document.querySelectorAll("#button>div");
let output = document.querySelector("#output");
let input = document.querySelector("#input");
console.log(nums);
for (let i = 0; i < nums.length; i++) {
  nums[i].addEventListener("click", myCalculator);
}

function myCalculator(event) {
  let targetNumber = event.target.innerText;
  console.log(targetNumber);
  switch (targetNumber) {
    case "C":
      output.innerText = "";
      input.innerText = "";
      break;
    case "=":
      output.innerText = eval(input.innerText);
      if (output.innerText == "undefined") output.innerText = "";
      break;
    default:
      input.innerText = input.innerText + targetNumber;
  }
}
