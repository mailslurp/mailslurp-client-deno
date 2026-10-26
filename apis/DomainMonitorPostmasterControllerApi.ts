// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { CreatePostmasterConnectionOptions } from '../models/CreatePostmasterConnectionOptions.ts';
import { CreatePostmasterConnectionResult } from '../models/CreatePostmasterConnectionResult.ts';
import { ExchangePostmasterCodeOptions } from '../models/ExchangePostmasterCodeOptions.ts';
import { PostmasterConnectionDto } from '../models/PostmasterConnectionDto.ts';
import { PostmasterConnectionStatusDto } from '../models/PostmasterConnectionStatusDto.ts';
import { PostmasterDomainDto } from '../models/PostmasterDomainDto.ts';
import { PostmasterTrafficStatsListDto } from '../models/PostmasterTrafficStatsListDto.ts';

/**
 * no description
 */
export class DomainMonitorPostmasterControllerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create Postmaster OAuth connection URL
     * @param createPostmasterConnectionOptions 
     */
    public async createDomainMonitorPostmasterConnection(createPostmasterConnectionOptions: CreatePostmasterConnectionOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'createPostmasterConnectionOptions' is not null or undefined
        if (createPostmasterConnectionOptions === null || createPostmasterConnectionOptions === undefined) {
            throw new RequiredError('Required parameter createPostmasterConnectionOptions was null or undefined when calling createDomainMonitorPostmasterConnection.');
        }


        // Path Params
        const localVarPath = '/domain-monitor/postmaster/connect';

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
            ObjectSerializer.serialize(createPostmasterConnectionOptions, "CreatePostmasterConnectionOptions", ""),
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
     * Disconnect Postmaster OAuth
     */
    public async deleteDomainMonitorPostmasterConnection(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/domain-monitor/postmaster/connection';

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
     * Exchange Postmaster OAuth authorization code
     * @param exchangePostmasterCodeOptions 
     */
    public async exchangeDomainMonitorPostmasterCode(exchangePostmasterCodeOptions: ExchangePostmasterCodeOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'exchangePostmasterCodeOptions' is not null or undefined
        if (exchangePostmasterCodeOptions === null || exchangePostmasterCodeOptions === undefined) {
            throw new RequiredError('Required parameter exchangePostmasterCodeOptions was null or undefined when calling exchangeDomainMonitorPostmasterCode.');
        }


        // Path Params
        const localVarPath = '/domain-monitor/postmaster/oauth-exchange';

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
            ObjectSerializer.serialize(exchangePostmasterCodeOptions, "ExchangePostmasterCodeOptions", ""),
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
     * Get Postmaster connection status
     */
    public async getDomainMonitorPostmasterConnection(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/domain-monitor/postmaster/connection';

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
     * List local Postmaster domain snapshots
     */
    public async getDomainMonitorPostmasterDomains(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/domain-monitor/postmaster/domains';

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
     * Get local Postmaster traffic stats
     * @param domain 
     * @param startDate 
     * @param endDate 
     */
    public async getDomainMonitorPostmasterTrafficStats(domain: string, startDate?: string, endDate?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'domain' is not null or undefined
        if (domain === null || domain === undefined) {
            throw new RequiredError('Required parameter domain was null or undefined when calling getDomainMonitorPostmasterTrafficStats.');
        }




        // Path Params
        const localVarPath = '/domain-monitor/postmaster/domains/{domain}/traffic-stats'
            .replace('{' + 'domain' + '}', encodeURIComponent(String(domain)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (startDate !== undefined) {
            requestContext.setQueryParam("startDate", ObjectSerializer.serialize(startDate, "string", "date"));
        }
        if (endDate !== undefined) {
            requestContext.setQueryParam("endDate", ObjectSerializer.serialize(endDate, "string", "date"));
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
     * Sync Postmaster domains
     */
    public async syncDomainMonitorPostmasterDomains(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/domain-monitor/postmaster/domains/sync';

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
     * Sync Postmaster traffic stats
     * @param domain 
     * @param startDate 
     * @param endDate 
     */
    public async syncDomainMonitorPostmasterTrafficStats(domain: string, startDate?: string, endDate?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'domain' is not null or undefined
        if (domain === null || domain === undefined) {
            throw new RequiredError('Required parameter domain was null or undefined when calling syncDomainMonitorPostmasterTrafficStats.');
        }




        // Path Params
        const localVarPath = '/domain-monitor/postmaster/domains/{domain}/traffic-stats/sync'
            .replace('{' + 'domain' + '}', encodeURIComponent(String(domain)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (startDate !== undefined) {
            requestContext.setQueryParam("startDate", ObjectSerializer.serialize(startDate, "string", "date"));
        }
        if (endDate !== undefined) {
            requestContext.setQueryParam("endDate", ObjectSerializer.serialize(endDate, "string", "date"));
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

export class DomainMonitorPostmasterControllerApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createDomainMonitorPostmasterConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createDomainMonitorPostmasterConnection(response: ResponseContext): Promise<CreatePostmasterConnectionResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: CreatePostmasterConnectionResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreatePostmasterConnectionResult", ""
            ) as CreatePostmasterConnectionResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreatePostmasterConnectionResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreatePostmasterConnectionResult", ""
            ) as CreatePostmasterConnectionResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteDomainMonitorPostmasterConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteDomainMonitorPostmasterConnection(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to exchangeDomainMonitorPostmasterCode
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exchangeDomainMonitorPostmasterCode(response: ResponseContext): Promise<PostmasterConnectionDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: PostmasterConnectionDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PostmasterConnectionDto", ""
            ) as PostmasterConnectionDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PostmasterConnectionDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PostmasterConnectionDto", ""
            ) as PostmasterConnectionDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDomainMonitorPostmasterConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDomainMonitorPostmasterConnection(response: ResponseContext): Promise<PostmasterConnectionStatusDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PostmasterConnectionStatusDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PostmasterConnectionStatusDto", ""
            ) as PostmasterConnectionStatusDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PostmasterConnectionStatusDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PostmasterConnectionStatusDto", ""
            ) as PostmasterConnectionStatusDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDomainMonitorPostmasterDomains
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDomainMonitorPostmasterDomains(response: ResponseContext): Promise<Array<PostmasterDomainDto> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<PostmasterDomainDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<PostmasterDomainDto>", ""
            ) as Array<PostmasterDomainDto>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<PostmasterDomainDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<PostmasterDomainDto>", ""
            ) as Array<PostmasterDomainDto>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDomainMonitorPostmasterTrafficStats
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDomainMonitorPostmasterTrafficStats(response: ResponseContext): Promise<PostmasterTrafficStatsListDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PostmasterTrafficStatsListDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PostmasterTrafficStatsListDto", ""
            ) as PostmasterTrafficStatsListDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PostmasterTrafficStatsListDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PostmasterTrafficStatsListDto", ""
            ) as PostmasterTrafficStatsListDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to syncDomainMonitorPostmasterDomains
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async syncDomainMonitorPostmasterDomains(response: ResponseContext): Promise<Array<PostmasterDomainDto> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<PostmasterDomainDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<PostmasterDomainDto>", ""
            ) as Array<PostmasterDomainDto>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<PostmasterDomainDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<PostmasterDomainDto>", ""
            ) as Array<PostmasterDomainDto>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to syncDomainMonitorPostmasterTrafficStats
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async syncDomainMonitorPostmasterTrafficStats(response: ResponseContext): Promise<PostmasterTrafficStatsListDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PostmasterTrafficStatsListDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PostmasterTrafficStatsListDto", ""
            ) as PostmasterTrafficStatsListDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PostmasterTrafficStatsListDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PostmasterTrafficStatsListDto", ""
            ) as PostmasterTrafficStatsListDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
