import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, EffectCoverflow, Pagination, Mousewheel, Autoplay } from "swiper";

SwiperCore.use([Autoplay, Navigation, EffectCoverflow, Pagination, Mousewheel]);

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

	imgList: string[] = [];

	ngOnInit(): void {
		this.loadImages();
	}

	private loadImages() {
		for (let i = 0; i < 6; i++) {
			this.imgList[i] = `../../assets/images/home_img${i + 1}.jpg`;
		}
	}

}
