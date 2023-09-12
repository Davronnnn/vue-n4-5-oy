const obj ={
    name: "tesla model y",
    color: "mokriy asfalt",
    speed: 200,
    findType(){
        console.log(this)
        if(this.speed > 180){
            return "turbo"
        }else{
            return "econom"
        }
    },
    asd: () =>{
        console.log(this)
       
    }
}

const obj2 ={
    name: "tesla model x",
    color: "chocolate",
    speed: 200,
    findType(){
        if(this.speed > 180){
            return "turbo"
        }else{
            return "econom"
        }
    }
}

console.log(obj.findType())
console.log(obj.asd())
// const  a = obj.findType()
// const b = obj2.findType()

// const { findType } = obj
// const { findType: findType2 } = obj2


// console.log(findType())
// console.log(findType2())

// function test(){
//     console.log(this)
// }

// test()
// const a = () => {
//     console.log(this)
// }
// a()