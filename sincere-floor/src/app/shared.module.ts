import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// material modules
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';


const materialModules = [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatTableModule,
    MatMenuModule,
];


const modules = [
    HttpClientModule,
    ...materialModules
];

@NgModule({
    declarations: [

    ],
    imports: [
        ...modules
    ],
    exports: [
        ...modules
    ],
    providers: [

    ]
})
export class SharedModule { }