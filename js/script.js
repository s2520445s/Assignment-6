document.addEventListener("DOMContentLoaded", function() {
    const textInput = document.getElementById("textInput");
    const submitBtn = document.getElementById("submitBtn");
    const resultBody = document.getElementById("resultBody");

    submitBtn.addEventListener("click", function() {
        const text = textInput.value.trim().toLowerCase();
        
        // Ensure there is input text
        if (!text) {
            resultBody.innerHTML = "<tr><td colspan='2'>No input provided</td></tr>";
            return;
        }

        const words = text.match(/\b\w+\b/g);
        const frequency = {};

        if (!words) {
            resultBody.innerHTML = "<tr><td colspan='2'>No words found</td></tr>";
            return;
        }

        words.forEach(word => {
            if (frequency[word]) {
                frequency[word]++;
            } else {
                frequency[word] = 1;
            }
        });

        const sortedWords = Object.keys(frequency).sort((a, b) => frequency[b] - frequency[a]);

        resultBody.innerHTML = "";
        for (let i = 0; i < Math.min(5, sortedWords.length); i++) {
            const word = sortedWords[i];
            const frequencyCount = frequency[word];
            const row = `<tr><td>${word}</td><td>${frequencyCount}</td></tr>`;
            resultBody.insertAdjacentHTML("beforeend", row);
        }
    });
});
