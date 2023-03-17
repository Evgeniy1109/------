const tab = document.querySelectorAll('.tab_header');
const caucasus = document.querySelectorAll('.caucasus')


for (let i=0; i<tab.length; i++){
    tab[i].addEventListener('click', function(e) {
        e.preventDefault();
        let activeTab = e.target.getAttribute('data-tab');
        for (let j=0; j<tab.length; j++){
            let content = caucasus[j].getAttribute('data-tab-content');

            if (activeTab === content){
                tab[j].classList.add('active');
                caucasus[j].classList.add('active');
            }else{
                tab[j].classList.remove('active');
                caucasus[j].classList.remove('active');
            }
        }
    })
}



























// document.addEventListener('DOMContentLoaded', clickTabs());

// function clickTabs(){
//     let tabs = document.querySelector('.tabs');
//     let tabHeader = document.querySelector('.tab_header');
//     let caucasus = document.querySelector('.caucasus');

//     tabs.addEventListener('click', function(event){
//         if(event.target.classList == 'tabHeader' ){
//             for(let i=0; i<tabHeader.length; i++){
//                 tabHeader[i].classList.remove('active');
//                 caucasus[i].classList.remove('active');
//             }

//             event.target.classList.add('active');
//             let content = event.target.id + '-content';
//             let ic = document.getElementById(content);
//             ic.classList.add('active')
//         }
//     })
// }