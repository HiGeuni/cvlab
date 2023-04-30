import Button from './Button';

const CandidateList = () => {
  return (
    <div className="flex flex-col">
      <Button data={'김연수'} flag={true} />
      <Button data={'김연수'} flag={true} />
      <Button data={'김연수'} flag={true} />
      <Button data={'김연수'} flag={true} />
      <Button data={'김연수'} flag={true} />
      <Button data={'PIN으로 출근'} flag={false} />
    </div>
  );
};

export default CandidateList;
