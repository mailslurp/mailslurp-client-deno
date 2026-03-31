// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { AuditLogEventDto } from '../models/AuditLogEventDto.ts';
import { AuditLogPageDto } from '../models/AuditLogPageDto.ts';
import { AuditLogSearchOptions } from '../models/AuditLogSearchOptions.ts';

/**
 * no description
 */
export class ApiAuditLogControllerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param eventId 
     * @param since 
     * @param before 
     */
    public async getAuditLogByEventId(eventId: string, since?: Date, before?: Date, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'eventId' is not null or undefined
        if (eventId === null || eventId === undefined) {
            throw new RequiredError('Required parameter eventId was null or undefined when calling getAuditLogByEventId.');
        }




        // Path Params
        const localVarPath = '/audit-logs/{eventId}'
            .replace('{' + 'eventId' + '}', encodeURIComponent(String(eventId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
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
     * @param since 
     * @param before 
     * @param action 
     * @param userId 
     * @param actorUserId 
     * @param targetUserId 
     * @param resourceType 
     * @param resourceId 
     * @param outcome 
     * @param requestId 
     * @param ipAddress 
     * @param pageSize 
     * @param cursor 
     */
    public async getAuditLogs(since?: Date, before?: Date, action?: string, userId?: string, actorUserId?: string, targetUserId?: string, resourceType?: string, resourceId?: string, outcome?: string, requestId?: string, ipAddress?: string, pageSize?: number, cursor?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;














        // Path Params
        const localVarPath = '/audit-logs';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (since !== undefined) {
            requestContext.setQueryParam("since", ObjectSerializer.serialize(since, "Date", "date-time"));
        }
        if (before !== undefined) {
            requestContext.setQueryParam("before", ObjectSerializer.serialize(before, "Date", "date-time"));
        }
        if (action !== undefined) {
            requestContext.setQueryParam("action", ObjectSerializer.serialize(action, "string", ""));
        }
        if (userId !== undefined) {
            requestContext.setQueryParam("userId", ObjectSerializer.serialize(userId, "string", "uuid"));
        }
        if (actorUserId !== undefined) {
            requestContext.setQueryParam("actorUserId", ObjectSerializer.serialize(actorUserId, "string", "uuid"));
        }
        if (targetUserId !== undefined) {
            requestContext.setQueryParam("targetUserId", ObjectSerializer.serialize(targetUserId, "string", "uuid"));
        }
        if (resourceType !== undefined) {
            requestContext.setQueryParam("resourceType", ObjectSerializer.serialize(resourceType, "string", ""));
        }
        if (resourceId !== undefined) {
            requestContext.setQueryParam("resourceId", ObjectSerializer.serialize(resourceId, "string", ""));
        }
        if (outcome !== undefined) {
            requestContext.setQueryParam("outcome", ObjectSerializer.serialize(outcome, "string", ""));
        }
        if (requestId !== undefined) {
            requestContext.setQueryParam("requestId", ObjectSerializer.serialize(requestId, "string", ""));
        }
        if (ipAddress !== undefined) {
            requestContext.setQueryParam("ipAddress", ObjectSerializer.serialize(ipAddress, "string", ""));
        }
        if (pageSize !== undefined) {
            requestContext.setQueryParam("pageSize", ObjectSerializer.serialize(pageSize, "number", "int32"));
        }
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
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
     * @param auditLogSearchOptions 
     */
    public async searchAuditLogs(auditLogSearchOptions: AuditLogSearchOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'auditLogSearchOptions' is not null or undefined
        if (auditLogSearchOptions === null || auditLogSearchOptions === undefined) {
            throw new RequiredError('Required parameter auditLogSearchOptions was null or undefined when calling searchAuditLogs.');
        }


        // Path Params
        const localVarPath = '/audit-logs/search';

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
            ObjectSerializer.serialize(auditLogSearchOptions, "AuditLogSearchOptions", ""),
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

export class ApiAuditLogControllerApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAuditLogByEventId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAuditLogByEventId(response: ResponseContext): Promise<AuditLogEventDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AuditLogEventDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuditLogEventDto", ""
            ) as AuditLogEventDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AuditLogEventDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuditLogEventDto", ""
            ) as AuditLogEventDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAuditLogs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAuditLogs(response: ResponseContext): Promise<AuditLogPageDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AuditLogPageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuditLogPageDto", ""
            ) as AuditLogPageDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AuditLogPageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuditLogPageDto", ""
            ) as AuditLogPageDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchAuditLogs
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchAuditLogs(response: ResponseContext): Promise<AuditLogPageDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AuditLogPageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuditLogPageDto", ""
            ) as AuditLogPageDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AuditLogPageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AuditLogPageDto", ""
            ) as AuditLogPageDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
