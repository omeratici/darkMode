document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("geceBtn").textContent = chrome.i18n.getMessage("buttonText");
  document.title = chrome.i18n.getMessage("appName");
});

document.getElementById("geceBtn").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "#ffffff";
      let all = document.querySelectorAll("*");
      for (let el of all) {
        el.style.backgroundColor = "transparent";
        el.style.color = "white";
      }
    }
  });
});
