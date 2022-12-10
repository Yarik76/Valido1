function summa_nech(num) {
    let sum1 = 0;
    let udv_chislo;
    for (let i = num.length - 2; i >= 0; i -= 2) {
        udv_chislo = num[i] * 2;
        if (udv_chislo > 9) {
            udv_chislo = Math.floor(udv_chislo / 10 + udv_chislo % 10);
        }
    sum1 += udv_chislo;
    }
    return sum1;
}

function summa_chet(num) {
    let sum2 = 0;
    let chet_chislo;
    for (let i = num.length - 1; i >= 0; i -= 2) {
        chet_chislo = num[i] * 1;
        sum2 += chet_chislo;
    }
    return sum2;
}

function isValid(num) {
    if (num.length < 15) return false;
    else {
        let sum = summa_nech(num) + summa_chet(num);
        return (sum % 10 == 0);
    }
}

function numType(num) {
    if (num.indexOf("34") == 0 || num.indexOf("37") == 0)
        typeres_show.innerHTML = "American express";
    else if (num.indexOf("31") == 0)
        typeres_show.innerHTML = "China T-Union";
    else if (num.indexOf("62") == 0 || num.indexOf("81") == 0)
        typeres_show.innerHTML = "China UnionPay";
    else if (num.indexOf("51") == 0 || num.indexOf("52") == 0
            || num.indexOf("53") == 0 || num.indexOf("54") == 0 
            || num.indexOf("55") == 0)
        typeres_show.innerHTML = "Mastercard";
    else if (num.indexOf("4") == 0)
        typeres_show.innerHTML = "Visa";
    else if (num.indexOf("2200") == 0 || num.indexOf("2201") == 0
            || num.indexOf("2202") == 0 || num.indexOf("2203") == 0 || num.indexOf("2204") == 0)
        typeres_show.innerHTML = "MIR";
    else typeres_show.innerHTML = "N/A";
}


let num; let pred_num;
let hiddentext = document.getElementById('header');
let generator = document.getElementById('generator');
let generated_block = document.getElementById('generated_block');
let results = document.getElementById('results');

let main_sec = document.getElementById('main_sec');

let numres_show = document.getElementById('numres_show');
let typeres_show = document.getElementById('typeres_show');

let krestik = document.getElementById('res_button');

const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const svgs = document.querySelectorAll(".svg-arr");

const form = document.getElementById('forma'); // извлекаем элемент формы
form.addEventListener('submit', (e) => {
    while (true) {
        e.preventDefault();  
        const formData = new FormData(form); // создаём объект FormData, передаём в него элемент формы
        const name = formData.get('fname'); 
        num = formData.get('card'); 
        if (pred_num == num && results.classList.contains('resactive')) 
            break;
        summa_nech(num);
        summa_chet(num);
        let proverka = isValid(num);

        main_sec.classList.add('mactive');
        results.classList.add('resactive');
        
        if (proverka == true) { 
            numres_show.style.color = 'green';
            numres_show.innerHTML = "Your card number is valid";
            numType(num);
        }
        else {
            numres_show.style.color = 'red';
            numres_show.innerHTML = "Your card number is invalid"; 
            typeres_show.innerHTML = "-";
        }
        pred_num = num;

        if (results.classList.contains('resactive')) {
            results.animate([
                // keyframes
                { transform: 'translateY(0%)',
                opacity: 0},
                { transform: 'translateY(-45%)',
                opacity: 1},
            ], {
                // timing options
                duration: 500,
            })
        }
    }
});

krestik.addEventListener('click', () => {
    results.classList.remove("resactive");
    main_sec.classList.remove('mactive');
   
});

generator.addEventListener('click', () => {
    while (true) {
    let random_num = '';
    let simvol_num;
    for (let i = 0; i < 16; i++) {
        simvol_num = Math.round(Math.random() * 9);
        random_num += simvol_num;
    }
    summa_nech(random_num);
    summa_chet(random_num);
    let proverka_gen = isValid(random_num);
    if (proverka_gen == true) {
        generated_block.innerHTML = random_num;
        generated_block.animate([
            // keyframes
            { opacity: 0},
            { opacity: 1},
          ], {
            // timing options
            duration: 300,
        })
        break;
    }
}
});


for (let i = 0; i < 3; i++) {
    questions[i].addEventListener("click", () => {
        answers[i].classList.toggle("qactive");
        svgs[i].classList.toggle("qactive");
    })
    svgs[i].addEventListener("click", () => {
        answers[i].classList.toggle("qactive");
        svgs[i].classList.toggle("qactive");
    })
}
