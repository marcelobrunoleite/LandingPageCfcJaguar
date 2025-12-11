// Script Simplificado - Versão WhatsApp
// Esta versão remove toda a funcionalidade de carrinho e checkout
// Substituindo por links diretos do WhatsApp

document.addEventListener('DOMContentLoaded', function() {
    
    // Configuração de tabs (Carro/Moto)
    setupPackageTabs();
    
    // Smooth scroll para links de navegação
    setupSmoothScroll();
    
    // Animação de scroll
    setupScrollAnimations();
});

// Função para alternar entre pacotes de Carro e Moto
function setupPackageTabs() {
    const tabCarro = document.getElementById('tabCarro');
    const tabMoto = document.getElementById('tabMoto');
    const packagesCarro = document.getElementById('packagesCarro');
    const packagesMoto = document.getElementById('packagesMoto');
    
    if (!tabCarro || !tabMoto || !packagesCarro || !packagesMoto) return;
    
    tabCarro.addEventListener('click', function() {
        tabCarro.classList.add('active');
        tabMoto.classList.remove('active');
        packagesCarro.style.display = 'grid';
        packagesMoto.style.display = 'none';
    });
    
    tabMoto.addEventListener('click', function() {
        tabMoto.classList.add('active');
        tabCarro.classList.remove('active');
        packagesCarro.style.display = 'none';
        packagesMoto.style.display = 'grid';
    });
}

// Smooth scroll para links de navegação
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Animação de scroll
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos que devem animar
    document.querySelectorAll('.package-card, .benefit-card, .contact-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Formatação de preço (caso necessário)
function formatPrice(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

