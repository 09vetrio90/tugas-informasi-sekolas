document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        // Redirect ke halaman pencarian
        window.location.href = 'search.html';
    });
    const faqData = [
        {
            question: "apa itu informasi sekolah",
            answer: "Informasi sekolah adalah semua pengumuman atau berita dari sekolah yang perlu diketahui siswa agar tidak ketinggalan kegiatan dan aturan."
        },
        {
            question: "APA FUNGSI INFORMASI SEKOLAH",
            answer: "Agar tidak ketinggalan kegiatan → Supaya tahu jadwal ujian, upacara, lomba, atau acara sekolah lainnya.\nMembantu mengatur waktu belajar → Dengan tahu jadwal pelajaran, tugas, dan ulangan, siswa bisa mempersiapkan diri lebih baik.\nSebagai panduan aturan sekolah → Informasi tentang tata tertib membantu siswa tahu apa yang boleh dan tidak boleh dilakukan.\nMemudahkan komunikasi dengan guru → Misalnya lewat pengumuman, grup kelas, atau mading sekolah, sehingga siswa tidak bingung.\nMeningkatkan partisipasi → Kalau ada informasi yang jelas, siswa bisa ikut aktif dalam kegiatan sekolah (ekstrakurikuler, organisasi,"
        },
        {
            question: "APA JADINYA JIKA INFORMASI SEKOLAH TIDAK TERSOSIALISASI DENGAN BAIK",
            answer: "Jika informasi sekolah tidak tersosialisasi dengan baik maka:\nBanyak yang ketinggalan info → siswa tidak tahu jadwal ujian, piket, atau kegiatan penting.\nBikin bingung → tidak jelas aturan atau apa yang harus dilakukan.\nKurang semangat ikut kegiatan → karena tidak ada informasi yang jelas, siswa jadi malas atau tidak ikut.\nBisa salah paham → misalnya jadwal berbeda-beda infonya, jadi siswa salah masuk kelas atau terlambat."
        },
        {
            question: "BUATKAN KESIMPULAN",
            answer: "Kalau informasi sekolah tidak disampaikan dengan baik, siswa jadi bingung, banyak yang ketinggalan jadwal, dan kegiatan sekolah tidak berjalan lancar."
        }
    ];

    function displayResults(results) {
        const searchResultsDiv = document.getElementById("searchResults");
        searchResultsDiv.innerHTML = "";

        if (results.length === 0) {
            searchResultsDiv.innerHTML = "<p>Tidak ada hasil ditemukan.</p>";
            return;
        }

        results.forEach(result => {
            const resultDiv = document.createElement("div");
            resultDiv.classList.add("search-result");

            const questionElem = document.createElement("h3");
            questionElem.textContent = result.question;

            const answerElem = document.createElement("p");
            answerElem.textContent = result.answer;

            resultDiv.appendChild(questionElem);
            resultDiv.appendChild(answerElem);

            searchResultsDiv.appendChild(resultDiv);
        });
    }

    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            const searchTerm = searchInput.value.toLowerCase();
            const filteredResults = faqData.filter(item => {
                return item.question.toLowerCase().includes(searchTerm);
            });
            displayResults(filteredResults);
        }
    });
});
