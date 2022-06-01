import { Div, P } from './styles';

interface Props {
  type: 'danger' | 'ok' | 'warn';
  content: string;
  handleVisivility: (value: boolean) => void;
}

export const Toast = ({ type, content, handleVisivility }: Props) => {

  setTimeout(() => {
    handleVisivility(false);
  }, 4000);

  return (
    <Div type={type}>
      <P>{ content }</P>
    </Div>
  );
};
