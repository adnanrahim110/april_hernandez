import { Route, Routes } from "react-router-dom";
import Author from "../pages/Author";
import Blog from "../pages/Blog";
import Blogs from "../pages/Blogs";
import Books from "../pages/Books";
import Cards from "../pages/Cards";
import Cart from "../pages/Cart";
import Categories from "../pages/Categories";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/author" element={<Author />} />
      <Route path="/books" element={<Books />} />
      <Route path="/cards" element={<Cards />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:blogName" element={<Blog />} />
      <Route path="/blogs/category/:category" element={<Categories />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
