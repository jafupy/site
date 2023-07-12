<script>
  export let data;
</script>

<svelte:head>
  <title>{data.name}</title>
  <meta name="title" content={data.name} />
  <meta name="description" content={data.description} />
  <meta http-equiv="refresh" content={`0; url=${data.link}`} />

  <meta property="og:type" content="website" />
  <meta property="og:url" content={data.link} />
  <meta property="og:title" content={data.name} />
  <meta property="og:description" content={data.description} />
  <meta property="og:image" content={data.image} />

  <meta property="twitter:card" content="summary" />
  <meta property="twitter:url" content={data.link} />
  <meta property="twitter:title" content={data.name} />
  <meta property="twitter:description" content={data.description} />
  <meta property="twitter:image" content={data.image} />
</svelte:head>
