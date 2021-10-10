<template>
  <v-app>
    <v3-sidebar v-model="drawer" :menu="sidebarMenu" />
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
<script lang="ts">
import navigation from './navigation'
import { ref } from 'vue'

export default {
  setup() {
    const drawer = ref(false)
    const sidebarMenu = ref(navigation())

    return { sidebarMenu, drawer }
  },
}
</script>
