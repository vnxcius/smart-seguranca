import Header from "./components/Header"

function App() {
  // Mudar a cor de fundo do body
  document.body.classList.add("bg-[#101010]", "text-neutral-100");

  return (
    <Header />
  )
}

export default App