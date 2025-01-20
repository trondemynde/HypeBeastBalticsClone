<template>
  <div class="app-container">
    <MyHeader />
      <div id="app">
        <router-view />
      </div>
    <MyFooter class="margin-top auto"/>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyFooter from './components/MyFooter.vue';
export default {
  components: { MyHeader, MyFooter },
  name: 'App',
};
</script>

<style lang="scss" scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure the body takes up the full viewport height */
}
#app {
  flex-grow: 1; /* This makes the content section expand to fill available space */
}
.footer {
  margin-top: auto; /* Push the footer to the bottom */
}
</style>
