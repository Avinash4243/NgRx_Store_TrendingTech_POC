import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Technology} from "../model/technology";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import {CourseDialogComponent} from "../technology-dialog/technology-dialog.component";

@Component({
    selector: 'technologies-card-list',
    templateUrl: './technologies-card-list.component.html',
    styleUrls: ['./technologies-card-list.component.css']
})
export class CoursesCardListComponent implements OnInit {

    @Input()
    technologies: Technology[];

    constructor(private dialog: MatDialog) {
    }

    ngOnInit() {

    }

    editCourse(technology: Technology) {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '400px';

        dialogConfig.data = technology;

        const dialogRef = this.dialog.open(CourseDialogComponent,
            dialogConfig);


    }

}









