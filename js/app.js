import { mockData, docsData } from './data.js';
import { initRouter } from './router.js';
import { renderFeed } from './feed.js';
import { initContacts } from './contact.js';
import { renderDocs } from './docs.js';

// Palaižam visu, kad lapa ielādējusies
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Sākam maršrutētāju (pogas)
    initRouter();

    // 2. Ielādējam datus plūsmā
    renderFeed(mockData);

    // 3. Ielādējam dokumentus
    renderDocs(docsData);

    // 4. Aktivizējam kontaktu funkcionalitāti
    initContacts();

    // 5. "Intersection Observer" animācijām
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('active'); });
    }, { threshold: 0.1 });

    setTimeout(() => document.querySelectorAll('.reveal').forEach(el => observer.observe(el)), 100);
});