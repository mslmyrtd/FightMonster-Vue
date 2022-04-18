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
      console.log(this.monster_life);
      this.monster_attack();
    },
    special_attack() {},
    first_aid() {},
    give_up() {},
    monster_attack() {
      var point = Math.ceil(Math.random() * 10);
      this.player_life -= point;

      console.log(this.player_life);
    },
  },
});
