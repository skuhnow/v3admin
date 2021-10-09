<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list nav>
        <v-list-item link to="/">Home</v-list-item>
        <v-list-item link to="/about">About</v-list-item>
        <v-list-item link to="/hello">Hello</v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
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
import { Options, setup, Vue } from 'vue-class-component';

@Options({})
export default class App extends Vue {
  drawer: boolean = false;
}
</script>
