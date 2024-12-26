"use strict";
/// <reference lib="WebWorker" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.Register = void 0;
class Register {
    _errorHandler;
    _installHandler;
    _activateHandler;
    _unhandledrejectionHandler;
    constructor(options = {}) {
        this._errorHandler = options?.errorHandler || this.errorHandler;
        this._installHandler = options.installHandler || this.installHandler;
        this._activateHandler = options.activateHandler || this.activateHandler;
        this._unhandledrejectionHandler = options.unhandledrejectionHandler || this.unhandledrejectionHandler;
    }
    registerListeners() {
        self.addEventListener('error', this._errorHandler.bind(this));
        self.addEventListener('activate', this._activateHandler.bind(this));
        self.addEventListener('install', this._installHandler.bind(this));
        self.addEventListener('unhandledrejection', this._unhandledrejectionHandler.bind(this));
    }
    errorHandler(event) {
        console.log('Service worker error:', event);
    }
    installHandler(event) {
        console.log('Service worker installed');
        event.waitUntil(self.skipWaiting());
    }
    activateHandler(event) {
        console.log('Service Worker: Activated');
        event.waitUntil(self.clients.claim());
    }
    unhandledrejectionHandler(event) {
        console.error('Unhandled Promise Rejection in SW:', event.reason);
    }
}
exports.Register = Register;
