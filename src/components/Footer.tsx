export default function Footer() {
  return (
    <footer className="border-t py-4 px-6 text-xs text-gray-400">
      <div className="max-w-6xl mx-auto flex justify-center gap-2">
        <span>Trusted Health & Life Insurance Advisor</span>
        <span>·</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
