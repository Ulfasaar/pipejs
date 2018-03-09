var prev_result = null

function Pipe(){
   
    this.steps = Array.from(arguments)

    if(typeof this.steps[0] !== "function"){
        prev_result = this.steps[0]
        this.steps = this.steps.slice(1)
    }
}

Pipe.prototype.open = function(){

    this.steps.map((step)=>{
        prev_result = step(prev_result)
    })

    return prev_result
}

exports.default = Pipe