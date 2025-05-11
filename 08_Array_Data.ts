// was ist Array
// „Collection of same Data type“
// → Ein Array ist eine Sammlung von Werten, alle mit dem gleichen Datentyp (z. B. nur Zahlen, nur Strings).
// „Pre-defined“ heißt:
// ➡️ Du sagst vorher, welcher Typ im Array erlaubt ist.

let arr: number[] = [10, 20, 30, 40, 50];    
for(let i =0; i< arr.length;i++){
    console.log(arr[i])
}    

console.log("--------string Data Type -----")   

let names: string[] = ["Alice", "Tom", "Anna"]; 
for(let i =0; i < names.length;i++){
    console.log(names[i])
}

console.log("------------Array <string> --------")

let students : Array<string>=['bruce', 'Aliya', 'Alina']
for(let i=0; i< students.length; i++){
    console.log(students[i])
    
}
students.push("baktash")
console.log(students)
console.log("--------------Number <number>------------------")

let marks : Array<number>=[10, 20, 30, 40, 50]
for(let i=0; i< marks.length; i++){
    console.log(marks[i])
}

marks.push(6555)
console.log(marks)

console.log("----------college Student ---------------------------")

// 🔐 Merksatz:
// ReadonlyArray = Nur anschauen, nicht anfassen. 


let colleageName  : ReadonlyArray<string> = ['IT School', "Tafale School", "uni Hamburg"]
// colleageName.push("Harburg uni"); // ❌ Fehler! Array ist readonly ❌  Das hier ist nicht erlaubt:

console.log(colleageName)