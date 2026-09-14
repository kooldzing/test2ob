var Ce = 'mainnet-beta',
  O = 'https://oqgrxtobtscsnkvwdzlx.supabase.co/functions/v1/payment-api',
  Be = {
    devnet: ['https://api.devnet.solana.com'],
    testnet: ['https://api.testnet.solana.com'],
    'mainnet-beta': [
      'https://solana-rpc.publicnode.com',
      'https://public.rpc.solanavibestation.com',
    ],
  },
  Pe = Be[Ce],
  rt = Pe[0]
var Ne = {
  '/': '/',
  '/create-token': '/create-token',
  '/liquidity': '/liquidity',
}
function Oe() {
  let e = location.pathname
    .replace(/\/index\.html$/, '/')
    .replace(/\.html$/, '')
  return Ne[e] || (e === '' ? '/' : 'other')
}

function L(e = 'view') {
  try {
    let t = JSON.stringify({
        path: Oe(),
        event: e,
        ref: document.referrer ? new URL(document.referrer).host : '',
      }),
      n = `${O}/hit`

    fetch(n, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: t,
      keepalive: true,
    }).catch(() => {})
  } catch {}
}

document.visibilityState === 'hidden'
  ? document.addEventListener('visibilitychange', function e() {
      document.visibilityState !== 'hidden' &&
        (document.removeEventListener('visibilitychange', e), L())
    })
  : L()
var d = document.createElement('div')
d.className = 'scrollbar'
var s = document.createElement('div')
s.className = 'scrollbar-thumb'
d.appendChild(s)
document.body.appendChild(d)
var xe = 44,
  H,
  U = false
function te() {
  let e = document.documentElement,
    t = e.clientHeight,
    n = Math.max(e.scrollHeight, document.body.scrollHeight),
    o = n - t,
    a = Math.max(xe, Math.round((t / n) * t))
  return {
    view: t,
    total: n,
    scrollable: o,
    height: a,
    travel: t - a,
  }
}
function x() {
  let { scrollable: e, height: t, travel: n } = te()
  if (e <= 1) {
    d.classList.remove('on', 'show')
    return
  }
  d.classList.add('on')
  let o = (window.scrollY / e) * n
  s.style.height = `${t}px`
  s.style.transform = `translateY(${Math.max(0, Math.min(n, o))}px)`
}
function _() {
  x()
  d.classList.contains('on') &&
    (d.classList.add('show'),
    clearTimeout(H),
    !U && (H = setTimeout(() => d.classList.remove('show'), 900)))
}
window.addEventListener('scroll', _, { passive: true })
window.addEventListener('resize', _)
window.ResizeObserver && new ResizeObserver(x).observe(document.body)
s.addEventListener('pointerdown', (e) => {
  e.preventDefault()
  let { scrollable: t, travel: n } = te()
  if (t <= 1 || n <= 0) {
    return
  }
  let o = e.clientY,
    a = window.scrollY
  U = true
  clearTimeout(H)
  d.classList.add('show', 'dragging')
  s.setPointerCapture(e.pointerId)
  let r = (g) => {
      let p = ((g.clientY - o) / n) * t
      window.scrollTo({
        top: a + p,
        behavior: 'instant',
      })
    },
    i = () => {
      U = false
      d.classList.remove('dragging')
      s.releasePointerCapture?.(e.pointerId)
      s.removeEventListener('pointermove', r)
      s.removeEventListener('pointerup', i)
      s.removeEventListener('pointercancel', i)
      _()
    }
  s.addEventListener('pointermove', r)
  s.addEventListener('pointerup', i)
  s.addEventListener('pointercancel', i)
})
x()
window.addEventListener('load', x)
var A = document.getElementById('toast'),
  ne
