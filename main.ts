input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showString("Can I help?")
})
input.onButtonPressed(Button.A, function () {
    basic.showString("yes")
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 8; index++) {
        music.playMelody("E D G F B A C5 B ", 337)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("no")
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Happy)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("Are you OK?")
})
basic.showIcon(IconNames.Heart)
