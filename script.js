  function kasir() {
   var nama = document.getElementById('nama').value;
   var jumlah_beli =  parseInt(document.getElementById('jumlah').value);
   var pil = document.getElementById("barang2").value;
        document.getElementById("harga2").value=pil;
   var pembayaran =  parseInt(document.getElementById('bayar').value);
   var discount = Number(document.getElementById('discount').value) / 100;
   var jumlah_harga = pil * jumlah_beli;
    document.getElementById('total2').value = jumlah_harga;
   
   
   var jumlah_harga = pil * jumlah_beli - (pil * jumlah_beli * discount);
    document.getElementById('total').value = jumlah_harga;

   var kembali = pembayaran - jumlah_harga;
    document.getElementById('total1').value = kembali;
  
   var cetak = "Name    : "+nama+"</br>"+
                      "Quantity  : "+jumlah_beli+"</br>"+
                      "Total  : "+"$"+jumlah_harga+"</br>"+
                      "Total Received : "+"$"+pembayaran+"</br>"+
                      "Change  : "+"$"+kembali;
    document.getElementById("cetak").innerHTML=cetak;
  }
