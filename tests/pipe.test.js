const Pipe = require('../src/pipe').default

test('Pipe is defined', ()=>{
    expect(Pipe).toBeDefined()
}) 

test('Pipe objects store functions', ()=>{
    function hello(){
        return "hello"
    }

    let thing = new Pipe(hello)

    expect(thing.steps[0]).toEqual(hello)
})

test('Pipe open executes first step', ()=>{
    function hello(){
        return "hello"
    }

    let thing = new Pipe(hello)
    expect(thing.open()).toBe("hello")

})

test('Pipe open passes results between steps', ()=>{
    function name(){
        return "Bob"
    }

    function hello(name){
        return 'hello ' + name
    }

    let thing = new Pipe(name, hello)
    expect(thing.open()).toBe("hello Bob")
})

test('Pipe allows first arg to be constant', ()=>{
    function hello(name){
        return 'hello ' + name
    }

    let thing = new Pipe('Bob', hello)
    expect(thing.open()).toBe("hello Bob")
})

test('Two unique pipes are not equal', ()=>{
    function hello(name){
        return 'hello ' + name
    }

    let thing = new Pipe('Bob', hello)
    let thing2 = new Pipe('Bob', hello)

    expect(thing !== thing2)
})