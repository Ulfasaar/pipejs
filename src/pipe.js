function Pipe(){
   
    this.steps = Array.from(arguments)

    if(typeof this.steps[0] !== "function"){
        this.start_val = this.steps[0]
        this.steps = this.steps.slice(1)
    }
    else{
        this.start_val = null
    }

}

function open(){

    var prev_result = this.start_val

    for(var i = 0; i<this.steps.length; i++){
        prev_result = this.steps[i](prev_result)
    }

    return prev_result
}

Pipe.prototype.open = open

exports.default = Pipe