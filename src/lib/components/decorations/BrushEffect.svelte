<script lang="ts">
  import { onMount } from 'svelte';
  import type { Brush } from './Brush';

  type T = $$Generic;

  export let animationTimeMs: number;

  let startTimestamp: DOMHighResTimeStamp | undefined;
  let canvasEl: HTMLCanvasElement;

  export let initBrushes: (ctx: CanvasRenderingContext2D) => Brush<T>[] = (ctx) => {
    return [];
  };

  let brushes: Brush<T>[] = [];

  function drawLine(ctx: CanvasRenderingContext2D, delta: number, brush: Brush<T>) {
    brush.updateAndDab(ctx, delta);
  }

  function drawLines(ctx: CanvasRenderingContext2D, timestamp?: DOMHighResTimeStamp) {
    if (startTimestamp === undefined && timestamp) {
      startTimestamp = timestamp;
    }
    if (timestamp && startTimestamp && timestamp - startTimestamp > animationTimeMs) {
      return;
    }

    brushes.forEach((b) => {
      drawLine(ctx, (timestamp ? (startTimestamp ? timestamp - startTimestamp : 0) : 0) / 1000, b);
    });

    // drawLines(ctx, (timestamp ?? 0) + 5);
    window.requestAnimationFrame((timestamp) => drawLines(ctx, timestamp));
  }

  function resizeCanvasToDisplaySize(_canvas: HTMLCanvasElement) {
    // look up the size the canvas is being displayed
    const width = _canvas.clientWidth;
    const height = _canvas.clientHeight;

    // If it's resolution does not match change it
    if (_canvas.width !== width || _canvas.height !== height) {
      _canvas.width = width;
      _canvas.height = height;
      return true;
    }

    return false;
  }

  onMount(() => {
    const ctx = canvasEl.getContext('2d');
    resizeCanvasToDisplaySize(canvasEl);
    ctx?.clearRect(0, 0, 200, 200);
    if (ctx) {
      brushes = initBrushes(ctx);
      drawLines(ctx);
    }
  });
</script>

<canvas bind:this={canvasEl} />

<style lang="scss">
  canvas {
    width: 100%;
    height: 100%;
  }
</style>
