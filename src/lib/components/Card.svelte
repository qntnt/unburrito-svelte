<script lang="ts">
  import Divider from '$lib/components/layout/Divider.svelte';

  export let divided = false;
  let clazz: string = '';
  export { clazz as class };
</script>

<div class={`card ${clazz}`}>
  {#if $$slots.title}
    <div class="card-title">
      <slot name="title" />
    </div>
  {/if}
  {#if $$slots.title && $$slots.default && divided}
    <Divider hidden={!divided} />
  {/if}
  <div class="card-content">
    <slot />
  </div>
  {#if $$slots.actions && $$slots.default && divided}
    <Divider hidden={!divided} />
  {/if}
  {#if $$slots.actions}
    <div class="card-actions">
      <slot name="actions" />
    </div>
  {/if}
</div>

<style lang="scss">
  @import '../css/mixins.scss';
  .card {
    @include border();
    @include surface($type: lighter);
  }
  .card-content {
    padding: $spacing-s;
  }
  .card-title {
    padding: $spacing-s;
  }
  .card-actions {
    display: flex;
    flex-direction: row;
    justify-content: end;
    padding: $spacing-s;
  }
</style>
