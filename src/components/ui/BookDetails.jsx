import { FaAmazon } from "react-icons/fa6";
import { LiaCartPlusSolid } from "react-icons/lia";
import { TbShoppingCartCheck } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "../../context/CartContext";

const BookDetails = ({ book }) => {
  const { cart, addItem } = useCart();
  const inCart = cart.some((item) => item.id === book.id);
  const navigate = useNavigate();

  const onAddToCart = () => {
    addItem(book, 1);
    toast.success(
      <div className="flex flex-col toastAddCrt">
        <span>📚 Book added to cart</span>
        <div className="mt-2 flex gap-2">
          <button
            onClick={() => {
              navigate("/cart");
              toast.dismiss();
            }}
            className="px-3 py-2 bg-transparent border text-xs uppercase border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
          >
            View Cart
          </button>
          <button
            onClick={() => {
              navigate("/checkout");
              toast.dismiss();
            }}
            className="px-3 py-2 bg-sndry border text-xs uppercase border-sndry text-white hover:bg-transparent hover:text-sndry transition-all duration-300 ease-in-out"
          >
            Checkout
          </button>
        </div>
      </div>,
      {
        autoClose: 1500,
        closeOnClick: false,
      }
    );
  };
  return (
    <div className="relative not-first:before:absolute not-first:before:top-0 not-first:before:left-0 not-first:before:w-full not-first:before:h-2 not-first:before:rounded-[100%] not-first:before:bg-neutral-200 not-first:mt-20 not-first:pt-20">
      <div
        className={`flex grow shrink ${
          book.imgRight ? "flex-row-reverse" : "flex-row"
        } gap-[50px] h-full mx-auto w-full items-center`}
      >
        <div className="md:w-[35%] flex flex-col">
          <img src={book.img} className="rounded-[20px] object-cover" alt="" />
        </div>
        <div
          className={`md:w-[65%] flex flex-col gap-6 ${
            book.imgRight ? "pr-16" : "pl-16"
          }`}
        >
          <h2 dangerouslySetInnerHTML={{ __html: book.title }} />
          {book.text.map((para, idx) => (
            <div key={idx} dangerouslySetInnerHTML={{ __html: para }} />
          ))}
          <div className="mt-5">
            <div className="flex h-16 items-center bg-neutral-100 border border-[#D1D1D1] rounded-lg overflow-hidden">
              <div className="grow shrink text-center flex h-full items-center justify-start gap-4 px-8 bg-[#fbfaf7] border-r border-[#D1D1D1]">
                <h5>Price:</h5>
                <span className="text-xl inline-flex items-center justify-center gap-1">
                  <span>$</span>
                  <span>{book.price.toFixed(2)}</span>
                </span>
              </div>
              <button
                onClick={onAddToCart}
                disabled={inCart}
                className="grow shrink px-5 border-r border-r-[#D1D1D1] flex h-16 items-center justify-center gap-2 uppercase text-base bg-primary text-white hover:bg-sndry transition-all duration-300 ease-in-out not-disabled:cursor-pointer disabled:bg-primary-50 disabled:text-primary"
              >
                <span>
                  {inCart ? (
                    <TbShoppingCartCheck className="text-2xl" />
                  ) : (
                    <LiaCartPlusSolid className="text-2xl" />
                  )}
                </span>
                <span>{inCart ? "Already In Cart" : "Add to cart"}</span>
              </button>
              <div className="grow shrink ">
                <a
                  href={book.amzLink}
                  target="_blank"
                  className="flex cursor-pointer h-16 px-5 items-center justify-center gap-2 uppercase text-base bg-amber-600 text-white hover:bg-amber-700 transition-all duration-300 ease-in-out"
                >
                  <span>
                    <FaAmazon className="text-xl mt-1" />
                  </span>
                  <span>Buy on Amazon</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
