<template>
  <div class="index container">
    <div class="card" v-for="smoothie in smoothies" v-bind:key="smoothie.id">
      <div class="card-content">
        <i
          class="material-icons delete"
          v-on:click="deleteSmoothie(smoothie.id)"
          >delete</i
        >
        <h2 class="indigo-text">{{ smoothie.name }}</h2>
        <ul class="ingredients">
          <li
            v-for="ingredient in smoothie.ingredients"
            v-bind:key="ingredient.id"
          >
            <span class="chip">{{ ingredient.name }}</span>
          </li>
        </ul>
      </div>
      <span class="btn-floating btn-large halfway-fab pink">
        <router-link
          v-bind:to="{
            name: 'EditSmoothie',
            params: { smoothie_slug: smoothie.slug }
          }"
        >
          <i class="material-icons edit">edit</i>
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const URI = process.env.VUE_APP_PATH;

export default {
  name: "Index",
  data() {
    return {
      smoothies: []
    };
  },
  methods: {
    deleteSmoothie(id) {
      axios.delete(URI + "smoothies/" + id).then(() => {
        return (this.smoothies = this.smoothies.filter(smoothie => {
          return smoothie.id !== id;
        }));
      });
    }
  },
  mounted() {
    axios
      .get(URI + "smoothies")
      .then(res => {
        this.smoothies = res.data;
      })
      .catch(err => {
        console.error(err.message);
      });
  }
};
</script>

<style scoped>
.index {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}
.index h2 {
  font-size: 1.8em;
  text-align: center;
  margin-top: 0;
}
.index .ingredients {
  margin: 30px auto;
}
.index .ingredients li {
  display: inline-block;
}
.index .delete {
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  color: #aaa;
  font-size: 1.4em;
}
</style>
