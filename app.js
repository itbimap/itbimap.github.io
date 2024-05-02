const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const searchInput = document.querySelector("#search-input");
const searchFilter = document.querySelectorAll(".button-value");
var activeFilter = "";

hamburger.addEventListener('click', ()=>{
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
    hamburger.classList.toggle("toggle");
});

let rooms = {
    labtekv : [
        {
            roomName: "FTI",
            category: "Ruang Umum",
            location: "Lantai 1",
            description: "Kantor FTI",
            image: "images/fti.png",

        },
        {
            roomName: "FTMD - 4108",
            category: "Ruang Kelas",
            location: "Lantai 1",
            description: "Ruang kuliah FTMD",
            image: "images/ftmd4108.png",
        },
        {
            roomName: "Ruang 9306",
            category: "Ruang Kelas",
            location: "Lantai 1",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9306.png",
        },
        {
            roomName: "Mushola",
            category: "Mushola",
            location: "Lantai 1",
            description: "Tempat beribadah bagi umat muslim",
            image: "images/mushola.png",
        },
        {
            roomName: "Sekretariat HMIF",
            category: "Himpunan",
            location: "Lantai 1",
            description: "Ruang untuk mahasiswa HMIF berkumpul",
            image: "images/sekrehmif.png",
        },
        {
            roomName: "Ruang 9315",
            category: "Ruang Kelas",
            location: "Lantai 1",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9315.png",
        },
        {
            roomName: "Lift",
            category: "Lift",
            location: "Lantai 1",
            description: "Sarana berpindah lantai",
            image: "images/lift.jpg",
        },
        {
            roomName: "Ruang 7601",
            category: "Ruang Kelas",
            location: "Lantai 1",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/7601.png",
        },
        {
            roomName: "Toilet",
            category: "Toilet",
            location: "Lantai 1",
            description: "Tempat buang air, mencuci tangan, dan mencuci muka",
            image: "images/toiletw.jpg",
        },
        {
            roomName: "Ruang 9301",
            category: "Ruang Kelas",
            location: "Lantai 1",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9301.jpg",
        },
        {
            roomName: "Kantin Labtek 5",
            category: "Kantin",
            location: "Lantai 1",
            description: "Tempat beristirahat, membeli makanan, dan membeli minuman",
            image: "images/kantinlabtek5.jpg",
        },
        {
            roomName: "Ruang 9303",
            category: "Ruang Kelas",
            location: "Lantai 1",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9303.jpg",
        },
        {
            roomName: "Ruang 9304",
            category: "Ruang Kelas",
            location: "Lantai 1",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9304.jpg",
        },
        {
            roomName: "Ruang 9305",
            category: "Ruang Kelas",
            location: "Lantai 1",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/9305.jpg",
        },
        {
            roomName: "Ruang Petugas Kelas",
            category: "Ruang Umum",
            location: "Lantai 1",
            description: "-",
            image: "images/ruangpetugaskelas.jpg",
        },
        {
            roomName: "Lift",
            category: "Lift",
            location: "Lantai 2",
            description: "Sarana berpindah lantai",
            image: "images/glift2.png",
        },
        {
            roomName: "Ruang Penelitian",
            category: "Ruang Penelitian",
            location: "Lantai 2",
            description: "Tempat kegiatan penelitian",
            image: "images/gruangpenelitian2.jpg",
        },
        {
            roomName: "Ruang Seminar",
            category: "Ruang Kelas",
            location: "Lantai 2",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/gruangseminar2.png",
        },
        {
            roomName: "Lab Programming Basis Data",
            category: "Lab",
            location: "Lantai 2",
            description: "Tempat untuk kegiatan programming basis data",
            image: "images/glabprogrammingbasdat2.jpg",
        },
        {
            roomName: "Ruang Akademik STEI",
            category: "Office",
            location: "Lantai 2",
            description: "Tempat mengurus seluruh kegiatan akademik",
            image: "images/gruangakademikstei2.jpg",
        },
        {
            roomName: "Lab RPL",
            category: "Lab",
            location: "Lantai 2",
            description: "Tempat melakukan Rekayasa Perangkat Lunak",
            image: "images/glabrpl2.jpg",
        },
        {
            roomName: "Lab Komputer",
            category: "Lab",
            location: "Lantai 2",
            description: "Tempat untuk riset komputer",
            image: "images/glabkomputer2.jpg",
        },
        {
            roomName: "Ruang Pertemuan",
            category: "Ruang Umum",
            location: "Lantai 2",
            description: "Tempat diskusi civitas STEI",
            image: "images/gruangpertemuan2.jpg",
        },
        {
            roomName: "Ruang Rapat Dekan (Kantor Ketua Prodi)",
            category: "Office",
            location: "Lantai 2",
            description: "Tempat dekan STEI melakukan rapat ataupun diskusi akademik",
            image: "images/gruangrapatdekan2.jpg",
        },
        {
            roomName: "Ruang Arsip",
            category: "Ruang Alat",
            location: "Lantai 2",
            description: "Tempat untuk menyimpan arsip-arsip perkuliahan tahun-tahun sebelumnya",
            image: "images/gruangarsip2.jpg",
        },
        {
            roomName: "Gudang",
            category: "Ruang Alat",
            location: "Lantai 2",
            description: "Tempat untuk menyimpan arsip-arsip perkuliahan tahun-tahun sebelumnya",
            image: "images/ggudang2.jpg",
        },
        {
            roomName: "Tata Usaha (TU)",
            category: "Office",
            location: "Lantai 2",
            description: "Tempat untuk melakukan aktivitas administrasi dan tata usaha",
            image: "images/gtu2.jpg",
        },
        {
            roomName: "Lab Basis Data",
            category: "Lab",
            location: "Lantai 2",
            description: "Tempat untuk Mahasiswa melakukan praktikum",
            image: "images/glabbasdat2.png",
        },
        {
            roomName: "Ruang 7602",
            category: "Ruang Kelas",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/7602.png",
        },
        {
            roomName: "Perpustakaan",
            category: "Perpustakaan",
            location: "Lantai 3",
            description: "Tempat untuk membaca dan meminjam buku",
            image: "images/gperpustakaan3.png",
        },
        {
            roomName: "Ruang 7603",
            category: "Ruang Kelas",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/g7603.png",
        },
        {
            roomName: "Ruang 7604",
            category: "Ruang Kelas",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/g7604.png",
        },
        {
            roomName: "Ruang 7605",
            category: "Ruang Kelas",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/g7605.png",
        },
        {
            roomName: "Ruang Rapat",
            category: "Ruang Umum",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan rapat",
            image: "images/gruangrapat3.jpg",
        },
        {
            roomName: "Ruang Server",
            category: "Ruang Alat",
            location: "Lantai 3",
            description: "Tempat menyimpan server",
            image: "images/gruangserver3.jpg",
        },
        {
            roomName: "Ruang OSSC",
            category: "Ruang Umum",
            location: "Lantai 3",
            description: "-",
            image: "images/gruangossc3.jpg",
        },
        {
            roomName: "Ruang Dosen",
            category: "Office",
            location: "Lantai 3",
            description: "Tempat dosen bekerja",
            image: "images/gruangdosen3.jpg",
        },
        {
            roomName: "Ruang SDM",
            category: "Ruang Umum",
            location: "Lantai 3",
            description: "-",
            image: "images/gruangsdm3.jpg",
        },
        {
            roomName: "Ruang Penelitian Flu Burung",
            category: "Ruang Penelitian",
            location: "Lantai 3",
            description: "Tempat melakukan penelitian",
            image: "images/gruangpenelitianfluburung3.jpg",
        },
        {
            roomName: "Ruang Penelitian",
            category: "Ruang Penelitian",
            location: "Lantai 3",
            description: "Tempat melakukan penelitian",
            image: "images/gruangpenelitian3.jpg",
        },
        {
            roomName: "Bengkel",
            category: "Ruang Alat",
            location: "Lantai 3",
            description: "-",
            image: "images/gbengkel3.jpg",
        },
        {
            roomName: "Gudang",
            category: "Ruang Alat",
            location: "Lantai 3",
            description: "Tempat menyimpan alat-alat/arsip-arsip",
            image: "images/ggudang3.jpg",
        },
        {
            roomName: "Ruang 7606",
            category: "Ruang Kelas",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/g7606.png",
        },
        {
            roomName: "Gudang",
            category: "Ruang Alat",
            location: "Lantai 3",
            description: "Tempat untuk Mahasiswa melakukan praktikum",
            image: "images/ggudang33.jpg",
        },
        {
            roomName: "Lab MIC",
            category: "Lab",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/glabmic3.jpg",
        },
        {
            roomName: "Lab Dasar",
            category: "Lab",
            location: "Lantai 3",
            description: "Tempat untuk Mahasiswa melakukan praktikum",
            image: "images/glabdasar3.jpg",
        },
        {
            roomName: "Ruang Dosen",
            category: "Office",
            location: "Lantai 3",
            description: "Tempat dosen bekerja",
            image: "images/gruangdosen33.jpg",
        },
        {
            roomName: "Lab Sistem Informatika",
            category: "Lab",
            location: "Lantai 3",
            description: "Tempat untuk Mahasiswa melakukan praktikum",
            image: "images/glabsisteminformatika3.jpg",
        },
        {
            roomName: "Ruang Diskusi",
            category: "Ruang Umum",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan diskusi",
            image: "images/gruangdiskusi3.jpg",
        },
        {
            roomName: "Mushola",
            category: "Mushola",
            location: "Lantai 3",
            description: "Tempat beribadah bagi umat muslim",
            image: "images/9304.jpg",
        },
        {
            roomName: "Ruang 7607",
            category: "Ruang Kelas",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/g7607.jpg",
        },
        {
            roomName: "Ruang 7608",
            category: "Ruang Kelas",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/g7608.jpg",
        },
        {
            roomName: "Ruang 7609",
            category: "Ruang Kelas",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/g7609.png",
        },
        {
            roomName: "Ruang 7610",
            category: "Ruang Kelas",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/g7610.png",
        },
        {
            roomName: "Ruang Pengembangan Kompetensi Mahasiswa",
            category: "Ruang Umum",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/gruangpengembangankompetensimahasiswa.jpg",
        },
        {
            roomName: "Lab Sister",
            category: "Lab",
            location: "Lantai 4",
            description: "Tempat untuk Mahasiswa melakukan praktikum",
            image: "images/glabsister4.png",
        },
        {
            roomName: "Ruang Server",
            category: "Ruang Alat",
            location: "Lantai 4",
            description: "Tempat menyimpan server",
            image: "images/gruangserver4.jpg",
        },
        {
            roomName: "Mushola",
            category: "Mushola",
            location: "Lantai 4",
            description: "Tempat beribadah bagi umat muslim",
            image: "images/9304.jpg",
        },
        {
            roomName: "Lab IRK",
            category: "Lab",
            location: "Lantai 4",
            description: "Tempat untuk Mahasiswa melakukan praktikum",
            image: "images/glabirk4.png",
        },
        {
            roomName: "Dapur",
            category: "Ruang Umum",
            location: "Lantai 4",
            description: "Tempat memasak",
            image: "images/gdapur4.jpg",
        },
        {
            roomName: "Lab LPL",
            category: "Lab",
            location: "Lantai 4",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/glablpl4.jpg",
        },
        {
            roomName: "Ruang Diskusi",
            category: "Ruang Umum",
            location: "Lantai 4",
            description: "Tempat untuk melaksanakan diskusi",
            image: "images/gruangdiskusi4.jpg",
        },
        {
            roomName: "Lab Dasar",
            category: "Lab",
            location: "Lantai 4",
            description: "Tempat untuk Mahasiswa melakukan praktikum",
            image: "images/glabdasar4.jpg",
        },
        {
            roomName: "HMS",
            category: "Himpunan",
            location: "Lantai 4",
            description: "Tempat untuk mahasiswa himpunan HMIF berkumpul",
            image: "images/ghms4.jpg",
        },
        {
            roomName: "Gudang",
            category: "Ruang Alat",
            location: "Lantai 4",
            description: "Tempat menyimpan alat-alat/arsip-arsip",
            image: "images/ggudang4.jpg",
        },
        {
            roomName: "Ruang Rapat",
            category: "Ruang Umum",
            location: "Lantai 4",
            description: "Tempat untuk melakukan rapat",
            image: "images/gruangrapat4.png",
        },
        {
            roomName: "Tata Usaha (TU)",
            category: "Office",
            location: "Lantai 4",
            description: "Tempat mengurus administrasi dan tata usaha",
            image: "images/gtu4.jpg",
        },
        {
            roomName: "Ruang Multimedia",
            category: "Ruang Alat",
            location: "Lantai 4",
            description: "Tempat alat-alat multimedia",
            image: "images/gruangmultimedia4.jpg",
        },
        {
            roomName: "Lab GAIB",
            category: "Lab",
            location: "Lantai 4",
            description: "Digunakan Mahasiswa untuk Praktikum",
            image: "images/glabgaib4.png",
        },
        {
            roomName: "Ruang Residensi S3",
            category: "Ruang Mahasiswa",
            location: "Lantai 4",
            description: "Digunakan oleh Mahasiswa S3",
            image: "images/gruangresidensis34.jpg",
        },

    ],

    koica : [
        {
            roomName: "Multipurpose Hall",
            category: "Ruang Umum",
            location: "Lantai 1",
            description: "Ruang Serbaguna",
            image: "images/kmultipurposehall1.jpg",
        },
        {
            roomName: "Kantor Staff",
            category: "Office",
            location: "Lantai 1",
            description: "Tempat staff bekerja",
            image: "images/koffice1.jpg",
        },
        {
            roomName: "Toilet",
            category: "Toilet",
            location: "Lantai 1",
            description: "Tersedia toilet untuk Laki-laki, wanita, dan penyandang disabilitas",
            image: "images/ktoilet1.jpg",
        },
        {
            roomName: "Lift",
            category: "Lift",
            location: "Lantai 1",
            description: "Sarana berpindah lantai",
            image: "images/klift1.jpg",
        },
        {
            roomName: "Internet Plaza",
            category: "Ruang Umum",
            location: "Lantai 1",
            description: "Tempat praktikum komputasi",
            image: "images/ginternetplaza1.jpg",
        },
        {
            roomName: "KOICA Co-Working Space",
            category: "Co-Working Space",
            location: "Lantai 1",
            description: "Tempat belajar dan berdiskusi untuk mahasiswa STEI ITB",
            image: "images/kcoworkingspace1.jpg",
        },
        {
            roomName: "Kantin",
            category: "Kantin",
            location: "Lantai 1",
            description: "Tempat membeli makanan, minuman, dan snack",
            image: "images/kkantin1.jpg",
        },
        {
            roomName: "Mushola",
            category: "Mushola",
            location: "Lantai 2",
            description: "Tempat beribadah bagi umat muslim",
            image: "images/kmushola2.jpg",
        },
        {
            roomName: "Toilet",
            category: "Toilet",
            location: "Lantai 2",
            description: "Tersedia toilet untuk Laki-laki, wanita, dan penyandang disabilitas",
            image: "images/ktoilet2.jpg",
        },
        {
            roomName: "Lift",
            category: "Lift",
            location: "Lantai 2",
            description: "Sarana berpindah lantai",
            image: "images/klift2.jpg",
        },
        {
            roomName: "Seminar",
            category: "Ruang Kelas",
            location: "Lantai 2",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/kseminar2.jpg",
        },
        {
            roomName: "Lecture Room",
            category: "Ruang Kelas",
            location: "Lantai 2",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "images/klectureroom2.jpg",
        },
        {
            roomName: "Ruang Dosen",
            category: "Office",
            location: "Lantai 2",
            description: "Tempat dosen bekerja",
            image: "images/kruangdosen2.jpg",
        },
        {
            roomName: "Ruang Manajemen STEI",
            category: "Office",
            location: "Lantai 3",
            description: "Tempat mengurus manajemen STEI",
            image: "images/kruangmanajemenstei3.jpg",
        },
        {
            roomName: "Executive Director's Room",
            category: "Office",
            location: "Lantai 3",
            description: "Tempat Staff Executive Director STEI",
            image: "images/kexecutivedirectorsroom3.jpg",
        },
        {
            roomName: "Lab Blockchain",
            category: "Lab",
            location: "Lantai 3",
            description: "Tempat untuk melakukan penelitian",
            image: "images/klabblockchain3.jpg",
        },
        {
            roomName: "Toilet",
            category: "Toilet",
            location: "Lantai 3",
            description: "Tersedia toilet untuk Laki-laki, wanita, dan penyandang disabilitas",
            image: "images/ktoilet3.jpg",
        },
        {
            roomName: "Lift",
            category: "Lift",
            location: "Lantai 3",
            description: "Sarana berpindah lantai",
            image: "images/klift3.jpg",
        },
        {
            roomName: "Ruang Residensi S2 & TA S1",
            category: "Ruang Mahasiswa",
            location: "Lantai 3",
            description: "Tempat residensi bagi mahasiswa S2 & TA S1",
            image: "images/kresidensi3.jpg",
        },
        {
            roomName: "Ruang Residensi S3",
            category: "Ruang Mahasiswa",
            location: "Lantai 3",
            description: "Digunakan oleh mahasiswa S3",
            image: "images/kresidensis32.jpg",
        },
        {
            roomName: "Ruang Mitra Kerjasama",
            category: "Office",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan meeting dengan mitra kerja",
            image: "images/kmitrakerjasama3.jpg",
        },
        {
            roomName: "Lab Malware",
            category: "Lab",
            location: "Lantai 3",
            description: "Tempat untuk melakukan penelitian",
            image: "images/klabmalware3.jpg",
        },
        {
            roomName: "Lab Forensik Digital",
            category: "Lab",
            location: "Lantai 3",
            description: "Tempat untuk melakukan penelitian",
            image: "images/klabforensikdigital.jpg",
        },
        {
            roomName: "Lab Penetration Test",
            category: "Lab",
            location: "Lantai 3",
            description: "Tempat untuk melakukan penelitian",
            image: "images/klabpenetrationtest3.jpg",
        },
        {
            roomName: "Ruang Server",
            category: "Ruang Alat",
            location: "Lantai 3",
            description: "Tempat untuk menyimpan server",
            image: "images/kruangserver3.jpg",
        },
    ]
};

