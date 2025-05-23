// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { InboxDto } from '../models/InboxDto.ts';
import { SimpleSendEmailOptions } from '../models/SimpleSendEmailOptions.ts';

/**
 * no description
 */
export class CommonActionsControllerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Returns an Inbox with an `id` and an `emailAddress`
     * Create new random inbox
     * @param allowTeamAccess 
     * @param useDomainPool 
     * @param expiresAt 
     * @param expiresIn 
     * @param emailAddress 
     * @param inboxType 
     * @param description 
     * @param name 
     * @param tags 
     * @param favourite 
     * @param virtualInbox 
     * @param useShortAddress 
     * @param domainName 
     * @param domainId 
     * @param prefix 
     */
    public async createNewEmailAddress(allowTeamAccess?: boolean, useDomainPool?: boolean, expiresAt?: Date, expiresIn?: number, emailAddress?: string, inboxType?: 'HTTP_INBOX' | 'SMTP_INBOX', description?: string, name?: string, tags?: Array<string>, favourite?: boolean, virtualInbox?: boolean, useShortAddress?: boolean, domainName?: string, domainId?: string, prefix?: string, options?: Configuration): Promise<RequestContext> {
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
        if (useDomainPool !== undefined) {
            requestContext.setQueryParam("useDomainPool", ObjectSerializer.serialize(useDomainPool, "boolean", ""));
        }
        if (expiresAt !== undefined) {
            requestContext.setQueryParam("expiresAt", ObjectSerializer.serialize(expiresAt, "Date", "date-time"));
        }
        if (expiresIn !== undefined) {
            requestContext.setQueryParam("expiresIn", ObjectSerializer.serialize(expiresIn, "number", "int64"));
        }
        if (emailAddress !== undefined) {
            requestContext.setQueryParam("emailAddress", ObjectSerializer.serialize(emailAddress, "string", ""));
        }
        if (inboxType !== undefined) {
            requestContext.setQueryParam("inboxType", ObjectSerializer.serialize(inboxType, "'HTTP_INBOX' | 'SMTP_INBOX'", ""));
        }
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "string", ""));
        }
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "string", ""));
        }
        if (tags !== undefined) {
            requestContext.setQueryParam("tags", ObjectSerializer.serialize(tags, "Array<string>", ""));
        }
        if (favourite !== undefined) {
            requestContext.setQueryParam("favourite", ObjectSerializer.serialize(favourite, "boolean", ""));
        }
        if (virtualInbox !== undefined) {
            requestContext.setQueryParam("virtualInbox", ObjectSerializer.serialize(virtualInbox, "boolean", ""));
        }
        if (useShortAddress !== undefined) {
            requestContext.setQueryParam("useShortAddress", ObjectSerializer.serialize(useShortAddress, "boolean", ""));
        }
        if (domainName !== undefined) {
            requestContext.setQueryParam("domainName", ObjectSerializer.serialize(domainName, "string", ""));
        }
        if (domainId !== undefined) {
            requestContext.setQueryParam("domainId", ObjectSerializer.serialize(domainId, "string", "uuid"));
        }
        if (prefix !== undefined) {
            requestContext.setQueryParam("prefix", ObjectSerializer.serialize(prefix, "string", ""));
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
     * @param allowTeamAccess 
     * @param useDomainPool 
     * @param expiresAt 
     * @param expiresIn 
     * @param emailAddress 
     * @param inboxType 
     * @param description 
     * @param name 
     * @param tags 
     * @param favourite 
     * @param virtualInbox 
     * @param useShortAddress 
     * @param domainName 
     * @param domainId 
     * @param prefix 
     */
    public async createRandomInbox(allowTeamAccess?: boolean, useDomainPool?: boolean, expiresAt?: Date, expiresIn?: number, emailAddress?: string, inboxType?: 'HTTP_INBOX' | 'SMTP_INBOX', description?: string, name?: string, tags?: Array<string>, favourite?: boolean, virtualInbox?: boolean, useShortAddress?: boolean, domainName?: string, domainId?: string, prefix?: string, options?: Configuration): Promise<RequestContext> {
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
        if (useDomainPool !== undefined) {
            requestContext.setQueryParam("useDomainPool", ObjectSerializer.serialize(useDomainPool, "boolean", ""));
        }
        if (expiresAt !== undefined) {
            requestContext.setQueryParam("expiresAt", ObjectSerializer.serialize(expiresAt, "Date", "date-time"));
        }
        if (expiresIn !== undefined) {
            requestContext.setQueryParam("expiresIn", ObjectSerializer.serialize(expiresIn, "number", "int64"));
        }
        if (emailAddress !== undefined) {
            requestContext.setQueryParam("emailAddress", ObjectSerializer.serialize(emailAddress, "string", ""));
        }
        if (inboxType !== undefined) {
            requestContext.setQueryParam("inboxType", ObjectSerializer.serialize(inboxType, "'HTTP_INBOX' | 'SMTP_INBOX'", ""));
        }
        if (description !== undefined) {
            requestContext.setQueryParam("description", ObjectSerializer.serialize(description, "string", ""));
        }
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "string", ""));
        }
        if (tags !== undefined) {
            requestContext.setQueryParam("tags", ObjectSerializer.serialize(tags, "Array<string>", ""));
        }
        if (favourite !== undefined) {
            requestContext.setQueryParam("favourite", ObjectSerializer.serialize(favourite, "boolean", ""));
        }
        if (virtualInbox !== undefined) {
            requestContext.setQueryParam("virtualInbox", ObjectSerializer.serialize(virtualInbox, "boolean", ""));
        }
        if (useShortAddress !== undefined) {
            requestContext.setQueryParam("useShortAddress", ObjectSerializer.serialize(useShortAddress, "boolean", ""));
        }
        if (domainName !== undefined) {
            requestContext.setQueryParam("domainName", ObjectSerializer.serialize(domainName, "string", ""));
        }
        if (domainId !== undefined) {
            requestContext.setQueryParam("domainId", ObjectSerializer.serialize(domainId, "string", "uuid"));
        }
        if (prefix !== undefined) {
            requestContext.setQueryParam("prefix", ObjectSerializer.serialize(prefix, "string", ""));
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
     * Deletes inbox email address
     * Delete inbox email address by inbox id
     * @param inboxId ID of inbox to delete
     */
    public async deleteEmailAddress(inboxId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'inboxId' is not null or undefined
        if (inboxId === null || inboxId === undefined) {
            throw new RequiredError('Required parameter inboxId was null or undefined when calling deleteEmailAddress.');
        }


        // Path Params
        const localVarPath = '/deleteEmailAddress';

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
     * Deletes all emails
     * Delete all emails in an inbox
     * @param inboxId ID of inbox to empty
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
     * If no senderId or inboxId provided a random email address will be used to send from. Ensure your parameters are URL encoded.
     * Send an email using query parameters
     * @param to Email address to send to
     * @param senderId ID of inbox to send from. If null an inbox will be created for sending
     * @param body Body of the email message. Supports HTML
     * @param subject Subject line of the email
     */
    public async sendEmailQuery(to: string, senderId?: string, body?: string, subject?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'to' is not null or undefined
        if (to === null || to === undefined) {
            throw new RequiredError('Required parameter to was null or undefined when calling sendEmailQuery.');
        }





        // Path Params
        const localVarPath = '/sendEmailQuery';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (senderId !== undefined) {
            requestContext.setQueryParam("senderId", ObjectSerializer.serialize(senderId, "string", "uuid"));
        }
        if (to !== undefined) {
            requestContext.setQueryParam("to", ObjectSerializer.serialize(to, "string", ""));
        }
        if (body !== undefined) {
            requestContext.setQueryParam("body", ObjectSerializer.serialize(body, "string", ""));
        }
        if (subject !== undefined) {
            requestContext.setQueryParam("subject", ObjectSerializer.serialize(subject, "string", ""));
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
     * @param simpleSendEmailOptions 
     */
    public async sendEmailSimple(simpleSendEmailOptions: SimpleSendEmailOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'simpleSendEmailOptions' is not null or undefined
        if (simpleSendEmailOptions === null || simpleSendEmailOptions === undefined) {
            throw new RequiredError('Required parameter simpleSendEmailOptions was null or undefined when calling sendEmailSimple.');
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
            ObjectSerializer.serialize(simpleSendEmailOptions, "SimpleSendEmailOptions", ""),
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
     public async createNewEmailAddress(response: ResponseContext): Promise<InboxDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: InboxDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxDto", ""
            ) as InboxDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InboxDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxDto", ""
            ) as InboxDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createRandomInbox
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createRandomInbox(response: ResponseContext): Promise<InboxDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: InboxDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxDto", ""
            ) as InboxDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InboxDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxDto", ""
            ) as InboxDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteEmailAddress
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteEmailAddress(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to emptyInbox
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async emptyInbox(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to sendEmailQuery
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async sendEmailQuery(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
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
     * @params response Response returned by the server for a request to sendEmailSimple
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async sendEmailSimple(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
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

}
