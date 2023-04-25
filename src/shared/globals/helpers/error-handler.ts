import HTTP_STATUS from 'http-status-codes';

export interface IErroeResponse {
  //how do i want my error should look like
  message: string;
  statusCode: number;
  status: string;
  serializeErrors(): IError;
}

export interface IError {
  message: string;
  statusCode: number;
  status: string;
}

// Abstract Classes and Methods Data abstraction is the process of hiding certain details and showing only essential information to the user.

export abstract class CustomError extends Error {
  abstract statusCode: number;
  abstract status: string;

  constructor(message: string) {
    super(message);
  }

  serializeErrors(): IError {
    return {
      message: this.message,
      status: this.status,
      statusCode: this.statusCode
    };
  }
}

export class JoiRequestValidationError extends CustomError {
  statusCode = HTTP_STATUS.BAD_REQUEST;
  status = 'error';

  constructor(message: string) {
    super(message);
  }
}

export class BadRequestError extends CustomError {
  statusCode = HTTP_STATUS.BAD_REQUEST;
  status = 'error';

  constructor(message: string) {
    super(message);
  }
}

export class NotFoundError extends CustomError {
  statusCode = HTTP_STATUS.NOT_FOUND;
  status = 'error';

  constructor(message: string) {
    super(message);
  }
}

export class NotAuthorizeError extends CustomError {
  statusCode = HTTP_STATUS.UNAUTHORIZED;
  status = 'error';

  constructor(message: string) {
    super(message);
  }
}

export class FileToLargeError extends CustomError {
  statusCode = HTTP_STATUS.REQUEST_TOO_LONG;
  status = 'error';

  constructor(message: string) {
    super(message);
  }
}

export class ServerError extends CustomError {
  statusCode = HTTP_STATUS.SERVICE_UNAVAILABLE;
  status = 'error';

  constructor(message: string) {
    super(message);
  }
}
