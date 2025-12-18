let heading = document.getElementById("title");
let input = document.getElementById("inputBox");

input.addEventListener("click", function () {
  if (input.value === "") {
    heading.innerText = "Live text";
  } else {
  heading.innerText = input.value;
  }
});
