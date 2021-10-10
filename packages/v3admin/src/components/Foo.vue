<template>
  <div>
    <h1>Das ist ein Test!</h1>
    <span v-if='foo'>foo is true</span>
    <span v-else>foo is false</span>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Foo extends Vue {

  foo: boolean = false
}
</script>
