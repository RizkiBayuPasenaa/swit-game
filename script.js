const pilihanPlayer = document.querySelectorAll('.pilihan img');
const imgPlayer = document.querySelector('.container-player img');
const imgComputer = document.querySelector('.container-computer img');
const info = document.querySelector('.info');
const button = document.querySelector('button');

// Fungsi mengambil pilihan acak dari komputer
function pilihanKomputer() {
    const pilihan = ['jempol', 'telunjuk', 'kelingking'];
    const index = Math.floor(Math.random() * 3);
    return pilihan[index];
}

// Fungsi menentukan pemenang
function tentukanPemenang(pilihanPlayer, pilihanKomputer) {
    if (pilihanPlayer === pilihanKomputer) {
        return 'seri';
    } else if (
        (pilihanPlayer === 'jempol' && pilihanKomputer === 'telunjuk') ||
        (pilihanPlayer === 'telunjuk' && pilihanKomputer === 'kelingking') ||
        (pilihanPlayer === 'kelingking' && pilihanKomputer === 'jempol')
    ) {
        return 'menang';
    } else {
        return 'kalah';
    }
}

// Fungsi untuk menampilkan hasil ke info
function tampilkanHasil(hasil) {
    if (hasil === 'menang') {
        info.textContent = 'Anda menang!';
        info.style.color = "Green";
    } else if (hasil === 'kalah') {
        info.textContent = 'Anda kalah!';
        info.style.color = "Red";
    } else {
        info.textContent = 'Hasil seri!';
    }
}

// Mengatur event listener untuk tombol Go untuk mengulangi permainan
button.addEventListener('click', function() {
    const pilihanPlayerValue = imgPlayer.getAttribute('src').split('/').pop().split('.')[0];
    const pilihanKomputerValue = pilihanKomputer();
    imgComputer.setAttribute('src', 'asset/' + pilihanKomputerValue + '.jpg');
    const hasil = tentukanPemenang(pilihanPlayerValue, pilihanKomputerValue);
    tampilkanHasil(hasil);
});

// Mengatur event listener untuk setiap gambar pilihan player
pilihanPlayer.forEach(pilihan => {
    pilihan.addEventListener('click', function() {
        const pilihanPlayerValue = this.getAttribute('src').split('/').pop().split('.')[0];
        imgPlayer.setAttribute('src', 'asset/' + pilihanPlayerValue + '.jpg');
    });
});
