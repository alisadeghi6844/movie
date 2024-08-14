import React, { useState } from "react";

import Badge from "../badge";
import Icon from "../icon";
import Popper from "../popover";
import { List, ListItem } from "../list";

const Notification = () => {
  const [openNotification, setOpenNotification] = useState(false);

  return (
    <div
      onClick={() => setOpenNotification((prevState) => !prevState)}
      className="relative"
    >
      <Popper open={openNotification}>
        <List>
          <ListItem>
            <div className="flex items-center">
              <Icon name="user" size="lg" />
              <span className="mr-2">پروفایل</span>
            </div>
          </ListItem>
          <ListItem>
            <div className="flex items-center mt-2">
              <Icon name="question-circle" size="lg" />
              <span className="mr-2">سوالات</span>
            </div>
          </ListItem>
          <ListItem>
            <div className="flex items-center mt-2">
              <Icon name="cog" size="lg" />
              <span className="mr-2">تنظیمات</span>
            </div>
          </ListItem>
        </List>
      </Popper>
      <div className="cursor-pointer relative mt-1">
        <Icon name="bell" type="solid" size="lg" />
        <Badge number={3} />
      </div>
    </div>
  );
};

export default Notification;
