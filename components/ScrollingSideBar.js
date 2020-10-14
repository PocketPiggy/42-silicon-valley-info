import React from "react";
import {
    Link,
    DirectLink,
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller,
} from "react-scroll";

export default function ScrollingSideBar(props) {
    let kk = Object.values(props);
    let ok = [];
    //  O(reeeeeee)
    //  Prop comes in as object of an array of objects or object of
    //  Top of my head, easiest  way for this to work, might change later
    //  for more efficiency but only 10 items max so probably ok for this
    //  use case.

    kk.map((arr) => arr.map((item) => ok.push(item)));

    const showItems = () => {
        return (
            <>
                <ul className="sidebar-items">
                    {ok.map((item, i) => (
                        <li className="sidebar-item" key={`${item}-${i}`}>
                            <Link
                                activeClass="active"
                                className={"block-" + item["stop"].toString()}
                                to={"block-" + item["stop"].toString()}
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </>
        );
    };

    return <div id="scrolling-sidebar">{showItems(props.data)}</div>;
}
