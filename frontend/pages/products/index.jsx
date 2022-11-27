/**
 * Created by GIFT MSIGWA.
 * Project : frontend
 * GitHub username: gisacc54
 * Date: 27/11/2022
 * Time: 8:00 AM
 */

import PageTitle from "../../src/components/pages/elements/page-title/PageTitle";
import PageContent from "../../src/components/pages/elements/page-content/PageContent";
import {IconShoppingCart} from "@tabler/icons";
import Product from "../../src/components/elements/product/Product";

const products = [
    {
        image:'images/test.jpg',
        title:'Iphone 14 Pro Max',
    },
    {
        image:'images/test.jpg',
        title:'Iphone 14 Pro',
    },
    {
        image:'images/test.jpg',
        title:'Iphone 14',
    },
    {
        image:'images/test.jpg',
        title:'Iphone 14 min',
    },
]
function Index(props) {
    return (
        <>
            <PageTitle title="Products" preTitle="overview"/>
            <PageContent>
                <div className="row">
                    <div className="col-3">
                        <form action="" method="get">
                            <div className="subheader mb-2">Category</div>
                            <div className="list-group list-group-transparent mb-3">
                                <a className="list-group-item list-group-item-action d-flex align-items-center active"
                                   href="#">
                                    Iphone 14
                                    <small className="text-muted ms-auto">24</small>
                                </a>
                            </div>
                        </form>
                    </div>
                    <div className="col-9">
                        <div className="row row-cards">
                            {
                                products.map((product,index)=>{
                                    return <Product title={product.title} image={product.image}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </PageContent>
        </>
    );
}

export default Index;