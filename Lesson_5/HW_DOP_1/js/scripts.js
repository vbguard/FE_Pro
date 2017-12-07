const userDB = [
  {
    login: 'Mango',
    pass: '12345'
  },
  {
    login: 'Poly',
    pass: 'super123'
  },
  {
    login: 'Ajax',
    pass: 'hazker666'
  },
  {
    login: 'admin',
    pass: '12345'
  }
];

window.addEventListener('DOMContentLoaded', function onDCL() {
  const form = document.querySelector('#js-login-form');
  const userLoginInput = form.querySelector('[name="login"]');
  const userPassInput = form.querySelector('[name="password"]');

  form.addEventListener('submit', function onFormSubmit(evt) {
    evt.preventDefault();

    const userData = {
      login: userLoginInput.value,
      pass: userPassInput.value
    };

    form.reset();

    if (checkUserInDB(userDB, userData)) {
      onLoginSuccess();
    } else {
      onLoginError();
    }
  });
});

/*
  Helper functions
*/
const checkUserInDB = (db, obj) =>
  db.find(user => user.login === obj.login && user.pass === obj.pass)
    ? true
    : false;

function onLoginSuccess() {
  alert(`Салют, ласкаво просимо!`);
}

function onLoginError() {
  document.getElementById('wrongt').className = 'input-lp-wrong';
  document.getElementById('wrongp').className = 'input-lp-wrong';
  alert(`Помилка! Хибний логін або пароль. Повторіть ще раз.`);
}
