<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import CodeExample from '$lib/components/CodeExample.svelte';
  import Container from '$lib/components/layout/Container.svelte';
  import { Brush } from '$lib/components/decorations/Brush';
  import BrushEffect from '$lib/components/decorations/BrushEffect.svelte';
  import Headline from '$lib/components/Headline.svelte';
  import Last from '$lib/Last.svelte';
  import { randomIn } from '$lib/util/random';
  import { Vec3 } from '$lib/util/vector';
  import { interval, tap } from 'rxjs';
  import { Burrito } from 'unburrito';

  function getColor(idx?: number) {
    const colors = ['#9000ff55', '#e6eb5d55', '#e3099355', '#00E3DD55', '#1415D455', '#F4010B55'];
    const i = idx !== undefined ? idx : Math.floor(randomIn(0, colors.length));
    return colors[i];
  }

  function randomNumber() {
    return Math.floor(randomIn(1, 10));
  }

  function generateList(size: number) {
    const l = [];
    for (let i = 0; i < size; i++) {
      l.push(randomNumber());
    }
    return l;
  }

  let exampleList = generateList(10);

  function refreshExampleList() {
    exampleList = generateList(10);
  }

  let lastThree: number[] = [];
  let exampleBurrito = Burrito.wrap(interval(1000))
    .map(() => randomNumber())
    .pipe(
      tap((n) => {
        if (lastThree.length >= 4) lastThree.pop();
        lastThree.unshift(n);
      })
    )
    .map(() => lastThree);

  function refreshExampleObservable() {
    lastThree = [];
  }

  function fetchPlaceholder() {
    return Burrito.wrap(
      fetch(`https://jsonplaceholder.typicode.com/users/${Math.floor(randomIn(1, 10))}`).then(
        (res) => res.json()
      )
    ).delay(1000);
  }

  let placeholderBurrito = fetchPlaceholder();

  function refreshPlaceholder() {
    placeholderBurrito = fetchPlaceholder();
  }
</script>

<div class="bg">
  <BrushEffect
    animationTimeMs={1000}
    initBrushes={(ctx) => {
      const brushes = [];
      const brushCount = Math.floor(ctx.canvas.width / 40);
      for (let i = 0; i < brushCount; i++) {
        const position = new Vec3([(ctx.canvas.width / (brushCount - 1)) * i, 0, 0]);
        const velocity = new Vec3([randomIn(-2, 2), randomIn(2, 4), 0.4]);
        const rotation = randomIn(2 * Math.PI - Math.PI / 4, 2 * Math.PI + Math.PI / 4);
        brushes.push(
          new Brush(position, velocity, 20, 15, rotation, getColor(3), {
            extra: {
              angularVelocity: (randomIn(-1, 1) * Math.PI) / 4 / 4
            },
            update: (ctx, delta, brush) => {
              brush.rotation = randomIn(0, 2 * Math.PI);
              brush.position = brush.position.add(brush.velocity.scale(delta));
            }
          })
        );
      }
      return brushes;
    }}
  />
</div>

<Headline>
  <h1 class="text-primary">Unburrito</h1>
</Headline>

