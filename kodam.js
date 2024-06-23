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
            { name: "Pak Vincent", meaning: "Kamu orang dua, sama kont*l satu" },
            { name: "Kak Gem", meaning: "Suka Berkata kata, PAHAMM?!!" },
            { name: "Admin Slot", meaning: "Selalu memberikan harapan palsu" },
            { name: "Tunggu Kiris", meaning: "kamu memiliki sosok tunggu kiris yang melindungi mu" },
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
