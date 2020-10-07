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
    console.log("LOL YOU FORGOT TO ADD ARGUMENT!", props)
    const fillCard = (props) => {
        return (
            <div className="card-container">
                <div className="card-content">
                    <span className="card-img">
                        <img src={props.imgSrc} alt={props.alt} />
                    </span>
                    <span className="card-title">
                        <p className="card-title">{props.title}</p>
                    </span>
                    <hr className="card-text-seperator" />
                    <span className="card-description">
                        <p className="card-description">{props.description}</p>
                    </span>
                    <span className="card-link">
                        <a
                            href={props.link}
                            target="blank"
                            rel="noopener noreferrer"
                            className="card-link"
                        >
                            {props.linkIcon}
                        </a>
                    </span>
                </div>
            </div>
        );
    };

    return (<div>{fillCard(props.cardData)}</div>);
}
