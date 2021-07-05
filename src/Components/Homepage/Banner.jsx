
import Carousel from "react-material-ui-carousel";
import {bannerData} from '../../Constants/Data'

export const Banner = () => {

       return(
    <Carousel>
        {
            bannerData.map(image =>(
                <img src={image} />
            ))
        }
    </Carousel>
       )

}