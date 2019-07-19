import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[color]'
})
export class ColorDirective implements OnInit {

    @HostBinding('style.color') color;

    constructor(){}

    ngOnInit() {
        this.color = '#345c7d';
    }
    
    @HostListener('window:keydown', ['$event']) windowClick($event) {
        if ($event.key == "ArrowLeft") {
            this.color = '#f8b194';
        }
        else if ($event.key == "ArrowRight") {
            this.color = '#f67280';
        }
        else if ($event.key == "ArrowDown") {
            this.color = '#bf6c84';
        }
        else if ($event.key == "ArrowUp") {
            this.color = '#6c5b7b';
        }
    }
    
}