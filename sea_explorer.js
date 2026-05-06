let input = document.getElementById("searchbar");
let confirm = document.getElementById("search-btn");

confirm.addEventListener("click", function(){ // This part confirm when the search bar is clicked
    let depth = parseInt(input.value);
    if (isNaN(depth)) {
        alert("Insert number please");
    } else if (depth >= 0 && depth < 200) {
        window.location.href = "sunlight_zone.html";
    } else if (depth >= 200 && depth < 1000) {
        window.location.href = "twilight_zone.html";
    } else if (depth >= 1000 && depth < 4000) {
        window.location.href = "midnight_zone.html";
    } else if (depth >= 4000 && depth < 6000) {
        window.location.href = "abysal_zone.html";
    } else {
        alert("Hadal Zone")
        window.location.href = "hadal_zone.html";
    }
});

/* 
=============================================================================
 > This file was the JS part to know what sea level the user want to know   =
=============================================================================
*/