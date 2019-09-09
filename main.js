

// const PTD = (stringToPrint,divId) => {
//   const selectedDiv = document.getElementById(divId);
//   selectedDiv.innerText = stringToPrint;
// };

// let teams = [
//   {
//     name:"Titans",
//     img:"https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/63/2c/34/632c34a2-8e7d-dd78-f55c-6ed5abdee6d0/source/256x256bb.jpg",
//     conference:"AFC",
//     division:"East",
//     madePlayoffsLastSeason:false,
//   },
//   {
//     name:"Texans",
//     img:"https://pbs.twimg.com/profile_images/664402312996200448/5W2Lusba_400x400.jpg",
//     conference:"AFC",
//     division:"West",
//     madePlayoffsLastSeason:true,
//   },
//   {
// //     name:"Jaguars",
// //     img:"https://pbs.twimg.com/profile_images/664403706822197248/upeZoABV_400x400.png",
// //     conference:"AFC",
//     division:"South",
//     madePlayoffsLastSeason:false,
//   }];

//  const teamBuilder = (teamz) => {
//    let teamString = '';
//   teams.forEach((squad) => {
//     teamString +=`<div class="card" style="width: 18rem;">
//     <img src="${squad.img}" class="card-img-top" alt="...">
//     <div class="card-body">
//     <p class="card-text text-center">${squad.name}</p>
//    <p class="card-text text-center">${squad.conference}</p>
//     </div>
//    </div>`;
//   })
//   PTD(teamString,'cards')
//  }
// teamBuilder();

// const linkClicks = ()=> {
//   const linkClicked = e.target.id;
//   if (linkedClicked === 'blue') {
//     teamBuilder()
//   } else {
    
//   }
// 

const showHide = () =>{
let div1 = document.getElementById('blueDiv');
  if(div1.style.display === 'none'){
    div1.display = 'block';
  } else {
    div1.style.display = 'none';
  }
}



const linkEvent = ()=> {
document.getElementById('blue').addEventListener('click', showHide);
}
linkEvent();