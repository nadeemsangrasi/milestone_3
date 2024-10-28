"use client";
import { useRouter } from "next/navigation";

const NavigateButton = ({ url, label }: { url: string; label: string }) => {
  const router = useRouter();
  return (
    <button
      className="bg-primary-black text-primary-white font-bold py-2 px-4 rounded"
      onClick={() => router.push(url)}
    >
      {label}
    </button>
  );
};

export default NavigateButton;
