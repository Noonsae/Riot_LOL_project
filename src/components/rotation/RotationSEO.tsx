import Head from "next/head";

export function RotationSEO() {
  return (
    <Head>
      <title>금주 로테이션 챔피언</title>
      <meta
        name="description"
        content="Riot Games API를 활용하여 금주의 로테이션 정보를 제공합니다."
      />
      <meta property="og:title" content="금주 로테이션 정보" />
      <meta
        property="og:description"
        content="Riot Games API를 활용하여 금주의 로테이션 정보를 제공합니다."
      />
      <meta property="og:url" content="http://localhost:3000/rotation" />
    </Head>
  );
}
