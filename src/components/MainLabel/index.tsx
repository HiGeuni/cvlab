import { Label } from './style';

interface IProps {
  isPM: boolean;
}

const MainLabel = ({ isPM }: IProps) => {
  return <Label isPM={isPM}> CVLAB 출입관리</Label>;
};

export default MainLabel;
