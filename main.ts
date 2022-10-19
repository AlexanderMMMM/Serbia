enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Button = SpriteKind.create()
    export const GUI = SpriteKind.create()
    export const noSelection = SpriteKind.create()
    export const Survivor = SpriteKind.create()
    export const zombie = SpriteKind.create()
    export const objective = SpriteKind.create()
    export const hitbox = SpriteKind.create()
}
// Manages the GUI elements
function menuFunc () {
    if (menu == -1) {
        scene.setBackgroundImage(assets.image`Zombie Game Background`)
        game.showLongText("Welcome to Serbia?", DialogLayout.Bottom)
        game.showLongText("Serbia is a country, located in Europe.", DialogLayout.Bottom)
        game.showLongText("It is the only country with living beings still alive.", DialogLayout.Bottom)
        game.showLongText("You must fight your way to get to their safe haven.", DialogLayout.Bottom)
        game.showLongText("Your goal is to kill enough zombies to make it possible to progress", DialogLayout.Bottom)
        game.showLongText("You and your friend must complete the first objective to get into the story", DialogLayout.Bottom)
        game.showLongText("Once you complete your objective, a new one will unlock!", DialogLayout.Bottom)
        game.showLongText("Good luck :)", DialogLayout.Bottom)
        menu = 0
    }
    if (menu == 0) {
        sprites.destroyAllSpritesOfKind(SpriteKind.noSelection)
        sprites.destroyAllSpritesOfKind(SpriteKind.Button)
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
        sprites.destroyAllSpritesOfKind(SpriteKind.GUI)
        scene.setBackgroundImage(assets.image`Zombie Game Background`)
        playButton = sprites.create(assets.image`Zombie Play Button`, SpriteKind.Button)
        playButton.setPosition(80, 65)
        difficultyButton = sprites.create(assets.image`Zombie Difficulty Button`, SpriteKind.Button)
        difficultyButton.setPosition(79, 110)
        helpButton = sprites.create(assets.image`Zombie Help Button`, SpriteKind.Button)
        helpButton.setPosition(40, 90)
        tipsButton = sprites.create(assets.image`Zombie Tips Button`, SpriteKind.Button)
        tipsButton.setPosition(120, 90)
        title = sprites.create(assets.image`Zombie Main Title`, SpriteKind.Button)
        title.setPosition(80, 20)
        cursor = sprites.create(assets.image`Zombie Player 1 Cursor`, SpriteKind.Player)
        cursor.setPosition(65, 87)
        controller.moveSprite(cursor)
    } else if (menu == 1) {
        game.showLongText("With their uneven gait, rotting faces, and appetite for human flesh,", DialogLayout.Full)
        game.showLongText("its easy to see why zombies have endured over decades as iconic", DialogLayout.Full)
        game.showLongText("cinematic monsters. While the undead are primarily associated", DialogLayout.Full)
        game.showLongText("with horror films (especially George A. Romeros", DialogLayout.Full)
        game.showLongText("Night of the Living Dead franchise which popularized", DialogLayout.Full)
        game.showLongText("the modern idea of zombies), the creatures have range:", DialogLayout.Full)
        game.showLongText("They have also appeared in memorable comedies like Shaun of the Dead", DialogLayout.Full)
        game.showLongText("and Re-Animator, and action blockbusters like World War Z and Train to Busan.", DialogLayout.Full)
        cursor.setPosition(65, 87)
    } else if (menu == 2) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Button)
        characterSelectionTitle = sprites.create(assets.image`Zombie Character Select Title`, SpriteKind.GUI)
        characterSelectionTitle.setPosition(80, 20)
        charSelectX = sprites.create(assets.image`Zombie Back Arrow`, SpriteKind.Button)
        charSelectX.setPosition(10, 8)
        character1Button = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Button)
        character1Button.setPosition(20, 65)
        character2Button = sprites.create(img`
            . . . . . . 5 . 5 . . . . . . . 
            . . . . . f 5 5 5 f f . . . . . 
            . . . . f 1 5 2 5 1 6 f . . . . 
            . . . f 1 6 6 6 6 6 1 6 f . . . 
            . . . f 6 6 f f f f 6 1 f . . . 
            . . . f 6 f f d d f f 6 f . . . 
            . . f 6 f d f d d f d f 6 f . . 
            . . f 6 f d 3 d d 3 d f 6 f . . 
            . . f 6 6 f d d d d f 6 6 f . . 
            . f 6 6 f 3 f f f f 3 f 6 6 f . 
            . . f f d 3 5 3 3 5 3 d f f . . 
            . . f d d f 3 5 5 3 f d d f . . 
            . . . f f 3 3 3 3 3 3 f f . . . 
            . . . f 3 3 5 3 3 5 3 3 f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Button)
        character2Button.setPosition(60, 65)
        character3Button = sprites.create(img`
            . . . . f f f f . . . . . 
            . . f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f f f c c f f f c . 
            f f f c f f f f f f f c . 
            c c c f f f e e f f c c . 
            f f f f f e e f f c c f . 
            f f f b f e e f b f f f . 
            . f 4 1 f 4 4 f 1 4 f . . 
            . f e 4 4 4 4 4 4 e f . . 
            . f f f e e e e f f f . . 
            f e f b 7 7 7 7 b f e f . 
            e 4 f 7 7 7 7 7 7 f 4 e . 
            e e f 6 6 6 6 6 6 f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `, SpriteKind.Button)
        character3Button.setPosition(100, 65)
        character4Button = sprites.create(img`
            . f f f . f f f f . f f f . 
            f f f f f c c c c f f f f f 
            f f f f b c c c c b f f f f 
            f f f c 3 c c c c 3 c f f f 
            . f 3 3 c c c c c c 3 3 f . 
            . f c c c c 4 4 c c c c f . 
            . f f c c 4 4 4 4 c c f f . 
            . f f f b f 4 4 f b f f f . 
            . f f 4 1 f d d f 1 4 f f . 
            . . f f d d d d d d f f . . 
            . . e f e 4 4 4 4 e f e . . 
            . e 4 f b 3 3 3 3 b f 4 e . 
            . 4 d f 3 3 3 3 3 3 c d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . f f f f f f . . . . 
            . . . . f f . . f f . . . . 
            `, SpriteKind.Button)
        character4Button.setPosition(140, 65)
        cursor.setPosition(20, 90)
    } else if (menu == 3) {
        game.showLongText("Tips:", DialogLayout.Full)
        game.showLongText("1. When you respawn, your position is randomized", DialogLayout.Full)
        game.showLongText("2. The Melee class does a lot of damage, but is ranged", DialogLayout.Full)
        game.showLongText("3. The  class does a little damage, but is not ranged", DialogLayout.Full)
        cursor.setPosition(65, 87)
    } else if (menu == 4) {
        game.showLongText("Player 1 Controls:", DialogLayout.Full)
        game.showLongText("WASD, Arrows Keys, or the Joystick to move", DialogLayout.Full)
        game.showLongText("Space, Z, or A button to shoot", DialogLayout.Full)
        game.showLongText("Enter, X, or B button to melee attack", DialogLayout.Full)
        game.showLongText("Player 2 Controls:", DialogLayout.Full)
        game.showLongText("IJKL to move", DialogLayout.Full)
        game.showLongText("U or A button to shoot", DialogLayout.Full)
        game.showLongText("O or B button to melee attack", DialogLayout.Full)
        cursor.setPosition(65, 87)
    } else if (menu == 5) {
        helpButton.destroy()
        tipsButton.destroy()
        playButton.destroy()
        difficultyButton.destroy()
        title.destroy()
        game.showLongText("Difficulty Options", DialogLayout.Bottom)
        easyButton = sprites.create(assets.image`Zombie Easy Button`, SpriteKind.Button)
        easyButton.setPosition(40, 65)
        mediumButton = sprites.create(assets.image`Zombie Medium Button`, SpriteKind.Button)
        mediumButton.setPosition(80, 65)
        hardButton = sprites.create(assets.image`Zombie Hard Button`, SpriteKind.Button)
        hardButton.setPosition(120, 65)
        difficultyX = sprites.create(assets.image`Zombie X`, SpriteKind.Button)
        difficultyX.setPosition(10, 10)
        difficultyTitle = sprites.create(assets.image`Zombie Difficulty Title`, SpriteKind.GUI)
        difficultyTitle.setPosition(80, 20)
        cursor.setPosition(65, 87)
    } else {
    	
    }
}
// Player 2 slice effect 
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (gameStart == 1 || (gameStart == 2 || gameStart == 3)) {
        if (player2DeathCount < 2 && player2IsDead != 1) {
            while (controller.player2.isPressed(ControllerButton.B)) {
                if (controller.player2.isPressed(ControllerButton.Up)) {
                    sliceEffectPlr2 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 1 . . . . . . . . 
                        . . . . . 1 . . . . 1 . . . . . 
                        . 1 1 . . . . . . . . . . . . . 
                        . 1 . . . 1 1 1 1 . . . . 1 . . 
                        . . . 1 1 1 . . 1 1 1 . . . . . 
                        . . 1 1 . . . . . . 1 1 . . . . 
                        . 1 1 . . . . . . . . 1 1 . . . 
                        1 1 . . . . . . . . . . 1 1 . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, SpriteKind.Projectile)
                    sliceEffectPlr2.setPosition(Player2.x, Player2.y)
                    sliceEffectPlr2.setFlag(SpriteFlag.DestroyOnWall, true)
                    sliceEffectPlr2.setVelocity(0, -20)
                    for (let index = 0; index < 10; index++) {
                        pause(200)
                        sliceEffectPlr2.setVelocity(0, sliceEffectPlr2.vy + 2)
                    }
                    if (sliceEffectPlr2.vy == 0) {
                        sliceEffectPlr2.destroy()
                    }
                } else if (controller.player2.isPressed(ControllerButton.Down)) {
                    sliceEffectPlr2 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . 1 1 . . . . . . . . . . 1 1 
                        . . . 1 1 . . . . . . . . 1 1 . 
                        . . . . 1 1 . . . . . . 1 1 . . 
                        . . . . . 1 1 1 . . 1 1 1 . . . 
                        . . 1 . . . . 1 1 1 1 . . . 1 . 
                        . . . . . . . . . . . . . 1 1 . 
                        . . . . . 1 . . . . 1 . . . . . 
                        . . . . . . . . 1 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, SpriteKind.Projectile)
                    sliceEffectPlr2.setPosition(Player2.x, Player2.y)
                    sliceEffectPlr2.setFlag(SpriteFlag.DestroyOnWall, true)
                    sliceEffectPlr2.setVelocity(0, 20)
                    for (let index = 0; index < 10; index++) {
                        pause(200)
                        sliceEffectPlr2.setVelocity(0, sliceEffectPlr2.vy - 2)
                    }
                    if (sliceEffectPlr2.vy == 0) {
                        sliceEffectPlr2.destroy()
                    }
                } else if (controller.player2.isPressed(ControllerButton.Left)) {
                    sliceEffectPlr2 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . 1 . . . 1 . . . . . . 
                        . . . . . . . . 1 1 . . . . . . 
                        . . . . . . . 1 1 . . . . . . . 
                        . . . 1 . . 1 1 . . . . . . . . 
                        . . . . . . 1 . . . . . . . . . 
                        . . . . . 1 1 . . . . . . . . . 
                        . . 1 . . 1 . . . . . . . . . . 
                        . . . . . 1 . . . . . . . . . . 
                        . . . 1 . 1 1 . . . . . . . . . 
                        . . . . . . 1 . . . . . . . . . 
                        . . . . . . 1 1 . . . . . . . . 
                        . . . . 1 . . 1 1 . . . . . . . 
                        . . . . 1 1 . . 1 1 . . . . . . 
                        . . . . . . . . . 1 . . . . . . 
                        `, SpriteKind.Projectile)
                    sliceEffectPlr2.setPosition(Player2.x, Player2.y)
                    sliceEffectPlr2.setFlag(SpriteFlag.DestroyOnWall, true)
                    sliceEffectPlr2.setVelocity(-20, 0)
                    for (let index = 0; index < 10; index++) {
                        pause(200)
                        sliceEffectPlr2.setVelocity(sliceEffectPlr2.vx + 2, 0)
                    }
                    if (sliceEffectPlr2.vx == 0) {
                        sliceEffectPlr2.destroy()
                    }
                } else if (controller.player2.isPressed(ControllerButton.Right)) {
                    sliceEffectPlr2 = sprites.create(img`
                        . . . . . . 1 . . . . . . . . . 
                        . . . . . . 1 1 . . 1 1 . . . . 
                        . . . . . . . 1 1 . . 1 . . . . 
                        . . . . . . . . 1 1 . . . . . . 
                        . . . . . . . . . 1 . . . . . . 
                        . . . . . . . . . 1 1 . 1 . . . 
                        . . . . . . . . . . 1 . . . . . 
                        . . . . . . . . . . 1 . . 1 . . 
                        . . . . . . . . . 1 1 . . . . . 
                        . . . . . . . . . 1 . . . . . . 
                        . . . . . . . . 1 1 . . 1 . . . 
                        . . . . . . . 1 1 . . . . . . . 
                        . . . . . . 1 1 . . . . . . . . 
                        . . . . . . 1 . . . 1 . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, SpriteKind.Projectile)
                    sliceEffectPlr2.setPosition(Player2.x, Player2.y)
                    sliceEffectPlr2.setFlag(SpriteFlag.DestroyOnWall, true)
                    sliceEffectPlr2.setVelocity(20, 0)
                    for (let index = 0; index < 10; index++) {
                        pause(200)
                        sliceEffectPlr2.setVelocity(sliceEffectPlr2.vx - 2, 0)
                    }
                    if (sliceEffectPlr2.vx == 0) {
                        sliceEffectPlr2.destroy()
                    }
                } else if (!(controller.player2.isPressed(ControllerButton.Up) || controller.player2.isPressed(ControllerButton.Down) || (controller.player2.isPressed(ControllerButton.Left) || controller.player2.isPressed(ControllerButton.Right)))) {
                    sliceEffectPlr2 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 1 . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . 1 . . . . 
                        . . . . . . 1 1 1 1 . . . . . . 
                        . . . . . 1 1 1 1 1 1 . . . . . 
                        . . . . . 1 1 1 1 1 1 . . . . . 
                        . . . . . 1 1 1 1 1 1 . . . . . 
                        . . . . . 1 1 1 1 1 1 . . . . . 
                        . . . . . . 1 1 1 1 . . . . . . 
                        . 1 . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . 1 . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . 1 . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, SpriteKind.Projectile)
                    sliceEffectPlr2.setPosition(Player2.x, Player2.y)
                    sliceEffectPlr2.setVelocity(randint(1, 10), randint(1, 10))
                    pause(2000)
                    sliceEffectPlr2.destroy()
                } else {
                	
                }
            }
        }
    }
})
// Button manager
sprites.onOverlap(SpriteKind.Player, SpriteKind.Button, function (sprite, otherSprite) {
    if (sprite == cursor && controller.A.isPressed()) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 767, 1414, 129, 129, 221, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
        if (otherSprite == title) {
            menu = 1
            menuFunc()
        } else if (otherSprite == playButton) {
            menu = 2
            menuFunc()
        } else if (otherSprite == tipsButton) {
            menu = 3
            menuFunc()
        } else if (otherSprite == helpButton) {
            menu = 4
            menuFunc()
        } else if (otherSprite == difficultyButton) {
            menu = 5
            menuFunc()
        } else if (otherSprite == difficultyX) {
            menu = 0
            menuFunc()
        } else if (otherSprite == easyButton) {
            game.showLongText("Easy difficulty selected", DialogLayout.Bottom)
            difficultyLevel = 0
            menu = 0
            menuFunc()
        } else if (otherSprite == mediumButton) {
            game.showLongText("Medium difficulty selected", DialogLayout.Bottom)
            difficultyLevel = 1
            menu = 0
            menuFunc()
        } else if (otherSprite == hardButton) {
            game.showLongText("Hard difficulty selected", DialogLayout.Bottom)
            difficultyLevel = 2
            menu = 0
            menuFunc()
        } else if (otherSprite == character1Button) {
            cursor.destroy()
            character1 = 1
            disableChar2 = 1
            charSelectX.destroy()
        } else if (otherSprite == character2Button) {
            cursor.destroy()
            character1 = 2
            disableChar2 = 1
            charSelectX.destroy()
        } else if (otherSprite == character3Button) {
            cursor.destroy()
            character1 = 3
            disableChar2 = 1
            charSelectX.destroy()
        } else if (otherSprite == character4Button) {
            cursor.destroy()
            character1 = 4
            disableChar2 = 1
            charSelectX.destroy()
        } else if (otherSprite == charSelectX) {
            menu = 0
            menuFunc()
        } else {
        	
        }
    }
    if (sprite == cursor2 && controller.player2.isPressed(ControllerButton.A)) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 767, 955, 95, 95, 221, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
        if (otherSprite == character1Button && controller.player2.isPressed(ControllerButton.A)) {
            character2 = 1
            mainGameManger()
        } else if (otherSprite == character2Button && controller.player2.isPressed(ControllerButton.A)) {
            character2 = 2
            mainGameManger()
        } else if (otherSprite == character3Button && controller.player2.isPressed(ControllerButton.A)) {
            character2 = 3
            mainGameManger()
        } else if (otherSprite == character4Button && controller.player2.isPressed(ControllerButton.A)) {
            character2 = 4
            mainGameManger()
        }
    }
})
// Walking right Player 2 animation
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    stopAnimPlr2 = 0
    if (character1 != 0) {
        if (character2 == 1) {
            animation.runImageAnimation(
            Player2,
            [img`
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e 4 d d d d f . . . 
                . . . . f f e e 4 4 4 e f . . . 
                . . . . . 4 d d e 2 2 2 f . . . 
                . . . . . e d d e 2 2 2 f . . . 
                . . . . . f e e f 4 5 5 f . . . 
                . . . . . . f f f f f f . . . . 
                . . . . . . . f f f . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e e e d d d f . . . 
                . . . . . f 4 d d e 4 e f . . . 
                . . . . . f e d d e 2 2 f . . . 
                . . . . f f f e e f 5 5 f f . . 
                . . . . f f f f f f f f f f . . 
                . . . . . f f . . . f f f . . . 
                `,img`
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e 4 d d d d f . . . 
                . . . . f f e e 4 4 4 e f . . . 
                . . . . . 4 d d e 2 2 2 f . . . 
                . . . . . e d d e 2 2 2 f . . . 
                . . . . . f e e f 4 5 5 f . . . 
                . . . . . . f f f f f f . . . . 
                . . . . . . . f f f . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e 4 d d d d f . . . 
                . . . . 4 d d e 4 4 4 e f . . . 
                . . . . e d d e 2 2 2 2 f . . . 
                . . . . f e e f 4 4 5 5 f f . . 
                . . . . f f f f f f f f f f . . 
                . . . . . f f . . . f f f . . . 
                `],
            200,
            false
            )
        }
        if (character2 == 2) {
            animation.runImageAnimation(
            Player2,
            [img`
                . . . . . . . 5 . 5 . . . . . . 
                . . . . . . f 5 5 5 f . . . . . 
                . . . . . f 6 5 5 2 6 f . . . . 
                . . . . f 6 6 1 6 6 6 6 f . . . 
                . . . . f 6 1 6 6 6 6 6 f . . . 
                . . . . f 1 6 6 6 d f d f . . . 
                . . . f f 6 6 6 6 d f d f . . . 
                . . f 6 f 6 6 6 d d 3 d f . . . 
                . . . f f 6 f f d d d f . . . . 
                . . f 6 6 6 f 3 5 f f . . . . . 
                . . . f f f f f 3 3 5 f . . . . 
                . . . . . . f d f 3 3 f . . . . 
                . . . . . . f d f 3 f . . . . . 
                . . . . . f d f 3 5 3 f . . . . 
                . . . . . . f f 3 3 f f . . . . 
                . . . . . . . f f f . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 5 . 5 . . . . . . . 
                . . . . . f 5 5 5 f . . . . . . 
                . . . . f 6 5 5 2 6 f . . . . . 
                . . . f 6 6 1 6 6 6 6 f . . . . 
                . . . f 6 1 6 6 6 6 6 f . . . . 
                . . . f 1 6 6 6 d f d f . . . . 
                . . f f 6 6 6 6 d f d f . . . . 
                . f 6 f 6 6 6 d d 3 d f . . . . 
                . . f f 6 f f d d d f . . . . . 
                . f 6 6 f f 3 3 f f . . . . . . 
                . . f f f f d d d d f . . . . . 
                . . . . f 3 f d d d f . . . . . 
                . . . f 3 5 d f f f . . . . . . 
                . . . . f f 3 3 f f f . . . . . 
                . . . . f f f f f f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 5 . 5 . . . . . . . 
                . . . . . f 5 5 5 f . . . . . . 
                . . . . f 6 5 5 2 6 f . . . . . 
                . . . f 6 6 1 6 6 6 6 f . . . . 
                . . . f 6 1 6 6 6 6 6 f . . . . 
                . . . f 1 6 6 6 d f d f . . . . 
                . . f f 6 6 6 6 d f d f . . . . 
                . f 6 f 6 6 6 d d 3 d f . . . . 
                . . f f 6 f f d d d f . . . . . 
                . f 6 6 f f 3 3 f f . . . . . . 
                . . f f f d d 3 3 5 f . . . . . 
                . . . f d d f 3 3 3 f . . . . . 
                . . . . f f f 5 3 f . . . . . . 
                . . . . . f 3 3 3 3 f . . . . . 
                . . . . . f f f f f . . . . . . 
                `],
            200,
            false
            )
        }
        if (character2 == 3) {
            animation.runImageAnimation(
            Player2,
            [img`
                . . . . . . . . . . . . . 
                . . . f f f f f f . . . . 
                . f f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f c f f f c f f f . 
                f c f f c c f f f c c f f 
                f c c f f f f e f f f f f 
                f f f f f f f e e f f f . 
                f f e e f b f e e f f f . 
                f f e 4 e 1 f 4 4 f f . . 
                . f f f e 4 4 4 4 f . . . 
                . 4 4 4 e e e e f f . . . 
                . e 4 4 e 7 7 7 7 f . . . 
                . f e e f 6 6 6 6 f f . . 
                . f f f f f f f f f f . . 
                . . f f . . . f f f . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . f f f f f f . . . . 
                . f f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f c f f f c f f f . 
                f c f f c c f f f c c f f 
                f c c f f f f e f f f f f 
                f f f f f f f e e f f f . 
                f f e e f b f e e f f . . 
                . f e 4 e 1 f 4 4 f f . . 
                . f f f e e 4 4 4 f . . . 
                . . f e 4 4 e e f f . . . 
                . . f e 4 4 e 7 7 f . . . 
                . f f f e e f 6 6 f f . . 
                . f f f f f f f f f f . . 
                . . f f . . . f f f . . . 
                `,img`
                . . . f f f f f . . . . . 
                . f f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f c f f f c f f . . 
                f c f f c c f f f c c f f 
                f c c f f f f e f f f f f 
                f f f f f f f e e f f f . 
                f f e e f b f e e f f . . 
                . f e 4 e 1 f 4 4 f . . . 
                . f f f e 4 4 4 4 f . . . 
                . . f e e e e e f f . . . 
                . . e 4 4 e 7 7 7 f . . . 
                . . e 4 4 e 7 7 7 f . . . 
                . . f e e f 6 6 6 f . . . 
                . . . f f f f f f . . . . 
                . . . . f f f . . . . . . 
                `],
            200,
            false
            )
        }
        if (character2 == 4) {
            animation.runImageAnimation(
            Player2,
            [img`
                . . . . . . . . . . . . . . 
                . f f f . f f f f f . . . . 
                f f f f f c c c c f f . . . 
                f f f f b c c c c c c f . . 
                f f f c 3 c c c c c c f . . 
                . f 3 3 c c c c c c c c f . 
                . f f f c c c c c 4 c c f . 
                . f f f f c c c 4 4 c f f . 
                . f f 4 4 f b f 4 4 f f f . 
                . f f 4 d 4 1 f d d c f . . 
                . . f f f 4 d d d d f . . . 
                . . 4 d d e 4 4 4 e f . . . 
                . . e d d e 3 3 3 3 f . . . 
                . . f e e f 6 6 6 6 f f . . 
                . . f f f f f f f f f f . . 
                . . . f f . . . f f f . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . f f f . f f f f f . . . . 
                f f f f f c c c c f f . . . 
                f f f f b c c c c c c f . . 
                f f f c 3 c c c c c c f . . 
                . f 3 3 c c c c c c c c f . 
                . f f f c c c c c 4 c c f . 
                . f f f f c c c 4 4 c f f . 
                . f f 4 4 f b f 4 4 f f f . 
                . . f 4 d 4 1 f d d f f . . 
                . . f f f e e d d d f . . . 
                . . . f 4 d d e 4 e f . . . 
                . . . f e d d e 3 3 f . . . 
                . . f f f e e f 6 6 f f . . 
                . . f f f f f f f f f f . . 
                . . . f f . . . f f f . . . 
                `,img`
                . f f f . f f f f f . . . . 
                f f f f f c c c c f f . . . 
                f f f f b c c c c c c f . . 
                f f f c 3 c c c c c c f . . 
                . f 3 3 c c c c c c c c f . 
                . f f f c c c c c 4 c c f . 
                . f f f f c c c 4 4 e f f . 
                . f f 4 4 f b f 4 4 e f f . 
                . . f 4 d 4 1 f d d f f . . 
                . . f f f 4 d d d d f . . . 
                . . . f e e 4 4 4 e f . . . 
                . . . 4 d d e 3 3 3 f . . . 
                . . . e d d e 3 3 3 f . . . 
                . . . f e e f 6 6 6 f . . . 
                . . . . f f f f f f . . . . 
                . . . . . f f f . . . . . . 
                `],
            200,
            false
            )
        }
    }
})
// Manages all the main game sprites, character select, and the difficulty
function mainGameManger () {
    if (character1 == 1) {
        Player1 = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Survivor)
    } else if (character1 == 2) {
        Player1 = sprites.create(img`
            . . . . . . 5 . 5 . . . . . . . 
            . . . . . f 5 5 5 f f . . . . . 
            . . . . f 1 5 2 5 1 6 f . . . . 
            . . . f 1 6 6 6 6 6 1 6 f . . . 
            . . . f 6 6 f f f f 6 1 f . . . 
            . . . f 6 f f d d f f 6 f . . . 
            . . f 6 f d f d d f d f 6 f . . 
            . . f 6 f d 3 d d 3 d f 6 f . . 
            . . f 6 6 f d d d d f 6 6 f . . 
            . f 6 6 f 3 f f f f 3 f 6 6 f . 
            . . f f d 3 5 3 3 5 3 d f f . . 
            . . f d d f 3 5 5 3 f d d f . . 
            . . . f f 3 3 3 3 3 3 f f . . . 
            . . . f 3 3 5 3 3 5 3 3 f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Survivor)
    } else if (character1 == 3) {
        Player1 = sprites.create(img`
            . . . . f f f f . . . . . 
            . . f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f f f c c f f f c . 
            f f f c f f f f f f f c . 
            c c c f f f e e f f c c . 
            f f f f f e e f f c c f . 
            f f f b f e e f b f f f . 
            . f 4 1 f 4 4 f 1 4 f . . 
            . f e 4 4 4 4 4 4 e f . . 
            . f f f e e e e f f f . . 
            f e f b 7 7 7 7 b f e f . 
            e 4 f 7 7 7 7 7 7 f 4 e . 
            e e f 6 6 6 6 6 6 f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `, SpriteKind.Survivor)
    } else if (character1 == 4) {
        Player1 = sprites.create(img`
            . f f f . f f f f . f f f . 
            f f f f f c c c c f f f f f 
            f f f f b c c c c b f f f f 
            f f f c 3 c c c c 3 c f f f 
            . f 3 3 c c c c c c 3 3 f . 
            . f c c c c 4 4 c c c c f . 
            . f f c c 4 4 4 4 c c f f . 
            . f f f b f 4 4 f b f f f . 
            . f f 4 1 f d d f 1 4 f f . 
            . . f f d d d d d d f f . . 
            . . e f e 4 4 4 4 e f e . . 
            . e 4 f b 3 3 3 3 b f 4 e . 
            . 4 d f 3 3 3 3 3 3 c d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . f f f f f f . . . . 
            . . . . f f . . f f . . . . 
            `, SpriteKind.Survivor)
    }
    controller.moveSprite(Player1, 50, 50)
    Player1.setPosition(50, 65)
    statusBarPlayer1 = statusbars.create(20, 4, StatusBarKind.Health)
    statusBarPlayer1.attachToSprite(Player1)
    scene.cameraFollowSprite(Player1)
    if (character2 == 1) {
        Player2 = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Survivor)
    } else if (character2 == 2) {
        Player2 = sprites.create(img`
            . . . . . . 5 . 5 . . . . . . . 
            . . . . . f 5 5 5 f f . . . . . 
            . . . . f 1 5 2 5 1 6 f . . . . 
            . . . f 1 6 6 6 6 6 1 6 f . . . 
            . . . f 6 6 f f f f 6 1 f . . . 
            . . . f 6 f f d d f f 6 f . . . 
            . . f 6 f d f d d f d f 6 f . . 
            . . f 6 f d 3 d d 3 d f 6 f . . 
            . . f 6 6 f d d d d f 6 6 f . . 
            . f 6 6 f 3 f f f f 3 f 6 6 f . 
            . . f f d 3 5 3 3 5 3 d f f . . 
            . . f d d f 3 5 5 3 f d d f . . 
            . . . f f 3 3 3 3 3 3 f f . . . 
            . . . f 3 3 5 3 3 5 3 3 f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Survivor)
    } else if (character2 == 3) {
        Player2 = sprites.create(img`
            . . . . f f f f . . . . . 
            . . f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f f f c c f f f c . 
            f f f c f f f f f f f c . 
            c c c f f f e e f f c c . 
            f f f f f e e f f c c f . 
            f f f b f e e f b f f f . 
            . f 4 1 f 4 4 f 1 4 f . . 
            . f e 4 4 4 4 4 4 e f . . 
            . f f f e e e e f f f . . 
            f e f b 7 7 7 7 b f e f . 
            e 4 f 7 7 7 7 7 7 f 4 e . 
            e e f 6 6 6 6 6 6 f e e . 
            . . . f f f f f f . . . . 
            . . . f f . . f f . . . . 
            `, SpriteKind.Survivor)
    } else if (character2 == 4) {
        Player2 = sprites.create(img`
            . f f f . f f f f . f f f . 
            f f f f f c c c c f f f f f 
            f f f f b c c c c b f f f f 
            f f f c 3 c c c c 3 c f f f 
            . f 3 3 c c c c c c 3 3 f . 
            . f c c c c 4 4 c c c c f . 
            . f f c c 4 4 4 4 c c f f . 
            . f f f b f 4 4 f b f f f . 
            . f f 4 1 f d d f 1 4 f f . 
            . . f f d d d d d d f f . . 
            . . e f e 4 4 4 4 e f e . . 
            . e 4 f b 3 3 3 3 b f 4 e . 
            . 4 d f 3 3 3 3 3 3 c d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . f f f f f f . . . . 
            . . . . f f . . f f . . . . 
            `, SpriteKind.Survivor)
    }
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Button)
    sprites.destroyAllSpritesOfKind(SpriteKind.GUI)
    sprites.destroyAllSpritesOfKind(SpriteKind.noSelection)
    controller.player2.moveSprite(Player2, 50, 50)
    Player2.setPosition(110, 65)
    statusBarPlayer2 = statusbars.create(20, 4, StatusBarKind.Health)
    statusBarPlayer2.attachToSprite(Player2)
    splitScreen.splitScreenCameraFollow(Player2)
    if (difficultyLevel == 0) {
        gameStart = 1
        // Make spawn randomly for a set amount of time, then progress to new level or area
        zombie1 = sprites.create(assets.image`Zombie 1`, SpriteKind.zombie)
        zombie1.setPosition(20, 25)
        zombie2 = sprites.create(assets.image`Zombie 2`, SpriteKind.zombie)
        zombie2.setPosition(140, 25)
        // 2 beacons for easy
        // 3 beacons for medium
        // 4 beacons for hard
        // 
        beacon1 = sprites.create(img`
            . . . . . . . c d . . . . . . . 
            . . . . . . . c d . . . . . . . 
            . . . . . . . c d . . . . . . . 
            . . . . . . . c b . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . c 6 . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . 8 6 . . . . . . . 
            . . . . . . 8 8 9 8 . . . . . . 
            . . . . . . 8 6 9 8 . . . . . . 
            . . . . . c c c 8 8 8 . . . . . 
            . . . . 8 8 6 6 6 9 8 8 . . . . 
            . . 8 f f f c c e e f f 8 8 . . 
            . 8 8 8 8 8 8 6 6 6 6 9 6 8 8 . 
            8 8 8 8 8 8 8 8 6 6 6 9 6 6 8 8 
            8 8 8 8 8 8 8 8 6 6 6 6 9 6 8 8 
            `, SpriteKind.objective)
        beacon1.setPosition(10, 101)
        tiles.setCurrentTilemap(tilemap`level2`)
    } else if (difficultyLevel == 1) {
        gameStart = 2
        reaper = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
    } else if (difficultyLevel == 2) {
        gameStart = 3
    }
}
// Player 2 gun effect 
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (gameStart == 1 || gameStart == 2 || gameStart == 3) {
        if (gameStart == 1 || (gameStart == 2 || gameStart == 3)) {
            if (player1DeathCount < 2 && player1IsDead != 1) {
                while (controller.player2.isPressed(ControllerButton.A)) {
                    if (controller.player2.isPressed(ControllerButton.Up)) {
                        bulletPlr2 = sprites.create(assets.image`Zombie Bullet Up`, SpriteKind.Projectile)
                        bulletPlr2.setPosition(Player2.x, Player2.y)
                        bulletPlr2.setVelocity(0, -100)
                        bulletPlr2.setFlag(SpriteFlag.AutoDestroy, false)
                        for (let index = 0; index < 20; index++) {
                            pause(200)
                            bulletPlr2.setVelocity(0, bulletPlr2.vy + 5)
                        }
                        if (bulletPlr2.vy == 0) {
                            for (let index = 0; index < 5; index++) {
                                bulletPlr2.y += 1
                                pause(100)
                            }
                            bulletPlr2.destroy()
                        }
                    } else if (controller.player2.isPressed(ControllerButton.Down)) {
                        bulletPlr2 = sprites.create(assets.image`Zombie Bullet Down`, SpriteKind.Projectile)
                        bulletPlr2.setPosition(Player2.x, Player2.y)
                        bulletPlr2.setVelocity(0, 100)
                        bulletPlr2.setFlag(SpriteFlag.AutoDestroy, false)
                        for (let index = 0; index < 20; index++) {
                            pause(200)
                            bulletPlr2.setVelocity(0, bulletPlr2.vy - 5)
                        }
                        if (bulletPlr2.vy == 0) {
                            for (let index = 0; index < 5; index++) {
                                bulletPlr2.y += 1
                                pause(100)
                            }
                            bulletPlr2.destroy()
                        }
                        bulletPlr2.destroy()
                    } else if (controller.player2.isPressed(ControllerButton.Left)) {
                        bulletPlr2 = sprites.create(assets.image`Zombie Bullet Left`, SpriteKind.Projectile)
                        bulletPlr2.setPosition(Player2.x, Player2.y)
                        bulletPlr2.setVelocity(-100, 0)
                        bulletPlr2.setFlag(SpriteFlag.AutoDestroy, false)
                        for (let index = 0; index < 20; index++) {
                            pause(200)
                            bulletPlr2.setVelocity(bulletPlr2.vx + 5, 0)
                        }
                        if (bulletPlr2.vy == 0) {
                            for (let index = 0; index < 5; index++) {
                                bulletPlr2.y += 1
                                pause(100)
                            }
                            bulletPlr2.destroy()
                        }
                        bulletPlr2.destroy()
                    } else if (controller.player2.isPressed(ControllerButton.Right)) {
                        bulletPlr2 = sprites.create(assets.image`Zombie Bullet Right`, SpriteKind.Projectile)
                        bulletPlr2.setPosition(Player2.x, Player2.y)
                        bulletPlr2.setFlag(SpriteFlag.DestroyOnWall, true)
                        bulletPlr2.setVelocity(100, 0)
                        bulletPlr2.setFlag(SpriteFlag.AutoDestroy, false)
                        for (let index = 0; index < 20; index++) {
                            pause(200)
                            bulletPlr2.setVelocity(bulletPlr2.vx - 5, 0)
                        }
                        if (bulletPlr2.vy == 0) {
                            for (let index = 0; index < 5; index++) {
                                bulletPlr2.y += 1
                                pause(100)
                            }
                            bulletPlr2.destroy()
                        }
                        bulletPlr2.destroy()
                    } else if (!(controller.player2.isPressed(ControllerButton.Up) || controller.player2.isPressed(ControllerButton.Down) || (controller.player2.isPressed(ControllerButton.Left) || controller.player2.isPressed(ControllerButton.Right)))) {
                        bulletPlr2 = sprites.create(assets.image`Zombie Slice Effect Idle`, SpriteKind.Projectile)
                        bulletPlr2.setPosition(Player2.x, Player2.y)
                        bulletPlr2.setVelocity(randint(1, 20), randint(1, 20))
                        bulletPlr2.setFlag(SpriteFlag.AutoDestroy, false)
                        pause(2000)
                        bulletPlr2.destroy()
                    }
                }
            }
        }
    }
})
// Makes sure Player 2 sprite can not be Player 1 sprite
sprites.onOverlap(SpriteKind.Player, SpriteKind.noSelection, function (sprite, otherSprite) {
    if (controller.player2.isPressed(ControllerButton.A)) {
        game.showLongText("Player 1 already selected this character!", DialogLayout.Bottom)
    }
})
// "Kills" zombie if hit by slice effect or bullet
sprites.onOverlap(SpriteKind.zombie, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy()
})
// Player 1 gun effect 
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameStart == 1 || (gameStart == 2 || gameStart == 3)) {
        if (player1DeathCount < 2 && false) {
            while (controller.A.isPressed()) {
                if (controller.up.isPressed()) {
                    bulletPlr1 = sprites.create(assets.image`Zombie Bullet Up`, SpriteKind.Projectile)
                    bulletPlr1.setPosition(Player1.x, Player1.y)
                    bulletPlr1.setVelocity(0, -100)
                    bulletPlr1.setFlag(SpriteFlag.AutoDestroy, false)
                    for (let index = 0; index < 20; index++) {
                        pause(100)
                        bulletPlr1.setVelocity(0, bulletPlr1.vy + 5)
                    }
                    if (bulletPlr1.vy == 0) {
                        for (let index = 0; index < 5; index++) {
                            bulletPlr1.y += 1
                            pause(100)
                        }
                    }
                    bulletPlr1.destroy()
                } else if (controller.down.isPressed()) {
                    bulletPlr1 = sprites.create(assets.image`Zombie Bullet Down`, SpriteKind.Projectile)
                    bulletPlr1.setPosition(Player1.x, Player1.y)
                    bulletPlr1.setVelocity(0, 100)
                    bulletPlr1.setFlag(SpriteFlag.AutoDestroy, false)
                    for (let index = 0; index < 20; index++) {
                        pause(100)
                        bulletPlr1.setVelocity(0, bulletPlr1.vy - 5)
                    }
                    if (bulletPlr1.vy == 0) {
                        for (let index = 0; index < 5; index++) {
                            bulletPlr1.y += 1
                            pause(100)
                        }
                    }
                    bulletPlr1.destroy()
                } else if (controller.left.isPressed()) {
                    bulletPlr1 = sprites.create(assets.image`Zombie Bullet Left`, SpriteKind.Projectile)
                    bulletPlr1.setPosition(Player1.x, Player1.y)
                    bulletPlr1.setVelocity(-100, 0)
                    bulletPlr1.setFlag(SpriteFlag.AutoDestroy, false)
                    for (let index = 0; index < 20; index++) {
                        pause(100)
                        bulletPlr1.setVelocity(bulletPlr1.vx + 5, 0)
                    }
                    if (bulletPlr1.vy == 0) {
                        for (let index = 0; index < 5; index++) {
                            bulletPlr1.y += 1
                            pause(100)
                        }
                    }
                    bulletPlr1.destroy()
                } else if (controller.right.isPressed()) {
                    bulletPlr1 = sprites.create(assets.image`Zombie Bullet Right`, SpriteKind.Projectile)
                    bulletPlr1.setPosition(Player1.x, Player1.y)
                    bulletPlr1.setVelocity(100, 0)
                    bulletPlr1.setFlag(SpriteFlag.AutoDestroy, false)
                    for (let index = 0; index < 20; index++) {
                        pause(100)
                        bulletPlr1.setVelocity(bulletPlr1.vx - 5, 0)
                    }
                    if (bulletPlr1.vy == 0) {
                        for (let index = 0; index < 5; index++) {
                            bulletPlr1.y += 1
                            pause(100)
                        }
                    }
                    bulletPlr1.destroy()
                } else if (!(controller.up.isPressed() || controller.down.isPressed() || (controller.left.isPressed() || controller.right.isPressed()))) {
                    bulletPlr1 = sprites.create(assets.image`Zombie Slice Effect Idle`, SpriteKind.Projectile)
                    bulletPlr1.setPosition(Player1.x, Player1.y)
                    bulletPlr1.setVelocity(randint(1, 20), randint(1, 20))
                    bulletPlr1.setFlag(SpriteFlag.AutoDestroy, false)
                    pause(2000)
                    bulletPlr1.destroy()
                }
            }
        }
    }
})
// Walking down Player 1 animation
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    stopAnimplr1 = 0
    if (character2 != 0) {
        if (character1 == 1) {
            animation.runImageAnimation(
            Player1,
            [img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . f f e 2 f f f f f f 2 e f f . 
                . f f f f f e e e e f f f f f . 
                . . f e f b f 4 4 f b f e f . . 
                . . f e 4 1 f d d f 1 4 e f . . 
                . . . f e 4 d d d d 4 e f e . . 
                . . f e f 2 2 2 2 e d d 4 e . . 
                . . e 4 f 2 2 2 2 e d d e . . . 
                . . . . f 4 4 5 5 f e e . . . . 
                . . . . f f f f f f f . . . . . 
                . . . . f f f . . . . . . . . . 
                `,img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f e e 2 2 2 2 2 2 e f f . . 
                . f f e 2 f f f f f f 2 e f f . 
                . f f f f f e e e e f f f f f . 
                . . f e f b f 4 4 f b f e f . . 
                . . f e 4 1 f d d f 1 4 e f . . 
                . . e f e 4 d d d d 4 e f . . . 
                . . e 4 d d e 2 2 2 2 f e f . . 
                . . . e d d e 2 2 2 2 f 4 e . . 
                . . . . e e f 5 5 4 4 f . . . . 
                . . . . . f f f f f f f . . . . 
                . . . . . . . . . f f f . . . . 
                `],
            200,
            false
            )
        }
        if (character1 == 2) {
            animation.runImageAnimation(
            Player1,
            [img`
                . . . . . . 5 . 5 . . . . . . . 
                . . . . . f 5 5 5 f f . . . . . 
                . . . . f 1 5 2 5 1 6 f . . . . 
                . . . f 1 6 6 6 6 6 1 6 f . . . 
                . . . f 6 6 f f f f 6 1 f . . . 
                . . . f 6 f f d d f f 6 f . . . 
                . . f 6 f d f d d f d f 6 f . . 
                . . f 6 f d 3 d d 3 d f 6 f . . 
                . . f 6 6 f d d d d f 6 6 f . . 
                . f 6 6 f 3 f f f f 3 f 6 6 f . 
                . . f f d 3 5 3 3 5 3 d f f . . 
                . . f d d f 3 5 5 3 f d d f . . 
                . . . f f 3 3 3 3 3 3 f f . . . 
                . . . f 3 3 5 3 3 5 3 3 f . . . 
                . . . f f f f f f f f f f . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . 5 . 5 . . . . . . . 
                . . . . . f 5 5 5 f f . . . . . 
                . . . . f 1 5 2 5 1 6 f . . . . 
                . . . f 1 6 6 6 6 6 1 6 f . . . 
                . . . f 6 6 f f f f 6 1 f . . . 
                . . . f 6 f f d d f f 6 f . . . 
                . . f 6 f d f d d f d f 6 f . . 
                . . f 6 f d 3 d d 3 d f 6 f . . 
                . . f 6 6 f d d d d f 6 6 f . . 
                . f 6 6 f 3 f f f f 3 f 6 6 f . 
                . . f f 3 3 5 3 3 5 3 d f f . . 
                . . . f d f 3 5 5 3 f f d f . . 
                . . . f d f 3 3 3 3 3 f f . . . 
                . . . f f 3 5 3 3 5 3 3 f . . . 
                . . . . f f f f f f f f f . . . 
                . . . . . . . . . f f . . . . . 
                `,img`
                . . . . . . 5 . 5 . . . . . . . 
                . . . . . f 5 5 5 f f . . . . . 
                . . . . f 1 5 2 5 1 6 f . . . . 
                . . . f 1 6 6 6 6 6 1 6 f . . . 
                . . . f 6 6 f f f f 6 1 f . . . 
                . . . f 6 f f d d f f 6 f . . . 
                . . f 6 f d f d d f d f 6 f . . 
                . . f 6 f d 3 d d 3 d f 6 f . . 
                . . f 6 6 f d d d d f 6 6 f . . 
                . f 6 6 f 3 f f f f 3 f 6 6 f . 
                . . f f d 3 5 3 3 5 3 3 f f . . 
                . . f d f f 3 5 5 3 f d f . . . 
                . . . f f 3 3 3 3 3 f d f . . . 
                . . . f 3 3 5 3 3 5 3 f f . . . 
                . . . f f f f f f f f f . . . . 
                . . . . . f f . . . . . . . . . 
                `],
            200,
            false
            )
        }
        if (character1 == 3) {
            animation.runImageAnimation(
            Player1,
            [img`
                . . . . f f f f . . . . . 
                . . f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f f f c c f f f c . 
                f f f c f f f f f f f c . 
                c c c f f f e e f f c c . 
                f f f f f e e f f c c f . 
                f f f b f e e f b f f f . 
                . f 4 1 f 4 4 f 1 4 f . . 
                . f e 4 4 4 4 4 4 e f . . 
                . f f f e e e e f f f . . 
                f e f b 7 7 7 7 b f e f . 
                e 4 f 7 7 7 7 7 7 f 4 e . 
                e e f 6 6 6 6 6 6 f e e . 
                . . . f f f f f f . . . . 
                . . . f f . . f f . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . . f f f f . . . . 
                . . . f f f f f f f f . . 
                . . f f f f f f c f f f . 
                f f f f f f f c c f f f c 
                f f f f c f f f f f f f c 
                . c c c f f f e e f f c c 
                . f f f f f e e f f c c f 
                . f f f b f e e f b f f f 
                . f f 4 1 f 4 4 f 1 4 f f 
                . . f e 4 4 4 4 4 e e f e 
                . f e f b 7 7 7 e 4 4 4 e 
                . e 4 f 7 7 7 7 e 4 4 e . 
                . . . f 6 6 6 6 6 e e . . 
                . . . f f f f f f f . . . 
                . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . f f f f . . . . . 
                . . f f f f f f f f . . . 
                . f f f c f f f f f f . . 
                c f f f c c f f f f f f f 
                c f f f f f f f c f f f f 
                c c f f e e f f f c c c . 
                f c c f f e e f f f f f . 
                f f f b f e e f b f f f . 
                f f 4 1 f 4 4 f 1 4 f f . 
                e f e e 4 4 4 4 4 e f . . 
                e 4 4 4 e 7 7 7 b f e f . 
                . e 4 4 e 7 7 7 7 f 4 e . 
                . . e e 6 6 6 6 6 f . . . 
                . . . f f f f f f f . . . 
                . . . . . . . f f f . . . 
                `],
            200,
            false
            )
        }
        if (character1 == 4) {
            animation.runImageAnimation(
            Player1,
            [img`
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c 4 4 c c c c f . 
                . f f c c 4 4 4 4 c c f f . 
                . f f f b f 4 4 f b f f f . 
                . f f 4 1 f d d f 1 4 f f . 
                . . f f d d d d d d f f . . 
                . . e f e 4 4 4 4 e f e . . 
                . e 4 f b 3 3 3 3 b f 4 e . 
                . 4 d f 3 3 3 3 3 3 c d 4 . 
                . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                . . . . f f f f f f . . . . 
                . . . . f f . . f f . . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c 4 4 c c c c f . 
                . f f c c 4 4 4 4 c c f f . 
                . f f f b f 4 4 f b f f f . 
                . f f 4 1 f d d f 1 4 f f . 
                . . f f d d d d d 4 e f e . 
                . f e f f b b b e d d 4 e . 
                . e 4 f b 3 3 3 e d d e . . 
                . . . f 6 6 6 6 f e e . . . 
                . . . f f f f f f f . . . . 
                . . . f f f . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c 4 4 c c c c f . 
                . f f c c 4 4 4 4 c c f f . 
                . f f f b f 4 4 f b f f f . 
                . f f 4 1 f d d f 1 4 f f . 
                . e f e 4 d d d d d f f . . 
                . e 4 d d e b b b f f e f . 
                . . e d d e 3 3 b e f 4 e . 
                . . . e e f 6 6 6 6 f . . . 
                . . . . f f f f f f f . . . 
                . . . . . . . . f f f . . . 
                `],
            200,
            false
            )
        }
    }
})
// Walking left Player 2 animation
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    stopAnimPlr2 = 0
    if (character1 != 0) {
        if (character2 == 1) {
            animation.runImageAnimation(
            Player2,
            [img`
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d d 4 e e e f . . . 
                . . . f e 4 4 4 e e f f . . . . 
                . . . f 2 2 2 e d d 4 . . . . . 
                . . . f 2 2 2 e d d e . . . . . 
                . . . f 5 5 4 f e e f . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d e e e e e f . . . 
                . . . f e 4 e d d 4 f . . . . . 
                . . . f 2 2 e d d e f . . . . . 
                . . f f 5 5 f e e f f f . . . . 
                . . f f f f f f f f f f . . . . 
                . . . f f f . . . f f . . . . . 
                `,img`
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d d 4 e e e f . . . 
                . . . f e 4 4 4 e e f f . . . . 
                . . . f 2 2 2 e d d 4 . . . . . 
                . . . f 2 2 2 e d d e . . . . . 
                . . . f 5 5 4 f e e f . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d d 4 e e e f . . . 
                . . . f e 4 4 4 e d d 4 . . . . 
                . . . f 2 2 2 2 e d d e . . . . 
                . . f f 5 5 4 4 f e e f . . . . 
                . . f f f f f f f f f f . . . . 
                . . . f f f . . . f f . . . . . 
                `],
            200,
            false
            )
        }
        if (character2 == 2) {
            animation.runImageAnimation(
            Player2,
            [img`
                . . . . . . 5 . 5 . . . . . . . 
                . . . . . f 5 5 5 f . . . . . . 
                . . . . f 6 2 5 5 6 f . . . . . 
                . . . f 6 6 6 6 1 6 6 f . . . . 
                . . . f 6 6 6 6 6 1 6 f . . . . 
                . . . f d f d 6 6 6 1 f . . . . 
                . . . f d f d 6 6 6 6 f f . . . 
                . . . f d 3 d d 6 6 6 f 6 f . . 
                . . . . f d d d f f 6 f f . . . 
                . . . . . f f 5 3 f 6 6 6 f . . 
                . . . . f 5 3 3 f f f f f . . . 
                . . . . f 3 3 f d f . . . . . . 
                . . . . . f 3 f d f . . . . . . 
                . . . . f 3 5 3 f d f . . . . . 
                . . . . f f 3 3 f f . . . . . . 
                . . . . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 5 . 5 . . . . . . 
                . . . . . . f 5 5 5 f . . . . . 
                . . . . . f 6 2 5 5 6 f . . . . 
                . . . . f 6 6 6 6 1 6 6 f . . . 
                . . . . f 6 6 6 6 6 1 6 f . . . 
                . . . . f d f d 6 6 6 1 f . . . 
                . . . . f d f d 6 6 6 6 f f . . 
                . . . . f d 3 d d 6 6 6 f 6 f . 
                . . . . . f d d d f f 6 f f . . 
                . . . . . . f f 3 3 f f 6 6 f . 
                . . . . . f d d d d f f f f . . 
                . . . . . f d d d f 3 f . . . . 
                . . . . . . f f f d 5 3 f . . . 
                . . . . . f f f 3 3 f f . . . . 
                . . . . . f f f f f f f . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 5 . 5 . . . . . . 
                . . . . . . f 5 5 5 f . . . . . 
                . . . . . f 6 2 5 5 6 f . . . . 
                . . . . f 6 6 6 6 1 6 6 f . . . 
                . . . . f 6 6 6 6 6 1 6 f . . . 
                . . . . f d f d 6 6 6 1 f . . . 
                . . . . f d f d 6 6 6 6 f f . . 
                . . . . f d 3 d d 6 6 6 f 6 f . 
                . . . . . f d d d f f 6 f f . . 
                . . . . . . f f 3 3 f f 6 6 f . 
                . . . . . f 5 3 3 d d f f f . . 
                . . . . . f 3 3 3 f d d f . . . 
                . . . . . . f 3 5 f f f . . . . 
                . . . . . f 3 3 3 3 f . . . . . 
                . . . . . . f f f f f . . . . . 
                `],
            200,
            false
            )
        }
        if (character2 == 3) {
            animation.runImageAnimation(
            Player2,
            [img`
                . . . . . f f f f f . . . 
                . . . f f f f f f f f f . 
                . . f f f c f f f f f f . 
                . . f f c f f f c f f f f 
                f f c c f f f c c f f c f 
                f f f f f e f f f f c c f 
                . f f f e e f f f f f f f 
                . . f f e e f b f e e f f 
                . . . f 4 4 f 1 e 4 e f . 
                . . . f 4 4 4 4 e f f f . 
                . . . f f e e e e e f . . 
                . . . f 7 7 7 e 4 4 e . . 
                . . . f 7 7 7 e 4 4 e . . 
                . . . f 6 6 6 f e e f . . 
                . . . . f f f f f f . . . 
                . . . . . . f f f . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . f f f f f f . . . 
                . . . f f f f f f f f f . 
                . . f f f c f f f f f f . 
                . f f f c f f f c f f f f 
                f f c c f f f c c f f c f 
                f f f f f e f f f f c c f 
                . f f f e e f f f f f f f 
                . . f f e e f b f e e f f 
                . . f f 4 4 f 1 e 4 e f . 
                . . . f 4 4 4 e e f f f . 
                . . . f f e e 4 4 e f . . 
                . . . f 7 7 e 4 4 e f . . 
                . . f f 6 6 f e e f f f . 
                . . f f f f f f f f f f . 
                . . . f f f . . . f f . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . f f f f f f . . . 
                . . . f f f f f f f f f . 
                . . f f f c f f f f f f . 
                . f f f c f f f c f f f f 
                f f c c f f f c c f f c f 
                f f f f f e f f f f c c f 
                . f f f e e f f f f f f f 
                . f f f e e f b f e e f f 
                . . f f 4 4 f 1 e 4 e f f 
                . . . f 4 4 4 4 e f f f . 
                . . . f f e e e e 4 4 4 . 
                . . . f 7 7 7 7 e 4 4 e . 
                . . f f 6 6 6 6 f e e f . 
                . . f f f f f f f f f f . 
                . . . f f f . . . f f . . 
                `],
            200,
            false
            )
        }
        if (character2 == 4) {
            animation.runImageAnimation(
            Player2,
            [img`
                . . . . f f f f f . f f f . 
                . . . f f c c c c f f f f f 
                . . f c c c c c c b f f f f 
                . . f c c c c c c 3 c f f f 
                . f c c c c c c c c 3 3 f . 
                . f c c 4 c c c c c f f f . 
                . f f e 4 4 c c c f f f f . 
                . f f e 4 4 f b f 4 4 f f . 
                . . f f d d f 1 4 d 4 f . . 
                . . . f d d d d 4 f f f . . 
                . . . f e 4 4 4 e e f . . . 
                . . . f 3 3 3 e d d 4 . . . 
                . . . f 3 3 3 e d d e . . . 
                . . . f 6 6 6 f e e f . . . 
                . . . . f f f f f f . . . . 
                . . . . . . f f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . . . . f f f f f . f f f . 
                . . . f f c c c c f f f f f 
                . . f c c c c c c b f f f f 
                . . f c c c c c c 3 c f f f 
                . f c c c c c c c c 3 3 f . 
                . f c c 4 c c c c c f f f . 
                . f f c 4 4 c c c f f f f . 
                . f f f 4 4 f b f 4 4 f f . 
                . . f f d d f 1 4 d 4 f . . 
                . . . f d d d e e f f f . . 
                . . . f e 4 e d d 4 f . . . 
                . . . f 3 3 e d d e f . . . 
                . . f f 6 6 f e e f f f . . 
                . . f f f f f f f f f f . . 
                . . . f f f . . . f f . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . . . . f f f f f . f f f . 
                . . . f f c c c c f f f f f 
                . . f c c c c c c b f f f f 
                . . f c c c c c c 3 c f f f 
                . f c c c c c c c c 3 3 f . 
                . f c c 4 c c c c c f f f . 
                . f f c 4 4 c c c f f f f . 
                . f f f 4 4 f b f 4 4 f f . 
                . . f c d d f 1 4 d 4 f f . 
                . . . f d d d d 4 f f f . . 
                . . . f e 4 4 4 e d d 4 . . 
                . . . f 3 3 3 3 e d d e . . 
                . . f f 6 6 6 6 f e e f . . 
                . . f f f f f f f f f f . . 
                . . . f f f . . . f f . . . 
                `],
            200,
            false
            )
        }
    }
})
// Player 1 slice effect
// 
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameStart == 1 || (gameStart == 2 || gameStart == 3)) {
        if (player1DeathCount < 2 && player1IsDead != 1) {
            while (controller.B.isPressed()) {
                if (controller.up.isPressed()) {
                    sliceEffectPlr1 = sprites.create(assets.image`Zombie Slice Effect Up`, SpriteKind.Projectile)
                    sliceEffectPlr1.setPosition(Player1.x, Player1.y)
                    sliceEffectPlr1.setFlag(SpriteFlag.DestroyOnWall, true)
                    sliceEffectPlr1.setVelocity(0, -20)
                    for (let index = 0; index < 10; index++) {
                        pause(200)
                        sliceEffectPlr1.setVelocity(0, sliceEffectPlr1.vy + 2)
                    }
                    if (sliceEffectPlr1.vy == 0) {
                        sliceEffectPlr1.destroy()
                    }
                } else if (controller.down.isPressed()) {
                    sliceEffectPlr1 = sprites.create(assets.image`Zombie Bullet Down`, SpriteKind.Projectile)
                    sliceEffectPlr1.setPosition(Player1.x, Player1.y)
                    sliceEffectPlr1.setFlag(SpriteFlag.DestroyOnWall, true)
                    sliceEffectPlr1.setVelocity(0, 20)
                    for (let index = 0; index < 10; index++) {
                        pause(200)
                        sliceEffectPlr1.setVelocity(0, sliceEffectPlr1.vy - 2)
                    }
                    if (sliceEffectPlr1.vy == 0) {
                        sliceEffectPlr1.destroy()
                    }
                } else if (controller.left.isPressed()) {
                    sliceEffectPlr1 = sprites.create(assets.image`Zombie Bullet Left`, SpriteKind.Projectile)
                    sliceEffectPlr1.setPosition(Player1.x, Player1.y)
                    sliceEffectPlr1.setFlag(SpriteFlag.DestroyOnWall, true)
                    sliceEffectPlr1.setVelocity(-20, 0)
                    for (let index = 0; index < 10; index++) {
                        pause(200)
                        sliceEffectPlr1.setVelocity(sliceEffectPlr1.vx + 2, 0)
                    }
                    if (sliceEffectPlr1.vx == 0) {
                        sliceEffectPlr1.destroy()
                    }
                } else if (controller.right.isPressed()) {
                    sliceEffectPlr1 = sprites.create(assets.image`Zombie Bullet Right`, SpriteKind.Projectile)
                    sliceEffectPlr1.setPosition(Player1.x, Player1.y)
                    sliceEffectPlr1.setFlag(SpriteFlag.DestroyOnWall, true)
                    sliceEffectPlr1.setVelocity(20, 0)
                    for (let index = 0; index < 10; index++) {
                        pause(200)
                        sliceEffectPlr1.setVelocity(sliceEffectPlr1.vx - 2, 0)
                    }
                    if (sliceEffectPlr1.vx == 0) {
                        sliceEffectPlr1.destroy()
                    }
                } else if (!(controller.up.isPressed() || controller.down.isPressed() || (controller.left.isPressed() || controller.right.isPressed()))) {
                    sliceEffectPlr1 = sprites.create(assets.image`Zombie Slice Effect Idle`, SpriteKind.Projectile)
                    sliceEffectPlr1.setPosition(Player1.x, Player1.y)
                    sliceEffectPlr1.setVelocity(randint(1, 10), randint(1, 5))
                    pause(2000)
                    sliceEffectPlr1.destroy()
                }
            }
        }
    }
})
// Walking right Player 1 animation
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    stopAnimplr1 = 0
    if (character2 != 0) {
        if (character1 == 1) {
            animation.runImageAnimation(
            Player1,
            [img`
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e 4 d d d d f . . . 
                . . . . f f e e 4 4 4 e f . . . 
                . . . . . 4 d d e 2 2 2 f . . . 
                . . . . . e d d e 2 2 2 f . . . 
                . . . . . f e e f 4 5 5 f . . . 
                . . . . . . f f f f f f . . . . 
                . . . . . . . f f f . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e e e d d d f . . . 
                . . . . . f 4 d d e 4 e f . . . 
                . . . . . f e d d e 2 2 f . . . 
                . . . . f f f e e f 5 5 f f . . 
                . . . . f f f f f f f f f f . . 
                . . . . . f f . . . f f f . . . 
                `,img`
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e 4 d d d d f . . . 
                . . . . f f e e 4 4 4 e f . . . 
                . . . . . 4 d d e 2 2 2 f . . . 
                . . . . . e d d e 2 2 2 f . . . 
                . . . . . f e e f 4 5 5 f . . . 
                . . . . . . f f f f f f . . . . 
                . . . . . . . f f f . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f f f . . . . 
                . . . . f f e e e e f 2 f . . . 
                . . . f f e e e e f 2 2 2 f . . 
                . . . f e e e f f e e e e f . . 
                . . . f f f f e e 2 2 2 2 e f . 
                . . . f e 2 2 2 f f f f e 2 f . 
                . . f f f f f f f e e e f f f . 
                . . f f e 4 4 e b f 4 4 e e f . 
                . . f e e 4 d 4 1 f d d e f . . 
                . . . f e e e 4 d d d d f . . . 
                . . . . 4 d d e 4 4 4 e f . . . 
                . . . . e d d e 2 2 2 2 f . . . 
                . . . . f e e f 4 4 5 5 f f . . 
                . . . . f f f f f f f f f f . . 
                . . . . . f f . . . f f f . . . 
                `],
            200,
            false
            )
        }
        if (character1 == 2) {
            animation.runImageAnimation(
            Player1,
            [img`
                . . . . . . . 5 . 5 . . . . . . 
                . . . . . . f 5 5 5 f . . . . . 
                . . . . . f 6 5 5 2 6 f . . . . 
                . . . . f 6 6 1 6 6 6 6 f . . . 
                . . . . f 6 1 6 6 6 6 6 f . . . 
                . . . . f 1 6 6 6 d f d f . . . 
                . . . f f 6 6 6 6 d f d f . . . 
                . . f 6 f 6 6 6 d d 3 d f . . . 
                . . . f f 6 f f d d d f . . . . 
                . . f 6 6 6 f 3 5 f f . . . . . 
                . . . f f f f f 3 3 5 f . . . . 
                . . . . . . f d f 3 3 f . . . . 
                . . . . . . f d f 3 f . . . . . 
                . . . . . f d f 3 5 3 f . . . . 
                . . . . . . f f 3 3 f f . . . . 
                . . . . . . . f f f . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 5 . 5 . . . . . . . 
                . . . . . f 5 5 5 f . . . . . . 
                . . . . f 6 5 5 2 6 f . . . . . 
                . . . f 6 6 1 6 6 6 6 f . . . . 
                . . . f 6 1 6 6 6 6 6 f . . . . 
                . . . f 1 6 6 6 d f d f . . . . 
                . . f f 6 6 6 6 d f d f . . . . 
                . f 6 f 6 6 6 d d 3 d f . . . . 
                . . f f 6 f f d d d f . . . . . 
                . f 6 6 f f 3 3 f f . . . . . . 
                . . f f f f d d d d f . . . . . 
                . . . . f 3 f d d d f . . . . . 
                . . . f 3 5 d f f f . . . . . . 
                . . . . f f 3 3 f f f . . . . . 
                . . . . f f f f f f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . 5 . 5 . . . . . . . 
                . . . . . f 5 5 5 f . . . . . . 
                . . . . f 6 5 5 2 6 f . . . . . 
                . . . f 6 6 1 6 6 6 6 f . . . . 
                . . . f 6 1 6 6 6 6 6 f . . . . 
                . . . f 1 6 6 6 d f d f . . . . 
                . . f f 6 6 6 6 d f d f . . . . 
                . f 6 f 6 6 6 d d 3 d f . . . . 
                . . f f 6 f f d d d f . . . . . 
                . f 6 6 f f 3 3 f f . . . . . . 
                . . f f f d d 3 3 5 f . . . . . 
                . . . f d d f 3 3 3 f . . . . . 
                . . . . f f f 5 3 f . . . . . . 
                . . . . . f 3 3 3 3 f . . . . . 
                . . . . . f f f f f . . . . . . 
                `],
            200,
            false
            )
        }
        if (character1 == 3) {
            animation.runImageAnimation(
            Player1,
            [img`
                . . . . . . . . . . . . . 
                . . . f f f f f f . . . . 
                . f f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f c f f f c f f f . 
                f c f f c c f f f c c f f 
                f c c f f f f e f f f f f 
                f f f f f f f e e f f f . 
                f f e e f b f e e f f f . 
                f f e 4 e 1 f 4 4 f f . . 
                . f f f e 4 4 4 4 f . . . 
                . 4 4 4 e e e e f f . . . 
                . e 4 4 e 7 7 7 7 f . . . 
                . f e e f 6 6 6 6 f f . . 
                . f f f f f f f f f f . . 
                . . f f . . . f f f . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . f f f f f f . . . . 
                . f f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f c f f f c f f f . 
                f c f f c c f f f c c f f 
                f c c f f f f e f f f f f 
                f f f f f f f e e f f f . 
                f f e e f b f e e f f . . 
                . f e 4 e 1 f 4 4 f f . . 
                . f f f e e 4 4 4 f . . . 
                . . f e 4 4 e e f f . . . 
                . . f e 4 4 e 7 7 f . . . 
                . f f f e e f 6 6 f f . . 
                . f f f f f f f f f f . . 
                . . f f . . . f f f . . . 
                `,img`
                . . . f f f f f . . . . . 
                . f f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f c f f f c f f . . 
                f c f f c c f f f c c f f 
                f c c f f f f e f f f f f 
                f f f f f f f e e f f f . 
                f f e e f b f e e f f . . 
                . f e 4 e 1 f 4 4 f . . . 
                . f f f e 4 4 4 4 f . . . 
                . . f e e e e e f f . . . 
                . . e 4 4 e 7 7 7 f . . . 
                . . e 4 4 e 7 7 7 f . . . 
                . . f e e f 6 6 6 f . . . 
                . . . f f f f f f . . . . 
                . . . . f f f . . . . . . 
                `],
            200,
            false
            )
        }
        if (character1 == 4) {
            animation.runImageAnimation(
            Player1,
            [img`
                . . . . . . . . . . . . . . 
                . f f f . f f f f f . . . . 
                f f f f f c c c c f f . . . 
                f f f f b c c c c c c f . . 
                f f f c 3 c c c c c c f . . 
                . f 3 3 c c c c c c c c f . 
                . f f f c c c c c 4 c c f . 
                . f f f f c c c 4 4 c f f . 
                . f f 4 4 f b f 4 4 f f f . 
                . f f 4 d 4 1 f d d c f . . 
                . . f f f 4 d d d d f . . . 
                . . 4 d d e 4 4 4 e f . . . 
                . . e d d e 3 3 3 3 f . . . 
                . . f e e f 6 6 6 6 f f . . 
                . . f f f f f f f f f f . . 
                . . . f f . . . f f f . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . f f f . f f f f f . . . . 
                f f f f f c c c c f f . . . 
                f f f f b c c c c c c f . . 
                f f f c 3 c c c c c c f . . 
                . f 3 3 c c c c c c c c f . 
                . f f f c c c c c 4 c c f . 
                . f f f f c c c 4 4 c f f . 
                . f f 4 4 f b f 4 4 f f f . 
                . . f 4 d 4 1 f d d f f . . 
                . . f f f e e d d d f . . . 
                . . . f 4 d d e 4 e f . . . 
                . . . f e d d e 3 3 f . . . 
                . . f f f e e f 6 6 f f . . 
                . . f f f f f f f f f f . . 
                . . . f f . . . f f f . . . 
                `,img`
                . f f f . f f f f f . . . . 
                f f f f f c c c c f f . . . 
                f f f f b c c c c c c f . . 
                f f f c 3 c c c c c c f . . 
                . f 3 3 c c c c c c c c f . 
                . f f f c c c c c 4 c c f . 
                . f f f f c c c 4 4 e f f . 
                . f f 4 4 f b f 4 4 e f f . 
                . . f 4 d 4 1 f d d f f . . 
                . . f f f 4 d d d d f . . . 
                . . . f e e 4 4 4 e f . . . 
                . . . 4 d d e 3 3 3 f . . . 
                . . . e d d e 3 3 3 f . . . 
                . . . f e e f 6 6 6 f . . . 
                . . . . f f f f f f . . . . 
                . . . . . f f f . . . . . . 
                `],
            200,
            false
            )
        }
    }
})
// Walking up Player 1 animation
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    stopAnimplr1 = 0
    if (character2 != 0) {
        if (character1 == 1) {
            animation.runImageAnimation(
            Player1,
            [img`
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . f f f f f 2 2 f f f f f . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f 2 f 2 e f . . 
                . . f f f 2 2 e e 2 2 f f f . . 
                . f f e f 2 f e e f 2 f e f f . 
                . f e e f f e e e e f e e e f . 
                . . f e e e e e e e e e e f . . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . . f f f f 2 2 f f f f . . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f f 2 f e f . . 
                . . f f f 2 f e e 2 2 f f f . . 
                . . f e 2 f f e e 2 f e e f . . 
                . f f e f f e e e f e e e f f . 
                . f f e e e e e e e e e e f f . 
                . . . f e e e e e e e e f . . . 
                . . . e f f f f f f f f 4 e . . 
                . . . 4 f 2 2 2 2 2 e d d 4 . . 
                . . . e f f f f f f e e 4 . . . 
                . . . . f f f . . . . . . . . . 
                `,img`
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . f f f f f 2 2 f f f f f . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f 2 f 2 e f . . 
                . . f f f 2 2 e e 2 2 f f f . . 
                . f f e f 2 f e e f 2 f e f f . 
                . f e e f f e e e e f e e e f . 
                . . f e e e e e e e e e e f . . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . . f f f f 2 2 f f f f . . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e f 2 f f f 2 f 2 e f . . 
                . . f f f 2 2 e e f 2 f f f . . 
                . . f e e f 2 e e f f 2 e f . . 
                . f f e e e f e e e f f e f f . 
                . f f e e e e e e e e e e f f . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f e . . . 
                . . 4 d d e 2 2 2 2 2 f 4 . . . 
                . . . 4 e e f f f f f f e . . . 
                . . . . . . . . . f f f . . . . 
                `],
            200,
            false
            )
        }
        if (character1 == 2) {
            animation.runImageAnimation(
            Player1,
            [img`
                . . . . . . . 5 5 . . . . . . . 
                . . . . . f 5 5 5 5 f . . . . . 
                . . . . f 6 6 6 6 6 6 f . . . . 
                . . . f 6 1 1 1 6 1 6 6 f . . . 
                . . . f 6 6 6 6 6 6 6 6 f . . . 
                . . . f 6 6 6 6 6 6 6 6 f . . . 
                . . . f 6 6 6 6 6 6 6 6 f . . . 
                . . f f 6 6 6 6 6 6 6 6 f f . . 
                . f 6 6 6 f 6 6 6 6 f 6 6 6 f . 
                . . f f f 3 f f f f 3 f f f . . 
                . . . f d 5 3 3 3 3 5 d f . . . 
                . . f d d f 3 3 3 3 f d d f . . 
                . . . f f f 5 3 3 5 f f f . . . 
                . . . . f 3 3 5 5 3 3 f . . . . 
                . . . . f 3 3 3 3 3 3 f . . . . 
                . . . . . f f f f f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                . . . . . f 5 5 5 5 f . . . . . 
                . . . . f 6 6 6 6 6 6 f . . . . 
                . . . f 6 1 1 1 6 1 6 6 f . . . 
                . . . f 6 6 6 6 6 6 6 6 f . . . 
                . . . f 6 6 6 6 6 6 6 6 f . . . 
                . . . f 6 6 6 6 6 6 6 6 f . . . 
                . . f f 6 6 6 6 6 6 6 6 f f . . 
                . f 6 6 6 f 6 6 6 6 f 6 6 6 f . 
                . . f f f 3 f f f f 5 f f f . . 
                . . . f d f 3 3 3 3 d d f . . . 
                . . . . f 3 5 3 3 f d d f . . . 
                . . . . f 3 3 5 5 3 f f . . . . 
                . . . . f f 3 3 f f . . . . . . 
                . . . . . . f f . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                . . . . . f 5 5 5 5 f . . . . . 
                . . . . f 6 6 6 6 6 6 f . . . . 
                . . . f 6 1 1 1 6 1 6 6 f . . . 
                . . . f 6 6 6 6 6 6 6 6 f . . . 
                . . . f 6 6 6 6 6 6 6 6 f . . . 
                . . . f 6 6 6 6 6 6 6 6 f . . . 
                . . f f 6 6 6 6 6 6 6 6 f f . . 
                . f 6 6 6 f 6 6 6 6 f 6 6 6 f . 
                . . f f f 5 f f f f 3 f f f . . 
                . . . f d d 3 3 3 3 f d f . . . 
                . . . f d d f 3 3 5 3 f . . . . 
                . . . . f f 3 5 5 3 3 f . . . . 
                . . . . . . f f 3 3 f f . . . . 
                . . . . . . . . f f . . . . . . 
                `],
            200,
            false
            )
        }
        if (character1 == 3) {
            animation.runImageAnimation(
            Player1,
            [img`
                . . . . f f f f . . . . . 
                . . f f c c c c f f . . . 
                . f f c c c c c c f f . . 
                f f c c c c c c c c f f . 
                f f c c f c c c c c c f . 
                f f f f f c c c f c c f . 
                f f f f c c c f c c f f . 
                f f f f f f f f f f f f . 
                f f f f f f f f f f f f . 
                . f f f f f f f f f f . . 
                . f f f f f f f f f f . . 
                f e f f f f f f f f e f . 
                e 4 f 7 7 7 7 7 7 c 4 e . 
                e e f 6 6 6 6 6 6 f e e . 
                . . . f f f f f f . . . . 
                . . . f f . . f f . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . . f f f f . . . . 
                . . . f f c c c c f f . . 
                . f f f c c c c c c f f . 
                f f c c c c c c c c c f f 
                f c c c c f c c c c c c f 
                . f f f f c c c c f c c f 
                . f f f f c c f c c c f f 
                . f f f f f f f f f f f f 
                . f f f f f f f f f f f f 
                . . f f f f f f f f f f . 
                . . e f f f f f f f f f . 
                . . e f f f f f f f f e f 
                . . 4 c 7 7 7 7 7 e 4 4 e 
                . . e f f f f f f f e e . 
                . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . . f f f f . . . . 
                . . . f f c c c c f f . . 
                . . f f c c c c c c f f . 
                . f f f c c c c c c c f f 
                f f f c c c c c c c c c f 
                f f c c c f c c c c c c f 
                . f f f f f c c c f c f f 
                . f f f f c c f f c f f f 
                . . f f f f f f f f f f f 
                . . f f f f f f f f f f . 
                . . f f f f f f f f f e . 
                . f e f f f f f f f f e . 
                . e 4 4 e 7 7 7 7 7 c 4 . 
                . . e e f f f f f f f e . 
                . . . . . . . . f f f . . 
                `],
            200,
            false
            )
        }
        if (character1 == 4) {
            animation.runImageAnimation(
            Player1,
            [img`
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c c c c c c c f . 
                . f f c c c c c c c c f f . 
                . f f f c c c c c c f f f . 
                . f f f f f f f f f f f f . 
                . . f f f f f f f f f f . . 
                . . e f f f f f f f f e . . 
                . e 4 f f f f f f f f 4 e . 
                . 4 d f 3 3 3 3 3 3 c d 4 . 
                . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                . . . . f f f f f f . . . . 
                . . . . f f . . f f . . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c c c c c c f f . 
                . f f c c c c c c c c f f . 
                . f f c c c c c c f f f f . 
                . f f f f f f f f f f f f . 
                . . f f f f f f f f f f . . 
                . . e f f f f f f f f e . . 
                . . e f f f f f f f f 4 e . 
                . . 4 f 3 3 3 3 3 e d d 4 . 
                . . e f f f f f f e e 4 . . 
                . . . f f f . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f f c c c c c c c c c f . 
                . f f c c c c c c c c f f . 
                . f f f f c c c c c c f f . 
                . f f f f f f f f f f f f . 
                . . f f f f f f f f f f . . 
                . . e f f f f f f f f e . . 
                . e 4 f f f f f f f f e . . 
                . 4 d d e 3 3 3 3 3 f 4 . . 
                . . 4 e e f f f f f f e . . 
                . . . . . . . . f f f . . . 
                `],
            200,
            false
            )
        }
    }
})
// Walking up Player 2 animation
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    stopAnimPlr2 = 0
    if (character1 != 0) {
        if (character2 == 1) {
            animation.runImageAnimation(
            Player2,
            [img`
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . f f f f f 2 2 f f f f f . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f 2 f 2 e f . . 
                . . f f f 2 2 e e 2 2 f f f . . 
                . f f e f 2 f e e f 2 f e f f . 
                . f e e f f e e e e f e e e f . 
                . . f e e e e e e e e e e f . . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . . f f f f 2 2 f f f f . . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f f 2 f e f . . 
                . . f f f 2 f e e 2 2 f f f . . 
                . . f e 2 f f e e 2 f e e f . . 
                . f f e f f e e e f e e e f f . 
                . f f e e e e e e e e e e f f . 
                . . . f e e e e e e e e f . . . 
                . . . e f f f f f f f f 4 e . . 
                . . . 4 f 2 2 2 2 2 e d d 4 . . 
                . . . e f f f f f f e e 4 . . . 
                . . . . f f f . . . . . . . . . 
                `,img`
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . f f f f f 2 2 f f f f f . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e 2 f 2 f f 2 f 2 e f . . 
                . . f f f 2 2 e e 2 2 f f f . . 
                . f f e f 2 f e e f 2 f e f f . 
                . f e e f f e e e e f e e e f . 
                . . f e e e e e e e e e e f . . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f e e e e f f . . . . 
                . . . f e e e f f e e e f . . . 
                . . . f f f f 2 2 f f f f . . . 
                . . f f e 2 e 2 2 e 2 e f f . . 
                . . f e f 2 f f f 2 f 2 e f . . 
                . . f f f 2 2 e e f 2 f f f . . 
                . . f e e f 2 e e f f 2 e f . . 
                . f f e e e f e e e f f e f f . 
                . f f e e e e e e e e e e f f . 
                . . . f e e e e e e e e f . . . 
                . . e 4 f f f f f f f f e . . . 
                . . 4 d d e 2 2 2 2 2 f 4 . . . 
                . . . 4 e e f f f f f f e . . . 
                . . . . . . . . . f f f . . . . 
                `],
            200,
            false
            )
        }
        if (character2 == 2) {
            animation.runImageAnimation(
            Player2,
            [img`
                . . . . . . . 5 5 . . . . . . . 
                . . . . . f 5 5 5 5 f . . . . . 
                . . . . f 6 6 6 6 6 6 f . . . . 
                . . . f 6 1 1 1 6 1 6 6 f . . . 
                . . . f 6 6 6 6 6 6 6 6 f . . . 
                . . . f 6 6 6 6 6 6 6 6 f . . . 
                . . . f 6 6 6 6 6 6 6 6 f . . . 
                . . f f 6 6 6 6 6 6 6 6 f f . . 
                . f 6 6 6 f 6 6 6 6 f 6 6 6 f . 
                . . f f f 3 f f f f 3 f f f . . 
                . . . f d 5 3 3 3 3 5 d f . . . 
                . . f d d f 3 3 3 3 f d d f . . 
                . . . f f f 5 3 3 5 f f f . . . 
                . . . . f 3 3 5 5 3 3 f . . . . 
                . . . . f 3 3 3 3 3 3 f . . . . 
                . . . . . f f f f f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                . . . . . f 5 5 5 5 f . . . . . 
                . . . . f 6 6 6 6 6 6 f . . . . 
                . . . f 6 1 1 1 6 1 6 6 f . . . 
                . . . f 6 6 6 6 6 6 6 6 f . . . 
                . . . f 6 6 6 6 6 6 6 6 f . . . 
                . . . f 6 6 6 6 6 6 6 6 f . . . 
                . . f f 6 6 6 6 6 6 6 6 f f . . 
                . f 6 6 6 f 6 6 6 6 f 6 6 6 f . 
                . . f f f 3 f f f f 5 f f f . . 
                . . . f d f 3 3 3 3 d d f . . . 
                . . . . f 3 5 3 3 f d d f . . . 
                . . . . f 3 3 5 5 3 f f . . . . 
                . . . . f f 3 3 f f . . . . . . 
                . . . . . . f f . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                . . . . . f 5 5 5 5 f . . . . . 
                . . . . f 6 6 6 6 6 6 f . . . . 
                . . . f 6 1 1 1 6 1 6 6 f . . . 
                . . . f 6 6 6 6 6 6 6 6 f . . . 
                . . . f 6 6 6 6 6 6 6 6 f . . . 
                . . . f 6 6 6 6 6 6 6 6 f . . . 
                . . f f 6 6 6 6 6 6 6 6 f f . . 
                . f 6 6 6 f 6 6 6 6 f 6 6 6 f . 
                . . f f f 5 f f f f 3 f f f . . 
                . . . f d d 3 3 3 3 f d f . . . 
                . . . f d d f 3 3 5 3 f . . . . 
                . . . . f f 3 5 5 3 3 f . . . . 
                . . . . . . f f 3 3 f f . . . . 
                . . . . . . . . f f . . . . . . 
                `],
            200,
            false
            )
        }
        if (character2 == 3) {
            animation.runImageAnimation(
            Player2,
            [img`
                . . . . f f f f . . . . . 
                . . f f c c c c f f . . . 
                . f f c c c c c c f f . . 
                f f c c c c c c c c f f . 
                f f c c f c c c c c c f . 
                f f f f f c c c f c c f . 
                f f f f c c c f c c f f . 
                f f f f f f f f f f f f . 
                f f f f f f f f f f f f . 
                . f f f f f f f f f f . . 
                . f f f f f f f f f f . . 
                f e f f f f f f f f e f . 
                e 4 f 7 7 7 7 7 7 c 4 e . 
                e e f 6 6 6 6 6 6 f e e . 
                . . . f f f f f f . . . . 
                . . . f f . . f f . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . . f f f f . . . . 
                . . . f f c c c c f f . . 
                . f f f c c c c c c f f . 
                f f c c c c c c c c c f f 
                f c c c c f c c c c c c f 
                . f f f f c c c c f c c f 
                . f f f f c c f c c c f f 
                . f f f f f f f f f f f f 
                . f f f f f f f f f f f f 
                . . f f f f f f f f f f . 
                . . e f f f f f f f f f . 
                . . e f f f f f f f f e f 
                . . 4 c 7 7 7 7 7 e 4 4 e 
                . . e f f f f f f f e e . 
                . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . . f f f f . . . . 
                . . . f f c c c c f f . . 
                . . f f c c c c c c f f . 
                . f f f c c c c c c c f f 
                f f f c c c c c c c c c f 
                f f c c c f c c c c c c f 
                . f f f f f c c c f c f f 
                . f f f f c c f f c f f f 
                . . f f f f f f f f f f f 
                . . f f f f f f f f f f . 
                . . f f f f f f f f f e . 
                . f e f f f f f f f f e . 
                . e 4 4 e 7 7 7 7 7 c 4 . 
                . . e e f f f f f f f e . 
                . . . . . . . . f f f . . 
                `],
            200,
            false
            )
        }
        if (character2 == 4) {
            animation.runImageAnimation(
            Player2,
            [img`
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c c c c c c c f . 
                . f f c c c c c c c c f f . 
                . f f f c c c c c c f f f . 
                . f f f f f f f f f f f f . 
                . . f f f f f f f f f f . . 
                . . e f f f f f f f f e . . 
                . e 4 f f f f f f f f 4 e . 
                . 4 d f 3 3 3 3 3 3 c d 4 . 
                . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                . . . . f f f f f f . . . . 
                . . . . f f . . f f . . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c c c c c c f f . 
                . f f c c c c c c c c f f . 
                . f f c c c c c c f f f f . 
                . f f f f f f f f f f f f . 
                . . f f f f f f f f f f . . 
                . . e f f f f f f f f e . . 
                . . e f f f f f f f f 4 e . 
                . . 4 f 3 3 3 3 3 e d d 4 . 
                . . e f f f f f f e e 4 . . 
                . . . f f f . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f f c c c c c c c c c f . 
                . f f c c c c c c c c f f . 
                . f f f f c c c c c c f f . 
                . f f f f f f f f f f f f . 
                . . f f f f f f f f f f . . 
                . . e f f f f f f f f e . . 
                . e 4 f f f f f f f f e . . 
                . 4 d d e 3 3 3 3 3 f 4 . . 
                . . 4 e e f f f f f f e . . 
                . . . . . . . . f f f . . . 
                `],
            200,
            false
            )
        }
    }
})
// "Kills" player if touching a zombie
sprites.onOverlap(SpriteKind.Survivor, SpriteKind.zombie, function (sprite, otherSprite) {
    if (player1DeathCount < 2) {
        if (sprite == Player1) {
            if (statusBarPlayer1.value <= 0) {
                player1DeathCount = player1DeathCount + 1
                if (character1 == 1) {
                    player1IsDead = 1
                    Player1.destroy()
                    Player1 = sprites.create(img`
                        . . . . f f f f f f . . . . . . 
                        . . . f 2 f e e e e f f . . . . 
                        . . f 2 2 2 f e e e e f f . . . 
                        . . f e e e e f f e e e f . . . 
                        . f e 2 2 2 2 e e f f f f . . . 
                        . f 2 e f f f f 2 2 2 e f . . . 
                        . f f f e e e f f f f f f f . . 
                        . f e e 4 4 f b e 4 4 e f f . . 
                        . . f e d d f 1 4 d 4 e e f . . 
                        . . . f d d d d 4 e e e f . . . 
                        . . . f e 4 4 4 e e f f . . . . 
                        . . . f 2 2 2 e d d 4 . . . . . 
                        . . . f 2 2 2 e d d e . . . . . 
                        . . . f 5 5 4 f e e f . . . . . 
                        . . . . f f f f f f . . . . . . 
                        . . . . . . f f f . . . . . . . 
                        `, SpriteKind.Survivor)
                    Player1.setPosition(zombie1.x, zombie1.y + 17)
                    animation.runImageAnimation(
                    Player1,
                    [img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . f f f f . . . . 
                        . . . . . . . f e f 2 e f f . . 
                        . . f f f f f e e f e 2 e 2 f . 
                        . f 5 2 2 e d d 4 e f 2 e 2 2 f 
                        . f 5 2 2 4 d d 4 e f 2 e 2 f f 
                        f f 4 2 2 4 d f f e f 2 e f e f 
                        f f f e e 4 d 1 b f f e f e e f 
                        f f e d d e 4 4 e f 2 e f e e f 
                        . f e d d e e d 4 f 2 f e e e f 
                        . . f e 4 f e 4 4 f 2 f e e f . 
                        `],
                    500,
                    false
                    )
                    pause(500)
                    Player1.destroy()
                    Player1 = sprites.create(img`
                        . . . . . . f f f f . . . . . . 
                        . . . . f f f 2 2 f f f . . . . 
                        . . . f f f 2 2 2 2 f f f . . . 
                        . . f f f e e e e e e f f f . . 
                        . . f f e 2 2 2 2 2 2 e e f . . 
                        . . f e 2 f f f f f f 2 e f . . 
                        . . f f f f e e e e f f f f . . 
                        . f f e f b f 4 4 f b f e f f . 
                        . f e e 4 1 f d d f 1 4 e e f . 
                        . . f e e d d d d d d e e f . . 
                        . . . f e e 4 4 4 4 e e f . . . 
                        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                        . . . . . f f f f f f . . . . . 
                        . . . . . f f . . f f . . . . . 
                        `, SpriteKind.Survivor)
                    player1IsDead = 0
                } else if (character1 == 2) {
                    player1IsDead = 1
                    Player1.destroy()
                    Player1 = sprites.create(img`
                        . . . . . . 5 . 5 . . . . . . . 
                        . . . . . f 5 5 5 f f . . . . . 
                        . . . . f 1 5 2 5 1 6 f . . . . 
                        . . . f 1 6 6 6 6 6 1 6 f . . . 
                        . . . f 6 6 f f f f 6 1 f . . . 
                        . . . f 6 f f d d f f 6 f . . . 
                        . . f 6 f d f d d f d f 6 f . . 
                        . . f 6 f d 3 d d 3 d f 6 f . . 
                        . . f 6 6 f d d d d f 6 6 f . . 
                        . f 6 6 f 3 f f f f 3 f 6 6 f . 
                        . . f f d 3 5 3 3 5 3 d f f . . 
                        . . f d d f 3 5 5 3 f d d f . . 
                        . . . f f 3 3 3 3 3 3 f f . . . 
                        . . . f 3 3 5 3 3 5 3 3 f . . . 
                        . . . f f f f f f f f f f . . . 
                        . . . . . f f . . f f . . . . . 
                        `, SpriteKind.Survivor)
                    Player1.setPosition(zombie1.x, zombie1.y + 17)
                    animation.runImageAnimation(
                    Player1,
                    [img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . f f f f f . . . 
                        . f f . f f . f d d d 6 6 f . . 
                        . f 3 f 3 5 f d 3 f f 6 6 6 f . 
                        f 3 5 3 3 3 f d d d d 6 6 2 5 5 
                        f 3 3 f f 3 5 d d 6 6 6 6 5 5 . 
                        f f f d d f 3 f 6 6 6 6 1 5 5 5 
                        . f d f f f f f 6 6 6 1 6 6 f . 
                        `],
                    500,
                    false
                    )
                    pause(500)
                    Player1.destroy()
                    Player1 = sprites.create(img`
                        . . . . . . 5 . 5 . . . . . . . 
                        . . . . . f 5 5 5 f f . . . . . 
                        . . . . f 1 5 2 5 1 6 f . . . . 
                        . . . f 1 6 6 6 6 6 1 6 f . . . 
                        . . . f 6 6 f f f f 6 1 f . . . 
                        . . . f 6 f f d d f f 6 f . . . 
                        . . f 6 f d f d d f d f 6 f . . 
                        . . f 6 f d 3 d d 3 d f 6 f . . 
                        . . f 6 6 f d d d d f 6 6 f . . 
                        . f 6 6 f 3 f f f f 3 f 6 6 f . 
                        . . f f d 3 5 3 3 5 3 d f f . . 
                        . . f d d f 3 5 5 3 f d d f . . 
                        . . . f f 3 3 3 3 3 3 f f . . . 
                        . . . f 3 3 5 3 3 5 3 3 f . . . 
                        . . . f f f f f f f f f f . . . 
                        . . . . . f f . . f f . . . . . 
                        `, SpriteKind.Survivor)
                    player1IsDead = 0
                } else if (character1 == 3) {
                    player1IsDead = 1
                    Player1.destroy()
                    Player1 = sprites.create(img`
                        . . . . f f f f . . . . . 
                        . . f f f f f f f f . . . 
                        . f f f f f f c f f f . . 
                        f f f f f f c c f f f c . 
                        f f f c f f f f f f f c . 
                        c c c f f f e e f f c c . 
                        f f f f f e e f f c c f . 
                        f f f b f e e f b f f f . 
                        . f 4 1 f 4 4 f 1 4 f . . 
                        . f e 4 4 4 4 4 4 e f . . 
                        . f f f e e e e f f f . . 
                        f e f b 7 7 7 7 b f e f . 
                        e 4 f 7 7 7 7 7 7 f 4 e . 
                        e e f 6 6 6 6 6 6 f e e . 
                        . . . f f f f f f . . . . 
                        . . . f f . . f f . . . . 
                        `, SpriteKind.Survivor)
                    Player1.setPosition(zombie1.x, zombie1.y + 17)
                    animation.runImageAnimation(
                    Player1,
                    [img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . f f . . . . 
                        . . . . . . . . . f f f . . . . 
                        . . . . . . . . f f f c f f . . 
                        . . f f f f f f f f f c f f f . 
                        . f 6 7 7 f 4 4 e e f f c f f . 
                        . f 6 7 7 e 4 4 e e e f f c f f 
                        f f 6 7 7 e 4 f f f f f f f f f 
                        f f f e e e 4 1 b f f c f f f f 
                        f f e 4 4 e e e f f f c c f f f 
                        . f e 4 4 e f 4 e f f f f f f f 
                        . . f e e f f e e f c f f f f . 
                        `],
                    500,
                    false
                    )
                    pause(500)
                    Player1.destroy()
                    Player1 = sprites.create(img`
                        . . . . f f f f . . . . . 
                        . . f f f f f f f f . . . 
                        . f f f f f f c f f f . . 
                        f f f f f f c c f f f c . 
                        f f f c f f f f f f f c . 
                        c c c f f f e e f f c c . 
                        f f f f f e e f f c c f . 
                        f f f b f e e f b f f f . 
                        . f 4 1 f 4 4 f 1 4 f . . 
                        . f e 4 4 4 4 4 4 e f . . 
                        . f f f e e e e f f f . . 
                        f e f b 7 7 7 7 b f e f . 
                        e 4 f 7 7 7 7 7 7 f 4 e . 
                        e e f 6 6 6 6 6 6 f e e . 
                        . . . f f f f f f . . . . 
                        . . . f f . . f f . . . . 
                        `, SpriteKind.Survivor)
                    player1IsDead = 0
                } else if (character1 == 4) {
                    player1IsDead = 1
                    Player1.destroy()
                    Player1 = sprites.create(img`
                        . f f f . f f f f . f f f . 
                        f f f f f c c c c f f f f f 
                        f f f f b c c c c b f f f f 
                        f f f c 3 c c c c 3 c f f f 
                        . f 3 3 c c c c c c 3 3 f . 
                        . f c c c c 4 4 c c c c f . 
                        . f f c c 4 4 4 4 c c f f . 
                        . f f f b f 4 4 f b f f f . 
                        . f f 4 1 f d d f 1 4 f f . 
                        . . f f d d d d d d f f . . 
                        . . e f e 4 4 4 4 e f e . . 
                        . e 4 f b 3 3 3 3 b f 4 e . 
                        . 4 d f 3 3 3 3 3 3 c d 4 . 
                        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                        . . . . f f f f f f . . . . 
                        . . . . f f . . f f . . . . 
                        `, SpriteKind.Survivor)
                    Player1.setPosition(zombie1.x, zombie1.y + 17)
                    animation.runImageAnimation(
                    Player1,
                    [img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . f f f f . . . . 
                        . . . . . . . f f f c c f f . . 
                        . . f f f f f f e e c c c c f . 
                        . f 6 3 3 e d d 4 4 4 c c c f f 
                        . f 6 3 3 4 d d 4 4 c c c c c f 
                        f f 6 3 3 4 d f f c c c c c c f 
                        f f f e e 4 d 1 b c c c c c c f 
                        f f e d d e 4 4 f c c c c c c f 
                        . f e d d e f d 4 f c c 3 b f . 
                        . . f e 4 f f 4 4 f f 3 c f f f 
                        `],
                    500,
                    false
                    )
                    pause(500)
                    Player1.destroy()
                    Player1 = sprites.create(img`
                        . f f f . f f f f . f f f . 
                        f f f f f c c c c f f f f f 
                        f f f f b c c c c b f f f f 
                        f f f c 3 c c c c 3 c f f f 
                        . f 3 3 c c c c c c 3 3 f . 
                        . f c c c c 4 4 c c c c f . 
                        . f f c c 4 4 4 4 c c f f . 
                        . f f f b f 4 4 f b f f f . 
                        . f f 4 1 f d d f 1 4 f f . 
                        . . f f d d d d d d f f . . 
                        . . e f e 4 4 4 4 e f e . . 
                        . e 4 f b 3 3 3 3 b f 4 e . 
                        . 4 d f 3 3 3 3 3 3 c d 4 . 
                        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                        . . . . f f f f f f . . . . 
                        . . . . f f . . f f . . . . 
                        `, SpriteKind.Survivor)
                    player1IsDead = 0
                }
                statusBarPlayer1 = statusbars.create(20, 4, StatusBarKind.Health)
                statusBarPlayer1.attachToSprite(Player1)
                controller.moveSprite(Player1, 50, 50)
                Player1.setPosition(randint(0, 160), randint(0, 120))
                Player1.setStayInScreen(true)
                scene.cameraFollowSprite(Player1)
            } else {
                pause(200)
                statusBarPlayer1.value += -10
            }
        }
    } else {
        Player1.destroy()
    }
    if (player2DeathCount < 2) {
        if (sprite == Player2) {
            if (statusBarPlayer2.value <= 0) {
                player2DeathCount = player2DeathCount + 1
                if (character2 == 1) {
                    player2IsDead = 1
                    Player2.destroy()
                    Player2 = sprites.create(img`
                        . . . . f f f f f f . . . . . . 
                        . . . f 2 f e e e e f f . . . . 
                        . . f 2 2 2 f e e e e f f . . . 
                        . . f e e e e f f e e e f . . . 
                        . f e 2 2 2 2 e e f f f f . . . 
                        . f 2 e f f f f 2 2 2 e f . . . 
                        . f f f e e e f f f f f f f . . 
                        . f e e 4 4 f b e 4 4 e f f . . 
                        . . f e d d f 1 4 d 4 e e f . . 
                        . . . f d d d d 4 e e e f . . . 
                        . . . f e 4 4 4 e e f f . . . . 
                        . . . f 2 2 2 e d d 4 . . . . . 
                        . . . f 2 2 2 e d d e . . . . . 
                        . . . f 5 5 4 f e e f . . . . . 
                        . . . . f f f f f f . . . . . . 
                        . . . . . . f f f . . . . . . . 
                        `, SpriteKind.Survivor)
                    Player2.setPosition(zombie1.x, zombie1.y + 17)
                    animation.runImageAnimation(
                    Player2,
                    [img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . f f f f . . . . 
                        . . . . . . . f e f 2 e f f . . 
                        . . f f f f f e e f e 2 e 2 f . 
                        . f 5 2 2 e d d 4 e f 2 e 2 2 f 
                        . f 5 2 2 4 d d 4 e f 2 e 2 f f 
                        f f 4 2 2 4 d f f e f 2 e f e f 
                        f f f e e 4 d 1 b f f e f e e f 
                        f f e d d e 4 4 e f 2 e f e e f 
                        . f e d d e e d 4 f 2 f e e e f 
                        . . f e 4 f e 4 4 f 2 f e e f . 
                        `],
                    500,
                    false
                    )
                    pause(500)
                    Player2.destroy()
                    Player2 = sprites.create(img`
                        . . . . . . f f f f . . . . . . 
                        . . . . f f f 2 2 f f f . . . . 
                        . . . f f f 2 2 2 2 f f f . . . 
                        . . f f f e e e e e e f f f . . 
                        . . f f e 2 2 2 2 2 2 e e f . . 
                        . . f e 2 f f f f f f 2 e f . . 
                        . . f f f f e e e e f f f f . . 
                        . f f e f b f 4 4 f b f e f f . 
                        . f e e 4 1 f d d f 1 4 e e f . 
                        . . f e e d d d d d d e e f . . 
                        . . . f e e 4 4 4 4 e e f . . . 
                        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                        . . . . . f f f f f f . . . . . 
                        . . . . . f f . . f f . . . . . 
                        `, SpriteKind.Survivor)
                    player2IsDead = 0
                } else if (character2 == 2) {
                    player2IsDead = 1
                    Player2.destroy()
                    Player2 = sprites.create(img`
                        . . . . . . 5 . 5 . . . . . . . 
                        . . . . . f 5 5 5 f f . . . . . 
                        . . . . f 1 5 2 5 1 6 f . . . . 
                        . . . f 1 6 6 6 6 6 1 6 f . . . 
                        . . . f 6 6 f f f f 6 1 f . . . 
                        . . . f 6 f f d d f f 6 f . . . 
                        . . f 6 f d f d d f d f 6 f . . 
                        . . f 6 f d 3 d d 3 d f 6 f . . 
                        . . f 6 6 f d d d d f 6 6 f . . 
                        . f 6 6 f 3 f f f f 3 f 6 6 f . 
                        . . f f d 3 5 3 3 5 3 d f f . . 
                        . . f d d f 3 5 5 3 f d d f . . 
                        . . . f f 3 3 3 3 3 3 f f . . . 
                        . . . f 3 3 5 3 3 5 3 3 f . . . 
                        . . . f f f f f f f f f f . . . 
                        . . . . . f f . . f f . . . . . 
                        `, SpriteKind.Survivor)
                    Player2.setPosition(zombie1.x, zombie1.y + 17)
                    animation.runImageAnimation(
                    Player2,
                    [img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . f f f f f . . . 
                        . f f . f f . f d d d 6 6 f . . 
                        . f 3 f 3 5 f d 3 f f 6 6 6 f . 
                        f 3 5 3 3 3 f d d d d 6 6 2 5 5 
                        f 3 3 f f 3 5 d d 6 6 6 6 5 5 . 
                        f f f d d f 3 f 6 6 6 6 1 5 5 5 
                        . f d f f f f f 6 6 6 1 6 6 f . 
                        `],
                    500,
                    false
                    )
                    pause(500)
                    Player2.destroy()
                    Player2 = sprites.create(img`
                        . . . . . . 5 . 5 . . . . . . . 
                        . . . . . f 5 5 5 f f . . . . . 
                        . . . . f 1 5 2 5 1 6 f . . . . 
                        . . . f 1 6 6 6 6 6 1 6 f . . . 
                        . . . f 6 6 f f f f 6 1 f . . . 
                        . . . f 6 f f d d f f 6 f . . . 
                        . . f 6 f d f d d f d f 6 f . . 
                        . . f 6 f d 3 d d 3 d f 6 f . . 
                        . . f 6 6 f d d d d f 6 6 f . . 
                        . f 6 6 f 3 f f f f 3 f 6 6 f . 
                        . . f f d 3 5 3 3 5 3 d f f . . 
                        . . f d d f 3 5 5 3 f d d f . . 
                        . . . f f 3 3 3 3 3 3 f f . . . 
                        . . . f 3 3 5 3 3 5 3 3 f . . . 
                        . . . f f f f f f f f f f . . . 
                        . . . . . f f . . f f . . . . . 
                        `, SpriteKind.Survivor)
                    player2IsDead = 0
                } else if (character2 == 3) {
                    player2IsDead = 1
                    Player2.destroy()
                    Player2 = sprites.create(img`
                        . . . . f f f f . . . . . 
                        . . f f f f f f f f . . . 
                        . f f f f f f c f f f . . 
                        f f f f f f c c f f f c . 
                        f f f c f f f f f f f c . 
                        c c c f f f e e f f c c . 
                        f f f f f e e f f c c f . 
                        f f f b f e e f b f f f . 
                        . f 4 1 f 4 4 f 1 4 f . . 
                        . f e 4 4 4 4 4 4 e f . . 
                        . f f f e e e e f f f . . 
                        f e f b 7 7 7 7 b f e f . 
                        e 4 f 7 7 7 7 7 7 f 4 e . 
                        e e f 6 6 6 6 6 6 f e e . 
                        . . . f f f f f f . . . . 
                        . . . f f . . f f . . . . 
                        `, SpriteKind.Survivor)
                    Player2.setPosition(zombie1.x, zombie1.y + 17)
                    animation.runImageAnimation(
                    Player2,
                    [img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . f f . . . . 
                        . . . . . . . . . f f f . . . . 
                        . . . . . . . . f f f c f f . . 
                        . . f f f f f f f f f c f f f . 
                        . f 6 7 7 f 4 4 e e f f c f f . 
                        . f 6 7 7 e 4 4 e e e f f c f f 
                        f f 6 7 7 e 4 f f f f f f f f f 
                        f f f e e e 4 1 b f f c f f f f 
                        f f e 4 4 e e e f f f c c f f f 
                        . f e 4 4 e f 4 e f f f f f f f 
                        . . f e e f f e e f c f f f f . 
                        `],
                    500,
                    false
                    )
                    pause(500)
                    Player2.destroy()
                    Player2 = sprites.create(img`
                        . . . . f f f f . . . . . 
                        . . f f f f f f f f . . . 
                        . f f f f f f c f f f . . 
                        f f f f f f c c f f f c . 
                        f f f c f f f f f f f c . 
                        c c c f f f e e f f c c . 
                        f f f f f e e f f c c f . 
                        f f f b f e e f b f f f . 
                        . f 4 1 f 4 4 f 1 4 f . . 
                        . f e 4 4 4 4 4 4 e f . . 
                        . f f f e e e e f f f . . 
                        f e f b 7 7 7 7 b f e f . 
                        e 4 f 7 7 7 7 7 7 f 4 e . 
                        e e f 6 6 6 6 6 6 f e e . 
                        . . . f f f f f f . . . . 
                        . . . f f . . f f . . . . 
                        `, SpriteKind.Survivor)
                    player2IsDead = 0
                } else if (character2 == 4) {
                    player2IsDead = 1
                    Player2.destroy()
                    Player2 = sprites.create(img`
                        . f f f . f f f f . f f f . 
                        f f f f f c c c c f f f f f 
                        f f f f b c c c c b f f f f 
                        f f f c 3 c c c c 3 c f f f 
                        . f 3 3 c c c c c c 3 3 f . 
                        . f c c c c 4 4 c c c c f . 
                        . f f c c 4 4 4 4 c c f f . 
                        . f f f b f 4 4 f b f f f . 
                        . f f 4 1 f d d f 1 4 f f . 
                        . . f f d d d d d d f f . . 
                        . . e f e 4 4 4 4 e f e . . 
                        . e 4 f b 3 3 3 3 b f 4 e . 
                        . 4 d f 3 3 3 3 3 3 c d 4 . 
                        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                        . . . . f f f f f f . . . . 
                        . . . . f f . . f f . . . . 
                        `, SpriteKind.Survivor)
                    Player2.setPosition(zombie1.x, zombie1.y + 17)
                    animation.runImageAnimation(
                    Player2,
                    [img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . f f f f . . . . 
                        . . . . . . . f f f c c f f . . 
                        . . f f f f f f e e c c c c f . 
                        . f 6 3 3 e d d 4 4 4 c c c f f 
                        . f 6 3 3 4 d d 4 4 c c c c c f 
                        f f 6 3 3 4 d f f c c c c c c f 
                        f f f e e 4 d 1 b c c c c c c f 
                        f f e d d e 4 4 f c c c c c c f 
                        . f e d d e f d 4 f c c 3 b f . 
                        . . f e 4 f f 4 4 f f 3 c f f f 
                        `],
                    500,
                    false
                    )
                    pause(500)
                    Player2.destroy()
                    Player2 = sprites.create(img`
                        . f f f . f f f f . f f f . 
                        f f f f f c c c c f f f f f 
                        f f f f b c c c c b f f f f 
                        f f f c 3 c c c c 3 c f f f 
                        . f 3 3 c c c c c c 3 3 f . 
                        . f c c c c 4 4 c c c c f . 
                        . f f c c 4 4 4 4 c c f f . 
                        . f f f b f 4 4 f b f f f . 
                        . f f 4 1 f d d f 1 4 f f . 
                        . . f f d d d d d d f f . . 
                        . . e f e 4 4 4 4 e f e . . 
                        . e 4 f b 3 3 3 3 b f 4 e . 
                        . 4 d f 3 3 3 3 3 3 c d 4 . 
                        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                        . . . . f f f f f f . . . . 
                        . . . . f f . . f f . . . . 
                        `, SpriteKind.Survivor)
                    player2IsDead = 0
                }
                statusBarPlayer2 = statusbars.create(20, 4, StatusBarKind.Health)
                statusBarPlayer2.attachToSprite(Player2)
                controller.player2.moveSprite(Player2, 50, 50)
                Player2.setPosition(randint(0, 160), randint(0, 120))
                Player2.setStayInScreen(true)
                splitScreen.splitScreenCameraFollow(Player2)
            } else {
                pause(200)
                statusBarPlayer2.value += -10
            }
            if (player1DeathCount >= 3 && player2DeathCount >= 3) {
                game.showLongText("Everyone died :(", DialogLayout.Bottom)
                game.over(false, effects.splatter)
            }
        }
    } else {
        Player2.destroy()
    }
})
// Walking down Player 2 animation
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    stopAnimPlr2 = 0
    if (character1 != 0) {
        if (character2 == 1) {
            animation.runImageAnimation(
            Player2,
            [img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . f f e 2 f f f f f f 2 e f f . 
                . f f f f f e e e e f f f f f . 
                . . f e f b f 4 4 f b f e f . . 
                . . f e 4 1 f d d f 1 4 e f . . 
                . . . f e 4 d d d d 4 e f e . . 
                . . f e f 2 2 2 2 e d d 4 e . . 
                . . e 4 f 2 2 2 2 e d d e . . . 
                . . . . f 4 4 5 5 f e e . . . . 
                . . . . f f f f f f f . . . . . 
                . . . . f f f . . . . . . . . . 
                `,img`
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f f e 2 2 2 2 2 2 e e f . . 
                . . f e 2 f f f f f f 2 e f . . 
                . . f f f f e e e e f f f f . . 
                . f f e f b f 4 4 f b f e f f . 
                . f e e 4 1 f d d f 1 4 e e f . 
                . . f e e d d d d d d e e f . . 
                . . . f e e 4 4 4 4 e e f . . . 
                . . e 4 f 2 2 2 2 2 2 f 4 e . . 
                . . 4 d f 2 2 2 2 2 2 f d 4 . . 
                . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
                . . . . . f f f f f f . . . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . f f f f . . . . . . 
                . . . . f f f 2 2 f f f . . . . 
                . . . f f f 2 2 2 2 f f f . . . 
                . . f f f e e e e e e f f f . . 
                . . f e e 2 2 2 2 2 2 e f f . . 
                . f f e 2 f f f f f f 2 e f f . 
                . f f f f f e e e e f f f f f . 
                . . f e f b f 4 4 f b f e f . . 
                . . f e 4 1 f d d f 1 4 e f . . 
                . . e f e 4 d d d d 4 e f . . . 
                . . e 4 d d e 2 2 2 2 f e f . . 
                . . . e d d e 2 2 2 2 f 4 e . . 
                . . . . e e f 5 5 4 4 f . . . . 
                . . . . . f f f f f f f . . . . 
                . . . . . . . . . f f f . . . . 
                `],
            200,
            false
            )
        }
        if (character2 == 2) {
            animation.runImageAnimation(
            Player2,
            [img`
                . . . . . . 5 . 5 . . . . . . . 
                . . . . . f 5 5 5 f f . . . . . 
                . . . . f 1 5 2 5 1 6 f . . . . 
                . . . f 1 6 6 6 6 6 1 6 f . . . 
                . . . f 6 6 f f f f 6 1 f . . . 
                . . . f 6 f f d d f f 6 f . . . 
                . . f 6 f d f d d f d f 6 f . . 
                . . f 6 f d 3 d d 3 d f 6 f . . 
                . . f 6 6 f d d d d f 6 6 f . . 
                . f 6 6 f 3 f f f f 3 f 6 6 f . 
                . . f f d 3 5 3 3 5 3 d f f . . 
                . . f d d f 3 5 5 3 f d d f . . 
                . . . f f 3 3 3 3 3 3 f f . . . 
                . . . f 3 3 5 3 3 5 3 3 f . . . 
                . . . f f f f f f f f f f . . . 
                . . . . . f f . . f f . . . . . 
                `,img`
                . . . . . . 5 . 5 . . . . . . . 
                . . . . . f 5 5 5 f f . . . . . 
                . . . . f 1 5 2 5 1 6 f . . . . 
                . . . f 1 6 6 6 6 6 1 6 f . . . 
                . . . f 6 6 f f f f 6 1 f . . . 
                . . . f 6 f f d d f f 6 f . . . 
                . . f 6 f d f d d f d f 6 f . . 
                . . f 6 f d 3 d d 3 d f 6 f . . 
                . . f 6 6 f d d d d f 6 6 f . . 
                . f 6 6 f 3 f f f f 3 f 6 6 f . 
                . . f f 3 3 5 3 3 5 3 d f f . . 
                . . . f d f 3 5 5 3 f f d f . . 
                . . . f d f 3 3 3 3 3 f f . . . 
                . . . f f 3 5 3 3 5 3 3 f . . . 
                . . . . f f f f f f f f f . . . 
                . . . . . . . . . f f . . . . . 
                `,img`
                . . . . . . 5 . 5 . . . . . . . 
                . . . . . f 5 5 5 f f . . . . . 
                . . . . f 1 5 2 5 1 6 f . . . . 
                . . . f 1 6 6 6 6 6 1 6 f . . . 
                . . . f 6 6 f f f f 6 1 f . . . 
                . . . f 6 f f d d f f 6 f . . . 
                . . f 6 f d f d d f d f 6 f . . 
                . . f 6 f d 3 d d 3 d f 6 f . . 
                . . f 6 6 f d d d d f 6 6 f . . 
                . f 6 6 f 3 f f f f 3 f 6 6 f . 
                . . f f d 3 5 3 3 5 3 3 f f . . 
                . . f d f f 3 5 5 3 f d f . . . 
                . . . f f 3 3 3 3 3 f d f . . . 
                . . . f 3 3 5 3 3 5 3 f f . . . 
                . . . f f f f f f f f f . . . . 
                . . . . . f f . . . . . . . . . 
                `],
            200,
            false
            )
        }
        if (character2 == 3) {
            animation.runImageAnimation(
            Player2,
            [img`
                . . . . f f f f . . . . . 
                . . f f f f f f f f . . . 
                . f f f f f f c f f f . . 
                f f f f f f c c f f f c . 
                f f f c f f f f f f f c . 
                c c c f f f e e f f c c . 
                f f f f f e e f f c c f . 
                f f f b f e e f b f f f . 
                . f 4 1 f 4 4 f 1 4 f . . 
                . f e 4 4 4 4 4 4 e f . . 
                . f f f e e e e f f f . . 
                f e f b 7 7 7 7 b f e f . 
                e 4 f 7 7 7 7 7 7 f 4 e . 
                e e f 6 6 6 6 6 6 f e e . 
                . . . f f f f f f . . . . 
                . . . f f . . f f . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . . f f f f . . . . 
                . . . f f f f f f f f . . 
                . . f f f f f f c f f f . 
                f f f f f f f c c f f f c 
                f f f f c f f f f f f f c 
                . c c c f f f e e f f c c 
                . f f f f f e e f f c c f 
                . f f f b f e e f b f f f 
                . f f 4 1 f 4 4 f 1 4 f f 
                . . f e 4 4 4 4 4 e e f e 
                . f e f b 7 7 7 e 4 4 4 e 
                . e 4 f 7 7 7 7 e 4 4 e . 
                . . . f 6 6 6 6 6 e e . . 
                . . . f f f f f f f . . . 
                . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . f f f f . . . . . 
                . . f f f f f f f f . . . 
                . f f f c f f f f f f . . 
                c f f f c c f f f f f f f 
                c f f f f f f f c f f f f 
                c c f f e e f f f c c c . 
                f c c f f e e f f f f f . 
                f f f b f e e f b f f f . 
                f f 4 1 f 4 4 f 1 4 f f . 
                e f e e 4 4 4 4 4 e f . . 
                e 4 4 4 e 7 7 7 b f e f . 
                . e 4 4 e 7 7 7 7 f 4 e . 
                . . e e 6 6 6 6 6 f . . . 
                . . . f f f f f f f . . . 
                . . . . . . . f f f . . . 
                `],
            200,
            false
            )
        }
        if (character2 == 4) {
            animation.runImageAnimation(
            Player2,
            [img`
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c 4 4 c c c c f . 
                . f f c c 4 4 4 4 c c f f . 
                . f f f b f 4 4 f b f f f . 
                . f f 4 1 f d d f 1 4 f f . 
                . . f f d d d d d d f f . . 
                . . e f e 4 4 4 4 e f e . . 
                . e 4 f b 3 3 3 3 b f 4 e . 
                . 4 d f 3 3 3 3 3 3 c d 4 . 
                . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                . . . . f f f f f f . . . . 
                . . . . f f . . f f . . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c 4 4 c c c c f . 
                . f f c c 4 4 4 4 c c f f . 
                . f f f b f 4 4 f b f f f . 
                . f f 4 1 f d d f 1 4 f f . 
                . . f f d d d d d 4 e f e . 
                . f e f f b b b e d d 4 e . 
                . e 4 f b 3 3 3 e d d e . . 
                . . . f 6 6 6 6 f e e . . . 
                . . . f f f f f f f . . . . 
                . . . f f f . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c 4 4 c c c c f . 
                . f f c c 4 4 4 4 c c f f . 
                . f f f b f 4 4 f b f f f . 
                . f f 4 1 f d d f 1 4 f f . 
                . e f e 4 d d d d d f f . . 
                . e 4 d d e b b b f f e f . 
                . . e d d e 3 3 b e f 4 e . 
                . . . e e f 6 6 6 6 f . . . 
                . . . . f f f f f f f . . . 
                . . . . . . . . f f f . . . 
                `],
            200,
            false
            )
        }
    }
})
// Walking left Player 1 animation
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    stopAnimplr1 = 0
    if (character2 != 0) {
        if (character1 == 1) {
            animation.runImageAnimation(
            Player1,
            [img`
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d d 4 e e e f . . . 
                . . . f e 4 4 4 e e f f . . . . 
                . . . f 2 2 2 e d d 4 . . . . . 
                . . . f 2 2 2 e d d e . . . . . 
                . . . f 5 5 4 f e e f . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d e e e e e f . . . 
                . . . f e 4 e d d 4 f . . . . . 
                . . . f 2 2 e d d e f . . . . . 
                . . f f 5 5 f e e f f f . . . . 
                . . f f f f f f f f f f . . . . 
                . . . f f f . . . f f . . . . . 
                `,img`
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d d 4 e e e f . . . 
                . . . f e 4 4 4 e e f f . . . . 
                . . . f 2 2 2 e d d 4 . . . . . 
                . . . f 2 2 2 e d d e . . . . . 
                . . . f 5 5 4 f e e f . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f . . . . . . 
                . . . f 2 f e e e e f f . . . . 
                . . f 2 2 2 f e e e e f f . . . 
                . . f e e e e f f e e e f . . . 
                . f e 2 2 2 2 e e f f f f . . . 
                . f 2 e f f f f 2 2 2 e f . . . 
                . f f f e e e f f f f f f f . . 
                . f e e 4 4 f b e 4 4 e f f . . 
                . . f e d d f 1 4 d 4 e e f . . 
                . . . f d d d d 4 e e e f . . . 
                . . . f e 4 4 4 e d d 4 . . . . 
                . . . f 2 2 2 2 e d d e . . . . 
                . . f f 5 5 4 4 f e e f . . . . 
                . . f f f f f f f f f f . . . . 
                . . . f f f . . . f f . . . . . 
                `],
            200,
            false
            )
        }
        if (character1 == 2) {
            animation.runImageAnimation(
            Player1,
            [img`
                . . . . . . 5 . 5 . . . . . . . 
                . . . . . f 5 5 5 f . . . . . . 
                . . . . f 6 2 5 5 6 f . . . . . 
                . . . f 6 6 6 6 1 6 6 f . . . . 
                . . . f 6 6 6 6 6 1 6 f . . . . 
                . . . f d f d 6 6 6 1 f . . . . 
                . . . f d f d 6 6 6 6 f f . . . 
                . . . f d 3 d d 6 6 6 f 6 f . . 
                . . . . f d d d f f 6 f f . . . 
                . . . . . f f 5 3 f 6 6 6 f . . 
                . . . . f 5 3 3 f f f f f . . . 
                . . . . f 3 3 f d f . . . . . . 
                . . . . . f 3 f d f . . . . . . 
                . . . . f 3 5 3 f d f . . . . . 
                . . . . f f 3 3 f f . . . . . . 
                . . . . . . f f f . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 5 . 5 . . . . . . 
                . . . . . . f 5 5 5 f . . . . . 
                . . . . . f 6 2 5 5 6 f . . . . 
                . . . . f 6 6 6 6 1 6 6 f . . . 
                . . . . f 6 6 6 6 6 1 6 f . . . 
                . . . . f d f d 6 6 6 1 f . . . 
                . . . . f d f d 6 6 6 6 f f . . 
                . . . . f d 3 d d 6 6 6 f 6 f . 
                . . . . . f d d d f f 6 f f . . 
                . . . . . . f f 3 3 f f 6 6 f . 
                . . . . . f d d d d f f f f . . 
                . . . . . f d d d f 3 f . . . . 
                . . . . . . f f f d 5 3 f . . . 
                . . . . . f f f 3 3 f f . . . . 
                . . . . . f f f f f f f . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 5 . 5 . . . . . . 
                . . . . . . f 5 5 5 f . . . . . 
                . . . . . f 6 2 5 5 6 f . . . . 
                . . . . f 6 6 6 6 1 6 6 f . . . 
                . . . . f 6 6 6 6 6 1 6 f . . . 
                . . . . f d f d 6 6 6 1 f . . . 
                . . . . f d f d 6 6 6 6 f f . . 
                . . . . f d 3 d d 6 6 6 f 6 f . 
                . . . . . f d d d f f 6 f f . . 
                . . . . . . f f 3 3 f f 6 6 f . 
                . . . . . f 5 3 3 d d f f f . . 
                . . . . . f 3 3 3 f d d f . . . 
                . . . . . . f 3 5 f f f . . . . 
                . . . . . f 3 3 3 3 f . . . . . 
                . . . . . . f f f f f . . . . . 
                `],
            200,
            false
            )
        }
        if (character1 == 3) {
            animation.runImageAnimation(
            Player1,
            [img`
                . . . . . f f f f f . . . 
                . . . f f f f f f f f f . 
                . . f f f c f f f f f f . 
                . . f f c f f f c f f f f 
                f f c c f f f c c f f c f 
                f f f f f e f f f f c c f 
                . f f f e e f f f f f f f 
                . . f f e e f b f e e f f 
                . . . f 4 4 f 1 e 4 e f . 
                . . . f 4 4 4 4 e f f f . 
                . . . f f e e e e e f . . 
                . . . f 7 7 7 e 4 4 e . . 
                . . . f 7 7 7 e 4 4 e . . 
                . . . f 6 6 6 f e e f . . 
                . . . . f f f f f f . . . 
                . . . . . . f f f . . . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . f f f f f f . . . 
                . . . f f f f f f f f f . 
                . . f f f c f f f f f f . 
                . f f f c f f f c f f f f 
                f f c c f f f c c f f c f 
                f f f f f e f f f f c c f 
                . f f f e e f f f f f f f 
                . . f f e e f b f e e f f 
                . . f f 4 4 f 1 e 4 e f . 
                . . . f 4 4 4 e e f f f . 
                . . . f f e e 4 4 e f . . 
                . . . f 7 7 e 4 4 e f . . 
                . . f f 6 6 f e e f f f . 
                . . f f f f f f f f f f . 
                . . . f f f . . . f f . . 
                `,img`
                . . . . . . . . . . . . . 
                . . . . f f f f f f . . . 
                . . . f f f f f f f f f . 
                . . f f f c f f f f f f . 
                . f f f c f f f c f f f f 
                f f c c f f f c c f f c f 
                f f f f f e f f f f c c f 
                . f f f e e f f f f f f f 
                . f f f e e f b f e e f f 
                . . f f 4 4 f 1 e 4 e f f 
                . . . f 4 4 4 4 e f f f . 
                . . . f f e e e e 4 4 4 . 
                . . . f 7 7 7 7 e 4 4 e . 
                . . f f 6 6 6 6 f e e f . 
                . . f f f f f f f f f f . 
                . . . f f f . . . f f . . 
                `],
            200,
            false
            )
        }
        if (character1 == 4) {
            animation.runImageAnimation(
            Player1,
            [img`
                . . . . f f f f f . f f f . 
                . . . f f c c c c f f f f f 
                . . f c c c c c c b f f f f 
                . . f c c c c c c 3 c f f f 
                . f c c c c c c c c 3 3 f . 
                . f c c 4 c c c c c f f f . 
                . f f e 4 4 c c c f f f f . 
                . f f e 4 4 f b f 4 4 f f . 
                . . f f d d f 1 4 d 4 f . . 
                . . . f d d d d 4 f f f . . 
                . . . f e 4 4 4 e e f . . . 
                . . . f 3 3 3 e d d 4 . . . 
                . . . f 3 3 3 e d d e . . . 
                . . . f 6 6 6 f e e f . . . 
                . . . . f f f f f f . . . . 
                . . . . . . f f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . . . . f f f f f . f f f . 
                . . . f f c c c c f f f f f 
                . . f c c c c c c b f f f f 
                . . f c c c c c c 3 c f f f 
                . f c c c c c c c c 3 3 f . 
                . f c c 4 c c c c c f f f . 
                . f f c 4 4 c c c f f f f . 
                . f f f 4 4 f b f 4 4 f f . 
                . . f f d d f 1 4 d 4 f . . 
                . . . f d d d e e f f f . . 
                . . . f e 4 e d d 4 f . . . 
                . . . f 3 3 e d d e f . . . 
                . . f f 6 6 f e e f f f . . 
                . . f f f f f f f f f f . . 
                . . . f f f . . . f f . . . 
                `,img`
                . . . . . . . . . . . . . . 
                . . . . f f f f f . f f f . 
                . . . f f c c c c f f f f f 
                . . f c c c c c c b f f f f 
                . . f c c c c c c 3 c f f f 
                . f c c c c c c c c 3 3 f . 
                . f c c 4 c c c c c f f f . 
                . f f c 4 4 c c c f f f f . 
                . f f f 4 4 f b f 4 4 f f . 
                . . f c d d f 1 4 d 4 f f . 
                . . . f d d d d 4 f f f . . 
                . . . f e 4 4 4 e d d 4 . . 
                . . . f 3 3 3 3 e d d e . . 
                . . f f 6 6 6 6 f e e f . . 
                . . f f f f f f f f f f . . 
                . . . f f f . . . f f . . . 
                `],
            200,
            false
            )
        }
    }
})
// Sets variables to correct values and creates title screen
let target: Sprite = null
let stopCursor2Spawn = 0
let sliceEffectPlr1: Sprite = null
let stopAnimplr1 = 0
let bulletPlr1: Sprite = null
let bulletPlr2: Sprite = null
let reaper: Sprite = null
let beacon1: Sprite = null
let zombie2: Sprite = null
let zombie1: Sprite = null
let statusBarPlayer2: StatusBarSprite = null
let statusBarPlayer1: StatusBarSprite = null
let Player1: Sprite = null
let stopAnimPlr2 = 0
let character2 = 0
let cursor2: Sprite = null
let character1 = 0
let difficultyLevel = 0
let Player2: Sprite = null
let sliceEffectPlr2: Sprite = null
let difficultyTitle: Sprite = null
let difficultyX: Sprite = null
let hardButton: Sprite = null
let mediumButton: Sprite = null
let easyButton: Sprite = null
let character4Button: Sprite = null
let character3Button: Sprite = null
let character2Button: Sprite = null
let character1Button: Sprite = null
let charSelectX: Sprite = null
let characterSelectionTitle: Sprite = null
let cursor: Sprite = null
let title: Sprite = null
let tipsButton: Sprite = null
let helpButton: Sprite = null
let difficultyButton: Sprite = null
let playButton: Sprite = null
let menu = 0
let gameStart = 0
let disableChar2 = 0
let player2IsDead = 0
let player1IsDead = 0
let player2DeathCount = 0
let player1DeathCount = 0
player1DeathCount = 0
player2DeathCount = 0
player1IsDead = 0
player2IsDead = 0
disableChar2 = 0
gameStart = 0
menu = -1
menuFunc()
// Spawns zombies every 20 seconds
game.onUpdateInterval(20000, function () {
    if (gameStart == 1) {
        zombie1 = sprites.create(img`
            . . . . . 7 f 7 7 f 7 . . . . . 
            . . . . . 7 7 7 7 7 7 . . . . . 
            . . . . 7 f f f f f f 7 . . . . 
            . . . . 7 7 f f f f 7 7 . . . . 
            . . 1 1 7 1 1 2 2 1 1 7 1 . . . 
            . 1 2 . 7 2 2 2 2 2 2 7 1 2 . . 
            1 2 . . 7 1 1 2 2 1 1 7 . 1 1 . 
            1 . . . 7 2 2 2 2 2 2 7 . . . 1 
            . . . . 7 2 2 2 2 2 2 7 . . . 2 
            . . . . 7 2 2 2 2 2 2 7 . . . . 
            . . . f f 2 2 2 f 2 2 2 f . . . 
            . . . f 2 2 f 2 2 2 2 f 2 . . . 
            . . . f 2 f . . . . 2 f 2 . . . 
            . . . 7 2 2 . . . . 2 2 2 . . . 
            . . f f 2 2 . . . . 2 f 2 f . . 
            . f f 2 2 f . . . . f f f 2 f . 
            . f f f f f . . . . f f f f f . 
            `, SpriteKind.zombie)
        zombie1.setPosition(20, 25)
        zombie2 = sprites.create(assets.image`Zombie 2`, SpriteKind.zombie)
        zombie2.setPosition(140, 25)
    }
})
// Makes Player 2 cursor, disables Player 2 selecting same character as player 1, and stops animation when no movement
forever(function () {
    if (character1 != 0) {
        while (stopCursor2Spawn == 0) {
            cursor2 = sprites.create(assets.image`Zombie Player 2 Cursor`, SpriteKind.Player)
            controller.player2.moveSprite(cursor2)
            stopCursor2Spawn = 1
            if (stopCursor2Spawn == 1) {
                break;
            }
        }
    }
    if (disableChar2 == 1) {
        if (character1 == 1) {
            character1Button.destroy()
            character1Button = sprites.create(img`
                . 2 2 2 . . f f f f . . . . . . 
                . 2 2 2 2 f f 2 2 f f f . . . . 
                . 2 2 2 2 2 2 2 2 2 f f f . . . 
                . . 2 2 2 2 2 e e e e f f f . . 
                . . 2 2 2 2 2 2 2 2 2 e e f . . 
                . . f e 2 2 2 2 2 f f 2 e f . . 
                . . f f f 2 2 2 2 2 f f f f . . 
                . f f e f 2 2 2 2 2 2 f e f f . 
                . f e e 4 1 2 2 2 2 2 2 e e f . 
                . . f e e d d 2 2 2 2 2 2 f . . 
                . . . f e e 4 4 2 2 2 2 2 2 . . 
                . . e 4 f 2 2 2 2 2 2 2 2 2 2 . 
                . . 4 d f 2 2 2 2 2 2 2 2 2 2 2 
                . . 4 4 f 4 4 5 5 4 4 2 2 2 2 2 
                . . . . . f f f f f f . 2 2 2 2 
                . . . . . f f . . f f . . 2 2 2 
                `, SpriteKind.noSelection)
            character1Button.setPosition(20, 65)
        } else if (character1 == 2) {
            character2Button.destroy()
            character2Button = sprites.create(img`
                2 2 2 . . . 5 . 5 . . . . . . . 
                2 2 2 2 . f 5 5 5 f f . . . . . 
                2 2 2 2 2 1 5 2 5 1 6 f . . . . 
                2 2 2 2 2 2 6 6 6 6 1 6 f . . . 
                . . 2 2 2 2 2 f f f 6 1 f . . . 
                . . 2 2 2 2 2 d d f f 6 f . . . 
                . . f 2 2 2 2 2 d f d f 6 f . . 
                . . f 6 2 2 2 2 2 3 d f 6 f . . 
                . . f 6 6 2 2 2 2 2 f 6 6 f . . 
                . f 6 6 f 3 2 2 2 2 2 f 6 6 f . 
                . . f f d 3 2 2 2 2 2 2 2 f . . 
                . . f d d f 3 2 2 2 2 2 2 2 . . 
                . . . f f 3 3 3 3 2 2 2 2 2 2 2 
                . . . f 3 3 5 3 3 5 2 2 2 2 2 2 
                . . . f f f f f f f f 2 2 2 2 2 
                . . . . . f f . . f f . 2 2 2 2 
                `, SpriteKind.noSelection)
            character2Button.setPosition(60, 65)
        } else if (character1 == 3) {
            character3Button.destroy()
            character3Button = sprites.create(img`
                2 2 2 2 f f f f . . . . . 
                2 2 2 2 f f f f f f . . . 
                2 2 2 2 2 f f c f f f . . 
                f 2 2 2 2 2 c c f f f c . 
                f f 2 2 2 2 2 f f f f c . 
                c c c 2 2 2 2 2 f f c c . 
                f f f f 2 2 2 2 f c c f . 
                f f f b 2 2 2 2 2 2 f f . 
                . f 4 1 f 2 2 2 2 2 f . . 
                . f e 4 4 4 2 2 2 2 2 2 . 
                . f f f e e e 2 2 2 2 2 . 
                f e f b 7 7 7 7 2 2 2 2 2 
                e 4 f 7 7 7 7 7 7 2 2 2 2 
                e e f 6 6 6 6 6 6 2 2 2 2 
                . . . f f f f f f . 2 2 2 
                . . . f f . . f f . 2 2 2 
                `, SpriteKind.noSelection)
            character3Button.setPosition(100, 65)
        } else if (character1 == 4) {
            character4Button.destroy()
            character4Button = sprites.create(img`
                2 2 2 f . f f f f . f f f . 
                2 2 2 2 f c c c c f f f f f 
                2 2 2 2 b c c c c b f f f f 
                2 2 2 2 2 c c c c 3 c f f f 
                . 2 2 2 2 2 c c c c 3 3 f . 
                . f 2 2 2 2 4 4 c c c c f . 
                . f 2 2 2 2 2 4 4 c c f f . 
                . f f 2 2 2 2 4 f b f f f . 
                . f f 2 2 2 2 2 f 1 4 f f . 
                . . f f 2 2 2 2 2 d f f . . 
                . . e f e 2 2 2 2 2 2 e . . 
                . e 4 f b 3 2 2 2 2 2 2 e . 
                . 4 d f 3 3 3 2 2 2 2 2 2 . 
                . 4 4 f 6 6 6 6 2 2 2 2 2 2 
                . . . . f f f f f f 2 2 2 2 
                . . . . f f . . f f . 2 2 2 
                `, SpriteKind.noSelection)
            character4Button.setPosition(140, 65)
        }
        disableChar2 = 0
    }
    if (gameStart == 1) {
        if (!(controller.anyButton.isPressed())) {
            stopAnimplr1 = 1
            if (stopAnimplr1 == 1) {
                animation.stopAnimation(animation.AnimationTypes.All, Player1)
            } else {
                stopAnimplr1 = 0
            }
        }
        if (!(controller.player2.isPressed(ControllerButton.A) || controller.player2.isPressed(ControllerButton.B) || controller.player2.isPressed(ControllerButton.Up) || (controller.player2.isPressed(ControllerButton.Down) || (controller.player2.isPressed(ControllerButton.Left) || controller.player2.isPressed(ControllerButton.Right))))) {
            stopAnimPlr2 = 1
            if (stopAnimPlr2 == 1) {
                animation.stopAnimation(animation.AnimationTypes.All, Player2)
            } else {
                stopAnimPlr2 = 0
            }
        }
    }
})
// makes zombie attack nearest player
game.onUpdateInterval(100, function () {
    if (gameStart == 1) {
        if (Player1.x - zombie1.x < 40 && Player1.y - zombie1.y < 30 && (Player2.x - zombie1.x < 40 && Player2.y - zombie1.y < 30)) {
            if (Player1.x - zombie1.x < Player2.x - zombie1.x && Player1.y - zombie1.y < Player2.y - zombie1.y) {
                if (player2IsDead == 1) {
                    target = Player1
                    zombie1.follow(target, 30)
                }
            } else {
                target = Player2
                zombie1.follow(target, 30)
            }
        } else if (Player2.x - zombie2.x < 40 && Player2.y - zombie2.y < 30 && (Player1.x - zombie2.x < 40 && Player1.y - zombie2.y < 30)) {
            if (Player1.x - zombie2.x < Player2.x - zombie2.x && Player1.y - zombie2.y < Player2.y - zombie2.y) {
                if (player2IsDead == 1) {
                    target = Player1
                    zombie2.follow(target, 30)
                }
            } else {
                target = Player2
                zombie2.follow(target, 30)
            }
        } else {
        	
        }
    }
})
