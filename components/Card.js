import Button from "react-bootstrap/Button";
import Link from "next/link";

//  This pattern/flow for this Card component works like this:
//  There are three files, *Card* component that generates the card,
//  functional *SelectCard* component that picks card from a
//  *JSON* file that contains all the data/content to be displayed.
//
//  Page imports Card component and SelectCard component.
//  Card accepts data prop from SelectCard.
//  SelectCard returns the content from the json.
//
//  *<Card cardData={SelectCard("PageCategory", "JsonCardName")}/>*

export default function Card(props) {
    const fillCard = (props) => {
        return (
            <a
                href={props.aHref}
                target="blank"
                rel="noopener noreferrer"
                className="card-link"
            >
                <div className="card-content">
                    <div className="card-img">
                        <img src={props.imgSrc} alt={props.alt} />
                    </div>
                    <div className="card-title">
                        <p className="card-title">{props.title}</p>
                    </div>
                    <hr className="card-text-seperator" />
                    <div className="card-description">
                        <p className="card-description">{props.text}</p>
                    </div>
                </div>
            </a>
        );
    };

    return <div className="card-container">{fillCard(props.cardData)}</div>;
}
