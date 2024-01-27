<template>
  <!-- <router-link to="/">go to home</router-link> -->
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
export default {

}
</script>

<style>

</style>
