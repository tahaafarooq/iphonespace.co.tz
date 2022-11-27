import Link from "next/link";
import {IconShoppingCart} from "@tabler/icons";

/**
 * Created by GIFT MSIGWA.
 * Project : frontend
 * GitHub username: gisacc54
 * Date: 27/11/2022
 * Time: 10:45 AM
 */

const ProductInfo = ({title,description,url="#",showSeller}) => {
    return (
        <div className="card-body">
            <h3 className="card-title">{title}</h3>
            {
                showSeller?
                    <Seller/>:
                    ''
            }
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
    )
}

const Seller = () => {
    return (
        <div className="d-flex align-items-center">
            <span className="avatar me-3 rounded" style={{backgroundImage: 'url(./static/avatars/000m.jpg)'}} ></span>
            <div>
                <div>Paweł Kuna</div>
                <div className="text-muted">3 days ago</div>
            </div>
        </div>
    )
}
export default ProductInfo