<template>
  <div class="homepage">
    <h1>Products</h1>
    <div class="product-grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-cart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import api from "@/api";
import ProductCard from "@/components/MyProductCard.vue";

export default {
  components: { ProductCard },
  data() {
    return {
      products: [],
    };
  },
  async created() {
    try {
      const response = await api.get("/products");
      this.products = response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },
  methods: {
    async addToCart(product) {
      try {
        await api.post("/cart", { id: product.id, quantity: 1 });
        alert(`${product.name} added to cart!`);
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    },
  },
};
</script>

<style lang="scss" sc>
@import "@/assets/styles/variables.scss";

.homepage {
  .hero {
    text-align: center;
    padding: 2rem;
    background: url('../assets/images/backroundplaceholder.jpg') no-repeat center/cover;
    color: $secondary-color;

    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.25rem;
    }
  }

  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: $padding;
    padding: $padding;
  }
}
</style>
