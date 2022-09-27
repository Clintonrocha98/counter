const btns = document.querySelectorAll('.btn')
const counter_html = document.querySelector('#counter')

let counter = 0


btns.forEach(function(btn){
    btn.addEventListener('click', function(e){

        if(e.currentTarget.classList.contains('decrease')){
            counter --
        }
        else if(e.currentTarget.classList.contains('increase')) {
            counter ++
        } else {
            counter = 0
        }

        counter_html.innerHTML = counter

        if(counter>0){
            counter_html.style.color = 'green'
        }
        else if(counter===0){
            counter_html.style.color = 'black'
        }
        else if(counter<0){
            counter_html.style.color = 'red'
        }
        
    })
})

