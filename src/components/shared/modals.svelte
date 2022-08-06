<script lang="ts">
  import { modals } from "../../stores/modals";
  import { fade, scale } from "svelte/transition";
  import { backOut, quadIn, quadInOut, quadOut } from "svelte/easing";
  function _onCancel() {
    $modals.onCancel();
    modals.reset();
  }

  function _onOk() {
    $modals.onOk();
    modals.reset();
  }
</script>

{#if $modals}
  <div class="modals" transition:fade={{ duration: 300, easing: quadInOut }}>
    <div
      class="modals-box"
      in:scale={{ duration: 350, easing: backOut, delay: 200 }}
      out:scale={{ duration: 200, easing: quadIn }}
    >
      <div class="title">{$modals.title}</div>
      <div class="description">
        {$modals.description}
      </div>
      <div class="buttons">
        <button class="btn cancel" on:click={_onCancel}>
          {$modals.okText ?? "Cancel"}
        </button>
        <button class="btn" on:click={_onOk}
          >{$modals.cancelText ?? "Confirm"}</button
        >
      </div>
    </div>
  </div>
{/if}

<style>
  .btn.cancel {
    background-color: rgb(187, 75, 75);
  }
  .btn {
    color: white;
    background-color: rgb(54, 143, 54);
    border-radius: 2px;
  }
  .description {
    font-size: 1rem;
    width: 100%;
    padding: 0px 5px;
    text-align: center;
  }
  .title {
    font-size: 1.5rem;
    letter-spacing: 1px;
  }
  .buttons button {
    width: 95px;
    height: 30px;
    border: none;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  }
  .buttons {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
  }
  .modals-box {
    border-radius: 3px;
    color: white;
    padding: 15px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-width: 25rem;
    max-width: 30rem;
    min-height: 13rem;
    background-color: rgb(42, 41, 63);
  }
  .modals {
    font-family: "Anton", sans-serif;
    font-size: 15px;
    background-color: rgba(0, 0, 0, 0.411);
    position: absolute;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    z-index: 100;
    justify-content: center;
  }
</style>
