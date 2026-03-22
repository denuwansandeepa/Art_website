import Image from "next/image";

interface ArtProps {
  title: string;
  image: string;
}

export default function ArtCard({ title, image }: ArtProps) {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
      <Image
        src={image}
        alt={title}
        width={500}
        height={400}
        className="object-cover w-full h-64"
      />
      <div className="p-4 text-center">
        <h3 className="font-semibold">{title}</h3>
      </div>
    </div>
  );
}
