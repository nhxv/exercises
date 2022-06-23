const result = 1;
const result2 = 2;
const result3 = 3;

function api(fn) {
    fn(result);
}

function api2(fn) {
    fn(result2);
}

function api3(fn) {
    fn(result3);
}

api(function(result){
    console.log('result: ', result);
    api2(function(result2){
        console.log('result2: ', result2);
        api3(function(result3){
            console.log('result3: ', result3);
        });
    });
});