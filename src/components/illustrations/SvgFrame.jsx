export default function SvgFrame({
  viewBox,
  title,
  decorative = false,
  className = "h-full w-full",
  children,
}) {
  return (
    <svg
      viewBox={viewBox}
      className={className}
      role={decorative ? "presentation" : "img"}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : title}
    >
      {children}
    </svg>
  )
}
