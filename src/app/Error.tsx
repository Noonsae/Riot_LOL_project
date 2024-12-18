"use client";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="text-center text-red-500 mt-10">
      <h2 className="text-2xl font-bold mb-4">
        데이터를 불러오는 중 오류가 발생했습니다.
      </h2>
      <p className="mb-4">{error.message}</p>
      <button
        onClick={() => reset()} // 다시 시도 버튼
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
      >
        다시 시도하기
      </button>
    </div>
  );
};

export default Error;
