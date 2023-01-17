<script lang="ts">
  import { combineClasses } from '$lib/util/classes';

  let classExtension: string = '';
  export { classExtension as class };

  export let overflow: 'nowrap' | 'wrap' | 'wrap-reverse' = 'wrap';
  function getOverflowClass(_overflow: typeof overflow) {
    switch (_overflow) {
      case 'nowrap':
        return 'flex-nowrap';
      case 'wrap':
        return 'flex-wrap';
      case 'wrap-reverse':
        return 'flex-wrap-reverse';
    }
  }

  export let direction: 'col' | 'row' | 'col-reverse' | 'row-reverse' = 'col';
  function getFlexDirectionClass(_direction: typeof direction) {
    switch (_direction) {
      case 'col':
        return 'flex-col';
      case 'row':
        return 'flex-row';
      case 'col-reverse':
        return 'flex-col flex-col-reverse';
      case 'row-reverse':
        return 'flex-row flex-row-reverse';
      case undefined:
        return 'flex-col';
    }
  }

  export let justifyContent:
    | 'justify-start'
    | 'justify-end'
    | 'justify-center'
    | 'justify-between'
    | 'justify-around'
    | 'justify-evenly' = 'justify-start';

  export let justifyItems:
    | 'justify-items-start'
    | 'justify-items-end'
    | 'justify-items-center'
    | 'justify-items-stretch' = 'justify-items-start';

  export let alignContent:
    | 'content-start'
    | 'content-end'
    | 'content-center'
    | 'content-between'
    | 'content-around'
    | 'content-evenly'
    | 'content-baseline' = 'content-start';

  export let alignItems:
    | 'items-start'
    | 'items-end'
    | 'items-center'
    | 'items-baseline'
    | 'items-stretch' = 'items-start';

  $: _overflowClass = getOverflowClass(overflow);
  $: _directionClass = getFlexDirectionClass(direction);
  $: clazz = combineClasses(
    'flex',
    _directionClass,
    _overflowClass,
    classExtension,
    justifyContent,
    justifyItems,
    alignContent,
    alignItems
  );
</script>

<div class={clazz}>
  <slot class />
</div>
