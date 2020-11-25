import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AfterViewInit, Component, ElementRef, NgModule, ViewChild } from '@angular/core';
import { NgxMenuModule } from '../lib/ngx-menu.module';

@Component({
	selector: 'lib-example',
	template: `
		<p>Press <code>Up</code> key and <code>Down</code> key.</p>
		<lib-ngx-menu>
			<button #button1 libNgxMenuItem (focusReceived)="lastFocusedButtonNumber = 1">Button 1</button>
			<button libNgxMenuItem (focusReceived)="lastFocusedButtonNumber = 2">Button 2</button>
			<button libNgxMenuItem (focusReceived)="lastFocusedButtonNumber = 3">Button 3</button>
			<button libNgxMenuItem (focusReceived)="lastFocusedButtonNumber = 4">Button 4</button>
			<button libNgxMenuItem (focusReceived)="lastFocusedButtonNumber = 5">Button 5</button>
		</lib-ngx-menu>
		<p *ngIf="lastFocusedButtonNumber !== null">Last focused button is Button {{ lastFocusedButtonNumber }}</p>
	`,
	styles: [`
		button:focus {color: red;}
		button:focus::after {content: ' (focused!)';}
	`]
})
class ExampleComponent implements AfterViewInit {
	@ViewChild('button1') button1Ref: ElementRef;

	lastFocusedButtonNumber: number | null = null;

	ngAfterViewInit(): void {
		this.button1Ref.nativeElement.focus();
	}
}

@NgModule({
	declarations: [ExampleComponent],
	imports: [CommonModule, NgxMenuModule],
	exports: [ExampleComponent]
})
class ExampleModule {}

export default {
	title: 'Example/Menu',
	component: ExampleComponent,
	decorators: [
		moduleMetadata({
			imports: [ExampleModule],
		}),
	],
} as Meta;

const Template: Story<ExampleComponent> = (args: ExampleComponent) => ({
	component: ExampleComponent,
	props: args,
});

export const Demo = Template.bind({});
Demo.args = {};
