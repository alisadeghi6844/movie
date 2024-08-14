import Typography from "../typography/Typography";
const ListItemText = (props) => {
  const { primary, secondary, ...rest } = props;
  return (
    <div className="ml-auto " {...rest}>
      <Typography className="text-md text-gray-700 break-all">
        {primary}
      </Typography>
      <Typography className="flex self-start text-xs text-gray-500 break-normal">
        {secondary}
      </Typography>
    </div>
  );
};
export default ListItemText;
