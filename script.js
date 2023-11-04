document.addEventListener("DOMContentLoaded", function () {
  const originalUrlInput = document.getElementById("originalUrl");
  const shortenBtn = document.getElementById("shortenBtn");
  const shortenedUrl = document.getElementById("shortenedUrl");

  shortenBtn.addEventListener("click", function () {
    const originalUrl = originalUrlInput.value;

    // Simple URL shortening logic (you can use a more sophisticated method)
    const shortened = generateShortenedUrl(originalUrl);

    shortenedUrl.innerText = shortened;
  });

  function generateShortenedUrl(originalUrl) {
    // In a real application, you'd have a server to manage the shortening process
    // For this example, we'll just create a random string
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < 7; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return `http://short.ly/${result}`;
  }
});
