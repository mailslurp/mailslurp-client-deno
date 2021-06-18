// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { ExportLink } from '../models/ExportLink.ts';
import { ExportOptions } from '../models/ExportOptions.ts';

/**
 * no description
 */
export class ExportControllerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Export inboxes link callable via browser
     * @param apiKey apiKey
     * @param exportType exportType
     * @param outputFormat outputFormat
     * @param createdEarliestTime createdEarliestTime
     * @param createdOldestTime createdOldestTime
     * @param excludePreviouslyExported excludePreviouslyExported
     * @param filter filter
     * @param listSeparatorToken listSeparatorToken
     */
    public async exportEntities(apiKey: string, exportType: 'INBOXES' | 'CONTACTS' | 'ATTACHMENTS' | 'EMAILS', outputFormat: 'CSV_DEFAULT' | 'CSV_EXCEL', createdEarliestTime?: Date, createdOldestTime?: Date, excludePreviouslyExported?: boolean, filter?: string, listSeparatorToken?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'apiKey' is not null or undefined
        if (apiKey === null || apiKey === undefined) {
            throw new RequiredError('Required parameter apiKey was null or undefined when calling exportEntities.');
        }


        // verify required parameter 'exportType' is not null or undefined
        if (exportType === null || exportType === undefined) {
            throw new RequiredError('Required parameter exportType was null or undefined when calling exportEntities.');
        }


        // verify required parameter 'outputFormat' is not null or undefined
        if (outputFormat === null || outputFormat === undefined) {
            throw new RequiredError('Required parameter outputFormat was null or undefined when calling exportEntities.');
        }







        // Path Params
        const localVarPath = '/export';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (apiKey !== undefined) {
            requestContext.setQueryParam("apiKey", ObjectSerializer.serialize(apiKey, "string", ""));
        }
        if (createdEarliestTime !== undefined) {
            requestContext.setQueryParam("createdEarliestTime", ObjectSerializer.serialize(createdEarliestTime, "Date", "date-time"));
        }
        if (createdOldestTime !== undefined) {
            requestContext.setQueryParam("createdOldestTime", ObjectSerializer.serialize(createdOldestTime, "Date", "date-time"));
        }
        if (excludePreviouslyExported !== undefined) {
            requestContext.setQueryParam("excludePreviouslyExported", ObjectSerializer.serialize(excludePreviouslyExported, "boolean", ""));
        }
        if (exportType !== undefined) {
            requestContext.setQueryParam("exportType", ObjectSerializer.serialize(exportType, "'INBOXES' | 'CONTACTS' | 'ATTACHMENTS' | 'EMAILS'", ""));
        }
        if (filter !== undefined) {
            requestContext.setQueryParam("filter", ObjectSerializer.serialize(filter, "string", ""));
        }
        if (listSeparatorToken !== undefined) {
            requestContext.setQueryParam("listSeparatorToken", ObjectSerializer.serialize(listSeparatorToken, "string", ""));
        }
        if (outputFormat !== undefined) {
            requestContext.setQueryParam("outputFormat", ObjectSerializer.serialize(outputFormat, "'CSV_DEFAULT' | 'CSV_EXCEL'", ""));
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
     * Get export link
     * @param exportType exportType
     * @param exportOptions exportOptions
     * @param apiKey apiKey
     */
    public async getExportLink(exportType: 'INBOXES' | 'CONTACTS' | 'ATTACHMENTS' | 'EMAILS', exportOptions: ExportOptions, apiKey?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'exportType' is not null or undefined
        if (exportType === null || exportType === undefined) {
            throw new RequiredError('Required parameter exportType was null or undefined when calling getExportLink.');
        }


        // verify required parameter 'exportOptions' is not null or undefined
        if (exportOptions === null || exportOptions === undefined) {
            throw new RequiredError('Required parameter exportOptions was null or undefined when calling getExportLink.');
        }



        // Path Params
        const localVarPath = '/export';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (apiKey !== undefined) {
            requestContext.setQueryParam("apiKey", ObjectSerializer.serialize(apiKey, "string", ""));
        }
        if (exportType !== undefined) {
            requestContext.setQueryParam("exportType", ObjectSerializer.serialize(exportType, "'INBOXES' | 'CONTACTS' | 'ATTACHMENTS' | 'EMAILS'", ""));
        }

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(exportOptions, "ExportOptions", ""),
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

export class ExportControllerApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to exportEntities
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exportEntities(response: ResponseContext): Promise<string > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", "byte"
            ) as string;
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
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", "byte"
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
     * @params response Response returned by the server for a request to getExportLink
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getExportLink(response: ResponseContext): Promise<void | ExportLink > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ExportLink = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExportLink", ""
            ) as ExportLink;
            return body;
        }
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
            const body: void | ExportLink = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void | ExportLink", ""
            ) as void | ExportLink;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
