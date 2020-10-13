import React from "react";

//  This pattern/flow for this Card component works like this:
//  There are three files, *Card* component that generates the card,
//  functional *SelectCard* component that picks card from a
//  *JSON/JS object* file that contains all the data/content to be displayed.
//
//  Might change to JSON, but currently JS file, an array with a bunch of
//  objects.
//
//  Page imports Card component and SelectCard component.
//  Card accepts data prop from SelectCard.
//  SelectCard returns the content from the Data file.
//
//  *<Card cardData={SelectCard("PageCategory", array, card)}/>*

export default function Card(props) {
    console.log("LOL YOU FORGOT TO ADD ARGUMENT!", props);
    const fillCard = (props) => {
        return (
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
                            <p className="card-description">{props.text}</p>
                        </div>
                    </div>
                </a>
            </div>
        );
    };

    return <div>{fillCard(props.cardData)}</div>;
}
