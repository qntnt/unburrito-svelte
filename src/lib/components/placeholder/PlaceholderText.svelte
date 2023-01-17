<script lang="ts">
  export let minCharacters: number = 8;
  export let maxCharacters: number = 20;
  export let characters: number | undefined = undefined;
  export let lines: number;

  function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  $: genChars =
    characters !== undefined
      ? () => characters as number
      : () => randomInt(minCharacters, maxCharacters);

  function createDefs(lineCount: number, gen: () => number) {
    const defs = [];
    for (let i = 0; i < lineCount; i++) {
      const actualCharacters = gen ? gen() : 1;
      const style = `width: ${actualCharacters}ch;`;
      defs.push({
        actualCharacters,
        style,
        divide: i !== 0
      });
    }
    return defs;
  }

  $: lineDefs = createDefs(lines, genChars);
</script>

{#each lineDefs as lineDef}
  <div class="h-4 bg-neutral-500 m-1" style={lineDef.style} />
{/each}
