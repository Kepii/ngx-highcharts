import { CONST_EXPR } from 'angular2/src/facade/lang';


import { ChartComponent } from './ChartComponent';
export { ChartComponent }
import { ChartSeriesComponent } from './ChartSeriesComponent';
export { ChartSeriesComponent };
import { ChartPointComponent } from './ChartPointComponent';
export { ChartPointComponent };
import { Highcharts } from './Highcharts';
export { Highcharts };

export const CHART_DIRECTIVES: any[] = CONST_EXPR([
    ChartComponent,
    ChartSeriesComponent,
    ChartPointComponent
]);
