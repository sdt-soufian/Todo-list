var list = document.querySelector('.list-style');
var div = document.querySelector('.show-item');
var btn_ajout = document.getElementById('ajout');
var elet = document.getElementById('info');
var recherche_block = document.querySelector('.recherche');
var btn_block = document.getElementById('blc-recherche');
var inputValue = document.getElementById('search');
var btn_search = document.getElementById('btn-rech');
var search_list = document.getElementById('search-list');
var blc_close = document.getElementById('close');
var ListStorage = [];
if(localStorage.getItem('len') > 0){
    ListStorage.push(localStorage.getItem('listInput'));
}


btn_ajout.addEventListener('click', ajout);
btn_block.addEventListener('click', block_recherche);
btn_search.addEventListener('click', item_search);
blc_close.addEventListener('click', closeBlock);

function ajout(){
    var li = document.createElement('li');
    li.classList.add('item-style');
    var btn_supp = document.createElement('button');
    var btn_check = document.createElement('button');
    btn_supp.addEventListener('click', suppItem);
    btn_check.addEventListener('click', check)
    var text = document.createElement('span');
    text.textContent = elet.value;
    //localStorage ajout tous les éléments dans un stockage local
    ListStorage.push(elet.value);
    localStorage.setItem('listInput', ListStorage.toString());
    localStorage.setItem('len', ListStorage.length.toString());
    btn_supp.innerHTML = '<i class="fas fa-trash-alt"></i>';
    btn_check.innerHTML = '<i class="fas fa-check"></i>';
    li.appendChild(text);
    li.appendChild(btn_check);
    li.appendChild(btn_supp);
    list.appendChild(li);
    elet.value = ' ';
}
function suppItem(e){
    e.target.parentElement.classList.add('anim-item');
    e.target.parentElement.addEventListener('transitionend', ()=>{
        e.target.parentElement.remove();
    })
}
function check(e){
    console.log(e.target.parentElement.firstChild.textContent);
    const item = e.target.parentElement;
    item.classList.toggle('item-check');
}
function block_recherche(){
    recherche_block.style.top = '0px';
    recherche_block.classList.add('anim-block');
}
function item_search(e){
    e.preventDefault();
    search_list.innerHTML = ' ';
    var L = [];
    var cond = 0;
    var item
    let chaine = localStorage.getItem('listInput');
    chaine = chaine.replaceAll(' ', '');
    L.push(chaine);
    var L1 = L[0].split(',');
    L1.forEach(elet =>{
        if(elet == inputValue.value){
            item = document.createElement('li');
            item.textContent = elet;
            search_list.appendChild(item);
            cond = 1;
        }
    })
    if(cond == 0){
        item = document.createElement('li');
        item.classList.add('cond-false');
        item.textContent = `name : ${inputValue.value} n'existe pas`;
        search_list.appendChild(item);
    }
    inputValue.value = ' ';

}
function closeBlock(){
    recherche_block.style.top = `${-1*100}%`;
    recherche_block.classList.add('anim-block');
}