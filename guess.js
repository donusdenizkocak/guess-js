//* Önce 1-100 arası random bir sayı üret.
//* input ve button elementlerini seçmemiz lazım
//* button elementine click eventi ekleyeceğiz
//* input alanına girilen değeri okuma kontrol etme aşaması
    //* birşey girilmemişse hata mesajı yazdıralım
    //* tahminin doğru olma durumuda:
        //* arka plan rengi yeşil olsun
        //* tebrikler mesajını yazdırcaz
        //* en yüksek kontrolünü yapacağız
//? score ve en yüksek skor için 2 değişken tanımlamamız lazım

    //* tahmin doğru değilse:
        //* score ve hakkı 1 azaltacağız
        //* tahmin kontrolü yap, arttır azalt mesajı yayınla
        //* score-hak ==0 ise, kaybettiniz yazısı
//* play again butonuna basılması durumu:

let randomNumber = Math.round(Math.random()*100)
console.log(randomNumber);

const inputElement = document.querySelector(".guess-input")
const buttonElement = document.querySelector(".guess-button")
const messageElement = document.querySelector(".message-display")
const chanceElement = document.querySelector(".chances-area")
const containerElement = document.querySelector("#container")
const scoreElement = document.querySelector(".score-area")
const highScoreElement = document.querySelector(".highestscore-area")
const againButton = document.querySelector(".again-button")



let score = 10;
let highestScore =0;

scoreElement.textContent = score;
highScoreElement.textContent = highestScore

const displayMessage = (msg) => {
    messageElement.textContent = msg;
}

buttonElement.addEventListener("click", ()=>{
    let guess = inputElement.value;
    if(!guess){
        // messageElement.textContent = "Lütfen Geçerli Bir Giriş Yapınız";
        displayMessage("Lütfen Geçerli Bir Giriş Yapınız")
    }
    else if(Number(guess) === randomNumber){
        containerElement.className = "bg-green";
        // messageElement.textContent = "Tebrikler Bildiniz!"
        displayMessage("Tebrikler Bildiniz!")
        if(score > highestScore){
            highestScore = score
            highScoreElement.textContent = highestScore
        }
        buttonElement.disabled = true;
        chanceElement.textContent = "";
    }
    else{
        score -= 1;
        if(score>0){
            if(Number(guess)>randomNumber){
                // messageElement.textContent = `Azaltın, Kullanıcının Girdiği Sayı: ${guess}`
                displayMessage(`Azaltın, Kullanıcının Girdiği Sayı: ${guess}`)
                
            }
            else{
                // messageElement.textContent = `Arttırın, Kullanıcının Girdiği Sayı: ${guess}`
                displayMessage(`Arttırın, Kullanıcının Girdiği Sayı: ${guess}`)
            }
            chanceElement.textContent = `Kalan Hak Sayısı: ${score}`
        }
        else{
            // messageElement.textContent = "Kaybettiniz";
            displayMessage("Kaybettiniz")
            containerElement.className = "bg-red";
            buttonElement.disabled = true;
            chanceElement.textContent = "";
        }
      
    }
    scoreElement.textContent = score;
    inputElement.value = "";
})
inputElement.addEventListener("keydown",(e)=>{ 
    if(e.keyCode === 13){
        buttonElement.click()
    }
})

againButton.addEventListener("click", ()=>{
    randomNumber =  Math.round(Math.random()*100)
    console.log(randomNumber);
    containerElement.className = "bg-begin"
    // messageElement.textContent = "Start Guessing..";
    displayMessage("Start Guessing..")
    buttonElement.disabled = false;
    chanceElement.textContent = "";
    score = 10;
    scoreElement.textContent = score
})