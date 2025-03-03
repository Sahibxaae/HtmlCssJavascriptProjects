async function searchWord() {
    const word = document.getElementById("word").value.trim();
    const wordDiv = document.getElementById("def-box");
    wordDiv.innerHTML = ``;
    
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        if (!response.ok) throw new Error('Word not found');
        
        const data = await response.json();
        // console.log(data);

        let definitionsHTML = "";

        // Loop through all meanings
        data[0].meanings.forEach(meaning => {
            let definitionsList = meaning.definitions.map(def => `<p>${def.definition}</p>`).join('');
            // console.log(definitionsList);
            
            definitionsHTML += `
                <div class="${meaning.partOfSpeech}">
                    <h3>${meaning.partOfSpeech}</h3>
                    ${definitionsList}
                </div>
            `;
        });

        // Get pronunciation audio if available
        const audioSrc = data[0].phonetics.find(p => p.audio)?.audio || "";

        wordDiv.innerHTML = `
          <div class="word">
            <h2>${word}</h2>
            <audio id="audio" src="${audioSrc}"></audio>
            <img 
              src="./image/audio-svgrepo-com.svg" 
              alt="Play audio" 
              width="18" 
              height="18"
              id="play-audio"
              style="cursor: pointer;"
            />
          </div>
          <div class="dic-detail">
            ${definitionsHTML}
          </div>`;

        // Add event listener to play audio
        document.getElementById("play-audio").addEventListener("click", () => {
            const audio = document.getElementById("audio");
            if (audio.src) {
                audio.play();
            }
        });

    } catch (error) {
        console.log(error.message);
        wordDiv.innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
}
