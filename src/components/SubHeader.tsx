import { IoCall, IoLocationOutline, IoLogoFacebook, IoLogoInstagram, IoLogoWhatsapp, IoMail } from "react-icons/io5";

type Props = {
  address: string,
  opens: string,
  closes: string,
  phone: string,
  phone2?: string,
  whatsapp?: string,
  instagram?: string,
  facebook?: string,
  email?: string,
}

const SubHeader = (props: Props) => {
  return (
    <div className="w-full bg-neutral-900 text-neutral-100 flex justify-between items-center font-source-sans px-16 py-3">
      <div className="flex items-center space-x-10">
        <div className="flex items-center gap-1">
          <span className="text-2xl"><IoLocationOutline /></span>
          <span>{props.address}</span>
        </div>

        <div className="flex gap-1">
          <p>
            Segunda à Sexta: de
          </p>
          <span>{props.opens}</span>
          <p>até</p>
          <span>{props.closes}</span>
        </div>
      </div>

      <div className="flex items-center gap-7">
        <div className="flex items-center gap-1">
          <IoCall />
          <span>{props.phone}</span>
          {props.phone2 && <span>/ {props.phone2}</span>}
        </div>

        <div className="flex items-center gap-2">
          {props.whatsapp &&
            <a href={'https://wa.me/' + props.whatsapp} target="_blank" className="text-2xl hover:text-blue-500"><IoLogoWhatsapp /></a>
          }
          {props.instagram &&
            <a href={'https://instagram.com/' + props.instagram} target="_blank" className="text-2xl hover:text-blue-500"><IoLogoInstagram /></a>
          }
          {props.facebook &&
            <a href={'https://facebook.com/' + props.facebook} target="_blank" className="text-2xl hover:text-blue-500"><IoLogoFacebook /></a>
          }
          {props.email &&
            <a href={'mailto:' + props.email} className="text-2xl hover:text-blue-500"><IoMail /></a>
          }
        </div>
      </div>
    </div>
  )
}

export default SubHeader