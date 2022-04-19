import { Chase, Dot } from './styles';

interface Props {
  size?: string;
  color?: string;
}

export const Spinner = ({ size = '22px', color = '#fff' }: Props) => {
  return (
    <>
      <Chase className="sk-chase" size={size}>
        <Dot className="sk-chase-dot" color={color}></Dot>
        <Dot className="sk-chase-dot" color={color}></Dot>
        <Dot className="sk-chase-dot" color={color}></Dot>
        <Dot className="sk-chase-dot" color={color}></Dot>
        <Dot className="sk-chase-dot" color={color}></Dot>
        <Dot className="sk-chase-dot" color={color}></Dot>
      </Chase>
    </>
  );
};