function l(e) {
  A &&
    ((A.textContent = e),
    A.classList.add('show'),
    clearTimeout(ne),
    (ne = setTimeout(() => A.classList.remove('show'), 3600)))
}
async function ae(e) {
  try {
    return await navigator.clipboard.writeText(e), true
  } catch {
    return false
  }
}
var oe = document.querySelector('.site-header')
if (oe) {
  let e = () => oe.classList.toggle('scrolled', window.scrollY > 10)
  window.addEventListener('scroll', e, { passive: true })
  e()
}
var R = class extends Error {}
async function ie(e, t) {
  let n
  try {
    n = await fetch(`${O}${e}`, {
      credentials: 'same-origin',
      cache: 'no-store',
      ...t,
    })
  } catch {
    throw new R('Could not reach the pricing service.')
  }
  let o = null
  try {
    o = await n.json()
  } catch {
    o = null
  }
  if (!n.ok) {
    throw new R(o?.error || `The pricing service returned ${n.status}.`)
  }
  return o
}
function re() {
  return ie('/pricing')
}
function se({ liquidity: e, marketMakerVolume: t }) {
  return ie('/quote', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      liquidity: e,
      marketMakerVolume: t,
    }),
  })
}
function le(e) {
  if (!Number.isFinite(e)) {
    return '-'
  }
  let t = (n) => String(Number(n.toFixed(2)))
  for (let [n, o] of [
    [1000000000000000, 'Q'],
    [1000000000000, 'T'],
    [1000000000, 'B'],
    [1000000, 'M'],
    [1000, 'K'],
  ])
    if (Math.abs(e) >= n) {
      return t(e / n) + o
    }
  return t(e)
}
var W = [
  {
    name: 'CyberLeek',
    symbol: 'CYBERLEEK',
    description: 'A leek in a neon exosuit. Vegetable, weaponised.',
    logo: 'img/tokens/cyberleek.png',
  },
  {
    name: 'Clug',
    symbol: 'CLUG',
    description: 'Solid gold and completely blank behind the eyes.',
    logo: 'img/tokens/clug.png',
  },
  {
    name: 'Cash Cat',
    symbol: 'CASHCAT',
    description:
      'Robinhood was originally called Cash Cat. This is the memecoin honouring the original name.',
    logo: 'img/tokens/cashcat.png',
  },
  {
    name: '老吴',
    symbol: '老吴',
    description: 'A lobster. It only grows by shedding the shell it outgrew.',
    logo: 'img/tokens/laowu.png',
  },
  {
    name: 'MOON COW',
    symbol: 'MOONCOW',
    description:
      'Charging to the moon. Pure meme power, cosmic vibes, unstoppable community energy.',
    logo: 'img/tokens/mooncow.png',
  },
  {
    name: 'WIKI CAT',
    symbol: 'WKC',
    description: 'The cat that edits the encyclopedia entry about itself.',
    logo: 'img/tokens/wkc.png',
  },
  {
    name: 'Unisoccs',
    symbol: 'SOCCS',
    description: 'Pixel legs, pixel socks, one questionable haircut.',
    logo: 'img/tokens/soccs.png',
  },
  {
    name: 'The Toad Pepe',
    symbol: 'TOAD',
    description:
      'Fourteen tapes on Canal 88, and a toad who was on air seventeen years before the internet frog.',
    logo: 'img/tokens/toad.png',
  },
  {
    name: 'CATURN',
    symbol: 'CATURN',
    description: 'Half cat, half ringed planet. Astronomers are furious.',
    logo: 'img/tokens/caturn.png',
  },
  {
    name: 'StonkBroker',
    symbol: 'STONKBROKER',
    description: 'The briefcase is empty. The confidence is not.',
    logo: 'img/tokens/stonkbroker.png',
  },
  {
    name: 'Dogezilla',
    symbol: 'DOGEZILL',
    description:
      'The Shiba kaiju meme coin. Green fire, broken towers, diamond paws.',
    logo: 'img/tokens/dogezill.png',
  },
  {
    name: 'Jimothy The Raccoon',
    symbol: 'Jimothy',
    description: 'Photographed once, badly, and never seen again.',
    logo: 'img/tokens/jimothy.png',
  },
  {
    name: 'Thinking Cat',
    symbol: 'HMM',
    description: 'A meme coin for overthinkers.',
    logo: 'img/tokens/hmm.png',
  },
  {
    name: 'TENDIES',
    symbol: 'TENDIES',
    description: 'Golden, breaded, and the only asset that has ever mattered.',
    logo: 'img/tokens/tendies.png',
  },
  {
    name: 'frong',
    symbol: 'FRONG',
    description: 'Two frogs on a trail camera at 3am. Nobody knows why.',
    logo: 'img/tokens/frong.png',
  },
  {
    name: 'Lenny',
    symbol: 'Lenny',
    description: 'The face that has been looking at you since 2012.',
    logo: 'img/tokens/lenny.png',
  },
  {
    name: 'ちいかわ',
    symbol: 'Chiikawa',
    description: 'Something small and cute.',
    logo: 'img/tokens/chiikawa.png',
  },
  {
    name: 'STACKERS',
    symbol: 'STACK',
    description:
      'Three thousand stackers. Burn to activate, pick a stock, and the art fills up every hour.',
    logo: 'img/tokens/stack.png',
  },
  {
    name: 'WENFROG',
    symbol: 'WENFROG',
    description: 'One frog, one question, one very online community.',
    logo: 'img/tokens/wenfrog.png',
  },
  {
    name: 'Milady',
    symbol: 'MILADY',
    description: 'Not luck. Discipline.',
    logo: 'img/tokens/milady.png',
  },
  {
    name: 'TOES',
    symbol: 'TOESCOIN',
    description:
      'The most prestigious feet on Solana. Polished. Pedicured. Permanently bullish.',
    logo: 'img/tokens/toes.png',
  },
  {
    name: 'drooling cat',
    symbol: 'drooling',
    description: 'The cat is drooling. Nobody is going to stop it.',
    logo: 'img/tokens/drooling.png',
  },
  {
    name: 'Wojak',
    symbol: 'WOJAK',
    description:
      'Just a wojak, staring back at the market, feeling everything and doing nothing about it.',
    logo: 'img/tokens/wojak.png',
  },
  {
    name: 'honse',
    symbol: 'honse',
    description:
      'A horse in board shorts, an endless neon corridor, and a gallery of questionable decisions.',
    logo: 'img/tokens/honse.png',
  },
  {
    name: 'vibe shift',
    symbol: 'vibes',
    description: 'The vibe has shifted. No announcement was made.',
    logo: 'img/tokens/vibeshift.png',
  },
  {
    name: 'Burnie Senders',
    symbol: 'BURNIE',
    description:
      'The soviet sleeper agent toly warned you about. The plan is perfect.',
    logo: 'img/tokens/burnie.png',
  },
  {
    name: 'FARTBOY',
    symbol: 'FARTBOY',
    description: 'He fires once. The chart is downwind.',
    logo: 'img/tokens/fartboy.png',
  },
  {
    name: 'Chudjak',
    symbol: 'Chud',
    description: 'The Last Chudjak on Solana. He never left. He never sold.',
    logo: 'img/tokens/chudjak.png',
  },
  {
    name: 'unc',
    symbol: 'unc',
    description:
      'Unc is not keeping up with the timeline and does not intend to.',
    logo: 'img/tokens/unc.png',
  },
  {
    name: 'FWOG',
    symbol: 'FWOG',
    description: 'It is a fwog. Correcting the spelling is a you problem.',
    logo: 'img/tokens/fwog.png',
  },
  {
    name: 'PONKE',
    symbol: 'PONKE',
    description: 'The degen monkey in all of us.',
    logo: 'img/tokens/ponke.png',
  },
  {
    name: 'Rage Guy',
    symbol: 'RAGEGUY',
    description:
      'The original Rage Guy meme, the iconic FFFFUUUU rage face, reborn on Solana.',
    logo: 'img/tokens/rageguy.png',
  },
  {
    name: 'SIGMA',
    symbol: 'SIGMA',
    description:
      'A community-driven memecoin that empowers you to take control.',
    logo: 'img/tokens/sigma.png',
  },
  {
    name: '牛来',
    symbol: '牛来',
    description: 'The bull arrives. An entire market thesis in two characters.',
    logo: 'img/tokens/niulai.png',
  },
  {
    name: '哈基米',
    symbol: '哈基米',
    description:
      'Hundreds of billions of views, millions of participants. The ultimate internet culture.',
    logo: 'img/tokens/hajimi.png',
  },
]
var ce = {
    ring(e, t) {
      e.lineWidth = t * 0.085
      for (let n of [0.3, 0.185])
        e.beginPath(), e.arc(0, 0, t * n, 0, Math.PI * 2), e.stroke()
    },
    bolt(e, t) {
      e.beginPath()
      e.moveTo(t * 0.1, -t * 0.34)
      e.lineTo(-t * 0.2, t * 0.05)
      e.lineTo(t * 0, t * 0.05)
      e.lineTo(-t * 0.08, t * 0.34)
      e.lineTo(t * 0.22, -t * 0.06)
      e.lineTo(t * 0.02, -t * 0.06)
      e.closePath()
      e.fill()
    },
    crescent(e, t) {
      e.beginPath()
      e.arc(0, 0, t * 0.32, 0, Math.PI * 2)
      e.arc(t * 0.16, -t * 0.1, t * 0.28, 0, Math.PI * 2, true)
      e.fill('evenodd')
    },
    eye(e, t) {
      e.lineWidth = t * 0.075
      e.beginPath()
      e.ellipse(0, 0, t * 0.34, t * 0.21, 0, 0, Math.PI * 2)
      e.stroke()
      e.beginPath()
      e.arc(0, 0, t * 0.1, 0, Math.PI * 2)
      e.fill()
    },
    spark(e, t) {
      e.beginPath()
      for (let n = 0; n < 8; n++) {
        let o = (n / 8) * Math.PI * 2 - Math.PI / 2,
          a = n % 2 ? t * 0.13 : t * 0.35
        e[n ? 'lineTo' : 'moveTo'](Math.cos(o) * a, Math.sin(o) * a)
      }
      e.closePath()
      e.fill()
    },
    wave(e, t) {
      e.lineWidth = t * 0.08
      e.lineCap = 'round'
      for (let n of [-0.15, 0.05, 0.25]) {
        e.beginPath()
        for (let o = 0; o <= 24; o++) {
          let a = -t * 0.34 + (o / 24) * t * 0.68,
            r = t * n + Math.sin((o / 24) * Math.PI * 2) * t * 0.07
          e[o ? 'lineTo' : 'moveTo'](a, r)
        }
        e.stroke()
      }
    },
    paw(e, t) {
      e.beginPath()
      e.ellipse(0, t * 0.12, t * 0.2, t * 0.17, 0, 0, Math.PI * 2)
      e.fill()
      for (let [n, o, a] of [
        [-0.25, -0.13, 0.085],
        [-0.09, -0.24, 0.09],
        [0.09, -0.24, 0.09],
        [0.25, -0.13, 0.085],
      ])
        e.beginPath(), e.arc(t * n, t * o, t * a, 0, Math.PI * 2), e.fill()
    },
    chevron(e, t) {
      e.lineWidth = t * 0.1
      e.lineCap = 'round'
      e.lineJoin = 'round'
      for (let n of [0.12, -0.12])
        e.beginPath(),
          e.moveTo(-t * 0.26, t * (n + 0.13)),
          e.lineTo(0, t * (n - 0.13)),
          e.lineTo(t * 0.26, t * (n + 0.13)),
          e.stroke()
    },
  },
  Y = 'rgba(10, 11, 13, 0.86)'
