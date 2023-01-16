<script lang="ts">
  import { onDestroy } from 'svelte';
  import { Burrito, type BurritoLike } from 'unburrito';
  import Filling from './Filling.svelte';

  type T = $$Generic;
  export let source: BurritoLike<T>;

  $: burrito = Burrito.wrap(source);

  let subscription: ReturnType<typeof burrito.subscribe>;
  let lastValue: T | undefined;
  $: exposedValue = lastValue as T;
  let lastError: any | undefined;
  $: exposedError = lastError as any;

  $: {
    subscription?.unsubscribe();
    lastValue = undefined;
    lastError = undefined;
    subscription = burrito.subscribe({
      next: (filling) => {
        lastValue = filling;
      },
      error: (error) => {
        if (error) lastError = error;
      }
    });
  }

  onDestroy(() => {
    subscription?.unsubscribe();
  });
</script>

<Filling value={lastValue} error={lastError}>
  <slot name="empty" slot="empty" />
  <slot name="value" slot="value" value={exposedValue} />
  <slot name="error" slot="error" error={exposedError} />
</Filling>
