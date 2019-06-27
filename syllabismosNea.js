/*jshint esversion: 6 */
function syllabismosNea(word) {
    
        const symfona = ["β", "γ", "δ", "ζ", "θ", "κ", "λ", "μ", "ν", "ξ", "π", "ρ", "σ", "ς", "τ", "φ", "χ", "ψ",
            "Β", "Γ", "Δ", "Ζ", "Θ", "Κ", "Λ", "Μ", "Ν", "Ξ", "Π", "Ρ", "Σ", "Τ", "Φ", "Χ", "Ψ"
        ];
        const foneenta = ["α", "ε", "ι", "ο", "υ", "ω", "η",
            "Α", "Ε", "Ι", "Ο", "Υ", "Ω", "Η", "ά", "έ", "ί", "ό", "ύ", "ώ", "ή",
            "Ά", "Έ", "Ί", "Ό", "Ύ", "Ώ", "Ή"
        ];
        const difthoggs = ["αι", "οι", "ει", "υι", "αυ", "ευ", "ου", "ηυ"];
        let w = word.toLowerCase();
        let syllabes = [];
        let syllabe = "";
        let Word = w.split("");

        let char = 0;

        /* Προθέσεις: protheseis=["εν", "έν", "εκ", "έκ", "εξ", "έξ","εισ", "είσ", 
        "συν", "σύν", "προσ", "πρόσ", "υπερ", "υπέρ"]*/
        if (Word.length > 2) {
            if ((Word[0] === "ε" | Word[0] === "έ") && (Word[1] === "ν" | Word[1] === "κ" | Word[1] === "ξ")) {
                let sl = Word[0] + Word[1];
                syllabes.push(sl);
                char = 2;
            }
        }
        if (Word.length > 3) {
            if (Word[0] === "ε" && (Word[1] === "ι" | Word[1] === "ί") && Word[2] === "σ") {
                let sl = Word[0] + Word[1] + Word[2];
                syllabes.push(sl);
                char = 3;
            }
        }
        if (Word.length > 3) {
            if (Word[0] === "σ" && (Word[1] === "υ" | Word[1] === "ύ") && Word[2] === "ν") {
                let sl = Word[0] + Word[1] + Word[2];
                syllabes.push(sl);
                char = 3;
            }
        }
        if (Word.length > 4) {
            if (Word[0] === "π" && Word[1] === "ρ" && (Word[2] === "ο" | Word[2] === "ό") && Word[3] === "σ") {
                let sl = Word[0] + Word[1] + Word[2] + Word[3];
                syllabes.push(sl);
                char = 4;
            }
        }
        if (Word.length > 4) {
            if (Word[0] === "υ" && Word[1] === "π" && (Word[2] === "ε" | Word[2] === "έ") && Word[3] === "ρ") {
                let sl = Word[0];
                syllabes.push(sl);
                sl = Word[1] + Word[2] + Word[3];
                syllabes.push(sl);
                char = 4;
            }
        }

        //συλλαβες-syllabes
        for (; char < Word.length; char++) {

            //τελικά σύμφωνα
            if (char != 0 && Word[char] === "ς") {
                if (syllabe === "") {
                    let lastIndex = syllabes.length - 1;
                    let sl = syllabes[lastIndex] + "ς";
                    syllabes.pop();
                    syllabes.push(sl);
                    break;
                } else {
                    let lastIndex = syllabes.length - 1;
                    syllabe += "ς";
                    let sl = syllabes[lastIndex] + syllabe;
                    syllabes.pop();
                    syllabes.push(sl);
                    syllabe = "";
                    break;
                }
            }
            if (Word[char] === "ν" && char === Word.length - 1) {
                if (syllabe === "") {
                    let lastIndex = syllabes.length - 1;
                    let sl = syllabes[lastIndex] + "ν";
                    syllabes.pop();
                    syllabes.push(sl);
                    break;
                } else {
                    let lastIndex = syllabes.length - 1;
                    syllabe += "ν";
                    let sl = syllabes[lastIndex] + syllabe;
                    syllabes.pop();
                    syllabes.push(sl);
                    syllabe = "";
                    break;
                }
            }
            if (Word[char] === "ρ" && char === Word.length - 1) {
                if (syllabe === "") {
                    let lastIndex = syllabes.length - 1;
                    let sl = syllabes[lastIndex] + "ρ";
                    syllabes.pop();
                    syllabes.push(sl);
                    break;
                } else {
                    let lastIndex = syllabes.length - 1;
                    syllabe += "ρ";
                    let sl = syllabes[lastIndex] + syllabe;
                    syllabes.pop();
                    syllabes.push(sl);
                    syllabe = "";
                    break;
                }
            }
            if (Word[char] === "ξ" && char === Word.length - 1) {
                if (syllabe === "") {
                    let lastIndex = syllabes.length - 1;
                    let sl = syllabes[lastIndex] + "ξ";
                    syllabes.pop();
                    syllabes.push(sl);
                    break;
                } else {
                    let lastIndex = syllabes.length - 1;
                    syllabe += "ξ";
                    let sl = syllabes[lastIndex] + syllabe;
                    syllabes.pop();
                    syllabes.push(sl);
                    syllabe = "";
                    break;
                }
            }

            if (Word[char] === "ψ" && char === Word.length - 1) {
                if (syllabe === "") {
                    let lastIndex = syllabes.length - 1;
                    let sl = syllabes[lastIndex] + "ψ";
                    syllabes.pop();
                    syllabes.push(sl);
                    break;
                } else {
                    let lastIndex = syllabes.length - 1;
                    syllabe += "ψ";
                    let sl = syllabes[lastIndex] + syllabe;
                    syllabes.pop();
                    syllabes.push(sl);
                    syllabe = "";
                    break;
                }
            }

            //δίφθογγοι
            if (Word[char] != 0 && Word[char] === "ι" && (Word[char - 1] === "α" | Word[char - 1] === "ε" | Word[char - 1] === "ο" | Word[char - 1] === "υ")) {
                let lastIndex = syllabes.length - 1;
                let sl = syllabes[lastIndex] + "ι";
                syllabes.pop();
                syllabes.push(sl);
                continue;
            }
            if (Word[char] != 0 && Word[char] === "ί" && (Word[char - 1] === "α" | Word[char - 1] === "ε" | Word[char - 1] === "ο" | Word[char - 1] === "υ")) {
                let lastIndex = syllabes.length - 1;
                let sl = syllabes[lastIndex] + "ί";
                syllabes.pop();
                syllabes.push(sl);
                continue;
            }
            if (Word[char] != 0 && Word[char] === "υ" && (Word[char - 1] === "α" | Word[char - 1] === "ε" | Word[char - 1] === "ο" | Word[char - 1] === "η")) {
                let lastIndex = syllabes.length - 1;
                let sl = syllabes[lastIndex] + "υ";
                syllabes.pop();
                syllabes.push(sl);
                continue;
            }
            if (Word[char] != 0 && Word[char] === "ύ" && (Word[char - 1] === "α" | Word[char - 1] === "ε" | Word[char - 1] === "ο" | Word[char - 1] === "η")) {
                let lastIndex = syllabes.length - 1;
                let sl = syllabes[lastIndex] + "ύ";
                syllabes.pop();
                syllabes.push(sl);
                continue;
            }

            //φωνήεντα
            for (let v = 0; v < foneenta.length; v++) {
                if (Word[char] === foneenta[v]) {
                    if (char === 0) { syllabes.push(Word[char]); break; } else
                    if (char > 0 && syllabe === "") { syllabes.push(Word[char]); break; } else
                    if (char > 0 && syllabe !== "") {
                        syllabe += Word[char];
                        syllabes.push(syllabe);
                        syllabe = "";
                        break;
                    }
                }
            }

            //σύμφωνα
            for (let s = 0; s < symfona.length; s++) {
                if (Word[char] === symfona[s]) {
                    syllabe += Word[char];
                    break;
                }
            }
        }

        //τελικά γράμματα (σύμφωνα) μη γνήσιων ελληνικών λέξεων
        if (syllabe !== "") {
            let lastIndex = syllabes.length - 1;

            let sl = syllabes[lastIndex] + syllabe;
            syllabes.pop();
            syllabes.push(sl);
        }
        //μη χωριζόμενοι χαρακτήρες
        let meΧorizomena = ["βγ", "βδ", "βλ", "βρ", "γδ", "γκ", "γλ", "γν", "γρ", "δρ",
            "θλ", "θμ", "θν", "θρ", "κβ", "κλ", "κρ", "κτ", "μν", "μπ", "ντ", "πθ", "πλ", "πν", "πρ", "πτ",
            "σβ", "σθ", "σκ", "σλ", "σμ", "σν", "σπ", "στ", "σφ", "σχ",
            "τλ", "τμ", "τν", "τρ", "τσ", "φλ", "φν", "φρ", "φτ",
            "χθ", "χλ", "χν", "χρ", "χτ"
        ];
        for (let y = 1; y < syllabes.length; y++) {
            let s1 = syllabes[y].charAt(0);
            let b1 = false;
            let b2 = false;
            let s2 = syllabes[y].charAt(1);

            if (s1 === "β" | s1 === "γ" | s1 === "δ" | s1 === "ζ" | s1 === "θ" | s1 === "κ" | s1 === "λ" | s1 === "μ" | s1 === "ν" | s1 === "ξ" | s1 === "π" | s1 === "ρ" | s1 === "σ" | s1 === "τ" | s1 === "φ" | s1 === "χ" | s1 === "ψ") { b1 = true; }
            if (s2 === "β" | s2 === "γ" | s2 === "δ" | s2 === "ζ" | s2 === "θ" | s2 === "κ" | s2 === "λ" | s2 === "μ" | s2 === "ν" | s2 === "ξ" | s2 === "π" | s2 === "ρ" | s2 === "σ" | s2 === "τ" | s2 === "φ" | s2 === "χ" | s2 === "ψ") { b2 = true; }

            if (syllabes[y].length > 2 && b1 === true && b2 === true) {
                let mX = false;
                for (let m = 0; m < meΧorizomena.length; m++) {
                    if (syllabes[y].charAt(0) + syllabes[y].charAt(1) === meΧorizomena[m]) {
                        mX = true;

                    }

                }
                if (mX === false) {
                    syllabes[y - 1] += syllabes[y].charAt(0);
                    let syl = syllabes[y];
                    let a = syllabes[y].charAt(0);
                    syllabes[y] = syl.replace(a, "");
                    break;
                }
            }
        }

        //συν-σύν
    if (syllabes.length > 2 && (syllabes[1] === "συ" | syllabes[1] === "σύ") && syllabes[2].charAt(0) === "ν") {
        syllabes[1] += "ν";
        let syl = syllabes[2];
        let a = syllabes[2].charAt(0);
        syllabes[2] = syl.replace(a, "");
    }
    if (syllabes.length > 3 && (syllabes[2] === "συ" | syllabes[1] === "σύ") && syllabes[3].charAt(0) === "ν") {
        syllabes[2] += "ν";
        let syl = syllabes[3];
        let a = syllabes[3].charAt(0);
        syllabes[3] = syl.replace(a, "");
    }
    //εκ-εν-εξ
    if (syllabes.length > 2 && (syllabes[1] === "ε" | syllabes[1] === "έ") && (syllabes[2].charAt(0) === "ν" | syllabes[2].charAt(0) === "κ" | syllabes[2].charAt(0) === "ξ")) {
        syllabes[1] += syllabes[2].charAt(0);
        let syl = syllabes[2];
        let a = syllabes[2].charAt(0);
        syllabes[2] = syl.replace(a, "");
    }
    if (syllabes.length > 3 && (syllabes[2] === "ε" | syllabes[2] === "έ") && (syllabes[3].charAt(0) === "ν" | syllabes[3].charAt(0) === "κ" | syllabes[3].charAt(0) === "ξ")) {
        syllabes[2] += syllabes[3].charAt(0);
        let syl = syllabes[3];
        let a = syllabes[3].charAt(0);
        syllabes[2] = syl.replace(a, "");
    }
        return syllabes.join("-");

}
