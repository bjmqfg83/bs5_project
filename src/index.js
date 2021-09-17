import './index.scss';
import Carousel from 'bootstrap/js/dist/carousel';
import Offcanvas from 'bootstrap/js/dist/offcanvas';
import Collapse from 'bootstrap/js/dist/collapse';
import Modal from 'bootstrap/js/dist/modal';

function carouselHandler() {
	var myCarousel = document.querySelector('#carouselExampleIndicators');
	var carousel = new Carousel(myCarousel, {
		interval: 2000,
		wrap: true
	});
}

function offCanvasHandler() {
	var myoffcanvas = document.getElementById('bsoffcanvas');
	var bsOffcanvas = new Offcanvas(myoffcanvas, {
		backdrop: true
	});

	var myoffcanvasBtn = document.getElementById('mobile-filter-btn');
	myoffcanvasBtn.addEventListener('click', function() {
		bsOffcanvas.toggle();
	});
}

function collapseHandlerPc() {
	const myCollapseBtn = document.getElementById('filter-collapse-btn');
	const myCollapse = document.getElementById('filter-collapse');
	const filterIconMobile = document.getElementById('filter-icon');
	const myBtnText = document.getElementById('filter-btn-text');
	const bsCollapse = new Collapse(myCollapse, {
		toggle: false
	});

	myCollapseBtn.addEventListener('click', function() {
		bsCollapse.toggle();
	});

	myCollapse.addEventListener('show.bs.collapse', function() {
		myBtnText.innerText = '收起';
		filterIconMobile.classList.add('transform-rotate-180');
	});

	myCollapse.addEventListener('hide.bs.collapse', function() {
		myBtnText.innerText = '顯示更多';
		filterIconMobile.classList.remove('transform-rotate-180');
	});
}

function collapseHandler() {
	const myCollapseBtn = document.getElementById('filter-mobile-collapse-btn');
	const myCollapse = document.getElementById('filter-mobile-collapse');
	const filterIconMobile = document.getElementById('filter-mobile-icon');
	const myBtnText = document.getElementById('filter-mobile-btn-text');
	const bsCollapse = new Collapse(myCollapse, {
		toggle: false
	});

	myCollapseBtn.addEventListener('click', function() {
		bsCollapse.toggle();
	});

	myCollapse.addEventListener('show.bs.collapse', function() {
		myBtnText.innerText = '收起';
		filterIconMobile.classList.add('transform-rotate-180');
	});

	myCollapse.addEventListener('hide.bs.collapse', function() {
		myBtnText.innerText = '顯示更多';
		filterIconMobile.classList.remove('transform-rotate-180');
	});
}
function renderCardItem() {
	const card_container = document.getElementById('list');
	const card_item = document.getElementById('card-item');
	for (var i = 0; i < 20; i++) {
		card_container.appendChild(card_item.content.cloneNode(true));
	}
	if (i === 20) {
		card_item.remove();
	}
}

function renderCardItem_origin() {
	const card_container = document.getElementById('list');
	for (var i = 0; i < 20; i++) {
		const card = document.createElement('div');
		card.classList.add('col');
		card.innerHTML = `
			<div class="mt-4">
						<div class="card">
							<img src="https://bruce-fe-ec.web.app/images/item.png" class="card-img-top">
							<div class="card-body p-2">
								<h5 class="card-title text-primary">$2000</h5>
								<p class="card-text fs-7">這是一罐沐浴乳這是一罐沐浴乳這是一罐沐浴乳</p>
								<p class="card-text text-end fs-8">已售出 1000</p>
							</div>
							<span class="badge bg-primary position-absolute top-0 end-0">雙11優惠</span>
						</div>
				</div>`;
		card_container.appendChild(card);
	}
}

function searchHandler() {
	const searchBtn = document.getElementById('search-btn');
	const itemsWrapper = document.getElementById('items-wrapper');
	const spinnerWrapper = document.getElementById('spinner-wrapper');

	searchBtn.addEventListener('click', function() {
		itemsWrapper.classList.add('d-none');
		spinnerWrapper.classList.remove('d-none');
		setTimeout(function() {
			itemsWrapper.classList.remove('d-none');
			spinnerWrapper.classList.add('d-none');
		}, 1500);
	});
}

function modalHandler() {
	const cartBtn = document.getElementById('cart-btn');
	const cart = new Modal(document.getElementById('cart'), {
		keyboard: false
	});
	cartBtn.addEventListener('click', function() {
		cart.toggle();
	});
}

carouselHandler();
offCanvasHandler();
collapseHandler();
collapseHandlerPc();
renderCardItem();
searchHandler();
modalHandler();
