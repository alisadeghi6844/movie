const ListItemAvatar = (props) => {
  const { children, ...rest } = props;
  return (
    <div className="self-center ml-3" {...rest}>
      {children}
    </div>
  );
};
export default ListItemAvatar;
