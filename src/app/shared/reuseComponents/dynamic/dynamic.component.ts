import {AfterViewInit, Component, Injector, Input, Type, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-dynamic',
  imports: [],
  standalone: true,
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.scss'
})
export class DynamicComponent implements AfterViewInit{
  @ViewChild('container', {
    read: ViewContainerRef,
    static: true
  }) container!: ViewContainerRef;
  @Input({required: true}) componentType!: Type<any>;
  @Input() data!: any;

  ngAfterViewInit(): void {
    this.renderComponent();
  }
  constructor(private injector: Injector) {}

  renderComponent() {
    this.container.clear();

    const componentRef = this.container.createComponent(this.componentType, {
      injector: this.injector,
    })

    if(this.data) {
      Object.assign(componentRef.instance, this.data);
    }
  }
}
