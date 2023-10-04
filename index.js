console.log('test');

// tabs

class Tabs {
    constructor(container) {
        this.container = container;
        this.tabs = container.querySelectorAll('.trigger');
        this.coinImage = document.querySelector('.coin-img');
        this.win;
        this.lose;       
    }
    init() {
        this.tabs.forEach(tab => {
            tab.addEventListener('click', e => {
                this.toggleTabs(e);
                this.toggleContent(e);
            })
        })
    
    }
    toggleTabs(e) {
        // remove current active classes
        this.tabs.forEach(tab => tab.classList.remove('active'));
        // add new active class to clicked tab
        e.target.classList.add('active');
    }
    toggleContent(e) {
        // remove current active classes
        this.container.querySelectorAll('.content').forEach(item => {
            item.classList.remove('active');
        });
        // add new active class to content
        const selector = e.target.getAttribute('data-target');
        const content = this.container.querySelector(selector);
        content.classList.add('active');
        this.coinImage.setAttribute('src', "./CoinTossImages/both.jpg");
        this.win = 0;
        this.lose = 0;
    }
}

// create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

