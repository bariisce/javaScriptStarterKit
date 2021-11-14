function asalSayıyıBul(...sayilar)
{
    let asal=true
    for (let a = 0; a < sayilar.length; a++) 
    {
        for (let i = 2; i < sayilar[a]; i++) 
        {
            if(sayilar[a]%i==0)
            {
                asal=false
            }    
        }
        
        if(asal==true)
        {
            console.log("Sayı asal")
        }
        else
        {
            console.log("Sayı asal değil")
            asal=true
        }
    }
}
asalSayıyıBul(3,5,7,98,87,67,2)


