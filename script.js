// Front end

// java script have case sensi
document.addEventListener("DOMContentLoaded", function () {
    fetch('/api/profile')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('about-me').innerText = data.aboutMe;
            document.getElementById('Email').innerText = 'Email: ' + data.email;
            document.getElementById('phone-Number').innerText = 'Phone Number: ' + data.phoneNumber;
        })
        .catch(error => console.error('Error fetching data:', error));
});

// Popup Brandon Zenz
const brandonZenz = document.getElementById('brandon-zenz')
const profileInfoBox = document.getElementById('profile-info-box')

let isPopupVisible = false;
brandonZenz.style.zIndex = '2';

brandonZenz.addEventListener('click', () => {
    isPopupVisible = !isPopupVisible;
    console.log("Masuk");
    if (isPopupVisible) {
        profileInfoBox.style.transform = 'translateX(0)';
    } else {
        profileInfoBox.style.transform = 'translateX(100%)';
    }
});

brandonZenz.addEventListener('mouseover', () => {
    brandonZenz.style.textShadow = '2px 2px 8px rgba(255, 255, 255, 0.9)';
    if (isPopupVisible) {
        profileInfoBox.style.transform = 'translateX(0)';
    }
});

brandonZenz.addEventListener('mouseout', () => {
    brandonZenz.style.textShadow = '2px 2px 4px rgba(255, 255, 255, 0.8)';
    if (!isPopupVisible) {
        profileInfoBox.style.transform = 'translateX(100%)';
    }
});

document.addEventListener('mouseover', () => {
    if (isPopupVisible){
        profileInfoBox.style.display = 'block';
    }
});

// Brandon Zenz
document.addEventListener('mousemove', (event) => {
    if (!brandonZenz.contains(event.target) && !isPopupVisible) {
        brandonZenz.style.animation = 'glow-bright 1s infinite alternate';
    } else {
        brandonZenz.style.animation = 'none';
    }
});

// Sound Effect Click
const clickSound = new Audio('kh-soundEff.mp3');

document.addEventListener('click', function() {
    clickSound.currentTime = 0; // Rewind to the beginning of the audio
    clickSound.play();
});

// Zoom scroll background & Change after click me
var backgroundContainer = document.getElementById('background-container');
var backgroundImage = document.getElementById('background-image');
var videoBackground = document.getElementById('video-background');
var playButton = document.getElementById('playButton');
var isVideoPlaying = false;

function toggleMedia() {
    if (!isVideoPlaying) {
        videoBackground.play();
        isVideoPlaying = true;
        backgroundImage.style.display = 'none';
        playButton.innerText = 'Enjoy The Atmosphere';
    } else {
        videoBackground.pause();
        isVideoPlaying = false;
        backgroundImage.style.display = 'block';
        playButton.innerText = 'Click Me';
    }
}

let lastScrollTop = 0;
let scaleFactor = 1;

window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;

    // Check scroll direction
    const scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
    lastScrollTop = scrollTop;

    // Adjust scaling based on scroll direction
    if (scrollDirection === 'down') {
        scaleFactor = Math.min(scaleFactor * 1, 1); // Increase scale when scrolling down
    } else {
        scaleFactor = Math.max(scaleFactor * 1, 1); // Decrease scale when scrolling up
    }

    // Apply scaling to the video
    backgroundImage.style.transform = `scale(${scaleFactor})`;
    videoBackground.style.transform = `scale(${scaleFactor})`;
});

// Sound
document.getElementById('playButton').addEventListener('click', function () {
    var audio = document.querySelector('.audio-bg');
    if (audio.paused) {
        audio.play();
        this.classList.add('active');
    } else {
        audio.pause();
        this.classList.remove('active');
    }
});

