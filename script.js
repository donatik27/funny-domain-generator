const domains = ['bozo12.base.eth', 'funny123.base.eth', 'coolname.base.eth', 'randomword.base.eth'];
const domainElement = document.getElementById('domain');

function getRandomDomain() {
    return domains[Math.floor(Math.random() * domains.length)];
}

setInterval(() => {
    domainElement.textContent = getRandomDomain();
}, 2000);
