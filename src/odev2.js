//Asal mı değil mi?
function isPrime(...numbers) {        
    if ( numbers <1 || numbers == 0 || numbers ==1) {
        console.log(numbers + " Geçersiz sayı girdiniz")
    }
    else{
        for(let i=2; i<numbers; i++){
            if(numbers % i== 0){
            return false 
            }
        }
        return true
    }
}
    function findPrime(...numbers) {
        for(let i = 0; i < numbers.length; i++) {
            if(isPrime(numbers[i])){
                console.log( numbers[i] + " Asaldır")
            }
            else{
                console.log( numbers[i] + " Asal değildir")
            }

        }

    }
findPrime(-2,1,8,21,13) 
findPrime(0,5)

//Arkadaş sayı mı?En küçük arkadaş sayılar 220 284'tür.
function findFriendNumber(number1,number2){
let total1 = 0
let total2 = 0

    for(let i=0; i<number1; i++){
        if(number1 % i == 0){
        total1 += i
        }
    }
    for(let j=0; j<number2; j++){
        if(number2 % j == 0){
        total2 += j
        }
    }
    if(number1==total2 && number2== total1){
        console.log( number1 + "," + number2 +" Arkadaş sayılardır")
    }
    else{
        console.log( number1 + "," + number2 +" Arkadaş sayı değillerdir")
    }
}
findFriendNumber(12,33)
findFriendNumber(220,284)

//1000'e kadar mükemmel sayılar
console.log("MÜKEMMEL SAYILARI YAZDIRMA")
function percfectNumbers(limit) {

    for(let number= 1; number<=1000; number++){
        let total = 0
       for(let i= 1; i<number; i++){
           if (number%i == 0){
               total +=i
           }
       }
       if (total==number){
        console.log([number] + " Mükemmel sayı")
       }
    }
} 
percfectNumbers(1000)

//1000'e kadar asal sayılar
console.log("ASAL SAYILAR")
function primeNumbers(limit) {
    for(let i=2;i<limit;i++){
        let prime=true
        for(let j=2;j<i;j++){
            if(i%j==0)
            prime=false
        }
        if(prime)
         console.log(i)
    }
}
primeNumbers(1000)