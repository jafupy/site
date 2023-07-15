<script>
  import Redirect from "$lib/redirect.svelte";

  const data = {
    link: "https://discord.gg/bNjW3Jxshe",
    name: "JaFu's Cafe",
    description:
      "Welcome to JaFu's Cafe, a community of developers and designers dedicated to learning, sharing, and creating together. Join us to share your expertise, and collaborate on exciting projects with those with similar interests!",
    image:
      "https://cdn.discordapp.com/icons/1027098556739371120/6e9c9215dfa24fe7dc05557b138eb008.webp?size=2048",
    color: "#65adda",
  };
</script>

<Redirect {data} />
