
// Sekedar simulasi
const data = [
    { nisn: "123", tanggal: "01-01-2007", nama: "Ckckckck", status: "LOLOS" },
    { nisn: "111", tanggal: "02-02-2007", nama: "Hahahah", status: "LOLOS" },
    { nisn: "222", tanggal: "03-03-2009", nama: "Heheheheh", status: "TIDAK LOLOS" },
    { nisn: "321", tanggal: "04-04-2010", nama: "Wkwkwkw", status: "TIDAK LOLOS"}
    
    
    
    
    // bisa ditambahkan data lagi
];

function cekHasil() {
    const nisn = document.getElementById("nisn").value.trim();
    const tanggal = document.getElementById("tanggal").value.trim();
    const hasilDiv = document.getElementById("hasil");

    const peserta = data.find(item=> item.nisn === nisn && item.tanggal === tanggal);

    if (peserta) {
        const ucapan = peserta.status === "LOLOS" ? 
        "<br><br> SELAMAT semoga dapat menjalankan tugas dengan amanah dan tanggung jawab." :
        "<br><br> tetap SEMANGAT dan jangan putus asa.";

        hasilDiv.innerHTML = `${peserta.nama} dinyatakan <br><br>${peserta.status}${ucapan}`;
        hasilDiv.className = `result ${peserta.status === "LOLOS" ? "lolos" : "tidak-lolos"}`;
        hasilDiv.style.display = "block";
    } else {
        hasilDiv.innerHTML = "Data tidak ditemukan. Mohon periksa kembali Nomor HP dan Tanggal Lahir.";
        hasilDiv.className = "result tidak-lolos"
        hasilDiv.style.display = "block";
    }
}
