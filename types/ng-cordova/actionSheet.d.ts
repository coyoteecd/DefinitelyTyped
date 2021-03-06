// Type definitions for ngCordova Action Sheet plugin
// Project: https://github.com/driftyco/ng-cordova
// Definitions by: Phil McCloghry-Laing <https://github.com/pmccloghrylaing>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="angular" />

declare namespace ngCordova {
    export interface IActionSheetService {
        show(options: ShowOptions): ng.IPromise<number>;
        hide(): ng.IPromise<void>;
    }

    export interface ShowOptions {
        title?: string | undefined;
        buttonLabels?: string[] | undefined;
        addCancelButtonWithLabel?: string | undefined;
        addDestructiveButtonWithLabel?: string | undefined;
        androidEnableCancelButton?: boolean | undefined;
        winphoneEnableCancelButton?: boolean | undefined;
    }
}
