import React from "react";

import SingleSelect from "../select";

const PageSizeSelect = (props) => {
    const { handleChangeSelect, name, edit = false, required, ...rest } = props;

    const pageSizeOptions = [
        {
            label: "10",
            value: 10,
        },
        {
            label: "20",
            value: 20,
        },
        {
            label: "60",
            value: 60,
        },
        {
            label: "100",
            value: 100,
        },
        {
            label: "200",
            value: 200,
        },
    ];

    return (
        <>
            <SingleSelect
                required={required}
                placeholder="تعداد"
                options={pageSizeOptions}
                onChange={(e) => {
                    handleChangeSelect(e);
                }}
                {...rest}
            />
        </>
    );
};

export default PageSizeSelect;
