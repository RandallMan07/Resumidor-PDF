document.getElementById("summarizer_btn").addEventListener("click", summarize)

async function summarize() {
    chrome.tab.query({ active: true, currentWindow: true}, (tabs) => {
        const activeTab = tabs[0];
        const tabURL = activeTab.url;

        if (url && url.endsWith('.pdf'))
        {
            alert("This is a pdf file!")
        }
        else {
            alert("This isnt a pdf!!! :(")
        }
    })
}