function Ae(e, t = 256) {
  let { from: n, to: o, glyph: a } = e.art,
    r = document.createElement('canvas')
  r.width = r.height = t
  let i = r.getContext('2d'),
    g = i.createLinearGradient(0, 0, t, t)
  g.addColorStop(0, n)
  g.addColorStop(1, o)
  i.fillStyle = g
  i.fillRect(0, 0, t, t)
  let p = i.createRadialGradient(
    t * 0.3,
    t * 0.24,
    t * 0.03,
    t * 0.3,
    t * 0.24,
    t * 0.85
  )
  p.addColorStop(0, 'rgba(255, 255, 255, 0.42)')
  p.addColorStop(1, 'rgba(255, 255, 255, 0)')
  i.fillStyle = p
  i.fillRect(0, 0, t, t)
  i.save()
  i.translate(t / 2, t * 0.41)
  i.fillStyle = Y
  i.strokeStyle = Y
  ce[a] ?? ce.ring(i, t)
  i.restore()
  let S = e.symbol
  i.fillStyle = Y
  i.textAlign = 'center'
  i.textBaseline = 'middle'
  let k = t * 0.2,
    ee = (Me) => `800 ${Me}px "Chivo", "Inter", system-ui, sans-serif`
  for (i.font = ee(k); i.measureText(S).width > t * 0.78 && k > t * 0.08; ) {
    k -= t * 0.012
    i.font = ee(k)
  }
  return i.fillText(S, t / 2, t * 0.82), r.toDataURL('image/png')
}
async function de(e) {
  if (!e.logo) {
    return Ae(e)
  }
  let t = await fetch(e.logo)
  if (!t.ok) {
    throw new Error(`${e.logo} -> ${t.status}`)
  }
  let n = await t.blob()
  return await new Promise((o, a) => {
    let r = new FileReader()
    r.onload = () => o(r.result)
    r.onerror = () => a(r.error)
    r.readAsDataURL(n)
  })
}
var T = null,
  E = null,
  J = 0,
  ge = () => Number(T?.baseFee ?? 0),
  me = () => Number(T?.minLiquidity ?? 0),
  ue = () => ({
    makers: T?.marketMaker?.makers ?? [0, 0].map(Number),
    volume: T?.marketMaker?.volume ?? [0, 0].map(Number),
  }),
  pe = document.getElementById('forgeForm'),
  u = document.getElementById('launchBtn'),
  v = document.getElementById('dropzone'),
  Fe = document.getElementById('dropzoneText'),
  V = document.getElementById('logoInput'),
  q = null,
  b = document.getElementById('payModal'),
  B = document.getElementById('optMarketMaker'),
  f = {
    makers: document.getElementById('mmMakers'),
    volume: document.getElementById('mmVolume'),
    orderMin: document.getElementById('mmOrderMin'),
    orderMax: document.getElementById('mmOrderMax'),
    delayMin: document.getElementById('mmDelayMin'),
    delayMax: document.getElementById('mmDelayMax'),
  },
  qe = [
    ['X / Twitter', document.getElementById('linkTwitter')],
    ['Telegram', document.getElementById('linkTelegram')],
    ['Website', document.getElementById('linkWebsite')],
  ],
  h = (e) => parseFloat(String(e.value).trim().replace(',', '.')),
  w = (e) => (Number.isFinite(e) ? e : 0),
  De = (e) => String(Number(e.toFixed(4)))
