import deco from "../../assets/blog.jpg";

const Blog = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen py-8 ">
        <div className="container mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-md" data-aos="zoom-in">
            <h1 className="text-3xl font-semibold mb-4">Blog Post Title</h1>
            <p className="text-gray-600 mb-4">
              Published on July 12, 2023 by John Doe
            </p>
            <img
              src={deco}
              alt="Blog Post"
              className="w-full rounded-lg mb-6"
            />
            <p className="text-gray-800 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              id eleifend lorem, ut volutpat nulla. Maecenas eget mattis leo.
              Integer fringilla congue odio, eget iaculis ex iaculis id. Sed
              vehicula odio ut ultricies. Nullam nec sapien eu urna auctor
              bibendum.
            </p>
            <div className="mt-6">
              <a href="#" className="text-blue-600 hover:underline">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
