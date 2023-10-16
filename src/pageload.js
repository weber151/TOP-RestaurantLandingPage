import cheeseImg1 from './cheeseImg1.png';
import cheeseImg2 from './cheeseImg1.png';
import cheeseImg3 from './cheeseImg1.png';
import cheese_logo from './cheese_logo.png';

const websiteBody = document.getElementById("content");

const _loadHeader =  function() {
        // render header
    _loadBusinessTitle();
    const header = document.createElement("header");
    header.classList.add('header');
    const hTitle = document.createElement("h1");
    header.appendChild(hTitle);
    hTitle.id = 'header';
    hTitle.innerHTML = '-Home-';
    websiteBody.appendChild(header);
}

const _loadBusinessTitle = function() {
    const cheeseShopSign = document.createElement("section");
    cheeseShopSign.classList.add("businessBanner");
    websiteBody.appendChild(cheeseShopSign)
    const sBusinessNameTop = document.createElement("div");
    const sBusinessNameBtm = document.createElement("div");

    sBusinessNameTop.id = "sBusinessNameTop";
    sBusinessNameTop.innerHTML = "Orlop's One-Stop";
    sBusinessNameBtm.id = "sBusinessNameBtm";
    sBusinessNameBtm.innerHTML = "Cheese Shop";

    cheeseShopSign.appendChild(sBusinessNameTop);
    cheeseShopSign.appendChild(sBusinessNameBtm);
}

const _loadMenu = function() {
        // render menu for page interaction
    const menu = document.createElement('div');
    menu.classList.add('menu');
    websiteBody.appendChild(menu);

    const menuLogo = document.createElement('img');
    menuLogo.src = cheese_logo;
    menuLogo.classList.add("menuLogo")
    menu.appendChild(menuLogo);

    const dropDownMenu = document.createElement('div');
    dropDownMenu.classList.add('dropDownMenu');
    menu.appendChild(dropDownMenu);

    const menuBtnArr = _createGrid('button', dropDownMenu, 3, 'menuBtns', 'mBtn');
    for(let i = 0; i<menuBtnArr.length; i++){
        if(i==0) {
            menuBtnArr[i].innerHTML = 'Home';
            menuBtnArr[i].addEventListener('click', function(){
                homeBtn(mainSection);
                let header = document.getElementById('header');
                header.innerHTML = '-Home-';
            });
        } else if(i==1) {
            menuBtnArr[i].innerHTML = 'Menu';
            menuBtnArr[i].addEventListener('click', function(){
                menuBtn(mainSection);
                let header = document.getElementById('header');
                header.innerHTML = '-Menu-';
            });
        } else {
            menuBtnArr[i].innerHTML = 'Contact';
            menuBtnArr[i].addEventListener('click', function(){
                contactBtn(mainSection);
                let header = document.getElementById('header');
                header.innerHTML = '-Contact-';
            });
        }
    }
    websiteBody.appendChild(menu);
}

const homeBtn = function(mainSection) {
    mainSection.innerHTML = '';
    _loadHomeInfo(mainSection);
}

const menuBtn = function(mainSection) {
    mainSection.innerHTML = '';
    _loadCheeseMenu(mainSection);
}

const contactBtn = function(mainSection) {
    mainSection.innerHTML = '';
    _loadContactInfo(mainSection);
}

const _loadHomeInfo = function(mainSection) {
     const aboutBlurb = document.createElement('p');
    const hoursSec = document.createElement('p');
    
    aboutBlurb.classList.add('info');
    hoursSec.classList.add('info');
    aboutBlurb.id = "about";
    hoursSec.id = "hours";

    aboutBlurb.innerHTML = "The Dark Brie Three met Ernest Orlop while on an innocent errand for a friend. Instantly, their connection was palpabl and a bond of trust was formed. Orlop's One-Stop Cheese Shop is proud to be the the sole distributer* of the infamous Dark Brie specialty. We are honor bound to serve our customers the healthiest and finest of cheese delicacies the world has to offer."
    hoursSec.innerHTML = "The Operating Hours* of Business:<br/>Monday - 2pm-6pm<br/>Tuesday - Closed<br/>Wednesday - 2pm-6pm<br/>Thursday - 2pm-6pm<br/>Friday - 2pm-6pm<br/>Saturday - Closed<br/>Sunday - Closed<br/>*Operating Hours Subject to Radical Change"

    mainSection.appendChild(aboutBlurb);
    mainSection.appendChild(hoursSec);}