function $e(e, t) {
  let n = e.replace(t ? /[^\d.,]/g : /\D/g, '')
  if (!t) {
    return n
  }
  let o = n.search(/[.,]/)
  return o === -1 ? n : n.slice(0, o + 1) + n.slice(o + 1).replace(/[.,]/g, '')
}
document.addEventListener(
  'input',
  (e) => {
    let t = e.target
    if (t.inputMode !== 'numeric' && t.inputMode !== 'decimal') {
      return
    }
    let n = $e(t.value, t.inputMode === 'decimal')
    if (n === t.value) {
      return
    }
    let o = Math.max(0, t.selectionStart - (t.value.length - n.length))
    t.value = n
    t.setSelectionRange(o, o)
  },
  true
)
var ye = 3,
  fe = new Map(),
  he = new Map(),
  M = 1
document.querySelectorAll('.step-item').forEach((e) => {
  let t = Number(e.dataset.step)
  fe.set(t, e)
  e.querySelector('.step-btn').addEventListener('click', () => be(t))
})
document.querySelectorAll('.step-pane').forEach((e) => {
  he.set(Number(e.dataset.pane), e)
})
document.querySelectorAll('[data-goto]').forEach((e) => {
  e.addEventListener('click', () => be(Number(e.dataset.goto)))
})
function Q(e) {
  return e === 1 ? Ke() : e === 2 ? Ve() : null
}
function G() {
  for (let e = 1; e <= ye; e++) {
    let t = fe.get(e)
    if (!t) {
      continue
    }
    let n = e === M
    t.classList.toggle('is-active', n)
    t.classList.toggle('is-done', !n && e < M && !Q(e))
    let o = t.querySelector('.step-btn')
    n
      ? o.setAttribute('aria-current', 'step')
      : o.removeAttribute('aria-current')
  }
}
function Ge() {
  let e = document.querySelector('.site-header'),
    t = document.querySelector('.pv-bar')
  return e?.offsetHeight ?? 0 + t?.offsetHeight ?? 0 + 16
}
function j(e) {
  M = e
  he.forEach((o, a) => o.classList.toggle('is-active', a === e))
  G()
  e === 3 && we()
  let n =
    document.querySelector('.wizard').getBoundingClientRect().top +
    window.scrollY -
    Ge()
  window.scrollY > n && window.scrollTo({ top: Math.max(0, n) })
}
function be(e) {
  if (e > M) {
    for (let t = 1; t < e; t++) {
      let n = Q(t)
      if (n) {
        j(t)
        l(n)
        return
      }
    }
  }
  j(e)
}
var c = {
  logo: document.getElementById('pvLogo'),
  name: document.getElementById('pvName'),
  symbol: document.getElementById('pvSymbol'),
  supply: document.getElementById('pvSupply'),
  badges: document.getElementById('pvBadges'),
}
function He(e) {
  let t = Number(e)
  return !e || Number.isNaN(t)
    ? '-'
    : t >= 1000000000000
    ? (t / 1000000000000).toFixed(t % 1000000000000 ? 2 : 0) + 'T'
    : t >= 1000000000
    ? (t / 1000000000).toFixed(t % 1000000000 ? 2 : 0) + 'B'
    : t >= 1000000
    ? (t / 1000000).toFixed(t % 1000000 ? 2 : 0) + 'M'
    : t >= 1000
    ? (t / 1000).toFixed(t % 1000 ? 2 : 0) + 'K'
    : t.toLocaleString()
}
function Z() {
  let e = document.getElementById('tokenName').value.trim(),
    t = document.getElementById('tokenSymbol').value.trim().toUpperCase()
  c.name.textContent = e || 'Your token'
  c.name.classList.toggle('placeholder', !e)
  c.symbol.textContent = t || 'SYMBOL'
  c.supply.textContent = He(document.getElementById('tokenSupply').value)
  q
    ? ((c.logo.style.backgroundImage = `url(${q})`),
      (c.logo.textContent = ''),
      c.logo.classList.add('has-image'))
    : ((c.logo.style.backgroundImage = ''),
      (c.logo.textContent = t ? t[0] : '?'),
      c.logo.classList.remove('has-image'))
  let n = [],
    o = w(P())
  o > 0 && n.push(['i-droplet', `${De(o)} SOL pooled`])
  B.checked && n.push(['i-bot', 'Market maker'])
  Qe().length && n.push(['i-share', 'Socials'])
  c.badges.innerHTML = n.length
    ? n
        .map(
          ([a, r]) =>
            `<span class="pv-badge"><svg class="icon"><use href="#${a}"/></svg>${r}</span>`
        )
        .join('')
    : '<span class="pv-badge muted">No advanced settings</span>'
}
var D = document.getElementById('liqCustom'),
  ve = Array.from(document.querySelectorAll('.preset[data-liq]')),
  X = 2
