import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ConstructionCaseComponent } from './construction-case/construction-case.component';
import { ConstructionOrderComponent } from './construction-order/construction-order.component';
import { EstimateComponent } from './estimate/estimate.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'about-us', component: AboutUsComponent },
	{ path: 'estimate', component: EstimateComponent },
	{ path: 'construction-order', component: ConstructionOrderComponent },
	{ path: 'construction-case', component: ConstructionCaseComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
