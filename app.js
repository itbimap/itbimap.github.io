const s = (q) => {return document.querySelector(q)};
const a = (q) => {return document.querySelectorAll(q)};

$.fancybox.defaults.hash = false;
const searchFilter = a(".button-value");
var building = (window.location.hash.length > 0 ? window.location.hash.slice(1) : "labtekv");
if (!(window.location.hash.slice(1) == "labtekv" || window.location.hash.slice(1) == "koica")) {
    window.location.hash = "#labtekv";
}
var activeFilter = "";

s(".hamburger").addEventListener('click', ()=>{
    s(".nav-links").classList.toggle("open");
    a(".nav-links li").forEach(link => {
        link.classList.toggle("fade");
    });
    s(".hamburger").classList.toggle("toggle");
});

let rooms = {
    labtekv : [
        {
            roomName: "FTI",
            category: "Ruang Umum",
            location: "Lantai 1",
            description: "Kantor FTI",
            image: "fti.png",

        },
        {
            roomName: "FTMD - 4108",
            category: "Ruang Kelas",
            location: "Lantai 1",
            description: "Ruang kuliah FTMD",
            image: "ftmd4108.png",
        },
        {
            roomName: "Ruang 9306",
            category: "Ruang Kelas",
            location: "Lantai 1",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "9306.png",
        },
        {
            roomName: "Mushola",
            category: "Mushola",
            location: "Lantai 1",
            description: "Tempat beribadah bagi umat muslim",
            image: "mushola.png",
        },
        {
            roomName: "Sekretariat HMIF",
            category: "Himpunan",
            location: "Lantai 1",
            description: "Ruang untuk mahasiswa HMIF berkumpul",
            image: "sekrehmif.png",
        },
        {
            roomName: "Ruang 9315",
            category: "Ruang Kelas",
            location: "Lantai 1",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "9315.png",
        },
        {
            roomName: "Lift",
            category: "Lift",
            location: "Lantai 1",
            description: "Sarana berpindah lantai",
            image: "lift.jpg",
        },
        {
            roomName: "Ruang 7601",
            category: "Ruang Kelas",
            location: "Lantai 1",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "7601.png",
        },
        {
            roomName: "Toilet",
            category: "Toilet",
            location: "Lantai 1",
            description: "Tempat buang air, mencuci tangan, dan mencuci muka",
            image: "toiletw.jpg",
        },
        {
            roomName: "Ruang 9301",
            category: "Ruang Kelas",
            location: "Lantai 1",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "9301.jpg",
        },
        {
            roomName: "Kantin Labtek 5",
            category: "Kantin",
            location: "Lantai 1",
            description: "Tempat beristirahat, membeli makanan, dan membeli minuman",
            image: "kantinlabtek5.jpg",
        },
        {
            roomName: "Ruang 9303",
            category: "Ruang Kelas",
            location: "Lantai 1",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "9303.jpg",
        },
        {
            roomName: "Ruang 9304",
            category: "Ruang Kelas",
            location: "Lantai 1",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "9304.jpg",
        },
        {
            roomName: "Ruang 9305",
            category: "Ruang Kelas",
            location: "Lantai 1",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "9305.jpg",
        },
        {
            roomName: "Ruang Petugas Kelas",
            category: "Ruang Umum",
            location: "Lantai 1",
            description: "-",
            image: "ruangpetugaskelas.jpg",
        },
        {
            roomName: "Lift",
            category: "Lift",
            location: "Lantai 2",
            description: "Sarana berpindah lantai",
            image: "glift2.png",
        },
        {
            roomName: "Ruang Penelitian",
            category: "Ruang Penelitian",
            location: "Lantai 2",
            description: "Tempat kegiatan penelitian",
            image: "gruangpenelitian2.jpg",
        },
        {
            roomName: "Ruang Seminar",
            category: "Ruang Kelas",
            location: "Lantai 2",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "gruangseminar2.png",
        },
        {
            roomName: "Lab Programming Basis Data",
            category: "Lab",
            location: "Lantai 2",
            description: "Tempat untuk kegiatan programming basis data",
            image: "glabprogrammingbasdat2.jpg",
        },
        {
            roomName: "Ruang Akademik STEI",
            category: "Office",
            location: "Lantai 2",
            description: "Tempat mengurus seluruh kegiatan akademik",
            image: "gruangakademikstei2.jpg",
        },
        {
            roomName: "Lab RPL",
            category: "Lab",
            location: "Lantai 2",
            description: "Tempat melakukan Rekayasa Perangkat Lunak",
            image: "glabrpl2.jpg",
        },
        {
            roomName: "Lab Komputer",
            category: "Lab",
            location: "Lantai 2",
            description: "Tempat untuk riset komputer",
            image: "glabkomputer2.jpg",
        },
        {
            roomName: "Ruang Pertemuan",
            category: "Ruang Umum",
            location: "Lantai 2",
            description: "Tempat diskusi civitas STEI",
            image: "gruangpertemuan2.jpg",
        },
        {
            roomName: "Ruang Rapat Dekan (Kantor Ketua Prodi)",
            category: "Office",
            location: "Lantai 2",
            description: "Tempat dekan STEI melakukan rapat ataupun diskusi akademik",
            image: "gruangrapatdekan2.jpg",
        },
        {
            roomName: "Ruang Arsip",
            category: "Ruang Alat",
            location: "Lantai 2",
            description: "Tempat untuk menyimpan arsip-arsip perkuliahan tahun-tahun sebelumnya",
            image: "gruangarsip2.jpg",
        },
        {
            roomName: "Gudang",
            category: "Ruang Alat",
            location: "Lantai 2",
            description: "Tempat untuk menyimpan arsip-arsip perkuliahan tahun-tahun sebelumnya",
            image: "ggudang2.jpg",
        },
        {
            roomName: "Tata Usaha (TU)",
            category: "Office",
            location: "Lantai 2",
            description: "Tempat untuk melakukan aktivitas administrasi dan tata usaha",
            image: "gtu2.jpg",
        },
        {
            roomName: "Lab Basis Data",
            category: "Lab",
            location: "Lantai 2",
            description: "Tempat untuk Mahasiswa melakukan praktikum",
            image: "glabbasdat2.png",
        },
        {
            roomName: "Ruang 7602",
            category: "Ruang Kelas",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "7602.png",
        },
        {
            roomName: "Perpustakaan",
            category: "Perpustakaan",
            location: "Lantai 3",
            description: "Tempat untuk membaca dan meminjam buku",
            image: "gperpustakaan3.png",
        },
        {
            roomName: "Ruang 7603",
            category: "Ruang Kelas",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "g7603.png",
        },
        {
            roomName: "Ruang 7604",
            category: "Ruang Kelas",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "g7604.png",
        },
        {
            roomName: "Ruang 7605",
            category: "Ruang Kelas",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "g7605.png",
        },
        {
            roomName: "Ruang Rapat",
            category: "Ruang Umum",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan rapat",
            image: "gruangrapat3.jpg",
        },
        {
            roomName: "Ruang Server",
            category: "Ruang Alat",
            location: "Lantai 3",
            description: "Tempat menyimpan server",
            image: "gruangserver3.jpg",
        },
        {
            roomName: "Ruang OSSC",
            category: "Ruang Umum",
            location: "Lantai 3",
            description: "-",
            image: "gruangossc3.jpg",
        },
        {
            roomName: "Ruang Dosen",
            category: "Office",
            location: "Lantai 3",
            description: "Tempat dosen bekerja",
            image: "gruangdosen3.jpg",
        },
        {
            roomName: "Ruang SDM",
            category: "Ruang Umum",
            location: "Lantai 3",
            description: "-",
            image: "gruangsdm3.jpg",
        },
        {
            roomName: "Ruang Penelitian Flu Burung",
            category: "Ruang Penelitian",
            location: "Lantai 3",
            description: "Tempat melakukan penelitian",
            image: "gruangpenelitianfluburung3.jpg",
        },
        {
            roomName: "Ruang Penelitian",
            category: "Ruang Penelitian",
            location: "Lantai 3",
            description: "Tempat melakukan penelitian",
            image: "gruangpenelitian3.jpg",
        },
        {
            roomName: "Bengkel",
            category: "Ruang Alat",
            location: "Lantai 3",
            description: "-",
            image: "gbengkel3.jpg",
        },
        {
            roomName: "Gudang",
            category: "Ruang Alat",
            location: "Lantai 3",
            description: "Tempat menyimpan alat-alat/arsip-arsip",
            image: "ggudang3.jpg",
        },
        {
            roomName: "Ruang 7606",
            category: "Ruang Kelas",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "g7606.png",
        },
        {
            roomName: "Gudang",
            category: "Ruang Alat",
            location: "Lantai 3",
            description: "Tempat untuk Mahasiswa melakukan praktikum",
            image: "ggudang33.jpg",
        },
        {
            roomName: "Lab MIC",
            category: "Lab",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "glabmic3.jpg",
        },
        {
            roomName: "Lab Dasar",
            category: "Lab",
            location: "Lantai 3",
            description: "Tempat untuk Mahasiswa melakukan praktikum",
            image: "glabdasar3.jpg",
        },
        {
            roomName: "Ruang Dosen",
            category: "Office",
            location: "Lantai 3",
            description: "Tempat dosen bekerja",
            image: "gruangdosen33.jpg",
        },
        {
            roomName: "Lab Sistem Informatika",
            category: "Lab",
            location: "Lantai 3",
            description: "Tempat untuk Mahasiswa melakukan praktikum",
            image: "glabsisteminformatika3.jpg",
        },
        {
            roomName: "Ruang Diskusi",
            category: "Ruang Umum",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan diskusi",
            image: "gruangdiskusi3.jpg",
        },
        {
            roomName: "Mushola",
            category: "Mushola",
            location: "Lantai 3",
            description: "Tempat beribadah bagi umat muslim",
            image: "9304.jpg",
        },
        {
            roomName: "Ruang 7607",
            category: "Ruang Kelas",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "g7607.jpg",
        },
        {
            roomName: "Ruang 7608",
            category: "Ruang Kelas",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "g7608.jpg",
        },
        {
            roomName: "Ruang 7609",
            category: "Ruang Kelas",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "g7609.png",
        },
        {
            roomName: "Ruang 7610",
            category: "Ruang Kelas",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "g7610.png",
        },
        {
            roomName: "Ruang Pengembangan Kompetensi Mahasiswa",
            category: "Ruang Umum",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "gruangpengembangankompetensimahasiswa.jpg",
        },
        {
            roomName: "Lab Sister",
            category: "Lab",
            location: "Lantai 4",
            description: "Tempat untuk Mahasiswa melakukan praktikum",
            image: "glabsister4.png",
        },
        {
            roomName: "Ruang Server",
            category: "Ruang Alat",
            location: "Lantai 4",
            description: "Tempat menyimpan server",
            image: "gruangserver4.jpg",
        },
        {
            roomName: "Mushola",
            category: "Mushola",
            location: "Lantai 4",
            description: "Tempat beribadah bagi umat muslim",
            image: "9304.jpg",
        },
        {
            roomName: "Lab IRK",
            category: "Lab",
            location: "Lantai 4",
            description: "Tempat untuk Mahasiswa melakukan praktikum",
            image: "glabirk4.png",
        },
        {
            roomName: "Dapur",
            category: "Ruang Umum",
            location: "Lantai 4",
            description: "Tempat memasak",
            image: "gdapur4.jpg",
        },
        {
            roomName: "Lab LPL",
            category: "Lab",
            location: "Lantai 4",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "glablpl4.jpg",
        },
        {
            roomName: "Ruang Diskusi",
            category: "Ruang Umum",
            location: "Lantai 4",
            description: "Tempat untuk melaksanakan diskusi",
            image: "gruangdiskusi4.jpg",
        },
        {
            roomName: "Lab Dasar",
            category: "Lab",
            location: "Lantai 4",
            description: "Tempat untuk Mahasiswa melakukan praktikum",
            image: "glabdasar4.jpg",
        },
        {
            roomName: "HMS",
            category: "Himpunan",
            location: "Lantai 4",
            description: "Tempat untuk mahasiswa himpunan HMIF berkumpul",
            image: "ghms4.jpg",
        },
        {
            roomName: "Gudang",
            category: "Ruang Alat",
            location: "Lantai 4",
            description: "Tempat menyimpan alat-alat/arsip-arsip",
            image: "ggudang4.jpg",
        },
        {
            roomName: "Ruang Rapat",
            category: "Ruang Umum",
            location: "Lantai 4",
            description: "Tempat untuk melakukan rapat",
            image: "gruangrapat4.png",
        },
        {
            roomName: "Tata Usaha (TU)",
            category: "Office",
            location: "Lantai 4",
            description: "Tempat mengurus administrasi dan tata usaha",
            image: "gtu4.jpg",
        },
        {
            roomName: "Ruang Multimedia",
            category: "Ruang Alat",
            location: "Lantai 4",
            description: "Tempat alat-alat multimedia",
            image: "gruangmultimedia4.jpg",
        },
        {
            roomName: "Lab GAIB",
            category: "Lab",
            location: "Lantai 4",
            description: "Digunakan Mahasiswa untuk Praktikum",
            image: "glabgaib4.png",
        },
        {
            roomName: "Ruang Residensi S3",
            category: "Ruang Mahasiswa",
            location: "Lantai 4",
            description: "Digunakan oleh Mahasiswa S3",
            image: "gruangresidensis34.jpg",
        },

    ],

    koica : [
        {
            roomName: "Multipurpose Hall",
            category: "Ruang Umum",
            location: "Lantai 1",
            description: "Ruang Serbaguna",
            image: "kmultipurposehall1.jpg",
        },
        {
            roomName: "Kantor Staff",
            category: "Office",
            location: "Lantai 1",
            description: "Tempat staff bekerja",
            image: "koffice1.jpg",
        },
        {
            roomName: "Toilet",
            category: "Toilet",
            location: "Lantai 1",
            description: "Tersedia toilet untuk Laki-laki, wanita, dan penyandang disabilitas",
            image: "ktoilet1.jpg",
        },
        {
            roomName: "Lift",
            category: "Lift",
            location: "Lantai 1",
            description: "Sarana berpindah lantai",
            image: "klift1.jpg",
        },
        {
            roomName: "Internet Plaza",
            category: "Ruang Umum",
            location: "Lantai 1",
            description: "Tempat praktikum komputasi",
            image: "ginternetplaza1.jpg",
        },
        {
            roomName: "KOICA Co-Working Space",
            category: "Co-Working Space",
            location: "Lantai 1",
            description: "Tempat belajar dan berdiskusi untuk mahasiswa STEI ITB",
            image: "kcoworkingspace1.jpg",
        },
        {
            roomName: "Kantin",
            category: "Kantin",
            location: "Lantai 1",
            description: "Tempat membeli makanan, minuman, dan snack",
            image: "kkantin1.jpg",
        },
        {
            roomName: "Mushola",
            category: "Mushola",
            location: "Lantai 2",
            description: "Tempat beribadah bagi umat muslim",
            image: "kmushola2.jpg",
        },
        {
            roomName: "Toilet",
            category: "Toilet",
            location: "Lantai 2",
            description: "Tersedia toilet untuk Laki-laki, wanita, dan penyandang disabilitas",
            image: "ktoilet2.jpg",
        },
        {
            roomName: "Lift",
            category: "Lift",
            location: "Lantai 2",
            description: "Sarana berpindah lantai",
            image: "klift2.jpg",
        },
        {
            roomName: "Seminar",
            category: "Ruang Kelas",
            location: "Lantai 2",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "kseminar2.jpg",
        },
        {
            roomName: "Lecture Room",
            category: "Ruang Kelas",
            location: "Lantai 2",
            description: "Tempat untuk melaksanakan pertemuan kuliah",
            image: "klectureroom2.jpg",
        },
        {
            roomName: "Ruang Dosen",
            category: "Office",
            location: "Lantai 2",
            description: "Tempat dosen bekerja",
            image: "kruangdosen2.jpg",
        },
        {
            roomName: "Ruang Manajemen STEI",
            category: "Office",
            location: "Lantai 3",
            description: "Tempat mengurus manajemen STEI",
            image: "kruangmanajemenstei3.jpg",
        },
        {
            roomName: "Executive Director's Room",
            category: "Office",
            location: "Lantai 3",
            description: "Tempat Staff Executive Director STEI",
            image: "kexecutivedirectorsroom3.jpg",
        },
        {
            roomName: "Lab Blockchain",
            category: "Lab",
            location: "Lantai 3",
            description: "Tempat untuk melakukan penelitian",
            image: "klabblockchain3.jpg",
        },
        {
            roomName: "Toilet",
            category: "Toilet",
            location: "Lantai 3",
            description: "Tersedia toilet untuk Laki-laki, wanita, dan penyandang disabilitas",
            image: "ktoilet3.jpg",
        },
        {
            roomName: "Lift",
            category: "Lift",
            location: "Lantai 3",
            description: "Sarana berpindah lantai",
            image: "klift3.jpg",
        },
        {
            roomName: "Ruang Residensi S2 & TA S1",
            category: "Ruang Mahasiswa",
            location: "Lantai 3",
            description: "Tempat residensi bagi mahasiswa S2 & TA S1",
            image: "kresidensi3.jpg",
        },
        {
            roomName: "Ruang Residensi S3",
            category: "Ruang Mahasiswa",
            location: "Lantai 3",
            description: "Digunakan oleh mahasiswa S3",
            image: "kresidensis32.jpg",
        },
        {
            roomName: "Ruang Mitra Kerjasama",
            category: "Office",
            location: "Lantai 3",
            description: "Tempat untuk melaksanakan meeting dengan mitra kerja",
            image: "kmitrakerjasama3.jpg",
        },
        {
            roomName: "Lab Malware",
            category: "Lab",
            location: "Lantai 3",
            description: "Tempat untuk melakukan penelitian",
            image: "klabmalware3.jpg",
        },
        {
            roomName: "Lab Forensik Digital",
            category: "Lab",
            location: "Lantai 3",
            description: "Tempat untuk melakukan penelitian",
            image: "klabforensikdigital.jpg",
        },
        {
            roomName: "Lab Penetration Test",
            category: "Lab",
            location: "Lantai 3",
            description: "Tempat untuk melakukan penelitian",
            image: "klabpenetrationtest3.jpg",
        },
        {
            roomName: "Ruang Server",
            category: "Ruang Alat",
            location: "Lantai 3",
            description: "Tempat untuk menyimpan server",
            image: "kruangserver3.jpg",
        },
    ]
};

