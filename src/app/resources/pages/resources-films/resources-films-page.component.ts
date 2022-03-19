import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, finalize, Subject, takeUntil } from 'rxjs';
import { ResourcesFilmsService } from '../../services/resources-films/resources-films.service';

@Component({
  selector: 'app-resources-films',
  templateUrl: './resources-films-page.component.html',
  styleUrls: ['./resources-films-page.component.scss']
})
export class ResourcesFilmsPageComponent implements OnInit, OnDestroy {
  
  private destroy$ = new Subject<void>();
  componentReady: boolean = false;
  data$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private resourcesFilmsService: ResourcesFilmsService) {}

  ngOnInit(): void {
    this.resourcesFilmsService
      .list()
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.componentReady = true)
      )
      .subscribe((resp: any) => {
        this.data$.next(resp.results)
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
