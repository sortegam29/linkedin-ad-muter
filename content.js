(function () {
  let blockedAdsCount = 0;

  const counterStyle = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: rgba(0, 0, 0, 0.85);
    color: #ff4d4d;
    padding: 12px 16px;
    border-radius: 8px;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: bold;
    z-index: 99999;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    transition: opacity 0.3s ease;
  `;

  const counterElement = document.createElement("div");
  counterElement.style = counterStyle;
  counterElement.innerText = "Anuncios bloqueados: 0";
  document.body.appendChild(counterElement);

  function updateCounter() {
    counterElement.innerText = `Anuncios bloqueados: ${blockedAdsCount}`;
  }

  function findAndBlockPromotedByText() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);

    const promotedWords = ["promocionado", "sponsored"];

    while (walker.nextNode()) {
      const node = walker.currentNode;
      const text = node.nodeValue.trim().toLowerCase();

      if (promotedWords.some((word) => text.includes(word))) {
        let parent = node.parentElement;

        while (parent && parent !== document.body) {
          if (
            parent.classList.contains("feed-shared-update-v2") ||
            parent.classList.contains("feed-post") ||
            parent.classList.contains("artdeco-card")
          ) {
            if (!parent.dataset.blockedAd) {
              parent.dataset.blockedAd = "true";
              parent.remove();
              blockedAdsCount++;
              updateCounter();
            }
            break;
          }
          parent = parent.parentElement;
        }
      }
    }
  }

  findAndBlockPromotedByText();

  const observer = new MutationObserver(() => {
    findAndBlockPromotedByText();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
})();