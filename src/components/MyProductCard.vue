<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.name" />
    <h3>{{ product.name }}</h3>
    <p>${{ product.price }}</p>
    <button @click="addToCart">Add to Cart</button>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.product);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  padding: $padding;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  h3 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
  }

  button {
    background: $primary-color;
    color: $secondary-color;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
      opacity: 0.9;
    }
  }
}
</style>