const _loadCheeseMenu = function(mainSection){
    // Food Items Below
    _createCheeseGrid(mainSection, 3); //create cheeses in grid

}

const _createCheeseGrid = function(parent, amount) {
    let cheeseArr = []
    for(let i = 0; i < amount; i++) {
        let cheeseContainer = document.createElement('div'); // cheese container
        let cheeseInfoContainer = document.createElement('div'); // cheese text container
        let cheeseName = document.createElement('p'); // 
        let cheeseImg = document.createElement('img');
        let cheesePrice = document.createElement('p');
                cheeseImg.classList.add("cheeseImg");
        cheeseContainer.classList.add('cheese');
        cheeseContainer.id = 'cheese' + i;
        if(i == 0) {
            cheeseImg.src = cheeseImg1;
            cheesePrice.innerHTML = '5gp -- per Kg';
            cheeseName.innerHTML = "World Famous Dark <br/>Brie-licious Brie";
        };
        if(i == 1) {
            cheeseImg.src = cheeseImg2;
            cheesePrice.innerHTML = '2gp -- per Kg';
            cheeseName.innerHTML = "Mr. Softbelly's<br/>Cheddar Than The Rest";
        }
        if(i == 2) {
            cheeseImg.src = cheeseImg3;
            cheesePrice.innerHTML = '3gp -- per Kg';
            cheeseName.innerHTML = "Provolone and Behold<br/>Ernest's Best Provolone";
        }
        parent.appendChild(cheeseContainer);
        cheeseContainer.appendChild(cheeseInfoContainer);
        cheeseInfoContainer.appendChild(cheeseName);
        cheeseInfoContainer.appendChild(cheesePrice);
        cheeseContainer.appendChild(cheeseImg);
        cheeseArr.push(cheeseContainer);
    }
    return cheeseArr;
}

const _createGrid = function(element, parent, amount, cssClass, id = "default") {
    let gridArr = [];
    if(id == "default") { id = `${element}` + `${cssClass}`};
    for(let i = 0; i < amount; i++){
        let gridItem = document.createElement(`${element}`);
        gridItem.id = id + (i+1);
        gridItem.classList.add(cssClass);
        parent.appendChild(gridItem);
        gridArr.push(gridItem);
    }
    return gridArr;
}

const _loadContactInfo = function(mainSection) {
    const contactInfo = document.createElement('div');
    const physicalAddress = document.createElement('p');
    const sendingAddress = document.createElement('p');
    
    physicalAddress.classList.add('info');
    sendingAddress.classList.add('info');
    physicalAddress.id = "pAddy";
    sendingAddress.id = "sAddy";

    physicalAddress.innerHTML = "1201 Cairna Street<br/>Upper Circle<br/>Astucante"
    sendingAddress.innerHTML = "Electronic messaging services not yet rendered<br/>Please see Ernest Orlop for any message recipients associated witht the Dark Brie Three."

    contactInfo.appendChild(physicalAddress);
    contactInfo.appendChild(sendingAddress);
    mainSection.appendChild(contactInfo);
}

const _loadFooter = function() {
        // render footer
    const footer = document.createElement("footer");
    footer.classList.add("footer");
    const footerInfo = document.createElement('div');
    footerInfo.classList.add("footerInfo");
    footerInfo.innerHTML = 'This company is supported and backed by <em/>The Dark Brie Three<em/>';

    footer.appendChild(footerInfo);
    websiteBody.appendChild(footer);
}


const pageLoad = function() {
    _loadHeader();
    const mainSection = document.createElement("section");
    websiteBody.appendChild(mainSection);
    mainSection.classList.add('section');
    mainSection.id = 'mainSection';
    _loadHomeInfo (mainSection);
    _loadFooter();
    _loadMenu();
}

export { pageLoad, websiteBody }