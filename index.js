const view = document.getElementById('pg-view');
const cost = document.getElementById('month');
const cost2 = document.getElementById('month2');
const slider = document.getElementById('slider-range');
const toggle  = document.getElementById('billing');
const pageviews = ["10k", "50k", "100k", "500k", "1M"];
const perMonth = [8, 12, 16, 24, 36];
const isYearly = false;


slider.addEventListener('input', function(){
    updateValue();
    console.log(slider.value)
    view.innerHTML = pageviews[slider.value];

});

toggle.addEventListener('change', function(){
    if(isYearly === false){
        isYearly = true;
    } else{
        isYearly = false;
    }
    updateValue()
});


function updateValue(){
    if(isYearly){
        cost.innerHtml = perMonth[slider.value] * .75
        cost2.innerHtml = perMonth[slider.value] * .75
    } else {
        cost.innerHTML = perMonth[slider.value]
        cost2.innerHTML = perMonth[slider.value]
    }
}
 


 