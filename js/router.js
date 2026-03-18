export function initRouter() {
    const navBtns = document.querySelectorAll('.nav-btn[data-target]');

    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.target;
            switchView(target);
        });
    });
    
    // Pievienojam event listener pogai "Uz jaunumiem" sākuma ekrānā
    document.getElementById('btn-to-news')?.addEventListener('click', () => switchView('news'));
}

function switchView(viewName) {
    // 1. Slēpjam visus
    document.querySelectorAll('.view').forEach(el => el.classList.remove('active-view'));
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

    // 2. Rādām īsto
    document.getElementById(`view-${viewName}`)?.classList.add('active-view');
    document.querySelector(`.nav-btn[data-target="${viewName}"]`)?.classList.add('active');

    // 3. Atkārtoti palaižam animācijas
    const activeView = document.getElementById(`view-${viewName}`);
    if(activeView) activeView.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
}