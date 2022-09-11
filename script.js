const button = document.querySelector('button');

const prediction1 = "Цель совсем рядом - не останавливайтесь."
const prediction2 = "Любовь рядом с вами."
const prediction3 = "Грядут перемены к лучшему."
const prediction4 = "Счастье не за горами."
const prediction5 = "Все будет хорошо."

const newPrediction = document.querySelector('.current-forecast > h1');
const probabilityPercentage = document.querySelector('.current-forecast > p');


button.addEventListener('click', predictTheFuture);

function predictTheFuture() {
    min = Math.ceil(0);
    max = Math.floor(5);
    let number = Math.floor((Math.random() * (max - min)) + min * 10);

    if (number == '0') {
        number = prediction1
    } else if (number == '1') {
        number = prediction2
    } else if (number == '2') {
        number = prediction3
    } else if (number == '3') {
        number = prediction4
    } else if (number == '4') {
        number = prediction5
    }
    newPrediction.textContent = number;

    let percent = Math.floor(Math.random() * 100);
    percent = `Вероятность: ${percent} %`;
    probabilityPercentage.textContent = percent;


    /* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */
    /* Для добавления предсказания в список воспользуйся шаблоном forecast-item */
    const whereToTnsert = document.querySelector('.forecasts');
    const whatToInsert = document.querySelector('#forecast-item');

    const content = whatToInsert.content.cloneNode(true);

    content.querySelector('h3').textContent = number;
    content.querySelector('p').textContent = percent;

    whereToTnsert.prepend(content);
}