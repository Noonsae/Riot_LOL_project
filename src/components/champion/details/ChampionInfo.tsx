import Image from "next/image";

type ChampionInfoProps = {
  title: string;
  name: string;
  lore: string;
  imgUrl: string;
};

const ChampionInfo = ({ title, name, lore, imgUrl }: ChampionInfoProps) => (
  <article>
    <h2 className="text-base font-normal dark:text-[#c8aa6e] text-[#c7a052] text-[32px] -ml-2 font-semibold text-shadow-md">
      {title}
    </h2>
    <p className="text-[26px] mb-2 text-shadow-md">{name}</p>

    <div className="w-[45%]">
      <div className="flex flex-col gap-8">
        <div className="flex items-start justify-center max-w-[200px] max-h-[200px] overflow-hidden rounded-sm shadow-lg">
          <Image
            src={imgUrl}
            alt={name}
            width={300}
            height={300}
            className="object-cover transform scale-110"
            priority
          />
        </div>
        <p className="text-4 font-light">{lore}</p>
      </div>
    </div>
  </article>
);

export default ChampionInfo;
