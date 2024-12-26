/// <reference lib="WebWorker" />

import { RegisterOptions } from "./types";

declare let self: ServiceWorkerGlobalScope;

export class Register {
    private _errorHandler: RegisterOptions["errorHandler"];
    private _installHandler: RegisterOptions["installHandler"];
    private _activateHandler: RegisterOptions["activateHandler"];
    private _unhandledrejectionHandler: RegisterOptions["unhandledrejectionHandler"];

    constructor(options: RegisterOptions = {}) {
        this._errorHandler = options?.errorHandler || this.errorHandler;
        this._installHandler = options.installHandler || this.installHandler;
        this._activateHandler = options.activateHandler || this.activateHandler;
        this._unhandledrejectionHandler = options.unhandledrejectionHandler || this.unhandledrejectionHandler;
    }
    registerListeners(): void {
        self.addEventListener('error', this._errorHandler!.bind(this));
        self.addEventListener('activate', this._activateHandler!.bind(this));
        self.addEventListener('install', this._installHandler!.bind(this));
        self.addEventListener('unhandledrejection', this._unhandledrejectionHandler!.bind(this));
    }
    errorHandler(event: ErrorEvent): void {
        console.log('Service worker error:', event);
    }
    installHandler(event: ExtendableEvent) {
        console.log('Service worker installed');
        event.waitUntil(self.skipWaiting());
    }
    activateHandler(event: ExtendableEvent): void {
        console.log('Service Worker: Activated');
        event.waitUntil(self.clients.claim());
    }
    unhandledrejectionHandler(event: PromiseRejectionEvent): void {
        console.error('Unhandled Promise Rejection in SW:', event.reason);
    }
}