// ========== ANIMAÇÃO AO SCROLL ==========
const elements = document.querySelectorAll(".card, .project-card, .skill-card, .stat-item");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: "0px 0px -30px 0px" });

elements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(25px)";
    el.style.transition = "all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1)";
    observer.observe(el);
});

// ========== EFEITO BOTÃO DOWNLOAD ==========
const btnDownload = document.querySelector(".btn-primary");
if (btnDownload) {
    btnDownload.addEventListener("click", (e) => {
        const originalText = btnDownload.innerHTML;
        btnDownload.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Baixando...';
        setTimeout(() => {
            btnDownload.innerHTML = originalText;
        }, 2000);
    });
}

// ========== PREVENIR CLIQUE EM LINKS VAZIOS ==========
const emptyLinks = document.querySelectorAll('a[href="#"]');
emptyLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const originalHTML = link.innerHTML;
        link.innerHTML = '<i class="fas fa-link"></i> Configurar';
        setTimeout(() => {
            link.innerHTML = originalHTML;
        }, 1500);
    });
});

// ========== ATUALIZAR ANO NO RODAPÉ ==========
const footerYear = document.querySelector("footer p:first-child");
if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.innerHTML = footerYear.innerHTML.replace("2026", currentYear);
}

// ========== ANIMAÇÃO DAS BARRAS DE SKILL ==========
const skillBars = document.querySelectorAll(".skill-progress");
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.style.width;
            entry.target.style.width = "0";
            setTimeout(() => {
                entry.target.style.width = width;
            }, 100);
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => skillsObserver.observe(bar));

console.log("🚀 Portfólio carregado com sucesso!");