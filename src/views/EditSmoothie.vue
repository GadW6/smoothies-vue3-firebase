<template>
  <div class="edit-smoothie container" v-if="smoothie">
    <h2>Edit {{ smoothie.name }} Smoothie:</h2>
    <form v-on:submit.prevent="EditSmoothie">
      <div class="field title">
        <label for="title">Smoothie Title</label>
        <input type="text" name="title" v-model="smoothie.name" />
      </div>
      <div class="ingredient-list">
        <span
          class="chip"
          v-for="(ing, index) in smoothie.ingredients"
          v-bind:key="index"
        >
          {{ ing.name }}
          <i class="close material-icons" v-on:click="DeleteIng(index)"
            >close</i
          >
        </span>
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient"
          >Add an Ingredient: <small>('TAB' to insert)</small></label
        >
        <input
          type="text"
          name="add-ingredient"
          v-on:keydown.tab.prevent="AddIng"
          v-model="another"
        />
      </div>
      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn pink">
          EDIT SMOOTHIE
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import slugify from "slugify";
import axios from "axios";
const URI = process.env.VUE_APP_PATH;

export default {
  name: "EditSmoothie",
  props: ["smoothie_slug"],
  data() {
    return {
      smoothie: null,
      another: null,
      feedback: null
    };
  },
  methods: {
    AddIng() {
      if (this.another) {
        this.smoothie.ingredients.push({ name: this.another });
        this.another = null;
        this.feedback = null;
      } else {
        this.feedback = "You must enter a value to edit an ingredient";
      }
    },
    DeleteIng(i) {
      this.smoothie.ingredients.splice(i, 1);
    },
    async EditSmoothie() {
      const ingSet = ing => {
        if (ing) {
          this.AddIng();
        } else {
          this.feedback = "You must enter a value to add an ingredient";
        }
      };

      // Checking if ingredients are set
      ingSet(this.another);
      if (this.smoothie.name && this.smoothie.ingredients.length > 0) {
        try {
          const res = await axios.put(URI + "smoothies/" + this.smoothie.id, {
            ingredients: this.smoothie.ingredients,
            name: this.smoothie.name,
            slug: slugify(this.smoothie.name, {
              replacement: "-",
              remove: /[*+~.()'"!:@]/g,
              lower: true
            })
          });
          return res.data.id ? this.$router.push("/") : null;
        } catch (error) {
          console.log(error);
        }
      }
    }
  },
  async mounted() {
    try {
      const response = await axios.get(
        URI + `smoothies/slug/${this.$props.smoothie_slug}`
      );
      this.smoothie = response.data;
    } catch (error) {
      return { msg: `There was an error: ${error}` };
    }
  }
};
</script>

<style scoped>
.edit-smoothie {
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}

.edit-smoothie h2 {
  font-size: 2em;
  margin: 20px auto;
}

.edit-smoothie .field {
  margin: 20px auto;
}

.edit-smoothie .field small {
  font-size: 8px;
  color: lightgray;
}
</style>