function toggleBuildingSelector(buildings) {
    const buildingSelector = document.querySelector("#buildingSelector");
    if (buildings == "labtekv") {
        buildingSelector.innerHTML = `<a class="building-btn active">LABTEK V</a><a href="#koica" class="building-btn">KOICA</a><br>`;
    } else if (buildings == "koica") {
        buildingSelector.innerHTML = `<a href="#labtekv" class="building-btn">LABTEK V</a><a class="building-btn active">KOICA</a><br>`;
    }
}

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
    

    if (building == "labtekv" && parseInt(i.location.split(" ")[1]) > 1) {
        let map = document.createElement("a");
        map.innerText = "Lihat Peta";
        map.setAttribute("data-fancybox", (Math.random()*10**16).toString());
        map.setAttribute("data-src", `images/LabtekVLantai${i.location.split(" ")[1]}.jpg`);
        container.appendChild(map);
    }

    card.appendChild(container);

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("visual");

    let fancyboxContainer = document.createElement("a");
    fancyboxContainer.setAttribute("data-fancybox", "rooms");
    fancyboxContainer.setAttribute("data-caption", i.roomName);
    fancyboxContainer.setAttribute("data-src", `images/${i.image}`);

    let image = document.createElement("img");
    image.setAttribute("src", `images/${i.image}`);
    
    fancyboxContainer.appendChild(image);
    imgContainer.appendChild(fancyboxContainer);
    card.appendChild(imgContainer);
    s("#rooms").appendChild(cardcontainer);
}

function searchRoom() {
    document.getElementById("rooms").innerHTML = "";
    var roomCount = 0;
    for(let i of rooms[building]) {
        if (i.roomName.toLowerCase().indexOf(s("#search-input").value.toLowerCase()) > -1 && (activeFilter == "" ? true : i.category == activeFilter)) {
            populateSearch(i);
            roomCount += 1;
        }
    }
    s("#roomCount").innerText = `${roomCount > 0 ? roomCount : "No"} room${roomCount > 1 ? "s" : ""} found`;
}

s("#search-input").addEventListener("input", searchRoom);

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
            searchRoom();
        } else {
            document.getElementById("rooms").innerHTML = "";
            searchFilter.forEach(activefilter => {
                if ([...activefilter.classList].indexOf("active") > -1) {
                    activefilter.classList.remove("active");
                }
            });
            filterbtn.classList.add("active");
            activeFilter = filterbtn.dataset.filter;
            searchRoom();
        }
    });
});

window.addEventListener("load", () => {
    toggleBuildingSelector(building);
    searchRoom();
});

window.onhashchange = () => {
    building = window.location.hash.slice(1);
    toggleBuildingSelector(building);
    searchRoom();
};
  