import DuckDuckGoBot from "./DuckDuckGoBot";

export default class DuckDuckGoNoAIBot extends DuckDuckGoBot {
    get_search_input() {
        return document.querySelector('#searchbox_input, input[name="q"], input[type="search"]');
    }
}