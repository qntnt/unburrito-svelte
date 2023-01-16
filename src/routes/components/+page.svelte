<script>
  import Button from '$lib/components/Button.svelte';
  import Card from '$lib/components/Card.svelte';
  import CodeExample from '$lib/components/CodeExample.svelte';
  import Column from '$lib/components/layout/Column.svelte';
  import Container from '$lib/components/layout/Container.svelte';
  import Divider from '$lib/components/layout/Divider.svelte';
  import Headline from '$lib/components/Headline.svelte';
  import PlaceholderText from '$lib/components/placeholder/PlaceholderText.svelte';
  import Row from '$lib/components/layout/Row.svelte';
  import Shimmer from '$lib/components/placeholder/Shimmer.svelte';
  import Tag from '$lib/components/Tag.svelte';
</script>

<Headline>
  <h1 class="text-primary">Unburrito Svelte UI!</h1>
</Headline>

<Container>
  <h2>Buttons</h2>
  <CodeExample
    code={`<Row>
    <Button onClick={() => {}}>Default</Button>
    <Button backgroundColor="primary" textColor="white" onClick={() => {}}>Primary</Button>
    <Button backgroundColor="secondary" textColor="white" onClick={() => {}}>Secondary</Button>
    <Button backgroundColor="positive" textColor="white" onClick={() => {}}>Positive</Button>
    <Button backgroundColor="negative" textColor="white" onClick={() => {}}>Negative</Button>
    <Button backgroundColor="warning" textColor="white" onClick={() => {}}>Warning</Button>
    <Button>Disabled</Button>
</Row>`}
  >
    <Row>
      <Button onClick={() => {}}>Default</Button>
      <Button backgroundColor="primary" textColor="white" onClick={() => {}}>Primary</Button>
      <Button backgroundColor="secondary" textColor="white" onClick={() => {}}>Secondary</Button>
      <Button backgroundColor="positive" textColor="white" onClick={() => {}}>Positive</Button>
      <Button backgroundColor="negative" textColor="white" onClick={() => {}}>Negative</Button>
      <Button backgroundColor="warning" textColor="white" onClick={() => {}}>Warning</Button>
      <Button>Disabled</Button>
    </Row>
  </CodeExample>

  <h2>Tags</h2>
  <CodeExample
    code={`<Row>
    <Tag>Default</Tag>
    <Tag backgroundColor="primary" textColor="white" onClick={() => {}}>primary</Tag>
    <Tag backgroundColor="secondary" textColor="white">Test</Tag>
</Row>`}
  >
    <Row>
      <Tag>Default</Tag>
      <Tag backgroundColor="primary" textColor="white" onClick={() => {}}>primary</Tag>
      <Tag backgroundColor="secondary" textColor="white">Test</Tag>
    </Row>
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
        <Button color="primary">Action</Button>
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
        <Button color="primary">Action</Button>
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
        <Button color="primary">Action</Button>
    </svelte:fragment>
</Card>`}
  >
    <Card divided>
      <b slot="title">Card title</b>
      <div>Content</div>
      <svelte:fragment slot="actions">
        <Button>Action</Button>
      </svelte:fragment>
    </Card>
  </CodeExample>

  <h2>Column</h2>
  <CodeExample
    code={`<Column>
    <Card>1</Card>
    <Card>2</Card>
    <Card>3</Card>
</Column>`}
  >
    <Column>
      <Card>1</Card>
      <Card>2</Card>
      <Card>3</Card>
    </Column>
  </CodeExample>

  <h2>Row</h2>
  <CodeExample
    code={`<Row>
    <Card>1</Card>
    <Card>2</Card>
    <Card>3</Card>
</Row>`}
  >
    <Row>
      <Card>1</Card>
      <Card>2</Card>
      <Card>3</Card>
    </Row>
  </CodeExample>

  <h2>Shimmer and Placeholder Text</h2>
  <CodeExample
    code="<Shimmer>
    <PlaceholderText minCharacters={8} maxCharacters={50} lines={5} />
</Shimmer>"
  >
    <Shimmer>
      <PlaceholderText minCharacters={8} maxCharacters={50} lines={5} />
    </Shimmer>
  </CodeExample>
  <Divider orientation="vertical" hidden />
  <CodeExample
    code="<Shimmer>
    <Card>
        <PlaceholderText minCharacters={8} maxCharacters={50} lines={5} />
        <Button slot='actions'>Blah</Button>
    </Card>
</Shimmer>"
  >
    <Shimmer>
      <Card>
        <PlaceholderText minCharacters={8} maxCharacters={50} lines={5} />
        <Button slot="actions">Blah</Button>
      </Card>
    </Shimmer>
  </CodeExample>

  <h2>Spacers and Dividers</h2>
  <h3>Horizontal Dividers</h3>
  <CodeExample
    code={`<Row overflow="scroll">
    <span class="spacer-label">xxs→</span>
    <Spacer size="xxs" orientation="horizontal" />
    <span class="spacer-label">←xxs xs→</span>
    <Spacer size="xs" orientation="horizontal" />
    <span class="spacer-label">←xs s→</span>
    <Spacer size="s" orientation="horizontal" />
    <span class="spacer-label">←s m→</span>
    <Spacer size="m" orientation="horizontal" />
    <span class="spacer-label">←m l→</span>
    <Spacer size="l" orientation="horizontal" />
    <span class="spacer-label">←l xl→</span>
    <Spacer size="xl" orientation="horizontal" />
    <span class="spacer-label">←xl xxl→</span>
    <Spacer size="xxl" orientation="horizontal" />
    <span class="spacer-label">←xxl</span>
