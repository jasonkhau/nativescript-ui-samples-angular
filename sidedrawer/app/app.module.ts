import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { CommonDirectivesModule } from './navigation/directives/common-directives.module';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { OptionsService } from "./navigation/options/options.service";
import { ExampleItemService } from "./navigation/exampleItemService.service";
import { ExamplesListDepthComponents } from "./navigation/examples-list/examples-list.component";
import { OptionsComponent } from "./navigation/options/options.component";
import { routing } from "./app.routing";
import { AppComponent } from "./navigation/app.component";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptCommonModule,
        CommonDirectivesModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptUISideDrawerModule,
        routing
    ],
    exports: [
        NativeScriptModule,
        NativeScriptRouterModule
    ],
    declarations: [
        AppComponent,
        ExamplesListDepthComponents,
        OptionsComponent,
    ],
    providers: [
        OptionsService,
        ExampleItemService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
