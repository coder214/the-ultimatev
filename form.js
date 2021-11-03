class Form {
    constructor(){
        this.input = createInput("").attribute("placeholder", "ENTER YOUR NAME");
        this.button = createButton("Start");
    }

    elementPositions() {
        this.input.position(width/2, height/2);
        this.button.position(width/2+50, height/2+50);
    }

    elementStyles() {
        this.input.class("customInput");
        this.button.class("customButton");
    }

    hide(){
        this.input.hide();
        this.button.hide();
    }

  handleMousePressed(){
        this.button.mousePressed(() => {
           this.input.hide();
           this.button.hide();
           var spaceship = createSprite(width/2-550, height/2-100, 10, 10);
           spaceship.addImage(spaceshipImg);   
           spaceship.scale = 0.5;  
           if(keyDown(RIGHT_ARROW)){
            spaceship.x = spaceship.x+2;
           }

           if(spaceship.isTouching(mars)){
               spaceship.scale = 0.2;
           }
        });
    }


display(){
    this.elementPositions();
    this.elementStyles();
    this.handleMousePressed();
}
}