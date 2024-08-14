const List = (props) => {
  const { children, ...rest } = props;
  return (
    <ul className="w-full" {...rest}>
      {children}
    </ul>
  );
};
export default List;
