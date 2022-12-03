import {animate, style, transition, trigger} from '@angular/animations';
import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {NG_DOC_CONTEXT, NgDocContext, NgDocThemeService} from '@ng-doc/app';
import {preventInitialChildAnimations} from '@ng-doc/ui-kit';

@Component({
	animations: [
		trigger('switchIcon', [
				transition(
					':enter',
					[
						style({transform: 'translateY({{from}})', position: 'absolute', opacity: 0}),
						animate('225ms cubic-bezier(0.4,0.0,0.2,1)', style({transform: 'translateY(0%)', position: 'absolute', opacity: 1})),
					],
					{params: {from: '-100%'}},
				),
				transition(
					':leave',
					[
						style({transform: 'translateY(0%)', position: 'absolute', opacity: 1}),
						animate('225ms cubic-bezier(0.4,0.0,0.2,1)', style({transform: 'translateY({{to}})', position: 'absolute', opacity: 0})),
					],
					{params: {to: '-100%'}},
				),
		]),
		preventInitialChildAnimations,
	],
	selector: 'ng-doc-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	constructor(
		@Inject(NG_DOC_CONTEXT)
		private readonly ngDocContext: NgDocContext,
		protected readonly themeService: NgDocThemeService,

	) {
		console.log('context', this.ngDocContext);
	}

	toggleTheme(): void {
		if (this.themeService.currentTheme) {
			this.themeService.set()
		} else {
			this.themeService.set('ng-doc-night');
		}
	}
}
