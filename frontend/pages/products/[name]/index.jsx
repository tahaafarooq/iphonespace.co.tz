import PageTitle from "../../../src/components/pages/elements/page-title/PageTitle";
import PageContent from "../../../src/components/pages/elements/page-content/PageContent";
import Product from "../../../src/components/elements/product/Product";
import ProductInfo from "../../../src/components/elements/product/ProductInfo";

/**
 * Created by GIFT MSIGWA.
 * Project : frontend
 * GitHub username: gisacc54
 * Date: 27/11/2022
 * Time: 10:32 AM
 */
const Index = () => {
    return (
        <>
            <PageTitle title="Product" preTitle="view"/>
            <PageContent>
                <div className="row row-cards">
                    <Product
                        col={8}
                        showInfo={false}/>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body m-0 p-0">
                                <ProductInfo
                                    title="Iphone 14 Pro Max"
                                    description={`Welcome to Flask’s documentation. Get started with Installation and then get an overview with the Quickstart. There is also a more detailed Tutorial that shows how to create a small but complete application with Flask. Common patterns are described in the Patterns for Flask section. The rest of the docs describe each component of Flask in detail, with a full reference in the API section.`}
                                    showSeller={true}
                                />
                            </div>
                            <div className="card-footer">
                                This is not legal advice.
                                <a href="#" target="_blank">Learn more about repository licenses.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </PageContent>
        </>
    );
};

export default Index;