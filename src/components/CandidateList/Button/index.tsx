interface IButton {
  data: string;
  onClick?: (e: any) => {};
  flag: boolean;
}

const Button = ({ data, onClick, flag }: IButton) => {
  const buttonClassName = `bg-none border-none text-[#463635] font-bold mb-8 rounded-2xl ${
    flag ? 'bg-[#d6ebf0]' : 'bg-[#FBF5DF]'
  }`;

  return <button className={buttonClassName}>{data}</button>;
};

export default Button;
