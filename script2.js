document.getElementById('goBackButton').addEventListener('click', function() {
    window.location.href = 'index.html';
});

// Sound Effect Click
const clickSound = new Audio('kh-soundEff.mp3');

document.addEventListener('click', function() {
    clickSound.currentTime = 0; // Rewind to the beginning of the audio
    clickSound.play();
});

// Click Effect
function clickEffect(e){
    var d = document.createElement("div");
    d.className = "clickEffect";
    d.style.top = e.clientY + "px";
    d.style.left = e.clientX + "px";
    document.body.appendChild(d);
    d.addEventListener('animationend', function() {
        d.parentElement.removeChild(d);
    });

    // Apply click effect to custom cursor
    var customCursor = document.querySelector('.custom-crusor');
    var cloneCursor = customCursor.cloneNode(true);
    cloneCursor.classList.add('clickEffect');
    cloneCursor.style.top = e.clientY + "px";
    cloneCursor.style.left = e.clientX + "px";
    document.body.appendChild(cloneCursor);
    cloneCursor.addEventListener('animationend', function() {
        cloneCursor.parentElement.removeChild(cloneCursor);
    });
}
document.addEventListener('click', clickEffect);

// BG audio
document.addEventListener("DOMContentLoaded", function() {
    // Get the play text and audio element
    var playText = document.getElementById('playText');
    var playText2 = document.getElementById('playText-phone')
    var audio = document.getElementById('background-audio');

    // Boolean to track if the audio is currently playing
    var isPlaying = false;

    // Add event listener to play text for click event
    playText.addEventListener('click', function() {
        if (isPlaying) {
            audio.pause(); // Pause the audio if it's currently playing
            isPlaying = false;
        } else {
            audio.play(); // Play the audio if it's not currently playing
            isPlaying = true;
        }
        playText.classList.toggle('glow', isPlaying); // Toggle glow effect based on audio state
    });

    playText2.addEventListener('click', function() {
        if (isPlaying) {
            audio.pause(); // Pause the audio if it's currently playing
            isPlaying = false;
        } else {
            audio.play(); // Play the audio if it's not currently playing
            isPlaying = true;
        }
        playText2.classList.toggle('glow', isPlaying); // Toggle glow effect based on audio state
    });
});

// Paper
document.addEventListener("DOMContentLoaded", function() {
    const jar = document.querySelector('.jar');
    const aboutPagePaper = document.querySelector('.about-page-paper');

    let paperVisible = false; // Variable to track paper visibility

    // Function to toggle the jar color and show/hide the paper
    function togglePaper(event) {
        event.stopPropagation(); // Prevent the click event from bubbling up to the document
        const paperSound = document.getElementById('paperSound'); // Get the paper sound element
        if (!paperVisible) {
            aboutPagePaper.style.display = 'block'; // Show the paper
            jar.classList.add('color'); // Add the 'color' class to the jar
            paperVisible = true; // Update the paper visibility status
        } else {
            aboutPagePaper.style.display = 'none'; // Hide the paper
            jar.classList.remove('color'); // Remove the 'color' class from the jar
            paperVisible = false; // Update the paper visibility status
        }
        // Play the paper sound effect
        paperSound.currentTime = 0; // Rewind to the beginning of the audio
        paperSound.play();
    }    

    // Click event listener for the jar
    jar.addEventListener('click', togglePaper);

    // Click event listener for the document body
    document.body.addEventListener('click', function() {
        if (paperVisible) {
            aboutPagePaper.style.display = 'none'; // Hide the paper when clicking anywhere else on the document
            jar.classList.remove('color'); // Remove the 'color' class from the jar
            paperVisible = false; // Update the paper visibility status
        }
    });
});