// Toggle Background Button
document.addEventListener("DOMContentLoaded", function() {
    const toggleBackgroundButton = document.querySelector('.toggleBackgroundButton');
    const elementsToToggle = document.querySelectorAll('header, section, footer, .box-addons, .cold-text');
    let isBackgroundOnly = false;

    toggleBackgroundButton.addEventListener('click', function() {
        isBackgroundOnly = !isBackgroundOnly;
        elementsToToggle.forEach(function(element) {
            element.classList.toggle('hidden', isBackgroundOnly);
        });
        toggleBackgroundButton.classList.toggle('blur', isBackgroundOnly); // Toggle the blur class based on the background visibility

        // Change button text based on background visibility
        toggleBackgroundButton.innerText = isBackgroundOnly ? 'Restore Elements' : 'See Background';
    });
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

// Graph
function handleClick(event) {
    var graph = event.target.closest('.text-container').querySelector('.graph');
    graph.classList.toggle('frozen');
}

// Add click event listeners to all text containers
var textContainers = document.querySelectorAll('.text-container');
textContainers.forEach(function(container) {
    container.addEventListener('click', handleClick);
});

// Add click event listeners to each text container
var textContainers = document.querySelectorAll('.text-container');
textContainers.forEach(function(container, index) {
    container.addEventListener('click', function() {
        handleClick(index);
    });
});

// Skill & Inspiration Box
document.getElementById("expandable-box").addEventListener("click", function() {
    this.classList.toggle("expanded"); // Toggle expanded class
    document.querySelector(".inspiration").classList.toggle("visible"); // Toggle visibility class for inspiration
});

// My portofolio
document.addEventListener('DOMContentLoaded', function() {
    const toggleImages = document.querySelector('.toggle-images');
    const portofolioTopic = document.querySelector('.portofolio-topic');

    toggleImages.addEventListener('click', function() {
        portofolioTopic.classList.toggle('hide');
    });
});

// Image Shadow move
function debounce(func, delay) {
    let timeoutId;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}

window.addEventListener('scroll', debounce(function() {
    let scrollPosition = window.scrollY;
    let shadowOffset = Math.min(scrollPosition * 0.1, 20); // Adjust the shadow offset as needed
    document.querySelectorAll('.image-container img').forEach(function(img) {
        img.style.boxShadow = `0px ${4 + shadowOffset}px ${8 + shadowOffset}px rgba(0, 0, 0, 0.5)`;
    });
}, 0)); // Adjust the delay as needed for smoother performance

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image-container img');

    images.forEach(function(img) {
        img.addEventListener('click', function() {
            // Toggle the 'clicked' class on the parent image wrapper
            this.closest('.image-wrapper').classList.toggle('clicked');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-images');
    const imageContainer = document.querySelector('.image-container');

    toggleButton.addEventListener('click', function() {
        imageContainer.classList.toggle('hide-images');
    });
});

document.getElementById('toggle-2d').addEventListener('click', function() {
    this.classList.toggle('glow');
});

// Cold Transition
document.addEventListener("DOMContentLoaded", function() {
    const coldText = document.getElementById('cold-text');
    coldText.classList.add('hide'); // Initially hide the "To Cold?" button

    const clickButton = document.getElementById('playButton'); // Get the Click Me button

    // Function to toggle hover listeners for "To Cold?"
    function toggleHoverListeners(active) {
        if (active) {
            coldText.classList.remove('hide'); // Show the "To Cold?" button
            coldText.addEventListener('mouseenter', function() {
                coldText.innerText = 'Press to go to a nearest Shelter';
                coldText.classList.add('button');
            });

            coldText.addEventListener('mouseleave', function() {
                coldText.innerText = 'To Cold?';
                coldText.classList.remove('button');
            });

            coldText.addEventListener('click', function() {
                // Redirect to a new page
                window.location.href = 'brandon_bts.html'; // Change 'brandon_bts.html' to your desired URL
            });
        } else {
            coldText.removeEventListener('mouseenter', null);
            coldText.removeEventListener('mouseleave', null);
            coldText.removeEventListener('click', null); // Remove click listener
            coldText.classList.add('hide'); // Hide the "To Cold?" button
        }
    }

    // Initial toggle of hover listeners
    toggleHoverListeners(false); // Initially hide and remove listeners

    // Click Me button click event handler
    clickButton.addEventListener('click', function() {
        const active = clickButton.classList.contains('active');
        toggleHoverListeners(active); // Toggle hover listeners
        coldText.classList.toggle('glow', active); // Toggle glow class
    });
});

// Fade show box-addons until scroll
const boxAddons = document.querySelector('.box-addons');

// Set initial opacity 
boxAddons.style.opacity = 0;

window.addEventListener('scroll', function() {
    // Get the current scroll position
    const scrollPosition = window.scrollY;
    
    // Calculate the opacity based on the scroll position
    let opacity = scrollPosition / (boxAddons.offsetHeight / 2); // Adjust the divisor as needed
    opacity = 0.1 + opacity;

    // Ensure opacity does not exceed 1
    opacity = Math.min(opacity, 1);
    
    // Set the opacity of the box-addons element
    boxAddons.style.opacity = opacity;
    
    // Add transition effect
    boxAddons.style.transition = 'opacity 0s ease-in-out'; // Adjust the transition duration as needed
});


