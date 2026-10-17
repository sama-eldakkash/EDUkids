import { Bird, Cat, Dog, Duck, Elephant, Giraffe, Lion, Monkey } from "./Characters"
import SvgFrame from "./SvgFrame"

function Ground() {
  return <ellipse cx="64" cy="116" rx="28" ry="6" fill="#244A3A" opacity="0.08" />
}

function Apple(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <Ground />
      <circle cx="64" cy="72" r="30" fill="#E25B4A" />
      <ellipse cx="52" cy="60" rx="12" ry="8" fill="#F28B7A" opacity="0.8" />
      <path d="M64 44c2-12 14-16 18-12" stroke="#2F7653" strokeWidth="4" strokeLinecap="round" fill="none" />
      <ellipse cx="78" cy="40" rx="10" ry="6" fill="#3E9468" transform="rotate(-28 78 40)" />
    </SvgFrame>
  )
}

function Ball(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <Ground />
      <circle cx="64" cy="68" r="32" fill="#FF8DA1" />
      <path d="M36 56c18 8 38 8 56 0" stroke="#fff" strokeWidth="4" fill="none" />
      <path d="M48 40c6 20 6 36 0 52" stroke="#fff" strokeWidth="4" fill="none" />
      <circle cx="50" cy="54" r="6" fill="#fff" opacity="0.75" />
    </SvgFrame>
  )
}

function Fish(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <Ground />
      <path d="M28 68c16-8 28-4 36 8-12 4-24 2-36-8z" fill="#5EBFDA" />
      <ellipse cx="70" cy="70" rx="28" ry="18" fill="#83D4EF" />
      <circle cx="82" cy="66" r="4" fill="#244A3A" />
      <circle cx="83.4" cy="64.8" r="1.4" fill="#fff" />
      <path d="M58 70c6 4 10 4 14 0" stroke="#244A3A" strokeWidth="2" fill="none" strokeLinecap="round" />
    </SvgFrame>
  )
}

function Hat(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <Ground />
      <ellipse cx="64" cy="92" rx="40" ry="10" fill="#8B5A2B" />
      <path d="M40 78c4-28 14-40 24-40s20 12 24 40z" fill="#FFD45C" />
      <rect x="36" y="74" width="56" height="12" rx="6" fill="#2F7653" />
    </SvgFrame>
  )
}

function IceCream(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <Ground />
      <path d="M50 78l14 32 14-32z" fill="#E7B56A" />
      <path d="M54 78h20l-10 18z" fill="#F3D19A" />
      <circle cx="64" cy="70" r="18" fill="#FF8DA1" />
      <circle cx="64" cy="52" r="16" fill="#fff" />
      <circle cx="52" cy="46" r="4" fill="#FFD45C" />
    </SvgFrame>
  )
}

function Juice(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <Ground />
      <path d="M46 48h36l-4 52a8 8 0 0 1-8 6H58a8 8 0 0 1-8-6z" fill="#B8E7F6" />
      <path d="M48 64h32l-3 32a6 6 0 0 1-6 5H57a6 6 0 0 1-6-5z" fill="#F08A24" />
      <rect x="44" y="42" width="40" height="8" rx="3" fill="#83D4EF" />
      <path d="M78 36c8-10 18-8 18 2" stroke="#FF8DA1" strokeWidth="4" fill="none" strokeLinecap="round" />
    </SvgFrame>
  )
}

function Kite(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <path d="M64 24l28 36-28 36L36 60z" fill="#FF8DA1" />
      <path d="M64 24v72M36 60h56" stroke="#fff" strokeWidth="3" />
      <path d="M64 96c8 8 6 16 0 22" stroke="#83D4EF" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="64" cy="60" r="5" fill="#FFD45C" />
    </SvgFrame>
  )
}

function Nest(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <Ground />
      <ellipse cx="64" cy="84" rx="36" ry="18" fill="#C4893E" />
      <ellipse cx="64" cy="78" rx="26" ry="12" fill="#F6D7A2" />
      <circle cx="54" cy="76" r="7" fill="#83D4EF" />
      <circle cx="70" cy="74" r="7" fill="#B8DCC0" />
      <circle cx="62" cy="84" r="6" fill="#FFD45C" />
    </SvgFrame>
  )
}

