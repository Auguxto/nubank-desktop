import { app, BrowserWindow, Menu, screen } from "electron";
import path from "path";

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = (): void => {
  const { width, height } = screen.getPrimaryDisplay().size;

  const mainWindow = new BrowserWindow({
    title: "Nubank",
    icon: path.join(__dirname, "src/assets/icon.ico"),
    height,
    width,
    minWidth: width,
    minHeight: height,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // mainWindow.webContents.openDevTools();
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

Menu.setApplicationMenu(null);
