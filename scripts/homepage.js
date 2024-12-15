// Função para implementar carregamento preguiçoso de imagens
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img.lazy-loaded');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy-loaded');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
});

// Função para salvar e recuperar preferências de tema no localStorage
const themeToggle = document.createElement('button');
themeToggle.textContent = 'Alternar Tema';
themeToggle.style.position = 'fixed';
themeToggle.style.bottom = '10px';
themeToggle.style.right = '10px';
themeToggle.style.padding = '10px';
document.body.appendChild(themeToggle);

const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
};

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

// Função para exibir mensagens dinâmicas baseadas em horários
const displayGreeting = () => {
    const greetingElement = document.createElement('div');
    greetingElement.style.padding = '20px';
    greetingElement.style.textAlign = 'center';
    greetingElement.style.backgroundColor = '#F2A202';
    greetingElement.style.color = 'white';
    document.body.prepend(greetingElement);

    const now = new Date();
    const hour = now.getHours();

    if (hour < 12) {
        greetingElement.textContent = `Bom dia! Explore as novidades sobre carros elétricos.`;
    } else if (hour < 18) {
        greetingElement.textContent = `Boa tarde! Descubra como os carros elétricos estão mudando o mundo.`;
    } else {
        greetingElement.textContent = `Boa noite! Veja como os carros elétricos podem transformar o futuro.`;
    }
};

displayGreeting();

// Função para gerar lista dinâmica de vantagens
const advantages = [
    'Economia de combustível com recargas mais baratas.',
    'Impacto ambiental reduzido e zero emissões diretas.',
    'Aproveite incentivos fiscais para veículos elétricos.'
];
const displayAdvantages = () => {
    const advantagesContainer = document.querySelector('section.content ul');
    if (advantagesContainer) {
        advantagesContainer.innerHTML = '';

        advantages.forEach((advantage, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${index + 1}. ${advantage}`;
            advantagesContainer.appendChild(listItem);
        });
    }
};

displayAdvantages();