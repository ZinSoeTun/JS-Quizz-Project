let startBtn = document.querySelector(".startBtn");
let containerDiv = document.querySelector(".containerDiv");
let question = document.querySelector(".question");
let answer = document.querySelector(".answer");
let previous = document.querySelector(".previous");
let next = document.querySelector(".next");
let optionBtn = document.getElementsByClassName("optionBtn");
let right = document.querySelector(".right");
let wrong = document.querySelector(".wrong");
let count = 0;
//for start button
startBtn.addEventListener("click", function () {
    startBtn.classList.add("hidden");
    containerDiv.classList.remove("hidden");
    previous.classList.add("hidden");
    creator(quesArray[count]);
    checker();
});
//question for quiz
const quesArray = [
    {
        question: "Which language is the most popular in the world?",
        option: ["Chinese", "Japanese", "Burmese", "English"],
        correct: "English",
    },
    {
        question: "Which team gets EPL Cup in Premier League?",
        option: ["Man-U", "Man City", "Liverpool", "Cheasal"],
        correct: "Liverpool",
    },
    {
        question: "Who invented computer?",
        option: ["Charles Babbage", "Mikeale", "Aleastin", "Oreity"],
        correct: "Charles Babbage",
    },
    {
        question: "How many seconds in a day?",
        option: ["32867", "66000", "45600", "86400"],
        correct: "86400",
    },
    {
        question: "Which country has the largest population in the world?",
        option: ["Myanmar", "Korea", "USA", "China"],
        correct: "China",
    },
    {
        question: "Which language is the second language in the world?",
        option: ["Korean", "English", "Chinese", "Burmese"],
        correct: "Chinese",
    },
    {
        question: "How many minutes in a day?",
        option: ["2345", "1400", "1404", "1440"],
        correct: "1440",
    },
    {
        question: "How many miliseconds in a day?",
        option: ["234500000", "345600000", "86400000", "32459000"],
        correct: "86400000",
    },
    {
        question: "Which animal is the largest in the world?",
        option: ["Dinosour", "Elephant", "human", "Blue Whale"],
        correct: "Blue Whale",
    },
    {
        question: "Who sang 'BABY'?",
        option: ["Justin Bieber", "Justin Musk", "Thomas Mullar", "Sadio Mane"],
        correct: "Justin Bieber",
    }
]
//for creator
function creator(i) {
    question.innerHTML = i.question;
    answer.innerHTML = `
 <button class="optionBtn">${i.option[0]}</button>
 <button class="optionBtn">${i.option[1]}</button>
 <button class="optionBtn">${i.option[2]}</button>
 <button class="optionBtn">${i.option[3]}</button>`;
}
//next button
next.addEventListener("click", function () {
    right.classList.add("hidden");
    wrong.classList.add("hidden");
    previous.classList.remove("hidden");
    if (count < 9) {
        count++;
        creator(quesArray[count])
    }
    if (count == 9) {
        next.classList.add("hidden")
    };
    checker();
});
//previous button
previous.addEventListener("click", function () {
    right.classList.add("hidden");
    wrong.classList.add("hidden");
    if (count > 0) {
        count--;
        creator(quesArray[count])
        next.classList.remove("hidden");
    }
    if (count == 0) {
        previous.classList.add("hidden");
    };
    checker();
});
// option choice btn for check
function checker() {
    for (let i = 0; i < optionBtn.length; i++) {
        optionBtn[i].addEventListener("click", function () {
            let x = optionBtn[i].innerHTML;
            let y = quesArray[count].correct;
            if (x == y) {
                right.classList.remove("hidden");
                wrong.classList.add("hidden");
            } else {
                right.classList.add("hidden");
                wrong.classList.remove("hidden");
            };

        });

    };
};


