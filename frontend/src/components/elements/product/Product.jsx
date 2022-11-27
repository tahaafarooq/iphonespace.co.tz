import {IconShoppingCart} from "@tabler/icons";
import Link from "next/link";
import ProductInfo from "./ProductInfo";

/**
 * Created by GIFT MSIGWA.
 * Project : frontend
 * GitHub username: gisacc54
 * Date: 27/11/2022
 * Time: 9:47 AM
 */

const Product = ({col = 4,image = '/images/test.jpg',title,description,url="#",showInfo=true}) => {
    return (
        <div className={`col-${col}`}>
            <div className="card">
                <div className="card-img-top img-responsive img-responsive-16by9"
                     style={{backgroundImage: `url(${image})`}}></div>
                {
                    showInfo?<ProductInfo url={url} title={title} description={description}/>:''
                }
            </div>
        </div>
    );
};

export default Product;