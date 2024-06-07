document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('toggle-extension');
    const statusText = document.getElementById('status-text');

    // Function to update status text
    function updateStatusText(isEnabled) {
        statusText.textContent = isEnabled ? 'Extension is on' : 'Extension is off';
    }

    // Check if the current tab is on Google Translate
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const currentTab = tabs[0];
        const url = currentTab.url;
        if (url.includes('translate.google.com')) {
            toggle.disabled = false;
            // Load the initial state from storage
            chrome.storage.sync.get('extensionEnabled', (data) => {
                const isEnabled = data.extensionEnabled || false;
                toggle.checked = isEnabled;
                updateStatusText(isEnabled);
            });
            // Add event listener to toggle button
            toggle.addEventListener('change', () => {
                const isEnabled = toggle.checked;
                chrome.storage.sync.set({ extensionEnabled: isEnabled }, () => {
                    updateStatusText(isEnabled);
                });
                // Auo reload the page
                chrome.tabs.reload(currentTab.id);
            });
        } else {
            toggle.disabled = true;
            statusText.textContent = 'This extension only works on Google Translate';
        }
    });
});
