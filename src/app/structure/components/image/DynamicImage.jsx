import Image from "./index";
import { GET_IMAGE_POINT } from "../../api/points";
import { BASE_URL } from "../../api/config";
import Icon from "../icon";

const DynamicImage = (props) => {
  const { className, documentId, iconClassName, ...rest } = props;
  return (
    <>
      {documentId ? (
        <Image
          className={className ? className : ""}
          src={`${BASE_URL}${GET_IMAGE_POINT}/?id=${documentId}`}
          {...rest}
        />
      ) : (
        <div
          className={`flex items-center justify-center bg-gray-200 ${
            className ? className : ""
          }`}
        >
          <Icon
            name="image"
            size="4xl"
            className={iconClassName ? iconClassName : ""}
          />
        </div>
      )}
    </>
  );
};
export default DynamicImage;
