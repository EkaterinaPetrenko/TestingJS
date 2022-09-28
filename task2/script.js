const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click', () => {
    alert('Метод для вывода сообщения в веб-консоль');
});
const myalert = document.querySelector('#myalert');
myalert.addEventListener('click', () => {
    alert('Метод, который выводит на экран окно с сообщением и приостанавливает выполнение скрипта, пока пользователь не нажмёт «Закрыть».');
});
const myprompt = document.querySelector('#myprompt');
myprompt.addEventListener('click', () => {
    alert('Метод, позволяющий вывести на экран диалоговое окно с сообщением, а также с текстовым полем, в которое пользователь может ввести данные.');
});