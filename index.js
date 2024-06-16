"use strict";
exports.__esModule = true;
var Success = {
    /**
     * The 200 OK success status response code indicates that the request has succeeded.
     * @link https://www.rfc-editor.org/rfc/rfc9110#section-15.3.1
     * @related 201 Created, 204 No Content
     */
    OK: 200,
    /**
     * The 201 Created status code indicates that the request has been fulfilled and has resulted in one or more new resources being created.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-201-created
     * @related 200 OK, 204 No Content
     */
    CREATED: 201,
    /**
     * The 202 Accepted status code indicates that the request has been accepted for processing, but the processing has not been completed.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-202-accepted
     * @related 200 OK, 201 Created
     */
    ACCEPTED: 202,
    /**
     * The 203 Non-Authoritative Information status code indicates that the request was successful but the enclosed payload has been modified from that of the origin server's 200 OK response by a transforming proxy.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-203-non-authoritative-inform
     * @related 200 OK
     */
    NON_AUTHORITATIVE_INFORMATION: 203,
    /**
     * The 204 No Content status code indicates that the server has successfully fulfilled the request and that there is no additional content to send in the response payload body.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-204-no-content
     * @related 200 OK, 205 Reset Content
     */
    NO_CONTENT: 204,
    /**
     * The 205 Reset Content status code indicates that the server has fulfilled the request and desires that the user agent reset the "document view" which caused the request to be sent.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-205-reset-content
     * @related 204 No Content
     */
    RESET_CONTENT: 205,
    /**
     * The 206 Partial Content status code indicates that the server is successfully fulfilling a range request for the target resource by transferring one or more parts of the selected representation that correspond to the satisfiable ranges found in the request's Range header field.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-206-partial-content
     * @related 200 OK
     */
    PARTIAL_CONTENT: 206,
    /**
     * The 207 Multi-Status status code provides status for multiple independent operations.
     * @link https://www.rfc-editor.org/rfc/rfc4918#section-13
     * @related 200 OK
     */
    MULTI_STATUS: 207,
    /**
     * The 208 Already Reported status code indicates that the members of a DAV binding have already been enumerated in a preceding part of the (multi-status) response, and are not being included again.
     * @link https://www.rfc-editor.org/rfc/rfc5842#section-7.1
     * @related 207 Multi-Status
     */
    ALREADY_REPORTED: 208,
    /**
     * The 226 IM Used status code indicates that the server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.
     * @link https://www.rfc-editor.org/rfc/rfc3229#section-10.4.1
     * @related 200 OK
     */
    IM_USED: 226
};
var Redirection = {
    /**
     * The 300 Multiple Choices status code indicates that the requested resource corresponds to any one of a set of representations, each with its own specific location.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-300-multiple-choices
     * @related 301 Moved Permanently, 302 Found, 307 Temporary Redirect
     */
    MULTIPLE_CHOICES: 300,
    /**
     * The 301 Moved Permanently status code indicates that the resource has been definitively moved to the URL given by the Location headers.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-301-moved-permanently
     * @related 300 Multiple Choices, 302 Found, 308 Permanent Redirect
     */
    MOVED_PERMANENTLY: 301,
    /**
     * The 302 Found status code indicates that the target resource resides temporarily under a different URI.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-302-found
     * @related 300 Multiple Choices, 301 Moved Permanently, 307 Temporary Redirect
     */
    FOUND: 302,
    /**
     * The 303 See Other status code indicates that the server is redirecting the user agent to a different resource, as indicated by the URI in the Location header field, which is intended to provide an indirect response to the original request.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-303-see-other
     * @related 301 Moved Permanently, 302 Found, 307 Temporary Redirect
     */
    SEE_OTHER: 303,
    /**
     * The 304 Not Modified status code indicates that a conditional GET or HEAD request has been received and would have resulted in a 200 OK response if it were not for the fact that the condition evaluated to false.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-304-not-modified
     * @related 200 OK
     */
    NOT_MODIFIED: 304,
    /**
     * The 307 Temporary Redirect status code indicates that the target resource resides temporarily under a different URI and the user agent must not change the request method if it performs an automatic redirection to that URI.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-307-temporary-redirect
     * @related 300 Multiple Choices, 301 Moved Permanently, 302 Found
     */
    TEMPORARY_REDIRECT: 307,
    /**
     * The 308 Permanent Redirect status code indicates that the target resource has been permanently moved to the URL given by the Location headers.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-308-permanent-redirect
     * @related 300 Multiple Choices, 301 Moved Permanently, 302 Found
     */
    PERMANENT_REDIRECT: 308
};
var ClientError = {
    /**
     * The 400 Bad Request status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-400-bad-request
     * @related 401 Unauthorized, 403 Forbidden, 404 Not Found
     */
    BAD_REQUEST: 400,
    /**
     * The 401 Unauthorized status code indicates that the request has not been applied because it lacks valid authentication credentials for the target resource.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-401-unauthorized
     * @related 403 Forbidden, 407 Proxy Authentication Required
     */
    UNAUTHORIZED: 401,
    /**
     * The 402 Payment Required status code is reserved for future use.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-402-payment-required
     * @related 403 Forbidden
     */
    PAYMENT_REQUIRED: 402,
    /**
     * The 403 Forbidden status code indicates that the server understood the request but refuses to authorize it.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-403-forbidden
     * @related 401 Unauthorized, 404 Not Found
     */
    FORBIDDEN: 403,
    /**
     * The 404 Not Found status code indicates that the server cannot find the requested resource.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-404-not-found
     * @related 403 Forbidden, 410 Gone
     */
    NOT_FOUND: 404,
    /**
     * The 405 Method Not Allowed status code indicates that the method received in the request-line is known by the origin server but not supported by the target resource.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-405-method-not-allowed
     * @related 404 Not Found, 501 Not Implemented
     */
    METHOD_NOT_ALLOWED: 405,
    /**
     * The 406 Not Acceptable status code indicates that the target resource does not have a current representation that would be acceptable to the user agent.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-406-not-acceptable
     * @related 200 OK
     */
    NOT_ACCEPTABLE: 406,
    /**
     * The 407 Proxy Authentication Required status code indicates that the client needs to authenticate itself in order to use a proxy.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-407-proxy-authentication-re
     * @related 401 Unauthorized
     */
    PROXY_AUTHENTICATION_REQUIRED: 407,
    /**
     * The 408 Request Timeout status code indicates that the server did not receive a complete request message within the time that it was prepared to wait.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-408-request-timeout
     * @related 504 Gateway Timeout
     */
    REQUEST_TIMEOUT: 408,
    /**
     * The 409 Conflict status code indicates that the request could not be completed due to a conflict with the current state of the target resource.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-409-conflict
     * @related 410 Gone, 423 Locked
     */
    CONFLICT: 409,
    /**
     * The 410 Gone status code indicates that access to the target resource is no longer available at the origin server and that this condition is likely to be permanent.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-410-gone
     * @related 404 Not Found
     */ GONE: 410,
    /**
     * The 411 Length Required status code indicates that the server refuses to accept the request without a defined Content-Length.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-411-length-required
     * @related 400 Bad Request
     */
    LENGTH_REQUIRED: 411,
    /**
     * The 412 Precondition Failed status code indicates that one or more preconditions given in the request header fields evaluated to false when tested on the server.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-412-precondition-failed
     * @related 428 Precondition Required
     */
    PRECONDITION_FAILED: 412,
    /**
     * The 413 Payload Too Large status code indicates that the server is refusing to process a request because the request payload is larger than the server is willing or able to process.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-413-payload-too-large
     * @related 422 Unprocessable Content
     */
    PAYLOAD_TOO_LARGE: 413,
    /**
     * The 414 URI Too Long status code indicates that the server is refusing to service the request because the target URI is longer than the server is willing to interpret.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-414-uri-too-long
     * @related 400 Bad Request
     */
    URI_TOO_LONG: 414,
    /**
     * The 415 Unsupported Media Type status code indicates that the origin server is refusing to service the request because the payload is in a format not supported by the target resource.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-415-unsupported-media-type
     * @related 406 Not Acceptable
     */
    UNSUPPORTED_MEDIA_TYPE: 415,
    /**
     * The 416 Range Not Satisfiable status code indicates that none of the ranges in the request's Range header field overlap the current extent of the selected resource or that the set of ranges requested has been rejected due to invalid ranges or insufficient resources.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-416-range-not-satisfiable
     * @related 206 Partial Content
     */
    RANGE_NOT_SATISFIABLE: 416,
    /**
     * The 417 Expectation Failed status code indicates that the expectation given in the request's Expect header field could not be met by at least one of the inbound servers.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-417-expectation-failed
     * @related 100 Continue
     */
    EXPECTATION_FAILED: 417,
    /**
     * The 418 I'm a teapot status code indicates that the server refuses to brew coffee because it is, permanently, a teapot. This is an April Fools' joke from 1998, and is not expected to be implemented by actual HTTP servers.
     * @link https://www.rfc-editor.org/rfc/rfc2324#section-2.3.2
     * @related None
     */
    IM_A_TEAPOT: 418,
    /**
     * The 421 Misdirected Request status code indicates that the request was directed at a server that is not able to produce a response.
     * @link https://www.rfc-editor.org/rfc/rfc7540#section-9.1.2
     * @related 400 Bad Request
     */
    MISDIRECTED_REQUEST: 421,
    /**
     * The 422 Unprocessable Content status code indicates that the server understands the content type of the request payload, and the syntax of the request payload is correct, but it was unable to process the contained instructions.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-422-unprocessable-content
     * @related 400 Bad Request, 413 Payload Too Large
     */
    UNPROCESSABLE_CONTENT: 422,
    /**
     * The 423 Locked status code indicates that the source or destination resource of a method is locked.
     * @link https://www.rfc-editor.org/rfc/rfc4918#section-11.3
     * @related 409 Conflict
     */
    LOCKED: 423,
    /**
     * The 424 Failed Dependency status code indicates that the method could not be performed on the resource because the requested action depended on another action and that action failed.
     * @link https://www.rfc-editor.org/rfc/rfc4918#section-11.4
     * @related 423 Locked
     */
    FAILED_DEPENDENCY: 424,
    /**
     * The 425 Too Early status code indicates that the server is unwilling to risk processing a request that might be replayed.
     * @link https://www.rfc-editor.org/rfc/rfc8470#section-5.2
     * @related None
     */
    TOO_EARLY: 425,
    /**
     * The 426 Upgrade Required status code indicates that the server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-426-upgrade-required
     * @related 101 Switching Protocols
     */
    UPGRADE_REQUIRED: 426,
    /**
     * The 428 Precondition Required status code indicates that the origin server requires the request to be conditional.
     * @link https://www.rfc-editor.org/rfc/rfc6585#section-3
     * @related 412 Precondition Failed
     */
    PRECONDITION_REQUIRED: 428,
    /**
     * The 429 Too Many Requests status code indicates that the user has sent too many requests in a given amount of time ("rate limiting").
     * @link https://www.rfc-editor.org/rfc/rfc6585#section-4
     * @related None
     */
    TOO_MANY_REQUESTS: 429,
    /**
     * The 431 Request Header Fields Too Large status code indicates that the server is unwilling to process the request because its header fields are too large.
     * @link https://www.rfc-editor.org/rfc/rfc6585#section-5
     * @related 400 Bad Request
     */
    REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
    /**
     * The 451 Unavailable For Legal Reasons status code indicates that the server is denying access to the resource as a consequence of a legal demand.
     * @link https://www.rfc-editor.org/rfc/rfc7725#section-3
     * @related 403 Forbidden
     */
    UNAVAILABLE_FOR_LEGAL_REASONS: 451
};
var ServerError = {
    /**
     * The 500 Internal Server Error status code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-500-internal-server-error
     * @related 502 Bad Gateway, 503 Service Unavailable
     */
    INTERNAL_SERVER_ERROR: 500,
    /**
     * The 501 Not Implemented status code indicates that the server does not support the functionality required to fulfill the request.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-501-not-implemented
     * @related 405 Method Not Allowed, 505 HTTP Version Not Supported
     */
    NOT_IMPLEMENTED: 501,
    /**
     * The 502 Bad Gateway status code indicates that the server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-502-bad-gateway
     * @related 500 Internal Server Error, 504 Gateway Timeout
     */
    BAD_GATEWAY: 502,
    /**
     * The 503 Service Unavailable status code indicates that the server is currently unable to handle the request due to a temporary overload or scheduled maintenance.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-503-service-unavailable
     * @related 502 Bad Gateway, 504 Gateway Timeout
     */
    SERVICE_UNAVAILABLE: 503,
    /**
     * The 504 Gateway Timeout status code indicates that the server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-504-gateway-timeout
     * @related 502 Bad Gateway, 503 Service Unavailable
     */
    GATEWAY_TIMEOUT: 504,
    /**
     * The 505 HTTP Version Not Supported status code indicates that the server does not support the HTTP protocol version that was used in the request.
     * @link https://www.rfc-editor.org/rfc/rfc9110#name-505-http-version-not-suppor
     * @related 400 Bad Request, 501 Not Implemented
     */
    HTTP_VERSION_NOT_SUPPORTED: 505,
    /**
     * The 506 Variant Also Negotiates status code indicates that the server has an internal configuration error.
     * @link https://www.rfc-editor.org/rfc/rfc2295#section-8.1
     */
    VARIANT_ALSO_NEGOTIATES: 506,
    /**
     * The 507 Insufficient Storage status code indicates that the server is unable to store the representation needed to complete the request.
     * @link https://www.rfc-editor.org/rfc/rfc4918#section-11.5
     */
    INSUFFICIENT_STORAGE: 507,
    /**
     * The 508 Loop Detected status code indicates that the server terminated an operation because it encountered an infinite loop while processing a request with "Depth: infinity".
     * @link https://www.rfc-editor.org/rfc/rfc5842#section-7.2
     */
    LOOP_DETECTED: 508,
    /**
     * The 510 Not Extended status code indicates that further extensions to the request are required for the server to fulfill it.
     * @link https://www.rfc-editor.org/rfc/rfc2774#section-7
     * @related 501 Not Implemented
     */
    NOT_EXTENDED: 510,
    /**
     * The 511 Network Authentication Required status code indicates that the client needs to authenticate to gain network access.
     * @link https://www.rfc-editor.org/rfc/rfc6585#section-6
     */
    NETWORK_AUTHENTICATION_REQUIRED: 511
};
var HTTPCodes = {
    /**
     * The 2xx (Successful) class of status code indicates that the client's request was successfully received, understood, and accepted.
     */
    Success: Success,
    /**
     * The 3xx (Redirection) class of status code indicates that further action needs to be taken by the user agent in order to fulfill the request.
     */
    Redirection: Redirection,
    /**
     * HTTP 4xx codes are a series of client-side error codes that indicate a problem with the client’s request. These errors are typically caused by incorrect or incomplete information provided by the client, such as a malformed request, invalid credentials, or a missing or incorrect resource. Understanding these error codes is important for troubleshooting and resolving issues with client-side requests.
     */
    ClientError: ClientError,
    /**
     * The 5xx (Server Error) class of status code indicates that the server is aware that it has erred or is incapable of performing the requested method.
     */
    ServerError: ServerError
};
exports["default"] = HTTPCodes;
