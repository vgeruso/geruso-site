export function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] py-10">
      <p className="text-center text-sm text-[var(--text-muted)]">
        © {new Date().getFullYear()} Victor Geruso.
      </p>
    </footer>
  )
}
