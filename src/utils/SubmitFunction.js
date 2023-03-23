import emailjs from 'emailjs-com';

export default function sendEmail(e) {
  e.preventDefault();
  emailjs.sendForm('service_dl2asq4', 'template_vgiml6t', e.target, 'uNOI4ZKdEYiXSQt9Q').then(
    result => {
      setTimeout(() => {
        window.location.reload();
      }, 3500);
    },
    error => {
      error.text;
    },
  );
}
