new Vue({
  el: "#app",
  data: {
    player_life: 100,
    monster_life: 100,
    game_is_on: false,
  },
  methods: {
    start_game: function () {
      this.game_is_on = true;
    },
    attack() {
      var point = Math.ceil(Math.random() * 10);
      this.monster_life -= point;

      this.monster_attack();
    },
    special_attack() {
      var point = Math.ceil(Math.random() * 25);
      this.monster_life -= point;

      this.monster_attack();
    },

    first_aid() {
      var point = Math.ceil(Math.random() * 20);
      this.player_life += point;
      this.monster_attack();
    },
    give_up() {
      this.player_life = 0;
    },
    monster_attack() {
      var point = Math.ceil(Math.random() * 10);
      this.player_life -= point;
    },
  },
  watch: {
    player_life(value) {
      if (value < 0) {
        this.player_life = 0;
        if (confirm("You lost the game! Do you want to play again?")) {
          this.player_life = 100;
          this.monster_life = 100;
        }
      } else if (value >= 100) {
        this.player_life = 100;
      }
    },
    monster_life(value) {
      if (value < 0) {
        this.monster_life = 0;
        if (confirm("You won the game! Do you want to play again?")) {
          this.player_life = 100;
          this.monster_life = 100;
        }
      } else if (value >= 100) {
        this.monster_life = 100;
      }
    },
  },
});
