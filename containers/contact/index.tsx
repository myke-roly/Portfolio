import React, { SyntheticEvent, FormEvent, useState } from 'react';
import { ContactStyled, Right, Left } from './styled';
import { ListItems } from '../navbar';
import SocialMedia from 'components/SocialMedia';
import Button from 'components/ui/button';

type InputEvent = FormEvent<HTMLInputElement | HTMLTextAreaElement>;

const Contact: React.FunctionComponent = () => {
  const [messageForm, setMessageForm] = useState<{}>({
    name: '',
    message: '',
  });

  function saveMessageForm(e: InputEvent): void {
    setMessageForm({
      ...messageForm,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  }

  function sendMessageForm(e: SyntheticEvent): void {
    e.preventDefault();
    console.log('enviando message: ', messageForm);
  }

  return (
    <ContactStyled id="contact">
      <div className="container">
        <Left>
          <ul>
            <ListItems />
          </ul>
          <SocialMedia />
        </Left>
        <Right>
          <form onSubmit={sendMessageForm}>
            <input
              type="text"
              name="name"
              placeholder="Name..."
              onInput={saveMessageForm}
            />
            <textarea
              name="message"
              rows={1}
              placeholder="Message..."
              onInput={saveMessageForm}
            ></textarea>
            <Button text="Send Message" />
            <h2>Contact me</h2>
          </form>
        </Right>
      </div>
    </ContactStyled>
  );
};

export default Contact;
