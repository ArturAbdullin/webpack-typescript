import { formData } from "./forms";

const form = document.querySelector('form');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(formData(form));
  })
}

const person: any = {};
console.log(person.speak());