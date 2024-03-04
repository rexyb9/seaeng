const inputText = document.getElementById("inputText");

const search = () => {
  if (!inputText.value) {
    return alert("please input");
  } else {
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
      inputText.value
    )}`;
  }
};

window.addEventListener("keydown", ({ key }) => {
  if (key === "Enter") {
    search();
  }
});
