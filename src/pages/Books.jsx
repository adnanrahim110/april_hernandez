import React from "react";
import { Helmet } from "react-helmet-async";
import { book1, book2 } from "../assets";
import Contact from "../components/layouts/Contact";
import Hero from "../components/layouts/Hero";
import BookDetails from "../components/ui/BookDetails";
import { books } from "../constant";

const Books = () => {
  return (
    <>
      <Helmet>
        <title>Books - April P. Hernandez</title>
      </Helmet>

      <Hero hero2 title="Books" text="" />
      {books.map((book, idx) => (
        <BookDetails key={idx} book={book} />
      ))}
      <Contact form2 />
    </>
  );
};

export default Books;
