const movies = [
    { name: "PATHAN", hint: "2023 Shah Rukh Khan spy action film" },
    { name: "BRAHMASTRA", hint: "Ayan Mukerji's fantasy trilogy opener with Ranbir Kapoor" },
    { name: "GANGUBHAI KATHIAWADI", hint: "Alia Bhatt as a brothel madam in this biopic" },
    { name: "RRR", hint: "SS Rajamouli's epic with 'Naatu Naatu' song" },
    { name: "KASHMIR FILES", hint: "2022 controversial film about Kashmiri Pandits" },
    { name: "BHOOL BHULAIYAA 2", hint: "Kartik Aaryan in this horror-comedy sequel" },
    { name: "DRISHYAM 2", hint: "Ajay Devgn returns in this thriller sequel" },
    { name: "SOORYAVANSHI", hint: "Akshay Kumar's cop in Rohit Shetty's universe" },
    { name: "LAL SINGH CHADHA", hint: "Aamir Khan's adaptation of Forrest Gump" },
    { name: "VIKRAM", hint: "Kamal Haasan's action thriller (Hindi dubbed)" },
    { name: "KGF CHAPTER 2", hint: "Yash as Rocky Bhai in this pan-India hit" },
    { name: "PUSHPA", hint: "Allu Arjun as red sandalwood smuggler (Hindi dubbed)" },
    { name: "SHERSHAAH", hint: "Sidharth Malhotra as Capt. Vikram Batra" },
    { name: "SANAK", hint: "Vidyut Jammwal in this hospital-set action film" },
    { name: "SATYAMEVA JAYATE 2", hint: "John Abraham's action-packed sequel" },
    { name: "ANTIM", hint: "Salman Khan and Aayush Sharma's brother drama" }
  ];
  
  let selectedMovie = "";
  let guessedLetters = [];
  
  function startGame() {
    const random = movies[Math.floor(Math.random() * movies.length)];
    selectedMovie = random.name;
    guessedLetters = [];
    document.getElementById("hint-text").style.display = "none";
    document.getElementById("hint-text").innerText = random.hint;
    updateMovieDisplay();
    createKeyboard();
  }
  
  function updateMovieDisplay() {
    const display = selectedMovie
      .split("")
      .map(char => {
        if (char === " ") return " ";
        return guessedLetters.includes(char) ? char : "_";
      })
      .join(" ");
    document.getElementById("movie-display").innerText = display;
  
    if (!display.includes("_")) {
      setTimeout(() => {
        alert("Congratulations! You guessed the movie.");
      }, 100);
    }
  }
  
  function createKeyboard() {
    const keyboard = document.getElementById("keyboard");
    keyboard.innerHTML = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let char of letters) {
      const btn = document.createElement("button");
      btn.innerText = char;
      btn.className = "key";
      btn.onclick = () => handleGuess(char, btn);
      keyboard.appendChild(btn);
    }
  }
  
  function handleGuess(letter, button) {
    button.disabled = true;
    if (selectedMovie.includes(letter)) {
      guessedLetters.push(letter);
      updateMovieDisplay();
    }
  }
  
  function showHint() {
    document.getElementById("hint-text").style.display = "block";
  }
  
  // Start game on initial load
  window.onload = startGame;
  