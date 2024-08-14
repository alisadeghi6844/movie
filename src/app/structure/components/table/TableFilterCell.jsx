import TableCell from "./TableCell"

const TableFilterCell = (props) => {
  const { children, className, ...rest } = props
  return (
    <TableCell className={` h-[47px] border-b !p-0 ${className}`}>
      {children}
    </TableCell>
  )
}

export default TableFilterCell
