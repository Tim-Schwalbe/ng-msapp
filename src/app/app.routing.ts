import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpringBootHelloComponent } from './spring-boot-hello/spring-boot-hello.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'

const appRoutes: Routes = [
  { path: 'spring-boot-hello', component: SpringBootHelloComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
