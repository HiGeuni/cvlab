import SignupForm from '../components/SignupForm';
import styled from '@emotion/styled';

const Register = () => {
  return (
    <>
      <StyledDiv
        style={{
          backgroundImage: `url(../../public/bg.png)`,
        }}
      >
        <SignupForm />
      </StyledDiv>
    </>
  );
};

export default Register;

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
