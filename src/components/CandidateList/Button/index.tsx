import { StyledButton } from './style';

interface IButton {
  data: string;
  onClick?: (e: any) => {};
  flag: boolean;
}

const Button = ({ data, onClick, flag }: IButton) => {
  return (
    <StyledButton flag={flag} onClick={onClick}>
      {data}
    </StyledButton>
  );
};

export default Button;
