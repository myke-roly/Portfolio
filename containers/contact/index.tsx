import { ContactStyled } from './styled';
import { ListItems } from '../navbar';
import SocialMedia from 'components/SocialMedia';

const Contact: React.FunctionComponent = () => {
  return (
    <ContactStyled id="contact">
      <div className="container">
        <ul>
          <ListItems />
        </ul>
        <SocialMedia />
      </div>
    </ContactStyled>
  );
};

export default Contact;
