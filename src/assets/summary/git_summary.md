# **(2) Version Control and Branch Management (Git)**

## **Resume**

Dalam materi ini, mempelajari:
1. Versioning, Git dan GitHub
2. Penggunaan Git & GitHub
3. Workflow Collaboration

### **Versioning, Git dan GitHub**
**Versioning**\
Mengatur versi dari source code program.\
**Git**\
Salah satu version control system popular yang digunakan para developer untuk mengembangkan software secara bersama-sama.\
**GitHub**\
Salah satu layanan yang popular untuk menyimpan repositori secara remote.

### **Penggunaan Git & GitHub**
Beberapa contoh penggunaan Git & GitHub, di antaranya:
- **Git Install**\
Digunakan untuk menginstall Git pada komputer.
- **Git Init**\
Digunakan untuk membuat repositori pada lokal.
- **Git Clone**\
Digunakan untuk membuat salinan repositori ke lokal.
- **Git Config**\
Digunakan untuk mengkonfigurasi repositori git, seperti menentukan nama dan email.
- **Git Add**\
Digunakan untuk menambahkan file baru ke repositori yang awalnya masih di Working Directory berpindah ke Staging Area.
- **Git Commit**\
Digunakan untuk menyimpan perubahan yang ada di Staging Area, tetapi belum masuk ke remote repositori.
- **Git Push**\
Digunakan untuk mengirim perubahan yang telah disimpan ke remote repositori.
- **Git Diff**\
Digunakan untuk memperlihatkan perubahan apa yang terjadi pada repositori.
- **Git Stash**\
Digunakan untuk merekam/menyimpan titik tertentu pada working directory sehingga titik yang kita simpan tidak akan hilang.
- **Git Log**\
Digunakan untuk melihat catatan log dari perubahan yang telah kita lakukan.
- **Git Checkout**\
Digunakan untuk berpindah dari branch satu ke branch yang lain.
- **Git Reset**\
Digunakan untuk menghapus perubahan yang telah dilakukan.
- **Git Fetch**\
Digunakan untuk mengambil commit terbaru tetapi tidak melakukan merge dengan branch yang aktif
- **Git Pull**\
Digunakan untuk mengambil commit terbaru dan melakukan merge dengan branch yang aktif
- **Git Branch**\
Digunakan untuk membuat beberapa cabang/branch baru yang terpisah dari branch utama.
- **Git Merge**\
Digunakan untuk menggabungkan branch atau cabang menjadi satu kembali
- **Pull Request**\
Merupakan suatu permintaan untuk menggabungkan (merge) source code yang telah kita buat ke suatu branch.

### **Workflow Collaboration**
Cara terbaik dalam berkolaborasi dalam mengembangkan suatu aplikasi yaitu dengan flow seperti ini:
![Flow terbaik dalam pengembangan aplikasi](/summary-img/flow.JPG)

Tips:
1. Jangan mengganggu branch master (master hanya untuk hasil akhir pada tahap production).
2. Hindari merubah langsung pada branch development (buka branch baru untuk pembuatan fitur).
3. Gabungkan branch fitur hanya pada branch development.
4. Gabungkan branch development ke brach master hanya ketika semua sudah selesai.

## **Task**

### 1. Menampilkan hasil dari pembuatan repositori, pembuatan branch dan merge pada branch lain
\
Hasil dari praktikum:\
![Screenshot Insight-Network Tugas GitHub](./screenshots/github_insights-network.JPG)
\
Link repositori tugas GitHub:\
https://github.com/MalvinoTan/tugas-github.git
