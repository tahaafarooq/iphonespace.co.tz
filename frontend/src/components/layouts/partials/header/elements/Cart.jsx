import { IconShoppingCart} from "@tabler/icons";
import Link from "next/link";

const Cart = (props) => {
    return (
        <div className="nav-item dropdown d-none d-md-flex me-3">
            <Link href='cart'>
                <a className="nav-link px-0" data-bs-toggle="dropdown" tabIndex="-1"
                   aria-label="Show notifications">
                    <IconShoppingCart/>
                    <span className="badge bg-red"></span>
                </a>
            </Link>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-card">
                <div className="card">
                    <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad amet consectetur
                        exercitationem fugiat in ipsa ipsum, natus odio quidem quod repudiandae sapiente. Amet debitis et
                        magni maxime necessitatibus ullam.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;