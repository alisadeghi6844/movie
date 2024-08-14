import React, { useEffect, useState } from "react";
import Input from "../input";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

import Typography from "../typography/Typography";
import useDebounce from "../../hooks/UseDebounce";
import PageSizeSelect from "./PageSizeSelect";

const Pagination = (props) => {
  const {
    page,
    totalPages,
    setChangePage,
    setChangePageSize,
    pageSize,
    inputWidth = "34px",
  } = props;

  const [pageNumber, setPageNumber] = useState(null);
  const [pageSizeValue, setPageSizeValue] = useState({
    label: pageSize,
    value: pageSize,
  });

  useEffect(() => {
    setChangePageSize(pageSizeValue);
  }, [pageSizeValue]);

  useEffect(() => {
    setChangePageSize(pageSizeValue);
  }, [pageSizeValue]);

  useEffect(() => {
    if (pageNumber?.toString().length) {
      setPageNumber(page);
    }
  }, [page]);

  useDebounce(
    () => {
      if (pageNumber?.toString()?.length) {
        setChangePage(pageNumber);
      }
    },
    [pageNumber],
    600
  );

  const handlePrevPage = () => {
    if (Number(pageNumber) > 1 && Number(page) > 1) {
      setPageNumber(page - 1);
    }
  };
  const handleNextPage = () => {
    if (Number(pageNumber) < totalPages && Number(page) < totalPages) {
      setPageNumber(page + 1);
    }
  };

  const handleChangeInput = (e) => {
    if (e.target.value <= totalPages && e.target.value >= 1) {
      setPageNumber(Number(e.target.value));
    }
  };

  return (
    <>
      {totalPages > 1 ? (
        <div className="flex items-center gap-x-3">
          <div className="flex items-center">
            <FaChevronRight
              className="cursor-pointer"
              onClick={handlePrevPage}
            />
            <FaChevronLeft
              className="cursor-pointer fill-grey-900"
              onClick={handleNextPage}
            />
          </div>
          <div
            style={{
              width: `calc(${inputWidth} + ${
                pageNumber?.toString().length > 1
                  ? pageNumber?.toString().length * 5.4
                  : page?.toString().length > 1
                  ? page?.toString().length * 5.4
                  : 0
              }px)`,
            }}
          >
            <Input
              name="Page"
              type="number"
              size="sm"
              className="w-full"
              value={pageNumber ?? page}
              onChange={(e) => handleChangeInput(e)}
              onWheel={(e) => e.target.blur()}
            />
          </div>
          <div className="flex">
            <Typography className="pl-2">از</Typography>
            <Typography>{totalPages ?? null}</Typography>
          </div>
          <div className="mr-8 -mt-3 flex items-end">
            <div className="flex-1">
              <PageSizeSelect
                size="xs"
                handleChangeSelect={(e) => {
                  setPageSizeValue(e ?? null);
                }}
                value={pageSizeValue ?? null}
              />
            </div>
            <Typography tag="span" className="mr-3">
              : تعداد نمایش سطر
            </Typography>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default Pagination;
