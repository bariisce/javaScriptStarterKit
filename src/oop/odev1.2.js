function arkadasSayiSorgula(sayi1,sayi2) 
{
    let sayi1Toplam=0
    let sayi2Toplam=0

    for (let i = 1; i < sayi1 ; i++) 
    {
        if(sayi1%i==0)
        {
            sayi1Toplam+=i
        }
    }

    for (let j = 1; j < sayi2; j++) 
    {
        if(sayi2%j==0)
        {
            sayi2Toplam+=j
        }
    }

    if(sayi1Toplam==sayi2 && sayi2Toplam==sayi1)
    {
        console.log("Sayılar arkadaştır")
    }
    else
    {
        console.log("Sayılar arkadaş değildir")
    }
}

arkadasSayiSorgula(5,10)
arkadasSayiSorgula(220,284)







//Arkadaş Sayı : kendilerinin bölenlerinin toplamı diğer sayıyı veriyorsa iki sayı arkadaştır