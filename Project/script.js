function search() {
    // Get the search input value
    var searchInput = document.getElementById("searchInput").value;
    
    // Get the selected animal option
    var animalOptions = document.getElementById("animalOptions");
    var selectedAnimal = animalOptions.options[animalOptions.selectedIndex].value;

    // Simulate searching for the animal
    var isAvailable = Math.random() < 0.5; // Randomly determine if the animal is available (50% chance)

    if (isAvailable) {
        console.log("Congratulations! " + selectedAnimal + " named '" + searchInput + "' is available for adoption.");
    } else {
        console.log("Sorry, " + selectedAnimal + " named '" + searchInput + "' is not available for adoption.");
    }
}

// Function to populate images of dogs
function populatePetImages() {
    var animalImages = document.querySelector(".animal-images");
    animalImages.innerHTML = ""; // Clear previous images

    // Create and append pet images
    for (var i = 1; i <= 5; i++) {
        var img = document.createElement("img");
        img.src = "pet" + i + ".jpg";
        img.alt = "Pet " + i;
        img.onclick = function() {
            // Redirect to contact.html with pet description
            var petDescription = "This is a lovely pet.";
            var url = "contact.html?description=" + encodeURIComponent(petDescription);
        }
    }
}