window.addEventListener("DOMContentLoaded" , () => {
    window.addEventListener('input', validate);

    var textinputs = document.querySelectorAll('input[type=checkbox]'); 
        var reveals= document.querySelectorAll('.reveal');
        var titleReveal = document.querySelectorAll('.revealfirst');
        var pReveals = document.querySelectorAll('.pReveal');
    console.log(reveals.length);
    console.log(titleReveal.length);

    function validate(){

        if (document.querySelectorAll('input[type="checkbox"]:checked').length === document.querySelectorAll('input[type="checkbox"]').length) {

            console.log('checked');
            for(var i=0; i<10; i++){
                    console.log("revealed");
                    titleReveal[0].classList.add('active');
                    titleReveal[1].classList.add('active');
                    titleReveal[2].classList.add('active');
                    pReveals[0].classList.add('active');
                    // pReveals[1].classList.add('active');
                    reveals[i].classList.add('active');
            }
        } else {
                
            console.log('not checked');
            for(var i=0; i<10; i++){
                    reveals[i].classList.remove('active');
                    
            }
            titleReveal[0].classList.remove('active');
            titleReveal[1].classList.remove('active');
            titleReveal[2].classList.remove('active');
            pReveals[0].classList.remove('active');
            // pReveals[1].classList.remove('active');
            }
    }

        window.addEventListener('input', checkSlider);
        window.addEventListener('input', setVal);
        const slider = document.getElementById('myRange');
        var val = document.getElementById("myRange").value;
        var min= 1;
        
        function setVal(){
           val = document.getElementById("myRange").value;
        }

        function checkSlider(){
            console.log(val);
            if(val>=20) document.getElementById("c1").checked = true;
            if(val>=40) document.getElementById("c2").checked = true;
            if(val>=60) document.getElementById("c3").checked = true;
            if(val>=80) document.getElementById("c4").checked = true;
            if(val>=100) document.getElementById("c5").checked = true;
            if(val<20) document.getElementById("c1").checked = false;
            if(val<40) document.getElementById("c2").checked = false;
            if(val<60) document.getElementById("c3").checked = false;
            if(val<80) document.getElementById("c4").checked = false;
            if(val<100) document.getElementById("c5").checked = false;
        }

    })
