<script lang="ts">
  import { error } from '@sveltejs/kit';
  import { onDestroy } from 'svelte';
  import { Burrito, type BurritoLike } from 'unburrito';
  import Filling from './Filling.svelte';

  type T = $$Generic;

  export let source: BurritoLike<T>;
  $: burrito = Burrito.wrap(source);

  let subscription: ReturnType<typeof burrito.subscribe>;
  interface Item<T> {
    value?: T;
    err?: any;
  }
  let array: Item<T>[] = [];

  function addItem(item: Item<T>) {
    array = [...array, item];
  }

  $: {
    subscription?.unsubscribe();
    subscription = burrito.subscribe({
      next: (value) => {
        addItem({ value });
      },
      error: (error) => {
        addItem({ err: error });
      }
    });
  }

  onDestroy(() => {
    subscription?.unsubscribe();
  });
</script>

{#each array as item}
  <Filling value={item.value} error={item.err}>
    <slot name="value" slot="value" value={item.value} />
    <slot name="error" slot="error" error={item.err} />
  </Filling>
{/each}
