import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { navigationEn } from '../../_nav';
import { LanguageService, MiscService, UserService } from '../../services';
import { PageLoadComponent } from '../../views/pageload.component';

@Component({
  selector: 'app-sidebar-nav',
  template: `
  <nav class="sidebar-nav">
    <ul class="nav">
  		<ng-template ngFor let-navitem [ngForOf]="navigationEn">
          <li *ngIf="isDivider(navitem)" class="mdivider"></li>
          <ng-template [ngIf]="isTitle(navitem) && selectedLang=='en' && userViewNavItem[navitem.index]">
            <app-sidebar-nav-title-en [title]='navitem'></app-sidebar-nav-title-en>
          </ng-template>
          <ng-template [ngIf]="isTitle(navitem) && selectedLang=='fr' && userViewNavItem[navitem.index]">
            <app-sidebar-nav-title-fr [title]='navitem'></app-sidebar-nav-title-fr>
          </ng-template>
          <ng-template [ngIf]="!isDivider(navitem) && !isTitle(navitem) && userViewNavItem[navitem.index]">
            <app-sidebar-nav-item [item]='navitem'></app-sidebar-nav-item>
          </ng-template>
        </ng-template>
    </ul>
  </nav>
  `
})
export class AppSidebarNavComponent extends PageLoadComponent implements OnInit {

  public navigationEn = navigationEn;
  userViewNavItem: boolean[];

  constructor(
    private languageService: LanguageService) { super(); }

  ngOnInit() {
    this.userViewNavItem = [];

    this.languageService.currentMessage.subscribe(LangSelect => this.selectedLang = LangSelect);

    this.checkUserID(this.navigationEn);
  }

  checkUserID(navitem) {
    for (let i = 0; i < navitem.length; i++) {
      this.userViewNavItem[i] = true;
    }
  }

  public isDivider(item) {
    return item.divider;
  }

  public isTitle(item) {
    return item.title;
  }
}

@Component({
  selector: 'app-sidebar-nav-item',
  template: `
  <li *ngIf="!isDropdown(); else dropdown" [ngClass]="hasClass() ? 'nav-item ' + item.class : 'nav-item'">
  <app-sidebar-nav-link [link]='item'></app-sidebar-nav-link>
  </li>
  <ng-template #dropdown>
  <li [ngClass]="hasClass() ? 'nav-item nav-dropdown ' + item.class : 'nav-item nav-dropdown'"
  [class.open]="isActive()"
  routerLinkActive="open"
  appNavDropdown>
  <app-sidebar-nav-dropdown [link]='item'></app-sidebar-nav-dropdown>
  </li>
  </ng-template>
  `
})

export class AppSidebarNavItemComponent {
  @Input() item: any;

  constructor(private router: Router) { }

  public hasClass() {
    return this.item.class ? true : false;
  }

  public isDropdown() {
    return this.item.children ? true : false;
  }

  public thisUrl() {
    return this.item.url;
  }

  public isActive() {
    return this.router.isActive(this.thisUrl(), false);
  }
}

@Component({
  selector: 'app-sidebar-nav-link',
  template: `
  <a *ngIf="!isExternalLink(); else external"
  [ngClass]="hasVariant() ? 'nav-link nav-link-' + link.variant : 'nav-link'"
  routerLinkActive="active"
  [routerLink]="[link.url]"
  (click)="hideMobile();closeAll()">
  <i *ngIf="isIcon()" class="{{ link.icon }}"></i>
  {{ getName() }}
  <span *ngIf="isBadge()" [ngClass]="'badge badge-pill badge-' + link.badge.variant">{{ link.badge.text }}</span>
  </a>
  <ng-template #external>
  <a [ngClass]="hasVariant() ? 'nav-link nav-link-' + link.variant : 'nav-link'" href="{{link.url}}">
  <i *ngIf="isIcon()" class="{{ link.icon }}"></i>
  {{ getName() }}
  <span *ngIf="isBadge()" [ngClass]="'badge badge-pill badge-' + link.badge.variant">{{ link.badge.text }}</span>
  </a>
  </ng-template>
  `
})

export class AppSidebarNavLinkComponent extends PageLoadComponent implements OnInit {
  @Input() link: any;

  constructor(
    private languageService: LanguageService,
    private miscService: MiscService) { super(); }

  ngOnInit() {
    this.languageService.currentMessage.subscribe(LangSelect => this.selectedLang = LangSelect);
  }

  public hasVariant() {
    return this.link.variant ? true : false;
  }

  public isBadge() {
    return this.link.badge ? true : false;
  }

  public isExternalLink() {
    return this.link.url.substring(0, 4) === 'http' ? true : false;
  }

  public isIcon() {
    return this.link.icon ? true : false;
  }

  public hideMobile() {
    if (document.body.classList.contains('sidebar-mobile-show')) {
      document.body.classList.toggle('sidebar-mobile-show');
    }
  }

  public getName() {
    return this.selectedLang === 'en' ? this.link.name : this.link.name_fr;
  }

  public closeAll() {
    this.miscService.closeAll(true);
  }
}

@Component({
  selector: 'app-sidebar-nav-dropdown',
  template: `
  <a class="nav-link nav-dropdown-toggle" appNavDropdownToggle>
  <i *ngIf="isIcon()" class="{{ link.icon }}"></i>
  {{ getName() }}
  <span *ngIf="isBadge()" [ngClass]="'badge badge-pill badge-' + link.badge.variant">{{ link.badge.text }}</span>
  </a>
  <ul class="nav-dropdown-items">
  <ng-template ngFor let-child [ngForOf]="link.children">
  <app-sidebar-nav-item [item]='child'></app-sidebar-nav-item>
  </ng-template>
  </ul>
  `
})

export class AppSidebarNavDropdownComponent extends PageLoadComponent implements OnInit {
  @Input() link: any;

  constructor(
    private languageService: LanguageService) { super(); }

  ngOnInit() {
    this.languageService.currentMessage.subscribe(LangSelect => this.selectedLang = LangSelect);
  }

  public isBadge() {
    return this.link.badge ? true : false;
  }

  public isIcon() {
    return this.link.icon ? true : false;
  }

  public getName() {
    return this.selectedLang === 'en' ? this.link.name : this.link.name_fr;
  }
}

@Component({
  selector: 'app-sidebar-nav-title-en',
  template: ''
})

export class AppSidebarNavTitleEnComponent extends PageLoadComponent implements OnInit {
  @Input() title: any;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private languageService: LanguageService) {
    super();
  }

  ngOnInit() {
    const titleName = this.title.name;
    this.languageService.changeNavTitle(titleName, this.title, this.el, this.renderer);
  }
}

@Component({
  selector: 'app-sidebar-nav-title-fr',
  template: ''
})

export class AppSidebarNavTitleFrComponent extends PageLoadComponent implements OnInit {
  @Input() title: any;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private languageService: LanguageService) { super(); }

  ngOnInit() {
    const titleName = this.title.name_fr;
    this.languageService.changeNavTitle(titleName, this.title, this.el, this.renderer);
  }
}

export const APP_SIDEBAR_NAV = [
  AppSidebarNavComponent,
  AppSidebarNavDropdownComponent,
  AppSidebarNavItemComponent,
  AppSidebarNavLinkComponent,
  AppSidebarNavTitleEnComponent,
  AppSidebarNavTitleFrComponent
];
