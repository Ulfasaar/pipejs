const Pipe = require('../src/pipe').default

test('Pipe is defined', ()=>{
    expect(Pipe).toBeDefined()
}) 

test('Pipe objects store functions', ()=>{
    function hello(){
        return "hello"
    }

    let thing = new Pipe(hello)

    expect(thing.steps).toBeDefined()
})