// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { CreateInboxPlacementTestOptions } from '../models/CreateInboxPlacementTestOptions.ts';
import { InboxPlacementAnalysisBundleDto } from '../models/InboxPlacementAnalysisBundleDto.ts';
import { InboxPlacementAnalyticsBreakdownDto } from '../models/InboxPlacementAnalyticsBreakdownDto.ts';
import { InboxPlacementAnalyticsSeriesDto } from '../models/InboxPlacementAnalyticsSeriesDto.ts';
import { InboxPlacementPublicShareDto } from '../models/InboxPlacementPublicShareDto.ts';
import { InboxPlacementTestResultsDto } from '../models/InboxPlacementTestResultsDto.ts';
import { InboxPlacementTestRunDto } from '../models/InboxPlacementTestRunDto.ts';

/**
 * no description
 */
export class ApiInboxPlacementTestControllerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Reconcile any messages that arrived after seed reservation, commit allowance, and move a prepared dashboard test into its active lifecycle. This operation is idempotent.
     * Confirm an inbox placement test email has been sent
     * @param id 
     */
    public async confirmInboxPlacementTestSent(id: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling confirmInboxPlacementTestSent.');
        }


        // Path Params
        const localVarPath = '/inbox-placement-tests/{id}/confirm-sent'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

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
     * Create a new direct-send inbox placement test
     * @param createInboxPlacementTestOptions 
     */
    public async createInboxPlacementTest(createInboxPlacementTestOptions: CreateInboxPlacementTestOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'createInboxPlacementTestOptions' is not null or undefined
        if (createInboxPlacementTestOptions === null || createInboxPlacementTestOptions === undefined) {
            throw new RequiredError('Required parameter createInboxPlacementTestOptions was null or undefined when calling createInboxPlacementTest.');
        }


        // Path Params
        const localVarPath = '/inbox-placement-tests';

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
            ObjectSerializer.serialize(createInboxPlacementTestOptions, "CreateInboxPlacementTestOptions", ""),
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
     * Export the current run's seed addresses with headers recognized by the selected email platform. Downloading a prepared seed list does not confirm the send or consume allowance.
     * Download inbox placement seed addresses as an email-platform CSV
     * @param id 
     * @param provider 
     */
    public async exportInboxPlacementSeedList(id: string, provider?: 'GENERIC' | 'MAILCHIMP' | 'KLAVIYO' | 'SALESFORCE' | 'HUBSPOT' | 'BRAZE' | 'BREVO' | 'MAILERLITE' | 'MAILJET' | 'OMNISEND' | 'GETRESPONSE' | 'CONSTANT_CONTACT' | 'KIT', options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling exportInboxPlacementSeedList.');
        }



        // Path Params
        const localVarPath = '/inbox-placement-tests/{id}/seed-list.csv'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (provider !== undefined) {
            requestContext.setQueryParam("provider", ObjectSerializer.serialize(provider, "'GENERIC' | 'MAILCHIMP' | 'KLAVIYO' | 'SALESFORCE' | 'HUBSPOT' | 'BRAZE' | 'BREVO' | 'MAILERLITE' | 'MAILJET' | 'OMNISEND' | 'GETRESPONSE' | 'CONSTANT_CONTACT' | 'KIT'", ""));
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
     * Export one row per placement target, including run-level delivery totals, 0-10 placement scores, and target placement outcome fields.
     * Export inbox placement test results as CSV
     * @param id 
     */
    public async exportInboxPlacementTestResults(id: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling exportInboxPlacementTestResults.');
        }


        // Path Params
        const localVarPath = '/inbox-placement-tests/{id}/results/export'
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
     * Return aggregated folder, provider, sender-domain, and from-email breakdowns for inbox placement runs in a time range.
     * Get inbox placement analytics breakdowns
     * @param since 
     * @param before 
     * @param senderDomain 
     * @param fromEmail 
     * @param limit 
     */
    public async getInboxPlacementAnalyticsBreakdown(since?: Date, before?: Date, senderDomain?: string, fromEmail?: string, limit?: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;






        // Path Params
        const localVarPath = '/inbox-placement-tests/analytics/breakdown';

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
        if (senderDomain !== undefined) {
            requestContext.setQueryParam("senderDomain", ObjectSerializer.serialize(senderDomain, "string", ""));
        }
        if (fromEmail !== undefined) {
            requestContext.setQueryParam("fromEmail", ObjectSerializer.serialize(fromEmail, "string", ""));
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
     * Return chart-ready inbox placement metrics over time, with optional sender/domain filters and grouped comparisons for sender domains or from-email addresses.
     * Get inbox placement analytics time series
     * @param since 
     * @param before 
     * @param bucket 
     * @param groupBy 
     * @param senderDomain 
     * @param fromEmail 
     * @param runLimit 
     * @param groupLimit 
     */
    public async getInboxPlacementAnalyticsSeries(since?: Date, before?: Date, bucket?: 'HOUR' | 'DAY', groupBy?: 'NONE' | 'SENDER_DOMAIN' | 'FROM_EMAIL', senderDomain?: string, fromEmail?: string, runLimit?: number, groupLimit?: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;









        // Path Params
        const localVarPath = '/inbox-placement-tests/analytics/series';

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
        if (groupBy !== undefined) {
            requestContext.setQueryParam("groupBy", ObjectSerializer.serialize(groupBy, "'NONE' | 'SENDER_DOMAIN' | 'FROM_EMAIL'", ""));
        }
        if (senderDomain !== undefined) {
            requestContext.setQueryParam("senderDomain", ObjectSerializer.serialize(senderDomain, "string", ""));
        }
        if (fromEmail !== undefined) {
            requestContext.setQueryParam("fromEmail", ObjectSerializer.serialize(fromEmail, "string", ""));
        }
        if (runLimit !== undefined) {
            requestContext.setQueryParam("runLimit", ObjectSerializer.serialize(runLimit, "number", "int32"));
        }
        if (groupLimit !== undefined) {
            requestContext.setQueryParam("groupLimit", ObjectSerializer.serialize(groupLimit, "number", "int32"));
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
     * Get a public inbox placement share
     * @param shareToken 
     */
    public async getInboxPlacementPublicShare(shareToken: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'shareToken' is not null or undefined
        if (shareToken === null || shareToken === undefined) {
            throw new RequiredError('Required parameter shareToken was null or undefined when calling getInboxPlacementPublicShare.');
        }


        // Path Params
        const localVarPath = '/inbox-placement-tests/share/{shareToken}'
            .replace('{' + 'shareToken' + '}', encodeURIComponent(String(shareToken)));

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
     * Get public inbox placement share analysis
     * @param shareToken 
     */
    public async getInboxPlacementPublicShareAnalysis(shareToken: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'shareToken' is not null or undefined
        if (shareToken === null || shareToken === undefined) {
            throw new RequiredError('Required parameter shareToken was null or undefined when calling getInboxPlacementPublicShareAnalysis.');
        }


        // Path Params
        const localVarPath = '/inbox-placement-tests/share/{shareToken}/analysis'
            .replace('{' + 'shareToken' + '}', encodeURIComponent(String(shareToken)));

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
     * Get inbox placement test run
     * @param id 
     */
    public async getInboxPlacementTest(id: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling getInboxPlacementTest.');
        }


        // Path Params
        const localVarPath = '/inbox-placement-tests/{id}'
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
     * Get inbox placement run analysis
     * @param id 
     */
    public async getInboxPlacementTestAnalysis(id: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling getInboxPlacementTestAnalysis.');
        }


        // Path Params
        const localVarPath = '/inbox-placement-tests/{id}/analysis'
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
     * Get inbox placement test results
     * @param id 
     */
    public async getInboxPlacementTestResults(id: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling getInboxPlacementTestResults.');
        }


        // Path Params
        const localVarPath = '/inbox-placement-tests/{id}/results'
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
     * List inbox placement test runs
     * @param limit 
     */
    public async getInboxPlacementTests(limit?: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;


        // Path Params
        const localVarPath = '/inbox-placement-tests';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
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
     * Reserve seed addresses for the dashboard create flow. The run remains staged and allowance is not committed until send confirmation. Reuses a recent active preparation when possible.
     * Prepare a direct-send inbox placement test without consuming allowance
     * @param createInboxPlacementTestOptions 
     */
    public async prepareInboxPlacementTest(createInboxPlacementTestOptions: CreateInboxPlacementTestOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'createInboxPlacementTestOptions' is not null or undefined
        if (createInboxPlacementTestOptions === null || createInboxPlacementTestOptions === undefined) {
            throw new RequiredError('Required parameter createInboxPlacementTestOptions was null or undefined when calling prepareInboxPlacementTest.');
        }


        // Path Params
        const localVarPath = '/inbox-placement-tests/prepare';

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
            ObjectSerializer.serialize(createInboxPlacementTestOptions, "CreateInboxPlacementTestOptions", ""),
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

export class ApiInboxPlacementTestControllerApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to confirmInboxPlacementTestSent
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async confirmInboxPlacementTestSent(response: ResponseContext): Promise<InboxPlacementTestRunDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InboxPlacementTestRunDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxPlacementTestRunDto", ""
            ) as InboxPlacementTestRunDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InboxPlacementTestRunDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxPlacementTestRunDto", ""
            ) as InboxPlacementTestRunDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createInboxPlacementTest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createInboxPlacementTest(response: ResponseContext): Promise<InboxPlacementTestRunDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InboxPlacementTestRunDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxPlacementTestRunDto", ""
            ) as InboxPlacementTestRunDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InboxPlacementTestRunDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxPlacementTestRunDto", ""
            ) as InboxPlacementTestRunDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to exportInboxPlacementSeedList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exportInboxPlacementSeedList(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
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
     * @params response Response returned by the server for a request to exportInboxPlacementTestResults
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exportInboxPlacementTestResults(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
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
     * @params response Response returned by the server for a request to getInboxPlacementAnalyticsBreakdown
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getInboxPlacementAnalyticsBreakdown(response: ResponseContext): Promise<InboxPlacementAnalyticsBreakdownDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InboxPlacementAnalyticsBreakdownDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxPlacementAnalyticsBreakdownDto", ""
            ) as InboxPlacementAnalyticsBreakdownDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InboxPlacementAnalyticsBreakdownDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxPlacementAnalyticsBreakdownDto", ""
            ) as InboxPlacementAnalyticsBreakdownDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getInboxPlacementAnalyticsSeries
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getInboxPlacementAnalyticsSeries(response: ResponseContext): Promise<InboxPlacementAnalyticsSeriesDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InboxPlacementAnalyticsSeriesDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxPlacementAnalyticsSeriesDto", ""
            ) as InboxPlacementAnalyticsSeriesDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InboxPlacementAnalyticsSeriesDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxPlacementAnalyticsSeriesDto", ""
            ) as InboxPlacementAnalyticsSeriesDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getInboxPlacementPublicShare
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getInboxPlacementPublicShare(response: ResponseContext): Promise<InboxPlacementPublicShareDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InboxPlacementPublicShareDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxPlacementPublicShareDto", ""
            ) as InboxPlacementPublicShareDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InboxPlacementPublicShareDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxPlacementPublicShareDto", ""
            ) as InboxPlacementPublicShareDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getInboxPlacementPublicShareAnalysis
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getInboxPlacementPublicShareAnalysis(response: ResponseContext): Promise<InboxPlacementAnalysisBundleDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InboxPlacementAnalysisBundleDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxPlacementAnalysisBundleDto", ""
            ) as InboxPlacementAnalysisBundleDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InboxPlacementAnalysisBundleDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxPlacementAnalysisBundleDto", ""
            ) as InboxPlacementAnalysisBundleDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getInboxPlacementTest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getInboxPlacementTest(response: ResponseContext): Promise<InboxPlacementTestRunDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InboxPlacementTestRunDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxPlacementTestRunDto", ""
            ) as InboxPlacementTestRunDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InboxPlacementTestRunDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxPlacementTestRunDto", ""
            ) as InboxPlacementTestRunDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getInboxPlacementTestAnalysis
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getInboxPlacementTestAnalysis(response: ResponseContext): Promise<InboxPlacementAnalysisBundleDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InboxPlacementAnalysisBundleDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxPlacementAnalysisBundleDto", ""
            ) as InboxPlacementAnalysisBundleDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InboxPlacementAnalysisBundleDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxPlacementAnalysisBundleDto", ""
            ) as InboxPlacementAnalysisBundleDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getInboxPlacementTestResults
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getInboxPlacementTestResults(response: ResponseContext): Promise<InboxPlacementTestResultsDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InboxPlacementTestResultsDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxPlacementTestResultsDto", ""
            ) as InboxPlacementTestResultsDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InboxPlacementTestResultsDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxPlacementTestResultsDto", ""
            ) as InboxPlacementTestResultsDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getInboxPlacementTests
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getInboxPlacementTests(response: ResponseContext): Promise<Array<InboxPlacementTestRunDto> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<InboxPlacementTestRunDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<InboxPlacementTestRunDto>", ""
            ) as Array<InboxPlacementTestRunDto>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<InboxPlacementTestRunDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<InboxPlacementTestRunDto>", ""
            ) as Array<InboxPlacementTestRunDto>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to prepareInboxPlacementTest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async prepareInboxPlacementTest(response: ResponseContext): Promise<InboxPlacementTestRunDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InboxPlacementTestRunDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxPlacementTestRunDto", ""
            ) as InboxPlacementTestRunDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InboxPlacementTestRunDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxPlacementTestRunDto", ""
            ) as InboxPlacementTestRunDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
