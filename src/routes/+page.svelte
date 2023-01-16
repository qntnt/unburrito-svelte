<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import CodeExample from '$lib/components/CodeExample.svelte';
  import Container from '$lib/components/layout/Container.svelte';
  import Headline from '$lib/components/Headline.svelte';
  import Collect from '$lib/Collect.svelte';
  import Last from '$lib/Last.svelte';
  import { interval, throwError, delay, from, merge, mergeMap, NEVER, map } from 'rxjs';
  import Row from '$lib/components/layout/Row.svelte';
  function fetchUser(time: number) {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ userId: 1, name: 'Tom Jones' }), time);
    });
  }

  function observeError() {
    return merge(
      interval(1000),
      from([1]).pipe(
        delay(3000),
        mergeMap(() => throwError(() => new Error('Error occurred!')))
      )
    );
  }
  const e = merge(
    interval(1000),
    from([1]).pipe(
      delay(3000),
      mergeMap(() => throwError(() => new Error('Error occurred!')))
    )
  );
</script>

<Headline>
  <h1 class="text-primary">Unburrito Svelte!</h1>
</Headline>

<Container>
  <h2>Collect</h2>
  <CodeExample
    code={`<Collect source={[1, 2, 3]}>
    <svelte:fragment slot="value" let:value>{value}</svelte:fragment>
</Collect>`}
  >
    <Collect source={[1, 2, 3]}>
      <svelte:fragment slot="value" let:value>{value}</svelte:fragment>
    </Collect>
  </CodeExample>

  <CodeExample
    code={`<Row>
    <Collect source={interval(1000)}>
        <svelte:fragment slot="value" let:value>
            <Card>{value}</Card>
        </svelte:fragment>
    </Collect>
</Row>`}
  >
    <Row overflow="scroll">
      <Collect source={interval(1000)}>
        <svelte:fragment slot="value" let:value>
          <Card>{value}</Card>
        </svelte:fragment>
      </Collect>
    </Row>
  </CodeExample>

  <h2>Last</h2>
  <h3>Loading</h3>
  <CodeExample
    code={`<Last source={NEVER}>
    <span slot="empty">Loading...</span>
</Last>`}
  >
    <Last source={NEVER}>
      <span slot="empty">Loading...</span>
    </Last>
  </CodeExample>

  <h3>Observable</h3>
  <CodeExample
    code={`<Last source={interval(1000)}>
    <span slot="empty">Loading...</span>
    <span slot="value" let:value>
        {value.toString()}
    </span>
</Last>`}
  >
    <Last source={interval(1000)}>
      <span slot="empty">Loading...</span>
      <span slot="value" let:value>
        {value.toString()}
      </span>
    </Last>
  </CodeExample>

  <h3>Promise</h3>
  <CodeExample
    code={`<Last source={fetchUser(3000)}> // delayed 3s
    <span slot="empty">Loading...</span>
    <span slot="value" let:value>
        {value.toString()}
    </span>
    <div slot="error" let:error class="error">
        {error.toString()}
    </div>
</Last>`}
  >
    <Last source={fetchUser(3000)}>
      <span slot="empty">Loading...</span>
      <span slot="value" let:value>
        {JSON.stringify(value)}
      </span>
      <div slot="error" let:error class="error">
        {error.toString()}
      </div>
    </Last>
  </CodeExample>

  <h3>Observable Error</h3>
  <CodeExample
    code={`<Last source={observeError()}>
    <span slot="empty">Loading...</span>
    <span slot="value" let:value>
        {value.toString()}
    </span>
    <div slot="error" let:error class="error">
        {error.message}
    </div>
</Last>`}
  >
    <Last source={observeError()}>
      <span slot="empty">Loading...</span>
      <span slot="value" let:value>
        {value.toString()}
      </span>
      <div slot="error" let:error>
        {error.message}
      </div>
    </Last>
  </CodeExample>
</Container>

<style global>
  .unburrito-empty {
    color: var(--color-text-disabled);
  }
  .unburrito-value {
    color: var(--color-text);
  }
  .unburrito-error {
    color: red;
  }
</style>
