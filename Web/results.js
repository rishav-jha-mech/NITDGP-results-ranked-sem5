const arraySubs = [
    {
        "title": "Biotechnology Results",
        "code": "BT"
    },
    {
        "title": "Computer Results",
        "code": "CSE"
    },
    {
        "title": "Chemical Results",
        "code": "CH"
    },
    {
        "title": "Civil Results",
        "code": "CE"
    },
    {
        "title": "Electronics Results",
        "code": "ECE"
    },
    {
        "title": "Electrical Results",
        "code": "EE"
    },
    {
        "title": "Mechanical Results",
        "code": "ME"
    },
    {
        "title": "Metallurgy Results",
        "code": "MM"
    },
]
// addHeader
const print =(data)=> console.log(JSON.stringify(data, null, 4));
const heading = document.getElementById('header');
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
let subject = params?.subject;
let type = params?.type ?? 'CGPA';

arraySubs.map((item) => {
    print(subject)
    if (item.code === subject) {
        heading.innerHTML += item.title;
        heading.innerHTML += `<h4 class="mt-2 text-info">${type} wise</h4>`
        return;
    }
});