// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { PageEntityAutomationItems } from '../models/PageEntityAutomationItems.ts';
import { PageEntityEventItems } from '../models/PageEntityEventItems.ts';
import { PageEntityFavouriteItems } from '../models/PageEntityFavouriteItems.ts';
import { UserInfoDto } from '../models/UserInfoDto.ts';

/**
 * no description
 */
export class UserControllerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param page Optional page index
     * @param size Optional page size
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param inboxId Optional inbox ID
     * @param phoneId Optional phone ID
     * @param filter Optional automation type filter
     */
    public async getEntityAutomations(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, inboxId?: string, phoneId?: string, filter?: 'INBOX_FORWARDER' | 'INBOX_REPLIER' | 'INBOX_RULESET', options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;









        // Path Params
        const localVarPath = '/user/automations';

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
        if (since !== undefined) {
            requestContext.setQueryParam("since", ObjectSerializer.serialize(since, "Date", "date-time"));
        }
        if (before !== undefined) {
            requestContext.setQueryParam("before", ObjectSerializer.serialize(before, "Date", "date-time"));
        }
        if (inboxId !== undefined) {
            requestContext.setQueryParam("inboxId", ObjectSerializer.serialize(inboxId, "string", "uuid"));
        }
        if (phoneId !== undefined) {
            requestContext.setQueryParam("phoneId", ObjectSerializer.serialize(phoneId, "string", "uuid"));
        }
        if (filter !== undefined) {
            requestContext.setQueryParam("filter", ObjectSerializer.serialize(filter, "'INBOX_FORWARDER' | 'INBOX_REPLIER' | 'INBOX_RULESET'", ""));
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
     * @param page Optional page index
     * @param size Optional page size
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param inboxId Optional inbox ID
     * @param emailId Optional email ID
     * @param phoneId Optional phone ID
     * @param smsId Optional SMS ID
     * @param attachmentId Optional attachment ID
     * @param filter Optional type filter
     */
    public async getEntityEvents(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, inboxId?: string, emailId?: string, phoneId?: string, smsId?: string, attachmentId?: string, filter?: 'WEBHOOK_EVENT' | 'INBOX_FORWARDER_EVENT' | 'INBOX_REPLIER_EVENT' | 'INBOX_RULESET_EVENT' | 'ALIAS_EVENT', options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;












        // Path Params
        const localVarPath = '/user/events';

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
        if (since !== undefined) {
            requestContext.setQueryParam("since", ObjectSerializer.serialize(since, "Date", "date-time"));
        }
        if (before !== undefined) {
            requestContext.setQueryParam("before", ObjectSerializer.serialize(before, "Date", "date-time"));
        }
        if (inboxId !== undefined) {
            requestContext.setQueryParam("inboxId", ObjectSerializer.serialize(inboxId, "string", "uuid"));
        }
        if (emailId !== undefined) {
            requestContext.setQueryParam("emailId", ObjectSerializer.serialize(emailId, "string", "uuid"));
        }
        if (phoneId !== undefined) {
            requestContext.setQueryParam("phoneId", ObjectSerializer.serialize(phoneId, "string", "uuid"));
        }
        if (smsId !== undefined) {
            requestContext.setQueryParam("smsId", ObjectSerializer.serialize(smsId, "string", "uuid"));
        }
        if (attachmentId !== undefined) {
            requestContext.setQueryParam("attachmentId", ObjectSerializer.serialize(attachmentId, "string", "uuid"));
        }
        if (filter !== undefined) {
            requestContext.setQueryParam("filter", ObjectSerializer.serialize(filter, "'WEBHOOK_EVENT' | 'INBOX_FORWARDER_EVENT' | 'INBOX_REPLIER_EVENT' | 'INBOX_RULESET_EVENT' | 'ALIAS_EVENT'", ""));
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
     * @param page Optional page index
     * @param size Optional page size
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param filter Optional type filter
     */
    public async getEntityFavorites(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, filter?: 'INBOX' | 'EMAIL' | 'ATTACHMENT' | 'PHONE' | 'SMS', options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;







        // Path Params
        const localVarPath = '/user/favorites';

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
        if (since !== undefined) {
            requestContext.setQueryParam("since", ObjectSerializer.serialize(since, "Date", "date-time"));
        }
        if (before !== undefined) {
            requestContext.setQueryParam("before", ObjectSerializer.serialize(before, "Date", "date-time"));
        }
        if (filter !== undefined) {
            requestContext.setQueryParam("filter", ObjectSerializer.serialize(filter, "'INBOX' | 'EMAIL' | 'ATTACHMENT' | 'PHONE' | 'SMS'", ""));
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
     * Utility function to extract properties from JSON objects in language where this is cumbersome.
     * @param property JSON property name or dot separated path selector such as &#x60;a.b.c&#x60;
     * @param body 
     */
    public async getJsonPropertyAsString(property: string, body: any, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'property' is not null or undefined
        if (property === null || property === undefined) {
            throw new RequiredError('Required parameter property was null or undefined when calling getJsonPropertyAsString.');
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling getJsonPropertyAsString.');
        }


        // Path Params
        const localVarPath = '/user/json/pluck';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (property !== undefined) {
            requestContext.setQueryParam("property", ObjectSerializer.serialize(property, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "any", ""),
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

    /**
     * Get account information for your user
     */
    public async getUserInfo(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/user/info';

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

}

export class UserControllerApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEntityAutomations
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getEntityAutomations(response: ResponseContext): Promise<PageEntityAutomationItems > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PageEntityAutomationItems = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageEntityAutomationItems", ""
            ) as PageEntityAutomationItems;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PageEntityAutomationItems = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageEntityAutomationItems", ""
            ) as PageEntityAutomationItems;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEntityEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getEntityEvents(response: ResponseContext): Promise<PageEntityEventItems > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PageEntityEventItems = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageEntityEventItems", ""
            ) as PageEntityEventItems;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PageEntityEventItems = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageEntityEventItems", ""
            ) as PageEntityEventItems;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEntityFavorites
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getEntityFavorites(response: ResponseContext): Promise<PageEntityFavouriteItems > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PageEntityFavouriteItems = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageEntityFavouriteItems", ""
            ) as PageEntityFavouriteItems;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PageEntityFavouriteItems = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageEntityFavouriteItems", ""
            ) as PageEntityFavouriteItems;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getJsonPropertyAsString
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getJsonPropertyAsString(response: ResponseContext): Promise<string > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUserInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getUserInfo(response: ResponseContext): Promise<UserInfoDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UserInfoDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserInfoDto", ""
            ) as UserInfoDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UserInfoDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserInfoDto", ""
            ) as UserInfoDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
