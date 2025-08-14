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
            // Re-run any <script> tags from the loaded HTML
            content.querySelectorAll("script").forEach(oldScript => {
                const newScript = document.createElement("script");

                // Copy attributes (type, src, etc.)
                Array.from(oldScript.attributes).forEach(attr =>
                    newScript.setAttribute(attr.name, attr.value)
                );

                // Inline script content
                if (oldScript.textContent) {
                    newScript.textContent = oldScript.textContent;
                }

                // Replace the old <script> with the new one (forces execution)
                oldScript.parentNode.replaceChild(newScript, oldScript);
            });
            content.style.animation = 'none';
            setTimeout(() => {
                content.style.animation = '';
            }, 10);
        })
        .catch(error => {
            content.innerHTML = `<h1>Error</h1><p>${error.message} ${fileName}</p>`;
        });
}