import { registerSW } from "virtual:pwa-register";

export const updateSW = registerSW({
  onNeedRefresh() {
    const isPressed = confirm("Do you really want to leave?");
    if (isPressed) {
      updateSW();
    }
  },
  onOfflineReady() {},
});
