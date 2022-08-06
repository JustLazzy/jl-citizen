<script lang="ts">
  import Cid from "./components/CID.svelte";
  import Register from "./components/Register.svelte";
  import Modals from "./components/shared/modals.svelte";
  import { fetchNui } from "./utils/fetchNui";
  import { messageHandler } from "./utils/messageHandler";
  let page = "Register";
  messageHandler();

  function RegisterCitizen(e) {
    fetchNui("RegisterCitizen", e.detail);
  }
</script>

<Modals />
<div class="container">
  {#if page === "Register"}
    <div class="register">
      <Register on:register={RegisterCitizen} />
    </div>
  {:else if page === "CID"}
    <div class="cid">
      <Cid />
    </div>
  {/if}
</div>

<style>
  .register {
    display: flex;
    height: 100%;
    justify-content: center;
  }
  .container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    width: 85vw;
    height: 85vh;
  }
</style>
