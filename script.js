let home = document.querySelector('.home')
let hobbies = document.querySelector('.hobbies')
let skills = document.querySelector('.skills')
let opendSectionIndicator = document.querySelector('.opendSectionIndicator');
home.addEventListener('click', () => {
   let ladingPageSection = document.querySelector('#ladingPageSection');
   ladingPageSection.scrollIntoView(); 
 if (hobbies.querySelector('.opendSectionIndicator')) {
   hobbies.querySelector('.opendSectionIndicator').remove();
 }
 if (skills.querySelector('.opendSectionIndicator')) {
   skills.querySelector('.opendSectionIndicator').remove();
 }
 if (!home.querySelector('.opendSectionIndicator')) {
    
  let div = document.createElement('div')
  div.classList.add('opendSectionIndicator');
  home.append(div)
 }
})
hobbies.addEventListener('click', () => {
  let hobbiesSection = document.querySelector('#hobbiesSection');
  hobbiesSection.scrollIntoView(); 

 if ( home.querySelector('.opendSectionIndicator')) {
   home.querySelector('.opendSectionIndicator').remove();
 }
 if (skills.querySelector('.opendSectionIndicator')) {
  skills.querySelector('.opendSectionIndicator').remove();
 }
 if (!hobbies.querySelector('.opendSectionIndicator')) {
   
   let div = document.createElement('div');
   div.classList.add('opendSectionIndicator');
   hobbies.append(div);
 }
})
skills.addEventListener('click', () => {

 let skillSection = document.querySelector('#skillSection')
skillSection.scrollIntoView(); 

 if (home.querySelector('.opendSectionIndicator')) {
   home.querySelector('.opendSectionIndicator').remove();
 }
 if (hobbies.querySelector('.opendSectionIndicator')) {
   hobbies.querySelector('.opendSectionIndicator').remove();
 }
 if (!skills.querySelector('.opendSectionIndicator')) {

  let div = document.createElement('div')
  div.classList.add('opendSectionIndicator');
  skills.append(div)
 }
})