export function renderFeed(data) {
    const container = document.getElementById('feed-container');
    if(!container) return;

    container.innerHTML = '';

    data.forEach((item, index) => {
        const dateObj = new Date(item.date);
        const dateStr = `${dateObj.getDate()}. ${dateObj.toLocaleString('lv', { month: 'short' })}.`;
        
        let icon = 'fa-file-lines';
        if(item.category === 'Lēmums') icon = 'fa-gavel';
        if(item.category === 'Vēlēšanas') icon = 'fa-check-to-slot';

        const card = document.createElement('div');
        card.className = 'tweet-card reveal';
        card.style.transitionDelay = `${index * 100}ms`;

        card.innerHTML = `
            <div class="tweet-avatar">
                <i class="fa-solid ${icon}"></i>
            </div>
            <div class="tweet-content">
                <div class="tweet-header">
                    <span class="tweet-name">Vaiņodes padome</span>
                    <span class="tweet-handle">@${item.category.toLowerCase()}</span>
                    <span class="tweet-dot">·</span>
                    <span class="tweet-time">${dateStr}</span>
                </div>
                <div class="tweet-text">
                    <strong>${item.title}</strong><br>
                    ${item.text}
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}