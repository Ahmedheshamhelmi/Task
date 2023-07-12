let items = [
    {
        itemName: "App 1",
        type: "App",
        itemImageSrc: "imgs/portfolio-1.jpg"
    },
    {
        itemName: "Web 1",
        type: "Web",
        itemImageSrc: "imgs/portfolio-2.jpg"
    },
    {
        itemName: "App 2",
        type: "App",
        itemImageSrc: "imgs/portfolio-3.jpg"
    },
    {
        itemName: "Card 2",
        type: "Card",
        itemImageSrc: "imgs/portfolio-6.jpg"
    },
    {
        itemName: "Web 2",
        type: "Web",
        itemImageSrc: "imgs/portfolio-5.jpg"
    },
    {
        itemName: "App 3",
        type: "App",
        itemImageSrc: "imgs/portfolio-4.jpg"
    },
    {
        itemName: "Card 1",
        type: "Card",
        itemImageSrc: "imgs/portfolio-7.jpg"
    },
    {
        itemName: "Web 3",
        type: "Web",
        itemImageSrc: "imgs/portfolio-8.jpg"
    },
    {
        itemName: "Card 3",
        type: "Card",
        itemImageSrc: "imgs/portfolio-9.jpg"
    },
]
const itemContainer = document.querySelector('.item-container')
const allBtn = document.querySelector('.All')
const appBtn = document.querySelector('.App')
const cardBtn = document.querySelector('.Card')
const webBtn = document.querySelector('.Web')
const lis = Array.from(document.querySelectorAll('li'))

for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const portItem = document.createElement('div')
    const itemInfo = document.createElement('div')
    const links = document.createElement('div')
    const img = document.createElement('img')

    itemContainer.append(portItem)
    portItem.classList.add('col-lg-4','port-item',`${items[i].type}`)
    portItem.append(img,itemInfo)
    itemInfo.classList.add('item-info')
    links.classList.add('links')
    itemInfo.append(links)

    img.setAttribute('src',`${items[i].itemImageSrc}`)
    img.setAttribute('alt',`${items[i].type}`)

    links.innerHTML = (`<h4>${items[i].itemName}</h4>
    <p>${items[i].type}</p>
    <i class="fa-solid fa-plus plus"></i>
    <i class="fa-solid fa-link link"></i>`)
}
function removeActive(){
    for (let j = 0; j < lis.length; j++) {
        lis[j].classList.remove('active');
    }
}

allBtn.addEventListener('click', function() {
    removeActive()
    allBtn.classList.add('active');
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const portItem = document.querySelectorAll('.port-item')[i];
        const img = portItem.querySelector('img');
        portItem.classList.remove('imgNone')
        portItem.classList.remove('d-none')
    }
});

appBtn.addEventListener('click', function() {
    removeActive()
    appBtn.classList.add('active');
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const portItem = document.querySelectorAll('.port-item')[i];
        const img = portItem.querySelector('img');
        if (item.type === 'App') {
            portItem.classList.remove('imgNone');
        } else {
            portItem.classList.add('imgNone');
        }
        window.setTimeout(function(){
            if (item.type === 'App') {
                portItem.classList.remove('d-none');
            } else {
                portItem.classList.add('d-none');
            }
        },400)
    }
});

webBtn.addEventListener('click', function() {
    removeActive()
    webBtn.classList.add('active');
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const portItem = document.querySelectorAll('.port-item')[i];
        const img = portItem.querySelector('img');
        if (item.type === 'Web') {
            portItem.classList.remove('imgNone');
        } else {
            portItem.classList.add('imgNone');
        }
        window.setTimeout(function(){
            if (item.type === 'Web') {
                portItem.classList.remove('d-none');
            } else {
                portItem.classList.add('d-none');
            }
        },400)
    }
});

cardBtn.addEventListener('click', function() {
    removeActive()
    cardBtn.classList.add('active');
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const portItem = document.querySelectorAll('.port-item')[i];
        const img = portItem.querySelector('img');
        if (item.type === 'Card') {
            portItem.classList.remove('imgNone');
        } else {
            portItem.classList.add('imgNone');
        }
        window.setTimeout(function(){
            if (item.type === 'Card') {
                portItem.classList.remove('d-none');
            } else {
                portItem.classList.add('d-none');
            }
        },400)
    }
});
