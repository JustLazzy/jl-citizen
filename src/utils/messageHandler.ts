import { onDestroy, onMount } from "svelte";

interface nuiMessage {
  data: {
    action: string;
    [key: string]: any;
  };
}

export function messageHandler() {
  function Event(event: nuiMessage) {
    switch (event.data.action) {
      case "test":
        console.log("test");
        break;
    }
  }

  onMount(() => window.addEventListener("message", Event));
  onDestroy(() => window.removeEventListener("message", Event));
}
