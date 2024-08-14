import Row from "../grid/row";

const DropdownItem = (props) => {
  const { children, onClick: handleClick, ...rest } = props;
  return (
    <li
      className="cursor-pointer p-2 hover:bg-gray-100"
      onClick={handleClick}
      {...rest}
    >
      <Row className="flex items-center">{children}</Row>
    </li>
  );
};

export default DropdownItem;
