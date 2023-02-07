const holdButton = document.querySelector("button");
let inputContainer = document.querySelector(".inputs");
let counter = document.querySelector(".counter");
let count = 0;
let intervalId;
holdButton.addEventListener("mousedown", function () {
  count = 0;
  inputContainer.innerHTML = "";
  counter.innerHTML = count;
  intervalId = setInterval(() => {
    count++;
    counter.innerHTML = count;
  }, 1000);
});

holdButton.addEventListener("mouseup", function () {
  clearInterval(intervalId);
  for (let i = 1; i <= count; i++) {
    inputContainer.innerHTML += `<input name="input${i}" id="input${i}" placeholder="Input ${i}" />`;
  }
});
