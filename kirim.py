import requests

data = {
    "nisn": "252008003",
    "tanggal": "17-07-2006",
    "nama": "Aira Alerta Berliana",
    "status": "LOLOS",
    "divisi": "Sosial dan Dakwah"
}

res = requests.post("http://127.0.0.1:5000/tambah", json=data)
print(res.json())
