/**
 * main.js
 **/
// アプリケーション基盤をコントロールするモジュール
const {app} = require('electron');

// ブラウザーウィンドーを作るモジュール
const {BrowserWindow } = require('electron');

// ウィンドーオブジェクトを全域に維持
let mainWindow = null;

// すべてのウィンドーが閉じられたら呼び出される (アプリケーション終了)
app.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

// Electronの初期化が完了し、ブラウザーウィンドーを開く準備ができたら実行
app.on('ready', function() {
    // 新しいブラウザーウィンドーを生成
    mainWindow = new BrowserWindow({width: 800, height: 600});

    // 今のディレクトリーで「 index.html」をロード
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    // ウィンドーが閉じられたら呼び出される  (アプリケーション終了)
    mainWindow.on('closed', function() {
        // ウィンドーオブジェクトの参照を削除
        mainWindow = null;
    });
});