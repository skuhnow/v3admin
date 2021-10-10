<template>
  <v-navigation-drawer app :value="value" @input="(v) => $emit('input', v)">
    <v-list nav>
      <v-list-item v-for="menuItem in menu" link :to="menuItem.link">{{ menuItem.text }}</v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { NavigationElement } from '@/types/NavigationElement'

export default defineComponent({
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    menu: {
      type: Array as PropType<Array<NavigationElement>>,
      default: [],
    },
  },
})
</script>
