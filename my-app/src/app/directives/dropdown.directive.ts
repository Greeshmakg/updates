import { Directive, ElementRef, HostListener, Renderer } from "@angular/core";

@Directive ({
	selector: "[dropDownToggle]"
})

export class dropDownToggleDirective{
	constructor (private el:ElementRef , private renderer: Renderer){
		this.renderer.setElementClass(this.el.nativeElement, "dropdown-toggle", true);
	}
	@HostListener('click',['$event.target']) onClick(targetElement) {
		if(this.el.nativeElement.nextElementSibling.classList.contains("dropdown-content")){
			if(!this.el.nativeElement.nextElementSibling.classList.contains("open")){
				this.renderer.setElementClass(this.el.nativeElement.nextElementSibling, "open", true);
			} else {
				this.renderer.setElementClass(this.el.nativeElement.nextElementSibling, "open", false);
			}
		}
	}
}