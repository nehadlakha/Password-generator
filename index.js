let chars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","!","@","#","$","%","^","&","*","(",")","-",".","/","0","1","2","3","4","5","6","7","8","9"]
let btn1 = document.getElementById("option1")
let btn2 = document.getElementById("option2")
let btn3 = document.getElementById("option3")
let btn4 = document.getElementById("option4")

function password(){
    let pass = " "
    for(let i = 0; i < 15; i++)
    {
        let letter = chars[Math.floor(Math.random()*chars.length)]
        pass += letter
    }
    return pass
}

function generatePass() {
    btn1.value = password()
    btn2.value = password()
    btn3.value = password()
    btn4.value = password()
}