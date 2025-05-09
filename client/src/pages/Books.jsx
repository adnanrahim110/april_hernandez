import React from "react";
import { Helmet } from "react-helmet-async";
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
      <section>
        {books.map((book, idx) => (
          <BookDetails key={idx} book={book} />
        ))}
      </section>
      <Contact form2 />
    </>
  );
};

export default Books;
