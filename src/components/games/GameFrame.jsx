export default function GameFrame({ title, prompt, status, onNext, onReplay, nextLabel, replayLabel, children }) {
  return (
    <section className="rounded-[2rem] bg-white p-4 shadow-soft sm:p-6">
      <h2 className="text-center text-3xl font-bold text-forest-dark">{title}</h2>
      <p className="mt-2 text-center text-lg">{prompt}</p>
      <div className="mt-5">{children}</div>
      <p role="status" className="mt-4 min-h-7 text-center text-lg font-bold text-forest">
        {status}
      </p>
      <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <button
          type="button"
          onClick={onReplay}
          className="min-h-12 rounded-full bg-white px-5 font-semibold text-forest-dark ring-2 ring-forest/15"
        >
          {replayLabel}
        </button>
        <button type="button" onClick={onNext} className="min-h-12 rounded-full bg-coral px-5 font-semibold text-ink">
          {nextLabel}
        </button>
      </div>
    </section>
  )
}
