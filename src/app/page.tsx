import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 p-8">
      <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20 ring-1 ring-white/10">
        <Image
          src="/fuwa.webp"
          alt="Fuwa"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="text-center space-y-3">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
          fuwa boilerplate
        </h1>
        <p className="text-gray-500 text-lg">
          Next.js starter &mdash; fork it, break it, build something cool.
        </p>
      </div>

      <div className="mt-8 flex gap-4">
        <a
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all"
        >
          Next.js Docs
        </a>
        <a
          href="https://tailwindcss.com/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all"
        >
          Tailwind Docs
        </a>
      </div>
    </main>
  );
}
