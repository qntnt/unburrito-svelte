<script lang="ts">
  import type { Size } from '$lib/util/sizes';
  import FlexList from '$lib/components/layout/FlexList.svelte';

  let clazz: string = '';
  export { clazz as class };
  export let overflow: 'wrap' | 'scroll' = 'wrap';
  export let gap: Size | 'none' = 'xs';

  $: classMod = `overflow-${overflow} gap-${gap}`;
</script>

<FlexList class={`row ${classMod} ${clazz}`}>
  <slot class />
</FlexList>

<style global lang="scss">
  .row {
    width: 100%;
    flex-direction: row;
  }
  .overflow-wrap {
    flex-wrap: wrap;
  }
  .overflow-scroll {
    flex-wrap: nowrap;
    overflow-x: scroll;
  }
  @each $size-name, $size in $sizes {
    .gap-#{$size-name} {
      gap: var(--spacing-#{$size-name});
    }
  }
</style>
