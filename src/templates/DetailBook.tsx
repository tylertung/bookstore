import React from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../base/hook";
import BookCard from "../components/detailBook/BookCard";
import GroupComments from "../components/reviewBook/GroupComments";
import * as urls from "../constant/urlRequest";
import { getDetailBook } from "../redux/book/bookAction";

const DetailBook = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const book_id = location.pathname.replace(`${urls.booksUrl}/`, "");
  React.useMemo(() => {
    getDetailBook(book_id)(dispatch);
  }, [dispatch, book_id]);
  
  return (
    <>
      <BookCard />
      <GroupComments />
    </>
  );
};

export default DetailBook;
