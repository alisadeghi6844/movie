const ListItemIcon = (props) => {
  const { children, ...rest } = props;
  return (
    <div
      className="mr-auto flex justify-end items-center gap-2 [&>*:hover]:text-primary-500 cursor-pointer m-2"
      {...rest}
    >
      {children}
    </div>
  );
};
export default ListItemIcon;
