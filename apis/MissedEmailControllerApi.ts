// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { MissedEmail } from '../models/MissedEmail.ts';
import { PageMissedEmailProjection } from '../models/PageMissedEmailProjection.ts';
import { PageUnknownMissedEmailProjection } from '../models/PageUnknownMissedEmailProjection.ts';

/**
 * no description
 */
export class MissedEmailControllerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get all MissedEmails in paginated format
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param inboxId Optional inbox ID filter
     */
    public async getAllMissedEmails(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, inboxId?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;








        // Path Params
        const localVarPath = '/missed-emails';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", "int32"));
        }
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "number", "int32"));
        }
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'ASC' | 'DESC'", ""));
        }
        if (searchFilter !== undefined) {
            requestContext.setQueryParam("searchFilter", ObjectSerializer.serialize(searchFilter, "string", ""));
        }
        if (since !== undefined) {
            requestContext.setQueryParam("since", ObjectSerializer.serialize(since, "Date", "date-time"));
        }
        if (before !== undefined) {
            requestContext.setQueryParam("before", ObjectSerializer.serialize(before, "Date", "date-time"));
        }
        if (inboxId !== undefined) {
            requestContext.setQueryParam("inboxId", ObjectSerializer.serialize(inboxId, "string", "uuid"));
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
     * Unknown missed emails are emails that were sent to MailSlurp but could not be assigned to an existing inbox.
     * Get all unknown missed emails in paginated format
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param inboxId Optional inbox ID filter
     */
    public async getAllUnknownMissedEmails(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, inboxId?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;








        // Path Params
        const localVarPath = '/missed-emails/unknown';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", "int32"));
        }
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "number", "int32"));
        }
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'ASC' | 'DESC'", ""));
        }
        if (searchFilter !== undefined) {
            requestContext.setQueryParam("searchFilter", ObjectSerializer.serialize(searchFilter, "string", ""));
        }
        if (since !== undefined) {
            requestContext.setQueryParam("since", ObjectSerializer.serialize(since, "Date", "date-time"));
        }
        if (before !== undefined) {
            requestContext.setQueryParam("before", ObjectSerializer.serialize(before, "Date", "date-time"));
        }
        if (inboxId !== undefined) {
            requestContext.setQueryParam("inboxId", ObjectSerializer.serialize(inboxId, "string", "uuid"));
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
     * List emails that were missed due to plan limits.
     * Get MissedEmail
     * @param missedEmailId 
     */
    public async getMissedEmail(missedEmailId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'missedEmailId' is not null or undefined
        if (missedEmailId === null || missedEmailId === undefined) {
            throw new RequiredError('Required parameter missedEmailId was null or undefined when calling getMissedEmail.');
        }


        // Path Params
        const localVarPath = '/missed-emails/{missedEmailId}'
            .replace('{' + 'missedEmailId' + '}', encodeURIComponent(String(missedEmailId)));

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
     * If emails were missed due to a plan limit they are saved as missed emails. If support team enables the canRestore flag these emails can be reload into your account using this method.
     * Restore missed emails
     */
    public async restoreMissedEmails(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/missed-emails/restore';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * Wait for 0 based index missed email
     * Wait for Nth missed email
     * @param index Zero based index of the email to wait for. If 1 missed email already and you want to wait for the 2nd email pass index&#x3D;1
     * @param inboxId Optional inbox ID filter
     * @param timeout Optional timeout milliseconds
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public async waitForNthMissedEmail(index: number, inboxId?: string, timeout?: number, since?: Date, before?: Date, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'index' is not null or undefined
        if (index === null || index === undefined) {
            throw new RequiredError('Required parameter index was null or undefined when calling waitForNthMissedEmail.');
        }






        // Path Params
        const localVarPath = '/missed-emails/waitForNthMissedEmail';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (inboxId !== undefined) {
            requestContext.setQueryParam("inboxId", ObjectSerializer.serialize(inboxId, "string", "uuid"));
        }
        if (timeout !== undefined) {
            requestContext.setQueryParam("timeout", ObjectSerializer.serialize(timeout, "number", "int64"));
        }
        if (index !== undefined) {
            requestContext.setQueryParam("index", ObjectSerializer.serialize(index, "number", "int32"));
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

}

export class MissedEmailControllerApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllMissedEmails
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllMissedEmails(response: ResponseContext): Promise<PageMissedEmailProjection > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PageMissedEmailProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageMissedEmailProjection", ""
            ) as PageMissedEmailProjection;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PageMissedEmailProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageMissedEmailProjection", ""
            ) as PageMissedEmailProjection;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllUnknownMissedEmails
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllUnknownMissedEmails(response: ResponseContext): Promise<PageUnknownMissedEmailProjection > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PageUnknownMissedEmailProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageUnknownMissedEmailProjection", ""
            ) as PageUnknownMissedEmailProjection;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PageUnknownMissedEmailProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageUnknownMissedEmailProjection", ""
            ) as PageUnknownMissedEmailProjection;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMissedEmail
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMissedEmail(response: ResponseContext): Promise<MissedEmail > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MissedEmail = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MissedEmail", ""
            ) as MissedEmail;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MissedEmail = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MissedEmail", ""
            ) as MissedEmail;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to restoreMissedEmails
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async restoreMissedEmails(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
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
     * @params response Response returned by the server for a request to waitForNthMissedEmail
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async waitForNthMissedEmail(response: ResponseContext): Promise<MissedEmail > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MissedEmail = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MissedEmail", ""
            ) as MissedEmail;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MissedEmail = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MissedEmail", ""
            ) as MissedEmail;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
