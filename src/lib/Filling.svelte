<script lang="ts">
  type T = $$Generic;
  export let value: T | undefined = undefined;
  export let error: any = undefined;
</script>

{#if $$slots.empty && value === undefined && error === undefined}
  <div class="unburrito-empty">
    <slot name="empty" />
  </div>
{/if}
{#if $$slots.value && value !== undefined}
  <div class="unburrito-value">
    <slot name="value" {value} />
  </div>
{/if}
{#if $$slots.error && error !== undefined}
  <div class="unburrito-error">
    <slot name="error" {error} />
  </div>
{/if}
