
function autoNext(input, nextId) {
    if (input.value.length >= input.maxLength) {
        document.getElementById(nextId).focus(); //setelah digit NIR terpenuhi, langsung enter ke tanggal lahir
    }
}

function nextTanggal(current, nextId) {
    if (current.value.length === current.maxLength) {
        document.getElementById(nextId).focus();
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

function cekHasil() { //fungsi cek hasil menggunakan ID di HTML
    const nisn = document.getElementById("nisn").value.trim();
    const hari = document.getElementById("tanggal-hari").value.padStart(2, "0");
    const bulan = document.getElementById("tanggal-bulan").value.padStart(2, "0");
    const tahun = document.getElementById("tanggal-tahun").value;
    const tanggal = `${hari}-${bulan}-${tahun}`;


    fetch("http://127.0.0.1:5000/cek", {
        method: "POST", 
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({ nisn, tanggal })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            if (data.status === "LOLOS") {
            window.location.href =`lolos.html?nisn=${encodeURIComponent(data.nisn)}&tanggal=${encodeURIComponent(data.tanggal)}&nama=${encodeURIComponent(data.nama)}&divisi=${encodeURIComponent(data.divisi)}`;
            } else {
                window.location.href =`tidaklolos.html?nisn=${encodeURIComponent(data.nisn)}&tanggal=${encodeURIComponent(data.tanggal)}&nama=${encodeURIComponent(data.nama)}`;
            }
        } else {
            alert(data.message);
            }
        })
        .catch (() => alert("Gagal menghubungi server."))
}
