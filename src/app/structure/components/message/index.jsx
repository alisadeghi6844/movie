import React, { useState } from "react";

import Badge from "../badge";
import Icon from "../icon";
import { List, ListItem } from "../list";
import Popper from "../popover";

const Message = () => {
  const [openMessage, setOpenMessage] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpenMessage((prevState) => !prevState)}
        className="relative"
      >
        <Popper open={openMessage}>
          <List>
            <ListItem>
              <div className="flex items-center">
                <Icon name="user" size="md" />
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
          <Icon name="message" size="lg" />
          <Badge number={4} />
        </div>
      </div>
    </>
  );
};

export default Message;
