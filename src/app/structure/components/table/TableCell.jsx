import TextOverflow from "../../utils/TextOverflow"

const TableCell = (props) => {
  const { children, className, textOverFlowSize = 80, ...rest } = props
  return (
    <td
      className="whitespace-nowrap border-r bg-transparent text-sm shadow-transparent dark:border-dark-gray-400 max-sm:text-xs"
      {...rest}
    >
      <div
        className={`flex justify-start px-2 py-2 dark:text-dark-text-primary ${
          className ? className : ""
        }`}
      >
        <TextOverflow number={textOverFlowSize}>{children}</TextOverflow>
      </div>
    </td>
  )
}
export default TableCell
