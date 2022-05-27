const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

// using event target/ event bubbling from parent elements children
about.addEventListener('click', function (e) {
  console.log(e.target.dataset.id);
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove('active');
    });
    e.target.classList.add('active');
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove('active');
    });
    const element = document.getElementById(id);
    element.classList.add('active');
  }
});

// use current target

// btns.forEach(function (item) {
//   item.addEventListener('click', function (e) {
//     const id = e.currentTarget.dataset.id;
//     if (id) {
//       // remove selected from other buttons
//       btns.forEach(function (btn) {
//         btn.classList.remove('active');
//       });
//       e.target.classList.add('active');
//       // hide other articles
//       articles.forEach(function (article) {
//         article.classList.remove('active');
//       });
//       const element = document.getElementById(id);
//       element.classList.add('active');
//     }
//   });
// });
