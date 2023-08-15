document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "https://i.pinimg.com/originals/5a/b7/f7/5ab7f7f35901218b0fa4f0e71b7914dc.jpg",
        "https://i.pinimg.com/736x/cb/28/fc/cb28fc6da7d866e842c6aa9b8eb1e3df.jpg" ,
        "https://etab.ac-poitiers.fr/coll-jbaker/sites/coll-jbaker/local/cache-vignettes/L500xH702/manga_adulte-95901.jpg?1661442795" 
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
