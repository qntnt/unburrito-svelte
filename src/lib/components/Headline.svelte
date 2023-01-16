<script>
  import Container from '$lib/components/layout/Container.svelte';
</script>

<div class="headline">
  {#if $$slots.background}
    <div class="background">
      <slot name="background" class="background" />
    </div>
  {/if}
  <Container>
    <div class="content">
      <slot />
    </div>
  </Container>
</div>

<style lang="scss">
  .headline {
    position: relative;
    font-family: var(--font-family-headline);
  }
  .content {
    z-index: 1;
    position: relative;
    height: 100%;
    vertical-align: middle;
    display: flex;
    flex-direction: column;
    justify-content: end;
  }
  .background {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
</style>
