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
//
//  Decided against not using ternary with two different cards because
//  I'm not comfortable with CSS enough yet to delegate seperate CSS on
//  pages to work flawlessly.

export default function Card(props) {
    const fillCard = (props) => {
        return (
            <>
                {/*}
                    For smaller cards specifically on preparation pages.
                {*/}
                {"aHref" in props ? (
                    <div className="card-container">
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
                                    <p className="card-description">
                                        {props.text}
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                ) : (
                    //  For larger wider cards on sources, prep, home pages
                    <div className="f-card-container">
                        <div className="f-card-content">

                            <div className="hemi-1 vl">
                                <div className="f-card-img">
                                    <img src={props.imgSrc} alt={props.alt} />
                                </div>
                            </div>

                            <div className="hemi-2">
                                <div className="f-card-title">
                                    <p className="f-card-title">
                                        {props.title}
                                    </p>
                                </div>
                                <hr className="card-text-seperator" />
                                <div className="f-card-description">
                                    <p className="f-card-description">
                                        {props.text}
                                    </p>
                                </div>
                                <div className="f-card-link">
                                    <Link href={props.link} passHref>
                                        <Button
                                            variant="primary"
                                            className="btn-next"
                                        >
                                            Read more
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </>
        );
    };

    return <div>{fillCard(props.cardData)}</div>;
}
