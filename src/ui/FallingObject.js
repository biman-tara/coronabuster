import Phaser from "phaser";
export default class FallingObject extends
Phaser.Physics.Arcade.Sprite
{
    constructor(scene,x,y,texture,config){
        super (scene,x,y,texture)
        this.scene=scene
        this.speed=config.speed
        this.rotationval=config.rotation

    }
    spawn(positionx){
        this.setPosition(positionx,-10)
        this.setActive(true)
        this.setVisible(true)

    }
    die(){
        this.destroy()

    }

    update(time){
        this.setVelocityY(this.speed)
        this.rotation

    }
}