export type RegisterOptions = {
    errorHandler?: (event: ErrorEvent) => void;
    installHandler?: (event: ExtendableEvent) => void;
    activateHandler?: (event: ExtendableEvent) => void;
    unhandledrejectionHandler?: (event: PromiseRejectionEvent) => void;
}