import { useId } from "react"
import SvgFrame from "./SvgFrame"

function usePaint(prefix) {
  const id = useId().replace(/:/g, "")
  return (name) => `${prefix}-${name}-${id}`
}

function Eyes({ left, right, y, r = 6.2 }) {
  return (
    <>
      <circle cx={left} cy={y} r={r} fill="#244A3A" />
      <circle cx={right} cy={y} r={r} fill="#244A3A" />
      <circle cx={left + 2} cy={y - 2.1} r={r * 0.34} fill="#fff" />
      <circle cx={right + 2} cy={y - 2.1} r={r * 0.34} fill="#fff" />
    </>
  )
}

function Ground({ cx, cy = 0, rx = 80 }) {
  return <ellipse cx={cx} cy={cy} rx={rx} ry="9" fill="#244A3A" opacity="0.1" />
}

export function Elephant({ title, decorative = false, className }) {
  const p = usePaint("el")
  return (
    <SvgFrame viewBox="0 0 320 260" title={title} decorative={decorative} className={className}>
      <defs>
        <radialGradient id={p("body")} cx="38%" cy="32%" r="72%">
          <stop offset="0%" stopColor="#E7F7FB" />
          <stop offset="42%" stopColor="#8ECBDA" />
          <stop offset="100%" stopColor="#5C98AB" />
        </radialGradient>
        <radialGradient id={p("belly")} cx="50%" cy="35%" r="75%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#C5E8F1" />
        </radialGradient>
        <radialGradient id={p("ear")} cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#FFE4EC" />
          <stop offset="100%" stopColor="#E7A3B6" />
        </radialGradient>
      </defs>
      <Ground cx="168" cy="246" rx="100" />
      <ellipse cx="228" cy="96" rx="34" ry="46" fill="#6AA8BA" />
      <ellipse cx="228" cy="100" rx="20" ry="28" fill={`url(#${p("ear")})`} />
      <ellipse cx="178" cy="156" rx="102" ry="66" fill={`url(#${p("body")})`} />
      <ellipse cx="170" cy="172" rx="64" ry="40" fill={`url(#${p("belly")})`} />
      <ellipse cx="188" cy="128" rx="28" ry="14" fill="#fff" opacity="0.35" />
      <rect x="112" y="186" width="28" height="50" rx="14" fill="#7EB6C8" />
      <rect x="148" y="194" width="28" height="44" rx="14" fill="#96D0DE" />
      <rect x="196" y="188" width="30" height="50" rx="15" fill="#7EB6C8" />
      <rect x="230" y="180" width="30" height="56" rx="15" fill="#6AA8BA" />
      <circle cx="126" cy="112" r="58" fill={`url(#${p("body")})`} />
      <ellipse cx="84" cy="104" rx="42" ry="54" fill="#7EBFCF" />
      <ellipse cx="82" cy="110" rx="26" ry="36" fill={`url(#${p("ear")})`} />
      <path d="M108 148c-8 28 6 52 36 60" stroke="#7EBFCF" strokeWidth="22" strokeLinecap="round" fill="none" />
      <path d="M140 206c-16 6-28-8-18-22" stroke="#6AA8BA" strokeWidth="14" strokeLinecap="round" fill="none" />
      <path d="M112 156c2 16 12 28 26 34" stroke="#F4FBFD" strokeWidth="6" strokeLinecap="round" fill="none" />
      <ellipse cx="118" cy="86" rx="18" ry="10" fill="#fff" opacity="0.45" />
      <Eyes left={108} right={136} y={108} />
      <path d="M104 132c8 10 24 10 32 0" stroke="#244A3A" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <ellipse cx="148" cy="126" rx="9" ry="5.5" fill="#FF8DA1" opacity="0.7" />
    </SvgFrame>
  )
}

