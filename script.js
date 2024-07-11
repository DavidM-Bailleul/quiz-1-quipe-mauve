window.onload = function() {
    const audio = document.getElementById('audio');
    const question = document.getElementById('question');
    const answerInput = document.getElementById('answer');
    const submitButton = document.getElementById('submit');

    // Jouer l'audio au chargement de la page
    audio.play();

    // Afficher la question et les champs après la fin de l'audio
    audio.onended = function() {
        question.classList.remove('hidden');
        answerInput.classList.remove('hidden');
        submitButton.classList.remove('hidden');
    };
};

function checkAnswer() {
    const answer = document.getElementById("answer").value.toLowerCase();
    const feedback = document.getElementById("feedback");
    const hint = document.getElementById("hint");
    const museum = document.getElementById("museum");
    
    if (answer === "christophe") {
        feedback.textContent = "Correct !";
        feedback.style.color = "green";
        hint.classList.add("hidden");
        museum.classList.remove("hidden");
    } else {
        feedback.textContent = "Incorrect, essayez encore.";
        feedback.style.color = "red";
        hint.classList.remove("hidden");
        museum.classList.add("hidden");
    }
}