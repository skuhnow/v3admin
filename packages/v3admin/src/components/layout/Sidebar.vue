<template>
  <v-navigation-drawer app :value="value" @input="(v) => $emit('input', v)">
    <v-list nav>
      <v-list-item v-for="menuItem in menu" link :to="menuItem.link">
        <v-list-item-content>
          <v-list-item-title v-text="menuItem.text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
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