function populateSearch(i) {
    let cardcontainer = document.createElement("article");

    let card = document.createElement("section");
    card.classList.add("card");
    cardcontainer.appendChild(card);

    let container = document.createElement("div");
    container.classList.add("text-content");

    let name = document.createElement("h3");
    name.innerText = i.roomName;
    container.appendChild(name);

    let description = document.createElement("p");
    description.innerText = `Kategori: ${i.category}\nLokasi: ${i.location}\n\n${i.description}`;
    container.appendChild(description);
    card.appendChild(container);

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("visual");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    document.getElementById("rooms").appendChild(cardcontainer);
}

function searchRoom(queryName, categoryName="") {
    document.getElementById("rooms").innerHTML = "";
    for(let i of rooms[building]) {
        if (i.roomName.toLowerCase().indexOf(queryName.toLowerCase()) > -1 && (categoryName == "" ? true : i.category == categoryName)) {
            populateSearch(i);
        }
    }
}

searchInput.addEventListener("input", function(){
    searchRoom(searchInput.value, activeFilter);
});

searchFilter.forEach(filterbtn => {
    filterbtn.addEventListener("click", function(){
        var filterCategory = filterbtn.dataset.filter;
        if ([...filterbtn.classList].indexOf("active") > -1) {
            searchFilter.forEach(activefilter => {
                if ([...activefilter.classList].indexOf("active") > -1) {
                    activefilter.classList.remove("active");
                }
            });
            activeFilter = "";
            searchRoom(searchInput.value, activeFilter)
        } else {
            document.getElementById("rooms").innerHTML = "";
            searchFilter.forEach(activefilter => {
                if ([...activefilter.classList].indexOf("active") > -1) {
                    activefilter.classList.remove("active");
                }
            });
            filterbtn.classList.add("active");
            activeFilter = filterbtn.dataset.filter;
            for(let i of rooms[building]) {
                if (i.category == filterbtn.dataset.filter) {
                    populateSearch(i);
                }
            }
        }
    });
});

window.addEventListener("load", function(){
    searchRoom(searchInput.value);
});