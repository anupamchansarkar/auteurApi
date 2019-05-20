(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-app-inbox-app-inbox-module"],{

/***/ "./src/app/shared/inmemory-db/inbox.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/inmemory-db/inbox.ts ***!
  \*********************************************/
/*! exports provided: InboxDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxDB", function() { return InboxDB; });
var InboxDB = /** @class */ (function () {
    function InboxDB() {
        this.messages = [
            {
                sender: {
                    name: 'Henrik Gevorg',
                    photo: 'assets/images/face-1.jpg'
                },
                date: new Date('1/25/2018'),
                selected: false,
                subject: 'Welcome to Angular Egret',
                message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n            <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n            inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n            consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n            <blockquote>\n            Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi.\n            </blockquote>\n            <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n            inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n            consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n            Thanks<br>\n            Jhone"
            },
            {
                sender: {
                    name: 'Gevorg Spartak',
                    photo: 'assets/images/face-2.jpg'
                },
                date: new Date('4/3/2017'),
                selected: false,
                subject: 'Confirm your email address',
                message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n            <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n            inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n            consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n            <blockquote>\n            Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi.\n            </blockquote>\n            <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n            inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n            consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n            <blockquote>\n            Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi.\n            </blockquote><br>\n            Thanks<br>\n            Mark"
            },
            {
                sender: {
                    name: 'Petros Toros',
                    photo: 'assets/images/face-3.jpg'
                },
                date: new Date('1/20/2017'),
                selected: false,
                subject: 'New order informations',
                message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n            <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n            inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n            consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n            <blockquote>\n            Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi.\n            </blockquote>\n            <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n            inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n            consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n            Thanks<br>\n            Jhone"
            },
            {
                sender: {
                    name: 'Henrik Gevorg',
                    photo: 'assets/images/face-1.jpg'
                },
                date: new Date('1/8/2017'),
                selected: false,
                subject: 'Welcome to Angular Egret',
                message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n            <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n            inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n            consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n            <blockquote>\n            Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi.\n            </blockquote>\n            <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n            inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n            consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n            Thanks<br>\n            Jhone"
            },
            {
                sender: {
                    name: 'Gevorg Spartak',
                    photo: 'assets/images/face-2.jpg'
                },
                date: new Date('10/3/2016'),
                selected: false,
                subject: 'Confirm your email address',
                message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n            <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n            inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n            consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n            <blockquote>\n            Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi.\n            </blockquote>\n            <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n            inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n            consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n            <blockquote>\n            Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi.\n            </blockquote><br>\n            Thanks<br>\n            Mark"
            },
            {
                sender: {
                    name: 'Petros Toros',
                    photo: 'assets/images/face-4.jpg'
                },
                date: new Date('10/3/2015'),
                selected: false,
                subject: 'New order informations',
                message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n            <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n            inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n            consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n            <blockquote>\n            Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi.\n            </blockquote>\n            <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n            inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n            consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n            Thanks<br>\n            Jhone"
            },
            {
                sender: {
                    name: 'Henrik Gevorg',
                    photo: 'assets/images/face-1.jpg'
                },
                date: new Date('10/3/2015'),
                selected: false,
                subject: 'Welcome to Angular Egret',
                message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n            <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n            inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n            consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n            <blockquote>\n            Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi.\n            </blockquote>\n            <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n            inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n            consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n            Thanks<br>\n            Jhone"
            },
            {
                sender: {
                    name: 'Gevorg Spartak',
                    photo: 'assets/images/face-2.jpg'
                },
                date: new Date('10/3/2015'),
                selected: false,
                subject: 'Confirm your email address',
                message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n            <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n            inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n            consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n            <blockquote>\n            Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi.\n            </blockquote>\n            <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n            inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n            consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n            <blockquote>\n            Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi.\n            </blockquote><br>\n            Thanks<br>\n            Mark"
            },
            {
                sender: {
                    name: 'Petros Toros',
                    photo: 'assets/images/face-4.jpg'
                },
                date: new Date('10/3/2015'),
                selected: false,
                subject: 'New order informations',
                message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n            <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n            inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n            consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n            <blockquote>\n            Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi.\n            </blockquote>\n            <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n            inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n            consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n            Thanks<br>\n            Jhone"
            },
            {
                sender: {
                    name: 'Gevorg Spartak',
                    photo: 'assets/images/face-2.jpg'
                },
                date: new Date('10/3/2015'),
                selected: false,
                subject: 'Confirm your email address',
                message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n            <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n            inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n            consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n            <blockquote>\n            Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi.\n            </blockquote>\n            <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n            inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n            consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n            <blockquote>\n            Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi.\n            </blockquote><br>\n            Thanks<br>\n            Mark"
            },
            {
                sender: {
                    name: 'Petros Toros',
                    photo: 'assets/images/face-4.jpg'
                },
                date: new Date('10/3/2015'),
                selected: false,
                subject: 'New order informations',
                message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n            <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n            inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n            consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n            <blockquote>\n            Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi.\n            </blockquote>\n            <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n            inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n            consequuntur quia fuga aspernatur impedit et? Natus, earum.</p><br>\n            Thanks<br>\n            Jhone"
            },
            {
                sender: {
                    name: 'Gevorg Spartak',
                    photo: 'assets/images/face-2.jpg'
                },
                date: new Date('10/3/2012'),
                selected: false,
                subject: 'Confirm your email address',
                message: "<p>Natus consequuntur perspiciatis esse beatae illo quos eaque.</p>\n            <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n            inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n            consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n            <blockquote>\n            Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi.\n            </blockquote>\n            <p>Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi. Iusto ipsam, nihil? Eveniet modi maxime animi excepturi a dignissimos doloribus, \n            inventore sed ratione, ducimus atque earum maiores tenetur officia commodi dicta tempora consequatur non nesciunt ipsam, \n            consequuntur quia fuga aspernatur impedit et? Natus, earum.</p>\n            <blockquote>\n            Earum, quisquam, fugit? Numquam dolor magni nisi? Suscipit odit, ipsam iusto enim culpa, \n            temporibus vero possimus error voluptates sequi.\n            </blockquote><br>\n            Thanks<br>\n            Mark"
            }
        ];
    }
    return InboxDB;
}());



/***/ }),

