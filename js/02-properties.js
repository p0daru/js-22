// const magicBtn = document.querySelector('.js-magic-btn');

/*
 * Свойства элемента (hero)
 * - Изображение
 * - Текст и textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

const magicBtn = document.querySelector('.js-magic-btn');
console.log(magicBtn);

magicBtn.addEventListener('click', () => {
  const imageRef = document.querySelector('.hero__image');
  console.log(imageRef);
  imageRef.src =
    'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
  imageRef.alt = 'Its new cat';

  const heroTitleEl = document.querySelector('.hero__title');
  console.log(heroTitleEl.textContent);

  heroTitleEl.textContent = 'All about me';
});

const actions = document.querySelector('.js-actions button');
console.log(actions);

// const imageEl = document.querySelector('.hero__image');
// // console.log('imageEl', imageEl);
// imageEl.src =
//   'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
// imageEl.alt = 'Это новый котик';

// const heroTitleEl = document.querySelector('.hero__title');
// // console.log('heroTitleEl', heroTitleEl);
// heroTitleEl.textContent = 'Я сладкий пирожочек!';

/*
 * Атрибуты
 * - get(имя-атрибута)
 * - set(имя-атрибута)
 * - remove(имя-атрибута)
 * - has(имя-атрибута)
 */

// console.log(imageEl.getAttribute('src'));
// console.log(imageEl.src);
// console.log(imageEl.hasAttribute('src'));

/*
 * Data-атрибуты
 */
// const actions = document.querySelectorAll('.js-actions button');
// console.log(actions);
// console.log(actions[2].dataset.action);
