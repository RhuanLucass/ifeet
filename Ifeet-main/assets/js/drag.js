// Evento para executar a lógica apenas após o documento estar totalmente carregado
document.addEventListener('DOMContentLoaded', () => {
  // Selecionando todos os elementos que possuem a classe card
  var cards = document.querySelectorAll('.card');
  // Calcula a largura e altura para a qual os cartões serão movidos fora da tela. Esse cálculo utiliza o tamanho da janela do navegador multiplicado por 1.5. 
  var moveOutWidth = document.body.clientWidth * 1.5;
  var moveOutHeight = document.body.clientHeight * 1.5;

  // Definindo variável para rastrear se o gesto de pan (movimentar elemento na tela) está ocorrendo
  var isPanning = false;

  // Função para desativar ou ativar os eventos de clique nos botões de ação
  const toggleButtonsPointerEvents = (enabled) => {
    const actionButtons = document.querySelectorAll('#buttons-actions > div');
    actionButtons.forEach(button => {
      button.style.pointerEvents = enabled ? 'auto' : 'none';
    });
  };

  // Função para mover e remover cartão
  const moveCard = (card, toX, toY, rotate) => {
    // Desativa os botões durante a animação
    toggleButtonsPointerEvents(false);
    // Aplica a transição suave e a transformação final
    card.style.transition = 'transform 0.5s ease';
    card.style.transform = `translate(${toX}px, ${toY}px) rotate(${rotate}deg)`;

    // Adiciona um evento para remover o cartão do DOM após a transição terminar
    card.addEventListener('transitionend', function () {
      card.remove();
      // Reativa os botões após a animação
      toggleButtonsPointerEvents(true);
    });
  }


  cards.forEach(function (card) {
    // Para cada cartão, um objeto Hammer é criado para adicionar a capacidade de reconhecer gestos de pan. O evento de pan é configurado para reconhecer movimentos em todas as direções.
    var hammertime = new Hammer(card);
    hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });

    // Quando o evento pan é detectado
    hammertime.on('pan', function (event) {
      // A posição do cartão é atualizada de acordo com o deslocamento do gesto
      var deltaX = event.deltaX;
      var deltaY = event.deltaY;

      // Restringindo movimentos apenas para cima,esquerda e direita
      if (deltaY > 0) {
        deltaY = 0;
      }

      // A rotação do cartão é ajustada proporcionalmente ao deslocamento horizontal
      var rotate = deltaX * 0.05;

      // Adiciona a classe moving ao card
      card.classList.add('moving');

      // Modifica a propriedade transform do card alterando sua posição
      card.style.transform = `translate(${deltaX}px, ${deltaY}px) rotate(${rotate}deg)`;

      // Atualize a variável ao detectar um pan
      isPanning = true;
    });

    // Quando o pan termina
    hammertime.on('panend', function (event) {
      // A classe moving é removida de card
      card.classList.remove('moving');
      // Calcula os valores absolutos de deslocamento e velocidade do elemento
      var absDeltaX = Math.abs(event.deltaX);
      var absDeltaY = Math.abs(event.deltaY);
      var velocityX = Math.abs(event.velocityX);
      var velocityY = Math.abs(event.velocityY);

      // Define os limiares para movimento vertical e horizontal
      var verticalThreshold = 150;
      var horizontalThreshold = 100;

      // Verifica se o cartão deve permanecer em sua posição original
      var keep = absDeltaX < horizontalThreshold && absDeltaY < verticalThreshold;

      if (keep) {
        // Se o movimento for menor que os limiares, redefine a transformação
        card.style.transform = '';
      } else {
        // Caso contrário, calcula a posição final com base na velocidade e nos tamanhos de tela
        var endX = Math.max(velocityX * moveOutWidth, moveOutWidth);
        var endY = Math.max(velocityY * moveOutHeight, moveOutHeight);
        var toX, toY;

        // Determina a posição final baseada na direção do movimento
        if (absDeltaY > verticalThreshold && event.deltaY < 0) {
          // Movimento para cima
          toX = 0;
          toY = -endY;
        } else {
          // Movimento para esquerda ou direita
          toX = event.deltaX > 0 ? endX : -endX;
          toY = 0;
        }

        // Calcula a rotação final baseada no deslocamento horizontal
        var rotate = event.deltaX * 0.05;

        // Chamando função para mover e remover card
        moveCard(card, toX, toY, rotate);
      }

      // Redefine a variável isPanning para falso após um pequeno atraso
      setTimeout(() => { isPanning = false; }, 0);
    });
  });

  // Função para mover o card
  const handleButtonClick = (direction) => {
    var card = document.querySelector('.card');

    if (card) {
      var toX, toY, rotate;
      switch (direction) {
        case 'left':
          toX = -moveOutWidth;
          toY = 0;
          rotate = -moveOutWidth * 0.05;
          break;
        case 'up':
          toX = 0;
          toY = -moveOutHeight;
          rotate = 0;
          break;
        case 'right':
          toX = moveOutWidth;
          toY = 0;
          rotate = moveOutWidth * 0.05;
          break;
      }
      moveCard(card, toX, toY, rotate);
    }
  };

  // Event listeners para os botões
  document.getElementById('button-dislike').addEventListener('click', () => handleButtonClick('left'));
  document.getElementById('button-superlike').addEventListener('click', () => handleButtonClick('up'));
  document.getElementById('button-like').addEventListener('click', () => handleButtonClick('right'));

  // Função para trocar as imagens do card
  const swapCardImage = () => {
    cards.forEach((card) => {
      const imgs = card.querySelectorAll('.card-img-container img');
      const prevImg = card.querySelector('.card-actions .prev-img');
      const nextImg = card.querySelector('.card-actions .next-img');
      const bulletsContainer = card.querySelector('.bullets');

      // Adicionando as bullets referente ao numero de imagens dinamicamente
      imgs.forEach((img, index) => {
        const newBullet = document.createElement('span');
        newBullet.classList.add('bullet');

        if (index === 0) {
          newBullet.classList.add('bullet-active');
        }

        bulletsContainer.appendChild(newBullet);
      });

      const bullets = bulletsContainer.querySelectorAll('.bullet');

      prevImg.addEventListener('click', (e) => {
        if (isPanning) return; // Evite a troca de imagem se o pan estiver ativo

        const bulletActive = Array.from(bullets).findIndex(bullet => bullet.classList.contains('bullet-active'));
        const imgActive = Array.from(imgs).findIndex(img => img.classList.contains('img-active'));

        if (bulletActive > 0) {
          bullets[bulletActive].classList.remove('bullet-active');
          bullets[bulletActive - 1].classList.add('bullet-active');

          imgs[imgActive].classList.remove('img-active');
          imgs[imgActive - 1].classList.add('img-active');
        }
      });

      nextImg.addEventListener('click', (e) => {
        if (isPanning) return; // Evite a troca de imagem se o pan estiver ativo

        const bulletActive = Array.from(bullets).findIndex(bullet => bullet.classList.contains('bullet-active'));
        const imgActive = Array.from(imgs).findIndex(img => img.classList.contains('img-active'));

        if (bulletActive < bullets.length - 1) {
          bullets[bulletActive].classList.remove('bullet-active');
          bullets[bulletActive + 1].classList.add('bullet-active');

          imgs[imgActive].classList.remove('img-active');
          imgs[imgActive + 1].classList.add('img-active');
        }
      });
    })
  }
  swapCardImage();
});
