const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  ping: async () => {
    return await ipcRenderer.invoke("ping");
  },

  username: async () => {
    return await ipcRenderer.invoke("username");
  },
});