function Orange(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <Ground />
      <circle cx="64" cy="74" r="30" fill="#F08A24" />
      <ellipse cx="54" cy="64" rx="10" ry="7" fill="#FFB15A" opacity="0.8" />
      <ellipse cx="74" cy="42" rx="10" ry="6" fill="#3E9468" transform="rotate(20 74 42)" />
    </SvgFrame>
  )
}

function Pig(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <Ground />
      <ellipse cx="64" cy="78" rx="34" ry="26" fill="#F7B7C4" />
      <ellipse cx="34" cy="70" rx="10" ry="12" fill="#F7B7C4" />
      <ellipse cx="94" cy="70" rx="10" ry="12" fill="#F7B7C4" />
      <ellipse cx="64" cy="82" rx="14" ry="10" fill="#F48AA0" />
      <circle cx="58" cy="82" r="2" fill="#244A3A" />
      <circle cx="70" cy="82" r="2" fill="#244A3A" />
      <circle cx="52" cy="70" r="4" fill="#244A3A" />
      <circle cx="76" cy="70" r="4" fill="#244A3A" />
      <circle cx="53.5" cy="68.8" r="1.3" fill="#fff" />
      <circle cx="77.5" cy="68.8" r="1.3" fill="#fff" />
    </SvgFrame>
  )
}

function Queen(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <Ground />
      <circle cx="64" cy="78" r="26" fill="#F6D7B0" />
      <path d="M34 58l8 16 10-12 12 16 12-16 10 12 8-16v22H34z" fill="#FFD45C" />
      <circle cx="42" cy="56" r="4" fill="#FF8DA1" />
      <circle cx="64" cy="46" r="4" fill="#83D4EF" />
      <circle cx="86" cy="56" r="4" fill="#FF8DA1" />
      <circle cx="54" cy="76" r="4" fill="#244A3A" />
      <circle cx="74" cy="76" r="4" fill="#244A3A" />
      <path d="M56 88c5 5 11 5 16 0" stroke="#244A3A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </SvgFrame>
  )
}

function Rabbit(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <Ground />
      <ellipse cx="48" cy="46" rx="8" ry="22" fill="#F4E4D4" />
      <ellipse cx="80" cy="46" rx="8" ry="22" fill="#F4E4D4" />
      <ellipse cx="48" cy="48" rx="4" ry="14" fill="#F7C5D1" />
      <ellipse cx="80" cy="48" rx="4" ry="14" fill="#F7C5D1" />
      <circle cx="64" cy="78" r="26" fill="#F7F1E8" />
      <circle cx="54" cy="74" r="4" fill="#244A3A" />
      <circle cx="74" cy="74" r="4" fill="#244A3A" />
      <ellipse cx="64" cy="84" rx="5" ry="3.5" fill="#F4A6B5" />
      <path d="M58 90c4 4 8 4 12 0" stroke="#244A3A" strokeWidth="2" fill="none" strokeLinecap="round" />
    </SvgFrame>
  )
}

function SunFace(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <circle cx="64" cy="66" r="24" fill="#FFD45C" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <rect key={deg} x="60" y="28" width="8" height="14" rx="4" fill="#FFD45C" transform={`rotate(${deg} 64 66)`} />
      ))}
      <circle cx="56" cy="62" r="3" fill="#244A3A" />
      <circle cx="72" cy="62" r="3" fill="#244A3A" />
      <path d="M56 72c5 5 11 5 16 0" stroke="#244A3A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </SvgFrame>
  )
}

function TreeArt(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <Ground />
      <rect x="56" y="78" width="16" height="32" rx="6" fill="#8B5A2B" />
      <circle cx="64" cy="62" r="28" fill="#2F7653" />
      <circle cx="46" cy="72" r="16" fill="#3E9468" />
      <circle cx="54" cy="52" r="8" fill="#D7F0DE" />
    </SvgFrame>
  )
}

