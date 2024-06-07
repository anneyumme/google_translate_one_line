chrome.storage.sync.get('extensionEnabled', (data) => {
    if (data.extensionEnabled === true) {
        let textAreaInput = document.querySelector('#yDmH0d > c-wiz > div > div.ToWKne > c-wiz > div.OlSOob > c-wiz > div.ccvoYb > div.AxqVh > div.OPPzxe > c-wiz.rm1UF.dHeVVb.UnxENd > span > span > div > textarea');

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
