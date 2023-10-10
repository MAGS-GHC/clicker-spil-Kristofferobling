
/* const autoclickerLevel = {
    level0: 0,
    level1: 1,
    level2: 2,
    level3: 3,
    level4: 4,
    level5: 5,
    level6: 6,
    level7: 7,
    level8: 8,
    level9: 9,
}

const autoclickerTime = {
    level1Time: 10000,
    level2Time: 9000,
    level3Time: 8000,
    level4Time: 7000,
    level5Time: 6000,
    level6Time: 5000,
    level7Time: 4000,
    level8Time: 3000,
    level9Time: 2000,
    level10Time: 1000,
}

const autoclickerPrice = {
    level1Price: 10,
    level2Price: 100,
    level3Price: 1000,
    level4Price: 10000,
    level5Price: 100000,
    level6Price: 1000000,
    level7Price: 10000000,
    level8Price: 100000000,
    level9Price: 1000000000,
    level10Price: 1000000000,
}

let clickPerSecond = autoclickerLevel.level0;
let autoclickInterval;


 function AutoclickOnCookie(interval) {
    if (autoclickInterval) {
        clearInterval(autoclickInterval);
    }
    autoclickInterval = setInterval(Autoclick, interval);
    function Autoclick() {
        for (let i = 0; i < clickPerSecond; i++) {
            ClickOnCookie();
        }
    }
} 

function AutoclickerStore1() {
    const autoclickerLevels1 = [
        { level: autoclickerLevel.level0, price: autoclickerPrice.level1Price, time: autoclickerTime.level1Time, nextLevel: autoclickerLevel.level1, nextButtonText: "2 x Hastighed" },
        { level: autoclickerLevel.level1, price: autoclickerPrice.level2Price, time: autoclickerTime.level2Time, nextLevel: autoclickerLevel.level2, nextButtonText: "3 x Hastighed" },
        { level: autoclickerLevel.level2, price: autoclickerPrice.level3Price, time: autoclickerTime.level3Time, nextLevel: autoclickerLevel.level3, nextButtonText: "4 x Hastighed" },
        { level: autoclickerLevel.level3, price: autoclickerPrice.level4Price, time: autoclickerTime.level4Time, nextLevel: autoclickerLevel.level4, nextButtonText: "5 x Hastighed" },
        { level: autoclickerLevel.level4, price: autoclickerPrice.level5Price, time: autoclickerTime.level5Time, nextLevel: autoclickerLevel.level5, nextButtonText: "6 x Hastighed" },
        { level: autoclickerLevel.level5, price: autoclickerPrice.level6Price, time: autoclickerTime.level6Time, nextLevel: autoclickerLevel.level6, nextButtonText: "7 x Hastighed" },
        { level: autoclickerLevel.level6, price: autoclickerPrice.level7Price, time: autoclickerTime.level7Time, nextLevel: autoclickerLevel.level7, nextButtonText: "8 x Hastighed" },
        { level: autoclickerLevel.level7, price: autoclickerPrice.level8Price, time: autoclickerTime.level8Time, nextLevel: autoclickerLevel.level8, nextButtonText: "9 x Hastighed" },
        { level: autoclickerLevel.level8, price: autoclickerPrice.level9Price, time: autoclickerTime.level9Time, nextLevel: autoclickerLevel.level9, nextButtonText: "10 x Hastighed" },
        { level: autoclickerLevel.level9, price: autoclickerPrice.level10Price, time: autoclickerTime.level10Time, nextLevel: autoclickerLevel.level10, nextButtonText: "Maxed" },
    ];

    let buttonLabel = document.getElementById("autoclicker").innerHTML;
    console.log(buttonLabel);

    for (let index in autoclickerLevels) {
        console.log(1);
        const level = autoclickerLevels[index];
        if (clickPerSecond === level.level) {
            console.log(2);
            if (cookies >= level.price) {
                console.log(3);
                cookies -= level.price;
                document.getElementById("autoclicker").innerHTML = level.nextButtonText;
                clickPerSecond = level.level;
                console.log(level.level);
                console.log(level.time);
                AutoclickOnCookie(level.time);
            }
            break;
        }
        continue;
    }
    UpdateCookieCounter();
} */

let autoclickerTimeArr = [10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000];
let autoclickerPriceArr = [10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 1000000000];
let autoclickerLevelArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function makeButtons(autoclickerLevels) {
    for (let index in ) {
      $('.button-holder').append('<button value=' + c[i] + '>' + c[i] +
        '</button>');
    }
  }
  
  makeButtons(buttons);
