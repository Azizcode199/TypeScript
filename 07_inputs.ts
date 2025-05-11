function getInfo(){
    const nameInput=document.getElementById('username') as HTMLInputElement
    console.log(nameInput.value)
    const name:string=nameInput.value

    const userPassword=document.getElementById('password') as HTMLInputElement
    console.log(userPassword.value)
    const password:string=userPassword.value

    const userAge=document.getElementById('age') as HTMLInputElement
    console.log(userAge.value)
    const age:string=userAge.value
}