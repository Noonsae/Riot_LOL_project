import Image from "next/image";
import Link from "next/link";

type CardProps = {
  href: string;
  imageSrc: string;
  alt: string;
  title: string;
};

export default function Card({ href, imageSrc, alt, title }: CardProps) {
  return (
    <li>
      <Link
        href={href}
        className="flex flex-col gap-6 items-center justify-center"
      >
        <Image src={imageSrc} alt={alt} width={300} height={200} priority />
        <p className="dark:font-medium font-bold text-[22px]">{title}</p>
      </Link>
    </li>
  );
}