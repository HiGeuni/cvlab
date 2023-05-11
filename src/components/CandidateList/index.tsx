import Button from './Button';
import { FlexDiv } from './style';

const CandidateList = () => {
  return (
    <FlexDiv>
      <Button data={'김연수'} flag={true} />
      <Button data={'김연수'} flag={true} />
      <Button data={'김연수'} flag={true} />
      <Button data={'김연수'} flag={true} />
      <Button data={'김연수'} flag={true} />
      <Button data={'PIN 번호로 입장'} flag={false} />
    </FlexDiv>
  );
};

export default CandidateList;
