import React from "react";
import { Icon } from "@iconify/react";
import minusCircleOutlined from "@iconify/icons-ant-design/minus-circle-outlined";
import {Input} from '../../styles/Styles'
export const InputDropdown = ({
  setPropertyDropdownValue,
  deleteDropdown,
  id,
  index,
  value,
  edit,
}) => {
  return (
    <div>
      {edit ? (
        <Input
          type={"text"}
          onChange={(e) => setPropertyDropdownValue(e.target.value, id, index)}
          value={value}
        />
      ) : (
        <Input
          type={"text"}
          onChange={(e) => setPropertyDropdownValue(e.target.value, id, index)}
        />
      )}

      <span>
        <Icon
          icon={minusCircleOutlined}
          width="30"
          color="blue"
          onClick={() => {
            deleteDropdown(index, id);
          }}
        />
      </span>
    </div>
  );
};
