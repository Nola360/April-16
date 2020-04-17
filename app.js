const login_button = document.querySelector('.login_button');
const error_icon = document.querySelectorAll('.error_icon');
const error_message = document.querySelectorAll('.error_message');
const input = document.querySelectorAll('input')
const password = document.querySelector('.password');
const success_icon = document.querySelectorAll('.success_icon');
const success_message = document.querySelectorAll('.success_message');

for (let i = 0; i < input.length; i++) {
  login_button.addEventListener('click', function () {
    if (input[i].value === '') {

      error_message[i].innerHTML = 'Error: Input field cannot be empty';
      error_icon[i].innerHTML = '<i class="fas fa-exclamation-circle"></i>';

    } else {
      success_icon[i].innerHTML = '<i class="fas fa-check"></i>'
      success_message[i].innerHTML = 'Successful!';
      error_message[i].style.display = 'none';
      error_icon[i].style.display = 'none';

    }

  })
}


