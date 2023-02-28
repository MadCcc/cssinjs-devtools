console.log("content script loaded");

const injectDevToolsHook = () => {
  const script = document.createElement("script");
  script.setAttribute("type", "text/javascript");
  script.setAttribute("src", chrome.runtime.getURL("dist/web-accessible.min.js"));
  document.documentElement.appendChild(script);
  script.parentNode?.removeChild(script);
};
injectDevToolsHook();