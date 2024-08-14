const ListItem = (props) => {
  const { children, listStyle = false, className, ...rest } = props;
  return (
    <li
      className={`flex justify-between align-items-stretch px-3 py-2 ${
        listStyle ? "list-custom" : null
      } ${className}`}
      {...rest}
    >
      {children}
    </li>
  );
};

export default ListItem;
