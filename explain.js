console.log("Loaded Tone Extension. Double-click to add hover-over guidance.");

indicator_and_meanings = {
    // Please order these so that possible substrings follow the larger match
    // e.g. place "gen" first, and then "g"
    // otherwise, "g" will be extracted and "gen" will not be able to be matched
    "/gen": "genuine",
    "/g": "genuine",
    "/j": "joking",
    "/jk": "just kidding",
    "/hj": "half-joking",
    "/s": "sarcastic",
    "/srs": "serious",
    "/nsrs": "not serious",
    "/lh": "light hearted",
    "/pos": "positive",
    "/pc": "positive connotations",
    "/neg": "negative",
    "/nc": "negative connotations",
    "/neu": "neutral",
    "/p": "platonic",
    "/r": "romantic",
    "/c": "copypasta",
    "/l": "lyrics",
    "/ly": "lyrics",
    "/nm": "not mad",
    "/lu": "little upset",
    "/nbh": "nobody here (not talking about anybody here)",
    "/nsb": "not subtweeting (not talking about anybody here)",
    "/sx": "sexual",
    "/x": "sexual",
    "/nx": "non-sexual",
    "/nsx": "non-sexual",
    "/t": "teasing",
    "/ij": "inside joke",
    "/ref": "reference",
    "/m": "metaphorically",
    "/li": "literally",
    "/hyp": "hyperbole",
    "/f": "fake",
    "/th": "threat",
    "/cb": "clickbait",
    "/rh": "rhetorical",
    "/rt": "rhetorical",
}

function addClassAndTitleToSelection(sel, cls, title){
    if(sel.getRangeAt){ // Webkit browsers
        var range = sel.getRangeAt(0);
        var newNode = document.createElement("span");
        newNode.setAttribute('class', cls);
        newNode.setAttribute('title', title);
        range.surroundContents(newNode);
    } else { // Backup
        sel.pasteHTML(`<span title="{title}" class="${cls}>`+sel.htmlText+'</span>');
    }
}

f=function(){
    chosen = window.getSelection()
    selection_str = chosen.toString().trim();
    if (! selection_str.includes("/")){
        selection_str = "/" + selection_str
    }
    console.log("Double Clicked Selection:", selection_str);
    indicator = indicator_and_meanings[selection_str]
    if (indicator != undefined){
        console.log("Tone:", indicator)
        addClassAndTitleToSelection(chosen, 'tone_indicator_highlight', indicator)
    }

}
document.body.addEventListener('dblclick',f);
