import Before from '../pages/Preparation/before.json'

export default function SelectScroll(scroll) {
    let result;
    switch (scroll)
    {
        case "Before":
            result = Before;
            break;
        default:
            result = "Something broke."
            break;
    }
    return result;
}
