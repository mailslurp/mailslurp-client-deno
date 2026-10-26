// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { CheckEmailAuthStackResults } from '../models/CheckEmailAuthStackResults.ts';
import { CreateDomainMonitorAlertSinkOptions } from '../models/CreateDomainMonitorAlertSinkOptions.ts';
import { CreateDomainMonitorOptions } from '../models/CreateDomainMonitorOptions.ts';
import { DomainMonitorAlertSinkDto } from '../models/DomainMonitorAlertSinkDto.ts';
import { DomainMonitorDto } from '../models/DomainMonitorDto.ts';
import { DomainMonitorEmailVerificationDto } from '../models/DomainMonitorEmailVerificationDto.ts';
import { DomainMonitorInsightsDto } from '../models/DomainMonitorInsightsDto.ts';
import { DomainMonitorObservedAuthSampleDto } from '../models/DomainMonitorObservedAuthSampleDto.ts';
import { DomainMonitorRunComparisonDto } from '../models/DomainMonitorRunComparisonDto.ts';
import { DomainMonitorRunDto } from '../models/DomainMonitorRunDto.ts';
import { DomainMonitorRunDueResult } from '../models/DomainMonitorRunDueResult.ts';
import { DomainMonitorRunNowResult } from '../models/DomainMonitorRunNowResult.ts';
import { DomainMonitorSeriesDto } from '../models/DomainMonitorSeriesDto.ts';
import { DomainMonitorSummaryDto } from '../models/DomainMonitorSummaryDto.ts';
import { UpdateDomainMonitorOptions } from '../models/UpdateDomainMonitorOptions.ts';

/**
 * no description
 */
