import "./style.css"
import ItemList from "../../components/Item";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

function SellerPage() {
    let navigate = useNavigate();
    const redirect = () => {
        let path = `/create`;
        navigate(path);
    };

    return (
        <div>
            <ItemList />
            <div className="space">
                <Button onClick={redirect}>Create Product</Button>
            </div>
        </div>
    );
}

export default SellerPage;