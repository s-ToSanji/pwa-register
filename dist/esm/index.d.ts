import { RegisterOptions } from "./types";
export declare class Register {
    private _errorHandler;
    private _installHandler;
    private _activateHandler;
    private _unhandledrejectionHandler;
    constructor(options?: RegisterOptions);
    registerListeners(): void;
    errorHandler(event: ErrorEvent): void;
    installHandler(event: ExtendableEvent): void;
    activateHandler(event: ExtendableEvent): void;
    unhandledrejectionHandler(event: PromiseRejectionEvent): void;
}
//# sourceMappingURL=index.d.ts.map