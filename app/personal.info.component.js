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
    var PersonalInfoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PersonalInfoComponent = (function () {
                function PersonalInfoComponent() {
                }
                PersonalInfoComponent = __decorate([
                    core_1.Component({
                        selector: 'personal-info-comp',
                        template: "\n    <!-- Start the personal info section -->\n    <div class=\"personal-info\">\n      <h1>Personal Information</h1>\n      <div class=\"section\">\n        <img src=\"../src/images/face.jpg\">\n        <div class=\"info\">\n          <ul>\n            <li><img src=\"../src/images/icons/placeholder.svg\" alt=\"icon\">Ludwika Wary\u0144skiego 10, 00-631 Warsaw</li>\n            <li><img src=\"../src/images/icons/phone.svg\" alt=\"icon\">+48 792 683 192</li>\n            <li><img src=\"../src/images/icons/email-envelope.svg\" alt=\"icon\">abd2dev@gmail.com</li>\n            <li><a href=\"https://www.linkedin.com/in/abdullilah-alhaj-younes-061368111/\" target=\"_blank\"><img src=\"../src/images/icons/linkedin.svg\" alt=\"icon\">Abdullilah Alhaj Younes</a></li>\n            <li><img src=\"../src/images/icons/skype.svg\" alt=\"icon\">Abdullilah Alhaj Younes</li>\n            <li><a href=\"https://github.com/Abdullilah\" target=\"_blank\"><img src=\"../src/images/icons/github-logo.svg\" alt=\"icon\">https://github.com/Abdullilah</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <!-- End the personal info section -->\n    ",
                        directives: [],
                    }), 
                    __metadata('design:paramtypes', [])
                ], PersonalInfoComponent);
                return PersonalInfoComponent;
            }());
            exports_1("PersonalInfoComponent", PersonalInfoComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbmFsLmluZm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMkJBO2dCQUFBO2dCQUdBLENBQUM7Z0JBNUJEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjt3QkFDOUIsUUFBUSxFQUFFLHdvQ0FtQlA7d0JBQ0gsVUFBVSxFQUFFLEVBQUU7cUJBRWYsQ0FBQzs7eUNBQUE7Z0JBSUYsNEJBQUM7WUFBRCxDQUhBLEFBR0MsSUFBQTtZQUhELHlEQUdDLENBQUEiLCJmaWxlIjoicGVyc29uYWwuaW5mby5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BlcnNvbmFsLWluZm8tY29tcCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPCEtLSBTdGFydCB0aGUgcGVyc29uYWwgaW5mbyBzZWN0aW9uIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJwZXJzb25hbC1pbmZvXCI+XG4gICAgICA8aDE+UGVyc29uYWwgSW5mb3JtYXRpb248L2gxPlxuICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25cIj5cbiAgICAgICAgPGltZyBzcmM9XCIuLi9zcmMvaW1hZ2VzL2ZhY2UuanBnXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPjxpbWcgc3JjPVwiLi4vc3JjL2ltYWdlcy9pY29ucy9wbGFjZWhvbGRlci5zdmdcIiBhbHQ9XCJpY29uXCI+THVkd2lrYSBXYXJ5xYRza2llZ28gMTAsIDAwLTYzMSBXYXJzYXc8L2xpPlxuICAgICAgICAgICAgPGxpPjxpbWcgc3JjPVwiLi4vc3JjL2ltYWdlcy9pY29ucy9waG9uZS5zdmdcIiBhbHQ9XCJpY29uXCI+KzQ4IDc5MiA2ODMgMTkyPC9saT5cbiAgICAgICAgICAgIDxsaT48aW1nIHNyYz1cIi4uL3NyYy9pbWFnZXMvaWNvbnMvZW1haWwtZW52ZWxvcGUuc3ZnXCIgYWx0PVwiaWNvblwiPmFiZDJkZXZAZ21haWwuY29tPC9saT5cbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2FiZHVsbGlsYWgtYWxoYWoteW91bmVzLTA2MTM2ODExMS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aW1nIHNyYz1cIi4uL3NyYy9pbWFnZXMvaWNvbnMvbGlua2VkaW4uc3ZnXCIgYWx0PVwiaWNvblwiPkFiZHVsbGlsYWggQWxoYWogWW91bmVzPC9hPjwvbGk+XG4gICAgICAgICAgICA8bGk+PGltZyBzcmM9XCIuLi9zcmMvaW1hZ2VzL2ljb25zL3NreXBlLnN2Z1wiIGFsdD1cImljb25cIj5BYmR1bGxpbGFoIEFsaGFqIFlvdW5lczwvbGk+XG4gICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9BYmR1bGxpbGFoXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGltZyBzcmM9XCIuLi9zcmMvaW1hZ2VzL2ljb25zL2dpdGh1Yi1sb2dvLnN2Z1wiIGFsdD1cImljb25cIj5odHRwczovL2dpdGh1Yi5jb20vQWJkdWxsaWxhaDwvYT48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPCEtLSBFbmQgdGhlIHBlcnNvbmFsIGluZm8gc2VjdGlvbiAtLT5cbiAgICBgLFxuICBkaXJlY3RpdmVzOiBbXSxcblxufSlcbmV4cG9ydCBjbGFzcyBQZXJzb25hbEluZm9Db21wb25lbnQge1xuXG5cbn1cbiJdfQ==
