import Button from "react-bootstrap/Button";
import Link from "next/link";

export default function Card(props) {
    const fillCard = (props) => {
        return (
            <div className="f-card-content">
                <div className="hemi-1 vl">
                    <div className="f-card-img">
                        <img src={props.imgSrc} alt={props.alt} />
                    </div>
                </div>

                <div className="hemi-2">
                    <div className="f-card-title">
                        <p className="f-card-title">{props.title}</p>
                    </div>
                    <hr className="card-text-seperator" />
                    <div className="f-card-description">
                        <p className="f-card-description">{props.text}</p>
                    </div>
                    <div className="f-card-link">
                        <Link href={props.link} passHref>
                            <Button variant="primary" className="btn-next">
                                Read more
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    };

    return <div className="f-card-container">{fillCard(props.cardData)}</div>;
}
