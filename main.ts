input.onGesture(Gesture.Shake, function () {
    timer = 0
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            # . # . #
            . # . # .
            `)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . # . # .
            # . # . #
            `)
    }
    basic.showLeds(`
        # . . . #
        . . . . .
        # . . . #
        # . . . #
        . # # # .
        `)
    smile = true
})
let newAccel = 0
let smile = false
let timer = 0
basic.showLeds(`
    # . . . #
    . . . . .
    # . . . #
    # . . . #
    . # # # .
    `)
music.playMelody("C D E F G A B C5 ", 400)
timer = 0
let accel = input.acceleration(Dimension.X)
smile = true
basic.forever(function () {
    newAccel = input.acceleration(Dimension.X)
    if (Math.abs(newAccel - accel) > 50) {
        accel = newAccel
        music.playTone(randint(200, 500), music.beat(BeatFraction.Sixteenth))
        timer = 0
        if (smile == false) {
            basic.showLeds(`
                # . . . #
                . . . . .
                # . . . #
                # . . . #
                . # # # .
                `)
            smile = true
        }
    }
    timer += 1
    if (timer > 1000) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . # # # .
            # . . . #
            `)
        music.playTone(165, music.beat(BeatFraction.Whole))
        basic.pause(50)
        music.playTone(165, music.beat(BeatFraction.Whole))
        basic.pause(50)
        music.playTone(165, music.beat(BeatFraction.Whole))
        basic.pause(50)
        music.playTone(131, music.beat(BeatFraction.Breve))
        timer = 0
        smile = false
    }
})
