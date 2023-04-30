import Button from './Button';

const CandidateList = () => {
  return (
    <>
      {/* <Container></Container> */}
      <Button data={'김연수'} flag={true} />
      <Button data={'김연수'} flag={true} />
      <Button data={'김연수'} flag={true} />
      <Button data={'김연수'} flag={true} />
      <Button data={'김연수'} flag={true} />
      <Button data={'PIN으로 출근'} flag={false} />
    </>
  );
};

export default CandidateList;
