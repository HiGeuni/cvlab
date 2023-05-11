import { Label } from './style';

interface IProps {
  isPM: boolean;
}

const MainLabel = ({ isPM }: IProps) => {
  return <Label isPM={isPM}> 얼굴인식 출입관리 시스템</Label>;
};

export default MainLabel;
