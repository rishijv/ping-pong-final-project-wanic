namespace SpriteKind {
    export const Collision = SpriteKind.create()
}
function multisingle () {
    game.splash("Press A for multiplayer and B for singleplayer.")
    ping1.setFlag(SpriteFlag.Invisible, true)
    ping1.setFlag(SpriteFlag.Ghost, true)
    pong2.setFlag(SpriteFlag.Invisible, true)
    pong2.setFlag(SpriteFlag.Ghost, true)
    ball.setFlag(SpriteFlag.Invisible, true)
    ball.setFlag(SpriteFlag.Ghost, true)
    multi.setPosition(50, 60)
    single.setPosition(110, 60)
    while (mySprite == true) {
        multi.x += 3
        single.x += 3
        pause(500)
        multi.x += -3
        single.x += -3
        pause(500)
    }
    ping1.setFlag(SpriteFlag.Invisible, false)
    ping1.setFlag(SpriteFlag.Ghost, false)
    pong2.setFlag(SpriteFlag.Invisible, false)
    pong2.setFlag(SpriteFlag.Ghost, false)
    ball.setFlag(SpriteFlag.Invisible, false)
    ball.setFlag(SpriteFlag.Ghost, false)
    multi.setFlag(SpriteFlag.Invisible, true)
    multi.setFlag(SpriteFlag.Ghost, true)
    single.setFlag(SpriteFlag.Invisible, true)
    single.setFlag(SpriteFlag.Ghost, true)
}
// add a way to select single player
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite == true) {
        mySprite = false
        multisingle2 = false
        setGame()
    }
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Released, function () {
    if (ping1.vy == -37.5) {
        ping1.vy = -75
    }
    if (ping1.vy == 37.5) {
        ping1.vy = 75
    }
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    ping1.vy = -75
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Released, function () {
    ping1.vy = 0
    ping1.ay = 0
})
// add a way to select multi player
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite == true) {
        mySprite = false
        multisingle2 = true
        setGame()
    }
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    if (multisingle2) {
        pong2.vy = 75
    }
})
function setSpritesVars () {
    ping1 = sprites.create(img`
        9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 
        `, SpriteKind.Player)
    pong2 = sprites.create(img`
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 
        `, SpriteKind.Player)
    ball = sprites.create(img`
        . . 9 9 4 4 . . 
        . 9 e e e e 4 . 
        9 e e 9 4 e e 4 
        9 e 9 9 4 4 e 4 
        9 e 9 9 4 4 e 4 
        9 e e 9 4 e e 4 
        . 9 e e e e 4 . 
        . . 9 9 4 4 . . 
        `, SpriteKind.Projectile)
    multi = sprites.create(img`
        .....fffffffff......................
        ...fff1111111fff....................
        ..ff11111111111ff...................
        .ff1111111111111ff..................
        .f11111111cc11111f..................
        ff1cc11111cc11111ff.................
        f11cc11111cc111111f.................
        f11cc11111bb111111f.................
        f11bb1111111111111f.................
        f1111111111b111111f.................
        f111b11111bb111111f.................
        f1111cccccc1111111f.................
        f11111ccc33111111cc.................
        f111111c333111111c..................
        f111111c33311111cc..................
        ff11111133111111c.....fffffffffff...
        .f1111111111111cc...fff1111111ccc...
        .ff111111111111c...ff11111111111cc..
        ..ff1111111111cc..ff1111111111111cc.
        ...f111111111cc..ff111111111111111cc
        ...fcccccccccc...ff111111111111111cc
        .................f11111111111111111c
        .................f1cc11111111111111c
        .................f1cc11111111111111c
        .................f1cc11111111111111f
        .................f1bb11111cc1111111f
        .................f11111111cc1111111f
        .................f11b11111cc1111111f
        .................f11b111b1bb1111111f
        .................f111cccb1111111111f
        .................cc11b331111111111ff
        ..................c113331111111111f.
        ..................cc1333111111111ff.
        ...................cc11111111111ff..
        ....................ccc1111111ccc...
        ......................ccccccccc.....
        `, SpriteKind.Projectile)
    single = sprites.create(img`
        ........................
        .......fffffffff........
        .....fff1111111fff......
        ....ff11111111111ff.....
        ...ff1111111111111ff....
        ...f11111111cc11111f....
        ..ff1cc11111cc11111ff...
        ..f11cc11111cc111111f...
        ..f11cc11111bb111111f...
        ..f11bb1111111111111f...
        ..f1111111111b111111f...
        ..f111b11111bb111111f...
        ..f1111cccccc1111111f...
        ..f11111ccc33111111cc...
        ..f111111c333111111c....
        ..f111111c33311111cc....
        ..ff11111133111111c.....
        ...f1111111111111cc.....
        ...ff111111111111c......
        ....ff1111111111cc......
        .....f111111111cc.......
        .....fcccccccccc........
        ........................
        ........................
        `, SpriteKind.Projectile)
    ping1.setStayInScreen(true)
    pong2.setStayInScreen(true)
    ball.setBounceOnWall(true)
    multisingle()
}
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Released, function () {
    if (multisingle2) {
        if (pong2.vy == -37.5) {
            pong2.vy = -75
        }
        if (pong2.vy == 37.5) {
            pong2.vy = 75
        }
    }
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Released, function () {
    if (multisingle2) {
        pong2.vy = 0
    }
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Released, function () {
    if (multisingle2) {
        pong2.vy = 0
    }
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (multisingle2) {
        pong2.vy = -75
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (otherSprite.vy < 0 && otherSprite.vx < 0) {
        ball_side = true
        otherSprite.setVelocity(otherSprite.vx * -1 + abc, otherSprite.vy - abc / 3)
    } else if (otherSprite.vy > 0 && otherSprite.vx < 0) {
        ball_side = true
        otherSprite.setVelocity(otherSprite.vx * -1 + abc, otherSprite.vy + abc / 3)
    } else if (otherSprite.vy < 0 && otherSprite.vx > 0) {
        ball_side = false
        otherSprite.setVelocity(otherSprite.vx * -1 - abc, otherSprite.vy - abc / 3)
    } else if (otherSprite.vy > 0 && otherSprite.vx > 0) {
        ball_side = false
        otherSprite.setVelocity(otherSprite.vx * -1 - abc, otherSprite.vy + abc / 3)
    }
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    if (multisingle2) {
        if (pong2.vy == -75) {
            pong2.vy = -150
        }
        if (pong2.vy == 75) {
            pong2.vy = 150
        }
    }
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Released, function () {
    ping1.vy = 0
    ping1.ay = 0
})
function ball_move () {
    if (bot_side == 0 && rando == 0) {
        ball.setVelocity(-50, randint(-50, -25))
    } else if (bot_side == 1 && rando == 0) {
        ball.setVelocity(50, randint(-50, -25))
    } else if (bot_side == 0 && rando == 1) {
        ball.setVelocity(-50, randint(25, 50))
    } else if (bot_side == 1 && rando == 1) {
        ball.setVelocity(50, randint(25, 50))
    }
}
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    if (multisingle2) {
        if (pong2.vy == -75) {
            pong2.vy = -37.5
        }
        if (pong2.vy == 75) {
            pong2.vy = 37.5
        }
    }
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    if (ping1.vy == -75) {
        ping1.vy = -150
    }
    if (ping1.vy == 75) {
        ping1.vy = 150
    }
})
function botStart () {
    if (ball.y < pong2.y) {
        pong2.vy = -37.5
    } else if (ball.y > pong2.y) {
        pong2.vy = 37.5
    }
}
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Released, function () {
    if (multisingle2) {
        if (pong2.vy == -75) {
            pong2.vy = -150
        }
        if (pong2.vy == 75) {
            pong2.vy = 150
        }
    }
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Released, function () {
    if (ping1.vy == -75) {
        ping1.vy = -150
    }
    if (ping1.vy == 75) {
        ping1.vy = 150
    }
})
function setGame () {
    ping1.setPosition(-1, 60)
    pong2.setPosition(161, 60)
    ball.setPosition(80, 60)
    ball.vy = 0
    ball.vx = 0
    ping1.vy = 0
    pong2.vy = 0
    if (multisingle2 == false) {
        bot_side = 0
        rando = 0
    } else if (multisingle2) {
        bot_side = randint(0, 1)
        rando = randint(0, 1)
    }
    ball_move()
}
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    if (ping1.vy == -75) {
        ping1.vy = -37.5
    }
    if (ping1.vy == 75) {
        ping1.vy = 37.5
    }
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    ping1.vy = 75
})
let asdf = ""
let rando = 0
let bot_side = 0
let abc = 0
let ball_side = false
let multisingle2 = false
let single: Sprite = null
let multi: Sprite = null
let ball: Sprite = null
let pong2: Sprite = null
let ping1: Sprite = null
let mySprite = false
scene.setBackgroundColor(15)
info.player1.setScore(0)
info.player2.setScore(0)
mySprite = true
setSpritesVars()
game.onUpdate(function () {
    if (ball.x < 4) {
        info.player2.changeScoreBy(1)
        if (multisingle2) {
            game.splash("Player 2 got a point!")
        } else if (multisingle2 == false) {
            game.splash("The Computer got a point!")
        }
        setGame()
    } else if (ball.x > 156) {
        info.player1.changeScoreBy(1)
        asdf = "Player 1"
        game.splash("Player 1 got a point!")
        setGame()
    }
})
game.onUpdate(function () {
    if (ball_side == true && multisingle2 == false) {
        botStart()
    }
})
game.onUpdate(function () {
    if (multisingle2) {
        if (info.player2.score() == 10) {
            game.splash("Player 2 won!", "P1:" + info.player1.score() + " P2:" + info.player2.score())
            game.reset()
        } else if (info.player1.score() == 10) {
            game.splash("Player 1 won!", "P1:" + info.player1.score() + " P2:" + info.player2.score())
            game.reset()
        }
    } else if (multisingle2 == false) {
        if (info.player2.score() == 10) {
            game.splash("The Computer won!", "P1:" + info.player1.score() + " Computer:" + info.player2.score())
            game.reset()
        } else if (info.player1.score() == 10) {
            game.splash("Player 1 won!", "P1:" + info.player1.score() + " Computer:" + info.player2.score())
            game.reset()
        }
    }
})
game.onUpdateInterval(100, function () {
    abc += 0.01
})
