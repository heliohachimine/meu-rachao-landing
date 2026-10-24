let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', (event) => {
  console.log('PWA pode ser instalado');

  // Impede o comportamento padrão do navegador
  event.preventDefault();

  // Guarda o evento para usarmos depois
  deferredPrompt = event;
});

window.installPWA = async () => {
  if (!deferredPrompt) {
    console.log('PWA não está disponível para instalação');
    return false;
  }

  // IMPORTANTE:
  // isso precisa acontecer como resultado de um clique do usuário
  deferredPrompt.prompt();

  const { outcome } = await deferredPrompt.userChoice;

  console.log('Resultado da instalação:', outcome);

  deferredPrompt = null;

  return outcome === 'accepted';
};
