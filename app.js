const aside = document.querySelector('aside');
const h3s = document.querySelectorAll('h3');
h3s.forEach(h3 => {
    //console.log(h3.nextSibling.nextSibling);
    const heading = document.createElement('a');
    heading.href = `#${h3.id}`;
    heading.innerText = h3.innerText;
    heading.className = 'sidebar-head';
    aside.appendChild(heading);
    const h4s = h3.nextElementSibling.querySelectorAll('h4');
    h4s.forEach(h4 => {
        const subheading = document.createElement('a');
        subheading.className = 'sidebar-subhead';
        subheading.href = `#${h4.id}`;
        subheading.innerText = h4.innerText;
        aside.appendChild(subheading);
    })
})


let showInfoSections = true;

const infoSections = document.querySelectorAll('.info-section');

const toggleSwitch = document.querySelector('#toggle-info-switch');
toggleSwitch.addEventListener('click',(e)=>{
    e.preventDefault();
    if(showInfoSections){
        infoSections.forEach(s => {
            s.className = 'hidden';
            try{
                const arrow = s.previousElementSibling.lastChild.firstChild;
                if(arrow){
                    arrow.className = 'fa fa-chevron-up';
                }
            }catch(e){

            }
            
        })
        showInfoSections = false;
        toggleSwitch.firstChild.nextElementSibling.setAttribute('checked', true);
    } else {
        infoSections.forEach(s => {
            
            s.className = 'info-section';
            try{
                const arrow = s.previousElementSibling.lastChild.firstChild;
                if(arrow){
                    arrow.className = 'fa fa-chevron-down';
                }
            }catch(e){

            }
        })
        showInfoSections = true;
        toggleSwitch.firstChild.nextElementSibling.removeAttribute('checked');
    }
})

const menuToggle = document.querySelector('#open-menu-button');
menuToggle.addEventListener('click',()=>{
    console.log('click', aside.className);
    if(aside.className == 'open'){
        aside.className = '';
    } else {
        aside.className = 'open';
    }
})

const taskCloseButtons = document.querySelectorAll('.task-close-button');
taskCloseButtons.forEach(t => {
    t.addEventListener('click',(e) => {
        console.log('click');
        const section = e.currentTarget.parentNode.nextSibling.nextSibling;
        console.log(section);
        const arrow = e.currentTarget.firstChild;
        console.log(arrow);
        if(section.className == 'hidden'){
            section.className = '';
            arrow.className = 'fa fa-chevron-down'
        } else {
            section.className = 'hidden';
            arrow.className = 'fa fa-chevron-up'
        }
    })
})

const sectionCloseButtons = document.querySelectorAll('.section-close-button');
sectionCloseButtons.forEach(s => {
    s.addEventListener('click',(e) => {
        console.log('click');
        const section = e.currentTarget.parentNode.nextSibling.nextSibling;
        const arrow = e.currentTarget.firstChild;
        console.log(arrow);
        if(section.className == 'hidden'){
            section.className = '';
            arrow.className = 'fa fa-chevron-down'
        } else {
            section.className = 'hidden';
            arrow.className = 'fa fa-chevron-up'
        }
    })
})

const copyButtons = document.querySelectorAll('.copy-code-button');

copyButtons.forEach(b => {  
    b.addEventListener('click',(e)=>{
        console.log('click');
        console.log(e.currentTarget.previousSibling.previousSibling);
        const text = e.currentTarget.parentNode.nextSibling.nextSibling.value;
        navigator.clipboard.writeText(text);
        e.currentTarget.previousSibling.previousSibling.className = 'fade';
    })
})

