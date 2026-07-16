export default function Whatsapp() {
  const message = encodeURIComponent(
    "Hello, I would like to know more about Akash Tuition Center."
  );

  return (
    <a
      href={`https://api.whatsapp.com/send?phone=919087580456&text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-2xl font-bold"
    >
      WhatsApp
    </a>
  );
}