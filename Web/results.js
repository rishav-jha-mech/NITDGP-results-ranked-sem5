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
const print = (data) => console.log(JSON.stringify(data, null, 4));
const heading = document.getElementById('header');
const cgpaBtn = document.getElementById('cgpabtn');
const sgpaBtn = document.getElementById('sgpabtn');
const arena = document.getElementById('arena');

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
let subject = params?.subject;
let type = params?.type ?? 'CGPA';
if (type === 'CGPA') {
    cgpaBtn.className = 'btn btn-info';
} else if (type === 'SGPA') {
    sgpaBtn.className = 'btn btn-info';
}
arraySubs.map((item) => {
    if (item.code === subject) {
        heading.innerHTML += item.title;
        heading.innerHTML += `<h4 class="mt-2 text-info">${type} wise</h4>`
        return;
    }
});

const fileName = `Ranked-${subject}-${type}-Sem5.json`

cgpaBtn.addEventListener('click', () => {
    window.location.href = `results.html?subject=${subject}&type=CGPA`;
});
sgpaBtn.addEventListener('click', () => {
    window.location.href = `results.html?subject=${subject}&type=SGPA`;
});

var jsonData;
fetch(`../${fileName}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        arena.innerHTML = ''
        jsonData = data;
        jsonData.map((item, index) => {
            let i = item.length;
            arena.innerHTML += `
                <div class="card w-100 mb-3">
                    <div class="card-header">
                        <h6 class="text-capitalize mb-0">${index + 1}. ${getName(item)}</h6>
                    </div>
                    <div class="card-body">
                        <div class="row text-white mb-2">
                            <div class="col-6 fw-light">
                                CGPA - <span class="text-info">${item[i - 2]}</span>
                            </div>
                            <div class="col-6 fw-light">
                                SGPA - <span class="text-info">${item[i - 3]}</span>
                            </div>
                        </div>
                        <div class="row text-white">
                            <div class="col-6 fw-light">
                                Gender - <span class="text-bold text-info">${getGender(item[i - 4])}</span>
                            </div>
                            <div class="col-6 fw-light">
                                Roll no. - <span class="text-bold text-info">${item[2]}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `
        })
    }).catch((err) => {
        console.log(err)
        arena.innerHTML = `<h2 class="text-danger">No Data Found</h2>`
    });

function getName(data) { // Data is array of strings
    let name = '';
    let s = 3;
    let e = data.length - 4;
    for (let i = s; i < e; i++) {
        name += data[i] + ' ';
    }
    return name.toLowerCase();
}
function getGender(data) { // data is either M or F
    if (data === 'M') {
        return '<i class="fas text-info fa-mars"></i>';
    } else if (data === 'F') {
        return '<i class="fas text-pink fa-venus"></i>';
    }
}