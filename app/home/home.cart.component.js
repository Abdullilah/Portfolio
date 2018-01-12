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
    var HomeCartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HomeCartComponent = (function () {
                function HomeCartComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], HomeCartComponent.prototype, "inputObj", void 0);
                HomeCartComponent = __decorate([
                    core_1.Component({
                        selector: 'home-cart-comp',
                        template: "\n        <div class=\"home-cart\">\n          <img src=\"../../src/images/{{inputObj.image}}\">\n          <div class=\"cart-text\">\n            <h2>{{inputObj.title}}</h2>\n            <p>{{inputObj.desc}}</p>\n            <span class=\"price\">{{inputObj.price}}</span>\n          </div>\n        </div>\n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeCartComponent);
                return HomeCartComponent;
            }());
            exports_1("HomeCartComponent", HomeCartComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvaG9tZS5jYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVBO2dCQUFBO2dCQUVBLENBQUM7Z0JBREM7b0JBQUMsWUFBSyxFQUFFOzttRUFBQTtnQkFkVjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFFBQVEsRUFBRSwyVEFTUDtxQkFDSixDQUFDOztxQ0FBQTtnQkFHRix3QkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRkQsaURBRUMsQ0FBQSIsImZpbGUiOiJob21lL2hvbWUuY2FydC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdob21lLWNhcnQtY29tcCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJob21lLWNhcnRcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uL3NyYy9pbWFnZXMve3tpbnB1dE9iai5pbWFnZX19XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcnQtdGV4dFwiPlxuICAgICAgICAgICAgPGgyPnt7aW5wdXRPYmoudGl0bGV9fTwvaDI+XG4gICAgICAgICAgICA8cD57e2lucHV0T2JqLmRlc2N9fTwvcD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2VcIj57e2lucHV0T2JqLnByaWNlfX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDYXJ0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgaW5wdXRPYmo6IHt0aXRsZTogc3RyaW5nLCBwcmljZTogc3RyaW5nLCBkZXNjOiBzdHJpbmd9O1xufVxuIl19
