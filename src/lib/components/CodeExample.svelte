<script lang="ts">
  import Card from './Card.svelte';

  export let code: string;
</script>

<Card>
  <slot />
</Card>
<pre>
{code}
</pre>

<style lang="scss">
  pre {
    @include border();
    @include surface($type: inverted);
    padding: $spacing-m;
    overflow-x: scroll;
  }
</style>
