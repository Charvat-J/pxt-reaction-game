let actualLight : number = 0;
let referenceLight : number = 0;
let tresholdLight : number = 30;

basic.pause(1000)
for(let i = 1; i <6; i+=1) {
    actualLight += input.lightLevel()
}
referenceLight = actualLight /= 5;

basic.forever(function () {
    actualLight = input.lightLevel();
    if(actualLight- referenceLight < tresholdLight) {
        console.log(0)
    } else {
        console.log(1)
    }

    basic.pause(100)
})