function Umbrella(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <path d="M24 70c0-24 18-42 40-42s40 18 40 42z" fill="#FF8DA1" />
      <path d="M24 70c8 0 8-10 16-10s8 10 16 10 8-10 16-10 8 10 16 10 8-10 16-10" stroke="#fff" strokeWidth="3" fill="none" />
      <path d="M64 70v28" stroke="#244A3A" strokeWidth="4" strokeLinecap="round" />
      <path d="M64 98c10 0 12 8 6 10" stroke="#244A3A" strokeWidth="4" fill="none" strokeLinecap="round" />
    </SvgFrame>
  )
}

function Violin(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <Ground />
      <rect x="58" y="28" width="8" height="28" rx="3" fill="#8B5A2B" />
      <ellipse cx="62" cy="70" rx="16" ry="20" fill="#C4893E" />
      <ellipse cx="62" cy="96" rx="18" ry="14" fill="#C4893E" />
      <circle cx="62" cy="78" r="4" fill="#F6D7A2" />
      <path d="M70 36c16-8 22 2 16 10" stroke="#244A3A" strokeWidth="3" fill="none" />
    </SvgFrame>
  )
}

function Whale(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <Ground />
      <path d="M24 78c8-24 28-32 48-24 16 6 28 4 36 12-10 16-28 28-52 26-16-2-26-6-32-14z" fill="#83D4EF" />
      <path d="M78 58c6-16 20-18 24-8-10 2-18 6-24 8z" fill="#5EBFDA" />
      <circle cx="46" cy="74" r="4" fill="#244A3A" />
      <circle cx="47.4" cy="72.8" r="1.3" fill="#fff" />
      <path d="M30 86c6 4 10 2 12-2" stroke="#5EBFDA" strokeWidth="4" fill="none" strokeLinecap="round" />
    </SvgFrame>
  )
}

function Xylophone(props) {
  const bars = ["#FF8DA1", "#FFD45C", "#83D4EF", "#B8DCC0", "#F08A24"]
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <Ground />
      {bars.map((color, index) => (
        <rect key={color} x={28 + index * 4} y={46 + index * 8} width={72 - index * 8} height="10" rx="4" fill={color} />
      ))}
    </SvgFrame>
  )
}

function YoYo(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <path d="M64 20v28" stroke="#244A3A" strokeWidth="3" />
      <circle cx="64" cy="68" r="24" fill="#FF8DA1" />
      <circle cx="64" cy="68" r="14" fill="#FFD45C" />
      <circle cx="64" cy="68" r="5" fill="#fff" />
    </SvgFrame>
  )
}

function Zebra(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <Ground />
      <ellipse cx="70" cy="78" rx="32" ry="20" fill="#fff" />
      <path d="M48 70h10M62 74h12M80 70h12M52 84h14M74 86h12" stroke="#244A3A" strokeWidth="3" strokeLinecap="round" />
      <circle cx="96" cy="62" r="14" fill="#fff" />
      <path d="M90 54c2-10 10-12 12-4" stroke="#244A3A" strokeWidth="3" fill="none" />
      <circle cx="100" cy="60" r="2.4" fill="#244A3A" />
      <rect x="52" y="92" width="6" height="16" rx="3" fill="#244A3A" />
      <rect x="70" y="94" width="6" height="14" rx="3" fill="#244A3A" />
      <rect x="86" y="92" width="6" height="16" rx="3" fill="#244A3A" />
    </SvgFrame>
  )
}

function Fox(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <Ground />
      <path d="M34 70l16 18-8-28z" fill="#F08A24" />
      <path d="M94 70l-16 18 8-28z" fill="#F08A24" />
      <circle cx="64" cy="78" r="26" fill="#F08A24" />
      <ellipse cx="64" cy="86" rx="14" ry="12" fill="#fff" />
      <circle cx="54" cy="74" r="4" fill="#244A3A" />
      <circle cx="74" cy="74" r="4" fill="#244A3A" />
      <ellipse cx="64" cy="84" rx="4" ry="3" fill="#244A3A" />
    </SvgFrame>
  )
}

