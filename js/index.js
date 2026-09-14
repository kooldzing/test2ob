var T = 'mainnet-beta',
  g = 'https://oqgrxtobtscsnkvwdzlx.supabase.co/functions/v1/payment-api',
  M = {
    devnet: ['https://api.devnet.solana.com'],
    testnet: ['https://api.testnet.solana.com'],
    'mainnet-beta': [
      'https://solana-rpc.publicnode.com',
      'https://public.rpc.solanavibestation.com',
    ],
  },
  P = M[T],
  k = P[0]
var N = {
  '/': '/',
  '/create-token': '/create-token',
  '/liquidity': '/liquidity',
}
function A() {
  let e = location.pathname
    .replace(/\/index\.html$/, '/')
    .replace(/\.html$/, '')
  return N[e] || (e === '' ? '/' : 'other')
}
function L(e = 'view') {
  try {
    let t = JSON.stringify({
        path: A(),
        event: e,
        ref: document.referrer ? new URL(document.referrer).host : '',
      }),
      o = `${g}/hit`
    if (navigator.sendBeacon) {
      navigator.sendBeacon(o, new Blob([t], { type: 'application/json' }))
      return
    }
    fetch(o, {
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
var i = document.createElement('div')
i.className = 'scrollbar'
var n = document.createElement('div')
n.className = 'scrollbar-thumb'
i.appendChild(n)
document.body.appendChild(i)
var C = 44,
  m,
  p = false
function y() {
  let e = document.documentElement,
    t = e.clientHeight,
    o = Math.max(e.scrollHeight, document.body.scrollHeight),
    s = o - t,
    a = Math.max(C, Math.round((t / o) * t))
  return {
    view: t,
    total: o,
    scrollable: s,
    height: a,
    travel: t - a,
  }
}
function d() {
  let { scrollable: e, height: t, travel: o } = y()
  if (e <= 1) {
    i.classList.remove('on', 'show')
    return
  }
  i.classList.add('on')
  let s = (window.scrollY / e) * o
  n.style.height = `${t}px`
  n.style.transform = `translateY(${Math.max(0, Math.min(o, s))}px)`
}
function h() {
  d()
  i.classList.contains('on') &&
    (i.classList.add('show'),
    clearTimeout(m),
    !p && (m = setTimeout(() => i.classList.remove('show'), 900)))
}
window.addEventListener('scroll', h, { passive: true })
window.addEventListener('resize', h)
window.ResizeObserver && new ResizeObserver(d).observe(document.body)
n.addEventListener('pointerdown', (e) => {
  e.preventDefault()
  let { scrollable: t, travel: o } = y()
  if (t <= 1 || o <= 0) {
    return
  }
  let s = e.clientY,
    a = window.scrollY
  p = true
  clearTimeout(m)
  i.classList.add('show', 'dragging')
  n.setPointerCapture(e.pointerId)
  let l = (r) => {
      let u = ((r.clientY - s) / o) * t
      window.scrollTo({
        top: a + u,
        behavior: 'instant',
      })
    },
    c = () => {
      p = false
      i.classList.remove('dragging')
      n.releasePointerCapture?.(e.pointerId)
      n.removeEventListener('pointermove', l)
      n.removeEventListener('pointerup', c)
      n.removeEventListener('pointercancel', c)
      h()
    }
  n.addEventListener('pointermove', l)
  n.addEventListener('pointerup', c)
  n.addEventListener('pointercancel', c)
})
d()
window.addEventListener('load', d)
var Y = document.getElementById('toast')
var E = document.querySelector('.site-header')
if (E) {
  let e = () => E.classList.toggle('scrolled', window.scrollY > 10)
  window.addEventListener('scroll', e, { passive: true })
  e()
}
var I = matchMedia('(prefers-reduced-motion: reduce)').matches,
  b = document.querySelector('.token-field'),
  x = document.querySelector('.how-section'),
  f = Array.from(document.querySelectorAll('.token-tile'))
f.forEach((e) => {
  e.querySelector('img').addEventListener('error', () =>
    e.classList.add('fail')
  )
})
if (!I && b && x && f.length) {
  let e = (s) => 1 - Math.pow(1 - s, 3),
    t = false,
    o = () => {
      let s = window.innerHeight,
        a = x.getBoundingClientRect(),
        l = Math.min(1, Math.max(0, (s - a.top) / (s * 0.7))),
        c = b.offsetWidth
      f.forEach((r) => {
        let u = Number(r.dataset.depth),
          v = e(Math.min(1, l * (0.55 + u))),
          S =
            r.offsetLeft + r.offsetWidth / 2 < c / 2
              ? -(r.offsetLeft + r.offsetWidth + 70)
              : c - r.offsetLeft + 70
        r.style.setProperty('--px', (1 - v) * S + 'px')
        r.style.setProperty('--op', (0.15 + 0.85 * v) * 0.9)
      })
      t = false
    }
  window.addEventListener(
    'scroll',
    () => {
      t || ((t = true), requestAnimationFrame(o))
    },
    { passive: true }
  )
  window.addEventListener('resize', o, { passive: true })
  o()
}
