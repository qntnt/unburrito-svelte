<script lang="ts">
  import { getColorClass, type AnyColor, type TextColor } from '$lib/util/colors';
  import { getSizeClass } from '$lib/util/sizes';

  export let onClick: (() => void) | undefined = undefined;
  export let backgroundColor: AnyColor = 'surface';
  export let textColor: AnyColor = 'text';

  $: backgroundColorClass = onClick
    ? getColorClass('background', backgroundColor)
    : getColorClass('background', backgroundColor, 'darker');
  $: hoverBackgroundColorClass = onClick
    ? getColorClass('hover-background', backgroundColor, 'lighter')
    : '';
  $: textColorClass = getColorClass('text', textColor);
  $: paddingClass = getSizeClass('padding', 's');
</script>

<button
  class={`interactive ${backgroundColorClass} ${textColorClass} ${paddingClass} ${hoverBackgroundColorClass}`}
  on:click={onClick}
  disabled={onClick === undefined}
>
  <slot />
</button>

<style lang="scss">
  button {
    @include border();
    border-top-right-radius: $spacing-l;
    border-bottom-left-radius: $spacing-l;
    border-top-left-radius: $spacing-xl;
    border-bottom-right-radius: $spacing-xl;
    border-width: $border-width * 2;

    font-weight: bold;
  }
</style>
