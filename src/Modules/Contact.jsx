
const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">You can reach us through the following channels:</p>
      <ul className="list-disc ml-6 mb-8">
        <li>
          GitHub: <a href="https://github.com/UpadhyayaShivam" className="text-blue-500 hover:underline">Shivam Sharma : UpadhyayaShivam</a>
        </li>
        <li>
          Instagram: <a href="https://www.instagram.com/shivam6957/" className="text-blue-500 hover:underline">shivam6957</a>
        </li>
        <li>
          Email: className="text-blue-500 hover:underline">shivam.upadhyaya23@gmail.com</a>
        </li>
      </ul>
    </div>
  );
};

export default ContactPage;
