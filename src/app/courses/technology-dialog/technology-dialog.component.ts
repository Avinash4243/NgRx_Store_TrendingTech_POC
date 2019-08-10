import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import * as moment from 'moment';
import {Technology} from "../model/technology";
import {CoursesService} from "../services/technologies.service";
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { TechnologyUpdated } from '../technology.actions';
import { Update } from '@ngrx/entity';

@Component({
    selector: 'technology-dialog',
    templateUrl: './technology-dialog.component.html',
    styleUrls: ['./technology-dialog.component.css']
})
export class CourseDialogComponent implements OnInit {

    technologyId: number;

    form: FormGroup;
    description: string;

    constructor(
        private coursesService: CoursesService,
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<CourseDialogComponent>,
        private store: Store<AppState>,
        @Inject(MAT_DIALOG_DATA) technology: Technology ) {

        this.technologyId = technology.id;

        this.description = technology.description;


        this.form = fb.group({
            description: [technology.description, Validators.required],
            category: [technology.category, Validators.required],
            longDescription: [technology.longDescription, Validators.required],
            promo: [technology.promo, []]
        });

    }

    ngOnInit() {

    }


    save() {

        const changes = this.form.value;

        this.coursesService.saveTechnology(this.technologyId, changes)
            .subscribe(
                () => {
                    const technology: Update<Technology> = {
                        id: this.technologyId,
                        changes
                    };
                    this.store.dispatch(new TechnologyUpdated({technology}));
                    this.dialogRef.close();
                }
            );
    }

    close() {
        this.dialogRef.close();
    }

}
