import CLI from '../data/cards/preparation/CLI.json'
import TextEditor from '../data/cards/preparation/TextEditor'
import Git from '../data/cards/preparation/Git'
import CLang from '../data/cards/preparation/CLang'

export default function SelectCard(page, card) {
    let result;
    switch (page)
    {
        case "CLI":
            result = CLI;
            break;
        case "TextEditor":
            result = TextEditor;
            break;
        case "Git":
            result = Git;
            break;
        case "CLang":
            result = CLang;
            break;
        default:
            result = "Something broke."
            break;
    }
    return result[card];
}
