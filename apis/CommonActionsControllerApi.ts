// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { Inbox } from '../models/Inbox.ts';
import { SimpleSendEmailOptions } from '../models/SimpleSendEmailOptions.ts';

/**
 * no description
 */
export class CommonActionsControllerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Returns an Inbox with an `id` and an `emailAddress`
     * Create new random inbox
     * @param allowTeamAccess allowTeamAccess
     * @param expiresAt expiresAt
     * @param expiresIn expiresIn
     * @param useDomainPool useDomainPool
     */
    public async createNewEmailAddress(allowTeamAccess?: boolean, expiresAt?: Date, expiresIn?: number, useDomainPool?: boolean, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;





        // Path Params
        const localVarPath = '/createInbox';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (allowTeamAccess !== undefined) {
            requestContext.setQueryParam("allowTeamAccess", ObjectSerializer.serialize(allowTeamAccess, "boolean", ""));
        }
        if (expiresAt !== undefined) {
            requestContext.setQueryParam("expiresAt", ObjectSerializer.serialize(expiresAt, "Date", "date-time"));
        }
        if (expiresIn !== undefined) {
            requestContext.setQueryParam("expiresIn", ObjectSerializer.serialize(expiresIn, "number", "int64"));
        }
        if (useDomainPool !== undefined) {
            requestContext.setQueryParam("useDomainPool", ObjectSerializer.serialize(useDomainPool, "boolean", ""));
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
     * Returns an Inbox with an `id` and an `emailAddress`
     * Create new random inbox
     * @param allowTeamAccess allowTeamAccess
     * @param expiresAt expiresAt
     * @param expiresIn expiresIn
     * @param useDomainPool useDomainPool
     */
    public async createNewEmailAddress1(allowTeamAccess?: boolean, expiresAt?: Date, expiresIn?: number, useDomainPool?: boolean, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;





        // Path Params
        const localVarPath = '/newEmailAddress';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (allowTeamAccess !== undefined) {
            requestContext.setQueryParam("allowTeamAccess", ObjectSerializer.serialize(allowTeamAccess, "boolean", ""));
        }
        if (expiresAt !== undefined) {
            requestContext.setQueryParam("expiresAt", ObjectSerializer.serialize(expiresAt, "Date", "date-time"));
        }
        if (expiresIn !== undefined) {
            requestContext.setQueryParam("expiresIn", ObjectSerializer.serialize(expiresIn, "number", "int64"));
        }
        if (useDomainPool !== undefined) {
            requestContext.setQueryParam("useDomainPool", ObjectSerializer.serialize(useDomainPool, "boolean", ""));
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
     * Deletes all emails
     * Delete all emails in an inbox
     * @param inboxId inboxId
     */
    public async emptyInbox(inboxId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'inboxId' is not null or undefined
        if (inboxId === null || inboxId === undefined) {
            throw new RequiredError('Required parameter inboxId was null or undefined when calling emptyInbox.');
        }


        // Path Params
        const localVarPath = '/emptyInbox';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
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
     * If no senderId or inboxId provided a random email address will be used to send from.
     * Send an email
     * @param emailOptions emailOptions
     */
    public async sendEmailSimple(emailOptions: SimpleSendEmailOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'emailOptions' is not null or undefined
        if (emailOptions === null || emailOptions === undefined) {
            throw new RequiredError('Required parameter emailOptions was null or undefined when calling sendEmailSimple.');
        }


        // Path Params
        const localVarPath = '/sendEmail';

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
            ObjectSerializer.serialize(emailOptions, "SimpleSendEmailOptions", ""),
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

export class CommonActionsControllerApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNewEmailAddress
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createNewEmailAddress(response: ResponseContext): Promise<Inbox > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: Inbox = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Inbox", ""
            ) as Inbox;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Forbidden");
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Not Found");
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Inbox = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Inbox", ""
            ) as Inbox;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNewEmailAddress1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createNewEmailAddress1(response: ResponseContext): Promise<Inbox > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: Inbox = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Inbox", ""
            ) as Inbox;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Forbidden");
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Not Found");
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Inbox = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Inbox", ""
            ) as Inbox;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to emptyInbox
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async emptyInbox(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Forbidden");
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
     * @params response Response returned by the server for a request to sendEmailSimple
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async sendEmailSimple(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Forbidden");
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Not Found");
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

}
