const ContactUs = () => {
  return (
    <>
      <div className="text-center my-5">
        <h1 className="display-3">Contact Us</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div>
              <div className="">
                <h2>Welcome to My Food Delivery App</h2>
              </div>
              <address>
                Contact Number : 91xxxxxxxxxx <br /> <br />
                Email : test@test.com <br /> <br />
                Location : Remote
              </address>
            </div>
          </div>
          <div className="col-6">
            <div className="">
              <h2 className="text-center">Form</h2>
              <br />
              <form className="d-flex flex-column ">
                <label htmlFor="name">Name :</label>
                <input
                  type="text"
                  className="border rounded-5 border-black my-2 p-2"
                  name="name"
                  placeholder="name"
                  id=""
                />
                <label htmlFor="message">Message :</label>
                <input
                  type="textarea"
                  className="border rounded-5 border-black my-2 p-2"
                  name="message"
                  placeholder="message"
                  id=""
                />
                <button
                  type="submit"
                  className="border rounded-5 bg-success border-success p-2 my-3"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
