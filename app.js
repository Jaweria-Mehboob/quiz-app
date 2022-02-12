const correctAnswers = ["B", "A", "C", "A", "D"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result-container");

form.addEventListener(
  "submit",
  (e) => {
    e.preventDefault();

    let score = 0;

    const userAnswers = [
      form.q1.value,
      form.q2.value,
      form.q3.value,
      form.q4.value,
      form.q5.value,
    ];

    userAnswers.forEach((answer, index) => {
      if (answer === correctAnswers[index]) {
        score += 20;
      }
    });
    console.log(score);

    scrollTo(0, 0);

    result.style.display = "block";

    let outputResult = 0;

    const timer = setInterval(() => {
      result.querySelector("span").textContent = `${outputResult}%`;

      if (outputResult === score) {
        clearInterval(timer);
      } else {
        outputResult++;
      }
    });
  },
  10
);

// console.log('hello');
// window.console.log('hello');

// console.log(document.querySelector('form'));
// window.console.log(document.querySelector('form'));

// alert();
// window.alert('Say hello');

// setTimeout(() => {
//   alert();
// }, 5000);

// let i = 0;
// const time = setInterval(() => {
//   console.log('Something', i);
//   i++;
//   if (i === 5) {
//     clearInterval(time);
//   }
// }, 100);