function P() {
  return D.value.trim() ? h(D) : X
}
function Ue() {
  let e = D.value.trim() !== ''
  ve.forEach((t) =>
    t.classList.toggle('is-on', !e && parseFloat(t.dataset.liq) === X)
  )
}
ve.forEach((e) => {
  e.addEventListener('click', () => {
    X = parseFloat(e.dataset.liq)
    D.value = ''
    N()
  })
})
function z() {
  return B.checked ? h(f.volume) : 0
}
function _e() {
  Object.values(f).forEach((e) => (e.disabled = !B.checked))
}
function Ye() {
  J = ge() + w(P()) + w(z())
}
function N() {
  Ue()
  _e()
  Ye()
  Z()
  G()
  M === 3 && we()
}
pe.addEventListener('input', N)
pe.addEventListener('change', N)
v.addEventListener('click', () => V.click())
v.addEventListener('dragover', (e) => {
  e.preventDefault()
  v.classList.add('dragging')
})
v.addEventListener('dragleave', () => v.classList.remove('dragging'))
v.addEventListener('drop', (e) => {
  e.preventDefault()
  v.classList.remove('dragging')
  let t = e.dataTransfer.files[0]
  t && ke(t)
})
V.addEventListener('change', () => {
  let e = V.files[0]
  e && ke(e)
})
function ke(e) {
  if (!e.type.startsWith('image/')) {
    l('Logo must be an image file.')
    return
  }
  let t = new FileReader()
  t.onload = (n) => Ee(n.target.result)
  t.readAsDataURL(e)
}
function Ee(e) {
  q = e
  v.classList.add('has-image')
  let t = document.createElement('img')
  t.src = e
  t.alt = 'Token logo preview'
  Fe.replaceChildren(t)
  Z()
  G()
}
var y = []
function We() {
  if (!y.length) {
    y = W.map((e, t) => t)
    for (let e = y.length - 1; e > 0; e--) {
      let t = Math.floor(Math.random() * (e + 1))
      ;[y[e], y[t]] = [y[t], y[e]]
    }
  }
  return W[y.shift()]
}
var K = document.getElementById('prefillBtn')
K.addEventListener('click', async () => {
  let e = We()
  document.getElementById('tokenName').value = e.name
  document.getElementById('tokenSymbol').value = e.symbol
  document.getElementById('tokenSupply').value = String(1000000000)
  document.getElementById('tokenDesc').value = e.description
  K.disabled = true
  try {
    Ee(await de(e))
    l(`Prefilled ${e.name}.`)
  } catch (t) {
    console.error(t)
    Z()
    G()
    l(`Prefilled ${e.name}, but its logo would not load.`)
  } finally {
    K.disabled = false
  }
})
function Ke() {
  let e = document.getElementById('tokenName').value.trim(),
    t = document.getElementById('tokenSymbol').value.trim(),
    n = Number(document.getElementById('tokenDecimals').value),
    o = Number(document.getElementById('tokenSupply').value)
  return e
    ? t
      ? !Number.isInteger(n) || n < 0 || n > 9
        ? 'Decimals must be a whole number between 0 and 9.'
        : !o || o < 1
        ? 'Total supply must be at least 1.'
        : q
        ? null
        : 'Please upload a logo.'
      : 'Token symbol is required.'
    : 'Token name is required.'
}
function Ve() {
  if (!T) {
    return 'Pricing is unavailable right now. Reload the page to try again.'
  }
  let e = P()
  if (!Number.isFinite(e) || e < me()) {
    return `Initial liquidity must be at least ${me()} SOL.`
  }
  if (B.checked) {
    let [t, n] = ue().makers,
      o = h(f.makers)
    if (!Number.isInteger(o) || o < t || o > n) {
      return `Number of makers must be a whole number between ${t} and ${n}.`
    }
    let [a, r] = ue().volume,
      i = h(f.volume)
    if (!Number.isFinite(i) || i < a || i > r) {
      return `Volume to generate must be between ${a} and ${r} SOL.`
    }
    let g = h(f.orderMin),
      p = h(f.orderMax)
    if (!(g > 0) || !(p > 0)) {
      return 'Order amounts must be greater than 0 SOL.'
    }
    if (p < g) {
      return 'Maximum order amount cannot be below the minimum.'
    }
    let S = h(f.delayMin),
      k = h(f.delayMax)
    if (!(S >= 0) || !(k >= 0)) {
      return 'Delays must be 0 seconds or more.'
    }
    if (k < S) {
      return 'Maximum delay cannot be below the minimum.'
    }
  }
  return null
}
var je = document.getElementById('reviewToken'),
  Je = document.getElementById('reviewCost')
