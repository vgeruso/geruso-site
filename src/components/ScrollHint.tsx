import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

function MouseGlyph() {
  return (
    <span className="relative flex h-11 w-7 items-start justify-center rounded-full border border-current pt-1.5 opacity-80 transition-opacity group-hover:opacity-100">
      <motion.span
        className="block h-1.5 w-1 rounded-full bg-current"
        animate={{ y: [0, 12, 0], opacity: [1, 0.35, 1] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </span>
  )
}

function FingerGlyph() {
  return (
    <span className="relative flex h-11 w-7 items-center justify-center opacity-80 transition-opacity group-hover:opacity-100">
      <motion.span
        className="block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Minimal index-finger outline — same scale/stroke as the mouse */}
        <svg
          width="22"
          height="32"
          viewBox="0 0 22 32"
          fill="none"
          aria-hidden="true"
        >
          {/* fingertip */}
          <path
            d="M11 2.5c-2 0-3.5 1.5-3.5 3.5v9.2c0 .7-.6 1.3-1.3 1.3S5 15.9 5 16.6V19c0 3.6 2.9 6.5 6.5 6.5h.8c2.8 0 5.2-2.3 5.2-5.2v-5.3c0-.8-.7-1.5-1.5-1.5-.4 0-.8.2-1.1.4V6c0-2-1.5-3.5-3.5-3.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          {/* subtle swipe trail */}
          <motion.path
            d="M11 1v4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            animate={{ opacity: [0.2, 0.7, 0.2], y: [0, 3, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>
      </motion.span>
    </span>
  )
}

function Chevrons() {
  return (
    <motion.span
      className="-mt-1 flex flex-col items-center"
      animate={{ y: [0, 4, 0] }}
      transition={{
        duration: 1.6,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: 0.15,
      }}
    >
      <svg
        width="14"
        height="8"
        viewBox="0 0 14 8"
        fill="none"
        aria-hidden="true"
        className="opacity-50"
      >
        <path
          d="M1 1.5L7 6.5L13 1.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        width="14"
        height="8"
        viewBox="0 0 14 8"
        fill="none"
        aria-hidden="true"
        className="-mt-1 opacity-90"
      >
        <path
          d="M1 1.5L7 6.5L13 1.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.span>
  )
}

const FADE_DISTANCE = 180

export function ScrollHint() {
  const [isTouch, setIsTouch] = useState(false)
  const [entered, setEntered] = useState(false)
  const [scrollHidden, setScrollHidden] = useState(false)

  const { scrollY } = useScroll()
  const scrollFade = useTransform(scrollY, [0, FADE_DISTANCE], [1, 0])
  const opacity = useTransform(scrollFade, (value) => (entered ? value : 0))

  useEffect(() => {
    const mq = window.matchMedia('(hover: none), (pointer: coarse)')
    const syncTouch = () => setIsTouch(mq.matches)
    syncTouch()
    mq.addEventListener('change', syncTouch)
    return () => mq.removeEventListener('change', syncTouch)
  }, [])

  useEffect(() => {
    const timer = window.setTimeout(() => setEntered(true), 1100)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    return scrollFade.on('change', (value) => {
      setScrollHidden(value < 0.05)
    })
  }, [scrollFade])

  return (
    <motion.a
      href="#sobre"
      style={{
        opacity,
        pointerEvents: scrollHidden || !entered ? 'none' : 'auto',
      }}
      initial={{ y: 8 }}
      animate={{ y: 0 }}
      transition={{ delay: 1.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="group absolute bottom-8 left-0 inline-flex flex-col items-center gap-3 text-[var(--text-muted)] no-underline transition-colors hover:text-[var(--accent)]"
      aria-label="Role para explorar"
      aria-hidden={scrollHidden || !entered}
      tabIndex={scrollHidden || !entered ? -1 : 0}
    >
      <span className="text-[0.65rem] font-medium tracking-[0.22em] uppercase">
        role para explorar
      </span>

      {isTouch ? <FingerGlyph /> : <MouseGlyph />}
      <Chevrons />
    </motion.a>
  )
}