</Row>`}
  >
    <Row overflow="scroll">
      <span class="spacer-label">xxs→</span>
      <Divider spacing="xxs" orientation="horizontal" />
      <span class="spacer-label">←xxs xs→</span>
      <Divider spacing="xs" orientation="horizontal" />
      <span class="spacer-label">←xs s→</span>
      <Divider spacing="s" orientation="horizontal" />
      <span class="spacer-label">←s m→</span>
      <Divider spacing="m" orientation="horizontal" />
      <span class="spacer-label">←m l→</span>
      <Divider spacing="l" orientation="horizontal" />
      <span class="spacer-label">←l xl→</span>
      <Divider spacing="xl" orientation="horizontal" />
      <span class="spacer-label">←xl xxl→</span>
      <Divider spacing="xxl" orientation="horizontal" />
      <span class="spacer-label">←xxl</span>
    </Row>
  </CodeExample>
  <h3>Vertical Dividers</h3>
  <CodeExample
    code={`<Column>
    <div class="spacer-label">xxs ↴</div>
    <Spacer size="xxs" orientation="vertical" />
    <div class="spacer-label">xs ↴</div>
    <Spacer size="xs" orientation="vertical" />
    <div class="spacer-label">s ↴</div>
    <Spacer size="s" orientation="vertical" />
    <div class="spacer-label">m ↴</div>
    <Spacer size="m" orientation="vertical" />
    <div class="spacer-label">l ↴</div>
    <Spacer size="l" orientation="vertical" />
    <div class="spacer-label">xl ↴</div>
    <Spacer size="xl" orientation="vertical" />
    <div class="spacer-label">xxl ↴</div>
    <Spacer size="xxl" orientation="vertical" />
    <div class="spacer-label" />
</Column>`}
  >
    <Column>
      <div class="spacer-label">xxs ↴</div>
      <Divider spacing="xxs" orientation="vertical" />
      <div class="spacer-label">xs ↴</div>
      <Divider spacing="xs" orientation="vertical" />
      <div class="spacer-label">s ↴</div>
      <Divider spacing="s" orientation="vertical" />
      <div class="spacer-label">m ↴</div>
      <Divider spacing="m" orientation="vertical" />
      <div class="spacer-label">l ↴</div>
      <Divider spacing="l" orientation="vertical" />
      <div class="spacer-label">xl ↴</div>
      <Divider spacing="xl" orientation="vertical" />
      <div class="spacer-label">xxl ↴</div>
      <Divider spacing="xxl" orientation="vertical" />
      <div class="spacer-label" />
    </Column>
  </CodeExample>

  <h3>Spacers (hidden Dividers)</h3>
  <CodeExample
    code={`<Row overflow="scroll">
    <span class="spacer-label">Item 1</span>
    <Divider orientation="horizontal" hidden />
    <span class="spacer-label">Item 2</span>
</Row>`}
  >
    <Row overflow="scroll">
      <span class="spacer-label">Item 1</span>
      <Divider orientation="horizontal" hidden />
      <span class="spacer-label">Item 2</span>
    </Row>
  </CodeExample>
  <CodeExample
    code={`<Column>
    <div class="spacer-label" >Item 1</div>
    <Divider orientation="vertical" hidden />
    <div class="spacer-label" >Item 2</div>
</Column>`}
  >
    <Column>
      <div class="spacer-label">Item 1</div>
      <Divider orientation="vertical" hidden />
      <div class="spacer-label">Item 2</div>
    </Column>
  </CodeExample>
</Container>

<style global lang="scss">
  .spacer-label {
    @include border();
    @include surface($type: inverted);
    padding: $spacing-xxs;
    white-space: nowrap;
  }
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
