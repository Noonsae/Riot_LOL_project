"use client";

export default function CinematicBackground() {
  return (
    <div className="absolute top-[80px] left-0 w-full h-[calc(100vh-200px)] -z-10">
      {/* 비디오 */}
      <video
        className="w-full h-full object-cover"
        src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/8ab3e227121c53aacab0c9b9f7a48adbc65db520.webm"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 오버레이 */}
      <div className="indent-[-9999px] absolute top-0 left-0 w-full h-full bg-white/20 dark:bg-[rgba(0,0,0,0.5)]">overlay</div>
    </div>
  );
}
