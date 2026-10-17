import SvgFrame from "./SvgFrame"

function Apple({ fill }) {
  return (
    <>
      <circle cx="64" cy="74" r="30" fill={fill} />
      <ellipse cx="52" cy="62" rx="10" ry="7" fill="#fff" opacity="0.35" />
      <path d="M64 46c2-12 14-16 18-12" stroke="#2F7653" strokeWidth="4" strokeLinecap="round" fill="none" />
      <ellipse cx="78" cy="42" rx="10" ry="6" fill="#3E9468" transform="rotate(-28 78 42)" />
    </>
  )
}

function Ball({ fill }) {
  return (
    <>
      <circle cx="64" cy="68" r="32" fill={fill} />
      <path d="M36 56c18 8 38 8 56 0" stroke="#fff" strokeWidth="4" fill="none" />
      <circle cx="50" cy="54" r="6" fill="#fff" opacity="0.7" />
    </>
  )
}

function Star({ fill }) {
  return <path d="M64 22l10 24 26 2-20 16 6 26-22-14-22 14 6-26-20-16 26-2z" fill={fill} />
}

function Leaf({ fill }) {
  return (
    <>
      <path d="M64 108c0-28 8-48 36-68-28 4-52 22-60 52 10 6 16 12 24 16z" fill={fill} />
      <path d="M40 84c14-6 28-20 36-34" stroke="#FFF9EF" strokeWidth="3" fill="none" strokeLinecap="round" />
    </>
  )
}

function Orange({ fill }) {
  return (
    <>
      <circle cx="64" cy="72" r="30" fill={fill} />
      <ellipse cx="52" cy="60" rx="10" ry="7" fill="#fff" opacity="0.35" />
      <path d="M64 42c6 6 8 10 6 16" stroke="#2F7653" strokeWidth="4" strokeLinecap="round" fill="none" />
    </>
  )
}

function Grape({ fill }) {
  return (
    <>
      <circle cx="52" cy="58" r="14" fill={fill} />
      <circle cx="76" cy="58" r="14" fill={fill} />
      <circle cx="64" cy="76" r="14" fill={fill} />
      <circle cx="50" cy="90" r="13" fill={fill} />
      <circle cx="74" cy="90" r="13" fill={fill} />
      <path d="M64 40c2-10 12-14 16-10" stroke="#2F7653" strokeWidth="4" strokeLinecap="round" fill="none" />
    </>
  )
}

const kinds = { apple: Apple, ball: Ball, star: Star, leaf: Leaf, orange: Orange, grape: Grape }

export default function ColorObject({ kind = "apple", fill = "#E25B4A", title, decorative = false, className }) {
  const Shape = kinds[kind] ?? Apple
  return (
    <SvgFrame viewBox="0 0 128 128" title={title} decorative={decorative} className={className}>
      <ellipse cx="64" cy="116" rx="28" ry="6" fill="#244A3A" opacity="0.08" />
      <Shape fill={fill} />
    </SvgFrame>
  )
}
