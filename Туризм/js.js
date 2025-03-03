let index = 0;
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[n].classList.add("active");
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

showSlide(index);




// Импорт Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Конфигурация Firebase (замени на свои данные!)
const firebaseConfig = {
    apiKey: "AIzaSyCDbKHJmwKr92-6wlzAHigcF6J_bCTiAYw",
    authDomain: "wasd-c702d.firebaseapp.com",
    projectId: "wasd-c702d",
    storageBucket: "wasd-c702d.appspot.com",
    messagingSenderId: "598650284791",
    appId: "1:598650284791:web:acadaaac8c4371d524bc1f2",
    measurementId: "G-BZYBJRLBF6"
  }; // ← вот здесь не надо ставить ";"

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Функция входа через Google
document.getElementById("login-btn").addEventListener("click", () => {
    signInWithPopup(auth, provider)
    signOut(auth)
    .then(() => {
        document.getElementById("user-info").innerText = "Вы не вошли";
    })
    .catch((error) => console.error("Ошибка выхода:", error));
});

// Функция выхода
document.getElementById("logout-btn").addEventListener("click", () => {
    signOut(auth)
        .then(() => {
            document.getElementById("user-info").innerText = "Вы не вошли";
        })
        .catch((error) => console.error("Ошибка выхода:", error));
});
document.querySelectorAll('a[href^="."]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetClass = this.getAttribute('href').substring(1); // убираем точку перед классом
      const targetElement = document.querySelector('.' + targetClass);
  
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });




  