import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MainComponent } from './main/main.component'
import { RouterModule, Routes } from '@angular/router'
import { HighStakesComponent } from './high-stakes/high-stakes.component'
import { OffLimitsComponent } from './off-limits/off-limits.component'
import { CraftComponent } from './craft/craft.component'
import { FelineConservationComponent } from './feline-conservation/feline-conservation.component'
import { SurrogatesComponent } from './surrogates/surrogates.component'
import { CocktailsComponent } from './cocktails/cocktails.component'
import { MerchandiseComponent } from './merchandise/merchandise.component'
import { AboutusComponent } from './aboutus/aboutus.component'
import { OurstoryComponent } from './ourstory/ourstory.component'
import { sharedModule } from '.././@shared/shared.module'
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'high-stakes',
    component: HighStakesComponent,
  },
  {
    path: 'off-limits',
    component: OffLimitsComponent,
  },
  {
    path: 'craft',
    component: CraftComponent,
  },
  {
    path: 'feline-conservation',
    component: FelineConservationComponent,
  },
  {
    path: 'surrogates',
    component: SurrogatesComponent,
  },
  {
    path: 'cocktails',
    component: CocktailsComponent,
  },
  {
    path: 'ACCESSORIES',
    component: MerchandiseComponent,
  },
  {
    path: 'about',
    component: AboutusComponent,
  },
  {
    path: 'our-story',
    component: OurstoryComponent,
  },
]

@NgModule({
  declarations: [
    MainComponent,
    HighStakesComponent,
    OffLimitsComponent,
    CraftComponent,
    FelineConservationComponent,
    SurrogatesComponent,
    CocktailsComponent,
    MerchandiseComponent,
    AboutusComponent,
    OurstoryComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), sharedModule],
  exports: [RouterModule],
})
export class MainModule {}
