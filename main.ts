input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showString("Can I help?")
})
input.onButtonPressed(Button.A, function () {
    basic.showString("yes")
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 5; index++) {
        music.playMelody("E D G F B A C5 B ", 337)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("no")
    basic.showIcon(IconNames.Sad)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("Are you OK?")
})
basic.showIcon(IconNames.Heart)
