
const btnUp = document.querySelector('.btnup');
const btnDown = document.querySelector('.btndown');
const panel = document.querySelector('.panel');
const panel_li = panel.querySelectorAll('li');
const len = panel_li.length-1;
let enableClick = true;

btnUp.addEventListener('click', e=>{
    e.preventDefault();

    if(enableClick){
        enableClick = false;
        moveUp();
    }    
})



function moveUp(){
    let current_item = panel.querySelector('.on');
    let current_index = parseInt(current_item.getAttribute('data-index'));

    //활성화된 순번
    let next_index = null;

    (current_index !== len) ? next_index = current_index+1 : next_index=0;
    current_item.classList.remove('on'); //올라가는
    current_item.classList.add('up'); //활성화되면서 사라짐

    panel_li[next_index].classList.add('down'); // 안보이게 숨김

    // 위로올라가는모션
    setTimeout(()=>{
        panel_li[next_index].classList.remove('down');
        panel_li[next_index].classList.add('on');
        panel.querySelector('.up').classList.remove('up');
        enableClick = true;
    },500);
}

btnDown.addEventListener('click', e=>{
    e.preventDefault();

    if(enableClick){
        enableClick = false;
        moveDown();
    }    
})

function moveDown(){
    let current_item = panel.querySelector('.on');
    let current_index = parseInt(current_item.getAttribute('data-index'));
    let prev_index = null;

    (current_index !== 0) ? prev_index = current_index-1 : prev_index=len;
    current_item.classList.remove('on');
    current_item.classList.add('down');

    panel_li[prev_index].classList.add('up');
    setTimeout(()=>{
        panel_li[prev_index].classList.remove('up');
        panel_li[prev_index].classList.add('on');
        panel.querySelector('.down').classList.remove('down');
        enableClick = true;
    },800);
}