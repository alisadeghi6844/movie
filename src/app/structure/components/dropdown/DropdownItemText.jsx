import Col from "../grid/col";
import Typography from "../typography/Typography";

const ListItemText = (props) => {
  const { text, ...rest } = props;
  return (
    <Col col={10} xs={10} {...rest}>
      <Typography className="text-sm text-text-primary">{text}</Typography>
    </Col>
  );
};
export default ListItemText;
