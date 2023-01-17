<script lang="ts">
  import { combineClasses } from '$lib/util/classes';

  export let onClick: (() => void) | undefined = undefined;
  type Variant = 'default' | 'positive' | 'negative' | 'warning';
  export let variant: Variant = 'default';
  function getVariantClass(_variant: Variant) {
    switch (_variant) {
      case 'default':
        return '';
      case 'positive':
        return 'bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-800 disabled:bg-emerald-600  text-neutral-50';
      case 'negative':
        return 'bg-red-600 hover:bg-red-500 active:bg-red-800 disabled:bg-red-600  text-neutral-50';
      case 'warning':
        return 'bg-amber-600 hover:bg-amber-500 active:bg-amber-800 disabled:bg-amber-600  text-neutral-50';
    }
  }
  $: variantClass = getVariantClass(variant);
  $: clazz = combineClasses('rounded-full border border-inherit p-1 text-xs', variantClass);
</script>

<button class={clazz} on:click={onClick} disabled={onClick === undefined}><slot /></button>
