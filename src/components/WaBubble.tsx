import { MessageCircle } from "lucide-react";

const WA_NUMBER = "628125550134";
const WA_TEXT = encodeURIComponent(
  "Halo Melintang Tour! Saya mau tanya-tanya soal paket tour."
);

export default function WaBubble() {
  return (
    <a
      href={`https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat travel consultant via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-xl transition-transform hover:scale-110 active:scale-95"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
