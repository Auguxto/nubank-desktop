import { app, BrowserWindow, ipcMain, Menu, screen } from "electron";
import path from "path";

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

if (require("electron-squirrel-startup")) {
  app.quit();
}

let win: BrowserWindow | undefined;

const createWindow = (): BrowserWindow => {
  const { width, height } = screen.getPrimaryDisplay().size;

  const mainWindow = new BrowserWindow({
    title: "Nubank",
    icon: path.join(__dirname, "assets/icon.ico"),
    height,
    width,
    minWidth: width,
    minHeight: height,
    frame: false,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // mainWindow.webContents.openDevTools();

  mainWindow.maximize();

  return mainWindow;
};

app.on("ready", () => {
  win = createWindow();
});

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

ipcMain.handle("app-close", () => {
  app.quit();
});

ipcMain.handle("app-minimize", () => {
  win.minimize();
});
