import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Articles"
        description="Venturing into the heart of Europe, the Netherlands presents a unique tapestry of opportunities and experiences. Whether you're drawn by its work culture, scenic beauty, or lifestyle, there's much to explore and learn. Dive into our curated articles to gain insights into living and working in this vibrant nation. From navigating Dutch workplace etiquette to indulging in local festivities, our articles equip you with the knowledge to fully immerse yourself in the Dutch way of life. Stay informed, and let the Netherlands captivate you, one story at a time.
        Familiesimage
        The Netherlands is the best place to live for expat families.
        The Netherlands is the best place to live for expat families? It’s true! 
        "
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