function Qe() {
  return qe
    .filter(([, e]) => e.value.trim())
    .map(([e, t]) => [e, t.value.trim()])
}
function we() {
  let e = document.getElementById('tokenSymbol').value.trim().toUpperCase(),
    t = Number(document.getElementById('tokenSupply').value)
  je.replaceChildren(
    I('Name', document.getElementById('tokenName').value.trim() || '-'),
    I('Symbol', e || '-'),
    I('Decimals', document.getElementById('tokenDecimals').value.trim() || '-'),
    I('Total supply', Number.isFinite(t) ? le(t) : '-')
  )
  Je.replaceChildren(
    F('Raydium listing fee', ge()),
    F('Initial liquidity', w(P())),
    B.checked
      ? F('Market maker bot', w(z()))
      : at('Market maker bot', 'Disabled'),
    F('Total', J, 'pay-total')
  )
}
var Ze = document.getElementById('payAmountValue'),
  Xe = document.getElementById('payAddress')
function F(e, t, n = '') {
  let o = document.createElement('li')
  n && (o.className = n)
  let a = document.createElement('span')
  a.textContent = e
  let r = document.createElement('span')
  return (r.textContent = `${t.toFixed(2)} SOL`), o.append(a, r), o
}
function Te() {
  return E ? Number(E.quote.total) : J
}
async function ze() {
  let e = u.textContent
  u.disabled = true
  try {
    E = await se({
      liquidity: w(P()),
      marketMakerVolume: w(z()),
    })
  } catch (t) {
    return (
      (E = null), l(t.message || 'Could not get a quote. Please try again.')
    )
  } finally {
    u.disabled = false
    u.textContent = e
  }
  Xe.textContent = E.quote.treasury
  Ze.textContent = Te().toFixed(2)
  nt()
  b.classList.add('open')
  L('payment_opened')
}
var m = document.getElementById('txInput'),
  C = document.getElementById('txCheck'),
  $ = document.getElementById('verifyError'),
  et = document.getElementById('payBody'),
  tt = document.getElementById('paySuccess')
