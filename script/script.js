const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open ')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

// Slide-in JavaScript for home page principal item

const principals = document.querySelectorAll('.principal')

const options = {
    threshold: 0.5
  }

const observerP = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    } else {
      entry.target.classList.remove('slide-in');
    }
  });
}, options);

principals.forEach(principal => {
  observerP.observe(principal);
})

// Slide-in JavaScript for left items
const lefts = document.querySelectorAll('.left')


const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in1');
    } else {
      entry.target.classList.remove('slide-in1');
    }
  });
}, options);

lefts.forEach(left => {
  observer1.observe(left);
})

// Slide-in JavaScript for right items
const rights = document.querySelectorAll('.right')


const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in2');
    } else {
      entry.target.classList.remove('slide-in2');
    }
  });
}, options);

rights.forEach(right => {
  observer2.observe(right);
})