import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {LoginComponent} from "./components/user/login/login.component";
import {RegisterComponent} from "./components/user/register/register.component";
import {HomeComponent} from "./components/home/home.component";
import {TestComponent} from "./components/test/test.component";
import {ProfileComponent} from "./components/user/profile/profile.component";
import {WebsiteListComponent} from "./components/website/website-list/website-list.component";
import {WebsiteNewComponent} from "./components/website/website-new/website-new.component";
import {WebsiteEditComponent} from "./components/website/website-edit/website-edit.component";
import {PageListComponent} from "./components/page/page-list/page-list.component";
import {PageNewComponent} from "./components/page/page-new/page-new.component";
import {PageEditComponent} from "./components/page/page-edit/page-edit.component";
import {WidgetListComponent} from "./components/widget/widget-list/widget-list.component";
import {WidgetChooserComponent} from "./components/widget/widget-chooser/widget-chooser.component";
import {WidgetEditComponent } from "./components/widget/widget-edit/widget-edit.component";
import {WidgetHeaderComponent} from "./components/widget/widget-edit/widget-header/widget-header.component";
import {WidgetImageComponent} from "./components/widget/widget-edit/widget-image/widget-image.component";
import {WidgetYoutubeComponent} from "./components/widget/widget-edit/widget-youtube/widget-youtube.component";
import { FlickrImageSearchComponent } from './components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';
import {AuthGuard} from './services/auth-guard.service';

// Import all other components here
const APP_ROUTES : Routes = [
  { path : 'test', component: TestComponent},
  { path : 'login' , component: LoginComponent},
  { path : 'register' , component:RegisterComponent },
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path : 'user/:userId' , component: ProfileComponent},
  { path : 'user/:userId/website' , component: WebsiteListComponent},
  { path : 'user/:userId/website/new' , component: WebsiteNewComponent},
  { path : 'user/:userId/website/:wid' , component: WebsiteEditComponent},
  { path : 'user/:userId/website/:wid/page' , component: PageListComponent},
  { path : 'user/:userId/website/:wid/page/new' , component: PageNewComponent},
  { path : 'user/:userId/website/:wid/page/:pid' , component: PageEditComponent},
  { path : 'user/:userId/website/:wid/page/:pid/widget' , component: WidgetListComponent},
  { path : 'user/:userId/website/:wid/page/:pid/widget/new' , component: WidgetChooserComponent},
  { path : 'user/:userId/website/:wid/page/:pid/widget/:wgid' , component: WidgetEditComponent },
  { path : 'user/:userId/website/:wid/page/:pid/widget/:wgid' , component: WidgetHeaderComponent},
  { path : 'user/:userId/website/:wid/page/:pid/widget/:wgid' , component: WidgetImageComponent},
  { path : 'user/:userId/website/:wid/page/:pid/widget/:wgid' , component: WidgetYoutubeComponent},
  { path : 'user/:userId/website/:wid/page/:pid/widget/:wgid/search' , component: FlickrImageSearchComponent}
];
// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
