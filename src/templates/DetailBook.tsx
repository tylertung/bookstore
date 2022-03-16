import React from "react";
import { useLocation } from "react-router-dom";
import axiosInstance from "../base/axios";
import { useAppDispatch } from "../base/hook";
import BookCard from "../components/detailBook/BookCard";
import GroupComments from "../components/reviewBook/GroupComments";
import * as urls from "../constant/urlRequest";
import { getDetailBook } from "../redux/book/bookAction";

const DetailBook = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const book_id = React.useMemo(() => {
    return location.pathname.replace(`${urls.booksUrl}/`, "");
  }, [location.pathname]);

  React.useEffect(() => {
    getDetailBook(book_id)(dispatch);
  }, [dispatch, book_id]);

  return (
    <React.Fragment>
      <BookCard />
      <GroupComments />
    </React.Fragment>
  );
};

export default React.memo(DetailBook);
