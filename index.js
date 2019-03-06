Vue.component("card-easy", {
  props: ['card'],
  template: `
    <div class="card-easy" v-bind:id="card.id" v-on:click="flipCard">
      <img class="card-front" v-bind:src="card.imgFront" v-bind:alt="card.altFront" v-bind:class="{flip: !this.card.flipped}"/>
      <img class="card-back" v-bind:src="card.imgBack" v-bind:alt="card.altBack" v-bind:class="{flip: this.card.flipped}"/>
    </div>
  `,
  methods:{
    flipCard: function(){
      if(!this.card.locked){
        this.card.flipped = !this.card.flipped;
        game.flippedCards.push(this.card);
        console.log(this.card.id, this.card.altFront, this.card.flipped);
        this.checkMatch();
      }
    },
    checkMatch: function(){
      if(game.flippedCards.length === 2){
        if(game.flippedCards[0].altFront === game.flippedCards[1].altFront){
          console.log("Match");
          game.flippedCards[0].locked = true;
          game.flippedCards[1].locked = true;
        } else {
          console.log("Not a match");
          game.flippedCards[0].flipped = false;
          game.flippedCards[1].flipped = false;  
        }
        game.flippedCards = [];
      }
    }
  }
});

const game = new Vue({
  el: "#game",
  data: {
    moves: 0,
    flippedCards: [],
    easy: [
      {
        id: 1,
        imgFront: "img/html.svg",
        altFront: "HTML Logo",
        imgBack: "img/code.svg",
        altBack: "Code Brackets",
        flipped: false,
        locked: false
      },
      {
        id: 2,
        imgFront: "img/html.svg",
        altFront: "HTML Logo",
        imgBack: "img/code.svg",
        altBack: "Code Brackets",
        flipped: false,
        locked: false
      },
      {
        id: 3,
        imgFront: "img/css.svg",
        altFront: "CSS Logo",
        imgBack: "img/code.svg",
        altBack: "Code Brackets",
        flipped: false,
        locked: false
      },
      {
        id: 4,
        imgFront: "img/css.svg",
        altFront: "CSS Logo",
        imgBack: "img/code.svg",
        altBack: "Code Brackets",
        flipped: false,
        locked: false
      },
      {
        id: 5,
        imgFront: "img/js.svg",
        altFront: "Javascript Logo",
        imgBack: "img/code.svg",
        altBack: "Code Brackets",
        flipped: false,
        locked: false
      },
      {
        id: 6,
        imgFront: "img/js.svg",
        altFront: "Javascript Logo",
        imgBack: "img/code.svg",
        altBack: "Code Brackets",
        flipped: false,
        locked: false
      },
      {
        id: 7,
        imgFront: "img/php.svg",
        altFront: "PHP Logo",
        imgBack: "img/code.svg",
        altBack: "Code Brackets",
        flipped: false,
        locked: false
      },
      {
        id: 8,
        imgFront: "img/php.svg",
        altFront: "PHP Logo",
        imgBack: "img/code.svg",
        altBack: "Code Brackets",
        flipped: false,
        locked: false
      }
    ]
  },
});
