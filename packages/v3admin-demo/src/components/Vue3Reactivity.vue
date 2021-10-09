<template>
  <div>x: {{ foo.state.name }}</div>
  <v-text-field label="Firstname" v-model="foo.firstName" />
  <v-text-field label="Lastname" v-model="foo.lastName" />
  <div>#{{ foo.firstName }} - {{ foo.lastName }}#</div>
</template>
<script lang="ts">
import { Options, setup, Vue } from 'vue-class-component';
import { test } from './test';

@Options({})
export default class App extends Vue {
  foo = setup(() => test());

  created() {
    this.foo.state.name;
    console.log(this.foo.foo());
  }
}
</script>
