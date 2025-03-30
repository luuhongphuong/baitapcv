document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM Loaded"); // Kiểm tra sự kiện DOMContentLoaded

    const fadeElements = document.querySelectorAll(".fade-in");

    function checkVisibility() {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
                el.classList.add("visible");
            } else {
                el.classList.remove("visible");
                el.style.opacity = "0";
                el.style.transform = "translateY(30px)";
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    setTimeout(checkVisibility, 500);

    // Hiệu ứng hover cho model-viewer
    const models = document.querySelectorAll("model-viewer");
    models.forEach(model => {
        model.addEventListener("mouseenter", () => {
            model.style.transform = "rotateY(10deg) scale(1.1)";
        });
        model.addEventListener("mouseleave", () => {
            model.style.transform = "rotateY(0deg) scale(1)";
        });
    });
   // Hiệu ứng tung như đồng xu khi click vào ảnh đại diện
const avatar = document.querySelector("header img");
if (avatar) {
    let angle = 0; // Biến lưu góc xoay
    avatar.style.transition = "transform 0.6s ease-in-out";

    avatar.addEventListener("click", () => {
        angle += 360; // Mỗi lần click, tăng góc thêm 360 độ
        avatar.style.transform = `rotateY(${angle}deg)`;
    });
}

    // Hiệu ứng cho các section (Giới thiệu, Kinh nghiệm, Kỹ năng, Blog, Liên hệ)
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.classList.add("fade-in");
        section.style.transition = "transform 0.5s ease-out, opacity 0.5s ease-out";
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
    });

    function checkSections() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            } else {
                section.style.opacity = "0";
                section.style.transform = "translateY(30px)";
            }
        });
    }

    window.addEventListener("scroll", checkSections);
    checkSections();

    // Hiệu ứng phóng to chữ khi hover vào menu
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.style.transition = "transform 0.3s ease-in-out";
        link.addEventListener("mouseenter", () => {
            link.style.transform = "scale(1.2)";
        });
        link.addEventListener("mouseleave", () => {
            link.style.transform = "scale(1)";
        });
    });

    // Hiệu ứng hover cho nút gửi trong form
    const submitButton = document.querySelector("form button");
    if (submitButton) {
        submitButton.style.transition = "transform 0.3s ease-in-out, background 0.3s";
        submitButton.addEventListener("mouseenter", () => {
            submitButton.style.transform = "scale(1.1)";
            submitButton.style.background = "#005f99";
        });
        submitButton.addEventListener("mouseleave", () => {
            submitButton.style.transform = "scale(1)";
            submitButton.style.background = "#000000";
        });
    }

    // Hiệu ứng cuộn mượt khi nhấn vào mục Giới thiệu trên menu
    const aboutLink = document.querySelector("nav a[href='#about']");
    if (aboutLink) {
        aboutLink.addEventListener("click", function (event) {
            event.preventDefault();
            document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
        });
    }
});

window.onscroll = function() {
    var btn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
