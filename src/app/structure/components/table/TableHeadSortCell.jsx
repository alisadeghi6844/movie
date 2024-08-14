import Icon from "../icon"
import TableHeadCell from "./TableHeadCell"

const TableHeadSortCell = (props) => {
  const { children, value = "asc", ...rest } = props
  return (
    <TableHeadCell>
      <div className="flex justify-between">
        {children}
        {
          {
            des: <Icon icon="sort_up" color="white" />,
            asc: <Icon icon="sort_down" color="white" />,
          }[value]
        }
      </div>
    </TableHeadCell>
  )
}
export default TableHeadSortCell
