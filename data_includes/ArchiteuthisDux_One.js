

// Do show progress bar (fine!!)
var showProgressBar = true;

// Main shuffleSequence definition
var shuffleSequence = seq(
    'consent',
    'setcounter',
    'intro',
    'shared-intro',
    sepWith("timeoutSep", rshuffle(startsWith('ATTRAGREEROMANIAN'),startsWith('filler'))),
     'debrief');

// Using modified controller coded by Ethan Poole (Umass, 2017)
// Disallows use of mouse for responses.
var DS = 'EPDashedSentence';

//  Set the Prolific Academic Completion URL
var sendingResultsMessage = "Vă rugăm să aşteptaţi. Răspunsurile dumneavoastră se trimit serverului."; 
var completionMessage = "Mulţumim pentru participare!"; 
var completionErrorMessage = "Eroare în trimiterea răspunsurilor dumneavoastră către server"; 

// Controller settings.
var defaults = [
    "QuestionAlt", {
        hasCorrect: 0,
        randomOrder: ['f','j'],
        presentHorizontally: true
},
"EPDashedSentence", {
    mode: 'self-paced reading',
    display: 'in place'
}
];

// Add breaks every 24 items
function modifyRunningOrder(ro)
{
    for (var i = 0; i < ro.length; ++i)
    {
        if (i % 24 == 1
            && i > 23
            && i < 250)
        {
            ro[i].push(new DynamicElement(
                "Message",
                {html: "<p>Vă rugăm să luaţi o mică pauză. Apăsaţi orice tastă când sunteţi gata să începeţi din nou.</p>", transfer: "keypress"},
            true));
            ro[i].push(new DynamicElement(
                "Separator",
                {transfer: 4000, normalMessage: "Atenţie! Primul fragment de propoziţie din acest set va apărea pe ecran în curând."},
            true));
        }
    }
    return ro;
}