/***/ "./src/app/views/app-inbox/app-inbox.component.css":
/*!*********************************************************!*\
  !*** ./src/app/views/app-inbox/app-inbox.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FwcC1pbmJveC9hcHAtaW5ib3guY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/app-inbox/app-inbox.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/app-inbox/app-inbox.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n  <!-- Inbox left side bar -->\n  <mat-sidenav #sidenav [opened]=\"isSidenavOpen\" mode=\"side\" class=\"inbox-sidenav\">\n    <!-- Compose button -->\n    <button mat-raised-button class=\"mat-warn full-width\" (click)=\"openComposeDialog()\">Compose</button>\n    <!-- left side buttons -->\n    <mat-nav-list class=\"inbox-nav-list\" role=\"list\">\n      <mat-list-item class=\"primary-imenu-item\" role=\"listitem\" routerLinkActive=\"open\">\n        <a fxLayout=\"row\">\n          <mat-icon class=\"text-muted\">inbox</mat-icon>\n          <span>Inbox</span>\n        </a>\n      </mat-list-item>\n      <mat-list-item class=\"primary-imenu-item\" role=\"listitem\" routerLinkActive=\"open\">\n        <a fxLayout=\"row\">\n          <mat-icon class=\"text-muted\">folder_special</mat-icon>\n          <span>Starred</span>\n        </a>\n      </mat-list-item>\n      <mat-list-item class=\"primary-imenu-item\" role=\"listitem\" routerLinkActive=\"open\">\n        <a fxLayout=\"row\">\n          <mat-icon class=\"text-muted\">send</mat-icon>\n          <span>Sent</span>\n        </a>\n      </mat-list-item>\n      <mat-list-item class=\"primary-imenu-item\" role=\"listitem\" routerLinkActive=\"open\">\n        <a fxLayout=\"row\">\n          <mat-icon class=\"text-muted\">drafts</mat-icon>\n          <span>Draft</span>\n        </a>\n      </mat-list-item>\n      <mat-list-item class=\"primary-imenu-item\" role=\"listitem\" routerLinkActive=\"open\">\n        <a fxLayout=\"row\">\n          <mat-icon class=\"text-muted\">error</mat-icon>\n          <span>Spam</span>\n        </a>\n      </mat-list-item>\n\n      <mat-divider></mat-divider>\n\n      <mat-list-item class=\"\" role=\"listitem\" routerLinkActive=\"open\">\n        <a fxLayout=\"row\">\n          <mat-icon color=\"primary\">people</mat-icon>\n          <span>Social</span>\n        </a>\n      </mat-list-item>\n      <mat-list-item class=\"\" role=\"listitem\" routerLinkActive=\"open\">\n        <a fxLayout=\"row\">\n          <mat-icon color=\"warn\">local_offer</mat-icon>\n          <span>Promotions</span>\n        </a>\n      </mat-list-item>\n      <mat-list-item class=\"\" role=\"listitem\" routerLinkActive=\"open\">\n        <a fxLayout=\"row\">\n          <mat-icon color=\"accent\">forums</mat-icon>\n          <span>Forums</span>\n        </a>\n      </mat-list-item>\n    </mat-nav-list>\n  </mat-sidenav>\n\n  <div class=\"messages-wrap\">\n    <mat-toolbar color=\"primary\" class=\"inbox-toolbar\">\n      <!-- Left sidebar toggle button -->\n      <button mat-icon-button (click)=\"sidenav.toggle()\" fxShow [fxShow.gt-sm]=\"isMobile\"><mat-icon>short_text</mat-icon></button>\n      <!-- multiple email select and control -->\n      <mat-checkbox (change)=\"selectToggleAll()\" class=\"inbox-toggle-all mr-1\"><small>All</small></mat-checkbox>\n      <button mat-icon-button matTooltip=\"Move to trash\"><mat-icon>delete</mat-icon></button>\n      <button mat-icon-button matTooltip=\"Mark as important\" class=\"\"><mat-icon>folder_special</mat-icon></button>\n      <button mat-icon-button matTooltip=\"Move to archive\"><mat-icon>archive</mat-icon></button>\n      <button mat-icon-button matTooltip=\"Report spam\"><mat-icon>error</mat-icon></button>\n    </mat-toolbar>\n    \n    <mat-accordion>\n      <mat-expansion-panel *ngFor=\"let message of messages\" hideToggle=\"true\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            <mat-checkbox \n            [(ngModel)]=\"message.selected\" \n            (click)=\"stopProp($event)\" \n            class=\"mail-checkbox hide-on-open\">\n            </mat-checkbox>\n            <button \n            mat-icon-button \n            matTooltip=\"Mark as important\"\n            (click)=\"stopProp($event)\" \n            class=\"hide-on-open text-muted mr-1\"><mat-icon>star_border</mat-icon></button>\n\n            <span class=\"hide-on-open\">{{message.sender.name}}</span>\n            <div fxFlex=\"1 1 auto\" fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"show-on-open\">\n              <img [src]=\"message.sender.photo\" alt=\"\" class=\"inbox-face mr-1\">\n              <div fxLayout=\"column\">\n                <span class=\"m-0\" >{{message.sender.name}}</span>\n                <small class=\"text-muted m-0\">{{message.date | date}}</small>\n              </div>\n            </div>\n          </mat-panel-title>\n          <mat-panel-description>\n          <span class=\"mail-subject text-sm mat-color-default\">{{message.subject}}</span>\n          <span fxFlex></span>\n          <span class=\"text-sm\" fxHide.lt-sm=\"true\">{{message.date | relativeTime}}</span>\n          <button mat-icon-button [matMenuTriggerFor]=\"msgMenu\" (click)=\"$event.stopPropagation()\" class=\"hidden-on-open\">\n            <mat-icon class=\"text-muted\">more_vert</mat-icon>\n          </button>\n          <mat-menu #msgMenu=\"matMenu\">\n            <button mat-menu-item><mat-icon>reply</mat-icon> Reply</button>\n            <button mat-menu-item><mat-icon>archive</mat-icon> Archive</button>\n            <button mat-menu-item><mat-icon>delete</mat-icon> Delete</button>\n          </mat-menu>\n          </mat-panel-description>\n        </mat-expansion-panel-header>\n    \n        <div class=\"message-text\" [innerHTML]=\"message.message\"></div>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </div>\n\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/views/app-inbox/app-inbox.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/app-inbox/app-inbox.component.ts ***!
  \********************************************************/
