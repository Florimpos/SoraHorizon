document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "https://valence-albigeois-pom.c3rb.org/images/One_piece.jpg",
        "https://cianjur.jabarekspres.com/wp-content/uploads/2023/03/received_635124041117137.jpeg" ,
        "https://dondon.media/wp-content/uploads/2023/04/jujutsu-kaisen-age-taille-date-naissance-personnages.jpg" ,
        "https://media1.woopic.com/api/v1/images/1825%2Fcinema%2FArticles-Syndiques%2F239%2F6d8%2F5c2ee266df54b184be0c53f3b0%2F815765-bande-annonce-de-one-piece-red-nous-n-orig-9.jpg?format=870x435&facedetect=1&quality=85"
    ];
    
    let currentIndex = 0;

    const imageElement = document.querySelector(".gallery-image");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");

    function updateImage() {
        imageElement.src = images[currentIndex];
    }

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });

    updateImage();
});
