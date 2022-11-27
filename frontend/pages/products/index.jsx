/**
 * Created by GIFT MSIGWA.
 * Project : frontend
 * GitHub username: gisacc54
 * Date: 27/11/2022
 * Time: 8:00 AM
 */

import PageTitle from "../../src/components/pages/elements/page-title/PageTitle";
import PageContent from "../../src/components/pages/elements/page-content/PageContent";
import {IconPlus, IconReport, IconShoppingCart} from "@tabler/icons";
import Product from "../../src/components/elements/product/Product";
import {useState} from "react";
import RequestProductModal from "../../src/components/pages/products/modals/RequestProductModal";

const products = [
    {
        image:'images/test.jpg',
        title:'Iphone 14 Pro Max',
        url:'products/iphone-14-pro-max'
    },
    {
        image:'images/test.jpg',
        title:'Iphone 14 Pro',
        url:'products/iphone-14-pro'
    },
    {
        image:'images/test.jpg',
        title:'Iphone 14',
        url:'products/iphone-14'
    },
    {
        image:'images/test.jpg',
        title:'Iphone 14 min',
        url:'products/iphone-14-min'
    },
]
function Index(props) {
    const [openModal, setOpenModal] = useState(false);

    function onCloseModal() {
        setOpenModal(false)
    }
    return (
        <>
            <PageTitle title="Products" preTitle="overview">
                <div className="btn-list">
                    <a href="#" className="btn btn-primary d-none d-sm-inline-block" data-bs-toggle="modal"
                       data-bs-target="#modal-report" onClick={()=>setOpenModal(true)}>
                       <IconReport/>
                        Request Phone
                    </a>
                    <a href="#" className="btn btn-primary d-sm-none btn-icon" data-bs-toggle="modal"
                       data-bs-target="#modal-report" aria-label="Create new report" onClick={()=>setOpenModal(true)}>
                        <IconReport/>
                    </a>
                </div>
            </PageTitle>
            <PageContent>
                <div className="row">
                    <div className="col-3">
                        <form action="" method="get">
                            <div className="subheader mb-2">Category</div>
                            <div className="list-group list-group-transparent mb-2">
                                <a className="list-group-item list-group-item-action d-flex align-items-center active"
                                   href="#">
                                    All Iphone
                                    <small className="text-muted ms-auto">41</small>
                                </a>
                                <a className="list-group-item list-group-item-action d-flex align-items-center"
                                   href="#">
                                    Iphone 14
                                    <small className="text-muted ms-auto">4</small>
                                </a>
                                <a className="list-group-item list-group-item-action d-flex align-items-center"
                                   href="#">
                                    Iphone 13
                                    <small className="text-muted ms-auto">10</small>
                                </a>
                                <a className="list-group-item list-group-item-action d-flex align-items-center"
                                   href="#">
                                    Iphone 12
                                    <small className="text-muted ms-auto">20</small>
                                </a>
                            </div>
                        </form>
                    </div>
                    <div className="col-9">
                        <div className="row row-cards">
                            {
                                products.map((product,index)=>{
                                    return <Product title={product.title} image={product.image} url={product.url}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </PageContent>

            {openModal?<RequestProductModal onCloseModal={onCloseModal}/>:''}
        </>
    );
}

export default Index;