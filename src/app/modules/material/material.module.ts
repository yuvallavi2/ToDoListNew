import {NgModule} from '@angular/core';

import {
	MatButtonModule,
	MatMenuModule,
	MatToolbarModule,
	MatIconModule,
	MatCheckboxModule,
	
	MatCardModule, MatListModule, MatInputModule, MatSliderModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
	imports: [
		MatButtonModule,
		MatMenuModule,
		MatToolbarModule,
		MatIconModule,
		MatCardModule,
		MatListModule,
		MatSliderModule,
		MatInputModule,
		MatCheckboxModule,
		
		BrowserAnimationsModule
		
	],
	exports: [
		MatButtonModule,
		MatMenuModule,
		MatToolbarModule,
		MatIconModule,
		MatCardModule,
		MatListModule,
		MatInputModule,
		MatSliderModule,
		MatCheckboxModule,
	
	]
})
export class MaterialModule
{
	constructor() {
		// 		console.log('Material Module Started');
	}
}
