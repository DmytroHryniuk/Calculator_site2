
//Материал
const mat1=250;
const mat2=350;
const mat3=450;
const mat4=550;
const mat5=700;


function resultButton(){
    let par_a=0;
    let par_b=0;
    let par_l=0;
    //let thick=0;
    //let umb=0;
    let fat=0;
    let mat=0;

    let dimensions = 0;
    let dimensions1=0;
    let dimensions2=0;
    let raw=0;
    let fixedPrice = 0;
    let endSum = 0;
    par_a = document.getElementById('sideA').value;
    par_b = document.getElementById('sideB').value;
    par_l = document.getElementById('sideL').value;



    if (document.getElementById('fatCatcher').value==="1") {
        fat=0.5;
    }
    else if (document.getElementById('fatCatcher').value==="2") {
        fat = 0;
    }

    if (document.getElementById('material').value==="1") {
        mat = mat1;
    }
    else if (document.getElementById('material').value==="2") {
        mat=mat2;
    }
    else if (document.getElementById('material').value==="3") {
        mat=mat3;
    }
    else if (document.getElementById('material').value==="4") {
        mat=mat4;
    }
    else if (document.getElementById('material').value==="5") {
        mat=mat5;
    }
    dimensions1=(par_a*par_l)/2;
    dimensions2=(par_b*par_l)/2;

    dimensions = (dimensions1+dimensions2)/100000; //ФОРМУЛА

    raw = dimensions*mat;
    fixedPrice = raw + raw*fat;

    endSum=fixedPrice-(fixedPrice*0.26);


    document.getElementById('result').innerHTML=endSum + " грн.";
}