function Input({value}) {
  return (
    <>
      <input
        type="text"
        placeholder="Add count"
        className="w-full h-[50px] border-[0.5px] border-[#44475A] rounded-t-md outline-none px-4 py-2 flex"
        value={value}
      />
    </>
  );
}

export default Input;
