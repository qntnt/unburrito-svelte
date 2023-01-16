<script>
  import Card from '$lib/components/Card.svelte';
  import Container from '$lib/components/layout/Container.svelte';
  import { Brush } from '$lib/components/decorations/Brush';
  import BrushEffect from '$lib/components/decorations/BrushEffect.svelte';
  import Headline from '$lib/components/Headline.svelte';
  import { randomIn } from '$lib/util/random';
  import { Vec3 } from '$lib/util/vector';

  function getColor() {
    const colors = ['#9000ff55', '#e6eb5d55', '#e3099355', '#00E3DD55', '#1415D455', '#F4010B55'];
    const i = Math.floor(randomIn(0, colors.length));
    return colors[i];
  }
</script>

<Headline>
  <h1 class="text-primary">Unburrito Svelte UI Decorations!</h1>
</Headline>

<Container>
  <h1>BrushEffect</h1>
  <Card>
    <BrushEffect
      animationTimeMs={500}
      initBrushes={(ctx) => {
        const brushes = [];
        const brushCount = 10;
        for (let i = 0; i < brushCount; i++) {
          const position = new Vec3([-10, (ctx.canvas.height / (brushCount - 1)) * i, 0]);
          const velocity = new Vec3([randomIn(4, 8), randomIn(-2, 2), 0.4]);
          const rotation = randomIn(2 * Math.PI - Math.PI / 4, 2 * Math.PI + Math.PI / 4);
          brushes.push(new Brush(position, velocity, 20, 10, rotation, getColor()));
        }
        return brushes;
      }}
    />
  </Card>
  <Card>
    <BrushEffect
      animationTimeMs={500}
      initBrushes={(ctx) => {
        const brushes = [];
        const brushCount = 10;
        for (let i = 0; i < brushCount; i++) {
          const position = new Vec3([-10, (ctx.canvas.height / (brushCount - 1)) * i, 0]);
          const velocity = new Vec3([randomIn(4, 8), randomIn(-4, 4), 0.8]);
          const rotation = randomIn(2 * Math.PI - Math.PI / 4, 2 * Math.PI + Math.PI / 4);
          brushes.push(
            new Brush(position, velocity, 20, 15, rotation, getColor(), {
              extra: {
                angularVelocity: (randomIn(-1, 1) * Math.PI) / 4 / 4
              },
              update: (ctx, delta, brush) => {
                brush.rotation = brush.rotation + (brush.extra?.angularVelocity ?? 0 * delta);
                brush.position = brush.position.add(brush.velocity.scale(delta));
              }
            })
          );
        }
        return brushes;
      }}
    />
  </Card>
</Container>
