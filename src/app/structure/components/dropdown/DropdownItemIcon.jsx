import Col from "../grid/col";

const ListItemIcon = (props) => {
  const { children, ...rest } = props;
  return (
    <Col
      col={1}
      xs={1}
      className="hover:text-primary-500 ml-1 cursor-pointer"
      {...rest}
    >
      {children}
    </Col>
  );
};
export default ListItemIcon;
