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
     * @param exportType 
     * @param apiKey 
     * @param outputFormat 
     * @param filter 
     * @param listSeparatorToken 
     * @param excludePreviouslyExported 
     * @param createdEarliestTime 
     * @param createdOldestTime 
     */
    public async exportEntities(exportType: 'INBOXES' | 'CONTACTS' | 'ATTACHMENTS' | 'EMAILS', apiKey: string, outputFormat: 'CSV_DEFAULT' | 'CSV_EXCEL', filter?: string, listSeparatorToken?: string, excludePreviouslyExported?: boolean, createdEarliestTime?: Date, createdOldestTime?: Date, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'exportType' is not null or undefined
        if (exportType === null || exportType === undefined) {
            throw new RequiredError('Required parameter exportType was null or undefined when calling exportEntities.');
        }


        // verify required parameter 'apiKey' is not null or undefined
        if (apiKey === null || apiKey === undefined) {
            throw new RequiredError('Required parameter apiKey was null or undefined when calling exportEntities.');
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
        if (exportType !== undefined) {
            requestContext.setQueryParam("exportType", ObjectSerializer.serialize(exportType, "'INBOXES' | 'CONTACTS' | 'ATTACHMENTS' | 'EMAILS'", ""));
        }
        if (apiKey !== undefined) {
            requestContext.setQueryParam("apiKey", ObjectSerializer.serialize(apiKey, "string", ""));
        }
        if (outputFormat !== undefined) {
            requestContext.setQueryParam("outputFormat", ObjectSerializer.serialize(outputFormat, "'CSV_DEFAULT' | 'CSV_EXCEL'", ""));
        }
        if (filter !== undefined) {
            requestContext.setQueryParam("filter", ObjectSerializer.serialize(filter, "string", ""));
        }
        if (listSeparatorToken !== undefined) {
            requestContext.setQueryParam("listSeparatorToken", ObjectSerializer.serialize(listSeparatorToken, "string", ""));
        }
        if (excludePreviouslyExported !== undefined) {
            requestContext.setQueryParam("excludePreviouslyExported", ObjectSerializer.serialize(excludePreviouslyExported, "boolean", ""));
        }
        if (createdEarliestTime !== undefined) {
            requestContext.setQueryParam("createdEarliestTime", ObjectSerializer.serialize(createdEarliestTime, "Date", "date-time"));
        }
        if (createdOldestTime !== undefined) {
            requestContext.setQueryParam("createdOldestTime", ObjectSerializer.serialize(createdOldestTime, "Date", "date-time"));
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
     * @param exportType 
     * @param exportOptions 
     * @param apiKey 
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
        if (exportType !== undefined) {
            requestContext.setQueryParam("exportType", ObjectSerializer.serialize(exportType, "'INBOXES' | 'CONTACTS' | 'ATTACHMENTS' | 'EMAILS'", ""));
        }
        if (apiKey !== undefined) {
            requestContext.setQueryParam("apiKey", ObjectSerializer.serialize(apiKey, "string", ""));
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
     public async exportEntities(response: ResponseContext): Promise<Array<string> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<string> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<string>", "byte"
            ) as Array<string>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<string> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<string>", "byte"
            ) as Array<string>;
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
     public async getExportLink(response: ResponseContext): Promise<ExportLink > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ExportLink = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExportLink", ""
            ) as ExportLink;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ExportLink = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExportLink", ""
            ) as ExportLink;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
