import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, finalize, Subject, takeUntil } from 'rxjs';
import { ResourcesMenuService } from '../../services/resources-menu/resources-menu.service';
import { Menu } from '../../types/menu';

@Component({
  selector: 'app-resources-menu',
  templateUrl: './resources-menu.component.html',
  styleUrls: ['./resources-menu.component.scss'],
})
export class ResourcesMenuComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  componentReady: boolean = false;
  menuData$: BehaviorSubject<Menu | null> = new BehaviorSubject<Menu | null>(null);

  constructor(
    private menuService: ResourcesMenuService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.menuService
      .list()
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.componentReady = true)
      )
      .subscribe((menuResp: Menu) => this.menuData$.next(menuResp));
  }

  routeToResource(item: string) {
    this.router.navigate([`/resource/${item}`]);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
