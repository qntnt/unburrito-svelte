<script lang="ts">
  import { combineClasses } from '$lib/util/classes';
  import Flex from './layout/Flex.svelte';

  export let divided = false;
  $: dividedClass = divided ? 'divide-y' : '';

  export let fluid: boolean = false;
  $: stretchClass = fluid ? 'w-full' : '';

  let classExtension: string = '';
  export { classExtension as class };

  $: clazz = combineClasses(dividedClass, classExtension, stretchClass);
</script>

<div class={`card rounded border border-inherit ${clazz}`}>
  {#if $$slots.title}
    <div class="card-title p-2">
      <slot name="title" />
    </div>
  {/if}
  <div class="card-content p-2">
    <slot />
  </div>
  {#if $$slots.actions}
    <Flex direction="row-reverse" class="card-actions p-2 space-x-2 space-x-reverse">
      <slot name="actions" />
    </Flex>
  {/if}
</div>

<style lang="postcss">
</style>
