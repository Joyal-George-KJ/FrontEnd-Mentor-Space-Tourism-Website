const ExploreButton = document.querySelector('.button');
const iconWrap = document.querySelector('.button-wrap');


// Destination Info
const destinations = [{
    'planetName' : 'Moon',
    'planetImg' : 'moon.webp',
    'planetDesc' : `See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
    regain perspective and come back refreshed. While you’re there, take in some history 
    by visiting the Luna 2 and Apollo 11 landing sites.`,
    'distance' : '384,400 km',
    'timeTravel' : '3 days'
}, {
    'planetName' : 'Mars',
    'planetImg' : 'mars.webp',
    'planetDesc' : `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
    the tallest planetary mountain in our solar system. It’s two and a half times 
    the size of Everest!`,
    'distance' : '225 mil. km',
    'timeTravel' : '9 months'
}, {
    'planetName' : 'Europa',
    'planetImg' : 'europa.webp',
    'planetDesc' : `The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
    winter lover’s dream. With an icy surface, it’s perfect for a bit of 
    ice skating, curling, hockey, or simple relaxation in your snug 
    wintery cabin.`,
    'distance' : '628 mil. km',
    'timeTravel' : '3 years'
}, {
    'planetName' : 'Titan',
    'planetImg' : 'titan.webp',
    'planetDesc' : `The only moon known to have a dense atmosphere other than Earth, Titan 
    is a home away from home (just a few hundred degrees colder!). As a 
    bonus, you get striking views of the Rings of Saturn.`,
    'distance' : '1.6 bil. km',
    'timeTravel' : '7 years'
},
]

// Crew Info
const crew = [{
    'name' : 'Douglas Hurley',
    'post' : 'Commander ',
    'crewImg' : 'douglas-hurley.webp',
    'descripition' : `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.`,
},
{
    'name' : 'MARK SHUTTLEWORTH',
    'post' : 'Mission Specialist ',
    'crewImg' : 'mark-shuttleworth.webp',
    'descripition' : `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.`,
},
{
    'name' : 'Victor Glover',
    'post' : 'PILOT',
    'crewImg' : 'victor-glover.webp',
    'descripition' : `Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. `,
},
{
    'name' : 'Anousheh Ansari',
    'post' : 'Flight Engineer',
    'crewImg' : 'anousheh-ansari.webp',
    'descripition' : `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. `,
},
]

// Technology Info

const technology = [{
    'image' : 'launch-vehicle-portrait.jpg',
    'description' : `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
    'name' : 'LAUNCH VEHICLE'
},
{
    'image' : 'spaceport-portrait.jpg',
    'description' : `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`,
    'name' : 'SPACEPORT'
},
{
    'image' : 'space-capsule-portrait.jpg',
    'description' : `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
    'name' : 'SPACE CAPSULE'
},
]

// Nav Bar Function
function navExpander() {
    
    const navSection = document.querySelector('.nav ul');
    const navButtonImg = document.querySelector('.nav button img');
    const navBlur = document.querySelector('.blur-img');

    const hostOrigin = window.location.origin;

    navSection.classList.toggle('display-none');
    navBlur.classList.toggle('display-none');
    navButtonImg.src === `${hostOrigin}/FrontEnd-Mentor-Space-Tourism-Website/assets/shared/icon-hamburger.svg` ? navButtonImg.src = `${hostOrigin}/FrontEnd-Mentor-Space-Tourism-Website/assets/shared/icon-close.svg` : navButtonImg.src = `${hostOrigin}/FrontEnd-Mentor-Space-Tourism-Website/assets/shared/icon-hamburger.svg`;

}



// For the Home page Explore Hover Style

function exploreFocusedIn() {
    iconWrap.style.background = '#ffffff1a';
}

function exploreFocusedOut() {
    iconWrap.style.background = 'transparent';
}

// For Shuffeling Planet Details in Destination page

