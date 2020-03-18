import App from './App.svelte'

document.querySelectorAll('#svelte-widget').forEach((element: HTMLElement) => {
  if (!element.hasChildNodes()) {
    new App({
      target: element,
    })
  }
})
