function Button({ value, onClick }) {
  return (
    <button
      className="w-[50px] h-[50px] bg-[#44475A] text-[#F8F8F2] font-bold rounded-md mt-3 hover:bg-[#282A36] transition-all duration-500"
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Button;