/*! exports provided: AppInboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInboxComponent", function() { return AppInboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_inbox_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-inbox.service */ "./src/app/views/app-inbox/app-inbox.service.ts");
/* harmony import */ var _mail_compose_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mail-compose.component */ "./src/app/views/app-inbox/mail-compose.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppInboxComponent = /** @class */ (function () {
    function AppInboxComponent(router, media, composeDialog, inboxService) {
        this.router = router;
        this.media = media;
        this.composeDialog = composeDialog;
        this.inboxService = inboxService;
        this.isSidenavOpen = true;
        this.selectToggleFlag = false;
    }
    AppInboxComponent.prototype.ngOnInit = function () {
        this.inboxSideNavInit();
        this.messages = this.inboxService.messages;
    };
    AppInboxComponent.prototype.ngOnDestroy = function () {
        if (this.screenSizeWatcher) {
            this.screenSizeWatcher.unsubscribe();
        }
    };
    AppInboxComponent.prototype.openComposeDialog = function () {
        var dialogRef = this.composeDialog.open(_mail_compose_component__WEBPACK_IMPORTED_MODULE_5__["MailComposeComponent"]);
        dialogRef.afterClosed().subscribe(function (result) { });
    };
    AppInboxComponent.prototype.selectToggleAll = function () {
        var _this = this;
        this.selectToggleFlag = !this.selectToggleFlag;
        this.messages.forEach(function (msg) { msg.selected = _this.selectToggleFlag; });
    };
    AppInboxComponent.prototype.stopProp = function (e) {
        e.stopPropagation();
    };
    AppInboxComponent.prototype.updateSidenav = function () {
        var self = this;
        setTimeout(function () {
            self.isSidenavOpen = !self.isMobile;
            self.sideNav.mode = self.isMobile ? 'over' : 'side';
        });
    };
    AppInboxComponent.prototype.inboxSideNavInit = function () {
        var _this = this;
        this.isMobile = this.media.isActive('xs') || this.media.isActive('sm');
        this.updateSidenav();
        this.screenSizeWatcher = this.media.subscribe(function (change) {
            _this.isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm');
            _this.updateSidenav();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"])
    ], AppInboxComponent.prototype, "sideNav", void 0);
    AppInboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inbox',
            template: __webpack_require__(/*! ./app-inbox.component.html */ "./src/app/views/app-inbox/app-inbox.component.html"),
            providers: [_app_inbox_service__WEBPACK_IMPORTED_MODULE_4__["AppInboxService"]],
            styles: [__webpack_require__(/*! ./app-inbox.component.css */ "./src/app/views/app-inbox/app-inbox.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["ObservableMedia"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _app_inbox_service__WEBPACK_IMPORTED_MODULE_4__["AppInboxService"]])
    ], AppInboxComponent);
    return AppInboxComponent;
}());



