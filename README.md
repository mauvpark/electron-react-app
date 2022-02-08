# electron-react-app :tada:

## DESCRIPTION

This is a REACT ELECTRON boilerplate form.

This form is made by Electron forge.

## HOW TO USE

1. Fork this repo.

2. `git clone` your forked repo.

3. Execute `yarn install`

4. Use it!

## Structure

```tree
electron-react-app
├─ README.md
├─ package.json
├─ src
│  ├─ app.tsx
│  ├─ components        # Default is based on Atomic design pattern, you could change as your purpose.
│  │  ├─ atoms
│  │  ├─ molecules
│  │  ├─ organisms
│  │  └─ templates
│  ├─ entry.tsx         # Where app starts, you could add your other pages to route using react-router-dom.
│  ├─ index.css
│  ├─ index.html        # Electron's main js. You could handle electron node js module or could make BrowserWindow.
│  ├─ index.ts
│  ├─ pages             # pages all templates gather.
│  │  ├─ About.tsx      
│  │  └─ Home.tsx
│  └─ renderer.ts       # You could handle dom element or something else here. You could set 'preload.js' in 'index.ts' then you could use as your purpose.
├─ tsconfig.json
├─ webpack.main.config.js
├─ webpack.plugins.js
├─ webpack.renderer.config.js
├─ webpack.rules.js
└─ yarn.lock

```

## Support

1. React v17

2. React Router Dom v6

3. TypeScript

4. Webpack

## NOTE

1. This boilerplate enables csp `'self'`. If you have to get sources from other url, you should disable it. But it is not recommended because of [security reasons](https://www.electronjs.org/docs/latest/tutorial/security#7-define-a-content-security-policy).

2. `nodeIntegration` is not available and this is default in Electron. If you need to use node module outside `index.ts`, consider `ipcRenderer` instead of `nodeIntegartion`.
