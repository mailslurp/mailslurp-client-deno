// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { CreateEmailAuditOptions } from '../models/CreateEmailAuditOptions.ts';
import { EmailAuditComparisonDto } from '../models/EmailAuditComparisonDto.ts';
import { EmailAuditDto } from '../models/EmailAuditDto.ts';

/**
 * no description
 */
export class EmailAuditControllerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Compare two email audits
     * @param auditId 
     * @param otherAuditId 
     */
    public async compareEmailAudits(auditId: string, otherAuditId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'auditId' is not null or undefined
        if (auditId === null || auditId === undefined) {
            throw new RequiredError('Required parameter auditId was null or undefined when calling compareEmailAudits.');
        }


        // verify required parameter 'otherAuditId' is not null or undefined
        if (otherAuditId === null || otherAuditId === undefined) {
            throw new RequiredError('Required parameter otherAuditId was null or undefined when calling compareEmailAudits.');
        }


        // Path Params
        const localVarPath = '/email-audits/{auditId}/compare/{otherAuditId}'
            .replace('{' + 'auditId' + '}', encodeURIComponent(String(auditId)))
            .replace('{' + 'otherAuditId' + '}', encodeURIComponent(String(otherAuditId)));

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
     * Create email audit
     * @param createEmailAuditOptions 
     */
    public async createEmailAudit(createEmailAuditOptions: CreateEmailAuditOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'createEmailAuditOptions' is not null or undefined
        if (createEmailAuditOptions === null || createEmailAuditOptions === undefined) {
            throw new RequiredError('Required parameter createEmailAuditOptions was null or undefined when calling createEmailAudit.');
        }


        // Path Params
        const localVarPath = '/email-audits';

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
            ObjectSerializer.serialize(createEmailAuditOptions, "CreateEmailAuditOptions", ""),
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
     * Delete email audit
     * @param auditId 
     */
    public async deleteEmailAudit(auditId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'auditId' is not null or undefined
        if (auditId === null || auditId === undefined) {
            throw new RequiredError('Required parameter auditId was null or undefined when calling deleteEmailAudit.');
        }


        // Path Params
        const localVarPath = '/email-audits/{auditId}'
            .replace('{' + 'auditId' + '}', encodeURIComponent(String(auditId)));

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
     * Get email audit
     * @param auditId 
     */
    public async getEmailAudit(auditId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'auditId' is not null or undefined
        if (auditId === null || auditId === undefined) {
            throw new RequiredError('Required parameter auditId was null or undefined when calling getEmailAudit.');
        }


        // Path Params
        const localVarPath = '/email-audits/{auditId}'
            .replace('{' + 'auditId' + '}', encodeURIComponent(String(auditId)));

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
     * List email audits
     * @param emailId 
     * @param since 
     * @param before 
     * @param limit 
     */
    public async getEmailAudits(emailId?: string, since?: Date, before?: Date, limit?: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;





        // Path Params
        const localVarPath = '/email-audits';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (emailId !== undefined) {
            requestContext.setQueryParam("emailId", ObjectSerializer.serialize(emailId, "string", "uuid"));
        }
        if (since !== undefined) {
            requestContext.setQueryParam("since", ObjectSerializer.serialize(since, "Date", "date-time"));
        }
        if (before !== undefined) {
            requestContext.setQueryParam("before", ObjectSerializer.serialize(before, "Date", "date-time"));
        }
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
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

export class EmailAuditControllerApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to compareEmailAudits
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async compareEmailAudits(response: ResponseContext): Promise<EmailAuditComparisonDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EmailAuditComparisonDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailAuditComparisonDto", ""
            ) as EmailAuditComparisonDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EmailAuditComparisonDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailAuditComparisonDto", ""
            ) as EmailAuditComparisonDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createEmailAudit
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createEmailAudit(response: ResponseContext): Promise<EmailAuditDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: EmailAuditDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailAuditDto", ""
            ) as EmailAuditDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EmailAuditDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailAuditDto", ""
            ) as EmailAuditDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteEmailAudit
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteEmailAudit(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to getEmailAudit
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getEmailAudit(response: ResponseContext): Promise<EmailAuditDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EmailAuditDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailAuditDto", ""
            ) as EmailAuditDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EmailAuditDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailAuditDto", ""
            ) as EmailAuditDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEmailAudits
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getEmailAudits(response: ResponseContext): Promise<Array<EmailAuditDto> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<EmailAuditDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<EmailAuditDto>", ""
            ) as Array<EmailAuditDto>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<EmailAuditDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<EmailAuditDto>", ""
            ) as Array<EmailAuditDto>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
