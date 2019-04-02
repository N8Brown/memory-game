Vue.component("game-card", {
  props: ["card"],
  template: `
    <div class="card" :class="{action: !this.card.locked}" :id="card.id" @click="flipCard">
      <div class="card-front" :class="{flip: this.card.flipped}">
        <i :class="card.front"></i>
      </div>
      <div class="card-back" :class="{flip: !this.card.flipped}">
        <i :class="card.back"></i>
      </div>
    </div>
  `,
  methods: {
    flipCard: function() {
      if (!this.card.locked && game.flippedCards.length < 2) {
        this.card.flipped = !this.card.flipped;
        this.card.locked = true;
        game.flippedCards.push(this.card);
        game.checkMatch();
      }
    }
  }
});

Vue.component("game-over", {
  props: ["guesses"],
  template: `
    <section class="modal-container">
      <div class="modal-body">
        <header>
          <h2>GAME OVER</h2>
        </header>
        <main>
          <p>You completed the game in {{guesses}} guesses!</p>
        </main>
        <footer>
          <button @click="$emit('play-again')">Play Again</button>
          <button @click="$emit('main-menu')">Main Menu</button>
        </footer>
      </div>
    </section>
  `
});

const game = new Vue({
  el: "#app",
  data: {
    playGame: false,
    gameOver: true,
    replayGame: false,
    selectedLevel: "",
    replayLevel: "",
    levels: [
      { text: "Easy", value: "easy" },
      { text: "Medium", value: "medium" },
      { text: "Hard", value: "hard" }
    ],
    guesses: 0,
    flippedCards: [],
    cards: [
      {
        id: 1,
        front: "fab fa-html5",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: true,
        medium: true,
        hard: true
      },
      {
        id: 2,
        front: "fab fa-html5",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: true,
        medium: true,
        hard: true
      },
      {
        id: 3,
        front: "fab fa-css3-alt",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: true,
        medium: true,
        hard: true
      },
      {
        id: 4,
        front: "fab fa-css3-alt",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: true,
        medium: true,
        hard: true
      },
      {
        id: 5,
        front: "fab fa-js-square",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: true,
        medium: true,
        hard: true
      },
      {
        id: 6,
        front: "fab fa-js-square",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: true,
        medium: true,
        hard: true
      },
      {
        id: 7,
        front: "fab fa-php",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: true,
        medium: true,
        hard: true
      },
      {
        id: 8,
        front: "fab fa-php",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: true,
        medium: true,
        hard: true
      },
      {
        id: 9,
        front: "fab fa-angular",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: false,
        medium: true,
        hard: true
      },
      {
        id: 10,
        front: "fab fa-angular",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: false,
        medium: true,
        hard: true
      },
      {
        id: 11,
        front: "fab fa-react",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: false,
        medium: true,
        hard: true
      },
      {
        id: 12,
        front: "fab fa-react",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: false,
        medium: true,
        hard: true
      },
      {
        id: 13,
        front: "fab fa-vuejs",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: false,
        medium: true,
        hard: true
      },
      {
        id: 14,
        front: "fab fa-vuejs",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: false,
        medium: true,
        hard: true
      },
      {
        id: 15,
        front: "fab fa-node",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: false,
        medium: true,
        hard: true
      },
      {
        id: 16,
        front: "fab fa-node",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: false,
        medium: true,
        hard: true
      },
      {
        id: 17,
        front: "fab fa-sass",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: false,
        medium: false,
        hard: true
      },
      {
        id: 18,
        front: "fab fa-sass",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: false,
        medium: false,
        hard: true
      },
      {
        id: 19,
        front: "fab fa-python",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: false,
        medium: false,
        hard: true
      },
      {
        id: 20,
        front: "fab fa-python",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: false,
        medium: false,
        hard: true
      },
      {
        id: 21,
        front: "fab fa-npm",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: false,
        medium: false,
        hard: true
      },
      {
        id: 22,
        front: "fab fa-npm",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: false,
        medium: false,
        hard: true
      },
      {
        id: 23,
        front: "fab fa-drupal",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: false,
        medium: false,
        hard: true
      },
      {
        id: 24,
        front: "fab fa-drupal",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: false,
        medium: false,
        hard: true
      }
    ]
  },
  computed: {
    filteredCards: function() {
      this.shuffleCards();
      return this.cards.filter(card => {
        return card[this.selectedLevel];
      });
    }
  },
  methods: {
    shuffleCards: function() {
      let ctr = this.cards.length;
      let index;
      let temp;

      while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = this.cards[ctr];
        this.cards[ctr] = this.cards[index];
        this.cards[index] = temp;
      }
      return this.cards;
    },
    resetGame: function() {
      for (let i = 0; i < this.filteredCards.length; i++) {
        this.filteredCards[i].locked = false;
        this.filteredCards[i].flipped = false;
      }
      this.guesses = 0;
      this.selectedLevel = "";
    },
    startGame: function() {
      if (!this.selectedLevel == "") {
        this.playGame = true;
        this.gameOver = false;
      } else {
        alert("Please select a difficulty");
      }
      this.setCurrentLevel();
    },
    setCurrentLevel: function() {
      switch (this.selectedLevel) {
        case "easy":
          this.replayLevel = "easy";
          break;
        case "medium":
          this.replayLevel = "medium";
          break;
        case "hard":
          this.replayLevel = "hard";
          break;
        default:
          this.replayLevel = "";
      }
    },
    checkMatch: function() {
      if (this.flippedCards.length === 2) {
        if (
          this.flippedCards[0].id !== this.flippedCards[1].id &&
          this.flippedCards[0].front === this.flippedCards[1].front
        ) {
          console.log("Match");
          this.flippedCards = [];
          this.guesses++;
        } else {
          console.log("Not a match");
          setTimeout(
            function() {
              this.flippedCards[0].flipped = false;
              this.flippedCards[0].locked = false;
              this.flippedCards[1].flipped = false;
              this.flippedCards[1].locked = false;
              this.flippedCards = [];
              this.guesses++;
            }.bind(this),
            750
          );
        }
      }
      this.checkGameOver();
    },
    checkGameOver: function() {
      let counter = 0;
      for (let i = 0; i < this.filteredCards.length; i++) {
        if (this.filteredCards[i].locked) {
          counter++;
        }
      }
      if (counter === this.filteredCards.length) {
        setTimeout(
          function() {
            this.gameOver = true;
          }.bind(this),
          500
        );
      }
    },
    quitGame: function() {
      this.playGame = false;
      this.replayGame = false;
      this.resetGame();
    },
    playAgain: function() {
      this.resetGame();
      this.replayGame = true;
      this.gameOver = false;
      this.selectedLevel = this.replayLevel;
    }
  }
});
