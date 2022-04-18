new Vue({
  el: "#app",
  data: {
    player_life: 100,
    monster_life: 100,
    game_is_on: false,
    logs: [],
  },
  methods: {
    start_game: function () {
      this.game_is_on = true;
    },
    attack() {
      var point = Math.ceil(Math.random() * 10);
      this.monster_life -= point;
      this.add_to_log({ turn: "p", text: "Player Attack(" + point + ") " });
      this.monster_attack();
    },
    special_attack() {
      var point = Math.ceil(Math.random() * 25);
      this.monster_life -= point;
      this.add_to_log({ turn: "p", text: "Special Attack(" + point + ") " });
      this.monster_attack();
    },

    first_aid() {
      var point = Math.ceil(Math.random() * 20);
      this.player_life += point;
      this.add_to_log({ turn: "p", text: "First Aid (" + point + ") " });
      this.monster_attack();
    },
    give_up() {
      this.player_life = 0;
      this.add_to_log({ turn: "p", text: "Player Give up " });
    },
    monster_attack() {
      var point = Math.ceil(Math.random() * 15);
      this.player_life -= point;
      this.add_to_log({ turn: "m", text: "Monster Attack(" + point + ") " });
    },
    add_to_log(log) {
      this.logs.push(log);
    },
  },
  watch: {
    player_life(value) {
      if (value < 0) {
        this.player_life = 0;
        if (confirm("You lost the game! Do you want to play again?")) {
          this.player_life = 100;
          this.monster_life = 100;
          this.logs = [];
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
          this.logs = [];
        }
      } else if (value >= 100) {
        this.monster_life = 100;
      }
    },
  },
});
