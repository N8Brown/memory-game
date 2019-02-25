const game = new Vue ({
  el: '#game',
  data: {
    isActive: false,
    clickedID1: 0,
    clickedID2: 0,
    easy: [
      {id: 1, imgFront: '/img/html.svg', altFront: 'HTML Logo', imgBack: '/img/code.svg', altBack: 'Code Brackets'},
      {id: 2, imgFront: '/img/html.svg', altFront: 'HTML Logo', imgBack: '/img/code.svg', altBack: 'Code Brackets'},
      {id: 3, imgFront: '/img/css.svg', altFront: 'CSS Logo', imgBack: '/img/code.svg', altBack: 'Code Brackets'},
      {id: 4, imgFront: '/img/css.svg', altFront: 'CSS Logo', imgBack: '/img/code.svg', altBack: 'Code Brackets'},
      {id: 5, imgFront: '/img/js.svg', altFront: 'Javascript Logo', imgBack: '/img/code.svg', altBack: 'Code Brackets'},
      {id: 6, imgFront: '/img/js.svg', altFront: 'Javascript Logo', imgBack: '/img/code.svg', altBack: 'Code Brackets'},
      {id: 7, imgFront: '/img/php.svg', altFront: 'PHP Logo', imgBack: '/img/code.svg', altBack: 'Code Brackets'},
      {id: 8, imgFront: '/img/php.svg', altFront: 'PHP Logo', imgBack: '/img/code.svg', altBack: 'Code Brackets'}
    ]
  },

  methods: {
    flipCard: function(){
      if(this.clickedID1 === 0){
        this.clickedID1 = this.easy.id;
      } else {
        this.clickedID2 = this.easy.id;
      }
      this.isActive = !this.isActive;
      console.log(this.clickedID1, this.clickedID2);
    }
  }
});