function Camel(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <Ground />
      <rect x="36" y="86" width="8" height="20" rx="4" fill="#E0B06A" />
      <rect x="54" y="88" width="8" height="18" rx="4" fill="#E0B06A" />
      <rect x="78" y="86" width="8" height="20" rx="4" fill="#E0B06A" />
      <rect x="96" y="84" width="8" height="22" rx="4" fill="#E0B06A" />
      <path d="M34 86c8-8 18-28 28-28 8 0 10 10 16 10 10 0 16-16 28-16 6 8 4 20-2 28H34z" fill="#F0C48A" />
      <circle cx="104" cy="62" r="10" fill="#F0C48A" />
      <circle cx="108" cy="60" r="2" fill="#244A3A" />
    </SvgFrame>
  )
}

function Horse(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <Ground />
      <rect x="40" y="88" width="8" height="20" rx="4" fill="#8B5A2B" />
      <rect x="58" y="90" width="8" height="18" rx="4" fill="#8B5A2B" />
      <rect x="78" y="88" width="8" height="20" rx="4" fill="#8B5A2B" />
      <rect x="94" y="86" width="8" height="22" rx="4" fill="#8B5A2B" />
      <ellipse cx="72" cy="78" rx="34" ry="20" fill="#A86B32" />
      <path d="M96 70c8-20 20-18 18 2-8 2-14 0-18-2z" fill="#6B4423" />
      <circle cx="100" cy="62" r="12" fill="#A86B32" />
      <circle cx="104" cy="60" r="2.2" fill="#244A3A" />
      <ellipse cx="112" cy="66" rx="6" ry="4" fill="#F6D7B0" />
    </SvgFrame>
  )
}

function Sheep(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <Ground />
      <rect x="46" y="92" width="8" height="16" rx="4" fill="#F6D7B0" />
      <rect x="74" y="92" width="8" height="16" rx="4" fill="#F6D7B0" />
      <circle cx="48" cy="74" r="14" fill="#fff" />
      <circle cx="66" cy="66" r="16" fill="#fff" />
      <circle cx="84" cy="74" r="14" fill="#fff" />
      <circle cx="64" cy="82" r="16" fill="#fff" />
      <circle cx="92" cy="70" r="10" fill="#F6D7B0" />
      <circle cx="96" cy="68" r="2" fill="#244A3A" />
    </SvgFrame>
  )
}

function Chicken(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <Ground />
      <ellipse cx="64" cy="84" rx="28" ry="20" fill="#F7F1E8" />
      <circle cx="84" cy="64" r="16" fill="#F7F1E8" />
      <path d="M78 48l6 10 8-8 2 8H74z" fill="#E25B4A" />
      <path d="M96 66h12l-6 6z" fill="#F08A24" />
      <circle cx="88" cy="62" r="2.4" fill="#244A3A" />
      <path d="M48 100c4 6 8 4 8-2M70 102c4 6 8 4 8-2" stroke="#F08A24" strokeWidth="3" fill="none" strokeLinecap="round" />
    </SvgFrame>
  )
}

function Corn(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <Ground />
      <path d="M64 36c14 6 24 28 22 52-8 8-16 10-22 10s-14-2-22-10C40 64 50 42 64 36z" fill="#F6C445" />
      <path d="M46 48c-8 10-12 28-8 46 8-8 12-24 8-46z" fill="#3E9468" />
      <path d="M82 48c8 10 12 28 8 46-8-8-12-24-8-46z" fill="#2F7653" />
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2].map((col) => <circle key={`${row}-${col}`} cx={54 + col * 10} cy={58 + row * 10} r="3" fill="#FFE38A" />),
      )}
    </SvgFrame>
  )
}

