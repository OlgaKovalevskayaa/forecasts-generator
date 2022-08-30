/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */
const button = document.querySelector('button');
button.addEventListener('click', generateANewForecast);
button.addEventListener('click', generateProbability);
button.addEventListener('click', makeCardByTemplate);

button.addEventListener('click', getRandomInt);

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */
const prediction1 = "Цель совсем рядом - не останавливайтесь."
const prediction2 = "Любовь рядом с вами."
const prediction3 = "Грядут перемены к лучшему."
const prediction4 = "Счастье не за горами."

/* Подставляй текст нового предсказания в .current-forecast h1 */
const newPrediction = document.querySelector('.current-forecast > h1');

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */
const probabilityPercentage = document.querySelector('.current-forecast > p');

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */
function generateProbability() {
    let percent = Math.floor(Math.random() * 100);
    probabilityPercentage.textContent = percent + "%";
    percent === percent + "%";
    return percent;
};
generateProbability()

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

function getRandomInt(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;
};
getRandomInt(0, 5);

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */
const list = document.querySelector('.forecasts');

function generateANewForecast() {
    let number = Math.floor(Math.random() * 10);
    if (newPrediction.textContent = number) {
        list.prepend(number);
    };
    newPrediction.textContent = number;
    return number;
};
generateANewForecast();

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */
const cardTemplate = document.querySelector('#forecast-item');
const container = document.querySelector('.forecast-item');

function makeCardByTemplate() {
    const myCard = cardTemplate.content.cloneNode(true);

    myCard.querySelector('h3').textContent = number;
    myCard.querySelector('p').textContent = percent;

    return myCard;

}
const testCard = generateANewForecast();
container.append(testCard);