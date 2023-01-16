<script lang="ts">
  let clazz: string = '';
  export { clazz as class };
</script>

<div class={`flex-list ${clazz}`}>
  <slot />
</div>

<style>
  .flex-list {
    display: flex;
    align-items: stretch;
    justify-content: start;
  }
  .flex-list > * {
    flex: 1;
  }
</style>
