import {IconShoppingCart} from "@tabler/icons";
import Link from "next/link";

/**
 * Created by GIFT MSIGWA.
 * Project : frontend
 * GitHub username: gisacc54
 * Date: 27/11/2022
 * Time: 9:47 AM
 */

const Product = ({col = 4,image = 'images/test.jpg',title,description,url="#"}) => {
    return (
        <div className={`col-${col}`}>
            <div className="card">
                <div className="card-img-top img-responsive img-responsive-16by9"
                     style={{backgroundImage: `url(${image})`}}></div>
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p>{description}</p>
                    <div className="mt-2">
                        <Link href={url}>
                            <a href="#" className="btn btn-primary w-100">
                                <IconShoppingCart/>
                                Buy now
                            </a>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;