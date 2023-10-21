import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section id="blog" className="bg-primary/5 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Living & Working in the Netherlands - Insights & Articles"
          paragraph="Venturing into the heart of Europe, the Netherlands presents a unique tapestry of opportunities and experiences. Whether you're drawn by its work culture, scenic beauty, or lifestyle, there's much to explore and learn. Dive into our curated articles to gain insights into living and working in this vibrant nation. From navigating Dutch workplace etiquette to indulging in local festivities, our articles equip you with the knowledge to fully immerse yourself in the Dutch way of life. Stay informed, and let the Netherlands captivate you, one story at a time."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