// Items array.
var items = [

["consent", "Form", {consentRequired: true, html: {include: "consent.html"}}],
 ["setcounter", "__SetCounter__", { }],
["intro", "Form", {consentRequired: true, html: {include: "intro.html"}}],
["debrief", "Form", {consentRequired: true, html: {include: "debrief.html"}}],

['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro1.html"}}],

['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro2.html"}}],

['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro3.html"}}],


['shared-intro', Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Răspuns greşit. Vă rugăm să citiți cu atenție."}, DS, {s: "Această propoziţie e menită să vă obişnuiască cu stilul de lectură."}],
['shared-intro', Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Răspuns greşit. Vă rugăm să citiți cu atenție."}, DS, {s: "Această propoziţie este un pic mai complicată decȃt propoziţia pe care aţi citit-o mai înainte."}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Cum vi s-a părut?"],
                           ["p", "Citiți cu atenție, avȃnd grijă să înțelegeți fiecare cuvȃnt. Hai să mai exersăm un pic."]
                         ]}],

['shared-intro', Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Răspuns greşit. Vă rugăm să citiți cu atenție."}, DS, {s: "La bal, prinţul a valsat frumos şi a zȃmbit prinţesei."},"QuestionAlt", {q: "Cine a zȃmbit?", as: ['Prinţul','Prinţesa']}],
['shared-intro', Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Răspuns greşit. Vă rugăm să citiți cu atenție."}, DS, {s: "Iepurii au alergat mult aseară."}],
['shared-intro', Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Răspuns greşit. Vă rugăm să citiți cu atenție."}, DS, {s: "Miruna a stat toată noaptea cu fiul ei."},"QuestionAlt", {q: "Cine a stat toată noaptea cu fiul ei?", as: ['Miruna','Marina']}],
['shared-intro', Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Răspuns greşit. Vă rugăm să citiți cu atenție."}, DS, {s: "Barista a pregătit un latte fără niciun chef şi nici măcar nu a făcut vreun design."}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Bun, gata cu exersatul! Apăsaţi orice tastă când sunteţi gata să începeţi."]
                        ]}],

['shared-intro',"Separator",{transfer: 4000, normalMessage: "Atenţie! Prima propoziţie din acest set va apărea pe ecran în curând."}],

["timeoutSep", Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Răspuns greşit. Vă rugăm să citiți cu atenție."}],

//// Shared experimental items + fillers

[["ATTRAGREEROMANIAN-match2",1],DS, {s:" Cărţile de lângă voi mereu au un farmec aparte." },"QuestionAlt", {q: "Cine/ Ce are un farmec aparte?", as: ["Cărţile","Voi"]}],
[["ATTRAGREEROMANIAN-match3",1],DS, {s:" Cărţile de lângă ei mereu au un farmec aparte."}, "QuestionAlt", {q: "Cine/ Ce are un farmec aparte?", as: ["Cărţile","Ei"]}],
[["ATTRAGREEROMANIAN-mismatch2",1],DS, {s:"Cărţile de lângă voi mereu aveţi un farmec aparte."}, "QuestionAlt", {q: "Cine/ Ce are un farmec aparte?", as: ["Cărţile","Voi"]}],
[["ATTRAGREEROMANIAN-mismatch3",1],DS, {s:"Cărţile de lângă ei mereu aveţi un farmec aparte."}, "QuestionAlt", {q: "Cine/ Ce are un farmec aparte?", as: ["Cărţile","Ei"]}],
[["ATTRAGREEROMANIAN-match2",2],DS, {s:"Viorile de lângă voi mereu au arcuş maro deschis."},"QuestionAlt", {q: "Cine/ce are arcuș maro deschis?", as: ["Viorile","Voi"]}],
[["ATTRAGREEROMANIAN-match3",2],DS, {s:"Viorile de lângă ele mereu au arcuş maro deschis."}, "QuestionAlt", {q: "Cine/ce are arcuș maro deschis?", as: ["Viorile","Ele"]}],
[["ATTRAGREEROMANIAN-mismatch2",2],DS, {s:"Viorile de lângă voi mereu aveţi arcuş maro deschis."}, "QuestionAlt", {q: "Cine/ce are arcuș maro deschis?", as: ["Viorile","Voi"]}],
[["ATTRAGREEROMANIAN-mismatch3",2],DS, {s:"Viorile de lângă ele mereu aveţi arcuş maro deschis."}, "QuestionAlt", {q: "Cine/ce are arcuș maro deschis?", as: ["Viorile","Ele"]}],
[["ATTRAGREEROMANIAN-match2",3],DS, {s:"Rochiile de lângă voi uneori au dantelă roz delicată. "},"QuestionAlt", {q: "Cine/ce are dantelă roz delicată?", as: ["Rochiile","Voi"]}],
[["ATTRAGREEROMANIAN-match3",3],DS, {s:"Rochiile de lângă ei uneori au dantelă roz delicată."}, "QuestionAlt", {q: "Cine/ce au dantelă roz delicată?", as: ["Rochiile","Ei"]}],
[["ATTRAGREEROMANIAN-mismatch2",3],DS, {s:"Rochiile de lângă voi uneori aveţi dantelă roz delicată."},  "QuestionAlt", {q: "Cine/ce au dantelă roz delicată?", as: ["Rochiile","Voi"]}],
[["ATTRAGREEROMANIAN-mismatch3",3],DS, {s:" Rochiile de lângă ei uneori aveţi dantelă roz delicată."},  "QuestionAlt", {q: "Cine/ce au dantelă roz delicată?", as: ["Rochiile", "Ei"]}],
[["ATTRAGREEROMANIAN-match2",4],DS, {s:"Dulceţurile de lângă voi uneori au zahăr brun fin."},"QuestionAlt", {q: "Cine/ce are zahăr brun fin?", as: ["Dulcețurile","Voi"]}],
[["ATTRAGREEROMANIAN-match3",4],DS, {s:"Dulceţurile de lângă ele uneori au zahăr brun fin."},"QuestionAlt", {q: "Cine/ce are zahăr brun fin?", as: ["Dulcețurile","Ele"]}],
[["ATTRAGREEROMANIAN-mismatch2",4],DS, {s:"Dulceţurile de lângă voi uneori aveţi zahăr brun fin."},"QuestionAlt", {q: "Cine/ce are zahăr brun fin?", as: ["Dulcețurile","Voi"]}],
[["ATTRAGREEROMANIAN-mismatch3",4],DS, {s:"Dulceţurile de lângă ele uneori aveţi zahăr brun fin."},"QuestionAlt", {q: "Cine/ce are zahăr brun fin?", as: ["Dulcețurile","Ele"]}],


[["ATTRAGREEROMANIAN-match2",5],DS, {s:"Pisicile de lângă voi adesea au mişcări unduitoare elegante."},"QuestionAlt", {q: "Cine are mişcări unduitoare elegante?", as: ["Pisicile","Voi"]}],
[["ATTRAGREEROMANIAN-match3",5],DS, {s:"Pisicile de lângă ei adesea au mişcări unduitoare elegante."},"QuestionAlt", {q: "Cine are mişcări unduitoare elegante?", as: ["Pisicile","Ei"]}],
[["ATTRAGREEROMANIAN-mismatch2",5],DS, {s:"Pisicile de lângă voi adesea aveţi mişcări unduitoare elegante."},"QuestionAlt", {q: "Cine are mişcări unduitoare elegante?", as: ["Pisicile","Voi"]}],
[["ATTRAGREEROMANIAN-mismatch3",5],DS, {s:"Pisicile de lângă ei adesea aveţi mişcări unduitoare elegante."},"QuestionAlt", {q: "Cine are mişcări unduitoare elegante?", as: ["Pisicile","Ei"]}],
[["ATTRAGREEROMANIAN-match2",6],DS, {s:"Învăţătoarele de lângă voi adesea au succes răsunător la ore."},"QuestionAlt", {q: "Cine are succes răsunător la ore?", as: ["Învățătoarele","Voi"]}],
[["ATTRAGREEROMANIAN-match3",6],DS, {s:"Învăţătoarele de lângă ele adesea au succes răsunător la ore."},"QuestionAlt", {q: "Cine are succes răsunător la ore?", as: ["Învățătoarele","Ele"]}],
[["ATTRAGREEROMANIAN-mismatch2",6],DS, {s:"Învăţătoarele de lângă voi adesea aveţi succes răsunător la ore."},"QuestionAlt", {q: "Cine are succes răsunător la ore?", as: ["Învățătoarele","Voi"]}],
[["ATTRAGREEROMANIAN-mismatch3",6],DS, {s:"Învăţătoarele de lângă ele adesea aveţi succes răsunător la ore."},"QuestionAlt", {q: "Cine are succes răsunător la ore?", as: ["Învățătoarele","Ele"]}],
[["ATTRAGREEROMANIAN-match2",7],DS, {s:"Vânzătoarele de lângă voi  mereu au mulţi bani de hârtie."},"QuestionAlt", {q: "Cine are mulţi bani de hârtie?", as: ["Vânzătoarele","Voi"]}],
[["ATTRAGREEROMANIAN-match3",7],DS, {s:"Vânzătoarele de lângă ei mereu au mulţi bani de hârtie."}, "QuestionAlt", {q: "Cine are mulţi bani de hârtie?", as: ["Vânzătoarele","Ei"]}],
[["ATTRAGREEROMANIAN-mismatch2",7],DS, {s:"Vânzătoarele de lângă voi mereu aveţi mulţi bani de hârtie."},"QuestionAlt", {q: "Cine are mulţi bani de hârtie?", as: ["Vânzătoarele","Voi"]}],
[["ATTRAGREEROMANIAN-mismatch3",7],DS, {s:"Vânzătoarele de lângă ei mereu aveţi mulţi bani de hârtie."},"QuestionAlt", {q: "Cine are mulţi bani de hârtie?", as: ["Vânzătoarele","Ei"]}],
[["ATTRAGREEROMANIAN-match2",8],DS, {s:"Oile de lângă voi adesea au lapte foarte bun."},"QuestionAlt", {q: "Cine are lapte foarte bun?", as: ["Oile","Voi"]}],
[["ATTRAGREEROMANIAN-match3",8],DS, {s:"Oile de lângă ele adesea au lapte foarte bun."},"QuestionAlt", {q: "Cine are lapte foarte bun?", as: ["Oile","Ele"]}],
[["ATTRAGREEROMANIAN-mismatch2",8],DS, {s:"Oile de lângă voi adesea aveţi lapte foarte bun."},"QuestionAlt", {q: "Cine are lapte foarte bun?", as: ["Oile","Voi"]}],
[["ATTRAGREEROMANIAN-mismatch3",8],DS, {s:"Oile de lângă ele adesea aveţi lapte foarte bun."},"QuestionAlt", {q: "Cine are lapte foarte bun?", as: ["Oile","Ele"]}],

[["ATTRAGREEROMANIAN-match2",9],DS, {s:"Cuţitele de lângă voi uneori au viruşi letali numeroşi."},"QuestionAlt", {q: "Cine/ce are viruşi letali numeroşi?", as: ["Cuţitele","Voi"]}],
[["ATTRAGREEROMANIAN-match3",9],DS, {s:"Cuţitele de lângă ei uneori au viruşi letali numeroşi."},"QuestionAlt", {q: "Cine/ce are viruşi letali numeroşi?", as: ["Cuţitele","Ei"]}],
[["ATTRAGREEROMANIAN-mismatch2",9],DS, {s:" Cuţitele de lângă voi uneori aveţi viruşi letali numeroşi."},"QuestionAlt", {q: "Cine/ce are viruşi letali numeroşi?", as:["Cuţitele","Voi"]}],
[["ATTRAGREEROMANIAN-mismatch3",9],DS, {s:" Cuţitele de lângă ei uneori aveţi viruşi letali numeroşi."},"QuestionAlt", {q: "Cine/ce are viruşi letali numeroşi?", as: ["Cuţitele","Ei"]}],
[["ATTRAGREEROMANIAN-match2",10],DS, {s:"Tablourile de lângă voi uneori au vizitatori preşcolari curioşi."},"QuestionAlt", {q: "Cine/ce are vizitatori preşcolari curioşi? ", as: ["Tablourile","Voi"]}],   
[["ATTRAGREEROMANIAN-match3",10],DS, {s:"Tablourile de lângă ele uneori au vizitatori preşcolari curioşi."},"QuestionAlt", {q: "Cine/ce are vizitatori preşcolari curioşi?", as: ["Tablourile","Ele"]}],     
[["ATTRAGREEROMANIAN-mismatch2",10],DS, {s:"Tablourile de lângă voi uneori aveţi vizitatori preşcolari curioşi."},"QuestionAlt", {q: "Cine/ce are vizitatori preşcolari curioşi?", as: ["Tablourile","Voi"]}],    
[["ATTRAGREEROMANIAN-mismatch3",10],DS, {s:"Tablourile de lângă ele uneori aveţi vizitatori preşcolari curioşi."},"QuestionAlt", {q: "Cine/ce are vizitatori preşcolari curioşi?", as: ["Tablourile","Ele"]}], 
[["ATTRAGREEROMANIAN-match2",11],DS, {s:"Nisipurile de lângă voi adesea au calciu organic granular."}, "QuestionAlt", {q: "Cine/ce are calciu organic granular?", as: ["Nisipurile","Voi"]}],  
[["ATTRAGREEROMANIAN-match3",11],DS, {s:"Nisipurile de lângă ei adesea au calciu organic granular."}, "QuestionAlt", {q: "Cine/ce are calciu organic granular?", as: ["Nisipurile","Ei"]}], 
[["ATTRAGREEROMANIAN-mismatch2",11],DS, {s:"Nisipurile de lângă voi adesea aveţi calciu."}, "QuestionAlt", {q: "Cine/ce are calciu organic granular?", as: ["Nisipurile","Voi"]}], 
[["ATTRAGREEROMANIAN-mismatch3",11],DS, {s:"Nisipurile de lângă ei adesea aveţi calciu."}, "QuestionAlt", {q: "Cine/ce are calciu organic granular?", as: ["Nisipurile","Ei"]}],   
[["ATTRAGREEROMANIAN-match2",12],DS, {s:"Piureurile de lângă voi mereu au piper roşu măcinat."},"QuestionAlt", {q: "Cine/ce are piper roşu măcinat?", as: ["Piureurile","Voi"]}],   
[["ATTRAGREEROMANIAN-match3",12],DS, {s:"Piureurile de lângă ele mereu au piper roşu măcinat."},"QuestionAlt", {q: "Cine/ce are piper roşu măcinat?", as: ["Piureurile","Ele"]}], 
[["ATTRAGREEROMANIAN-mismatch2",12],DS, {s:"Piureurile de lângă voi mereu aveţi piper roşu măcinat."},"QuestionAlt", {q: "Cine/ce are piper roşu măcinat?", as: ["Piureurile", "Voi"]}],   
[["ATTRAGREEROMANIAN-mismatch3",12],DS, {s:"Piureurile de lângă ele mereu aveţi piper roşu măcinat."},"QuestionAlt", {q: "Cine/ce are piper roşu măcinat?", as: ["Piureurile","Ele"]}],  


[["ATTRAGREEROMANIAN-match2",13],DS, {s:"Sufletele de lângă voi mereu au aripi de înger diafane."},"QuestionAlt", {q: "Cine/ce are aripi de înger diafane?", as: ["Sufletele","Voi"]}],     
[["ATTRAGREEROMANIAN-match3",13],DS, {s:"Sufletele de lângă ei mereu au aripi de înger diafane."},"QuestionAlt", {q: "Cine/ce are aripi de înger diafane?", as:["Sufletele","Ei"]}],  
[["ATTRAGREEROMANIAN-mismatch2",13],DS, {s:"Sufletele de lângă voi mereu aveţi aripi de înger diafane."}, "QuestionAlt", {q: "Cine/ce are aripi de înger diafane?", as: ["Sufletele","Voi"]}],      
[["ATTRAGREEROMANIAN-mismatch3",13],DS, {s:"Sufletele de lângă ei mereu aveţi aripi de înger diafane."}, "QuestionAlt", {q: "Cine/ce are aripi de înger diafane?", as: ["Sufletele","Ei"]}],  
[["ATTRAGREEROMANIAN-match2",14],DS, {s:"Mamiferele de lângă voi uneori au banane verzi necoapte."}, "QuestionAlt", {q: "Cine/ce are banane verzi necoapte?", as: ["Mamiferele","Voi"]}],   
[["ATTRAGREEROMANIAN-match3",14],DS, {s:"Mamiferele de lângă ele uneori au banane verzi necoapte."},"QuestionAlt", {q: "Cine/ce are banane verzi necoapte?", as: ["Mamiferele","Ele"]}],      
[["ATTRAGREEROMANIAN-mismatch2",14],DS, {s:"Mamiferele de lângă voi uneori aveţi banane verzi necoapte."},"QuestionAlt", {q: "Cine/ce are banane verzi necoapte?", as: ["Mamiferele","Voi"]}],     
[["ATTRAGREEROMANIAN-mismatch3",14],DS, {s:"Mamiferele de lângă ele uneori aveţi banane verzi necoapte."}, "QuestionAlt", {q: "Cine/ce are banane verzi necoapte?", as: ["Mamiferele","Ele"]}],  
[["ATTRAGREEROMANIAN-match2",15],DS, {s:"Macrourile de lângă voi adesea au icre rozalii pufoase."}, "QuestionAlt", {q: "Cine/ce are icre rozalii pufoase?", as: ["Macrourile","Voi"]}],   
[["ATTRAGREEROMANIAN-match3",15],DS, {s:"Macrourile de lângă ei adesea au icre rozalii pufoase."},"QuestionAlt", {q: "Cine/ce are icre rozalii pufoase?", as: ["Macrourile","Ei"]}],  
[["ATTRAGREEROMANIAN-mismatch2",15],DS, {s:"Macrourile de lângă voi adesea aveţi icre rozalii pufoase."}, "QuestionAlt", {q: "Cine/ce are icre rozalii pufoase?", as: ["Macrourile","Voi"]}],   
[["ATTRAGREEROMANIAN-mismatch3",15],DS, {s:"Macrourile de lângă ei adesea aveţi icre rozalii pufoase."},"QuestionAlt", {q: "Cine/ce are icre rozalii pufoase?", as: ["Macrourile","Ei"]}],    
[["ATTRAGREEROMANIAN-match2",16],DS, {s:"Animalele de lângă voi uneori au un entuziasm contagios."},"QuestionAlt", {q: "Cine/ce are un entuziasm contagios?", as: ["Animalele","Voi"]}],    
[["ATTRAGREEROMANIAN-match3",16],DS, {s:"Animalele de lângă ele uneori au un entuziasm contagios."},"QuestionAlt", {q: "Cine/ce are un entuziasm contagios?", as:["Animalele","Ele"]}],       
[["ATTRAGREEROMANIAN-mismatch2",16],DS, {s:"Animalele de lângă voi uneori aveţi un entuziasm contagios."},"QuestionAlt", {q: "Cine/ce are un entuziasm contagios?", as: ["Animalele","Voi"]}],    
[["ATTRAGREEROMANIAN-mismatch3",16],DS, {s:"Animalele de lângă ele uneori aveţi un entuziasm contagios."},"QuestionAlt", {q: "Cine/ce are un entuziasm contagios?", as: ["Animalele","Ele"]}],   


[["ATTRAGREEROMANIAN-match2",17],DS, {s:"Câinii de lângă voi adesea au o energie debordantă."},"QuestionAlt", {q: "Cine/ce are o energie debordantă?", as: ["Câinii","Voi"]}],    
[["ATTRAGREEROMANIAN-match3",17],DS, {s:"Câinii de lângă ei adesea au o energie debordantă."},"QuestionAlt", {q: "Cine/ce are o energie debordantă?", as: ["Câinii","Ei"]}],  
[["ATTRAGREEROMANIAN-mismatch2",17],DS, {s:"Câinii de lângă voi adesea aveţi o energie debordantă."},"QuestionAlt", {q: "Cine/ce are o energie debordantă?", as: ["Câinii","Voi"]}],    
[["ATTRAGREEROMANIAN-mismatch3",17],DS, {s:" Câinii de lângă ei adesea aveţi o energie debordantă."},"QuestionAlt", {q: "Cine/ce are o energie debordantă?", as: ["Câinii","Ei"]}],   
[["ATTRAGREEROMANIAN-match2",18],DS, {s:"Doctorii de lângă voi uneori au multă răbdare de fier."},"QuestionAlt", {q: "Cine/ce are multă răbdare de fier?", as: ["Doctorii","Voi"]}],   
[["ATTRAGREEROMANIAN-match3",18],DS, {s:"Doctorii de lângă ele uneori au multă răbdare de fier."},"QuestionAlt", {q: "Cine/ce are multă răbdare de fier?", as: ["Doctorii","Ele"]}],    
[["ATTRAGREEROMANIAN-mismatch2",18],DS, {s:"Doctorii de lângă voi uneori aveţi multă răbdare de fier."},"QuestionAlt", {q: "Cine/ce are multă răbdare de fier?", as: ["Doctorii","Voi"]}],  
[["ATTRAGREEROMANIAN-mismatch3",18],DS, {s:"Doctorii de lângă ele uneori aveţi multă răbdare de fier."},"QuestionAlt", {q: "Cine/ce are multă răbdare de fier?", as: ["Doctorii","Ele"]}],    
[["ATTRAGREEROMANIAN-match2",19],DS, {s:"Preoţii de lângă voi mereu au multă înţelepciune bătrânească."},"QuestionAlt", {q: "Cine/ce are multă înţelepciune bătrânească?", as: ["Preoţii","Voi"]}],
[["ATTRAGREEROMANIAN-match3",19],DS, {s:"Preoţii de lângă ei mereu au multă înţelepciune bătrânească."},"QuestionAlt", {q: "Cine/ce are multă înţelepciune bătrânească?", as: ["Preoţii","Ei"]}],
[["ATTRAGREEROMANIAN-mismatch2",19],DS, {s:"Preoţii de lângă voi mereu aveţi multă înţelepciune bătrânească."},"QuestionAlt", {q: "Cine/ce are multă înţelepciune bătrânească?", as: ["Preoţii","Voi"]}],
[["ATTRAGREEROMANIAN-mismatch3",19],DS, {s:"Preoţii de lângă ei mereu aveţi multă înţelepciune bătrânească."},"QuestionAlt", {q: "Cine/ce are multă înţelepciune bătrânească?", as: ["Preoţii","Ei"]}],
[["ATTRAGREEROMANIAN-match2",20],DS, {s:"Profesorii de lângă voi uneori au numeroase realizări mari."},"QuestionAlt", {q: "Cine/ce are numeroase realizări mari?", as: ["Profesorii","Voi"]}],
[["ATTRAGREEROMANIAN-match3",20],DS, {s:"Profesorul de lângă ele uneori au numeroase realizări mari."}, "QuestionAlt", {q: "Cine/ce are numeroase realizări mari?", as: ["Profesorii","Ele"]}], 
[["ATTRAGREEROMANIAN-mismatch2",20],DS, {s:"Profesorii de lângă voi uneori aveţi numeroase realizări mari."},"QuestionAlt", {q: "Cine/ce are numeroase realizări mari?", as: ["Profesorii","Voi"]}],
[["ATTRAGREEROMANIAN-mismatch3",20],DS, {s:" Profesorii de lângă ele uneori aveţi numeroase realizări mari."},"QuestionAlt", {q: "Cine/ce are numeroase realizări mari?", as: ["Profesorii","Ele"]}],
[["ATTRAGREEROMANIAN-match2",21],DS, {s:" Cârnaţii de lângă voi mereu au sare grunjoasă multă."},"QuestionAlt", {q: "Cine/ce are sare grunjoasă multă ?", as: ["Cârnaţii","Voi"]}],
[["ATTRAGREEROMANIAN-match3",21],DS, {s:" Cârnaţii de lângă ei mereu au sare grunjoasă multă."},"QuestionAlt", {q: "Cine/ce are sare grunjoasă multă?", as: ["Cârnaţii","Ei"]}],
[["ATTRAGREEROMANIAN-mismatch2",21],DS, {s:"Cârnaţii de lângă voi mereu aveţi sare grunjoasă multă."},"QuestionAlt", {q: "Cine/ce are sare grunjoasă multă?", as:["Cârnaţii","Voi"]}],
[["ATTRAGREEROMANIAN-mismatch3",21],DS, {s:"Cârnaţii de lângă ei mereu aveţi sare grunjoasă multă."},"QuestionAlt", {q: "Cine/ce are sare grunjoasă multă?", as:["Cârnaţii","Ei"]}],
[["ATTRAGREEROMANIAN-match2",22],DS, {s:"Buştenii de lângă voi mereu au rezistenţă de invidiat."},"QuestionAlt", {q: "Cine/ce are rezistenţă de invidiat?", as: ["Buştenii", "Voi"]}],
[["ATTRAGREEROMANIAN-match3",22],DS, {s:"Buştenii de lângă ele mereu au rezistenţă de invidiat."},"QuestionAlt", {q: "Cine/ce are rezistenţă de invidiat?", as: ["Buştenii", "Ele"]}],
[["ATTRAGREEROMANIAN-mismatch2",22],DS, {s:"Buştenii de lângă voi mereu aveţi rezistenţă de invidiat."},"QuestionAlt", {q: "Cine/ce are rezistenţă de invidiat?", as: ["Buştenii", "Voi"]}],
[["ATTRAGREEROMANIAN-mismatch3",22],DS, {s:"Buştenii de lângă ele mereu aveţi rezistenţă de invidiat."},"QuestionAlt", {q: "Cine/ce are rezistenţă de invidiat?", as: ["Buştenii", "Ele"]}],
[["ATTRAGREEROMANIAN-match2",23],DS, {s:"Nasturii de lângă voi adesea au aţă albastră groasă."},"QuestionAlt", {q: "Cine/ce are aţă albastră groasă?", as: ["Nasturii","Voi"]}],
[["ATTRAGREEROMANIAN-match3",23],DS, {s:"Nasturii de lângă ei adesea au aţă albastră groasă."},"QuestionAlt", {q: "Cine/ce are aţă albastră groasă?", as: ["Nasturii","Ei"]}],
[["ATTRAGREEROMANIAN-mismatch2",23],DS, {s:"Nasturii de lângă voi adesea aveţi aţă albastră groasă."},"QuestionAlt", {q: "Cine/ce are aţă albastră groasă?", as: ["Nasturii","Voi"]}],
[["ATTRAGREEROMANIAN-mismatch3",23],DS, {s:"Nasturii de lângă ei adesea aveţi aţă albastră groasă."},"QuestionAlt", {q: "Cine/ce are aţă albastră groasă?", as: ["Nasturii","Ei"]}],
[["ATTRAGREEROMANIAN-match2",24],DS, {s:"Sacii de lângă voi adesea au multe bancnote verzi."},"QuestionAlt", {q: "Cine/ce are multe bancnote verzi?", as: ["Sacii","Voi"]}],
[["ATTRAGREEROMANIAN-match3",24],DS, {s:"Sacii de lângă ele adesea au multe bancnote verzi."}, "QuestionAlt", {q: "Cine/ce are multe bancnote verzi?", as: ["Sacii","Ele"]}],
[["ATTRAGREEROMANIAN-mismatch2",24],DS, {s:"Sacii de lângă voi adesea aveţi multe bancnote verzi."},"QuestionAlt", {q: "Cine/ce are multe bancnote verzi?", as: ["Sacii","Voi"]}],
[["ATTRAGREEROMANIAN-mismatch3",24],DS, {s:"Sacii de lângă ele adesea aveţi multe bancnote verzi."},"QuestionAlt", {q: "Cine/ce are multe bancnote verzi?", as: ["Sacii","Ele"]}],



[["filler-twonounspluralcorrectchoice",25],DS, {s:"Fata pe care domnii o iubesc este frumoasă."}, "QuestionAlt", {q: "Cine iubeşte?", as: ["Domnii", "Fata"]}],
[["filler-twonounspluralcorrectchoice",26],DS, {s:"Cartea pe care fetele o citesc este interesantă. "},"QuestionAlt", {q: "Cine citeşte?", as: ["Fetele","Cartea"]}],
[["filler-twonounspluralcorrectchoice",27],DS, {s:"Pinguinul pe care copiii îl privesc este Apolodor."}],
[["filler-twonounspluralcorrectchoice",28],DS, {s:"Pisica pe care băieţii o lovesc este birmaneză. "}],
[["filler-twonounspluralcorrectchoice",29],DS, {s:"Veveriţa pe care bărbaţii o prind este maro. "}],
[["filler-twonounspluralcorrectchoice",30],DS, {s:"Lumina pe care oamenii o văd este verde. "}],
[["filler-twonounspluralcorrectchoice",31],DS, {s:"Casa pe care contabilii o construiesc este imensă. "}],
[["filler-twonounspluralcorrectchoice",32],DS, {s:"Mingea pe care sportivii o aleg este mare. "}],
[["filler-twonounspluralcorrectchoice",33],DS, {s:"Vinul pe care bucătarii îl beau este roşu."}],
[["filler-twonounspluralcorrectchoice",34],DS, {s:"Câinele pe care doctorii îl hrănesc este bolnav."}],
[["filler-twonounspluralcorrectchoice",35], DS, {s:"Poemul pe care tinerii îl spun este emoţionant."}],
[["filler-twonounspluralcorrectchoice",36],DS, {s:"Omul pe care animalele îl îndrăgesc este blând. "}]

,
 [["filler-twonounssingularcorrectchoice",37],DS, {s:"Vinurile pe care domnul le iubeşte sunt seci."}],
[["filler-twonounssingularcorrectchoice",38],DS, {s:"Scrisorile pe care fata le citeşte sunt lungi."}],
[["filler-twonounssingularcorrectchoice",39],DS, {s:"Girafele pe care copilul le priveşte sunt înalte."},"QuestionAlt", {q: "Cine priveşte?", as: ["Copilul", "Girafele"]}],
[["filler-twonounssingularcorrectchoice",40],DS, {s:"Motanii pe care bunicul îi adăposteşte sunt tigraţi."},"QuestionAlt", {q: "Cine adăposteşte?", as: ["Bunicul","Motanii"]}],
[["filler-twonounssingularcorrectchoice",41],DS, {s:"Şerpii pe care bărbatul îi striveşte sunt veninoşi."}],
[["filler-twonounssingularcorrectchoice",42],DS, {s:"Stelele pe care înţeleptul le urmăreşte sunt strălucitoare."}],
[["filler-twonounssingularcorrectchoice",43],DS, {s:"Barurile pe care pictorul le construieşte sunt artistice."}],
[["filler-twonounssingularcorrectchoice",44],DS, {s:"Păsările pe care colecţionarul le vede sunt impresionante."}],
[["filler-twonounssingularcorrectchoice",45],DS, {s:"Sucurile pe care chelnerul le bea sunt dulci."}],
[["filler-twonounssingularcorrectchoice",46],DS, {s:"Pisicile pe care doamna le îngrijeşte sunt slabe."}],
[["filler-twonounssingularcorrectchoice",47],DS, {s:"Cuvintele pe care preotul le rosteşte sunt înţelepte."}],
[["filler-twonounssingularcorrectchoice",48],DS, {s:"Câinii pe care pisica îi urăşte sunt răi."}]
,
 [["filler-coordination",49],DS, {s:"Femeia şi copilul beau mult suc."}],
[["filler-coordination",50],DS, {s:"Doctorul şi bolnavul plâng mult din cauza bolii."},"QuestionAlt", {q: "Cine plânge?", as: ["Doctorul şi bolnavul","Pacientul"]}],
[["filler-coordination",51],DS, {s:"Vulpoiul şi vulpea sar în aer foarte rapid."}],
[["filler-coordination",52],DS, {s:"Găina şi puiul ciugulesc firimituri adesea."},"QuestionAlt", {q: "Cine ciuguleşte?", as: ["Găina şi puiul","Puiul"]}],
[["filler-coordination",53],DS, {s:"Paharul şi sticla cad de pe birou uneori."}],
[["filler-coordination",54],DS, {s:"Oboseala şi plictisul ucid iubirea adesea."}],
[["filler-coordination",55],DS, {s:"Iubirea şi prietenia susţin moralul întotdeauna."}],
[["filler-coordination",56],DS, {s:"Căţelul şi pisica dorm după cină adesea."}],
 [["filler-coordination",57],DS, {s:"Cafeaua şi ceaiul au efecte laxative."}],
[["filler-coordination",58],DS, {s:"Trandafirul şi zambila miros foarte frumos."}],
[["filler-coordination",59],DS, {s:"Cartea şi caietul sunt pe masă mereu."}],
[["filler-coordination",60],DS, {s:"Papagalul şi băiatul vorbesc foarte mult unul cu altul."}]
,
[["filler-semanticchoice",61],DS, {s:"Lampa de lângă cartea verde se aprinde uşor."}],
[["filler-semanticchoice",62],DS, {s:"Fetiţa de lângă camera albastră dansează."}],
[["filler-semanticchoice",63],DS, {s:"Iepuraşul de lângă scaunul roşu doarme."}],
[["filler-semanticchoice",64],DS, {s:"Pasărea de lângă masa neagră cântă bine."}],
[["filler-semanticchoice",65],DS, {s:"Măgarul de lângă căţelul maro rage adesea. "},"QuestionAlt", {q: "Cine rage adesea?", as: ["Măgarul","Căţelul"]}],
[["filler-semanticchoice",66],DS, {s:"Papucii de lângă copiii bolnavi alunecă uşor."}],
[["filler-semanticchoice",67],DS, {s:"Hainele de lângă femeile zâmbăreţe cad mereu."}],
[["filler-semanticchoice",68],DS, {s:"Albinele de lângă portocalele stricate bȃzȃie prea tare."}],
[["filler-semanticchoice",69],DS, {s:"Râul de lângă pădurea frumoasă curge adesea vara."}],
[["filler-semanticchoice",70],DS, {s:"Urşii de lângă prinţesele minunate hibernează."},"QuestionAlt", {q: "Cine hibernează?", as: ["Ursul","Prinţesele"]}],
[["filler-semanticchoice",71],DS, {s:"Florile de lângă sticlele albastre se ofilesc mereu."}],
[["filler-semanticchoice",72],DS, {s:"Calculatoarele de lângă copiii năzdrăvani se strică uneori."}],

[["filler-onenounplagreement",73], DS, {s:"Iepuraşii fricoşi se ascund de oameni adesea."}, "QuestionAlt", {q: "Cine se ascunde de oameni adesea?", as: ["Iepuraşii","Iepuraşul"]}],
[["filler-onenounplagreement",74], DS, {s:"Cutremurele mari distrug locuinţe tot timpul."}],
[["filler-onenounplagreement",75], DS, {s:"Grădinile japoneze au trandafiri adesea."}],
[["filler-onenounplagreement",76], DS, {s:"Fetele seducătoare atrag admiratori adesea."},"QuestionAlt", {q: "Cine atrage admiratori adesea?", as: ["Fetele","Fata"]}],
[["filler-onenounplagreement",77], DS, {s:"Muzicienii creativi compun melodii deosebite."}],
[["filler-onenounplagreement",78], DS, {s:"Rănile sufleteşti dor foarte tare."}],
[["filler-onenounplagreement",79], DS, {s:"Paharele colorate conţin suc de portocale."}],
[["filler-onenounplagreement",80], DS, {s:"Hamsterii curioşi apar în bucătărie adesea."}],
[["filler-onenounplagreement",81], DS, {s:"Elevii cuminţi doresc note mari."}],
[["filler-onenounplagreement",82], DS, {s:"Parfumurile franţuzeşti miros incredibil de frumos."}],
[["filler-onenounplagreement",83], DS, {s:"Bunicii iubitori dau multe cadouri nepoţilor lor."}],
[["filler-onenounplagreement",84], DS, {s:"Cheile verzi deschid multe uşi."}],

[["filler-onenounsgagreement",85],DS, {s:"Fata şatenă se ascunde de prieteni adesea."}],
[["filler-onenounsgagreement",86],DS, {s:"Pisica năzdrăvană sparge vase tot timpul."},"QuestionAlt", {q: "Cine sparge vase tot timpul?", as: ["Pisica","Pisicile"]}],
[["filler-onenounsgagreement",87],DS, {s:"Caietul negru are pagini albe."}],
[["filler-onenounsgagreement",88],DS, {s:"Magnetul maro atrage metale adesea."}],
[["filler-onenounsgagreement",89],DS, {s:"Pixul albastru scrie foarte bine."}],
[["filler-onenounsgagreement",90],DS, {s:"Iepurele alb sare cu mare agilitate."}],
[["filler-onenounsgagreement",91],DS, {s:"Studentul harnic munceşte foarte mult."}],
[["filler-onenounsgagreement",92],DS, {s:"Femeia misterioasă dispare în străinătate adesea."}],
[["filler-onenounsgagreement",93],DS, {s:"Poetul talentat vorbeşte foarte frumos."}],
[["filler-onenounsgagreement",94],DS, {s:"Mâncarea gustoasă miroase foarte bine."},"QuestionAlt", {q: "Ce miroase foarte bine?", as: ["Mâncarea","Mâncarurile"]}],
[["filler-onenounsgagreement",95],DS, {s:"Cursul masteral cuprinde multe informaţii."}],
[["filler-onenounsgagreement",96],DS, {s:"Bagajul mare conţine haine de iarnă."}]
];
