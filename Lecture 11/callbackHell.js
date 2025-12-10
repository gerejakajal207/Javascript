function doStep1(init, callback) {
    const result = init + 1;
    callback(result);
}
function doStep2(init, callback) {
    const result = init + 2;
    callback(result);
}
function doStep3(init, callback) {
    const result = init + 3;
    callback(result);
}
function doOperation() {
    doStep1(0, (result1) => {
        doStep2(result1, (result2) => {
            doStep3(result2, (result3) => {
                console.log(`result: ${result3}`);
            });
        });
    });
}
doOperation();

// To understand this better in sources do debug
// in doOperation -> 1st doStep1 is called with initial value passed as 0 and a callback
// in doStep1 result = init +1 -> 0+1=1
// then it calls the function which was passed as callback by passing the result (1)
// after this we reach on line 15
// then doStep2 is called with a result and a callback
// in doStep1 result = init +2 -> 1+2=3
// then it calls the function which was passed as callback by passing the result (3)
// after this we reach on line 16
// then doStep3 is called with a result and a callback
// in doStep1 result = init +3 -> 1+2=3
// 

