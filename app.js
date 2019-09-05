const cards = [
    {
      front: 'The "First Computer Programmer"',
      back: 'Ada Lovelace',
      flipped: false,
    },
    {
      front: 'Invented the "Clarke Calculator"',
      back: 'Edith Clarke',
      flipped: false,

    },
    {
      front: 'Famous World War II Enigma code breaker',
      back: 'Alan Turing',
      flipped: false,
    },
    {
      front: 'Created satellite orbit analyzation software for NASA',
      back: 'Dr. Evelyn Boyd Granville',
      flipped: false,
    },
  ];

  new Vue({
    el: '#flashcard-app',
    data: {
      cards: cards,
      front: '',
      back: '',
      error: false
    },
    methods: {
      //flipCard
      flipCard: function(card, index) {
        this.cards[index].flipped = !this.cards[index].flipped;
      },
      deleteCard: function(index) {
        cards.splice(index, 1);
      },
      addCard: function() {
        if (!this._data.front || !this._data.back) {
          this.error = true;
        } else {
          cards.push({
            front: this.front,
            back: this.back,
            flipped: false,
          });
          this.error = false;
        }
      }
    }
  });