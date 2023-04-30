interface IButton {
  data: string;
  onClick?: (e: any) => {};
  flag: boolean;
}

const Button = ({ data, onClick, flag }: IButton) => {
  return (
    <button
      className={`bg-none border-none bg-[${
        flag ? '#d6ebf0' : '#fbf5df'
      }] text-[#463635] font-bold mb-8 rounded-full`}
    >
      {data}
    </button>
  );
};

export default Button;
