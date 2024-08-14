const ListItemButton = (props) => {
  const { children, ...rest } = props;
  return (
    <div className="self-center mr-2" {...rest}>
      {children}
    </div>
  );
};
export default ListItemButton;
