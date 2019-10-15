import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//components
import { FooterComponent } from './footer/footer.component';
import { FooterItemComponent } from './footer-item/footer-item.component';
import { SocialNetworksComponent } from './social-networks/social-networks.component';
import { IconComponent} from './icon/icon.component';
import { MenuComponent } from './menu/menu.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    FooterComponent,
    FooterItemComponent,
    SocialNetworksComponent,
    IconComponent,
    MenuComponent,
    ButtonComponent
  ],
  imports: [ BrowserModule ], 
  exports: [
    FooterComponent,
    FooterItemComponent,
    SocialNetworksComponent,
    IconComponent,
    MenuComponent,
    ButtonComponent
  ],
  providers: []
})
export class ComponentsModule { }
