"use strict";
exports.__esModule = true;
var HTTPCodes;
(function (HTTPCodes) {
    /**
     * 200 - 299
     */
    var Success;
    (function (Success) {
        /**
         * The HTTP 200 OK success status response code indicates that the request has succeeded.
         * @link https://www.rfc-editor.org/rfc/rfc9110#section-15.3.1
         * @related 201 , 204
         * */
        Success[Success["OK"] = 200] = "OK";
        /**
         * The 201 (Created) status code indicates that the request has been fulfilled and has resulted in one or more new resources being created.
         * @link https://www.rfc-editor.org/rfc/rfc9110#name-201-created
         * */
        Success[Success["CREATED"] = 201] = "CREATED";
        Success[Success["ACCEPTED"] = 202] = "ACCEPTED";
    })(Success = HTTPCodes.Success || (HTTPCodes.Success = {}));
    /**
     * 400 - 499
     */
    var ClientError;
    (function (ClientError) {
        ClientError[ClientError["BAD_REQUEST"] = 400] = "BAD_REQUEST";
        ClientError[ClientError["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
        ClientError[ClientError["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
        ClientError[ClientError["FORBIDDEN"] = 403] = "FORBIDDEN";
        ClientError[ClientError["NOT_FOUND"] = 404] = "NOT_FOUND";
        ClientError[ClientError["NOT_ALLOWED"] = 405] = "NOT_ALLOWED";
        ClientError[ClientError["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
        ClientError[ClientError["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
        ClientError[ClientError["CONFLICT"] = 409] = "CONFLICT";
        ClientError[ClientError["GONE"] = 410] = "GONE";
        ClientError[ClientError["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
        ClientError[ClientError["AUTHENTICATION_TIMEOUT"] = 419] = "AUTHENTICATION_TIMEOUT";
        ClientError[ClientError["UNPROCESSABLE_CONTENT"] = 422] = "UNPROCESSABLE_CONTENT";
        ClientError[ClientError["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
    })(ClientError = HTTPCodes.ClientError || (HTTPCodes.ClientError = {}));
    /**
     * 500 - 599
     */
    var ServerError;
    (function (ServerError) {
        ServerError[ServerError["INTERNAL"] = 500] = "INTERNAL";
        ServerError[ServerError["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
        ServerError[ServerError["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
        ServerError[ServerError["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
    })(ServerError = HTTPCodes.ServerError || (HTTPCodes.ServerError = {}));
})(HTTPCodes || (HTTPCodes = {}));
exports["default"] = HTTPCodes;
