const Radio = (props) => {
  const { children, id, onChange: handleChange, ...rest } = props;
  return (
    <li className="flex items-center pl-1" {...rest}>
      <input
        id={id}
        type="radio"
        name="list-radio"
        onChange={handleChange}
        className="w-4 h-4 text-primary-500 bg-background-default  focus:ring-primary-500 "
        {...rest}
      />
      {children && (
        <label for={id} className="py-1 ml-1 mr-3 w-full text-text-primary ">
          {children}
        </label>
      )}
    </li>
  );
};
export default Radio;
