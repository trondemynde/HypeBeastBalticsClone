
<template>
    <div class="cart">
      <h1>Your Cart</h1>
      <div v-if="cart.length > 0">
        <div v-for="item in cart" :key="item.id" class="cart-item">
          <p>{{ item.name }}</p>
          <p>Quantity: {{ item.quantity }}</p>
          <p>Price: ${{ item.price }}</p>
          <button @click="removeFromCart(item.id)">Remove</button>
        </div>
      </div>
      <p v-else>Your cart is empty.</p>
    </div>
  </template>
  
  <script>
  import api from "@/api";
  
  export default {
    data() {
      return {
        cart: [],
      };
    },
    async created() {
      await this.fetchCart();
    },
    methods: {
      async fetchCart() {
        try {
          const response = await api.get("/cart");
          this.cart = response.data;
        } catch (error) {
          console.error("Error fetching cart:", error);
        }
      },
      async removeFromCart(id) {
        try {
          await api.delete(`/cart/${id}`);
          await this.fetchCart();
        } catch (error) {
          console.error("Error removing item from cart:", error);
        }
      },
    },
  };
  </script>
  