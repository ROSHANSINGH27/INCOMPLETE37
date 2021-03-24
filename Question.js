class Question{
    constructor(){

    }
    hide(){
this.question.hide()
this.option1.hide()
this.option2.hide()
    }
    display(){
        this.tittle.html('My Quiz Game')
        this.tittle.position(350,0)

        this.question.html("Question:-What start and end with letter'E',but has only one letter ?")
        this.question.position(150,80)
        this.option1.html("1:-Everyone")
        this.option1.position(150,100)
        this.option2.html("2:-Envelope")
        this.option2.position(150,120)

        this.input1.position(150,230)
    }
}