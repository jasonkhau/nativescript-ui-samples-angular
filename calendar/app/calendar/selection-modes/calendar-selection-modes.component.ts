import { OptionsExampleBase } from "../../options-example-base";
import { Component, Injectable, ViewChild } from "@angular/core";
import { Router } from '@angular/router';
import { Page } from "tns-core-modules/ui/page";
import { CalendarSelectionMode } from "nativescript-ui-calendar";
import * as applicationModule from "tns-core-modules/application";
import { OptionsService } from "../../navigation/options/options.service";
import { RadCalendarComponent } from "nativescript-ui-calendar/angular";

@Component({
    moduleId: module.id,
    selector: "tk-calendar-selection-modes",
    templateUrl: "calendar-selection-modes.component.html"
})
@Injectable()
// >> angular-calendar-selection-modes
export class CalendarSelectionModesComponent extends OptionsExampleBase {
    private _optionsParamName: string;
    private _selectionMode: CalendarSelectionMode;
    constructor(private _page: Page, private _router: Router, private _optionsService: OptionsService) {
        super();
        if (applicationModule.ios) {
            this._page.on("navigatingTo", this.onNavigatingTo, this);
            this._optionsParamName = "selectionMode";
            this._optionsService.paramName = this._optionsParamName;
            this.router = _router;
            this.navigationParameters = { selectedIndex: 0, paramName: this._optionsParamName, items: ["None", "Single", "Multiple", "Range"] };
        }
        this._selectionMode = CalendarSelectionMode.None;
    }

    get selectionMode() {
        return this._selectionMode;
    }

    @ViewChild("myCalendar", { static: false }) _calendar: RadCalendarComponent;

    onNoneTap() {
        this._selectionMode = CalendarSelectionMode.None;
        this._calendar.nativeElement.reload();
    }

    onSingleTap() {
        this._selectionMode = CalendarSelectionMode.Single;
        this._calendar.nativeElement.reload();
    }

    onMultipleTap() {
        this._selectionMode = CalendarSelectionMode.Multiple;
        this._calendar.nativeElement.reload();
    }

    onRangeTap() {
        this._selectionMode = CalendarSelectionMode.Range;
        this._calendar.nativeElement.reload();
    }

    public onNavigatingTo(args) {
        if (args.isBackNavigation) {
            if (this._optionsService.paramName === this._optionsParamName) {
                switch (this._optionsService.paramValue) {
                    case 0:
                        this.onNoneTap();
                        this.navigationParameters.selectedIndex = 0;
                        break;
                    case 1:
                        this.onSingleTap();
                        this.navigationParameters.selectedIndex = 1;
                        break;
                    case 2:
                        this.onMultipleTap();
                        this.navigationParameters.selectedIndex = 2;
                        break;
                    case 3:
                        this.onRangeTap();
                        this.navigationParameters.selectedIndex = 3;
                        break;
                    default:
                        break;
                }
            }
        }
    }
}
// << angular-calendar-selection-modes