function Pomegranate(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <Ground />
      <circle cx="64" cy="76" r="28" fill="#C83B55" />
      <path d="M54 50c4-8 16-8 20 0-4 4-16 4-20 0z" fill="#3E9468" />
      <circle cx="54" cy="74" r="3" fill="#F7B7C4" />
      <circle cx="66" cy="80" r="3" fill="#F7B7C4" />
      <circle cx="74" cy="68" r="3" fill="#F7B7C4" />
    </SvgFrame>
  )
}

function Box(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <Ground />
      <path d="M32 58l32-16 32 16-32 14z" fill="#F3D19A" />
      <path d="M32 58v32l32 14V72z" fill="#E0B06A" />
      <path d="M96 58v32L64 104V72z" fill="#C4893E" />
      <path d="M64 42v30" stroke="#FF8DA1" strokeWidth="4" />
    </SvgFrame>
  )
}

function Frog(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <Ground />
      <ellipse cx="64" cy="84" rx="32" ry="20" fill="#3E9468" />
      <circle cx="46" cy="62" r="14" fill="#3E9468" />
      <circle cx="82" cy="62" r="14" fill="#3E9468" />
      <circle cx="46" cy="62" r="6" fill="#fff" />
      <circle cx="82" cy="62" r="6" fill="#fff" />
      <circle cx="46" cy="62" r="3" fill="#244A3A" />
      <circle cx="82" cy="62" r="3" fill="#244A3A" />
      <path d="M56 86c5 5 11 5 16 0" stroke="#244A3A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </SvgFrame>
  )
}

function Plane(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <path d="M18 70l78-24 14 8-70 28z" fill="#83D4EF" />
      <path d="M46 68l-8 22 16-8z" fill="#2F7653" />
      <path d="M78 52l18 20-16 2z" fill="#FFD45C" />
      <circle cx="96" cy="52" r="4" fill="#fff" />
    </SvgFrame>
  )
}

function Envelope(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <Ground />
      <rect x="28" y="48" width="72" height="48" rx="8" fill="#FFF9EF" stroke="#E0B06A" strokeWidth="3" />
      <path d="M30 52l34 24 34-24" stroke="#FF8DA1" strokeWidth="3" fill="none" />
    </SvgFrame>
  )
}

function CloudArt(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <ellipse cx="48" cy="74" rx="22" ry="16" fill="#fff" />
      <ellipse cx="72" cy="66" rx="24" ry="20" fill="#fff" />
      <ellipse cx="92" cy="76" rx="16" ry="12" fill="#fff" />
      <circle cx="66" cy="70" r="2.4" fill="#83D4EF" />
      <circle cx="78" cy="74" r="2.4" fill="#83D4EF" />
      <path d="M64 82c4 4 10 4 14 0" stroke="#83D4EF" strokeWidth="2" fill="none" strokeLinecap="round" />
    </SvgFrame>
  )
}

function Butterfly(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <ellipse cx="46" cy="58" rx="20" ry="16" fill="#FF8DA1" />
      <ellipse cx="82" cy="58" rx="20" ry="16" fill="#FF8DA1" />
      <ellipse cx="44" cy="82" rx="16" ry="14" fill="#FFD45C" />
      <ellipse cx="84" cy="82" rx="16" ry="14" fill="#FFD45C" />
      <rect x="60" y="48" width="8" height="40" rx="4" fill="#244A3A" />
      <path d="M62 50c-8-12-4-16 0-8M66 50c8-12 4-16 0-8" stroke="#244A3A" strokeWidth="2" fill="none" />
    </SvgFrame>
  )
}

function Moon(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <path d="M78 28a36 36 0 1 0 18 64 30 30 0 1 1-18-64z" fill="#FFD45C" />
      <circle cx="40" cy="40" r="3" fill="#FFD45C" />
      <circle cx="32" cy="70" r="2" fill="#FFD45C" />
    </SvgFrame>
  )
}

function Book(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <Ground />
      <path d="M30 42h32c4 8 4 36 0 48H30z" fill="#2F7653" />
      <path d="M98 42H66c-4 8-4 36 0 48h32z" fill="#3E9468" />
      <path d="M62 46v44" stroke="#F6D7A2" strokeWidth="3" />
    </SvgFrame>
  )
}

