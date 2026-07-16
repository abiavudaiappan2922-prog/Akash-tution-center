export default function Whatsapp() {
  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <a
        href="https://api.whatsapp.com/send?phone=919087580456"
        className="bg-green-500 text-white px-5 py-3 rounded-full shadow-2xl font-bold block"
      >
        WhatsApp
      </a>
    </div>
  );
}