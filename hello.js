let rehber = [ 
{ isim: "Enes", numara: "123456789" }, 
{ isim: "Eren", numara: "987654321" }, 
{ isim: "Ege", numara: "534457687" } 
    ]; 
    
let secim = prompt("Rehber Uygulaması\n1. Kişi Ekle\n2. Kişi Bul\n3. Kişi Sil\n4. Çıkış\nSeçiminizi yapınız:");
    
if (secim === '1') 
{ let isim = prompt("Kişinin ismini giriniz."); 
let numara = prompt("Kişinin numarasını giriniz"); 
rehber[rehber.length] = { isim: isim, numara: numara }; 
} 
    
else if (secim === '2') { let isim = prompt("Aradığınız kişinin ismini giriniz."); let bulunanKisi = false; 
for (let i = 0; i < rehber.length; i++) 
{ if (rehber[i].isim.toLowerCase() === isim.toLowerCase()) 
{ console.log(`Bulunan Kişi: ${rehber[i].isim}, Telefon Numarası: ${rehber[i].numara}`); 
bulunanKisi = true; 
break; } } 
if (!bulunanKisi) { console.log(`${isim} rehberde bulunamadı.`); } 
    } 
    
else if (secim === '3') { let silinenKisi = prompt("Silmek İstediğiniz Kişinin Adını Girin"); 
let bulunanKisi = false; for (let i = 0; i < rehber.length; i++) { if (rehber[i].isim.toLowerCase() === silinenKisi.toLowerCase()) { rehber.splice(i, 1); console.log(`${silinenKisi} rehberden silindi.`); 
console.log("Güncel Rehber:", rehber); 
bulunanKisi = true; break; } } if (!bulunanKisi) 
{ console.log("Silmek istenen kişi bulunamadı"); } } 
    
    else 
    { console.log("Çıkış yapılıyor"); }
    