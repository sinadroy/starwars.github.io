import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, finalize, Subject, takeUntil } from 'rxjs';
import { ShellMenuService } from '../../services/shell-menu/shell-menu.service';
import { Menu } from '../../types/menu';

@Component({
  selector: 'app-shell-menu',
  templateUrl: './shell-menu.component.html',
  styleUrls: ['./shell-menu.component.scss'],
})
export class ShellMenuComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  componentReady: boolean = false;
  menuData$: BehaviorSubject<Menu | null> = new BehaviorSubject<Menu | null>(null);

  constructor(
    private menuService: ShellMenuService,
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
