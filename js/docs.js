export function renderDocs(data) {
    const container = document.getElementById('docs-container');
    if (!container) return;

    container.innerHTML = '';
    const list = document.createElement('div');
    list.className = 'doc-list';

    data.forEach((doc, index) => {
        const item = document.createElement('a');
        item.href = doc.url;
        item.target = '_blank'; // Atver jaunā cilnē
        item.className = 'doc-item reveal';
        item.style.transitionDelay = `${index * 100}ms`;

        item.innerHTML = `
            <div class="doc-icon">
                <i class="fa-regular fa-file-pdf"></i>
            </div>
            <div class="doc-info">
                <h4>${doc.title}</h4>
                <span>${doc.date} &middot; ${doc.size}</span>
            </div>
            <div class="doc-download-icon" style="margin-left: auto; color: var(--text-sec);">
                <i class="fa-solid fa-download"></i>
            </div>
        `;
        list.appendChild(item);
    });
    container.appendChild(list);
}