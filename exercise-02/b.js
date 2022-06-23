// simulate fetching process
function fetchTest(n) {
  const fetchTime = 1000;
  return new Promise(resolve => {
  setTimeout(() => {
    resolve(n);
  }, fetchTime);
  });
}

const api = () => new Promise((resolve, reject) => {
  fetchTest(1).then((data) => resolve(data));
});

const api2 = () => new Promise((resolve, reject) => {
  fetchTest(2).then((data) => resolve(data));
});

const api3 = () => new Promise((resolve, reject) => {
  fetchTest(3).then((data) => resolve(data));
});

api().then((data) => {
  console.log('result: ' + data);
  api2().then((data2) => {
    console.log('result2: ' + data2);
    api3().then((data3) => console.log('result3: ' + data3));
  });
});