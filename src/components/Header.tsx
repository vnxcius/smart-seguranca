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
      <nav>
        <div>
          <a href="/" className="w-fit flex items-center gap-2">
            <img src="/images/logo.png" alt="Smart Segurança" className="w-10"/>
            <p className="text-xl">
              Smart Segurança
            </p>
          </a>
        </div>
        <ul>
          <li>
            <a href="/">Início</a>
          </li>
          <li>
            <a href="/sobre">Sobre</a>
          </li>
          <li>
            <a href="/contato">Planos</a>
          </li>
          <li>
            <a href="/contato">Atendimento</a>
          </li>
          <li>
            <a href="/contato">Contrate</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header