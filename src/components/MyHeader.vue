<template>
    <header class="header">
      <div class="header__logo">HYPEBEAST</div>
      <nav class="header__nav">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/cart">Cart</a>
      </nav>
    </header>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: $padding;
    background-color: $primary-color;
    color: $secondary-color;
  
    &__logo {
      font-size: 1.5rem;
      font-weight: bold;
    }
  
    &__nav a {
      margin: 0 $padding;
      font-size: 1rem;
    }
}
</style>
