<script lang="ts">
  import { getColorClass, type AnyColor, type BaseColor } from '$lib/util/colors';

  export let backgroundColor: AnyColor = 'surface-secondary';
  export let textColor: AnyColor = 'text';
  export let onClick: (() => void) | undefined = undefined;

  $: backgroundClass = getColorClass('background', backgroundColor);
  $: hoverClass = onClick ? getColorClass('hover-background', backgroundColor, 'lighter') : '';
  $: interactiveClass = onClick ? 'interactive' : '';

  $: textClass = getColorClass('text', textColor);
</script>

<button
  class={`tag ${backgroundClass} ${textClass} ${hoverClass} ${interactiveClass}`}
  on:click={onClick}
  disabled={onClick === undefined}><slot /></button
>

<style lang="scss">
  @import '../css/mixins.scss';
  .tag {
    @include border();
    padding: var(--spacing-xxs);
  }
</style>
