import { Helmet } from "react-helmet-async";
import { about_1, author_2, author_7, banners_about_bg_1 } from "../assets";
import Contact from "../components/layouts/Contact";
import Hero from "../components/layouts/Hero";
import Posts from "../components/layouts/Posts";
import Reviews from "../components/layouts/Reviews";

const AboutSection = ({ title, imgLeft, imgRight, text, className }) => {
  return (
    <section className={`${className ? className : "mb-10"}`}>
      <div
        className={`flex grow shrink ${
          imgLeft
            ? "flex-col-reverse lg:flex-row"
            : "flex-col-reverse lg:flex-row-reverse"
        } h-full mx-auto w-full`}
      >
        <div className="md:w-[50%] flex shrink">
          <img
            src={imgLeft ? imgLeft : imgRight}
            className="w-full h-[580px] object-cover object-center rounded-[20px]"
            alt=""
          />
        </div>
        <div
          className={`md:w-[50%] flex flex-col gap-[30px] ${
            imgLeft ? "lg:pl-12" : "lg:pr-24"
          } shrink justify-center`}
        >
          <h2>{title}</h2>
          <p dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      </div>
    </section>
  );
};

const Author = () => {
  return (
    <>
      <Helmet>
        <title>About - April P. Hernandez</title>
      </Helmet>
      <Hero
        imgLeft={about_1}
        imgRightBg={banners_about_bg_1}
        subtitle="about me"
        title="Healing begins when spirit and soul meet!"
        text="With compassion and intuition, April guides others through emotional healing, spiritual growth, and the sacred journey back to self."
      />
      <AboutSection
        title="Journey to Wholeness"
        imgLeft={author_7}
        text={`I’m April, a spiritual therapist, Licensed Clinical Social Worker (LCSW), Medium, Reiki Practitioner, Sound and Crystal Healer, and a lifelong student of metaphysics. I discovered that traditional talk therapy alone wasn’t enough—I needed a therapist who had done their own inner work and understood spiritually gifted individuals, who are often misdiagnosed. <br/><br/> Alongside therapy, I embraced energy healing modalities to support my growth after separating from a long-term relationship and choosing to invest in myself. Combining therapy with energetic healing transformed my journey. I discovered the sacred power of touch and the unseen energy flowing through me.`}
      />
      <AboutSection
        className="mb-[150px]"
        title="Radiate Healing Energy"
        imgRight={author_2}
        text={`Healing isn’t linear—it’s messy, deep, and multidimensional. We must address our well-being on both the 3D and 5D levels. As a therapist, I understand how spirituality impacts mental health, and as a medium, how mental health influences our spiritual path. <br/><br/> I invite you to walk this healing journey with me—it would be an honor to witness your transformation.`}
      />
      <Reviews
        dark
        title="What Clients Say"
        text="More than 250 five-star reviews on Google"
      />
      <Posts />
      <Contact form2 />
    </>
  );
};

export default Author;
