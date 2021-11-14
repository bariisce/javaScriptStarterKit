let sayi
let i

for (sayi = 1; sayi < 1000; sayi++) 
{
    let sayiToplam=0
    for (i = 1; i < sayi; i++) 
    {
        if(sayi%i==0)
        {
            sayiToplam+=i
        }
    }

    if(sayi==sayiToplam)
    {
        console.log(sayi)
    }
}





//Mükemmel Sayı : Kendisi haricindeki tüm pozitif bölenlerin toplamı kendisine eşit olan sayı.