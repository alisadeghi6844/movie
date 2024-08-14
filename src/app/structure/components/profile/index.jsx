import React, { useState } from "react";
import { useSelector } from "react-redux";
import { LuLogOut } from "react-icons/lu";

import Popper from "../popover";
import { List, ListItem } from "../list";
import OutsideClickHandler from "react-outside-click-handler";
import Avatar from "../avatar";

import Typography from "../typography/Typography";
import { FaChevronDown } from "react-icons/fa";
import LogOut from "../../container/features/account/LogOut";
import TextOverflow from "../../utils/TextOverflow";

const Profile_3 = (props) => {
  const { loading, description } = props;
  const [openProfile, setOpenProfile] = useState(false);

  const { getUserInfoData } = useSelector((state) => state.auth);
  console.log("userInformationData", getUserInfoData);
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setOpenProfile(false);
      }}
    >
      {loading ? (
        <div>loading...</div>
      ) : (
        <div className="relative flex flex-col items-center sm:ml-[48px]">
          <Popper className="z-30 mt-1 w-full" open={openProfile}>
            <List>
              <ListItem className="my-1 w-full cursor-pointer rounded-xl  transition-all duration-200 hover:bg-primary-50 dark:hover:bg-dark-gray-300">
                <LogOut className="flex w-full items-center text-error-500 dark:text-dark-text-primary">
                  <LuLogOut className="text-xl" />
                  <span className="mr-2 text-sm">خروج</span>
                </LogOut>
              </ListItem>
            </List>
          </Popper>
          <div
            onClick={() => setOpenProfile((prevState) => !prevState)}
            className="relative flex h-14 w-40 cursor-pointer items-center justify-between rounded-lg border-2 border-dashed border-primary-500 bg-white px-2 text-slate-800  max-lg:h-auto max-lg:w-auto max-lg:rounded-full max-lg:bg-transparent max-lg:p-[1px]"
          >
            <div className="flex">
              <Avatar
                img={getUserInfoData?.profileImage}
                size="sm"
                className="mr-2 max-lg:hidden"
              />
              <div className="hidden lg:block">
                <Typography className="text-xs font-bold">
                  {`${getUserInfoData?.firstName} ${getUserInfoData?.lastName} `}
                </Typography>
                {getUserInfoData?.extension && (
                  <Typography className="mt-1 text-[14px]">
                    <TextOverflow number={40}>
                      {" "}
                      {getUserInfoData?.extension ?? "_"}
                    </TextOverflow>
                  </Typography>
                )}
              </div>
            </div>
            <FaChevronDown className="absolute text-lg left-2 top-1 max-lg:hidden" />
          </div>
        </div>
      )}
    </OutsideClickHandler>
  );
};

export default Profile_3;
