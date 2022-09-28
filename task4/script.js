document.querySelector("#textLink").addEventListener("click", (event) => {
  event.preventDefault();
  let newTextLink = prompt("Введите новый текст ссылки:");
  if (newTextLink != null) {
    if (newTextLink.trim() === "") {
      alert("Ссылка не должна быть пустой!");
    }
    else {
      event.currentTarget.textContent = newTextLink;
    }
  } 
});

