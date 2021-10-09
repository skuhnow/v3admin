import { reactive, computed, ref } from 'vue';
import { ComputedRef, Ref, UnwrapRef } from '@vue/reactivity';

interface State {
  name: string;
}

export function test() {
  const state: State = reactive({
    name: 'peter',
  });

  const firstName: Ref<UnwrapRef<string>> = ref('');
  const lastName: Ref<UnwrapRef<string>> = ref('');

  const fullName: ComputedRef<string> = computed(() => {
    return firstName.value + ' ' + lastName.value;
  });

  function foo() {
    // return 'bar';
  }

  function setFirstName(event) {
    firstName.value = event.target.value;
  }

  function setLastName(event) {
    lastName.value = event.target.value;
  }

  return {
    state,
    foo,
    firstName,
    lastName,
    setFirstName,
    setLastName,
    fullName,
  };
}
