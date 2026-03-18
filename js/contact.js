export function initContacts() {
    // 1. Formas apstrāde
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            const originalHTML = btn.innerHTML;
            
            btn.innerHTML = `Nosūtīts! <i class="fa-solid fa-check"></i>`;
            btn.style.background = "var(--accent-success)";
            btn.style.color = "white";
            
            setTimeout(() => {
                e.target.reset();
                btn.innerHTML = originalHTML;
                btn.style.background = "";
                btn.style.color = "";
            }, 2500);
        });
    }

    // 2. "Action" pogu animācija (Zvanīt/Rakstīt)
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const original = this.innerHTML;
            this.classList.add('success-state');
            
            const isCall = this.classList.contains('call');
            this.innerHTML = isCall 
                ? `<i class="fa-solid fa-phone-volume"></i><span>Zvanām...</span>`
                : `<i class="fa-solid fa-envelope-open-text"></i><span>Atveram...</span>`;

            setTimeout(() => { this.classList.remove('success-state'); this.innerHTML = original; }, 3000);
        });
    });

    // 3. Kartiņu "Modal" funkcionalitāte
    const modal = document.getElementById('member-modal');
    const closeBtn = document.getElementById('modal-close-btn');
    
    if(modal) {
        // Aizvēršana
        const closeModal = () => modal.classList.remove('active');
        closeBtn?.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => { if(e.target === modal) closeModal(); });

        // Atvēršana
        document.querySelectorAll('.member-card').forEach(card => {
            card.addEventListener('click', () => {
                document.getElementById('modal-name').textContent = card.dataset.name;
                document.getElementById('modal-role').textContent = card.dataset.role;
                document.getElementById('modal-email').textContent = card.dataset.email;
                
                // Telefons (tikai ja ir)
                const phoneRow = document.getElementById('modal-phone-row');
                if(card.dataset.phone) {
                    document.getElementById('modal-phone').textContent = card.dataset.phone;
                    phoneRow.style.display = 'flex';
                } else {
                    phoneRow.style.display = 'none';
                }

                modal.classList.add('active');
            });
        });
    }
}