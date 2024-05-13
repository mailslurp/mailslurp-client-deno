// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { CountDto } from '../models/CountDto.ts';
import { PageSmsProjection } from '../models/PageSmsProjection.ts';
import { ReplyForSms } from '../models/ReplyForSms.ts';
import { SentSmsDto } from '../models/SentSmsDto.ts';
import { SmsDto } from '../models/SmsDto.ts';
import { SmsReplyOptions } from '../models/SmsReplyOptions.ts';
import { UnreadCount } from '../models/UnreadCount.ts';

/**
 * no description
 */
export class SmsControllerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Delete an SMS message
     * Delete SMS message.
     * @param smsId 
     */
    public async deleteSmsMessage(smsId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'smsId' is not null or undefined
        if (smsId === null || smsId === undefined) {
            throw new RequiredError('Required parameter smsId was null or undefined when calling deleteSmsMessage.');
        }


        // Path Params
        const localVarPath = '/sms/{smsId}'
            .replace('{' + 'smsId' + '}', encodeURIComponent(String(smsId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["API_KEY"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete all SMS messages or all messages for a given phone number
     * Delete all SMS messages
     * @param phoneNumberId 
     */
    public async deleteSmsMessages(phoneNumberId?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;


        // Path Params
        const localVarPath = '/sms';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (phoneNumberId !== undefined) {
            requestContext.setQueryParam("phoneNumberId", ObjectSerializer.serialize(phoneNumberId, "string", "uuid"));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["API_KEY"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get reply for an SMS message.
     * Get reply for an SMS message
     * @param smsId 
     */
    public async getReplyForSmsMessage(smsId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'smsId' is not null or undefined
        if (smsId === null || smsId === undefined) {
            throw new RequiredError('Required parameter smsId was null or undefined when calling getReplyForSmsMessage.');
        }


        // Path Params
        const localVarPath = '/sms/{smsId}/reply'
            .replace('{' + 'smsId' + '}', encodeURIComponent(String(smsId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["API_KEY"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get number of SMS
     * Get SMS count
     */
    public async getSmsCount(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/sms/count';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["API_KEY"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns a SMS summary object with content.
     * Get SMS content including body. Expects SMS to exist by ID. For SMS that may not have arrived yet use the WaitForController.
     * @param smsId 
     */
    public async getSmsMessage(smsId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'smsId' is not null or undefined
        if (smsId === null || smsId === undefined) {
            throw new RequiredError('Required parameter smsId was null or undefined when calling getSmsMessage.');
        }


        // Path Params
        const localVarPath = '/sms/{smsId}'
            .replace('{' + 'smsId' + '}', encodeURIComponent(String(smsId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["API_KEY"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * By default returns all SMS messages across all phone numbers sorted by ascending created at date. Responses are paginated. You can restrict results to a list of phone number IDs. You can also filter out read messages
     * Get all SMS messages in all phone numbers in paginated form. .
     * @param phoneNumber Optional receiving phone number to filter SMS messages for
     * @param page Optional page index in SMS list pagination
     * @param size Optional page size in SMS list pagination. Maximum size is 100. Use page index and sort to page through larger results
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param unreadOnly Optional filter for unread SMS only. All SMS are considered unread until they are viewed in the dashboard or requested directly
     * @param since Optional filter SMSs received after given date time
     * @param before Optional filter SMSs received before given date time
     */
    public async getSmsMessagesPaginated(phoneNumber?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', unreadOnly?: boolean, since?: Date, before?: Date, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;








        // Path Params
        const localVarPath = '/sms';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (phoneNumber !== undefined) {
            requestContext.setQueryParam("phoneNumber", ObjectSerializer.serialize(phoneNumber, "string", "uuid"));
        }
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", "int32"));
        }
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "number", "int32"));
        }
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'ASC' | 'DESC'", ""));
        }
        if (unreadOnly !== undefined) {
            requestContext.setQueryParam("unreadOnly", ObjectSerializer.serialize(unreadOnly, "boolean", ""));
        }
        if (since !== undefined) {
            requestContext.setQueryParam("since", ObjectSerializer.serialize(since, "Date", "date-time"));
        }
        if (before !== undefined) {
            requestContext.setQueryParam("before", ObjectSerializer.serialize(before, "Date", "date-time"));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["API_KEY"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get number of SMS unread. Unread means has not been viewed in dashboard or returned in an email API response
     * Get unread SMS count
     */
    public async getUnreadSmsCount(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/sms/unreadCount';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["API_KEY"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Reply to an SMS message.
     * Send a reply to a received SMS message. Replies are sent from the receiving number.
     * @param smsId 
     * @param smsReplyOptions 
     */
    public async replyToSmsMessage(smsId: string, smsReplyOptions: SmsReplyOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'smsId' is not null or undefined
        if (smsId === null || smsId === undefined) {
            throw new RequiredError('Required parameter smsId was null or undefined when calling replyToSmsMessage.');
        }


        // verify required parameter 'smsReplyOptions' is not null or undefined
        if (smsReplyOptions === null || smsReplyOptions === undefined) {
            throw new RequiredError('Required parameter smsReplyOptions was null or undefined when calling replyToSmsMessage.');
        }


        // Path Params
        const localVarPath = '/sms/{smsId}/reply'
            .replace('{' + 'smsId' + '}', encodeURIComponent(String(smsId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(smsReplyOptions, "SmsReplyOptions", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["API_KEY"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class SmsControllerApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteSmsMessage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteSmsMessage(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteSmsMessages
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteSmsMessages(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getReplyForSmsMessage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getReplyForSmsMessage(response: ResponseContext): Promise<ReplyForSms > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ReplyForSms = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReplyForSms", ""
            ) as ReplyForSms;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ReplyForSms = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ReplyForSms", ""
            ) as ReplyForSms;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSmsCount
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSmsCount(response: ResponseContext): Promise<CountDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CountDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CountDto", ""
            ) as CountDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CountDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CountDto", ""
            ) as CountDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSmsMessage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSmsMessage(response: ResponseContext): Promise<SmsDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SmsDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SmsDto", ""
            ) as SmsDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SmsDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SmsDto", ""
            ) as SmsDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSmsMessagesPaginated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSmsMessagesPaginated(response: ResponseContext): Promise<PageSmsProjection > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PageSmsProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageSmsProjection", ""
            ) as PageSmsProjection;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PageSmsProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageSmsProjection", ""
            ) as PageSmsProjection;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUnreadSmsCount
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getUnreadSmsCount(response: ResponseContext): Promise<UnreadCount > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UnreadCount = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UnreadCount", ""
            ) as UnreadCount;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UnreadCount = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UnreadCount", ""
            ) as UnreadCount;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to replyToSmsMessage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async replyToSmsMessage(response: ResponseContext): Promise<SentSmsDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SentSmsDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SentSmsDto", ""
            ) as SentSmsDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SentSmsDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SentSmsDto", ""
            ) as SentSmsDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
