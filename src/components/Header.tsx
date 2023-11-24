import SubHeader from "./SubHeader"

const Header = () => {
  return (
    <header>
      <SubHeader
        address="Lago Sul, Brasília - DF"
        opens="08:00"
        closes="18:00"
        phone="(61) 3395-8080"
        phone2="(61) 3359-8181"
        whatsapp="5561999999999"
        instagram="smartseguranca"
        facebook="smartseguranca"
        email="contato@smartseguranca.com.br"
      />
      <nav className="flex justify-between items-center px-16 py-5 max-w-7xl mx-auto">
        <div className="flex items-center gap-16">
          <a href="/" className="w-fit flex items-center gap-2">
            <img src="/images/logo.png" alt="Smart Segurança" className="w-10" />
            <p className="text-xl">
              Smart Segurança
            </p>
          </a>

          <ul className="flex gap-5 text-neutral-500 font-medium">
            <li>
              <a href="/sobre" className="hover:text-blue-500">Sobre</a>
            </li>
            <li>
              <a href="/contato" className="hover:text-blue-500">Planos</a>
            </li>
            <li>
              <a href="/contato" className="hover:text-blue-500">Atendimento</a>
            </li>
            <li>
            </li>
          </ul>
        </div>
        <a href="/contato" className="bg-blue-500 font-medium px-6 py-2 rounded-lg text-black hover:bg-blue-600">
          Contrate
        </a>
      </nav>
    </header>
  )
}

export default Header