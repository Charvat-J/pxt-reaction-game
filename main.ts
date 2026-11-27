let start: number = 0
let actualLight: number = 0;
let referenceLight: number = 0;
let tresholdLight: number = 30;
let lightNow: number = 0
let gameStarted: boolean = false

for (let i = 1; i < 6; i += 1) {
    actualLight += input.lightLevel()
}
referenceLight = actualLight /= 5;

input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
# # # # #
# # # # #
# # # # #
# # # # #
# # # # #
`)
    gameStarted = true
    randint(400, 3000)
    basic.clearScreen()
    start = control.millis();
}
)

basic.forever(function () {
    actualLight = input.lightLevel();
    if (referenceLight - actualLight < tresholdLight) {
        let lightNow = 0
    } else {
        if (gameStarted){
            endGame()
            gameStarted = false
    }
}})
function endGame(): void {
    let duration = control.millis() - start
    basic.showNumber(duration)
}