// =============================================TEXT TYPING SECTION===================================================================//
// ===================================================================================================================================//
const textElement = document.getElementById('dynamic-text');
const texts = ["Web Development", "Artificial Intelligence", "Android Development", "Data Analytics", "Game Development", "Cyber Security"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 80; // Kecepatan mengetik
let deletingSpeed = 80; // Kecepatan menghapus
let delayBetweenTexts = 1300; // Jeda antar teks

function type() {
    const currentText = texts[textIndex];
    if (isDeleting) {
        charIndex--; // Menghapus karakter
        textElement.textContent = currentText.substring(0, charIndex);
    } else {
        charIndex++; // Menambahkan karakter
        textElement.textContent = currentText.substring(0, charIndex);
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, delayBetweenTexts); // Jeda sebelum mulai menghapus
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length; // Pindah ke teks berikutnya
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    type();
});
// ===================================================================================================================================//
// =============================================TEXT TYPING SECTION===================================================================//

// Inisialisasi AOS
document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 1200, // Durasi animasi dalam milidetik
        easing: 'ease-in-out', // Easing animasi
    });
});