export function Giraffe({ title, decorative = false, className }) {
  const p = usePaint("gi")
  return (
    <SvgFrame viewBox="0 0 220 360" title={title} decorative={decorative} className={className}>
      <defs>
        <radialGradient id={p("hide")} cx="40%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#FFE9A0" />
          <stop offset="55%" stopColor="#FFD45C" />
          <stop offset="100%" stopColor="#E6A83A" />
        </radialGradient>
        <radialGradient id={p("spot")} cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#F0A04A" />
          <stop offset="100%" stopColor="#C46B3A" />
        </radialGradient>
      </defs>
      <Ground cx="112" cy="346" rx="72" />
      <rect x="58" y="268" width="20" height="66" rx="10" fill="#E6B43A" />
      <rect x="86" y="268" width="20" height="66" rx="10" fill="#F0C14B" />
      <rect x="124" y="268" width="20" height="66" rx="10" fill="#E6B43A" />
      <rect x="152" y="268" width="20" height="66" rx="10" fill="#F0C14B" />
      <rect x="56" y="322" width="22" height="14" rx="6" fill="#8B5A2B" />
      <rect x="84" y="322" width="22" height="14" rx="6" fill="#8B5A2B" />
      <rect x="122" y="322" width="22" height="14" rx="6" fill="#8B5A2B" />
      <rect x="150" y="322" width="22" height="14" rx="6" fill="#8B5A2B" />
      <path d="M52 250c-22 12-24 40-8 50" stroke="#E6B43A" strokeWidth="9" strokeLinecap="round" fill="none" />
      <circle cx="42" cy="302" r="8" fill="#8B5A2B" />
      <ellipse cx="114" cy="246" rx="70" ry="46" fill={`url(#${p("hide")})`} />
      <ellipse cx="78" cy="236" rx="12" ry="15" fill={`url(#${p("spot")})`} />
      <ellipse cx="118" cy="258" rx="11" ry="14" fill={`url(#${p("spot")})`} />
      <ellipse cx="154" cy="232" rx="13" ry="16" fill={`url(#${p("spot")})`} />
      <rect x="126" y="92" width="40" height="140" rx="20" fill={`url(#${p("hide")})`} />
      <rect x="118" y="108" width="12" height="112" rx="6" fill="#E0923A" />
      <ellipse cx="142" cy="128" rx="8" ry="11" fill={`url(#${p("spot")})`} />
      <ellipse cx="158" cy="164" rx="8" ry="12" fill={`url(#${p("spot")})`} />
      <ellipse cx="140" cy="198" rx="8" ry="11" fill={`url(#${p("spot")})`} />
      <ellipse cx="168" cy="78" rx="48" ry="36" fill={`url(#${p("hide")})`} />
      <ellipse cx="204" cy="88" rx="22" ry="16" fill="#F6C98A" />
      <ellipse cx="132" cy="70" rx="13" ry="18" fill="#F0B84A" />
      <rect x="150" y="34" width="8" height="26" rx="4" fill="#E0923A" />
      <circle cx="154" cy="30" r="8" fill="#C46B3A" />
      <rect x="176" y="28" width="8" height="28" rx="4" fill="#E0923A" />
      <circle cx="180" cy="24" r="8" fill="#C46B3A" />
      <ellipse cx="176" cy="62" rx="16" ry="8" fill="#fff" opacity="0.4" />
      <ellipse cx="188" cy="86" rx="2.6" ry="3.4" fill="#C46B3A" />
      <Eyes left={174} right={196} y={72} r={6.4} />
      <path d="M186 92c7 7 16 6 20 0" stroke="#244A3A" strokeWidth="3.2" strokeLinecap="round" fill="none" />
      <ellipse cx="208" cy="90" rx="8" ry="4.5" fill="#FF8DA1" opacity="0.65" />
    </SvgFrame>
  )
}

