"use client";

export default function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="
        inline-flex
        items-center
        gap-2
        rounded-2xl
        border
        border-neutral-300
        bg-white
        px-5
        py-3
        text-sm
        font-medium
        text-black
        shadow-sm
        transition
        hover:-translate-y-0.5
        hover:shadow-md
        hover:bg-neutral-100
      "
    >
      ← Volver atrás
    </button>
  );
}