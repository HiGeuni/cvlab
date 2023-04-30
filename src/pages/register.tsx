import SignupForm from '../components/SignupForm';

const Register = () => {
  return (
    <>
      <div
        className="w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(../../public/bg.png)`,
        }}
      >
        <SignupForm />
      </div>
    </>
  );
};

export default Register;
