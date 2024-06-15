/**
 * 200 - 299
 */
export declare const Success: {
    /**
     * The HTTP 200 OK success status response code indicates that the request has succeeded.
     * @link https://www.rfc-editor.org/rfc/rfc9110#section-15.3.1
     * @related 201 , 204
     * */
    OK: number;
    /**
     * The 201 (Created) status code indicates that the request has been fulfilled and has resulted in one or more new resources being created.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-201-created
     * */
    CREATED: number;
    ACCEPTED: number;
};
/**
 * 400 - 499
 */
export declare const ClientError: {
    readonly BAD_REQUEST: 400;
    readonly UNAUTHORIZED: 401;
    readonly PAYMENT_REQUIRED: 402;
    readonly FORBIDDEN: 403;
    readonly NOT_FOUND: 404;
    readonly NOT_ALLOWED: 405;
    readonly NOT_ACCEPTABLE: 406;
    readonly REQUEST_TIMEOUT: 408;
    readonly CONFLICT: 409;
    readonly GONE: 410;
    readonly UNSUPPORTED_MEDIA_TYPE: 415;
    readonly AUTHENTICATION_TIMEOUT: 419;
    readonly UNPROCESSABLE_CONTENT: 422;
    readonly TOO_MANY_REQUESTS: 429;
};
/**
 * 500 - 599
 */
export declare const ServerError: {
    readonly INTERNAL: 500;
    readonly NOT_IMPLEMENTED: 501;
    readonly BAD_GATEWAY: 502;
    readonly GATEWAY_TIMEOUT: 504;
};
declare const HTTPCodes: {
    ServerError: {
        readonly INTERNAL: 500;
        readonly NOT_IMPLEMENTED: 501;
        readonly BAD_GATEWAY: 502;
        readonly GATEWAY_TIMEOUT: 504;
    };
    ClientError: {
        readonly BAD_REQUEST: 400;
        readonly UNAUTHORIZED: 401;
        readonly PAYMENT_REQUIRED: 402;
        readonly FORBIDDEN: 403;
        readonly NOT_FOUND: 404;
        readonly NOT_ALLOWED: 405;
        readonly NOT_ACCEPTABLE: 406;
        readonly REQUEST_TIMEOUT: 408;
        readonly CONFLICT: 409;
        readonly GONE: 410;
        readonly UNSUPPORTED_MEDIA_TYPE: 415;
        readonly AUTHENTICATION_TIMEOUT: 419;
        readonly UNPROCESSABLE_CONTENT: 422;
        readonly TOO_MANY_REQUESTS: 429;
    };
    Success: {
        /**
         * The HTTP 200 OK success status response code indicates that the request has succeeded.
         * @link https://www.rfc-editor.org/rfc/rfc9110#section-15.3.1
         * @related 201 , 204
         * */
        OK: number;
        /**
         * The 201 (Created) status code indicates that the request has been fulfilled and has resulted in one or more new resources being created.
         * @link https://www.rfc-editor.org/rfc/rfc9110#name-201-created
         * */
        CREATED: number;
        ACCEPTED: number;
    };
};
export default HTTPCodes;
