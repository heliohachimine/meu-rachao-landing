let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;

    const installButton = document.getElementById('install-app');

    if (installButton) {
        installButton.style.display = 'block';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const installButton = document.getElementById('install-app');

    if (!installButton) return;

    installButton.addEventListener('click', async () => {
        if (!deferredPrompt) {
            return;
        }

        deferredPrompt.prompt();

        const { outcome } = await deferredPrompt.userChoice;

        console.log(`Instalação: ${outcome}`);

        deferredPrompt = null;
    });
});
