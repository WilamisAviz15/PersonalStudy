import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list.component';
import { NgModule } from "@angular/core";
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

@NgModule({
    declarations:[ShoppingListComponent,ShoppingEditComponent],
    imports:[
        FormsModule,
        RouterModule.forChild([
            { path: '', component: ShoppingListComponent },
        ]),
        SharedModule
    ]
})
export class ShoppingListModule{}