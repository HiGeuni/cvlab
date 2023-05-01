import { Link } from 'react-router-dom';
import { Container, FlexDiv, MarginDiv, StyledBtn, ToRegister } from './style';

interface IProps {
  isPM: boolean;
  curTime: string;
  curDate: string;
}

const HomeComponent = ({ isPM, curTime, curDate }: IProps) => {
  return (
    <Container isPM={isPM}>
      <div>{curDate}</div>
      <MarginDiv>{curTime}</MarginDiv>
      <FlexDiv>
        <StyledBtn isPM={isPM}>
          <Link to="/faceId">출석 / 퇴근</Link>
        </StyledBtn>
        <ToRegister isPM={isPM}>
          회원이 아니신가요?
          <Link to="/register">등록하기</Link>
        </ToRegister>
      </FlexDiv>
    </Container>
  );
};

export default HomeComponent;
