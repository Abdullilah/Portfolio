System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var SubComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SubComponent = (function () {
                function SubComponent() {
                    this.myValue = 'This was written by me';
                }
                SubComponent = __decorate([
                    core_1.Component({
                        selector: 'my-sub-comp',
                        template: "\n        <h2>Hi From the sub Component</h2>\n        <p>This is another name: {{myValue}}</p>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], SubComponent);
                return SubComponent;
            }());
            exports_1("SubComponent", SubComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Yi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFBQTtvQkFDRSxZQUFPLEdBQVcsd0JBQXdCLENBQUM7Z0JBQzdDLENBQUM7Z0JBVEQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsYUFBYTt3QkFDdkIsUUFBUSxFQUFFLHNHQUdQO3FCQUNKLENBQUM7O2dDQUFBO2dCQUdGLG1CQUFDO1lBQUQsQ0FGQSxBQUVDLElBQUE7WUFGRCx1Q0FFQyxDQUFBIiwiZmlsZSI6InN1Yi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ215LXN1Yi1jb21wJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGgyPkhpIEZyb20gdGhlIHN1YiBDb21wb25lbnQ8L2gyPlxuICAgICAgICA8cD5UaGlzIGlzIGFub3RoZXIgbmFtZToge3tteVZhbHVlfX08L3A+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgU3ViQ29tcG9uZW50IHtcbiAgbXlWYWx1ZTogc3RyaW5nID0gJ1RoaXMgd2FzIHdyaXR0ZW4gYnkgbWUnO1xufVxuIl19
