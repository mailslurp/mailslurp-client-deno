// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { CampaignProbeDto } from '../models/CampaignProbeDto.ts';
import { CampaignProbeInsightsDto } from '../models/CampaignProbeInsightsDto.ts';
import { CampaignProbeRunDto } from '../models/CampaignProbeRunDto.ts';
import { CampaignProbeRunDueResult } from '../models/CampaignProbeRunDueResult.ts';
import { CampaignProbeRunNowResult } from '../models/CampaignProbeRunNowResult.ts';
import { CampaignProbeSeriesDto } from '../models/CampaignProbeSeriesDto.ts';
import { CreateCampaignProbeOptions } from '../models/CreateCampaignProbeOptions.ts';
import { CreateCampaignProbeRunOptions } from '../models/CreateCampaignProbeRunOptions.ts';
import { UpdateCampaignProbeOptions } from '../models/UpdateCampaignProbeOptions.ts';

/**
 * no description
 */
export class CampaignProbeControllerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create campaign probe
     * @param createCampaignProbeOptions 
     */
    public async createCampaignProbe(createCampaignProbeOptions: CreateCampaignProbeOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'createCampaignProbeOptions' is not null or undefined
        if (createCampaignProbeOptions === null || createCampaignProbeOptions === undefined) {
            throw new RequiredError('Required parameter createCampaignProbeOptions was null or undefined when calling createCampaignProbe.');
        }


        // Path Params
        const localVarPath = '/campaign-probe/probes';

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
            ObjectSerializer.serialize(createCampaignProbeOptions, "CreateCampaignProbeOptions", ""),
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
     * Delete campaign probe
     * @param probeId 
     */
    public async deleteCampaignProbe(probeId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'probeId' is not null or undefined
        if (probeId === null || probeId === undefined) {
            throw new RequiredError('Required parameter probeId was null or undefined when calling deleteCampaignProbe.');
        }


        // Path Params
        const localVarPath = '/campaign-probe/probes/{probeId}'
            .replace('{' + 'probeId' + '}', encodeURIComponent(String(probeId)));

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
     * Get campaign probe
     * @param probeId 
     */
    public async getCampaignProbe(probeId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'probeId' is not null or undefined
        if (probeId === null || probeId === undefined) {
            throw new RequiredError('Required parameter probeId was null or undefined when calling getCampaignProbe.');
        }


        // Path Params
        const localVarPath = '/campaign-probe/probes/{probeId}'
            .replace('{' + 'probeId' + '}', encodeURIComponent(String(probeId)));

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
     * Get campaign probe insights
     * @param probeId 
     * @param since 
     * @param before 
     */
    public async getCampaignProbeInsights(probeId: string, since?: Date, before?: Date, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'probeId' is not null or undefined
        if (probeId === null || probeId === undefined) {
            throw new RequiredError('Required parameter probeId was null or undefined when calling getCampaignProbeInsights.');
        }




        // Path Params
        const localVarPath = '/campaign-probe/probes/{probeId}/insights'
            .replace('{' + 'probeId' + '}', encodeURIComponent(String(probeId)));

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
     * List campaign probe runs
     * @param probeId 
     * @param since 
     * @param before 
     * @param status 
     * @param limit 
     */
    public async getCampaignProbeRuns(probeId: string, since?: Date, before?: Date, status?: 'HEALTHY' | 'WARNING' | 'FAILED', limit?: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'probeId' is not null or undefined
        if (probeId === null || probeId === undefined) {
            throw new RequiredError('Required parameter probeId was null or undefined when calling getCampaignProbeRuns.');
        }






        // Path Params
        const localVarPath = '/campaign-probe/probes/{probeId}/runs'
            .replace('{' + 'probeId' + '}', encodeURIComponent(String(probeId)));

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
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "'HEALTHY' | 'WARNING' | 'FAILED'", ""));
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

    /**
     * Get campaign probe trend series
     * @param probeId 
     * @param since 
     * @param before 
     * @param bucket 
     */
    public async getCampaignProbeSeries(probeId: string, since?: Date, before?: Date, bucket?: 'HOUR' | 'DAY', options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'probeId' is not null or undefined
        if (probeId === null || probeId === undefined) {
            throw new RequiredError('Required parameter probeId was null or undefined when calling getCampaignProbeSeries.');
        }





        // Path Params
        const localVarPath = '/campaign-probe/probes/{probeId}/series'
            .replace('{' + 'probeId' + '}', encodeURIComponent(String(probeId)));

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
        if (bucket !== undefined) {
            requestContext.setQueryParam("bucket", ObjectSerializer.serialize(bucket, "'HOUR' | 'DAY'", ""));
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
     * List campaign probes
     */
    public async getCampaignProbes(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/campaign-probe/probes';

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
     * Run campaign probe now
     * @param probeId 
     * @param createCampaignProbeRunOptions 
     */
    public async runCampaignProbeNow(probeId: string, createCampaignProbeRunOptions: CreateCampaignProbeRunOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'probeId' is not null or undefined
        if (probeId === null || probeId === undefined) {
            throw new RequiredError('Required parameter probeId was null or undefined when calling runCampaignProbeNow.');
        }


        // verify required parameter 'createCampaignProbeRunOptions' is not null or undefined
        if (createCampaignProbeRunOptions === null || createCampaignProbeRunOptions === undefined) {
            throw new RequiredError('Required parameter createCampaignProbeRunOptions was null or undefined when calling runCampaignProbeNow.');
        }


        // Path Params
        const localVarPath = '/campaign-probe/probes/{probeId}/run-now'
            .replace('{' + 'probeId' + '}', encodeURIComponent(String(probeId)));

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
            ObjectSerializer.serialize(createCampaignProbeRunOptions, "CreateCampaignProbeRunOptions", ""),
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
     * Run due campaign probes for user
     * @param maxRuns 
     */
    public async runDueCampaignProbes(maxRuns?: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;


        // Path Params
        const localVarPath = '/campaign-probe/probes/run-due';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (maxRuns !== undefined) {
            requestContext.setQueryParam("maxRuns", ObjectSerializer.serialize(maxRuns, "number", "int32"));
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
     * Update campaign probe
     * @param probeId 
     * @param updateCampaignProbeOptions 
     */
    public async updateCampaignProbe(probeId: string, updateCampaignProbeOptions: UpdateCampaignProbeOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'probeId' is not null or undefined
        if (probeId === null || probeId === undefined) {
            throw new RequiredError('Required parameter probeId was null or undefined when calling updateCampaignProbe.');
        }


        // verify required parameter 'updateCampaignProbeOptions' is not null or undefined
        if (updateCampaignProbeOptions === null || updateCampaignProbeOptions === undefined) {
            throw new RequiredError('Required parameter updateCampaignProbeOptions was null or undefined when calling updateCampaignProbe.');
        }


        // Path Params
        const localVarPath = '/campaign-probe/probes/{probeId}'
            .replace('{' + 'probeId' + '}', encodeURIComponent(String(probeId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
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
            ObjectSerializer.serialize(updateCampaignProbeOptions, "UpdateCampaignProbeOptions", ""),
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

export class CampaignProbeControllerApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createCampaignProbe
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createCampaignProbe(response: ResponseContext): Promise<CampaignProbeDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: CampaignProbeDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CampaignProbeDto", ""
            ) as CampaignProbeDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CampaignProbeDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CampaignProbeDto", ""
            ) as CampaignProbeDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCampaignProbe
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteCampaignProbe(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to getCampaignProbe
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCampaignProbe(response: ResponseContext): Promise<CampaignProbeDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CampaignProbeDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CampaignProbeDto", ""
            ) as CampaignProbeDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CampaignProbeDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CampaignProbeDto", ""
            ) as CampaignProbeDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCampaignProbeInsights
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCampaignProbeInsights(response: ResponseContext): Promise<CampaignProbeInsightsDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CampaignProbeInsightsDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CampaignProbeInsightsDto", ""
            ) as CampaignProbeInsightsDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CampaignProbeInsightsDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CampaignProbeInsightsDto", ""
            ) as CampaignProbeInsightsDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCampaignProbeRuns
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCampaignProbeRuns(response: ResponseContext): Promise<Array<CampaignProbeRunDto> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<CampaignProbeRunDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<CampaignProbeRunDto>", ""
            ) as Array<CampaignProbeRunDto>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<CampaignProbeRunDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<CampaignProbeRunDto>", ""
            ) as Array<CampaignProbeRunDto>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCampaignProbeSeries
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCampaignProbeSeries(response: ResponseContext): Promise<CampaignProbeSeriesDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CampaignProbeSeriesDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CampaignProbeSeriesDto", ""
            ) as CampaignProbeSeriesDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CampaignProbeSeriesDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CampaignProbeSeriesDto", ""
            ) as CampaignProbeSeriesDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCampaignProbes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCampaignProbes(response: ResponseContext): Promise<Array<CampaignProbeDto> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<CampaignProbeDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<CampaignProbeDto>", ""
            ) as Array<CampaignProbeDto>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<CampaignProbeDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<CampaignProbeDto>", ""
            ) as Array<CampaignProbeDto>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to runCampaignProbeNow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async runCampaignProbeNow(response: ResponseContext): Promise<CampaignProbeRunNowResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CampaignProbeRunNowResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CampaignProbeRunNowResult", ""
            ) as CampaignProbeRunNowResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CampaignProbeRunNowResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CampaignProbeRunNowResult", ""
            ) as CampaignProbeRunNowResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to runDueCampaignProbes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async runDueCampaignProbes(response: ResponseContext): Promise<CampaignProbeRunDueResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CampaignProbeRunDueResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CampaignProbeRunDueResult", ""
            ) as CampaignProbeRunDueResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CampaignProbeRunDueResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CampaignProbeRunDueResult", ""
            ) as CampaignProbeRunDueResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateCampaignProbe
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateCampaignProbe(response: ResponseContext): Promise<CampaignProbeDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CampaignProbeDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CampaignProbeDto", ""
            ) as CampaignProbeDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CampaignProbeDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CampaignProbeDto", ""
            ) as CampaignProbeDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