export class DomainMonitorControllerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Compare two monitor runs
     * @param monitorId 
     * @param runId 
     * @param otherRunId 
     */
    public async compareDomainMonitorRuns(monitorId: string, runId: string, otherRunId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'monitorId' is not null or undefined
        if (monitorId === null || monitorId === undefined) {
            throw new RequiredError('Required parameter monitorId was null or undefined when calling compareDomainMonitorRuns.');
        }


        // verify required parameter 'runId' is not null or undefined
        if (runId === null || runId === undefined) {
            throw new RequiredError('Required parameter runId was null or undefined when calling compareDomainMonitorRuns.');
        }


        // verify required parameter 'otherRunId' is not null or undefined
        if (otherRunId === null || otherRunId === undefined) {
            throw new RequiredError('Required parameter otherRunId was null or undefined when calling compareDomainMonitorRuns.');
        }


        // Path Params
        const localVarPath = '/domain-monitor/monitors/{monitorId}/runs/{runId}/compare/{otherRunId}'
            .replace('{' + 'monitorId' + '}', encodeURIComponent(String(monitorId)))
            .replace('{' + 'runId' + '}', encodeURIComponent(String(runId)))
            .replace('{' + 'otherRunId' + '}', encodeURIComponent(String(otherRunId)));

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
     * Create domain monitor
     * @param createDomainMonitorOptions 
     */
    public async createDomainMonitor(createDomainMonitorOptions: CreateDomainMonitorOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'createDomainMonitorOptions' is not null or undefined
        if (createDomainMonitorOptions === null || createDomainMonitorOptions === undefined) {
            throw new RequiredError('Required parameter createDomainMonitorOptions was null or undefined when calling createDomainMonitor.');
        }


        // Path Params
        const localVarPath = '/domain-monitor/monitors';

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
            ObjectSerializer.serialize(createDomainMonitorOptions, "CreateDomainMonitorOptions", ""),
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
     * Create alert sink for monitor
     * @param monitorId 
     * @param createDomainMonitorAlertSinkOptions 
     */
    public async createDomainMonitorAlertSink(monitorId: string, createDomainMonitorAlertSinkOptions: CreateDomainMonitorAlertSinkOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'monitorId' is not null or undefined
        if (monitorId === null || monitorId === undefined) {
            throw new RequiredError('Required parameter monitorId was null or undefined when calling createDomainMonitorAlertSink.');
        }


        // verify required parameter 'createDomainMonitorAlertSinkOptions' is not null or undefined
        if (createDomainMonitorAlertSinkOptions === null || createDomainMonitorAlertSinkOptions === undefined) {
            throw new RequiredError('Required parameter createDomainMonitorAlertSinkOptions was null or undefined when calling createDomainMonitorAlertSink.');
        }


        // Path Params
        const localVarPath = '/domain-monitor/monitors/{monitorId}/alert-sinks'
            .replace('{' + 'monitorId' + '}', encodeURIComponent(String(monitorId)));

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
            ObjectSerializer.serialize(createDomainMonitorAlertSinkOptions, "CreateDomainMonitorAlertSinkOptions", ""),
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
     * Create or rotate domain monitor email verification address
     * @param monitorId 
     */
    public async createDomainMonitorEmailVerificationAddress(monitorId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'monitorId' is not null or undefined
        if (monitorId === null || monitorId === undefined) {
            throw new RequiredError('Required parameter monitorId was null or undefined when calling createDomainMonitorEmailVerificationAddress.');
        }


        // Path Params
        const localVarPath = '/domain-monitor/monitors/{monitorId}/email-verification-address'
            .replace('{' + 'monitorId' + '}', encodeURIComponent(String(monitorId)));

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
     * Delete domain monitor
     * @param monitorId 
     */
    public async deleteDomainMonitor(monitorId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'monitorId' is not null or undefined
        if (monitorId === null || monitorId === undefined) {
            throw new RequiredError('Required parameter monitorId was null or undefined when calling deleteDomainMonitor.');
        }


        // Path Params
        const localVarPath = '/domain-monitor/monitors/{monitorId}'
            .replace('{' + 'monitorId' + '}', encodeURIComponent(String(monitorId)));

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
     * Delete monitor alert sink
     * @param monitorId 
     * @param sinkId 
     */
    public async deleteDomainMonitorAlertSink(monitorId: string, sinkId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'monitorId' is not null or undefined
        if (monitorId === null || monitorId === undefined) {
            throw new RequiredError('Required parameter monitorId was null or undefined when calling deleteDomainMonitorAlertSink.');
        }


        // verify required parameter 'sinkId' is not null or undefined
        if (sinkId === null || sinkId === undefined) {
            throw new RequiredError('Required parameter sinkId was null or undefined when calling deleteDomainMonitorAlertSink.');
        }


        // Path Params
        const localVarPath = '/domain-monitor/monitors/{monitorId}/alert-sinks/{sinkId}'
            .replace('{' + 'monitorId' + '}', encodeURIComponent(String(monitorId)))
            .replace('{' + 'sinkId' + '}', encodeURIComponent(String(sinkId)));

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
     * Delete domain monitor observed authentication sample
     * @param monitorId 
     * @param sampleId 
     */
    public async deleteDomainMonitorObservedAuthSample(monitorId: string, sampleId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'monitorId' is not null or undefined
        if (monitorId === null || monitorId === undefined) {
            throw new RequiredError('Required parameter monitorId was null or undefined when calling deleteDomainMonitorObservedAuthSample.');
        }


        // verify required parameter 'sampleId' is not null or undefined
        if (sampleId === null || sampleId === undefined) {
            throw new RequiredError('Required parameter sampleId was null or undefined when calling deleteDomainMonitorObservedAuthSample.');
        }


        // Path Params
        const localVarPath = '/domain-monitor/monitors/{monitorId}/observed-auth-samples/{sampleId}'
            .replace('{' + 'monitorId' + '}', encodeURIComponent(String(monitorId)))
            .replace('{' + 'sampleId' + '}', encodeURIComponent(String(sampleId)));

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
     * Export one row per domain monitor check, including run-level score metadata and per-check pass, fail, or not-checked status.
     * Export monitor run results as CSV
     * @param monitorId 
     * @param runId 
     */
    public async exportDomainMonitorRunResults(monitorId: string, runId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'monitorId' is not null or undefined
        if (monitorId === null || monitorId === undefined) {
            throw new RequiredError('Required parameter monitorId was null or undefined when calling exportDomainMonitorRunResults.');
        }


        // verify required parameter 'runId' is not null or undefined
        if (runId === null || runId === undefined) {
            throw new RequiredError('Required parameter runId was null or undefined when calling exportDomainMonitorRunResults.');
        }


        // Path Params
        const localVarPath = '/domain-monitor/monitors/{monitorId}/runs/{runId}/results/export'
            .replace('{' + 'monitorId' + '}', encodeURIComponent(String(monitorId)))
            .replace('{' + 'runId' + '}', encodeURIComponent(String(runId)));

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
     * Get domain monitor
     * @param monitorId 
     */
    public async getDomainMonitor(monitorId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'monitorId' is not null or undefined
        if (monitorId === null || monitorId === undefined) {
            throw new RequiredError('Required parameter monitorId was null or undefined when calling getDomainMonitor.');
        }


        // Path Params
        const localVarPath = '/domain-monitor/monitors/{monitorId}'
            .replace('{' + 'monitorId' + '}', encodeURIComponent(String(monitorId)));

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
     * List alert sinks for monitor
     * @param monitorId 
     */
    public async getDomainMonitorAlertSinks(monitorId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'monitorId' is not null or undefined
        if (monitorId === null || monitorId === undefined) {
            throw new RequiredError('Required parameter monitorId was null or undefined when calling getDomainMonitorAlertSinks.');
        }


        // Path Params
        const localVarPath = '/domain-monitor/monitors/{monitorId}/alert-sinks'
            .replace('{' + 'monitorId' + '}', encodeURIComponent(String(monitorId)));

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
     * Get current auth stack for monitor domain
     * @param monitorId 
     * @param dkimSelector 
     */
    public async getDomainMonitorAuthStack(monitorId: string, dkimSelector?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'monitorId' is not null or undefined
        if (monitorId === null || monitorId === undefined) {
            throw new RequiredError('Required parameter monitorId was null or undefined when calling getDomainMonitorAuthStack.');
        }



        // Path Params
        const localVarPath = '/domain-monitor/monitors/{monitorId}/auth-stack'
            .replace('{' + 'monitorId' + '}', encodeURIComponent(String(monitorId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (dkimSelector !== undefined) {
            requestContext.setQueryParam("dkimSelector", ObjectSerializer.serialize(dkimSelector, "string", ""));
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
     * Get domain monitor email verification setup
     * @param monitorId 
     */
    public async getDomainMonitorEmailVerification(monitorId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'monitorId' is not null or undefined
        if (monitorId === null || monitorId === undefined) {
            throw new RequiredError('Required parameter monitorId was null or undefined when calling getDomainMonitorEmailVerification.');
        }


        // Path Params
        const localVarPath = '/domain-monitor/monitors/{monitorId}/email-verification'
            .replace('{' + 'monitorId' + '}', encodeURIComponent(String(monitorId)));

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
     * Get monitor insights
     * @param monitorId 
     * @param since 
     * @param before 
     */
    public async getDomainMonitorInsights(monitorId: string, since?: Date, before?: Date, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'monitorId' is not null or undefined
        if (monitorId === null || monitorId === undefined) {
            throw new RequiredError('Required parameter monitorId was null or undefined when calling getDomainMonitorInsights.');
        }




        // Path Params
        const localVarPath = '/domain-monitor/monitors/{monitorId}/insights'
            .replace('{' + 'monitorId' + '}', encodeURIComponent(String(monitorId)));

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
     * List domain monitor observed authentication samples
     * @param monitorId 
     */
    public async getDomainMonitorObservedAuthSamples(monitorId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'monitorId' is not null or undefined
        if (monitorId === null || monitorId === undefined) {
            throw new RequiredError('Required parameter monitorId was null or undefined when calling getDomainMonitorObservedAuthSamples.');
        }


        // Path Params
        const localVarPath = '/domain-monitor/monitors/{monitorId}/observed-auth-samples'
            .replace('{' + 'monitorId' + '}', encodeURIComponent(String(monitorId)));

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
     * Get monitor run
     * @param monitorId 
     * @param runId 
     */
    public async getDomainMonitorRun(monitorId: string, runId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'monitorId' is not null or undefined
        if (monitorId === null || monitorId === undefined) {
            throw new RequiredError('Required parameter monitorId was null or undefined when calling getDomainMonitorRun.');
        }


        // verify required parameter 'runId' is not null or undefined
        if (runId === null || runId === undefined) {
            throw new RequiredError('Required parameter runId was null or undefined when calling getDomainMonitorRun.');
        }


        // Path Params
        const localVarPath = '/domain-monitor/monitors/{monitorId}/runs/{runId}'
            .replace('{' + 'monitorId' + '}', encodeURIComponent(String(monitorId)))
            .replace('{' + 'runId' + '}', encodeURIComponent(String(runId)));

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
     * List monitor runs
     * @param monitorId 
     * @param since 
     * @param before 
     * @param status 
     * @param limit 
     */
    public async getDomainMonitorRuns(monitorId: string, since?: Date, before?: Date, status?: 'HEALTHY' | 'DEGRADED' | 'CRITICAL' | 'FAILED', limit?: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'monitorId' is not null or undefined
        if (monitorId === null || monitorId === undefined) {
            throw new RequiredError('Required parameter monitorId was null or undefined when calling getDomainMonitorRuns.');
        }






        // Path Params
        const localVarPath = '/domain-monitor/monitors/{monitorId}/runs'
            .replace('{' + 'monitorId' + '}', encodeURIComponent(String(monitorId)));

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
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "'HEALTHY' | 'DEGRADED' | 'CRITICAL' | 'FAILED'", ""));
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
     * Get monitor trend series
     * @param monitorId 
     * @param since 
     * @param before 
     * @param bucket 
     */
    public async getDomainMonitorSeries(monitorId: string, since?: Date, before?: Date, bucket?: 'HOUR' | 'DAY', options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'monitorId' is not null or undefined
        if (monitorId === null || monitorId === undefined) {
            throw new RequiredError('Required parameter monitorId was null or undefined when calling getDomainMonitorSeries.');
        }





        // Path Params
        const localVarPath = '/domain-monitor/monitors/{monitorId}/series'
            .replace('{' + 'monitorId' + '}', encodeURIComponent(String(monitorId)));

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
     * Get domain monitor summary
     * @param monitorId 
     * @param dkimSelector 
     */
    public async getDomainMonitorSummary(monitorId: string, dkimSelector?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'monitorId' is not null or undefined
        if (monitorId === null || monitorId === undefined) {
            throw new RequiredError('Required parameter monitorId was null or undefined when calling getDomainMonitorSummary.');
        }



        // Path Params
        const localVarPath = '/domain-monitor/monitors/{monitorId}/summary'
            .replace('{' + 'monitorId' + '}', encodeURIComponent(String(monitorId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (dkimSelector !== undefined) {
            requestContext.setQueryParam("dkimSelector", ObjectSerializer.serialize(dkimSelector, "string", ""));
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
     * List domain monitors
     */
    public async getDomainMonitors(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/domain-monitor/monitors';

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
     * Run monitor now
     * @param monitorId 
     */
    public async runDomainMonitorNow(monitorId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'monitorId' is not null or undefined
        if (monitorId === null || monitorId === undefined) {
            throw new RequiredError('Required parameter monitorId was null or undefined when calling runDomainMonitorNow.');
        }


        // Path Params
        const localVarPath = '/domain-monitor/monitors/{monitorId}/run-now'
            .replace('{' + 'monitorId' + '}', encodeURIComponent(String(monitorId)));

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
     * Run due monitors for user
     * @param maxRuns 
     */
    public async runDueDomainMonitors(maxRuns?: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;


        // Path Params
        const localVarPath = '/domain-monitor/monitors/run-due';

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
     * Update domain monitor
     * @param monitorId 
     * @param updateDomainMonitorOptions 
     */
    public async updateDomainMonitor(monitorId: string, updateDomainMonitorOptions: UpdateDomainMonitorOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'monitorId' is not null or undefined
        if (monitorId === null || monitorId === undefined) {
            throw new RequiredError('Required parameter monitorId was null or undefined when calling updateDomainMonitor.');
        }


        // verify required parameter 'updateDomainMonitorOptions' is not null or undefined
        if (updateDomainMonitorOptions === null || updateDomainMonitorOptions === undefined) {
            throw new RequiredError('Required parameter updateDomainMonitorOptions was null or undefined when calling updateDomainMonitor.');
        }


        // Path Params
        const localVarPath = '/domain-monitor/monitors/{monitorId}'
            .replace('{' + 'monitorId' + '}', encodeURIComponent(String(monitorId)));

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
            ObjectSerializer.serialize(updateDomainMonitorOptions, "UpdateDomainMonitorOptions", ""),
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

export class DomainMonitorControllerApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to compareDomainMonitorRuns
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async compareDomainMonitorRuns(response: ResponseContext): Promise<DomainMonitorRunComparisonDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DomainMonitorRunComparisonDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DomainMonitorRunComparisonDto", ""
            ) as DomainMonitorRunComparisonDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DomainMonitorRunComparisonDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DomainMonitorRunComparisonDto", ""
            ) as DomainMonitorRunComparisonDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createDomainMonitor
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createDomainMonitor(response: ResponseContext): Promise<DomainMonitorDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: DomainMonitorDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DomainMonitorDto", ""
            ) as DomainMonitorDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DomainMonitorDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DomainMonitorDto", ""
            ) as DomainMonitorDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createDomainMonitorAlertSink
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createDomainMonitorAlertSink(response: ResponseContext): Promise<DomainMonitorAlertSinkDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: DomainMonitorAlertSinkDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DomainMonitorAlertSinkDto", ""
            ) as DomainMonitorAlertSinkDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DomainMonitorAlertSinkDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DomainMonitorAlertSinkDto", ""
            ) as DomainMonitorAlertSinkDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createDomainMonitorEmailVerificationAddress
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createDomainMonitorEmailVerificationAddress(response: ResponseContext): Promise<DomainMonitorEmailVerificationDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DomainMonitorEmailVerificationDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DomainMonitorEmailVerificationDto", ""
            ) as DomainMonitorEmailVerificationDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DomainMonitorEmailVerificationDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DomainMonitorEmailVerificationDto", ""
            ) as DomainMonitorEmailVerificationDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteDomainMonitor
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteDomainMonitor(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to deleteDomainMonitorAlertSink
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteDomainMonitorAlertSink(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to deleteDomainMonitorObservedAuthSample
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteDomainMonitorObservedAuthSample(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to exportDomainMonitorRunResults
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exportDomainMonitorRunResults(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to getDomainMonitor
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDomainMonitor(response: ResponseContext): Promise<DomainMonitorDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DomainMonitorDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DomainMonitorDto", ""
            ) as DomainMonitorDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DomainMonitorDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DomainMonitorDto", ""
            ) as DomainMonitorDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDomainMonitorAlertSinks
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDomainMonitorAlertSinks(response: ResponseContext): Promise<Array<DomainMonitorAlertSinkDto> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<DomainMonitorAlertSinkDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<DomainMonitorAlertSinkDto>", ""
            ) as Array<DomainMonitorAlertSinkDto>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<DomainMonitorAlertSinkDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<DomainMonitorAlertSinkDto>", ""
            ) as Array<DomainMonitorAlertSinkDto>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDomainMonitorAuthStack
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDomainMonitorAuthStack(response: ResponseContext): Promise<CheckEmailAuthStackResults > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CheckEmailAuthStackResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CheckEmailAuthStackResults", ""
            ) as CheckEmailAuthStackResults;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CheckEmailAuthStackResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CheckEmailAuthStackResults", ""
            ) as CheckEmailAuthStackResults;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDomainMonitorEmailVerification
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDomainMonitorEmailVerification(response: ResponseContext): Promise<DomainMonitorEmailVerificationDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DomainMonitorEmailVerificationDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DomainMonitorEmailVerificationDto", ""
            ) as DomainMonitorEmailVerificationDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DomainMonitorEmailVerificationDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DomainMonitorEmailVerificationDto", ""
            ) as DomainMonitorEmailVerificationDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDomainMonitorInsights
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDomainMonitorInsights(response: ResponseContext): Promise<DomainMonitorInsightsDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DomainMonitorInsightsDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DomainMonitorInsightsDto", ""
            ) as DomainMonitorInsightsDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DomainMonitorInsightsDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DomainMonitorInsightsDto", ""
            ) as DomainMonitorInsightsDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDomainMonitorObservedAuthSamples
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDomainMonitorObservedAuthSamples(response: ResponseContext): Promise<Array<DomainMonitorObservedAuthSampleDto> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<DomainMonitorObservedAuthSampleDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<DomainMonitorObservedAuthSampleDto>", ""
            ) as Array<DomainMonitorObservedAuthSampleDto>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<DomainMonitorObservedAuthSampleDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<DomainMonitorObservedAuthSampleDto>", ""
            ) as Array<DomainMonitorObservedAuthSampleDto>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDomainMonitorRun
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDomainMonitorRun(response: ResponseContext): Promise<DomainMonitorRunDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DomainMonitorRunDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DomainMonitorRunDto", ""
            ) as DomainMonitorRunDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DomainMonitorRunDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DomainMonitorRunDto", ""
            ) as DomainMonitorRunDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDomainMonitorRuns
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDomainMonitorRuns(response: ResponseContext): Promise<Array<DomainMonitorRunDto> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<DomainMonitorRunDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<DomainMonitorRunDto>", ""
            ) as Array<DomainMonitorRunDto>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<DomainMonitorRunDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<DomainMonitorRunDto>", ""
            ) as Array<DomainMonitorRunDto>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDomainMonitorSeries
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDomainMonitorSeries(response: ResponseContext): Promise<DomainMonitorSeriesDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DomainMonitorSeriesDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DomainMonitorSeriesDto", ""
            ) as DomainMonitorSeriesDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DomainMonitorSeriesDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DomainMonitorSeriesDto", ""
            ) as DomainMonitorSeriesDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDomainMonitorSummary
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDomainMonitorSummary(response: ResponseContext): Promise<DomainMonitorSummaryDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DomainMonitorSummaryDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DomainMonitorSummaryDto", ""
            ) as DomainMonitorSummaryDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DomainMonitorSummaryDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DomainMonitorSummaryDto", ""
            ) as DomainMonitorSummaryDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDomainMonitors
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDomainMonitors(response: ResponseContext): Promise<Array<DomainMonitorDto> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<DomainMonitorDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<DomainMonitorDto>", ""
            ) as Array<DomainMonitorDto>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<DomainMonitorDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<DomainMonitorDto>", ""
            ) as Array<DomainMonitorDto>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to runDomainMonitorNow
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async runDomainMonitorNow(response: ResponseContext): Promise<DomainMonitorRunNowResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DomainMonitorRunNowResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DomainMonitorRunNowResult", ""
            ) as DomainMonitorRunNowResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DomainMonitorRunNowResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DomainMonitorRunNowResult", ""
            ) as DomainMonitorRunNowResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to runDueDomainMonitors
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async runDueDomainMonitors(response: ResponseContext): Promise<DomainMonitorRunDueResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DomainMonitorRunDueResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DomainMonitorRunDueResult", ""
            ) as DomainMonitorRunDueResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DomainMonitorRunDueResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DomainMonitorRunDueResult", ""
            ) as DomainMonitorRunDueResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateDomainMonitor
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateDomainMonitor(response: ResponseContext): Promise<DomainMonitorDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DomainMonitorDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DomainMonitorDto", ""
            ) as DomainMonitorDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DomainMonitorDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DomainMonitorDto", ""
            ) as DomainMonitorDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