export function Monkey({ title, decorative = false, className }) {
  const p = usePaint("mo")
  return (
    <SvgFrame viewBox="0 0 250 230" title={title} decorative={decorative} className={className}>
      <defs>
        <radialGradient id={p("fur")} cx="40%" cy="32%" r="72%">
          <stop offset="0%" stopColor="#E0A15A" />
          <stop offset="50%" stopColor="#C68642" />
          <stop offset="100%" stopColor="#8C4E22" />
        </radialGradient>
        <radialGradient id={p("face")} cx="45%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#FFF6EA" />
          <stop offset="100%" stopColor="#F0C89A" />
        </radialGradient>
      </defs>
      <Ground cx="128" cy="214" rx="74" />
      <path d="M52 128c-28 14-34 46-8 58 18 8 32-8 26-24" stroke="#A86B32" strokeWidth="13" strokeLinecap="round" fill="none" />
      <ellipse cx="88" cy="176" rx="30" ry="22" fill={`url(#${p("fur")})`} />
      <ellipse cx="168" cy="176" rx="30" ry="22" fill="#B87538" />
      <ellipse cx="76" cy="188" rx="16" ry="11" fill="#F6D7B0" />
      <ellipse cx="180" cy="188" rx="16" ry="11" fill="#F6D7B0" />
      <ellipse cx="128" cy="150" rx="62" ry="50" fill={`url(#${p("fur")})`} />
      <ellipse cx="128" cy="160" rx="36" ry="32" fill={`url(#${p("face")})`} />
      <ellipse cx="70" cy="138" rx="18" ry="28" transform="rotate(16 70 138)" fill={`url(#${p("fur")})`} />
      <ellipse cx="186" cy="136" rx="18" ry="28" transform="rotate(-14 186 136)" fill="#B87538" />
      <circle cx="56" cy="162" r="13" fill={`url(#${p("face")})`} />
      <circle cx="198" cy="154" r="13" fill={`url(#${p("face")})`} />
      <circle cx="78" cy="74" r="22" fill={`url(#${p("fur")})`} />
      <circle cx="78" cy="74" r="12" fill={`url(#${p("face")})`} />
      <circle cx="178" cy="74" r="22" fill={`url(#${p("fur")})`} />
      <circle cx="178" cy="74" r="12" fill={`url(#${p("face")})`} />
      <circle cx="128" cy="82" r="48" fill={`url(#${p("fur")})`} />
      <ellipse cx="128" cy="96" rx="30" ry="26" fill={`url(#${p("face")})`} />
      <ellipse cx="112" cy="70" rx="14" ry="8" fill="#fff" opacity="0.28" />
      <Eyes left={112} right={144} y={78} />
      <ellipse cx="128" cy="96" rx="7" ry="5" fill="#E0B48A" />
      <path d="M112 108c8 12 24 12 32 0" stroke="#244A3A" strokeWidth="3.2" strokeLinecap="round" fill="none" />
      <ellipse cx="108" cy="100" rx="7" ry="4" fill="#FF8DA1" opacity="0.55" />
      <ellipse cx="150" cy="100" rx="7" ry="4" fill="#FF8DA1" opacity="0.55" />
    </SvgFrame>
  )
}

export function Lion({ title, decorative = false, className }) {
  const p = usePaint("li")
  return (
    <SvgFrame viewBox="0 0 240 230" title={title} decorative={decorative} className={className}>
      <defs>
        <radialGradient id={p("mane")} cx="42%" cy="36%" r="68%">
          <stop offset="0%" stopColor="#F2A24A" />
          <stop offset="100%" stopColor="#D06A28" />
        </radialGradient>
        <radialGradient id={p("face")} cx="45%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#FFF6EA" />
          <stop offset="100%" stopColor="#F3C9A2" />
        </radialGradient>
        <radialGradient id={p("body")} cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FFE08A" />
          <stop offset="100%" stopColor="#E7A21A" />
        </radialGradient>
      </defs>
      <Ground cx="120" cy="214" rx="74" />
      <ellipse cx="78" cy="176" rx="26" ry="18" fill={`url(#${p("body")})`} />
      <ellipse cx="162" cy="176" rx="26" ry="18" fill="#D89212" />
      <ellipse cx="120" cy="156" rx="54" ry="44" fill={`url(#${p("body")})`} />
      <ellipse cx="120" cy="168" rx="30" ry="24" fill={`url(#${p("face")})`} />
      <circle cx="74" cy="78" r="22" fill="#F2A24A" />
      <circle cx="166" cy="72" r="24" fill="#E07A3D" />
      <circle cx="108" cy="46" r="20" fill="#F2A24A" />
      <circle cx="148" cy="44" r="18" fill="#E8893A" />
      <circle cx="120" cy="96" r="58" fill={`url(#${p("mane")})`} />
      <circle cx="120" cy="102" r="40" fill={`url(#${p("face")})`} />
      <ellipse cx="108" cy="86" rx="14" ry="8" fill="#fff" opacity="0.35" />
      <Eyes left={106} right={136} y={98} />
      <ellipse cx="120" cy="112" rx="8" ry="6" fill="#E07A3D" />
      <path d="M108 122c7 8 18 8 26 0" stroke="#244A3A" strokeWidth="3" strokeLinecap="round" fill="none" />
      <ellipse cx="96" cy="114" rx="7" ry="4" fill="#FF8DA1" opacity="0.5" />
      <ellipse cx="146" cy="114" rx="7" ry="4" fill="#FF8DA1" opacity="0.5" />
    </SvgFrame>
  )
}

