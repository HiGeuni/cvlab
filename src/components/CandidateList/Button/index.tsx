interface IButton {
  data: string;
  onClick?: (e: any) => {};
  flag: boolean;
}

const Button = ({ data, onClick, flag }: IButton) => {
  return (
    <button
      className={` w-[350px] bg-none border-none text-[#463635] font-bold mb-8 rounded-2xl py-4 ${
        flag ? 'bg-[#d6ebf0]' : 'bg-[#FBF5DF]'
      }`}
      onClick={onClick}
    >
      {data}
    </button>
  );
};

export default Button;
