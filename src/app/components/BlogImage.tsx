import Image from "next/image";

export default function BlogImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="my-14 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={900}
        className="
          w-full
          object-cover
          transition-transform
          duration-700
          hover:scale-[1.02]
        "
      />
    </div>
  );
}