// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { CreateDeliverabilitySimulationJobOptions } from '../models/CreateDeliverabilitySimulationJobOptions.ts';
import { CreateDeliverabilityTestOptions } from '../models/CreateDeliverabilityTestOptions.ts';
import { DeleteResult } from '../models/DeleteResult.ts';
import { DeliverabilityAnalyticsSeriesDto } from '../models/DeliverabilityAnalyticsSeriesDto.ts';
import { DeliverabilityEntityResultPageDto } from '../models/DeliverabilityEntityResultPageDto.ts';
import { DeliverabilityFailureHotspotsDto } from '../models/DeliverabilityFailureHotspotsDto.ts';
import { DeliverabilityPollStatusResultDto } from '../models/DeliverabilityPollStatusResultDto.ts';
import { DeliverabilitySimulationJobDto } from '../models/DeliverabilitySimulationJobDto.ts';
import { DeliverabilitySimulationJobEventPageDto } from '../models/DeliverabilitySimulationJobEventPageDto.ts';
import { DeliverabilityTestDto } from '../models/DeliverabilityTestDto.ts';
import { DeliverabilityTestPageDto } from '../models/DeliverabilityTestPageDto.ts';
import { UpdateDeliverabilityTestOptions } from '../models/UpdateDeliverabilityTestOptions.ts';

/**
 * no description
 */
