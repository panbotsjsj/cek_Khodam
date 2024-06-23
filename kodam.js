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
            { name: "Skibidi" },
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