/***/ }),

/***/ "./src/app/views/app-inbox/app-inbox.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/app-inbox/app-inbox.module.ts ***!
  \*****************************************************/
/*! exports provided: AppInboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInboxModule", function() { return AppInboxModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/fesm5/ngx-quill.js");
/* harmony import */ var _app_inbox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-inbox.component */ "./src/app/views/app-inbox/app-inbox.component.ts");
/* harmony import */ var _mail_compose_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mail-compose.component */ "./src/app/views/app-inbox/mail-compose.component.ts");
/* harmony import */ var _app_inbox_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-inbox.routing */ "./src/app/views/app-inbox/app-inbox.routing.ts");
/* harmony import */ var app_shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/shared/pipes/shared-pipes.module */ "./src/app/shared/pipes/shared-pipes.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppInboxModule = /** @class */ (function () {
    function AppInboxModule() {
    }
    AppInboxModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_6__["QuillModule"],
                app_shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_10__["SharedPipesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_app_inbox_routing__WEBPACK_IMPORTED_MODULE_9__["InboxRoutes"])
            ],
            declarations: [_app_inbox_component__WEBPACK_IMPORTED_MODULE_7__["AppInboxComponent"], _mail_compose_component__WEBPACK_IMPORTED_MODULE_8__["MailComposeComponent"]],
            entryComponents: [_mail_compose_component__WEBPACK_IMPORTED_MODULE_8__["MailComposeComponent"]]
        })
    ], AppInboxModule);
    return AppInboxModule;
}());



/***/ }),

/***/ "./src/app/views/app-inbox/app-inbox.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/views/app-inbox/app-inbox.routing.ts ***!
  \******************************************************/
/*! exports provided: InboxRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxRoutes", function() { return InboxRoutes; });
/* harmony import */ var _app_inbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-inbox.component */ "./src/app/views/app-inbox/app-inbox.component.ts");

