// 1. Database of popular playlists by category
const playlists = {
  pop: [
    { title: "Blinding Lights", artist: "The Weeknd" },
    { title: "As It Was", artist: "Harry Styles" },
    { title: "Dualipa", artist: "Levitating" },
    { title: "Espresso", artist: "Sabrina Carpenter" },
    { title: "Flowers", artist: "Miley Cyrus" }
  ],
  rock: [
    { title: "Bohemian Rhapsody", artist: "Queen" },
    { title: "Smells Like Teen Spirit", artist: "Nirvana" },
    { title: "Sweet Child O' Mine", artist: "Guns N' Roses" },
    { title: "Hotel California", artist: "Eagles" },
    { title: "Back In Black", artist: "AC/DC" }
  ],
  alt: [
    { title: "Sweater Weather", artist: "The Neighbourhood" },
    { title: "Do I Wanna Know?", artist: "Arctic Monkeys" },
    { title: "Take Me to Church", artist: "Hozier" },
    { title: "Radioactive", artist: "Imagine Dragons" },
    { title: "Stressed Out", artist: "Twenty One Pilots" }
  ],
  slow: [
    { title: "Perfect", artist: "Ed Sheeran" },
    { title: "Someone Like You", artist: "Adele" },
    { title: "All of Me", artist: "John Legend" },
    { title: "Until I Found You", artist: "Stephen Sanchez" },
    { title: "Fix You", artist: "Coldplay" }
  ]
};

// 2. DOM Elements
const playlistContainer = document.getElementById("playlist");
const playlistHeading = document.getElementById("playlist-heading");
const buttons = document.querySelectorAll(".cat-btn");

// 3. Function to display selected category
function showCategory(categoryKey) {
  // Update button active states
  buttons.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  // Update Section Title
  const categoryName = categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1);
  playlistHeading.textContent = `${categoryName} Playlist`;

  // Clear current list
  playlistContainer.innerHTML = "";

  // Get selected category tracks
  const tracks = playlists[categoryKey];

  // Render songs into the DOM
  tracks.forEach(song => {
    const li = document.createElement("li");
    li.classList.add("song-item");
    li.innerHTML = `
      <span class="song-title">${song.title}</span>
      <span class="song-artist">${song.artist}</span>
    `;
    playlistContainer.appendChild(li);
  });
}

// Render Pop playlist by default on load
showCategory('pop');