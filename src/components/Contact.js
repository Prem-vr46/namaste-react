const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">from contact page</h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="message"
        />
        <button className="border border-black p-2 m-2">Submit</button>
      </form>
    </div>
  );
};
export default Contact;
