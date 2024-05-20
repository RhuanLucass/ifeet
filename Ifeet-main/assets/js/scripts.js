// Função para mostrar ou esconder as senhas
const showPassword = () => {
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");
  const show_eye = document.querySelectorAll("#show_eye");
  const hide_eye = document.querySelectorAll("#hide_eye");

  hide_eye.forEach(eye => eye.classList.remove("d-none"));

  if (password.type === "password") {
    password.type = "text";
    if (confirmPassword) confirmPassword.type = "text";
    show_eye.forEach(eye => eye.style.display = "none");
    hide_eye.forEach(eye => eye.style.display = "block");

  } else {
    password.type = "password";
    if (confirmPassword) confirmPassword.type = "password";
    show_eye.forEach(eye => eye.style.display = "block");
    hide_eye.forEach(eye => eye.style.display = "none");
  }
}

// Função para trocar as imagens do card
const swapCardImage = () => {
  const imgs = document.querySelectorAll('.card-img-container img');
  const bulletsContainer = document.querySelector('.bullets');
  const prevImg = document.querySelector('.card-actions .prev-img');
  const nextImg = document.querySelector('.card-actions .next-img');
  let bullets;

  // Adicionando as bullets referente ao numero de imagens dinamicamente
  imgs.forEach((img, index) => {
    const newBullet = document.createElement('span');
    newBullet.classList.add('bullet');

    if (index === 0) {
      newBullet.classList.add('bullet-active');
    }

    bulletsContainer.appendChild(newBullet);
  })

  bullets = bulletsContainer.querySelectorAll('.bullet');

  prevImg.addEventListener('click', () => {
    console.log('prev')
    
    const bulletActive = Array.from(bullets).findIndex(bullet => bullet.classList.contains('bullet-active'));
    const imgActive = Array.from(imgs).findIndex(img => img.classList.contains('img-active'));
    
    if(bulletActive > 0){
      bullets[bulletActive].classList.remove('bullet-active');
      bullets[bulletActive - 1].classList.add('bullet-active');

      imgs[imgActive].classList.remove('img-active');
      imgs[imgActive - 1].classList.add('img-active');
    }

  })

  nextImg.addEventListener('click', () => {
    console.log('prox')

    const bulletActive = Array.from(bullets).findIndex(bullet => bullet.classList.contains('bullet-active'));
    const imgActive = Array.from(imgs).findIndex(img => img.classList.contains('img-active'));

    
    if(bulletActive < bullets.length - 1){
      bullets[bulletActive].classList.remove('bullet-active');
      bullets[bulletActive + 1].classList.add('bullet-active');

      imgs[imgActive].classList.remove('img-active');
      imgs[imgActive + 1].classList.add('img-active');
    }

    // console.log(bullets)
    // imgs.forEach((img, index) => {
    //   if(index < bullets.length - 1 && bullets[index].classList.contains('bullet-active')){
    //     console.log(bullets[index].classList)
    //     bullets[index].classList.remove('bullet-active');
    //     bullets[index + 1].classList.add('bullet-active');
    //     break;
    //   }
    // })
  })
}

swapCardImage();