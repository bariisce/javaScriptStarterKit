for (let i = 2; i < 1000; i++) 
{ 
    let asalSayi = 0;

    for (let j =2; j < i; j++) 
    {
        if(i% j == 0)
        {
            asalSayi++;    
        }
    }

    if (asalSayi == 0) 
    {
        console.log(i+ " asal sayıdır.") 
    }
}