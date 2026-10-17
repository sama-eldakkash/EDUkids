export default function CharacterCard({ name, line, art, tone }) {
  return (
    <article className="flex h-full flex-col items-center rounded-[2rem] bg-white px-5 py-6 text-center shadow-soft sm:px-6 sm:py-8">
      <div className={`grid h-56 w-full place-items-end overflow-hidden rounded-[1.8rem] pb-3 sm:h-64 ${tone}`}>
        <div className="w-full">{art}</div>
      </div>
      <h3 className="mt-5 text-2xl font-bold text-forest-dark">{name}</h3>
      <p className="mt-2 max-w-xs text-lg leading-relaxed">{line}</p>
    </article>
  )
}
