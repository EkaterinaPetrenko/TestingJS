let curButton = document.querySelector('button');
let curText = document.querySelector('input');
let dupText = document.querySelector('#duplicateField');
let curForm = document.querySelector('form');

/* Перехватчик стандартного действия формы */
curForm.addEventListener('click', (event) => {
  event.preventDefault();   
})

/* Обработчик нажатия на кнопку */
curButton.addEventListener('mousedown', (event) => {
  event.preventDefault();
  event.stopPropagation();    
  if (event.which === 1) {
    console.log('Введен текст: ' + curText.value);
    dupText.textContent = "";
    curText.value = "";
  } else if (event.which === 3) {
      event.stopPropagation()  
      event.preventDefault();   
  };

});

/* Обработчик ввода текста */
curText.addEventListener('input', (event) => {
  event.preventDefault();   
  dupText.textContent = curText.value;
  event.stopPropagation();
})
