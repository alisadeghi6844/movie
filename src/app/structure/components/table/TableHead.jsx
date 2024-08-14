const TableHead = (props) => {
  const { children, ...rest } = props
  return (
    <thead className="align-bottom" {...rest}>
      {children}
    </thead>
  )
}
export default TableHead
