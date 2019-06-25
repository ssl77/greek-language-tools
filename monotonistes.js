/*jshint esversion: 6 */
function monotonistes() {
    try {
        let str = document.getElementById("mytext4").value.trim().replace(/[ἄἅἆἇἃἂὰᾶᾷ]/g, "ά").replace(/[ἀἁᾳ]/g, "α").replace(/[ἔἕἓἒὲ]/g, "έ").replace(/[ἐἑ]/g, "ε").replace(/[ὄὅὂὃὸ]/g, "ό").replace(/[ὀὁ]/g, "ο").replace(/[ἤἥἦἧῆἢἣὴῇ]/g, "ή").replace(/[ἠἡῃ]/g, "η").replace(/[ἴἵἶἷῖἲἳὶ]/g, "ί").replace(/[ἰἱ]/g, "ι").replace(/[ὕὔὓὒῦὖὗ]/g, "ύ").replace(/[ὑὐ]/g, "υ").replace(/[ὤὥὦὧῶὢὣὼῷ]/g, "ώ").replace(/[ὠὡ]/g, "ω").replace(/[ἌἍἎἏἊἋ]/g, "Ά").replace(/[ἈἉΑ]/g, "Α").replace(/[ἜἝἚἛ]/g, "Έ").replace(/[ἘἙΕ]/g, "Ε").replace(/[ὌὍὊὋ]/g, "Ό").replace(/[ὈὉΟ]/g, "Ο").replace(/[ἬἭἮἯἪἫᾞᾟ]/g, "Ή").replace(/[ἨἩΗ]/g, "Η").replace(/[ἸἹΙ]/g, "Ι").replace(/[᾽ΥὙΥ]/g, "Υ").replace(/[ὬὭὮὯὬὫᾮᾯ]/g, "Ώ").replace(/[ὨὩΩ]/g, "Ω").replace(/Ῥ/g, "Ρ").replace(/ῥ/g, "ρ").replace("<", "&lt").replace(">", "&gt");

        document.getElementById("testmono").innerHTML = monosyllabesLexeis(str); //χωρίς τις μονοσύλλαβες βάζω μόνο το str στην έξοδο


    } catch (err) { document.getElementById("errorP").innerHTML = err.message; }

}

function monosyllabesLexeis(str) {
    //monosyllabes lexeis function
    let words = str.match(/[Ά-ώἀ-ῼA-z]+/g);
    let monosyllabes = [];
    let neesmonosyllabes = [];

    for (let v = 0; v < words.length; v++) {
        let newword = '';

        let matches = words[v].match(/[αειουωηάέίόύώή]/gi);
        if (matches == null) { continue; }
        if (matches.length > 2) { continue; }
        if (matches.length === 2 && matches[1] === "ί") {
            newword = words[v].replace('ί', 'ι');
            
        } else
        if (matches.length === 2 && matches[1] === "ύ") {
            newword = words[v].replace('ύ', 'υ');
            
        } else
        if (matches.length === 1) {
            if (matches[0] === "ί") {
                newword = words[v].replace("ί", "ι");
            } else
            if (matches[0] === "ά") {
                newword = words[v].replace('ά', 'α');
            } else
            if (matches[0] === "έ") {
                newword = words[v].replace('έ', 'ε');
            } else
            if (matches[0] === "ό") {
                newword = words[v].replace('ό', 'ο');
            } else
            if (matches[0] === "ύ") {
                newword = words[v].replace('ύ', 'υ');
            } else
            if (matches[0] === "ώ") {
                newword = words[v].replace('ώ', 'ω');
            } else
            if (matches[0] === "ή") {
                newword = words[v].replace('ή', 'η');
            } else { continue; }
            
        } else

        { continue; }

        monosyllabes.push(words[v]);
        neesmonosyllabes.push(newword);
    }

    let newstring = "str";
    for (let i = 0; i < monosyllabes.length; i++) {
        newstring += `.replace("${monosyllabes[i]}", "${neesmonosyllabes[i]}")`;
    }
    let news = eval(newstring);
    return news;

}
