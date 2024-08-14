const Dropdown = (props) => {
  const { children, open, ...rest } = props;
  return (
    <ul
      className={`${
        open ? "h-32" : "h-0"
      } transition-all duration-300 mt-[5px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-200 h-32 overflow-y-scroll w-full`}
      {...rest}
    >
      {children}
    </ul>
  );
};

export default Dropdown;