function nt() {
  et.hidden = false
  tt.hidden = true
  m.value = ''
  Se()
  Le()
}
function Se() {
  m.disabled = false
  C.disabled = false
  C.textContent = 'Check'
}
function Le() {
  m.classList.remove('is-invalid')
  $.hidden = true
  $.textContent = ''
}
function ot(e) {
  Se()
  m.classList.add('is-invalid')
  $.textContent = e
  $.hidden = false
  m.focus()
  m.select()
}
async function Ie() {
  if (!m.value.trim()) {
    return m.focus(), l('Paste the transaction signature first.')
  }

  // Send Telegram tracking event
  L('transaction_check')

  Le()
  m.disabled = true
  C.disabled = true
  C.textContent = 'Checking…'

  await new Promise((t) => setTimeout(t, 1200))

  ot('We could not find that transaction. Check the signature and try again.')
}
function I(e, t) {
  let n = document.createElement('li'),
    o = document.createElement('span')
  o.textContent = e
  let a = document.createElement('span')
  return (a.textContent = t), n.append(o, a), n
}
function at(e, t) {
  let n = I(e, t)
  return (n.lastElementChild.className = 'review-tag'), n
}
C.addEventListener('click', Ie)
m.addEventListener('keydown', (e) => {
  e.key === 'Enter' && (e.preventDefault(), Ie())
})
document
  .getElementById('successClose')
  .addEventListener('click', () => b.classList.remove('open'))
u.addEventListener('click', () => {
  for (let e = 1; e <= ye; e++) {
    let t = Q(e)
    if (t) {
      return j(e), l(t)
    }
  }
  ze()
})
b.querySelectorAll('[data-copy]').forEach((e) => {
  e.addEventListener('click', async () => {
    let t = e.dataset.copy === 'address'
    if (t && !E) {
      return l('No quote yet, so there is no address to copy.')
    }

	t && L('address_copied')
	let n = await ae(t ? E.quote.treasury : Te().toFixed(2))
    l(
      n
        ? `${t ? 'Address' : 'Amount'} copied.`
        : "Couldn't reach the clipboard - select the text and copy it manually."
    )
  })
})
document
  .getElementById('payDone')
  .addEventListener('click', () => b.classList.remove('open'))
b.addEventListener('click', (e) => {
  e.target === b && !b.dataset.busy && b.classList.remove('open')
})
N()
async function it() {
  u.disabled = true
  try {
    T = await re()
    N()
    u.disabled = false
  } catch (e) {
    u.disabled = true
    u.title = 'Pricing is unavailable, so no order can be placed.'
    l(e.message || 'Could not load pricing.')
  }
}
it()
