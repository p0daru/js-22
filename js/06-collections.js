/*
 * Создём и добавляем коллекцию
 */
const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const colorPickerContainer = document.querySelector('.js-color-picker');
// console.log(colorPickerContainer);

// const elements = colorPickerOptions.reduce((acc, option) => {
//   const buttonEl = document.createElement('button');

//   buttonEl.type = 'button';
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;

//   acc.push(buttonEl);

//   // buttonEl.addEventListener('click', () => {
//   //   const paragEl = document.createElement('p');
//   //   paragEl.textContent = option.label;
//   //   document.body.appendChild(paragEl);
//   // });

//   return [...acc];
// }, []);

// colorPickerContainer.append(...elements);

const makeColorPickerOptions = options => {
  return options.map(option => {
    const buttonEl = document.createElement('button');

    buttonEl.type = 'button';
    buttonEl.classList.add('color-picker__option');
    buttonEl.textContent = option.label;
    buttonEl.style.backgroundColor = option.color;

    return buttonEl;
  });
};

const elements = makeColorPickerOptions(colorPickerOptions);

colorPickerContainer.append(...elements);

// const colorPickerContainerEl = document.querySelector('.js-color-picker');

// const elements = colorPickerOptions.map(option => {
//   const buttonEl = document.createElement('button');
//   buttonEl.type = 'button';
//   buttonEl.classList.add('color-picker__option');
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;

//   return buttonEl;
// });

// console.log(elements);

/*
 * Пишем функцию для создания разметки колорпикера
 */
// const makeColorPickerOptions = options => {
//   return options.map(option => {
//     const buttonEl = document.createElement('button');
//     buttonEl.type = 'button';
//     buttonEl.classList.add('color-picker__option');
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;

//     return buttonEl;
//   });
// };

// const elements = makeColorPickerOptions(colorPickerOptions);
// colorPickerContainerEl.append(...elements);
