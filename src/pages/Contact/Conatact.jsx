export default function Conatact() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen py-8" data-aos="zoom-in">
        <div className="container mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
            <p className="text-gray-800 mb-4">
              If you have any questions or inquiries, please feel free to
              contact us using the form below.
            </p>
            <form className="mb-6">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-600 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full border p-2 rounded"
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border p-2 rounded"
                  placeholder="john@example.com"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-600 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full border p-2 rounded h-32"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#C3937C] text-white rounded p-2 hover:bg-[#e0c3b5]"
              >
                Send Message
              </button>
            </form>
            <p className="text-gray-600">
              We'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
