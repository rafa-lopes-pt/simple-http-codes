namespace HTTPCodes {
	/**
	 * 200 - 299
	 */
	export enum success {
		/**
		 * The HTTP 200 OK success status response code indicates that the request has succeeded.
		 * @link https://www.rfc-editor.org/rfc/rfc9110#section-15.3.1
		 * @related 201 , 204
		 * */
		OK = 200,
		/**
		 * The 201 (Created) status code indicates that the request has been fulfilled and has resulted in one or more new resources being created.
		 * @link https://www.rfc-editor.org/rfc/rfc9110#name-201-created
		 * */
		CREATED,
		ACCEPTED,
	}
	/**
	 * 400 - 499
	 */
	export enum clientError {
		BAD_REQUEST = 400,
		UNAUTHORIZED,
		PAYMENT_REQUIRED,
		FORBIDDEN,
		NOT_FOUND,
		NOT_ALLOWED,
		NOT_ACCEPTABLE,
		REQUEST_TIMEOUT = 408,
		CONFLICT,
		GONE,
		UNSUPPORTED_MEDIA_TYPE = 415,
		AUTHENTICATION_TIMEOUT = 419,
		UNPROCESSABLE_CONTENT = 422,
		TOO_MANY_REQUESTS = 429,
	}
	/**
	 * 500 - 599
	 */
	export enum serverError {
		INTERNAL = 500,
		NOT_IMPLEMENTED,
		BAD_GATEWAY,
		GATEWAY_TIMEOUT = 504,
	}
}

export default HTTPCodes;
