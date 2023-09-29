import ButtonSign from "./ButtonSign";
const website=[{name: "Facebook", logo: "https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/92fd2c63-9140-4bb6-ee02-bc296fc9d900/preview"}, {name: "Twitter", logo: "https://banner2.cleanpng.com/20180410/oew/kisspng-social-media-computer-icons-twitter-5acc9c7ca98485.7450067715233588446944.jpg"}, {name: "Google", logo: "https://banner2.cleanpng.com/20201008/rtv/transparent-google-suite-icon-google-icon-5f7f985ccd60e3.5687494416021975968412.jpg"}];
export default function Card(){
    return(
        <div>
            {website.map((e) => <ButtonSign name = {e.name} logo = {e.logo}/>)}
        </div>
    );
}