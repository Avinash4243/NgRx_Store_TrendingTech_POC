import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {CoursesCardListComponent} from "./technologies-card-list/technologies-card-list.component";
import {CourseDialogComponent} from "./technology-dialog/technology-dialog.component";
import {TechnologyResolver} from "./services/technology.resolver";
import {CoursesService} from "./services/technologies.service";
import {CourseComponent} from "./technology/technology.component";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";
import {ReactiveFormsModule} from "@angular/forms";
import {MatMenuModule} from "@angular/material/menu";
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule, Routes} from "@angular/router";
import { EffectsModule } from '@ngrx/effects';
import { TechnologyEffects } from './technology.effects';
import { StoreModule } from '@ngrx/store';
import { technologiesReducers } from './technology.reducers';
import { lessonsReducers } from './lesson.reducers';



export const technologiesRoutes: Routes = [
    {
        path: "",
        component: HomeComponent

    },
    {
        path: ':id',
        component: CourseComponent,
        resolve: {
            technology: TechnologyResolver
        }
    }
];



@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatTabsModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatSlideToggleModule,
        MatDialogModule,
        MatSelectModule,
        MatDatepickerModule,
        MatMomentDateModule,
        ReactiveFormsModule,
        RouterModule.forChild(technologiesRoutes),
        StoreModule.forFeature('technologies', technologiesReducers),
        StoreModule.forFeature('lessons', lessonsReducers),
        EffectsModule.forFeature([TechnologyEffects])
    ],
    declarations: [HomeComponent, CoursesCardListComponent, CourseDialogComponent, CourseComponent],
    exports: [HomeComponent, CoursesCardListComponent, CourseDialogComponent, CourseComponent],
    entryComponents: [CourseDialogComponent],
    providers: [
        CoursesService,
        TechnologyResolver
    ]
})
export class CoursesModule {


}
