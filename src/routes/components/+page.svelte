<script>
  import Button from '$lib/components/Button.svelte';
  import Card from '$lib/components/Card.svelte';
  import CodeExample from '$lib/components/CodeExample.svelte';
  import Container from '$lib/components/layout/Container.svelte';
  import Headline from '$lib/components/Headline.svelte';
  import PlaceholderText from '$lib/components/placeholder/PlaceholderText.svelte';
  import Flex from '$lib/components/layout/Flex.svelte';
  import Shimmer from '$lib/components/placeholder/Shimmer.svelte';
  import Tag from '$lib/components/Tag.svelte';
</script>

<Headline>
  <h1>Unburrito Svelte UI!</h1>
</Headline>

<Container>
  <h2>Buttons</h2>
  <CodeExample
    code={`<Flex direction="row" class="space-x-2">
  <Button onClick={() => {}}>Default</Button>
  <Button onClick={() => {}} variant="positive">Positive</Button>
  <Button onClick={() => {}} variant="negative">Negative</Button>
  <Button onClick={() => {}} variant="warning">Warning</Button>
  <Button>Disabled</Button>
</Flex>`}
  >
    <Flex direction="row" class="space-x-2">
      <Button onClick={() => {}}>Default</Button>
      <Button onClick={() => {}} variant="positive">Positive</Button>
      <Button onClick={() => {}} variant="negative">Negative</Button>
      <Button onClick={() => {}} variant="warning">Warning</Button>
      <Button>Disabled</Button>
    </Flex>
  </CodeExample>

  <h2>Tags</h2>
  <CodeExample
    code={`<Flex direction="row" class="space-x-2">
  <Tag>Default</Tag>
  <Tag onClick={() => {}} variant="positive">Positive</Tag>
  <Tag variant="negative">Negative</Tag>
  <Tag variant="warning">Warning</Tag>
</Flex>`}
  >
    <Flex direction="row" class="space-x-2">
      <Tag>Default</Tag>
      <Tag onClick={() => {}} variant="positive">Positive</Tag>
      <Tag variant="negative">Negative</Tag>
      <Tag variant="warning">Warning</Tag>
    </Flex>
  </CodeExample>

  <h2>Cards</h2>
  <h3>Simple</h3>
  <CodeExample
    code={`<Card>
  <div>Content</div>
</Card>`}
  >
    <Card>
      <div>Content</div>
    </Card>
  </CodeExample>
  <h3>With Title</h3>
  <CodeExample
    code={`<Card>
  <b slot="title">Card title</b>
  <div>Content</div>
</Card>`}
  >
    <Card>
      <b slot="title">Card title</b>
      <div>Content</div>
    </Card>
  </CodeExample>
  <h3>With Actions</h3>
  <CodeExample
    code={`<Card>
  <div>Content</div>
  <svelte:fragment slot="actions">
    <Button>Action</Button>
  </svelte:fragment>
</Card>`}
  >
    <Card>
      <div>Content</div>
      <svelte:fragment slot="actions">
        <Button>Action</Button>
      </svelte:fragment>
    </Card>
  </CodeExample>
  <h3>Full example</h3>
  <CodeExample
    code={`<Card>
  <b slot="title">Card title</b>
  <div>Content</div>
  <svelte:fragment slot="actions">
    <Button>Action</Button>
  </svelte:fragment>
</Card>`}
  >
    <Card>
      <b slot="title">Card title</b>
      <div>Content</div>
      <svelte:fragment slot="actions">
        <Button>Action</Button>
      </svelte:fragment>
    </Card>
  </CodeExample>
  <h3>Full example with dividers</h3>
  <CodeExample
    code={`<Card divided>
  <b slot="title">Card title</b>
  <div>Content</div>
  <svelte:fragment slot="actions">
    <Button>Action 1</Button>
    <Button>Action 2</Button>
  </svelte:fragment>
</Card>`}
  >
    <Card divided>
      <b slot="title">Card title</b>
      <div>Content</div>
      <svelte:fragment slot="actions">
        <Button>Action 1</Button>
        <Button>Action 2</Button>
      </svelte:fragment>
    </Card>
  </CodeExample>

  <h2>Column</h2>
  <CodeExample
    code={`<Flex direction="col" alignItems="items-stretch" justifyItems="justify-items-stretch">
  <Card fluid>1</Card>
  <Card fluid>2</Card>
  <Card fluid>3</Card>
</Flex>`}
  >
    <Flex direction="col" alignItems="items-stretch" justifyItems="justify-items-stretch">
      <Card fluid>1</Card>
      <Card fluid>2</Card>
      <Card fluid>3</Card>
    </Flex>
  </CodeExample>

  <h2>Row</h2>
  <CodeExample
    code={`<Flex direction="row">
  <Card>1</Card>
  <Card>2</Card>
  <Card>3</Card>
</Flex>`}
  >
    <Flex direction="row">
      <Card>1</Card>
      <Card>2</Card>
      <Card>3</Card>
    </Flex>
  </CodeExample>

  <h2>Shimmer and Placeholder Text</h2>
  <CodeExample
    code={`<Shimmer>
  <PlaceholderText minCharacters={8} maxCharacters={50} lines={5} />
</Shimmer>`}
  >
    <Shimmer>
      <PlaceholderText minCharacters={8} maxCharacters={50} lines={5} />
    </Shimmer>
  </CodeExample>
  <CodeExample
    code={`<Shimmer>
  <Card>
    <PlaceholderText minCharacters={8} maxCharacters={50} lines={5} />
    <Button slot="actions">Blah</Button>
  </Card>
</Shimmer>`}
  >
    <Shimmer>
      <Card>
        <PlaceholderText minCharacters={8} maxCharacters={50} lines={5} />
        <Button slot="actions">Blah</Button>
      </Card>
    </Shimmer>
  </CodeExample>
</Container>

<style global lang="scss">
  .unburrito-empty {
    color: slategray;
  }
  .unburrito-value {
    color: black;
  }
  .unburrito-error {
    color: red;
  }
</style>
