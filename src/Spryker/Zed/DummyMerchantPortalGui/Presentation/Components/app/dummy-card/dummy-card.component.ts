import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    standalone: false,
    selector: 'mp-dummy-card',
    templateUrl: './dummy-card.component.html',
    styleUrls: ['./dummy-card.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class DummyCardComponent {}
