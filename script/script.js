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

// JavaScript for form validation in contact-us page

const form = document.getElementById('myWebsiteForm')
const submitButton = document.querySelector('.submit')
const successMessage = document.getElementById('form-submitted-msg')
const firstName = document.getElementById('fname')
const lastName = document.getElementById('lname')
const email = document.getElementById('email')
const phoneNumber = document.getElementById('number')
const contactReason = document.getElementById('reason')

const formElements = [ ...form.elements ]

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isValidPhoneNumber = (phone) => /^\d{3}[-\s]?\d{3}[-\s]?\d{4}$/.test(phone);

const validateInputs = (e) => {
    
    e.preventDefault()

    const fisrtNameValue = fname.value.trim();
    const lastNameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const phoneNumberValue = number.value.trim();
    const reasonForContact = reason.value.trim();

    if(fisrtNameValue === '') {
        setError(fname, 'First name is required');
} else if (fisrtNameValue.length < 3) {
    setError(fname, 'First name must be at least 3 characters.')
} else {
        setSuccess(fname);
    }

    if(lastNameValue === '') {
        setError(lname, 'Last name is required');
} else if (lastNameValue.length < 3) {
    setError(lname, 'Last name must be at least 3 characters.')
} else {
        setSuccess(lname);
    }

    if(phoneNumberValue === '') {
        setError(number, 'Phone number is required');
    } else if (!isValidPhoneNumber(phoneNumberValue)) {
        setError(number, 'Provide a valid phone number');
    } else {
        setSuccess(number);
    }
    
    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(reasonForContact === '') {
        setError(reason, 'Reason is required');
} else if (reasonForContact.length < 5) {
    setError(reason, 'Reason must be at least 5 characters.')
} else {
        setSuccess(reason);
    }

};

  // Create function to check if all form elements are valid
const allInputsValid = () => {
    const valid = formElements.every((element) => {
      if (element.nodeName === 'SELECT') {
        return element.value !== 'Please select an option'
      } else {
        return element.checkValidity()
      }
    })
  
  
    return valid
  }
  
  const handleChange = () => {
    if (allInputsValid()) {
      submitButton.removeAttribute('disabled', '')
    } else {
      submitButton.setAttribute('disabled', '')
    }
}
 
  if (allInputsValid()) {
    successMessage.style.display = 'block'

    form.reset()

    submitButton.setAttribute('disabled', '')

    setTimeout(() => {
      successMessage.style.display = 'none'
    }, 3000)
  }
  


formElements.forEach((element) => {
  element.addEventListener('change', handleChange)
})


form.addEventListener('submit', (e) => validateInputs(e))