function planetSectionChange(index) {
    const wrapperMain = document.querySelector('main.wrapper');

    wrapperMain.innerHTML = `
        <div class="parts span-2" id="main">
            <h4 class="lighter-text">01</h4> <h4 class="uppercase">Pick your destination</h4>
        </div>
        <div class="parts">
            <img src="assets/destination/image-${destinations[index].planetImg}" alt="">
        </div>
        <div class="parts planet-info">
            <nav>
                <ul class="planet-nav">
                    <li><a href="#main" class="${destinations[index].planetName == 'Moon' ? 'a-focused' : ''}" onclick="planetSectionChange(0)"><span class="nav-item">Moon</span></a></li>
                    <li><a href="#main" class="${destinations[index].planetName == 'Mars' ? 'a-focused' : ''}"  onclick="planetSectionChange(1)"><span class="nav-item">Mars</span></a></li>
                    <li><a href="#main" class="${destinations[index].planetName == 'Europa' ? 'a-focused' : ''}"  onclick="planetSectionChange(2)"><span class="nav-item">Europa</span></a></li>
                    <li><a href="#main" class="${destinations[index].planetName == 'Titan' ? 'a-focused' : ''}"  onclick="planetSectionChange(3)"><span class="nav-item">Titan</span></a></li>
                </ul>
            </nav>
            <h2 class="uppercase planet-name">${destinations[index].planetName}</h2>
            <p class="width-75">
            ${destinations[index].planetDesc}
            </p>
            <div class="line-destination">
                <hr>
            </div>
            <div class="things">
                <div class="thing">
                    <p class="sub-2 uppercase">Avg. distance</p>
                    <h4 class="uppercase">${destinations[index].distance}</h4>
                </div>
                <div class="thing">
                    <p class="sub-2 uppercase">Est. travel time</p>
                    <h4 class="uppercase">${destinations[index].timeTravel}</h4>
                </div>
            </div>
        </div>
    `

    console.log(destinations[index].planetName);
}

// For Crew Member Details showing in crews page

function crewMenbersChanger(index) {
    const wrapperMain = document.querySelector('main.wrapper');

    wrapperMain.innerHTML = `
    <div class="parts">
        <div class="content">
            <div class="head">
                <h4 class="lighter-text">01</h4> <h4 class="uppercase ms-1">Pick your destination</h4>
            </div><br>
            <div class="body">
                <h4 class="uppercase lighter-text">${crew[index].post}</h4>
                <h3 class="uppercase">${crew[index].name}</h3>
                <p class="width-75">${crew[index].descripition}</p>
            </div>
            <div class="foot">
                <ul>
                    <li><span class="small-circle ${index === 0 && 'focused'}" onclick="crewMenbersChanger(0)"></span></li>
                    <li><span class="small-circle ${index === 1 && 'focused'}" onclick="crewMenbersChanger(1)"></span></li>
                    <li><span class="small-circle ${index === 2 && 'focused'}" onclick="crewMenbersChanger(2)"></span></li>
                    <li><span class="small-circle ${index === 3 && 'focused'}" onclick="crewMenbersChanger(3)"></span></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="parts">
        <img class="crew-member" src="assets/crew/image-${crew[index].crewImg}" alt="${crew[index].name}">
    </div>
`;

}

// For The technology showing in technology page

function technologyChanger(index) {
    const wrapperMain = document.querySelector('main.wrapper');

    wrapperMain.innerHTML = `
        <div class="parts">
            <div class="content">
                <div class="head">
                    <h4 class="lighter-text">03</h4> <h4 class="uppercase ms-1">SPACE LAUNCH 101</h4>
                </div>
                <div class="body" style="flex-direction: row; flex-wrap: nowrap;">
                    <ul style="width: 16%;">
                        <li><span class="big-circle ${index === 0 && 'focused'}" onclick="technologyChanger(0)">1</span></li>
                        <li><span class="big-circle ${index === 1 && 'focused'}" onclick="technologyChanger(1)">2</span></li>
                        <li><span class="big-circle ${index === 2 && 'focused'}" onclick="technologyChanger(2)">3</span></li>
                    </ul>
                    <div class="technology-content">
                        <p class="uppercase sub-2">THE TERMINOLOGY… </p>
                        <h3 class="uppercase" style="width: 24ch;">${technology[index].name}</h3>
                        <p class="width-75 sub-2">${technology[index].description}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="parts">
            <img style="margin: 0" src="assets/technology/image-${technology[index].image}" alt="">
        </div>
    `
}

// Auto Scroll Every Page Things

// runs auto run function
// let a = 1;
// function incrementer(functionToRun, endIndex) {
//     functionToRun(a);
//     if (a < endIndex - 1) {
//         a++;
//     } else {
//         a = 0;
//     }
// }

// // Interval setting
// setInterval( () => {

//     window.location.pathname === '/destination.html' && incrementer(planetSectionChange, destinations.length);

//     window.location.pathname === '/crew.html' && incrementer(crewMenbersChanger, crew.length);

//     window.location.pathname === '/technology.html' && incrementer(technologyChanger, technology.length);

// }, 5000);
