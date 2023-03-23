import React, { useState, useContext, ChangeEvent } from 'react';
import Modal from '../modal/Modal';
import validator from 'validator';
import sendEmail from '../../utils/SubmitFunction';
import { DarkModeContext } from '../../context/DarkModeContext';
import { useToggle } from '../../hooks/customToggle';
import {
  MyForm,
  ButtonSubmit,
  MessageField,
  Input,
  LabelText,
  FormWrapper,
  ModalContacts,
  ContactsBackdrop,
} from './Contacts.styled';

const Contacts: React.FC = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [data, setUserData] = useState({
    name: '',
    message: '',
  });

  const [email, setEmailError] = useState('');
  const [phone, setPhoneNumber] = useState('');
  const [isModalOpen, setModalOpen] = useToggle();
  const { message, name } = data;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const values =
    name === '' || email === '' || phone === '' || message === '' || email !== 'Правильно';

  const validateEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError('Правильно');
    } else {
      setEmailError('Будь-ласка правильний email');
    }
  };

  const validatePhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const phone = e.currentTarget.value;
    if (!Number(phone)) {
      setPhoneNumber('');
      alert('Введіть номер');
    } else {
      setPhoneNumber(e.currentTarget.value);
    }
  };

  return (
    <div className={darkMode ? `Content-dark` : `Content-light`}>
      <FormWrapper>
        <MyForm onSubmit={sendEmail}>
          <h1>Напишіть нам</h1>
          <LabelText>
            <p>Ім'я</p>
            <Input type="text" placeholder="Ваше ім'я" onChange={handleChange} name="name" />
          </LabelText>
          <LabelText>
            <p>Пошта</p>
            <Input type="email" placeholder="Ваша пошта" onChange={validateEmail} name="email" />
            <p
              style={{
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              {email}
            </p>
          </LabelText>
          <LabelText>
            <p>Телефон</p>
            <Input
              type="tel"
              placeholder="Ваш номер телефону"
              name="phone"
              value={phone}
              maxLength={12}
              onChange={validatePhoneNumber}
            />
          </LabelText>
          <LabelText>
            <p>Повідомлення</p>
            <MessageField
              placeholder="Напишіть своє повідомлення"
              onChange={handleChange}
              name="message"
            />
          </LabelText>
          <ButtonSubmit
            disabled={values ? true : false}
            type="submit"
            onClick={() => setModalOpen.toggle()}
          >
            {values ? 'Заповніть поля' : 'Відправити'}
          </ButtonSubmit>
          {isModalOpen ? (
            <Modal>
              <ContactsBackdrop>
                <ModalContacts>
                  <p>Дякуємо!В найближчий час ми з вами зв'яжемося.</p>
                </ModalContacts>
              </ContactsBackdrop>
            </Modal>
          ) : null}
        </MyForm>
      </FormWrapper>
    </div>
  );
};

export default Contacts;
