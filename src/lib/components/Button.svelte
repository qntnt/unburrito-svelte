<script lang="ts">
  export let onClick: (() => void) | undefined = undefined;

  type Variant = 'default' | 'positive' | 'negative' | 'warning';
  export let variant: Variant = 'default';
  function getVariantClass(_variant: Variant) {
    switch (_variant) {
      case 'default':
        return 'bg-neutral-100 hover:bg-neutral-50 active:bg-neutral-200 disabled:bg-neutral-200';
      case 'positive':
        return 'bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-800 disabled:bg-emerald-800 text-neutral-50';
      case 'negative':
        return 'bg-red-600 hover:bg-red-500 active:bg-red-800 disabled:bg-red-800 text-neutral-50';
      case 'warning':
        return 'bg-amber-600 hover:bg-amber-500 active:bg-amber-800 disabled:bg-amber-800 text-neutral-50';
    }
  }
  $: variantClass = getVariantClass(variant);
</script>

<button
  class={`rounded border border-inherit px-2 py-1 ${variantClass} disabled:cursor-not-allowed`}
  on:click={onClick}
  disabled={onClick === undefined}
>
  <slot />
</button>
