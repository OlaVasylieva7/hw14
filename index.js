// task 1

function delayedMinion(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`value: ${value}, delay: ${delay} ms`);
    }, delay);
  });
}

const minions = [
  delayedMinion("minion 1", Math.floor(Math.random() * 3000)),
  delayedMinion("minion 2", Math.floor(Math.random() * 3000)),
  delayedMinion("minion 3", Math.floor(Math.random() * 3000)),
  delayedMinion("minion 4", Math.floor(Math.random() * 3000)),
  delayedMinion("minion 5", Math.floor(Math.random() * 3000)),
];

Promise.all(minions)
  .then((results) => {
    console.log("all minions have finished their tasks :)");
    results.forEach((result, index) => {
      console.log(`minion ${index + 1}: ${result}`);
    });
  })
  .catch((error) => {
    console.error("there is something wrong with one of the minions", error);
  });

// task 2
