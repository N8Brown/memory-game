Vue.component("card-easy", {
  props: ['card'],
  data: function(){
    return{
    isActive: false
  }},
  template: `
    <div class="card-easy" v-on:click="flipCard">
      <img class="card-front" v-bind:src="card.imgFront" v-bind:alt="card.altFront" v-bind:class="{flip: !isActive}"/>
      <img class="card-back" v-bind:src="card.imgBack" v-bind:alt="card.altBack" v-bind:class="{flip: isActive}"/>
    </div>
  `,
  methods:{
    flipCard: function() {
      this.isActive = !this.isActive;
      console.log("Flip");
    }
  }
});

const game = new Vue({
  el: "#game",
  data: {
    easy: [
      {
        id: 1,
        imgFront: "/img/html.svg",
        altFront: "HTML Logo",
        imgBack: "/img/code.svg",
        altBack: "Code Brackets"
      },
      {
        id: 2,
        imgFront: "/img/html.svg",
        altFront: "HTML Logo",
        imgBack: "/img/code.svg",
        altBack: "Code Brackets"
      },
      {
        id: 3,
        imgFront: "/img/css.svg",
        altFront: "CSS Logo",
        imgBack: "/img/code.svg",
        altBack: "Code Brackets"
      },
      {
        id: 4,
        imgFront: "/img/css.svg",
        altFront: "CSS Logo",
        imgBack: "/img/code.svg",
        altBack: "Code Brackets"
      },
      {
        id: 5,
        imgFront: "/img/js.svg",
        altFront: "Javascript Logo",
        imgBack: "/img/code.svg",
        altBack: "Code Brackets"
      },
      {
        id: 6,
        imgFront: "/img/js.svg",
        altFront: "Javascript Logo",
        imgBack: "/img/code.svg",
        altBack: "Code Brackets"
      },
      {
        id: 7,
        imgFront: "/img/php.svg",
        altFront: "PHP Logo",
        imgBack: "/img/code.svg",
        altBack: "Code Brackets"
      },
      {
        id: 8,
        imgFront: "/img/php.svg",
        altFront: "PHP Logo",
        imgBack: "/img/code.svg",
        altBack: "Code Brackets"
      }
    ]
  },
});
