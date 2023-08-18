

// Refactoring website with jQuery Project 12

// Menu bars icon, creating website more responsive
$(document).ready(function() {
  $('.toggle_btn').click(function() {
    $('.dropdown').toggleClass('open');
    const isOpen = $('.dropdown').hasClass('open ');
      $('.toggle_btn i').toggleClass(isOpen ? 'fa-xmark' : 'fa-bars');
  });

  // Slide-in JavaScript for home page principal item
  const observerOptions = {
    threshold: 0.5
  };

  const slideInObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-in');
      } else {
        entry.target.classList.remove('slide-in');
      }
    });
  }, observerOptions);

  $('.principal').each(function() {
    slideInObserver.observe(this);
  });

  // Slide-in JavaScript for left items
  const slideInObserver1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-in1');
      } else {
        entry.target.classList.remove('slide-in1');
      }
    });
  }, observerOptions);

  $('.left').each(function() {
    slideInObserver1.observe(this);
  });

  // Slide-in JavaScript for right items
  const slideInObserver2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-in2');
      } else {
        entry.target.classList.remove('slide-in2');
      }
    });
  }, observerOptions);

  $('.right').each(function() {
    slideInObserver2.observe(this);
  });


  // Form validation and submission
  
$("#myWebsiteForm").on('submit', function(e){

  e.preventDefault();

});

$("#myWebsiteForm").validate({
  rules:{
    fname:{
      minlength: 2
    },
    lname:{
      minlength:2
    },
    email:{
      email:true
    },
    phone:{
      number:true,
      minlength:10,
      maxlength:10,
    },
    reason:{
      minlength:5
    },
  },
  messages:{
    fname:{
      required: "Please enter your First name",
      minlength: "Name should be at least 2 characters"
    },
    lname:{
      required: "Please enter your Last name",
      minlength: "Name should be at least 2 characters"
    },
    email:{
      required: "Please enter your email",
    },
    phone:{
      required: "Please enter your phone",
      minlength: "Phone should be 10 characters",
      maxlength: "Phone should be no more that 10 characters"
    },
    reason:{
      required: "Please enter a reason",
      minlength: "Reason should be at least 5 characters"
    },
  },

    submitHandler: function(form) {
      debug: true,
    form.submit();
    
  }
 });

});