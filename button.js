const counter = {
  value: 0,
  increment(value) {
    this.value += 1;
  },
  decrement(value) {
    this.value -= 1;
  },
};

const updateCounter = function (value, operation) {
  operation(value);
};

// updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.decrement.bind(counter));

const decrementBtn = document.querySelector(".js-decrement");
const incrementBtn = document.querySelector(".js-increment");
const valueEl = document.querySelector(".js-value");

decrementBtn.addEventListener("click", function () {
  counter.decrement();
  console.log(counter);
  valueEl.textContent = counter.value;
});

incrementBtn.addEventListener("click", function () {
  counter.increment();
  console.log(counter);
  valueEl.textContent = counter.value;
});