function Lemon(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <Ground />
      <ellipse cx="64" cy="74" rx="30" ry="24" fill="#FFE14A" transform="rotate(-18 64 74)" />
      <ellipse cx="78" cy="48" rx="8" ry="5" fill="#3E9468" />
    </SvgFrame>
  )
}

function Banana(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <path d="M40 40c28-8 52 8 58 36-20 4-36 2-48-8 6 16 8 28 2 40-16-6-28-28-12-68z" fill="#FFD45C" />
      <path d="M46 46c16-4 32 4 40 22" stroke="#F0C14B" strokeWidth="4" fill="none" />
    </SvgFrame>
  )
}

function StarArt(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <path d="M64 24l10 24 26 2-20 16 6 26-22-14-22 14 6-26-20-16 26-2z" fill="#FFD45C" />
    </SvgFrame>
  )
}

function FlowerArt(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <path d="M64 70v36" stroke="#3E9468" strokeWidth="4" strokeLinecap="round" />
      <circle cx="64" cy="46" r="12" fill="#FF8DA1" />
      <circle cx="46" cy="60" r="12" fill="#FF8DA1" />
      <circle cx="82" cy="60" r="12" fill="#FF8DA1" />
      <circle cx="64" cy="74" r="12" fill="#FF8DA1" />
      <circle cx="64" cy="60" r="9" fill="#FFD45C" />
    </SvgFrame>
  )
}

function Gift(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <Ground />
      <rect x="36" y="58" width="56" height="42" rx="6" fill="#FF8DA1" />
      <rect x="58" y="58" width="12" height="42" fill="#FFD45C" />
      <rect x="36" y="70" width="56" height="10" fill="#FFD45C" />
      <path d="M64 58c-8-14-22-12-18-2 6 2 12 2 18 2z" fill="#F7B7C4" />
      <path d="M64 58c8-14 22-12 18-2-6 2-12 2-18 2z" fill="#F7B7C4" />
    </SvgFrame>
  )
}

function Hand(props) {
  return (
    <SvgFrame viewBox="0 0 128 128" {...props}>
      <Ground />
      <rect x="48" y="70" width="32" height="28" rx="12" fill="#F6D7B0" />
      <rect x="44" y="40" width="10" height="40" rx="5" fill="#F6D7B0" />
      <rect x="56" y="32" width="10" height="46" rx="5" fill="#F6D7B0" />
      <rect x="68" y="38" width="10" height="40" rx="5" fill="#F6D7B0" />
      <rect x="78" y="50" width="10" height="28" rx="5" fill="#F6D7B0" />
    </SvgFrame>
  )
}

const catalog = {
  apple: Apple,
  ball: Ball,
  fish: Fish,
  hat: Hat,
  icecream: IceCream,
  juice: Juice,
  kite: Kite,
  nest: Nest,
  orange: Orange,
  pig: Pig,
  queen: Queen,
  rabbit: Rabbit,
  sun: SunFace,
  tree: TreeArt,
  umbrella: Umbrella,
  violin: Violin,
  whale: Whale,
  xylophone: Xylophone,
  yoyo: YoYo,
  zebra: Zebra,
  fox: Fox,
  camel: Camel,
  horse: Horse,
  sheep: Sheep,
  chicken: Chicken,
  corn: Corn,
  pomegranate: Pomegranate,
  box: Box,
  frog: Frog,
  plane: Plane,
  envelope: Envelope,
  bird: Bird,
  cloud: CloudArt,
  butterfly: Butterfly,
  moon: Moon,
  book: Book,
  lemon: Lemon,
  banana: Banana,
  star: StarArt,
  flower: FlowerArt,
  gift: Gift,
  hand: Hand,
  cat: Cat,
  dog: Dog,
  elephant: Elephant,
  giraffe: Giraffe,
  lion: Lion,
  monkey: Monkey,
  duck: Duck,
}

export function ObjectArt({ name, title, decorative = false, className }) {
  const Component = catalog[name] ?? StarArt
  return <Component title={title} decorative={decorative} className={className} />
}
