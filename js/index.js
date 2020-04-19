let tabAllContent = document.getElementById('tab-all-content');
let tabWebContent = document.getElementById('tab-web-content');
let tabAppsContent = document.getElementById('tab-apps-content');
let tabOtherContent = document.getElementById('tab-other-content');
let tabAllButton = document.getElementById('tab-all-btn');
let tabWebButton = document.getElementById('tab-web-btn');
let tabAppsButton = document.getElementById('tab-apps-btn');
let tabOtherButton = document.getElementById('tab-other-btn');

function showTabAllContent() {
    tabAllContent.className = 'tab__content_selected';
    tabWebContent.className = 'tab__content-hide';
    tabAppsContent.className = 'tab__content-hide';
    tabOtherContent.className = 'tab__content-hide';
}

function showTabWebContent() {
    tabWebContent.className = 'tab__content_selected';
    tabAllContent.className = 'tab__content-hide'; 
    tabAppsContent.className = 'tab__content-hide';
    tabOtherContent.className = 'tab__content-hide';
}

function showTabAppsContent() {
    tabAppsContent.className = 'tab__content_selected';
    tabWebContent.className = 'tab__content-hide';
    tabAllContent.className = 'tab__content-hide'; 
    tabOtherContent.className = 'tab__content-hide';
}

function showTabOtherContent() {
    tabOtherContent.className = 'tab__content_selected';
    tabAppsContent.className = 'tab__content-hide';
    tabWebContent.className = 'tab__content-hide';
    tabAllContent.className = 'tab__content-hide';    
}

tabAllButton.addEventListener('click', showTabAllContent);
tabWebButton.addEventListener('click', showTabWebContent);
tabAppsButton.addEventListener('click', showTabAppsContent);
tabOtherButton.addEventListener('click', showTabOtherContent);