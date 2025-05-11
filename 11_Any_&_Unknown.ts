let wert:string|number|string[] = 'Emma';

wert = 100

console.log(wert)

let value : any = "Hanna"
value = true
value = 120
value =[1,2,3,4,4]
console.log(value)
console.log("-----------------------------------------")
let wertUnknown : unknown = "Miale"
wertUnknown = 450
wertUnknown='hamburg'
wertUnknown = 450
wertUnknown=true

if(typeof wertUnknown== 'string'){
    console.log(wertUnknown.toUpperCase())
}else{
    console.log(wertUnknown)
}
