import { BgContainer } from './style';

interface IProps {
  bgURL: string;
}

const Background = ({ bgURL }: IProps) => {
  return <BgContainer bgUrl={bgURL}></BgContainer>;
};

export default Background;
