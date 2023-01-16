<div class="shimmer">
  <slot />
</div>

<style lang="scss">
  $shimmer-color: #fff;
  $shimmer-color-2: #fff5;

  .shimmer {
    position: relative;

    &:after {
      mask: linear-gradient(-60deg, $shimmer-color 30%, $shimmer-color-2, $shimmer-color 70%)
        right/300% 100% 1px;
      -webkit-mask: linear-gradient(
          -60deg,
          $shimmer-color 30%,
          $shimmer-color-2,
          $shimmer-color 70%
        )
        right/300% 100%;
      animation: shimmer 2s infinite;
      content: '';
      background-color: var(--color-overlay);
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }

  @keyframes shimmer {
    100% {
      -webkit-mask-position: left;
    }
  }
</style>
