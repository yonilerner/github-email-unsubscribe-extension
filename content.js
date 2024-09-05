function clickPRLink() {
    const prLink = document.querySelector('a[href^="https://github.com/notifications/unsubscribe-auth/"]');
    if (prLink) {
      prLink.click();
    } else {
      alert('PR link not found!');
    }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "clickPRLink") {
      clickPRLink();
      sendResponse({status: "PR link click attempted"});
    }
    return true;
});