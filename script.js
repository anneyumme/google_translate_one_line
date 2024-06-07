chrome.storage.sync.get('extensionEnabled', (data) => {
    if (data.extensionEnabled === true) {
        let textAreaInput = document.querySelector('textarea')
         // Initial call to convert the current content
        textAreaInput.value = convertToLowerCaseWithoutSpace(textAreaInput.value);
        // Add an event listener for the 'input' event to trigger conversion on changes
        textAreaInput.addEventListener('input', () => {
            textAreaInput.value = convertToLowerCaseWithoutSpace(textAreaInput.value);
        })
    }
});

function convertToLowerCaseWithoutSpace(string) {
    return string.toLowerCase().replace(/\n/g, ' ');
}
