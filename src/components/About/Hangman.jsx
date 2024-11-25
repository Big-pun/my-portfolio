import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hangman() {
  // Liste des mots possibles (tu peux personnaliser cette liste)
  const [chosenWord, setChosenWord] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState([]);
  const [remainingLives, setRemainingLives] = useState(6); // 6 vies pour le jeu

  // Fonction pour choisir un mot aléatoire au démarrage
  useEffect(() => {
    const words = ["react", "javascript", "developer", "frontend", "code"];
    setChosenWord(words[Math.floor(Math.random() * words.length)]);
  }, []);
  // Fonction pour vérifier si l'utilisateur a trouvé le mot
  const checkGuess = (letter) => {
    if (guesses.includes(letter) || incorrectGuesses.includes(letter)) {
      return;
    }

    if (chosenWord.includes(letter)) {
      setGuesses([...guesses, letter]);
    } else {
      setIncorrectGuesses([...incorrectGuesses, letter]);
      setRemainingLives(remainingLives - 1);
    }
  };

  // Fonction pour afficher le mot avec des underscores pour les lettres non devinées
  const displayWord = () => {
    return chosenWord.split("").map((letter) => 
      guesses.includes(letter) ? letter : "_"
    ).join(" ");
  };

  // Vérification si l'utilisateur a gagné
  const isWinner = displayWord().replace(/\s/g, "") === chosenWord;

  // Vérification si le jeu est perdu
  const isGameOver = remainingLives === 0;

  // Liste des lettres de l'alphabet
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Jeu du Pendu</h2>
      <h3>{displayWord()}</h3>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ fontSize: "24px", color: "red" }}
      >
        <p>Vies restantes: {remainingLives}</p>
      </motion.div>

      {isWinner && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ color: "green", fontWeight: "bold" }}
        >
          🎉 Félicitations, vous avez gagné !
        </motion.div>
      )}

      {isGameOver && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ color: "red", fontWeight: "bold" }}
        >
          😢 Vous avez perdu ! Le mot était &quot;{chosenWord}&quot;.
        </motion.div>
      )}

      <div style={{ marginTop: "20px" }}>
        <h4>Proposez une lettre :</h4>
        <div>
          {alphabet.map((letter) => (
            <button
              key={letter}
              onClick={() => checkGuess(letter)}
              disabled={guesses.includes(letter) || incorrectGuesses.includes(letter)}
              style={{
                fontSize: "18px",
                margin: "5px",
                padding: "10px",
                borderRadius: "5px",
                backgroundColor: guesses.includes(letter) || incorrectGuesses.includes(letter) ? "#ccc" : "#4CAF50",
                color: "white",
              }}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "30px" }}>
        {remainingLives < 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3>État du Pendu :</h3>
            <p>
              {remainingLives === 5 && "Tête"}
              {remainingLives <= 4 && ", Bras gauche"}
              {remainingLives <= 3 && ", Bras droit"}
              {remainingLives <= 2 && ", Jambes gauche"}
              {remainingLives <= 1 && ", Jambes droite"}
              {remainingLives === 0 && ", Pendu !"}
            </p>
          </motion.div>
        )}
      </div>
    </div>
    );
}