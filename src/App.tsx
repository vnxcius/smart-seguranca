import Header from "./components/Header"

function App() {
  // Mudar a cor de fundo do body
  document.body.classList.add("bg-[#101010]", "text-neutral-100");

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto text-center py-10 space-y-3">
          <div className="flex gap-3 text-5xl font-bold justify-center">
            <h1>
              Mais
            </h1>
            <span className="text-blue-500">segurança</span>
            <h1>
              para você
            </h1>
          </div>
          <div>
            <p className="font-medium text-neutral-500 text-lg">
              Uma solução confiável e inteligente para a sua segurança e de sua família.  
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App