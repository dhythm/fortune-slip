<template>
  <button v-on:click="pull()">占う</button>
  <div>{{ luck }}</div>
</template>

<script>
const lucks = ["大吉", "吉", "中吉", "小吉", "末吉", "凶", "大凶"];
export default {
  name: "HelloWorld",
  data: () => ({
    luck: lucks[Math.round(Math.random() * (lucks.length - 1))],
  }),
  methods: {
    pull: function () {
      this.luck = lucks[Math.round(Math.random() * (lucks.length - 1))];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
