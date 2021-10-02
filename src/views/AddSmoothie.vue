<template>
  <div class="add-smoothie container">
    <h2 class="center-align indigo-text">Add New Smoothie Recipe:</h2>
    <form v-on:submit.prevent="AddSmoothie">
      <div class="field title">
        <label for="title">Smoothie Title</label>
        <input type="text" name="title" v-model="title" />
      </div>
      <div class="ingredient-list">
        <span
          class="chip"
          v-for="(ing, index) in ingredients"
          v-bind:key="index"
        >
          {{ ing }}
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
          ADD SMOOTHIE
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
const URI = process.env.VUE_APP_PATH;
import slugify from "slugify";

export default {
  name: "AddSmoothie",
  data() {
    return {
      title: null,
      another: null,
      ingredients: [],
      feedback: null,
      slug: null
    };
  },
  methods: {
    async AddSmoothie() {
      const titleSet = title => {
        if (title) {
          this.feedback = null;
          this.slug = slugify(title, {
            replacement: "-",
            remove: /[*+~.()'"!:@]/g,
            lower: true
          });
        } else {
          this.feedback = "You must enter a smoothie title";
        }
      };
      const ingSet = ing => {
        if (ing) {
          this.AddIng();
        } else {
          this.feedback = "You must enter a value to add an ingredient";
        }
      };

      // Checking if title is set (if so, auto format slug)
      titleSet(this.title);
      // Checking if ingredients are set
      ingSet(this.another);

      if (this.title && this.ingredients.length > 0) {
        try {
          const res = await axios.post(URI + "ingredients", {
            ingredients: this.ingredients.map(ingredient => {
              return { name: ingredient };
            }),
            name: this.title,
            slug: this.slug
          });
          return res.data.id ? this.$router.push("/") : null;
        } catch (error) {
          console.log(error);
        }
      }
    },
    AddIng() {
      if (this.another) {
        this.ingredients.push(this.another);
        this.another = null;
        this.feedback = null;
      } else {
        this.feedback = "You must enter a value to add an ingredient";
      }
    },
    DeleteIng(i) {
      this.ingredients.splice(i, 1);
    }
  }
};
</script>

<style scoped>
.add-smoothie {
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}

.add-smoothie h2 {
  font-size: 2em;
  margin: 20px auto;
}

.add-smoothie .field {
  margin: 20px auto;
}

.add-smoothie .field small {
  font-size: 8px;
  color: lightgray;
}
</style>
