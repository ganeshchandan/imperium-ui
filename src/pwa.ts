import { registerSW } from "virtual:pwa-register";

export const updateSW = registerSW({
  onNeedRefresh() {
    const isPressed = confirm("New Update Available! Tap 'OK' to get the latest version and enjoy the best experience!");
    if (isPressed) {
      updateSW();
    }
  },
  onOfflineReady() {},
});
