import { Chase, Dot } from './styles';

interface Props {
  size?: String
}

export const Spinner = ({ size = '22px' }: Props) => {
  return (
    <>
      <Chase className="sk-chase" size={size}>
        <Dot className="sk-chase-dot"></Dot>
        <Dot className="sk-chase-dot"></Dot>
        <Dot className="sk-chase-dot"></Dot>
        <Dot className="sk-chase-dot"></Dot>
        <Dot className="sk-chase-dot"></Dot>
        <Dot className="sk-chase-dot"></Dot>
      </Chase>
    </>
  );
};