var InboxRoutes = [
    { path: '', component: _app_inbox_component__WEBPACK_IMPORTED_MODULE_0__["AppInboxComponent"], data: { title: 'Inbox' } }
];


/***/ }),

/***/ "./src/app/views/app-inbox/app-inbox.service.ts":
/*!******************************************************!*\
  !*** ./src/app/views/app-inbox/app-inbox.service.ts ***!
  \******************************************************/
/*! exports provided: AppInboxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInboxService", function() { return AppInboxService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_inmemory_db_inbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/inmemory-db/inbox */ "./src/app/shared/inmemory-db/inbox.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppInboxService = /** @class */ (function () {
    function AppInboxService() {
        var inboxDB = new _shared_inmemory_db_inbox__WEBPACK_IMPORTED_MODULE_1__["InboxDB"]();
        this.messages = inboxDB.messages;
    }
    AppInboxService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AppInboxService);
    return AppInboxService;
}());



/***/ }),

/***/ "./src/app/views/app-inbox/mail-compose.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/app-inbox/mail-compose.component.ts ***!
  \***********************************************************/
/*! exports provided: MailComposeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailComposeComponent", function() { return MailComposeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MailComposeComponent = /** @class */ (function () {
    function MailComposeComponent(composeDialog) {
        this.composeDialog = composeDialog;
        this.newMailData = {};
    }
    MailComposeComponent.prototype.ngOnInit = function () {
        this.mailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            to: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
            ]),
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])
        });
    };
    MailComposeComponent.prototype.sendEmail = function () {
        // console.log(this.mailForm.value);
    };
    MailComposeComponent.prototype.closeDialog = function () {
    };
    MailComposeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mail-compose',
            template: __webpack_require__(/*! ./mail-compose.template.html */ "./src/app/views/app-inbox/mail-compose.template.html")
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], MailComposeComponent);
    return MailComposeComponent;
}());



/***/ }),

/***/ "./src/app/views/app-inbox/mail-compose.template.html":
/*!************************************************************!*\
  !*** ./src/app/views/app-inbox/mail-compose.template.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"mailForm\" novalidate (submit)=\"sendEmail()\">\n    <div class=\"pb-1\">\n        <mat-form-field class=\"full-width\">\n            <input\n            matInput\n            formControlName=\"to\"\n            placeholder=\"To\">\n        </mat-form-field>\n        <small \n        *ngIf=\"mailForm.controls.to.errors && (mailForm.controls.to.dirty || mailForm.controls.to.touched) && (mailForm.controls.to.errors.required)\" \n        class=\"form-error-msg\"> Email is required </small>\n        <small \n        *ngIf=\"mailForm.controls.to.errors && (mailForm.controls.to.dirty || mailForm.controls.to.touched) && (mailForm.controls.to.errors.email)\" \n        class=\"form-error-msg\"> Invaild email address </small>\n    </div>\n\n    <div class=\"pb-1\">\n        <mat-form-field class=\"full-width\">\n            <input\n            matInput\n            name=\"subject\"\n            formControlName=\"subject\"\n            placeholder=\"Subject\"\n            value=\"\">\n        </mat-form-field>\n        <small \n        *ngIf=\"mailForm.controls.subject.errors && \n        (mailForm.controls.subject.dirty || mailForm.controls.subject.touched) && \n        (mailForm.controls.subject.errors.required)\" \n        class=\"form-error-msg\"> Subject is required </small>\n    </div>\n    <div class=\"pb-1\">\n        <quill-editor theme=\"snow\" formControlName=\"message\"></quill-editor>\n        <small \n        *ngIf=\"mailForm.controls.message.errors && \n        (mailForm.controls.message.dirty || mailForm.controls.message.touched) && \n        (mailForm.controls.message.errors.required)\" \n        class=\"form-error-msg\"> Message is required </small>\n    </div>\n\n    <div class=\"\">\n        <button\n        type=\"button\"\n        mat-button \n        matDialogClose>Cancel</button>\n        <span fxFlex></span>\n        <button mat-icon-button><mat-icon>attachment</mat-icon></button>\n        <button mat-mini-fab class=\"mat-primary\" type=\"submit\"><mat-icon>send</mat-icon></button>\n    </div>\n</form>"

/***/ })

}]);
//# sourceMappingURL=views-app-inbox-app-inbox-module.js.map