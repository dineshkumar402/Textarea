const textarea = document.getElementById("messageBox");
const counter = document.getElementById("charCounter");
const warning = document.getElementById("warningMsg");
const maxChars = 200;

textarea.addEventListener("input", () => {
  let text = textarea.value;

  if (text.length > maxChars) {
    textarea.value = text.substring(0, maxChars); // Trim excess
    warning.textContent = "Character limit reached!";
  } else {
    warning.textContent = "";
  }

  counter.textContent = `${textarea.value.length}/${maxChars} characters`;
});