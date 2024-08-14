const TableRow = (props) => {
  const { children, ...rest } = props
  return (
    <tr className="cursor-pointer" {...rest}>
      {children}
    </tr>
  )
}
export default TableRow
