import { Component } from '@angular/core';

@Component({
    selector: 'exception-404',
    template: `<exception type="404" style="min-height: 500px; height: 80%;"></exception>`
})
export class Exception4041Component {

   constructor(){
       debugger;
       alert("404 构造函数 ");
   }

    ngOnInit() {
        alert("404");
    }
}
