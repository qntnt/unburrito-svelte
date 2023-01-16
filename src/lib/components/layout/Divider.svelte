<script lang="ts">
  type Spacing = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'none';
  type Orientation = 'vertical' | 'horizontal';

  export let hidden: boolean = false;
  export let spacing: Spacing = 'm';
  export let orientation: Orientation = 'vertical';

  $: orientationClass = `${orientation}`;
  $: spacingClass = `spacing-${spacing}`;
  $: hiddenClass = hidden ? 'hidden' : '';
</script>

<div class={`divider ${orientationClass} ${spacingClass} ${hiddenClass}`} />

<style lang="scss">
  @import '../../css/sizes.scss';
  .divider {
    background-color: var(--color-border);
  }
  .divider.vertical {
    padding: 0;
    width: auto;
    height: $border-width;
  }
  .divider.horizontal {
    padding: 0;
    width: $border-width;
    height: auto;
  }

  .vertical.spacing-xxs {
    margin-top: calc($spacing-xxs / 2);
    margin-bottom: calc($spacing-xxs/ 2);
  }
  .vertical.spacing-xs {
    margin-top: calc($spacing-xs/ 2);
    margin-bottom: calc($spacing-xs/ 2);
  }
  .vertical.spacing-s {
    margin-top: calc($spacing-s/ 2);
    margin-bottom: calc($spacing-s/ 2);
  }
  .vertical.spacing-m {
    margin-top: calc($spacing-m/ 2);
    margin-bottom: calc($spacing-m/ 2);
  }
  .vertical.spacing-l {
    margin-top: calc($spacing-l/ 2);
    margin-bottom: calc($spacing-l/ 2);
  }
  .vertical.spacing-xl {
    margin-top: calc($spacing-xl/ 2);
    margin-bottom: calc($spacing-xl/ 2);
  }
  .vertical.spacing-xxl {
    margin-top: calc($spacing-xxl/ 2);
    margin-bottom: calc($spacing-xxl/ 2);
  }

  .horizontal.spacing-xxs {
    margin-left: calc($spacing-xxs / 2);
    margin-right: calc($spacing-xxs / 2);
  }
  .horizontal.spacing-xs {
    margin-left: calc($spacing-xs / 2);
    margin-right: calc($spacing-xs / 2);
  }
  .horizontal.spacing-s {
    margin-left: calc($spacing-s / 2);
    margin-right: calc($spacing-s / 2);
  }
  .horizontal.spacing-m {
    margin-left: calc($spacing-m / 2);
    margin-right: calc($spacing-m / 2);
  }
  .horizontal.spacing-l {
    margin-left: calc($spacing-l / 2);
    margin-right: calc($spacing-l / 2);
  }
  .horizontal.spacing-xl {
    margin-left: calc($spacing-xl / 2);
    margin-right: calc($spacing-xl / 2);
  }
  .horizontal.spacing-xxl {
    margin-left: calc($spacing-xxl / 2);
    margin-right: calc($spacing-xxl / 2);
  }
  .spacing-none {
    margin: 0;
  }
</style>
