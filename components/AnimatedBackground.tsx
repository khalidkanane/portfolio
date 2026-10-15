export default function AnimatedBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#1571cc]"
      aria-hidden="true"
    >
      <div className="portfolio-background-drift absolute inset-[-4%] bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(247,251,255,0.9)),url('/images/portfolio-background.webp')] bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.2),transparent_42%,rgba(219,238,255,0.24)),linear-gradient(180deg,rgba(255,255,255,0.12),rgba(247,251,255,0.34))]" />
    </div>
  );
}
