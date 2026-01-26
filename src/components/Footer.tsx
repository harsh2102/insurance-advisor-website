import { useLang } from "@/utils/LanguageContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t py-8 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Social Links */}
        <div className="flex justify-center items-center gap-6 mb-6">
          <a
            href="https://www.linkedin.com/in/sushil-mishra-894b622ab/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn Profile"
            title="Verify on LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="https://wa.me/917906850213"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 text-white transition-all duration-300 hover:scale-110"
            aria-label="WhatsApp"
            title="Chat on WhatsApp"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.78.41 3.45 1.15 4.95L2.05 22l5.25-.89c1.38.81 2.97 1.26 4.74 1.26C17.5 22 22 17.55 22 12.09c0-5.46-4.49-9.09-9.96-9.09zm0 1.78c4.3 0 7.84 3.55 7.84 7.87 0 4.3-3.54 7.87-7.84 7.87-.95 0-1.87-.2-2.74-.57l-.2-.1-2.08.35.38-2.2-.13-.21c-.8-1.3-1.25-2.78-1.25-4.34 0-4.32 3.55-7.87 7.84-7.87zm4.26 10.71c-.2-.1-1.19-.58-1.38-.65-.19-.07-.34-.1-.48.1-.15.2-.57.65-.7.78-.13.14-.26.16-.46.05-.2-.1-.84-.3-1.6-.97-.59-.52-.99-1.17-1.1-1.37-.13-.2-.01-.31.09-.41.1-.09.2-.24.31-.36.1-.13.13-.22.2-.37.07-.15.04-.28-.03-.39-.07-.11-.48-1.15-.66-1.57-.17-.4-.36-.35-.48-.36-.13 0-.27-.01-.41-.01-.15 0-.37.05-.56.26-.2.2-.75.74-.75 1.8 0 1.06.77 2.09.87 2.24.1.15 1.4 2.14 3.39 3.01 1.99.87 1.99.58 2.35.54.36-.04 1.19-.48 1.35-.96.16-.48.16-.89.11-.98-.05-.09-.2-.14-.41-.24z" />
            </svg>
          </a>
        </div>

        {/* Footer Text */}
        <div className="text-center text-xs text-gray-600 border-t border-gray-200 pt-4">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-2">
            <span>{t.footer_text}</span>
            <span className="hidden sm:inline">·</span>
            <span>{t.footer_city}</span>
            <span className="hidden sm:inline">·</span>
            <span>
              © {new Date().getFullYear()} {t.footer_rights}
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Connect on LinkedIn to verify credentials and expertise
          </p>
        </div>
      </div>
    </footer>
  );
}
