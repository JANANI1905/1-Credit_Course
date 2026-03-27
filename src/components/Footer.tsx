export default function Footer() {
  return (
    <footer className="border-t border-cyan-300/20 py-6 text-center mt-8 backdrop-blur-lg bg-[#060b1b]/60">
      <p className="text-cyan-200">Designed & Built by Janani A</p>
      <div className="mt-1 h-[2px] w-24 mx-auto bg-gradient-to-r from-cyan-300 via-violet-500 to-cyan-300" />
      <p className="text-xs text-cyan-300 mt-2">© {new Date().getFullYear()} | Responsive futuristic portfolio</p>
    </footer>
  )
}
