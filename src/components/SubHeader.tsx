import { IoCall, IoLocation, IoLogoFacebook, IoLogoInstagram, IoLogoWhatsapp, IoMail } from "react-icons/io5";

type Props = {
  address: string,
  opens: string,
  closes: string,
  phone: string,
  phone2?: string,
}

const SubHeader = (props: Props) => {
  return (
    <div>
      <div>
        <div>
          <IoLocation />
          <span>{props.address}</span>
        </div>

        <div>
          <p>
            Segunda à Sexta: de
          </p>
          <span>{props.opens}</span>
          <p>até</p>
          <span>{props.closes}</span>
        </div>
      </div>

      <div>
        <div>
          <IoCall />
          <span>{props.phone} </span>
          {props.phone2 && <span>/ {props.phone2}</span>}
        </div>
        
        <div>
          <a href="#">
            <IoLogoWhatsapp />
          </a>
          <a href="#">
            <IoLogoFacebook />
          </a>
          <a href="#">
            <IoMail />
          </a>
          <a href="#">
            <IoLogoInstagram />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SubHeader