export class DeliverabilityTestControllerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Cancel a running or paused simulation job.
     * Cancel deliverability simulation job
     * @param testId 
     * @param jobId 
     */
    public async cancelDeliverabilitySimulationJob(testId: string, jobId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'testId' is not null or undefined
        if (testId === null || testId === undefined) {
            throw new RequiredError('Required parameter testId was null or undefined when calling cancelDeliverabilitySimulationJob.');
        }


        // verify required parameter 'jobId' is not null or undefined
        if (jobId === null || jobId === undefined) {
            throw new RequiredError('Required parameter jobId was null or undefined when calling cancelDeliverabilitySimulationJob.');
        }


        // Path Params
        const localVarPath = '/test/deliverability/{testId}/simulation-jobs/{jobId}/cancel'
            .replace('{' + 'testId' + '}', encodeURIComponent(String(testId)))
            .replace('{' + 'jobId' + '}', encodeURIComponent(String(jobId)));

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
     * Create and start a simulation job for a running load test. Only one active simulation job is allowed per user.
     * Create deliverability simulation job
     * @param testId 
     * @param createDeliverabilitySimulationJobOptions 
     */
    public async createDeliverabilitySimulationJob(testId: string, createDeliverabilitySimulationJobOptions: CreateDeliverabilitySimulationJobOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'testId' is not null or undefined
        if (testId === null || testId === undefined) {
            throw new RequiredError('Required parameter testId was null or undefined when calling createDeliverabilitySimulationJob.');
        }


        // verify required parameter 'createDeliverabilitySimulationJobOptions' is not null or undefined
        if (createDeliverabilitySimulationJobOptions === null || createDeliverabilitySimulationJobOptions === undefined) {
            throw new RequiredError('Required parameter createDeliverabilitySimulationJobOptions was null or undefined when calling createDeliverabilitySimulationJob.');
        }


        // Path Params
        const localVarPath = '/test/deliverability/{testId}/simulation-jobs'
            .replace('{' + 'testId' + '}', encodeURIComponent(String(testId)));

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
            ObjectSerializer.serialize(createDeliverabilitySimulationJobOptions, "CreateDeliverabilitySimulationJobOptions", ""),
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
     * Create a load test for inboxes or phone numbers using ALL, PATTERN, or EXPLICIT selector scope.
     * Create load test
     * @param createDeliverabilityTestOptions 
     */
    public async createDeliverabilityTest(createDeliverabilityTestOptions: CreateDeliverabilityTestOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'createDeliverabilityTestOptions' is not null or undefined
        if (createDeliverabilityTestOptions === null || createDeliverabilityTestOptions === undefined) {
            throw new RequiredError('Required parameter createDeliverabilityTestOptions was null or undefined when calling createDeliverabilityTest.');
        }


        // Path Params
        const localVarPath = '/test/deliverability';

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
            ObjectSerializer.serialize(createDeliverabilityTestOptions, "CreateDeliverabilityTestOptions", ""),
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
     * Delete test and all persisted entity-level results.
     * Delete load test
     * @param testId 
     */
    public async deleteDeliverabilityTest(testId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'testId' is not null or undefined
        if (testId === null || testId === undefined) {
            throw new RequiredError('Required parameter testId was null or undefined when calling deleteDeliverabilityTest.');
        }


        // Path Params
        const localVarPath = '/test/deliverability/{testId}'
            .replace('{' + 'testId' + '}', encodeURIComponent(String(testId)));

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
     * Create a fresh load test using an existing test configuration, including selector scope, exclusions, and expectations.
     * Duplicate load test
     * @param testId 
     */
    public async duplicateDeliverabilityTest(testId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'testId' is not null or undefined
        if (testId === null || testId === undefined) {
            throw new RequiredError('Required parameter testId was null or undefined when calling duplicateDeliverabilityTest.');
        }


        // Path Params
        const localVarPath = '/test/deliverability/{testId}/duplicate'
            .replace('{' + 'testId' + '}', encodeURIComponent(String(testId)));

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
     * Export a PDF report for a terminal load test (COMPLETE, FAILED, or STOPPED), including configuration, summary outcomes, and detailed entity-level results.
     * Export load-test report as PDF
     * @param testId 
     */
    public async exportDeliverabilityTestReport(testId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'testId' is not null or undefined
        if (testId === null || testId === undefined) {
            throw new RequiredError('Required parameter testId was null or undefined when calling exportDeliverabilityTestReport.');
        }


        // Path Params
        const localVarPath = '/test/deliverability/{testId}/report/export'
            .replace('{' + 'testId' + '}', encodeURIComponent(String(testId)));

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
     * Export per-entity deliverability results including expectation-level pass/fail counts. The latest status is evaluated with the same polling safeguards before export.
     * Export load-test entity results as CSV
     * @param testId 
     * @param matched 
     */
    public async exportDeliverabilityTestResults(testId: string, matched?: boolean, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'testId' is not null or undefined
        if (testId === null || testId === undefined) {
            throw new RequiredError('Required parameter testId was null or undefined when calling exportDeliverabilityTestResults.');
        }



        // Path Params
        const localVarPath = '/test/deliverability/{testId}/results/export'
            .replace('{' + 'testId' + '}', encodeURIComponent(String(testId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (matched !== undefined) {
            requestContext.setQueryParam("matched", ObjectSerializer.serialize(matched, "boolean", ""));
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
     * Compare deliverability runs over a time range with bucketed chart metrics and run-level rows for table views.
     * Get deliverability analytics time series
     * @param since 
     * @param before 
     * @param scope 
     * @param bucket 
     * @param runLimit 
     */
    public async getDeliverabilityAnalyticsSeries(since?: Date, before?: Date, scope?: 'INBOX' | 'PHONE', bucket?: 'HOUR' | 'DAY', runLimit?: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;






        // Path Params
        const localVarPath = '/test/deliverability/analytics/series';

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
        if (scope !== undefined) {
            requestContext.setQueryParam("scope", ObjectSerializer.serialize(scope, "'INBOX' | 'PHONE'", ""));
        }
        if (bucket !== undefined) {
            requestContext.setQueryParam("bucket", ObjectSerializer.serialize(bucket, "'HOUR' | 'DAY'", ""));
        }
        if (runLimit !== undefined) {
            requestContext.setQueryParam("runLimit", ObjectSerializer.serialize(runLimit, "number", "int32"));
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
     * Find commonly failing entities and phone country/variant dimensions across deliverability runs in a time range.
     * Get deliverability failure hotspots
     * @param since 
     * @param before 
     * @param scope 
     * @param limit 
     */
    public async getDeliverabilityFailureHotspots(since?: Date, before?: Date, scope?: 'INBOX' | 'PHONE', limit?: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;





        // Path Params
        const localVarPath = '/test/deliverability/analytics/hotspots';

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
        if (scope !== undefined) {
            requestContext.setQueryParam("scope", ObjectSerializer.serialize(scope, "'INBOX' | 'PHONE'", ""));
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
     * Get simulation job status and progress counters.
     * Get deliverability simulation job
     * @param testId 
     * @param jobId 
     */
    public async getDeliverabilitySimulationJob(testId: string, jobId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'testId' is not null or undefined
        if (testId === null || testId === undefined) {
            throw new RequiredError('Required parameter testId was null or undefined when calling getDeliverabilitySimulationJob.');
        }


        // verify required parameter 'jobId' is not null or undefined
        if (jobId === null || jobId === undefined) {
            throw new RequiredError('Required parameter jobId was null or undefined when calling getDeliverabilitySimulationJob.');
        }


        // Path Params
        const localVarPath = '/test/deliverability/{testId}/simulation-jobs/{jobId}'
            .replace('{' + 'testId' + '}', encodeURIComponent(String(testId)))
            .replace('{' + 'jobId' + '}', encodeURIComponent(String(jobId)));

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
     * Get paged simulation events including send successes and failures.
     * Get deliverability simulation job events
     * @param testId 
     * @param jobId 
     * @param page 
     * @param size 
     * @param sort 
     */
    public async getDeliverabilitySimulationJobEvents(testId: string, jobId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'testId' is not null or undefined
        if (testId === null || testId === undefined) {
            throw new RequiredError('Required parameter testId was null or undefined when calling getDeliverabilitySimulationJobEvents.');
        }


        // verify required parameter 'jobId' is not null or undefined
        if (jobId === null || jobId === undefined) {
            throw new RequiredError('Required parameter jobId was null or undefined when calling getDeliverabilitySimulationJobEvents.');
        }





        // Path Params
        const localVarPath = '/test/deliverability/{testId}/simulation-jobs/{jobId}/events'
            .replace('{' + 'testId' + '}', encodeURIComponent(String(testId)))
            .replace('{' + 'jobId' + '}', encodeURIComponent(String(jobId)));

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
     * Get load-test configuration and latest progress counters.
     * Get load test
     * @param testId 
     */
    public async getDeliverabilityTest(testId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'testId' is not null or undefined
        if (testId === null || testId === undefined) {
            throw new RequiredError('Required parameter testId was null or undefined when calling getDeliverabilityTest.');
        }


        // Path Params
        const localVarPath = '/test/deliverability/{testId}'
            .replace('{' + 'testId' + '}', encodeURIComponent(String(testId)));

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
     * Get paged per-entity expectation results with optional matched/unmatched filtering.
     * Get load-test entity results
     * @param testId 
     * @param matched 
     * @param page 
     * @param size 
     * @param sort 
     */
    public async getDeliverabilityTestResults(testId: string, matched?: boolean, page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'testId' is not null or undefined
        if (testId === null || testId === undefined) {
            throw new RequiredError('Required parameter testId was null or undefined when calling getDeliverabilityTestResults.');
        }






        // Path Params
        const localVarPath = '/test/deliverability/{testId}/results'
            .replace('{' + 'testId' + '}', encodeURIComponent(String(testId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (matched !== undefined) {
            requestContext.setQueryParam("matched", ObjectSerializer.serialize(matched, "boolean", ""));
        }
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
     * List load tests for the authenticated account.
     * List load tests
     * @param page Page index
     * @param size Page size
     * @param sort Sort direction
     */
    public async getDeliverabilityTests(page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;




        // Path Params
        const localVarPath = '/test/deliverability';

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
     * Get the most recent simulation job for a load test.
     * Get latest deliverability simulation job
     * @param testId 
     */
    public async getLatestDeliverabilitySimulationJob(testId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'testId' is not null or undefined
        if (testId === null || testId === undefined) {
            throw new RequiredError('Required parameter testId was null or undefined when calling getLatestDeliverabilitySimulationJob.');
        }


        // Path Params
        const localVarPath = '/test/deliverability/{testId}/simulation-jobs/latest'
            .replace('{' + 'testId' + '}', encodeURIComponent(String(testId)));

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
     * Pause a running simulation job.
     * Pause deliverability simulation job
     * @param testId 
     * @param jobId 
     */
    public async pauseDeliverabilitySimulationJob(testId: string, jobId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'testId' is not null or undefined
        if (testId === null || testId === undefined) {
            throw new RequiredError('Required parameter testId was null or undefined when calling pauseDeliverabilitySimulationJob.');
        }


        // verify required parameter 'jobId' is not null or undefined
        if (jobId === null || jobId === undefined) {
            throw new RequiredError('Required parameter jobId was null or undefined when calling pauseDeliverabilitySimulationJob.');
        }


        // Path Params
        const localVarPath = '/test/deliverability/{testId}/simulation-jobs/{jobId}/pause'
            .replace('{' + 'testId' + '}', encodeURIComponent(String(testId)))
            .replace('{' + 'jobId' + '}', encodeURIComponent(String(jobId)));

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
     * Pause a RUNNING or SCHEDULED load test.
     * Pause load test
     * @param testId 
     */
    public async pauseDeliverabilityTest(testId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'testId' is not null or undefined
        if (testId === null || testId === undefined) {
            throw new RequiredError('Required parameter testId was null or undefined when calling pauseDeliverabilityTest.');
        }


        // Path Params
        const localVarPath = '/test/deliverability/{testId}/pause'
            .replace('{' + 'testId' + '}', encodeURIComponent(String(testId)));

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
     * Poll test progress. Evaluation is throttled with a 5-second cache window to protect backing data stores.
     * Poll load-test status
     * @param testId 
     */
    public async pollDeliverabilityTestStatus(testId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'testId' is not null or undefined
        if (testId === null || testId === undefined) {
            throw new RequiredError('Required parameter testId was null or undefined when calling pollDeliverabilityTestStatus.');
        }


        // Path Params
        const localVarPath = '/test/deliverability/{testId}/status'
            .replace('{' + 'testId' + '}', encodeURIComponent(String(testId)));

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
     * Resume a paused simulation job.
     * Resume deliverability simulation job
     * @param testId 
     * @param jobId 
     */
    public async resumeDeliverabilitySimulationJob(testId: string, jobId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'testId' is not null or undefined
        if (testId === null || testId === undefined) {
            throw new RequiredError('Required parameter testId was null or undefined when calling resumeDeliverabilitySimulationJob.');
        }


        // verify required parameter 'jobId' is not null or undefined
        if (jobId === null || jobId === undefined) {
            throw new RequiredError('Required parameter jobId was null or undefined when calling resumeDeliverabilitySimulationJob.');
        }


        // Path Params
        const localVarPath = '/test/deliverability/{testId}/simulation-jobs/{jobId}/resume'
            .replace('{' + 'testId' + '}', encodeURIComponent(String(testId)))
            .replace('{' + 'jobId' + '}', encodeURIComponent(String(jobId)));

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
     * Start a CREATED test or resume a PAUSED/SCHEDULED test.
     * Start or resume load test
     * @param testId 
     */
    public async startDeliverabilityTest(testId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'testId' is not null or undefined
        if (testId === null || testId === undefined) {
            throw new RequiredError('Required parameter testId was null or undefined when calling startDeliverabilityTest.');
        }


        // Path Params
        const localVarPath = '/test/deliverability/{testId}/start'
            .replace('{' + 'testId' + '}', encodeURIComponent(String(testId)));

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
     * Stop a load test and mark it terminal.
     * Stop load test
     * @param testId 
     */
    public async stopDeliverabilityTest(testId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'testId' is not null or undefined
        if (testId === null || testId === undefined) {
            throw new RequiredError('Required parameter testId was null or undefined when calling stopDeliverabilityTest.');
        }


        // Path Params
        const localVarPath = '/test/deliverability/{testId}/stop'
            .replace('{' + 'testId' + '}', encodeURIComponent(String(testId)));

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
     * Update metadata, timeout, and expectations for a non-running non-terminal test.
     * Update load test
     * @param testId 
     * @param updateDeliverabilityTestOptions 
     */
    public async updateDeliverabilityTest(testId: string, updateDeliverabilityTestOptions: UpdateDeliverabilityTestOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'testId' is not null or undefined
        if (testId === null || testId === undefined) {
            throw new RequiredError('Required parameter testId was null or undefined when calling updateDeliverabilityTest.');
        }


        // verify required parameter 'updateDeliverabilityTestOptions' is not null or undefined
        if (updateDeliverabilityTestOptions === null || updateDeliverabilityTestOptions === undefined) {
            throw new RequiredError('Required parameter updateDeliverabilityTestOptions was null or undefined when calling updateDeliverabilityTest.');
        }


        // Path Params
        const localVarPath = '/test/deliverability/{testId}'
            .replace('{' + 'testId' + '}', encodeURIComponent(String(testId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
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
            ObjectSerializer.serialize(updateDeliverabilityTestOptions, "UpdateDeliverabilityTestOptions", ""),
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

export class DeliverabilityTestControllerApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cancelDeliverabilitySimulationJob
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cancelDeliverabilitySimulationJob(response: ResponseContext): Promise<DeliverabilitySimulationJobDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeliverabilitySimulationJobDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverabilitySimulationJobDto", ""
            ) as DeliverabilitySimulationJobDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeliverabilitySimulationJobDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverabilitySimulationJobDto", ""
            ) as DeliverabilitySimulationJobDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createDeliverabilitySimulationJob
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createDeliverabilitySimulationJob(response: ResponseContext): Promise<DeliverabilitySimulationJobDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeliverabilitySimulationJobDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverabilitySimulationJobDto", ""
            ) as DeliverabilitySimulationJobDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeliverabilitySimulationJobDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverabilitySimulationJobDto", ""
            ) as DeliverabilitySimulationJobDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createDeliverabilityTest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createDeliverabilityTest(response: ResponseContext): Promise<DeliverabilityTestDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeliverabilityTestDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverabilityTestDto", ""
            ) as DeliverabilityTestDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeliverabilityTestDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverabilityTestDto", ""
            ) as DeliverabilityTestDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteDeliverabilityTest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteDeliverabilityTest(response: ResponseContext): Promise<DeleteResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeleteResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeleteResult", ""
            ) as DeleteResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeleteResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeleteResult", ""
            ) as DeleteResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to duplicateDeliverabilityTest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async duplicateDeliverabilityTest(response: ResponseContext): Promise<DeliverabilityTestDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeliverabilityTestDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverabilityTestDto", ""
            ) as DeliverabilityTestDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeliverabilityTestDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverabilityTestDto", ""
            ) as DeliverabilityTestDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to exportDeliverabilityTestReport
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exportDeliverabilityTestReport(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to exportDeliverabilityTestResults
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exportDeliverabilityTestResults(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to getDeliverabilityAnalyticsSeries
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDeliverabilityAnalyticsSeries(response: ResponseContext): Promise<DeliverabilityAnalyticsSeriesDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeliverabilityAnalyticsSeriesDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverabilityAnalyticsSeriesDto", ""
            ) as DeliverabilityAnalyticsSeriesDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeliverabilityAnalyticsSeriesDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverabilityAnalyticsSeriesDto", ""
            ) as DeliverabilityAnalyticsSeriesDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDeliverabilityFailureHotspots
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDeliverabilityFailureHotspots(response: ResponseContext): Promise<DeliverabilityFailureHotspotsDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeliverabilityFailureHotspotsDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverabilityFailureHotspotsDto", ""
            ) as DeliverabilityFailureHotspotsDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeliverabilityFailureHotspotsDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverabilityFailureHotspotsDto", ""
            ) as DeliverabilityFailureHotspotsDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDeliverabilitySimulationJob
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDeliverabilitySimulationJob(response: ResponseContext): Promise<DeliverabilitySimulationJobDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeliverabilitySimulationJobDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverabilitySimulationJobDto", ""
            ) as DeliverabilitySimulationJobDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeliverabilitySimulationJobDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverabilitySimulationJobDto", ""
            ) as DeliverabilitySimulationJobDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDeliverabilitySimulationJobEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDeliverabilitySimulationJobEvents(response: ResponseContext): Promise<DeliverabilitySimulationJobEventPageDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeliverabilitySimulationJobEventPageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverabilitySimulationJobEventPageDto", ""
            ) as DeliverabilitySimulationJobEventPageDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeliverabilitySimulationJobEventPageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverabilitySimulationJobEventPageDto", ""
            ) as DeliverabilitySimulationJobEventPageDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDeliverabilityTest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDeliverabilityTest(response: ResponseContext): Promise<DeliverabilityTestDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeliverabilityTestDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverabilityTestDto", ""
            ) as DeliverabilityTestDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeliverabilityTestDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverabilityTestDto", ""
            ) as DeliverabilityTestDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDeliverabilityTestResults
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDeliverabilityTestResults(response: ResponseContext): Promise<DeliverabilityEntityResultPageDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeliverabilityEntityResultPageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverabilityEntityResultPageDto", ""
            ) as DeliverabilityEntityResultPageDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeliverabilityEntityResultPageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverabilityEntityResultPageDto", ""
            ) as DeliverabilityEntityResultPageDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDeliverabilityTests
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDeliverabilityTests(response: ResponseContext): Promise<DeliverabilityTestPageDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeliverabilityTestPageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverabilityTestPageDto", ""
            ) as DeliverabilityTestPageDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeliverabilityTestPageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverabilityTestPageDto", ""
            ) as DeliverabilityTestPageDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getLatestDeliverabilitySimulationJob
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getLatestDeliverabilitySimulationJob(response: ResponseContext): Promise<DeliverabilitySimulationJobDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeliverabilitySimulationJobDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverabilitySimulationJobDto", ""
            ) as DeliverabilitySimulationJobDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeliverabilitySimulationJobDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverabilitySimulationJobDto", ""
            ) as DeliverabilitySimulationJobDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to pauseDeliverabilitySimulationJob
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async pauseDeliverabilitySimulationJob(response: ResponseContext): Promise<DeliverabilitySimulationJobDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeliverabilitySimulationJobDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverabilitySimulationJobDto", ""
            ) as DeliverabilitySimulationJobDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeliverabilitySimulationJobDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverabilitySimulationJobDto", ""
            ) as DeliverabilitySimulationJobDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to pauseDeliverabilityTest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async pauseDeliverabilityTest(response: ResponseContext): Promise<DeliverabilityTestDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeliverabilityTestDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverabilityTestDto", ""
            ) as DeliverabilityTestDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeliverabilityTestDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverabilityTestDto", ""
            ) as DeliverabilityTestDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to pollDeliverabilityTestStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async pollDeliverabilityTestStatus(response: ResponseContext): Promise<DeliverabilityPollStatusResultDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeliverabilityPollStatusResultDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverabilityPollStatusResultDto", ""
            ) as DeliverabilityPollStatusResultDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeliverabilityPollStatusResultDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverabilityPollStatusResultDto", ""
            ) as DeliverabilityPollStatusResultDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to resumeDeliverabilitySimulationJob
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async resumeDeliverabilitySimulationJob(response: ResponseContext): Promise<DeliverabilitySimulationJobDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeliverabilitySimulationJobDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverabilitySimulationJobDto", ""
            ) as DeliverabilitySimulationJobDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeliverabilitySimulationJobDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverabilitySimulationJobDto", ""
            ) as DeliverabilitySimulationJobDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to startDeliverabilityTest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async startDeliverabilityTest(response: ResponseContext): Promise<DeliverabilityTestDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeliverabilityTestDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverabilityTestDto", ""
            ) as DeliverabilityTestDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeliverabilityTestDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverabilityTestDto", ""
            ) as DeliverabilityTestDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to stopDeliverabilityTest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async stopDeliverabilityTest(response: ResponseContext): Promise<DeliverabilityTestDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeliverabilityTestDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverabilityTestDto", ""
            ) as DeliverabilityTestDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeliverabilityTestDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverabilityTestDto", ""
            ) as DeliverabilityTestDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateDeliverabilityTest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateDeliverabilityTest(response: ResponseContext): Promise<DeliverabilityTestDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeliverabilityTestDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverabilityTestDto", ""
            ) as DeliverabilityTestDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeliverabilityTestDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeliverabilityTestDto", ""
            ) as DeliverabilityTestDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
