import ButtonSign from "./ButtonSign";
import website from "./websitedata.js";
export default function Card({onButtonClick}){
    return(
        <div>
            {website.map((site, index) => <ButtonSign key={index} name = {site.name} logo = {site.logo} onClick={()=>onButtonClick(site.name)}/>)}
        </div>
    );
}