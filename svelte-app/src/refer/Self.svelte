<script>
  import Address from "./Address.svelte";
  export let index;

  let address = {
    label: "대한민국",
    children: [
      {
        label: "경기도",
        children: [{ label: "성남" }, { label: "수원" }],
      },
      {
        label: "전라북도",
        children: [
          {
            label: "익산",
            children: [
              { label: "동산동" },
              { label: "인화동" },
              { label: "금강동" },
            ],
          },
          { label: "전주" },
          { label: "군산" },
        ],
      },
    ],
  };
</script>

<!-- HTML -->
<h1>{index}</h1>
<Address {address} />
