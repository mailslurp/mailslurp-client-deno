// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { ImapServerFetchResult } from '../models/ImapServerFetchResult.ts';
import { ImapServerListOptions } from '../models/ImapServerListOptions.ts';
import { ImapServerListResult } from '../models/ImapServerListResult.ts';
import { ImapServerSearchOptions } from '../models/ImapServerSearchOptions.ts';
import { ImapServerSearchResult } from '../models/ImapServerSearchResult.ts';
import { ImapUpdateFlagsOptions } from '../models/ImapUpdateFlagsOptions.ts';

/**
 * no description
 */
export class ImapControllerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Fetch message in an inbox
     * @param seqNum 
     * @param inboxId Inbox ID to search
     */
    public async imapServerFetch(seqNum: number, inboxId?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'seqNum' is not null or undefined
        if (seqNum === null || seqNum === undefined) {
            throw new RequiredError('Required parameter seqNum was null or undefined when calling imapServerFetch.');
        }



        // Path Params
        const localVarPath = '/imap/server/fetch';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (inboxId !== undefined) {
            requestContext.setQueryParam("inboxId", ObjectSerializer.serialize(inboxId, "string", "uuid"));
        }
        if (seqNum !== undefined) {
            requestContext.setQueryParam("seqNum", ObjectSerializer.serialize(seqNum, "number", "int32"));
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
     * List messages in an inbox
     * @param imapServerListOptions 
     * @param inboxId Inbox ID to list
     */
    public async imapServerList(imapServerListOptions: ImapServerListOptions, inboxId?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'imapServerListOptions' is not null or undefined
        if (imapServerListOptions === null || imapServerListOptions === undefined) {
            throw new RequiredError('Required parameter imapServerListOptions was null or undefined when calling imapServerList.');
        }



        // Path Params
        const localVarPath = '/imap/server/list';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (inboxId !== undefined) {
            requestContext.setQueryParam("inboxId", ObjectSerializer.serialize(inboxId, "string", "uuid"));
        }

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(imapServerListOptions, "ImapServerListOptions", ""),
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
     * Search messages in an inbox
     * @param imapServerSearchOptions 
     * @param inboxId Inbox ID to search
     */
    public async imapServerSearch(imapServerSearchOptions: ImapServerSearchOptions, inboxId?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'imapServerSearchOptions' is not null or undefined
        if (imapServerSearchOptions === null || imapServerSearchOptions === undefined) {
            throw new RequiredError('Required parameter imapServerSearchOptions was null or undefined when calling imapServerSearch.');
        }



        // Path Params
        const localVarPath = '/imap/server/search';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (inboxId !== undefined) {
            requestContext.setQueryParam("inboxId", ObjectSerializer.serialize(inboxId, "string", "uuid"));
        }

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(imapServerSearchOptions, "ImapServerSearchOptions", ""),
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
     * Update message flags
     * @param imapUpdateFlagsOptions 
     * @param inboxId 
     */
    public async imapServerUpdateFlags(imapUpdateFlagsOptions: ImapUpdateFlagsOptions, inboxId?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'imapUpdateFlagsOptions' is not null or undefined
        if (imapUpdateFlagsOptions === null || imapUpdateFlagsOptions === undefined) {
            throw new RequiredError('Required parameter imapUpdateFlagsOptions was null or undefined when calling imapServerUpdateFlags.');
        }



        // Path Params
        const localVarPath = '/imap/server/update-flags';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (inboxId !== undefined) {
            requestContext.setQueryParam("inboxId", ObjectSerializer.serialize(inboxId, "string", "uuid"));
        }

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(imapUpdateFlagsOptions, "ImapUpdateFlagsOptions", ""),
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

export class ImapControllerApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to imapServerFetch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imapServerFetch(response: ResponseContext): Promise<ImapServerFetchResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ImapServerFetchResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ImapServerFetchResult", ""
            ) as ImapServerFetchResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ImapServerFetchResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ImapServerFetchResult", ""
            ) as ImapServerFetchResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to imapServerList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imapServerList(response: ResponseContext): Promise<ImapServerListResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ImapServerListResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ImapServerListResult", ""
            ) as ImapServerListResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ImapServerListResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ImapServerListResult", ""
            ) as ImapServerListResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to imapServerSearch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imapServerSearch(response: ResponseContext): Promise<ImapServerSearchResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ImapServerSearchResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ImapServerSearchResult", ""
            ) as ImapServerSearchResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ImapServerSearchResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ImapServerSearchResult", ""
            ) as ImapServerSearchResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to imapServerUpdateFlags
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imapServerUpdateFlags(response: ResponseContext): Promise<void > {
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

}
