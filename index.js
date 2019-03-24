const checkMatch = () => {
  if(game.flippedCards.length === 2){
    if(game.flippedCards[0].id !== game.flippedCards[1].id && game.flippedCards[0].front === game.flippedCards[1].front){
      console.log("Match");
      game.flippedCards[0].locked = true;
      game.flippedCards[1].locked = true;
      game.flippedCards = [];
    } else {
      console.log("Not a match");
      setTimeout(function(){
        game.flippedCards[0].flipped = false;
        game.flippedCards[1].flipped = false;
        game.flippedCards = [];
      }, 1000);
    }
  }
};

Vue.component("card-easy", {
  props: ['card'],
  template: `
    <div class="card" :id="card.id" @click="flipCard">
      <div class="card-front" :class="{flip: !this.card.flipped}">
        <i :class="card.front"></i>
      </div>
      <div class="card-back" :class="{flip: this.card.flipped}">
        <i :class="card.back"></i>
      </div>
    </div>
  `,
  methods:{
    flipCard: function(){
      if(!this.card.locked){
        this.card.flipped = !this.card.flipped;
        game.flippedCards.push(this.card);
        console.log(this.card.id, this.card.altFront, this.card.flipped);
        checkMatch();
      }
    },
  }
});

const game = new Vue({
  el: "#game",
  data: {
    selectedLevel: "",
    levels: [
      {text: "Easy", value: "easy"},
      {text: "Medium", value: "medium"},
      {text: "Hard", value: "hard"}
    ],
    moves: 0,
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
        hard: true,
      },
      {
        id: 2,
        front: "fab fa-html5",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: true,
        medium: true,
        hard: true,
      },
      {
        id: 3,
        front: "fab fa-css3-alt",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: true,
        medium: true,
        hard: true,
      },
      {
        id: 4,
        front: "fab fa-css3-alt",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: true,
        medium: true,
        hard: true,
      },
      {
        id: 5,
        front: "fab fa-js-square",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: true,
        medium: true,
        hard: true,
      },
      {
        id: 6,
        front: "fab fa-js-square",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: true,
        medium: true,
        hard: true,
      },
      {
        id: 7,
        front: "fab fa-php",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: true,
        medium: true,
        hard: true,
      },
      {
        id: 8,
        front: "fab fa-php",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: true,
        medium: true,
        hard: true,
      },
      {
        id: 9,
        front: "fab fa-angular",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: false,
        medium: true,
        hard: true,
      },
      {
        id: 10,
        front: "fab fa-angular",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: false,
        medium: true,
        hard: true,
      },
      {
        id: 11,
        front: "fab fa-react",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: false,
        medium: true,
        hard: true,
      },
      {
        id: 12,
        front: "fab fa-react",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: false,
        medium: true,
        hard: true,
      },
      {
        id: 13,
        front: "fab fa-vuejs",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: false,
        medium: true,
        hard: true,
      },
      {
        id: 14,
        front: "fab fa-vuejs",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: false,
        medium: true,
        hard: true,
      },
      {
        id: 15,
        front: "fab fa-node",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: false,
        medium: true,
        hard: true,
      },
      {
        id: 16,
        front: "fab fa-node",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: false,
        medium: true,
        hard: true,
      },
      {
        id: 17,
        front: "fab fa-sass",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: false,
        medium: false,
        hard: true,
      },
      {
        id: 18,
        front: "fab fa-sass",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: false,
        medium: false,
        hard: true,
      },
      {
        id: 19,
        front: "fab fa-python",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: false,
        medium: false,
        hard: true,
      },
      {
        id: 20,
        front: "fab fa-python",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: false,
        medium: false,
        hard: true,
      },
      {
        id: 21,
        front: "fab fa-npm",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: false,
        medium: false,
        hard: true,
      },
      {
        id: 22,
        front: "fab fa-npm",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: false,
        medium: false,
        hard: true,
      },
      {
        id: 23,
        front: "fab fa-drupal",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: false,
        medium: false,
        hard: true,
      },
      {
        id: 24,
        front: "fab fa-drupal",
        back: "fas fa-code",
        flipped: false,
        locked: false,
        easy: false,
        medium: false,
        hard: true,
      },
    ]
  },
  computed: {
    filteredCards: function(){
      this.shuffleCards();
      return this.cards.filter(card => {
        return (card[this.selectedLevel]);
      });
    }
  },
  methods: {
    shuffleCards: function(){
      let ctr = this.cards.length;
      let index;
      let temp;

      while(ctr > 0){
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = this.cards[ctr];
        this.cards[ctr] = this.cards[index];
        this.cards[index] = temp;
      }
      return this.cards;
    }
  }
});
