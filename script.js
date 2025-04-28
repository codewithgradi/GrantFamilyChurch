// responsive nav
document.getElementById('p-nav').addEventListener('click', () => {
    if (window.innerWidth <=768) {
        let unList = document.getElementById('links-ul');
        if (unList.style.height === '0px' || unList.style.display==='none') {
        unList.style.height = '212px';
        unList.style.display = "flex";

        }
        else {
            unList.style.display = "none";
        }
    }
})
