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

function randomMinionDelay(value) {
  const delay = Math.floor(Math.random() * 4000) + 1000;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`value: ${value}, delay: ${delay} ms`);
    }, delay);
  });
}

const minionss = [
  randomMinionDelay("minion 1"),
  randomMinionDelay("minion 2"),
  randomMinionDelay("minion 3"),
  randomMinionDelay("minion 4"),
  randomMinionDelay("minion 5"),
];

Promise.race(minionss)
  .then((result) => {
    console.log("the fastest minion has finished its task ");
    console.log(result);
  })
  .catch((error) => {
    console.error("there is something wrong with one of the minions", error);
  });
