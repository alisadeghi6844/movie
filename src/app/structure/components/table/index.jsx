const Table = (props) => {
  const { children, className, titleHeaders, shadow = false, ...rest } = props
  return (
    <div
      className={`relative mb-0 flex  w-full min-w-0 flex-col break-words border-b border-l border-solid bg-white dark:bg-dark-background-paper ${
        shadow ? "shadow-xl" : null
      }  bg-clip-border ${className} overflow-auto`}
    >
      <table
        className="dark:border-dark mb-0 w-full items-center border-gray-200 align-top text-text-primary "
        {...rest}
      >
        {children}
      </table>
    </div>
  )
}

export default Table
