function editElement(reference, match, replacer) {
    const content = reference.textContent;
    reference.textContent = content.split(match).join(replacer);
}