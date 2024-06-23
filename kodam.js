function cekKhodam() {
    const nameInput = document.getElementById("nameInput").value;
    if (!nameInput) {
        Swal.fire({
            title: "HARUS DI ISI NAMA DULU KAK!",
            icon: "error",
            confirmButtonText: "OK!",
        });
        return;
    }
    document.getElementById("loading").style.display = "block"; // Tampilkan spinner
    setTimeout(() => {
        const khodams = [
            { name: "Pak Vincent" },
            { name: "Kak Gem" },
            { name: "Admin Slot" },
            { name: "Tunggu Kiris" },
            { name: "Kosong" },
            { name: "Kosong" },
            { name: "Kosong" },
            { name: "Kosong" },
            { name: "Kosong" },
            { name: "Badut" },
            { name: "Sigma" },
            { name: "Skibidi Toilet" },
            { name: "Saber Roam" },
            { name: "Banteng Merah" },
            { name: "Pler Berdebu" },
            { name: "Second Choice" },
            { name: "Dark System" },
            { name: "Anggur Merah" },
            { name: "Alok" },
            { name: "Pohon Pisang" },
            { name: "Sabun Bolong" },
            { name: "Tali Jagat" },
            { name: "Kopi Tumpah" },
            { name: "Indomie" },
            { name: "Gitar Spanyol" },
            { name: "Sprei Gratis" },
            { name: "Honda Brio" },
            { name: "Indihome" },
            { name: "Minyak Urut" },
            { name: "Pelawak Handal" },
            { name: "Wak Rusdi" },
            { name: "Sungut Lele" },
            { name: "Gunung Kembar" },
            { name: "Uni Bakwan" },
            { name: "Janda Pirang" },
            { name: "Warung Madura" },
            { name: "Tuyul Sixpack" },
            { name: "Gundam" },
            { name: "Kunci Inggris" },
            { name: "Kotak Amal" },
            { name: "Tobrut Jahat" },
            { name: "Tobrut Baik" },
            { name: "Talenan" },
            { name: "Tang Potong" },
            { name: "Tengkorak Hidup" },
            { name: "Jawir" },
            { name: "Kelly Epep" },
            { name: "Tahu Isi" },
            { name: "Ikan Lohan" },
            { name: "Nasi Goreng" },
            { name: "Om Om Pedo" },
            { name: "Singa Dangdut" },
            { name: "Badak Jawa" },
            { name: "Roger Sumatera" },
            { name: "Katak Bhizer" },
            { name: "Tang Karat" },
            { name: "Kapal Goyang" },
            { name: "Babi Ngepet" },
            { name: "Kursi Lipat" },
            { name: "Upin Ipin" },
            { name: "Jordi" },
            { name: "Revo Koperasi" },
            { name: "Mio Mirza" },
            { name: "Sigit Rendang" },
            { name: "Slamet Kopling" },
            { name: "Sandal Swallow" },
            { name: "Sempak Gusion" },
            { name: "Panther" },
            { name: "Traktor" },
            { name: "Botak Citer" },
            { name: "Naga Hitam" },
            { name: "Kuda Lepas" },
            { name: "Sarung Wadimor" },
            { name: "kopi luwak" },
            // Tambahkan khodam lainnya sesuai kebutuhan
        ];
        const khodam = khodams[Math.floor(Math.random() * khodams.length)];
        document.getElementById("khodamName").innerText = `Khodam Anda: ${khodam.name}`;
        document.getElementById("result").style.display = "block";
        document.getElementById("loading").style.display = "none"; // Sembunyikan spinner
    }, 2000); // Delay untuk simulasi loading
}

function resetForm() {
    document.getElementById("nameInput").value = "";
    document.getElementById("result").style.display = "none";
}
