<script lang="ts">
  import FlexList from '$lib/components/layout/FlexList.svelte';

  let clazz: string = '';
  export { clazz as class };

  export let overflow: 'hidden' | 'visible' | 'scroll' = 'hidden';
  $: classMod = `overflow-${overflow}`;
</script>

<FlexList class={`column ${clazz} ${classMod}`}>
  <slot />
</FlexList>

<style global>
  .column {
    flex-direction: column;
  }
  .overflow-hidden {
    overflow-y: hidden;
  }
  .overflow-visible {
    overflow-y: visible;
  }
  .overflow-scroll {
    overflow-y: scroll;
  }
</style>
