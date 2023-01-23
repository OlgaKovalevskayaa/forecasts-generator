/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */


const button = document.querySelector('button');
const newPrediction = document.querySelector('.current-forecast > h1');
const probabilityPercentage = document.querySelector('.current-forecast > p');
const whereToTnsert = document.querySelector('.forecasts');
const whatToInsert = document.querySelector('#forecast-item');

const prediction1 = "Цель совсем рядом - не останавливайтесь."
const prediction2 = "Время – ваш союзник, лучше отложить принятие важного решения хотя бы на день."
const prediction3 = "Время и терпение,  вас ждут много сюрпризов!"
const prediction4 = "Ваши надежды и планы сбудутся сверх всяких ожиданий."
const prediction5 = "Вас ждет приятный сюрприз."

button.addEventListener('click', predictTheFuture);

function predictTheFuture() {

    function getNumber(min, max) {
        let result = Math.floor((Math.random() * (max - min)) + min * 10);
        return result
    };
    let number = getNumber(0, 5)


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


    let probability = getNumber(0, 100);
    probability = `Вероятность: ${probability} %`;
    probabilityPercentage.textContent = probability;


    const content = whatToInsert.content.cloneNode(true);
    content.querySelector('h3').textContent = number;
    content.querySelector('p').textContent = probability;

    whereToTnsert.prepend(content);
}