import { Card } from 'react-bootstrap';
import './AllProduct.css';
import { useHistory } from 'react-router';


const AllProduct = ({ product }) => {
    const { name, price, img, _id, description } = product;
    console.log(product._id);

    const history = useHistory();

    const handlePlaceOrder = (id) => {
        history.push(`/placeOrder/${id}`)
    }


    return (
        <>
            <div className="mb-5 text-center service-detail col-sm-12 col-md-6 col-lg-4 ">
                <Card onClick={() => handlePlaceOrder(_id)} style={{ cursor: 'pointer' }}
                    className="border-0 h-100 card-background"
                >
                    <Card.Img variant="top" src={img} className="img-fluid py-2 px-3 service-image" style={{ maxHeight: "200px", borderRadius: '15px' }} />
                    <Card.Body className="pt-0" style={{ height: '' }}>
                        <Card.Title as="h5" className="">{name}</Card.Title>
                        <Card.Title as="h4" className=" text-danger"><i className="fas fa-dollar-sign"></i> {price}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};

export default AllProduct;