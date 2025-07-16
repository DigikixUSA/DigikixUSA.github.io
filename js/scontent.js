function showContent(index) {
    const content = document.getElementById('content');
    const fileName = `content/content${index}.html`;

    fetch(fileName)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${fileName}`);
            }
            return response.text();
        })
        .then(html => {
            content.innerHTML = html;
            content.style.animation = 'none';
            setTimeout(() => {
                content.style.animation = '';
            }, 10);
        })
        .catch(error => {
            content.innerHTML = `<h1>Error</h1><p>${error.message} ${fileName}</p>`;
        });
}