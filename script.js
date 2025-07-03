
// Sekedar simulasi
const data = [
    { nisn: "0073358763", tanggal: "25-09-2006", nama: "Abidah Ramadani", status: "LOLOS" },
    { nisn: "0073358764", tanggal: "06-12-2006", nama: "Affan Ikhsani An Naba", status: "LOLOS" },
    { nisn: "0073358765", tanggal: "17-07-2008", nama: "Aira Alerta Berliana", status: "TIDAK LOLOS" },
    { nisn: "0073358766", tanggal: "04-04-2010", nama: "Aisyah Faqih Hatul Ulum", status: "TIDAK LOLOS" },
    { nisn: "0073358767", tanggal: "05-12-2010", nama: "Akila Putri Alfiani", status: "TIDAK LOLOS" },
    // bisa ditambahkan data lagi
];

function autoNext(input, nextId) {
    if (input.value.length >= 10) {
        document.getElementById(nextId).focus(); //setelah digit NIR terpenuhi, langsung enter ke tanggal lahir
    }
}

function cekEnter(event, nextId) { //setelah NIR dan tanggal terpenuhi, bisa cek hasil dengan tekan enter
    if (event.key === "Enter") {
        event.preventDefault();
        const currentInput = event.target.value.trim();
        if (currentInput !== "") {
            if (nextId === "submit") {
                cekHasil();
            } else {
                document.getElementById(nextId).focus();
            }
        }
    
    }
}

function formatDateToID(dateStr) { // fortmat kalender 
    const date = new Date(dateStr);
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
}

function cekHasil() { //fungsi cek hasil menggunakan ID di HTML
    const nisn = document.getElementById("nisn").value.trim();
    const tanggalRaw = document.getElementById("tanggal").value;
    const tanggal = formatDateToID(tanggalRaw);
    const hasilDiv = document.getElementById("hasil");

    const peserta = data.find(item=> item.nisn === nisn && item.tanggal === tanggal);

    if (peserta) {
        const ucapan = peserta.status === "LOLOS" ? // ? "True" : "False"
        "<br><br> SELAMAT! semoga dapat menjalankan tugas dengan amanah dan tanggung jawab." :
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
