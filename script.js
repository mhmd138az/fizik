const video = document.getElementById('camera');

// فعال کردن دوربین
function startCamera() {
  navigator.mediaDevices.getUserMedia({
    video: {
      facingMode: { exact: "environment" } // فعال کردن دوربین پشتی
    }
  })
  .then((stream) => {
    video.srcObject = stream;
  })
  .catch((error) => {
    console.error("خطا در دسترسی به دوربین:", error);
    alert("متأسفانه نمی‌توان به دوربین پشتی دسترسی پیدا کرد! شاید دوربین پشتی در دسترس نباشد.");
  });
}

// اجرای دوربین به‌صورت پیش‌فرض
window.onload = startCamera;
