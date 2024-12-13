import Link from "next/link";

function Header({
  theme,
  toggleTheme,
}: {
  theme: string;
  toggleTheme: () => void;
}) {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        {/* 로고 */}
        <div>
          <Link href="/" className="text-lg font-bold">
            로고
          </Link>
        </div>

        {/* 네비게이션 메뉴 */}
        <div className="flex space-x-4">
          <Link href="/rotation" className="hover:text-gray-300">
            로테이션
          </Link>
          <Link href="/champions" className="hover:text-gray-300">
            챔피언
          </Link>
          <Link href="/items" className="hover:text-gray-300">
            아이템
          </Link>
        </div>

        {/* 다크모드 토글 버튼 */}
        <button
          className="bg-gray-700 text-white px-4 py-2 rounded"
          onClick={toggleTheme}
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>
    </header>
  );
}

export default Header;
