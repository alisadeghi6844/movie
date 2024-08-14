import Typography from "../typography/Typography"
import Image from "../image"
import  AvatarSkeleton  from "../../container/organism/skeleton/AvatarSkeleton"

const Avatar = (props) => {
  const {
    alt,
    description,
    img = null,
    sqr = false,
    name,
    isLoading,
    size = "md",
    className,
    ...rest
  } = props

  return (
    <div className="flex flex-wrap items-center">
      {isLoading ? (
        <>
          <AvatarSkeleton />
        </>
      ) : (
        <>
          {!!img ? (
            <Image
              src={img ?? null}
              alt={alt ?? null}
              className={`shadow-lg ${
                {
                  xs: "h-7 w-7 lg:h-8 lg:w-8",
                  sm: "h-9 w-9 lg:h-10 lg:w-10",
                  md: "h-11 w-11 lg:h-12 lg:w-12",
                  lg: "h-12 w-12 lg:h-14 lg:w-14",
                  xl: "h-auto w-16 lg:w-20",
                  "2xl": "h-20 w-20 lg:h-24 lg:w-24",
                }[size]
              } ${sqr ? "rounded-lg" : "rounded-full"}`}
              {...rest}
            />
          ) : (
            <Typography
              tag="span"
              className={`${
                { xs: "h-8 w-8", md: "h-11 w-11", lg: "h-16 w-16" }[size]
              } flex items-center justify-center rounded-full bg-text-secondary`}
            >
              {name && name[0] + name[1] && name[2]}
            </Typography>
          )}

          <div className={`${className ? className : ""}`}>
            <Typography
              className={`${
                { xs: "text-xs", sm: "text-sm", md: "text-md", lg: "text-xl" }[
                  size
                ]
              }  m-0 mb-1 text-start font-semibold text-text-primary dark:text-dark-text-primary`}
            >
              {name ?? null}
            </Typography>
            <Typography
              className={`${
                { xs: "text-xs", sm: "text-sm", md: "text-sm", lg: "text-md" }[
                  size
                ]
              } text-text-secondary  dark:text-dark-text-secondary`}
            >
              {description ?? null}
            </Typography>
          </div>
        </>
      )}
    </div>
  )
}

export default Avatar
