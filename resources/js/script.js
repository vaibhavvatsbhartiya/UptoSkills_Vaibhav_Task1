function changeContent(sectionId) {
    const section = document.getElementById(sectionId);
    const paragraph = section.querySelector('p');
    paragraph.textContent = "Content has been changed!";
}