export function Cat({ title, decorative = false, className }) {
  const p = usePaint("ca")
  return (
    <SvgFrame viewBox="0 0 220 210" title={title} decorative={decorative} className={className}>
      <defs>
        <radialGradient id={p("fur")} cx="40%" cy="32%" r="72%">
          <stop offset="0%" stopColor="#FFC48A" />
          <stop offset="100%" stopColor="#E8924A" />
        </radialGradient>
      </defs>
      <Ground cx="112" cy="196" rx="64" />
      <path d="M168 150c24 8 32 28 18 40" stroke="#E8924A" strokeWidth="12" strokeLinecap="round" fill="none" />
      <ellipse cx="112" cy="150" rx="52" ry="42" fill={`url(#${p("fur")})`} />
      <ellipse cx="112" cy="162" rx="28" ry="24" fill="#fff" />
      <ellipse cx="78" cy="172" rx="20" ry="14" fill="#E8924A" />
      <ellipse cx="146" cy="172" rx="20" ry="14" fill="#E8924A" />
      <path d="M78 78l18 28H62z" fill="#F4A261" />
      <path d="M146 78l-18 28h34z" fill="#F4A261" />
      <path d="M84 90l8 12H74z" fill="#F7C5D1" />
      <path d="M140 90l-8 12h18z" fill="#F7C5D1" />
      <circle cx="112" cy="92" r="36" fill={`url(#${p("fur")})`} />
      <ellipse cx="112" cy="104" rx="22" ry="16" fill="#fff" />
      <Eyes left={100} right={124} y={90} r={5.4} />
      <path d="M112 100v8" stroke="#244A3A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M104 112c5 5 11 5 16 0" stroke="#244A3A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M70 104h18M136 104h18" stroke="#244A3A" strokeWidth="2" strokeLinecap="round" />
    </SvgFrame>
  )
}

export function Dog({ title, decorative = false, className }) {
  const p = usePaint("do")
  return (
    <SvgFrame viewBox="0 0 230 210" title={title} decorative={decorative} className={className}>
      <defs>
        <radialGradient id={p("fur")} cx="40%" cy="32%" r="72%">
          <stop offset="0%" stopColor="#FFE08A" />
          <stop offset="100%" stopColor="#E8A317" />
        </radialGradient>
      </defs>
      <Ground cx="116" cy="196" rx="68" />
      <path d="M48 140c-8 28 8 40 20 36" stroke="#C9842A" strokeWidth="12" strokeLinecap="round" fill="none" />
      <ellipse cx="116" cy="150" rx="54" ry="44" fill={`url(#${p("fur")})`} />
      <ellipse cx="116" cy="162" rx="30" ry="24" fill="#F6E2B3" />
      <ellipse cx="80" cy="174" rx="22" ry="16" fill="#D89212" />
      <ellipse cx="154" cy="174" rx="22" ry="16" fill="#D89212" />
      <ellipse cx="70" cy="92" rx="18" ry="28" fill="#C9842A" />
      <ellipse cx="164" cy="92" rx="18" ry="28" fill="#C9842A" />
      <circle cx="116" cy="96" r="40" fill={`url(#${p("fur")})`} />
      <ellipse cx="116" cy="112" rx="24" ry="18" fill="#F6E2B3" />
      <Eyes left={102} right={130} y={92} />
      <ellipse cx="116" cy="108" rx="8" ry="6" fill="#244A3A" />
      <path d="M104 118c6 8 18 8 24 0" stroke="#244A3A" strokeWidth="3" strokeLinecap="round" fill="none" />
      <ellipse cx="126" cy="124" rx="7" ry="5" fill="#FF8DA1" />
    </SvgFrame>
  )
}

