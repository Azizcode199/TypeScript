function obst():string{
    return 'Orange'
}

console.log(obst())

console.log("-----------------------------")

function markstd():number{
    return 12
}

console.log(markstd())

console.log("-----------------------------")

function compley():number|string{
    let data=10;
    let name="Anna"
    let type="age";

    if(type=='age'){
        return data
    }else{
        return name
    }

    function anthing():any{
        return
    }
}

console.log(compley())