import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function GoBackBtn(props) {
    //console.log(props);
    const router = useRouter();
    const backDatRowtahUp = () => {
        return router.back();
    };

    return (
        <section className="block">
            <Button variant="primary" className="btn-next" onClick={backDatRowtahUp}>
                <FontAwesomeIcon icon="arrow-alt-circle-left" /> Back to {props.name}
            </Button>
        </section>
    );
}
