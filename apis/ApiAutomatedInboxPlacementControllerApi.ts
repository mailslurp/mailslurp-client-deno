// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { AutomatedInboxPlacementConnectionDto } from '../models/AutomatedInboxPlacementConnectionDto.ts';
import { AutomatedInboxPlacementEventDto } from '../models/AutomatedInboxPlacementEventDto.ts';
import { AutomatedInboxPlacementExecutionDto } from '../models/AutomatedInboxPlacementExecutionDto.ts';
import { AutomatedInboxPlacementProviderDto } from '../models/AutomatedInboxPlacementProviderDto.ts';
import { AutomatedInboxPlacementScheduleDto } from '../models/AutomatedInboxPlacementScheduleDto.ts';
import { CreateAutomatedInboxPlacementConnectionOptions } from '../models/CreateAutomatedInboxPlacementConnectionOptions.ts';
import { CreateAutomatedInboxPlacementScheduleOptions } from '../models/CreateAutomatedInboxPlacementScheduleOptions.ts';
import { InboxPlacementAnalyticsSeriesDto } from '../models/InboxPlacementAnalyticsSeriesDto.ts';
import { RotateAutomatedInboxPlacementConnectionCredentialsOptions } from '../models/RotateAutomatedInboxPlacementConnectionCredentialsOptions.ts';
import { UpdateAutomatedInboxPlacementConnectionOptions } from '../models/UpdateAutomatedInboxPlacementConnectionOptions.ts';
import { UpdateAutomatedInboxPlacementScheduleOptions } from '../models/UpdateAutomatedInboxPlacementScheduleOptions.ts';

/**
 * no description
 */
export class ApiAutomatedInboxPlacementControllerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create an encrypted sender connection
     * @param createAutomatedInboxPlacementConnectionOptions 
     */
    public async createAutomatedInboxPlacementConnection(createAutomatedInboxPlacementConnectionOptions: CreateAutomatedInboxPlacementConnectionOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'createAutomatedInboxPlacementConnectionOptions' is not null or undefined
        if (createAutomatedInboxPlacementConnectionOptions === null || createAutomatedInboxPlacementConnectionOptions === undefined) {
            throw new RequiredError('Required parameter createAutomatedInboxPlacementConnectionOptions was null or undefined when calling createAutomatedInboxPlacementConnection.');
        }


        // Path Params
        const localVarPath = '/inbox-placement-tests/automations/connections';

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
            ObjectSerializer.serialize(createAutomatedInboxPlacementConnectionOptions, "CreateAutomatedInboxPlacementConnectionOptions", ""),
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
     * Create an automated inbox placement schedule
     * @param createAutomatedInboxPlacementScheduleOptions 
     */
    public async createAutomatedInboxPlacementSchedule(createAutomatedInboxPlacementScheduleOptions: CreateAutomatedInboxPlacementScheduleOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'createAutomatedInboxPlacementScheduleOptions' is not null or undefined
        if (createAutomatedInboxPlacementScheduleOptions === null || createAutomatedInboxPlacementScheduleOptions === undefined) {
            throw new RequiredError('Required parameter createAutomatedInboxPlacementScheduleOptions was null or undefined when calling createAutomatedInboxPlacementSchedule.');
        }


        // Path Params
        const localVarPath = '/inbox-placement-tests/automations/schedules';

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
            ObjectSerializer.serialize(createAutomatedInboxPlacementScheduleOptions, "CreateAutomatedInboxPlacementScheduleOptions", ""),
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
     * Disconnect a sender connection
     * @param connectionId 
     */
    public async deleteAutomatedInboxPlacementConnection(connectionId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'connectionId' is not null or undefined
        if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('Required parameter connectionId was null or undefined when calling deleteAutomatedInboxPlacementConnection.');
        }


        // Path Params
        const localVarPath = '/inbox-placement-tests/automations/connections/{connectionId}'
            .replace('{' + 'connectionId' + '}', encodeURIComponent(String(connectionId)));

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
     * Delete an automated inbox placement schedule
     * @param scheduleId 
     */
    public async deleteAutomatedInboxPlacementSchedule(scheduleId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'scheduleId' is not null or undefined
        if (scheduleId === null || scheduleId === undefined) {
            throw new RequiredError('Required parameter scheduleId was null or undefined when calling deleteAutomatedInboxPlacementSchedule.');
        }


        // Path Params
        const localVarPath = '/inbox-placement-tests/automations/schedules/{scheduleId}'
            .replace('{' + 'scheduleId' + '}', encodeURIComponent(String(scheduleId)));

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
     * Get a sender connection
     * @param connectionId 
     */
    public async getAutomatedInboxPlacementConnection(connectionId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'connectionId' is not null or undefined
        if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('Required parameter connectionId was null or undefined when calling getAutomatedInboxPlacementConnection.');
        }


        // Path Params
        const localVarPath = '/inbox-placement-tests/automations/connections/{connectionId}'
            .replace('{' + 'connectionId' + '}', encodeURIComponent(String(connectionId)));

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
     * List sender connections
     */
    public async getAutomatedInboxPlacementConnections(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/inbox-placement-tests/automations/connections';

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
     * List non-secret execution events
     * @param scheduleId 
     * @param executionId 
     */
    public async getAutomatedInboxPlacementExecutionEvents(scheduleId: string, executionId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'scheduleId' is not null or undefined
        if (scheduleId === null || scheduleId === undefined) {
            throw new RequiredError('Required parameter scheduleId was null or undefined when calling getAutomatedInboxPlacementExecutionEvents.');
        }


        // verify required parameter 'executionId' is not null or undefined
        if (executionId === null || executionId === undefined) {
            throw new RequiredError('Required parameter executionId was null or undefined when calling getAutomatedInboxPlacementExecutionEvents.');
        }


        // Path Params
        const localVarPath = '/inbox-placement-tests/automations/schedules/{scheduleId}/executions/{executionId}/events'
            .replace('{' + 'scheduleId' + '}', encodeURIComponent(String(scheduleId)))
            .replace('{' + 'executionId' + '}', encodeURIComponent(String(executionId)));

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
     * List schedule executions
     * @param scheduleId 
     * @param limit 
     */
    public async getAutomatedInboxPlacementExecutions(scheduleId: string, limit?: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'scheduleId' is not null or undefined
        if (scheduleId === null || scheduleId === undefined) {
            throw new RequiredError('Required parameter scheduleId was null or undefined when calling getAutomatedInboxPlacementExecutions.');
        }



        // Path Params
        const localVarPath = '/inbox-placement-tests/automations/schedules/{scheduleId}/executions'
            .replace('{' + 'scheduleId' + '}', encodeURIComponent(String(scheduleId)));

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
     * List automated inbox placement sender providers
     */
    public async getAutomatedInboxPlacementProviders(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/inbox-placement-tests/automations/providers';

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
     * Get an automated inbox placement schedule
     * @param scheduleId 
     */
    public async getAutomatedInboxPlacementSchedule(scheduleId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'scheduleId' is not null or undefined
        if (scheduleId === null || scheduleId === undefined) {
            throw new RequiredError('Required parameter scheduleId was null or undefined when calling getAutomatedInboxPlacementSchedule.');
        }


        // Path Params
        const localVarPath = '/inbox-placement-tests/automations/schedules/{scheduleId}'
            .replace('{' + 'scheduleId' + '}', encodeURIComponent(String(scheduleId)));

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
     * Returns chart-ready metrics for billed placement runs created by this schedule only.
     * Get automation inbox placement analytics over time
     * @param scheduleId 
     * @param since 
     * @param before 
     * @param bucket 
     * @param runLimit 
     */
    public async getAutomatedInboxPlacementScheduleAnalyticsSeries(scheduleId: string, since?: Date, before?: Date, bucket?: 'HOUR' | 'DAY', runLimit?: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'scheduleId' is not null or undefined
        if (scheduleId === null || scheduleId === undefined) {
            throw new RequiredError('Required parameter scheduleId was null or undefined when calling getAutomatedInboxPlacementScheduleAnalyticsSeries.');
        }






        // Path Params
        const localVarPath = '/inbox-placement-tests/automations/schedules/{scheduleId}/analytics/series'
            .replace('{' + 'scheduleId' + '}', encodeURIComponent(String(scheduleId)));

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
     * List automated inbox placement schedules
     */
    public async getAutomatedInboxPlacementSchedules(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/inbox-placement-tests/automations/schedules';

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
     * Verifies the replacement SMTP settings before atomically replacing the encrypted credential envelope. A failed verification leaves the existing connection unchanged.
     * Rotate sender connection credentials
     * @param connectionId 
     * @param rotateAutomatedInboxPlacementConnectionCredentialsOptions 
     */
    public async rotateAutomatedInboxPlacementConnectionCredentials(connectionId: string, rotateAutomatedInboxPlacementConnectionCredentialsOptions: RotateAutomatedInboxPlacementConnectionCredentialsOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'connectionId' is not null or undefined
        if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('Required parameter connectionId was null or undefined when calling rotateAutomatedInboxPlacementConnectionCredentials.');
        }


        // verify required parameter 'rotateAutomatedInboxPlacementConnectionCredentialsOptions' is not null or undefined
        if (rotateAutomatedInboxPlacementConnectionCredentialsOptions === null || rotateAutomatedInboxPlacementConnectionCredentialsOptions === undefined) {
            throw new RequiredError('Required parameter rotateAutomatedInboxPlacementConnectionCredentialsOptions was null or undefined when calling rotateAutomatedInboxPlacementConnectionCredentials.');
        }


        // Path Params
        const localVarPath = '/inbox-placement-tests/automations/connections/{connectionId}/credentials'
            .replace('{' + 'connectionId' + '}', encodeURIComponent(String(connectionId)));

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
            ObjectSerializer.serialize(rotateAutomatedInboxPlacementConnectionCredentialsOptions, "RotateAutomatedInboxPlacementConnectionCredentialsOptions", ""),
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
     * Run an automated inbox placement schedule now
     * @param scheduleId 
     */
    public async runAutomatedInboxPlacementSchedule(scheduleId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'scheduleId' is not null or undefined
        if (scheduleId === null || scheduleId === undefined) {
            throw new RequiredError('Required parameter scheduleId was null or undefined when calling runAutomatedInboxPlacementSchedule.');
        }


        // Path Params
        const localVarPath = '/inbox-placement-tests/automations/schedules/{scheduleId}/run'
            .replace('{' + 'scheduleId' + '}', encodeURIComponent(String(scheduleId)));

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
     * Updates non-secret connection metadata. Use the credentials endpoint to replace SMTP credentials or transport settings.
     * Update a sender connection
     * @param connectionId 
     * @param updateAutomatedInboxPlacementConnectionOptions 
     */
    public async updateAutomatedInboxPlacementConnection(connectionId: string, updateAutomatedInboxPlacementConnectionOptions: UpdateAutomatedInboxPlacementConnectionOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'connectionId' is not null or undefined
        if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('Required parameter connectionId was null or undefined when calling updateAutomatedInboxPlacementConnection.');
        }


        // verify required parameter 'updateAutomatedInboxPlacementConnectionOptions' is not null or undefined
        if (updateAutomatedInboxPlacementConnectionOptions === null || updateAutomatedInboxPlacementConnectionOptions === undefined) {
            throw new RequiredError('Required parameter updateAutomatedInboxPlacementConnectionOptions was null or undefined when calling updateAutomatedInboxPlacementConnection.');
        }


        // Path Params
        const localVarPath = '/inbox-placement-tests/automations/connections/{connectionId}'
            .replace('{' + 'connectionId' + '}', encodeURIComponent(String(connectionId)));

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
            ObjectSerializer.serialize(updateAutomatedInboxPlacementConnectionOptions, "UpdateAutomatedInboxPlacementConnectionOptions", ""),
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
     * Update an automated inbox placement schedule
     * @param scheduleId 
     * @param updateAutomatedInboxPlacementScheduleOptions 
     */
    public async updateAutomatedInboxPlacementSchedule(scheduleId: string, updateAutomatedInboxPlacementScheduleOptions: UpdateAutomatedInboxPlacementScheduleOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'scheduleId' is not null or undefined
        if (scheduleId === null || scheduleId === undefined) {
            throw new RequiredError('Required parameter scheduleId was null or undefined when calling updateAutomatedInboxPlacementSchedule.');
        }


        // verify required parameter 'updateAutomatedInboxPlacementScheduleOptions' is not null or undefined
        if (updateAutomatedInboxPlacementScheduleOptions === null || updateAutomatedInboxPlacementScheduleOptions === undefined) {
            throw new RequiredError('Required parameter updateAutomatedInboxPlacementScheduleOptions was null or undefined when calling updateAutomatedInboxPlacementSchedule.');
        }


        // Path Params
        const localVarPath = '/inbox-placement-tests/automations/schedules/{scheduleId}'
            .replace('{' + 'scheduleId' + '}', encodeURIComponent(String(scheduleId)));

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
            ObjectSerializer.serialize(updateAutomatedInboxPlacementScheduleOptions, "UpdateAutomatedInboxPlacementScheduleOptions", ""),
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
     * Verify a sender connection
     * @param connectionId 
     */
    public async verifyAutomatedInboxPlacementConnection(connectionId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'connectionId' is not null or undefined
        if (connectionId === null || connectionId === undefined) {
            throw new RequiredError('Required parameter connectionId was null or undefined when calling verifyAutomatedInboxPlacementConnection.');
        }


        // Path Params
        const localVarPath = '/inbox-placement-tests/automations/connections/{connectionId}/verify'
            .replace('{' + 'connectionId' + '}', encodeURIComponent(String(connectionId)));

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

}

export class ApiAutomatedInboxPlacementControllerApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAutomatedInboxPlacementConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createAutomatedInboxPlacementConnection(response: ResponseContext): Promise<AutomatedInboxPlacementConnectionDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AutomatedInboxPlacementConnectionDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AutomatedInboxPlacementConnectionDto", ""
            ) as AutomatedInboxPlacementConnectionDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AutomatedInboxPlacementConnectionDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AutomatedInboxPlacementConnectionDto", ""
            ) as AutomatedInboxPlacementConnectionDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAutomatedInboxPlacementSchedule
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createAutomatedInboxPlacementSchedule(response: ResponseContext): Promise<AutomatedInboxPlacementScheduleDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AutomatedInboxPlacementScheduleDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AutomatedInboxPlacementScheduleDto", ""
            ) as AutomatedInboxPlacementScheduleDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AutomatedInboxPlacementScheduleDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AutomatedInboxPlacementScheduleDto", ""
            ) as AutomatedInboxPlacementScheduleDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAutomatedInboxPlacementConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteAutomatedInboxPlacementConnection(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to deleteAutomatedInboxPlacementSchedule
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteAutomatedInboxPlacementSchedule(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to getAutomatedInboxPlacementConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAutomatedInboxPlacementConnection(response: ResponseContext): Promise<AutomatedInboxPlacementConnectionDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AutomatedInboxPlacementConnectionDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AutomatedInboxPlacementConnectionDto", ""
            ) as AutomatedInboxPlacementConnectionDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AutomatedInboxPlacementConnectionDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AutomatedInboxPlacementConnectionDto", ""
            ) as AutomatedInboxPlacementConnectionDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAutomatedInboxPlacementConnections
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAutomatedInboxPlacementConnections(response: ResponseContext): Promise<Array<AutomatedInboxPlacementConnectionDto> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<AutomatedInboxPlacementConnectionDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<AutomatedInboxPlacementConnectionDto>", ""
            ) as Array<AutomatedInboxPlacementConnectionDto>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<AutomatedInboxPlacementConnectionDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<AutomatedInboxPlacementConnectionDto>", ""
            ) as Array<AutomatedInboxPlacementConnectionDto>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAutomatedInboxPlacementExecutionEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAutomatedInboxPlacementExecutionEvents(response: ResponseContext): Promise<Array<AutomatedInboxPlacementEventDto> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<AutomatedInboxPlacementEventDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<AutomatedInboxPlacementEventDto>", ""
            ) as Array<AutomatedInboxPlacementEventDto>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<AutomatedInboxPlacementEventDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<AutomatedInboxPlacementEventDto>", ""
            ) as Array<AutomatedInboxPlacementEventDto>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAutomatedInboxPlacementExecutions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAutomatedInboxPlacementExecutions(response: ResponseContext): Promise<Array<AutomatedInboxPlacementExecutionDto> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<AutomatedInboxPlacementExecutionDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<AutomatedInboxPlacementExecutionDto>", ""
            ) as Array<AutomatedInboxPlacementExecutionDto>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<AutomatedInboxPlacementExecutionDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<AutomatedInboxPlacementExecutionDto>", ""
            ) as Array<AutomatedInboxPlacementExecutionDto>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAutomatedInboxPlacementProviders
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAutomatedInboxPlacementProviders(response: ResponseContext): Promise<Array<AutomatedInboxPlacementProviderDto> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<AutomatedInboxPlacementProviderDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<AutomatedInboxPlacementProviderDto>", ""
            ) as Array<AutomatedInboxPlacementProviderDto>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<AutomatedInboxPlacementProviderDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<AutomatedInboxPlacementProviderDto>", ""
            ) as Array<AutomatedInboxPlacementProviderDto>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAutomatedInboxPlacementSchedule
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAutomatedInboxPlacementSchedule(response: ResponseContext): Promise<AutomatedInboxPlacementScheduleDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AutomatedInboxPlacementScheduleDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AutomatedInboxPlacementScheduleDto", ""
            ) as AutomatedInboxPlacementScheduleDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AutomatedInboxPlacementScheduleDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AutomatedInboxPlacementScheduleDto", ""
            ) as AutomatedInboxPlacementScheduleDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAutomatedInboxPlacementScheduleAnalyticsSeries
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAutomatedInboxPlacementScheduleAnalyticsSeries(response: ResponseContext): Promise<InboxPlacementAnalyticsSeriesDto > {
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
     * @params response Response returned by the server for a request to getAutomatedInboxPlacementSchedules
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAutomatedInboxPlacementSchedules(response: ResponseContext): Promise<Array<AutomatedInboxPlacementScheduleDto> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<AutomatedInboxPlacementScheduleDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<AutomatedInboxPlacementScheduleDto>", ""
            ) as Array<AutomatedInboxPlacementScheduleDto>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<AutomatedInboxPlacementScheduleDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<AutomatedInboxPlacementScheduleDto>", ""
            ) as Array<AutomatedInboxPlacementScheduleDto>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to rotateAutomatedInboxPlacementConnectionCredentials
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async rotateAutomatedInboxPlacementConnectionCredentials(response: ResponseContext): Promise<AutomatedInboxPlacementConnectionDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AutomatedInboxPlacementConnectionDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AutomatedInboxPlacementConnectionDto", ""
            ) as AutomatedInboxPlacementConnectionDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AutomatedInboxPlacementConnectionDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AutomatedInboxPlacementConnectionDto", ""
            ) as AutomatedInboxPlacementConnectionDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to runAutomatedInboxPlacementSchedule
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async runAutomatedInboxPlacementSchedule(response: ResponseContext): Promise<AutomatedInboxPlacementExecutionDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AutomatedInboxPlacementExecutionDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AutomatedInboxPlacementExecutionDto", ""
            ) as AutomatedInboxPlacementExecutionDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AutomatedInboxPlacementExecutionDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AutomatedInboxPlacementExecutionDto", ""
            ) as AutomatedInboxPlacementExecutionDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAutomatedInboxPlacementConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateAutomatedInboxPlacementConnection(response: ResponseContext): Promise<AutomatedInboxPlacementConnectionDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AutomatedInboxPlacementConnectionDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AutomatedInboxPlacementConnectionDto", ""
            ) as AutomatedInboxPlacementConnectionDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AutomatedInboxPlacementConnectionDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AutomatedInboxPlacementConnectionDto", ""
            ) as AutomatedInboxPlacementConnectionDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAutomatedInboxPlacementSchedule
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateAutomatedInboxPlacementSchedule(response: ResponseContext): Promise<AutomatedInboxPlacementScheduleDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AutomatedInboxPlacementScheduleDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AutomatedInboxPlacementScheduleDto", ""
            ) as AutomatedInboxPlacementScheduleDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AutomatedInboxPlacementScheduleDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AutomatedInboxPlacementScheduleDto", ""
            ) as AutomatedInboxPlacementScheduleDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to verifyAutomatedInboxPlacementConnection
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async verifyAutomatedInboxPlacementConnection(response: ResponseContext): Promise<AutomatedInboxPlacementConnectionDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AutomatedInboxPlacementConnectionDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AutomatedInboxPlacementConnectionDto", ""
            ) as AutomatedInboxPlacementConnectionDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AutomatedInboxPlacementConnectionDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AutomatedInboxPlacementConnectionDto", ""
            ) as AutomatedInboxPlacementConnectionDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
