/**
 * 200 - 299
 */
export const Success = {
	/**
	 * The HTTP 200 OK success status response code indicates that the request has succeeded.
	 * @link https://www.rfc-editor.org/rfc/rfc9110#section-15.3.1
	 * @related 201 , 204
	 * */
	OK: 200,
	/**
	 * The 201 (Created) status code indicates that the request has been fulfilled and has resulted in one or more new resources being created.
	 * @link https://www.rfc-editor.org/rfc/rfc9110#name-201-created
	 * */
	CREATED: 201,
	ACCEPTED: 202,
};
/**
 * 400 - 499
 */
export const ClientError = {
	BAD_REQUEST: 400,
	UNAUTHORIZED: 401,
	PAYMENT_REQUIRED: 402,
	FORBIDDEN: 403,
	NOT_FOUND: 404,
	NOT_ALLOWED: 405,
	NOT_ACCEPTABLE: 406,
	REQUEST_TIMEOUT: 408,
	CONFLICT: 409,
	GONE: 410,
	UNSUPPORTED_MEDIA_TYPE: 415,
	AUTHENTICATION_TIMEOUT: 419,
	UNPROCESSABLE_CONTENT: 422,
	TOO_MANY_REQUESTS: 429,
} as const;
/**
 * 500 - 599
 */
export const ServerError = {
	INTERNAL: 500,
	NOT_IMPLEMENTED: 501,
	BAD_GATEWAY: 502,
	GATEWAY_TIMEOUT: 504,
} as const;

const HTTPCodes = { ServerError, ClientError, Success };
export default HTTPCodes;
