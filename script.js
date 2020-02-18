var form = document.getElementsByTagName('form')[0];
var prevData = window.localStorage.getItem('formData');

if (prevData != null) {
  prevData = JSON.parse(prevData);

  form.elements.name.value = prevData.name;
  form.elements.email.value = prevData.email;
  form.elements.radios.value = prevData.radios;
  form.elements.dropdown.value = prevData.dropdown;
  form.elements.multiselect.value = prevData.multiselect;
}

//console.log(form.elements);

// for (var i=0, ii=form.elements.length; i<ii; i++) {
//  console.log(i + ': ' + form.elements[i].name + ', ' + form.elements[i].value);
// }

// for (el in form.elements) {
//   console.log(el);
// }

function onBlur(event) {
  if (!event.target.value) {
    event.target.classList.add('invalid');
  }
}

function onFocus(event) {
  event.target.classList.remove('invalid');
}

form.elements.name.addEventListener('focus', onFocus);
form.elements.name.addEventListener('blur', onBlur);
form.elements.email.addEventListener('focus', onFocus);
form.elements.email.addEventListener('blur', onBlur);


function submitHandler(event) {
  event.preventDefault();

  var invalidFields = document.getElementsByClassName('invalid');

  if (invalidFields.length) {
    return;
  }

  window.localStorage.removeItem('formData');

  var _data = {
    name: form.elements.name.value,
    email: form.elements.email.value
  };

  if (form.elements.toggle.checked) {
    _data.radios = form.elements.radios.value;
    _data.dropdown = form.elements.dropdown.value;
    _data.multiselect = form.elements.multiselect.value;
  }

  console.log(_data);

  window.localStorage.setItem('formData', JSON.stringify(_data));
}

form.addEventListener('submit', submitHandler);
