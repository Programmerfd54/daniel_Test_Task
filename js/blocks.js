// Подключение шапки
fetch('./blocks/header.html')
 .then(response => response.text())
 .then(data => {
     document.getElementById('headerContainer').innerHTML = data;
 });

// Подключение футера
fetch('./blocks/footer.html')
 .then(response => response.text())
 .then(data => {
     document.getElementById('footerContainer').innerHTML = data;
 });
