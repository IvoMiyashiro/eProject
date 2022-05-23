import { EmailIcon, PhoneIcon } from 'components/icons';
import { Ul, Li, Div } from './styles';

export const Skeleton = () => {
  return (
    <Ul>
      <Li>
        <Div></Div>
      </Li>
      <Li>
        <EmailIcon width="22px" height="22px" />
        <Div></Div>
      </Li>
      <Li>
        <PhoneIcon width="22px" height="22px" />
        <Div></Div>
      </Li>
    </Ul>
  );
};
