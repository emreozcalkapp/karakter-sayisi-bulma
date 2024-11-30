let kullaniciMetni = prompt("Metninizi giriniz.");
let kullaniciHarf = prompt("Kaç adet olduğunu bilmek istediğiniz harfi giriniz.");
let harfSayisi = kullaniciMetni.split(kullaniciHarf).length -1;
alert("Girdiğiniz metinde" + " " + kullaniciHarf + " " + "harfi" + " " + harfSayisi + " " + "adet geçmektedir.");
