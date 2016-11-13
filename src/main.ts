import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { App } from './app';
import { Main } from './app/containers';

@NgModule({
    imports: [BrowserModule],
    declarations: [App, Main],
    bootstrap: [App],
})
export class AppModule { };

platformBrowserDynamic().bootstrapModule(AppModule);
