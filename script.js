const video = document.getElementById('camera');

// فعال کردن دوربین
function startCamera() {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
      video.srcObject = stream;
    })
    .catch((error) => {
      console.error("خطا در دسترسی به دوربین:", error);
      alert("متأسفانه نمی‌توان به دوربین دسترسی پیدا کرد!");
    });
}

// اجرای دوربین به‌صورت پیش‌فرض
window.onload = startCamera;
