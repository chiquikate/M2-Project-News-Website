// Mark news as "read" (Checkmark icon shows up) ** DONE
// Mark news as "favorite" ** DONE
// Delet news from search results (cross should show up on the card corner when hovered) ** DONE
// (addEventListener (Element.closest()) to select parent card element and delete it )
// When user clicks heart, it turns to blue ** DONE
// (addEventLister (click); use forEach; element.classList.toggle("classnmae")  )

function menuMobile() {
    var navbar = document.getElementById('menu-list');
    navbar.classList.toggle('show');
}


// Start of Heart Button

function enable1(like){
    if(like==0){
        document.getElementById("rh1").style.display="block";
    }   
    else{
        document.getElementById("rh1").style.display="none";
    }
}

function enable2(like){
    if(like==0){
        document.getElementById("rh2").style.display="block";
    }   
    else{
        document.getElementById("rh2").style.display="none";
    }
}

function enable3(like){
    if(like==0){
        document.getElementById("rh3").style.display="block";
    }   
    else{
        document.getElementById("rh3").style.display="none";
    }
}

function enable4(like){
    if(like==0){
        document.getElementById("rh4").style.display="block";
    }   
    else{
        document.getElementById("rh4").style.display="none";
    }
}

function enable5(like){
    if(like==0){
        document.getElementById("rh5").style.display="block";
    }   
    else{
        document.getElementById("rh5").style.display="none";
    }
}

function enable6(like){
    if(like==0){
        document.getElementById("rh6").style.display="block";
    }   
    else{
        document.getElementById("rh6").style.display="none";
    }
}

function enable7(like){
    if(like==0){
        document.getElementById("rh7").style.display="block";
    }   
    else{
        document.getElementById("rh7").style.display="none";
    }
}

function enable8(like){
    if(like==0){
        document.getElementById("rh8").style.display="block";
    }   
    else{
        document.getElementById("rh8").style.display="none";
    }
}

function enable9(like){
    if(like==0){
        document.getElementById("rh9").style.display="block";
    }   
    else{
        document.getElementById("rh9").style.display="none";
    }
}

// End of Heart Button

// Start of Read Functionality

function read1(check){
    if(check==0){
        document.getElementById("check1").style.display="block";
    }
}

function read2(check){
    if(check==0){
        document.getElementById("check2").style.display="block";
    }
}

function read3(check){
    if(check==0){
        document.getElementById("check3").style.display="block";
    }
}

function read4(check){
    if(check==0){
        document.getElementById("check4").style.display="block";
    }
}

function read5(check){
    if(check==0){
        document.getElementById("check5").style.display="block";
    }
}

function read6(check){
    if(check==0){
        document.getElementById("check6").style.display="block";
    }
}

function read7(check){
    if(check==0){
        document.getElementById("check7").style.display="block";
    }
}

function read8(check){
    if(check==0){
        document.getElementById("check8").style.display="block";
    }
}

function read9(check){
    if(check==0){
        document.getElementById("check9").style.display="block";
    }
}

// End of Read Functionality

function remove1() {
    const newscard = document.getElementById('news1');
    const parent = newscard.parentNode;
    parent.removeChild(newscard);
}

function remove2() {
    const newscard = document.getElementById('news2');
    const parent = newscard.parentNode;
    parent.removeChild(newscard);
}

function remove3() {
    const newscard = document.getElementById('news3');
    const parent = newscard.parentNode;
    parent.removeChild(newscard);
}

function remove4() {
    const newscard = document.getElementById('news4');
    const parent = newscard.parentNode;
    parent.removeChild(newscard);
}

function remove5() {
    const newscard = document.getElementById('news5');
    const parent = newscard.parentNode;
    parent.removeChild(newscard);
}

function remove6() {
    const newscard = document.getElementById('news6');
    const parent = newscard.parentNode;
    parent.removeChild(newscard);
}

function remove7() {
    const newscard = document.getElementById('news7');
    const parent = newscard.parentNode;
    parent.removeChild(newscard);
}

function remove8() {
    const newscard = document.getElementById('news8');
    const parent = newscard.parentNode;
    parent.removeChild(newscard);
}

function remove9() {
    const newscard = document.getElementById('news9');
    const parent = newscard.parentNode;
    parent.removeChild(newscard);
}