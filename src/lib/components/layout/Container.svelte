<div class="container">
  <slot />
</div>

<style lang="scss">
  @import '../../css/sizes.scss';

  .container {
    height: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  $breakpoint-phone-sm: 600px;
  $breakpoint-phone: 768px;
  $breakpoint-tablet: 992px;
  @media only screen and (max-width: $breakpoint-phone-sm) {
    .container {
      width: 100%;
      margin-left: $spacing-xs;
      margin-right: $spacing-xs;
    }
  }
  @media only screen and (min-width: $breakpoint-phone-sm) {
    .container {
      width: $breakpoint-phone-sm - ($spacing-xs * 2);
    }
  }
  @media only screen and (min-width: $breakpoint-phone) {
    .container {
      width: $breakpoint-phone - ($spacing-xs * 2);
    }
  }
</style>
