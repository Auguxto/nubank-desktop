// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  closeApp: () => {
    ipcRenderer.invoke("app-close");
  },
  minimizeApp: () => {
    ipcRenderer.invoke("app-minimize");
  },
});
