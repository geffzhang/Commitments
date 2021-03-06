import { NgModule } from '@angular/core';
import { CommonModule, WeekDay } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AchievementService } from './achievement.service';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { CommitmentsModule } from '../commitments/commitments.module';
import { ActivitiesModule } from '../activities/activities.module';
import { DashboardCardsModule } from '../dashboard-cards/dashboard-cards.module';
import { DailyResultsDashboardCardComponent } from './daily-results-dashboard-card.component';
import { WeeklyResultsDashboardCardComponent } from './weekly-results-dashboard-card.component';
import { MonthlyResultsDashboardCardComponent } from './monthly-results-dashboard-card.component';

const declarations = [
  DailyResultsDashboardCardComponent,
  WeeklyResultsDashboardCardComponent,
  MonthlyResultsDashboardCardComponent
];

const providers = [
  AchievementService
];

const entryComponents = [
  DailyResultsDashboardCardComponent,
  WeeklyResultsDashboardCardComponent,
  MonthlyResultsDashboardCardComponent
];

@NgModule({
  declarations,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    ActivitiesModule,
    CoreModule,
    CommitmentsModule,
    DashboardCardsModule,
    SharedModule,
  ],
  entryComponents,
  providers,
  exports:declarations
})
export class AchievementsModule { }