<Container>
  <blockquote>
    <small>
      If you already know the burrito analogy for monads, just skip this section. This is a modified
      version of that analogy that will probably just confuse you.
    </small>
  </blockquote>
  <h2>What is Unburrito?</h2>
  <p>Well it's a little hard to explain, but I'll try my best...</p>
  <p>
    To start, you need to know what a <code>list</code> is. A <code>list</code> is an order
    collection of items. For now, let's define a
    <code>list</code> of numbers with this pseudocode:
  </p>
  <pre>ourList = [1, 2, 3]</pre>
  <p>
    The <code>list</code> is <b>not</b> the numbers inside the brackets. It's actually the brackets
    themselves. You might be wondering, "What does that mean? Can you have a list with nothing in
    it?". Short answer, <b>yes</b>. That's actually called an <b>empty list</b>. It looks something
    like this:
  </p>
  <pre>emptyList = []</pre>
  <p>Ok, so hopefully you have a good idea what what a list is and isn't.</p>
  <h2>What does this have to do with burritos?</h2>
  <p>
    Now I can explain why this library is called Last. Basically, the name Last is just a reference
    to an analogy for a certain type of collection of things. Let's consider an array where we don't
    know the elements in it. I'll use <code>_</code> to denote an unknown number:
  </p>
  <pre>unknownNumberList = [{exampleList.map((n) => '_'.toString()).join(', ')}, ...]</pre>
  <p>
    So we don't know what <code>unknownNumberList</code> holds inside it, nor do we know how many elements
    it has. That's ok. Let's just think of each item as a burrito where we don't know what it's filled
    with. It's also ok that we don't know how many "burritos" are in this list.
  </p>
  <p>
    I'm just going to rewrite <code>unknownNumberList</code> as if it contains burritos with unknown
    numbers as filling.
  </p>
  <pre>numberBurritoList = [numberBurrito, numberBurrito, numberBurrito, ...]</pre>
  <p>
    Ok, nice funny looking list. But how is that helpful?
    <b>Now we can define what it means to "unburrito" this list.</b> For each burrito in the list, until
    the end of this, let's just unwrap each burrito and inspect the contents. We can define this procedure
    without even needing to know how long this list is.
  </p>
  <pre>{`function inspectNumber(n) { if (n <= 5) print(n) }

function inspectAllBurritos(numberBurritoList) {
    numberBurritoList.forEach((numberBurrito) => {
        numberInBurrito = numberBurrito.unwrap();
        inspectNumber(numberInBurrito)
    })
}`}</pre>
  <p>
    The actual list was <code>[{exampleList.toString()}]</code> so here's what we printed:
    <code>{exampleList.filter((n) => n <= 5).join(' ')}</code>. <Button
      on:click={refreshExampleList}>Refresh</Button
    >
  </p>
  <p>
    See how we had to "unwrap" the burrito in order to inspect its filling? Simple stuff. Now for
    the cool part.
    <b>Lists aren't the only collections that can be "unburrito'd"</b>
  </p>
  <h2>Lists and Streams</h2>
  <p>
    Imagine you are a health inspector in a burrito factory. As burritos come down the assembly
    line, you have to unwrap them and inspect the contents of the burritos. Someone after you will
    wrap them back up, don't worry about it.
  </p>
  <p>
    You may want to think of the assembly line as a list of burritos, like we did in the previous
    section. Unfortunately, this assembly line has no end and that list would just grow and grow to
    infinity. We can't have that. Luckily, there's another type of collection that will help us with
    this problem. This type of collection is called a <code>stream</code>. While a <code>list</code>
    represents a sequence of things in <b>space</b>, a <code>stream</code> represents a sequence of
    things with respect to <b>time</b>.
  </p>
  <p>
    Here's a stream of numbers where we get a new number every second:
    <code>
      <Last source={exampleBurrito}>
        <span slot="value" let:value>
          {#if value.length >= 1}
            <b>{value[0]}</b>
          {/if}
          {value.length > 3 ? value.slice(1, 3).join(' ') + '...' : value.slice(1, 3).join(' ')}
        </span>
      </Last>
    </code>
    <Button on:click={refreshExampleObservable}>Refresh</Button>
  </p>
  <p>
    We can't iterate over a <code>stream</code> the same way we can with a <code>list</code>. We
    have to "subscribe to" or "watch" a stream. When we subscribe to a stream, we can react to each
    item that flows through it.
  </p>
  <pre>{`numberStream = <1 ..(5s wait).. 2 ..(5s wait).. 3>
numberStream.subscribe((number) => {
    print(number)
})`}</pre>
  <p>
    This looks eerily similar to how we inspected the list of burritos. Well it turns out lists and
    streams are so similar that you can convert one into the other and vise versa. Because of this,
    we can just assume that streams and lists are just burrito sequences and look through both of
    them using the same procedures.
    <b>This means that we don't have to write the same code for lists and streams!</b> We just need to
    handle burrito sequences.
  </p>
  <h2>It gets better, I "promise"</h2>
  <p>
    Just handling streams and lists is pretty lame. You don't use streams? The only events you care
    about are network requests and asynchronous stuff? You're in luck again. Asynchronous code in
    Javascript tends to use Promises request and wait for data or an error to be received. Remember
    how lists and streams can be converted into each other? It turns out that
    <b>any Promise can be converted into a stream too!</b> Unlike with lists, not just any stream can
    be converted back to a Promise.
  </p>
  <pre>{`Promise => Stream <=> List`}</pre>
  <p>
    Since any promise can be converted to a stream though, that means that
    <b>Promises are burrito sequences too</b>.
  </p>
  <p>
    Now should be able to see the power of the burrito. If you have any list, stream, or Promise,
    then you can unwrap them all in the same way! Rather than writing code three times, just write
    code once for a burrito and then convert whatever sequence you have into one.
    <b>You can even handle loading and error states too!</b>
  </p>
  <pre>{`const listBurrito = Burrito.wrap([1,2,3]) // list
const streamBurrito = Burrito.wrap(interval(1000)) // stream
const promiseBurrito = Burrito.wrap(fetch('http://foo.bar')) // promise

const listSubscription = listBurrito.subscribe(...)
const streamSubscription = streamBurrito.subscribe(...)
const promiseSubscription = promiseBurrito.subscribe(...)

// Later on...
listSubscription.unsubscribe()
streamSubscription.unsubscribe()
promiseSubscription.unsubscribe()`}</pre>
  <h2>Just add Svelte</h2>
  <p>
    Given any Burrito, you can easily unwrap and view its filling using the <code>Last</code> component.
  </p>
  <CodeExample
    code={`const burrito = Burrito.wrap(interval(1000)).delay(1000)

// ...
        
<Last source={burrito}>
    <h2 slot="empty">Loading...</h2>
    <h2 slot="value" let:value>{value}</h2>
    <h2 slot="error" let:error>{error.message}</h2>
</Last>`}
  >
    <Last source={Burrito.wrap(interval(1000)).delay(1000)}>
      <h2 slot="empty">Loading...</h2>
      <h2 slot="value" let:value>{value}</h2>
      <h2 slot="error" let:error>{error.message}</h2>
    </Last>
  </CodeExample>

  <CodeExample
    code={`const burrito = Burrito.wrap([1, 2, 3]).delay(1000)

// ...
        
<Last source={burrito}>
    <h2 slot="empty">Loading...</h2>
    <h2 slot="value" let:value>{value}</h2>
    <h2 slot="error" let:error>{error.message}</h2>
</Last>`}
  >
    <Last source={Burrito.wrap([1, 2, 3]).delay(1000)}>
      <h2 slot="empty">Loading...</h2>
      <h2 slot="value" let:value>{value}</h2>
      <h2 slot="error" let:error>{error.message}</h2>
    </Last>
  </CodeExample>

  <CodeExample
    code={`const burrito = 
    Burrito.wrap(fetch('https://jsonplaceholder.typicode.com/users/1'))

// ...
        
<Last source={burrito}>
    <h2 slot="empty">Loading...</h2>
    <h2 slot="value" let:value>{value}</h2>
    <h2 slot="error" let:error>{error.message}</h2>
</Last>`}
  >
    <Last source={placeholderBurrito}>
      <pre slot="empty">Loading...</pre>
      <pre slot="value" let:value>{JSON.stringify(value, null, 2)}</pre>
      <pre slot="error" let:error>{error.message}</pre>
    </Last>
  </CodeExample>
  <Button on:click={refreshPlaceholder}>Refresh Promise Burrito</Button>
</Container>

<style>
  .bg {
    z-index: -1;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
