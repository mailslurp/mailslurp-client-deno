// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { Bounce } from '../models/Bounce.ts';
import { BounceRecipient } from '../models/BounceRecipient.ts';
import { PageBouncedEmail } from '../models/PageBouncedEmail.ts';
import { PageBouncedRecipients } from '../models/PageBouncedRecipients.ts';

/**
 * no description
 */
export class BounceControllerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Bounced emails are email you have sent that were rejected by a recipient
     * Get a bounced email.
     * @param id ID of the bounced email to fetch
     */
    public async getBouncedEmail(id: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling getBouncedEmail.');
        }


        // Path Params
        const localVarPath = '/bounce/emails/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

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
     * Bounced emails are email you have sent that were rejected by a recipient
     * Get paginated list of bounced emails.
     * @param page Optional page index 
     * @param size Optional page size 
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public async getBouncedEmails(page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;




        // Path Params
        const localVarPath = '/bounce/emails';

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
     * Bounced emails are email you have sent that were rejected by a recipient
     * Get a bounced email.
     * @param id ID of the bounced recipient
     */
    public async getBouncedRecipient(id: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling getBouncedRecipient.');
        }


        // Path Params
        const localVarPath = '/bounce/recipients/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

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
     * Bounced recipients are email addresses that you have sent emails to that did not accept the sent email. Once a recipient is bounced you cannot send emails to that address.
     * Get paginated list of bounced recipients.
     * @param page Optional page index 
     * @param size Optional page size 
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public async getBouncedRecipients(page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;




        // Path Params
        const localVarPath = '/bounce/recipients';

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

export class BounceControllerApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBouncedEmail
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBouncedEmail(response: ResponseContext): Promise<Bounce > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Bounce = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Bounce", ""
            ) as Bounce;
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
            const body: Bounce = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Bounce", ""
            ) as Bounce;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBouncedEmails
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBouncedEmails(response: ResponseContext): Promise<PageBouncedEmail > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PageBouncedEmail = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageBouncedEmail", ""
            ) as PageBouncedEmail;
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
            const body: PageBouncedEmail = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageBouncedEmail", ""
            ) as PageBouncedEmail;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBouncedRecipient
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBouncedRecipient(response: ResponseContext): Promise<BounceRecipient > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: BounceRecipient = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BounceRecipient", ""
            ) as BounceRecipient;
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
            const body: BounceRecipient = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "BounceRecipient", ""
            ) as BounceRecipient;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getBouncedRecipients
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getBouncedRecipients(response: ResponseContext): Promise<PageBouncedRecipients > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PageBouncedRecipients = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageBouncedRecipients", ""
            ) as PageBouncedRecipients;
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
            const body: PageBouncedRecipients = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageBouncedRecipients", ""
            ) as PageBouncedRecipients;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
