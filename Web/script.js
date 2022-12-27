const SastaReact = document.getElementById('main')
downloadPDF = document.createElement('div');
downloadPDF.setAttribute('class','item');
downloadPDF.innerHTML = `
<a href="https://github.com/rishav-jha-mech/NITDGP-results-ranked-sem4/raw/main/PROVISIONAL%20RESULT%20OF%20UG%204TH%20SEMESTER%20REGULAR%20EXAMINATION_2021_2022.pdf" rel="noopener noreferrer"> <i class="fas bg-danger fa-file-pdf text-white fs-2"></i> Download PDF</a>
`
SastaReact.appendChild(downloadPDF)

const LinkList = [
    {
        "title": "Biotechnology Results",
        "url": "BT"
    },
    {
        "title": "Computer Results",
        "url": "CS"
    },
    {
        "title": "Chemical Results",
        "url": "CH"
    },
    {
        "title": "Civil Results",
        "url": "CE"
    },
    {
        "title": "Electronics Results",
        "url": "ECE"
    },
    {
        "title": "Electrical Results",
        "url": "EE"
    },
    {
        "title": "Mechanical Results",
        "url": "ME"
    },
    {
        "title": "Metallurgy Results",
        "url": "MM"
    },
]

for (const key in LinkList) {
    var div = document.createElement('div');
    div.setAttribute('class',' item');
    
    if (LinkList[key]["title"].includes("SCGPA")) {
        div.setAttribute('class',' itemSCGPA');
    }

    div.innerHTML=`
        <a href="./results.html?subject=${LinkList[key]["url"]}">${LinkList[key]["title"]}</a>
    `
    SastaReact.appendChild(div)
}


thatBody = document.getElementsByTagName('body')[0];

footer = document.createElement('div');
footer.setAttribute('class','footer');

footer.innerHTML = `
<a href="">Made with ❤ by Devraj </a>
`

thatBody.appendChild(footer)