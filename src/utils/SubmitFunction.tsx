import emailjs from 'emailjs-com';

export default function sendEmail(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const target = e.target as HTMLFormElement;
  emailjs.sendForm('service_dl2asq4', 'template_vgiml6t', target, 'uNOI4ZKdEYiXSQt9Q').then(
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
