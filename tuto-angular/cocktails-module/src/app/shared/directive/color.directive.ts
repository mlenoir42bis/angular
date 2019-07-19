import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[color]'
})
export class ColorDirective implements OnInit {
    @HostBinding('style.backgroundColor') backgroundColor = 'transparent';
    @HostBinding('style.color') color;

    @Input('color') data;

    constructor(private el: ElementRef, private renderer: Renderer2){}

    ngOnInit() {
        this.color = this.data.text;
    }
    
    @HostListener('click') myClickFunction() {
        console.log('test');
        this.backgroundColor = this.data.background;
    }
}