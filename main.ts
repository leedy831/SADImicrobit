input.onButtonPressed(Button.A, function () {
	
})
input.onSound(DetectedSound.Loud, function () {
    basic.showLeds(`
        . # . # .
        . . # . .
        . # . # .
        . # . # .
        . . # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        # . . . #
        `)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
	
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
	
})
basic.forever(function () {
	
})
