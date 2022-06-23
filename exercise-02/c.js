// simulate fetching process
async function fetchTest(n) {
  const fetchTime = 1000;
  return await new Promise(resolve => {
  setTimeout(() => {
    resolve(n);
  }, fetchTime);
  });
}

const api = async () => await fetchTest(1);
const api2 = async () => await fetchTest(2);
const api3 = async () => await fetchTest(3);

api().then((data) => {
  console.log('result: ' + data);
  api2().then((data2) => {
    console.log('result2: ' + data2);
    api3().then((data3) => console.log('result3: ' + data3));
  });
});
