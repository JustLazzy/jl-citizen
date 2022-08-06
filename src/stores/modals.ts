import type { IModals } from "../types/modals";
import { writable } from "svelte/store";

function modalsStore() {
  const _modals = writable<IModals>(null);

  function send(data: IModals) {
    _modals.set(data);
  }

  function reset() {
    _modals.set(null);
  }
  const { subscribe } = _modals;

  return {
    subscribe,
    send,
    reset,
  };
}

export const modals = modalsStore();