export function Cow({ title, decorative = false, className }) {
  const p = usePaint("co")
  return (
    <SvgFrame viewBox="0 0 250 210" title={title} decorative={decorative} className={className}>
      <defs>
        <radialGradient id={p("hide")} cx="40%" cy="35%" r="72%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F3EDE3" />
        </radialGradient>
      </defs>
      <Ground cx="126" cy="196" rx="78" />
      <rect x="70" y="160" width="22" height="32" rx="10" fill="#F7F3EA" />
      <rect x="104" y="164" width="22" height="30" rx="10" fill="#F7F3EA" />
      <rect x="150" y="162" width="22" height="32" rx="10" fill="#F7F3EA" />
      <rect x="184" y="158" width="22" height="34" rx="10" fill="#F7F3EA" />
      <ellipse cx="130" cy="140" rx="78" ry="48" fill={`url(#${p("hide")})`} />
      <ellipse cx="92" cy="128" rx="16" ry="12" fill="#6B5344" />
      <ellipse cx="150" cy="150" rx="14" ry="11" fill="#6B5344" />
      <ellipse cx="168" cy="122" rx="12" ry="10" fill="#6B5344" />
      <circle cx="176" cy="92" r="36" fill={`url(#${p("hide")})`} />
      <ellipse cx="150" cy="78" rx="10" ry="14" fill="#F7C5D1" />
      <ellipse cx="198" cy="74" rx="10" ry="14" fill="#F7C5D1" />
      <path d="M146 70c-6-14 2-22 8-18M206 66c6-14-2-22-8-18" stroke="#6B5344" strokeWidth="4" strokeLinecap="round" fill="none" />
      <ellipse cx="196" cy="104" rx="16" ry="12" fill="#F4A6B5" />
      <circle cx="190" cy="104" r="2" fill="#244A3A" />
      <circle cx="202" cy="104" r="2" fill="#244A3A" />
      <circle cx="168" cy="90" r="5.5" fill="#244A3A" />
      <circle cx="170" cy="88" r="1.8" fill="#fff" />
      <path d="M160 112c6 6 14 6 20 1" stroke="#244A3A" strokeWidth="3" strokeLinecap="round" fill="none" />
    </SvgFrame>
  )
}

export function Duck({ title, decorative = false, className }) {
  const p = usePaint("du")
  return (
    <SvgFrame viewBox="0 0 220 190" title={title} decorative={decorative} className={className}>
      <defs>
        <radialGradient id={p("body")} cx="40%" cy="32%" r="70%">
          <stop offset="0%" stopColor="#FFF3C4" />
          <stop offset="100%" stopColor="#F0C14B" />
        </radialGradient>
      </defs>
      <Ground cx="108" cy="176" rx="70" />
      <ellipse cx="108" cy="168" rx="54" ry="10" fill="#83D4EF" opacity="0.85" />
      <ellipse cx="112" cy="124" rx="58" ry="40" fill={`url(#${p("body")})`} />
      <ellipse cx="150" cy="112" rx="22" ry="16" fill="#F0C14B" />
      <circle cx="150" cy="84" r="28" fill={`url(#${p("body")})`} />
      <ellipse cx="176" cy="92" rx="18" ry="10" fill="#F08A24" />
      <path d="M168 96c10 8 22 6 26-2" fill="#E07A3D" />
      <circle cx="156" cy="78" r="5.5" fill="#244A3A" />
      <circle cx="158" cy="76" r="1.8" fill="#fff" />
      <path d="M78 156c6 10 16 8 18-2M124 160c6 10 16 8 18-2" stroke="#E07A3D" strokeWidth="4" strokeLinecap="round" fill="none" />
    </SvgFrame>
  )
}

export function Bird({ title, decorative = false, className }) {
  const p = usePaint("bi")
  return (
    <SvgFrame viewBox="0 0 120 100" title={title} decorative={decorative} className={className}>
      <defs>
        <radialGradient id={p("body")} cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#FFC3D0" />
          <stop offset="100%" stopColor="#F27890" />
        </radialGradient>
      </defs>
      <ellipse cx="58" cy="62" rx="28" ry="20" fill={`url(#${p("body")})`} />
      <circle cx="82" cy="46" r="16" fill={`url(#${p("body")})`} />
      <path d="M96 48c10 2 14 8 10 12-8-2-12-6-10-12z" fill="#F08A24" />
      <circle cx="86" cy="42" r="3.2" fill="#244A3A" />
      <circle cx="87.2" cy="41" r="1.1" fill="#fff" />
      <path d="M40 58c-16-10-22-2-16 8 8 2 14-2 16-8z" fill="#F7B3C0" />
      <path d="M46 78c4 8 12 8 14 0" stroke="#E07A3D" strokeWidth="3" strokeLinecap="round" fill="none" />
    </SvgFrame>
  )
}

const characterMap = {
  elephant: Elephant,
  giraffe: Giraffe,
  monkey: Monkey,
  lion: Lion,
  cat: Cat,
  dog: Dog,
  cow: Cow,
  duck: Duck,
  bird: Bird,
}

export function AnimalArt({ id, title, decorative = false, className }) {
  const Component = characterMap[id] ?? Elephant
  return <Component title={title} decorative={decorative} className={className} />
}
