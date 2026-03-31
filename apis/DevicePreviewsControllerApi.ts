// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { CancelDevicePreviewRunOptions } from '../models/CancelDevicePreviewRunOptions.ts';
import { CancelDevicePreviewRunResult } from '../models/CancelDevicePreviewRunResult.ts';
import { CreateDevicePreviewFeedbackOptions } from '../models/CreateDevicePreviewFeedbackOptions.ts';
import { CreateDevicePreviewOptions } from '../models/CreateDevicePreviewOptions.ts';
import { CreateDevicePreviewRunResult } from '../models/CreateDevicePreviewRunResult.ts';
import { DeleteDevicePreviewRunResult } from '../models/DeleteDevicePreviewRunResult.ts';
import { DevicePreviewFeedbackDto } from '../models/DevicePreviewFeedbackDto.ts';
import { DevicePreviewFeedbackListDto } from '../models/DevicePreviewFeedbackListDto.ts';
import { DevicePreviewProviderProgressDto } from '../models/DevicePreviewProviderProgressDto.ts';
import { DevicePreviewRunDto } from '../models/DevicePreviewRunDto.ts';
import { DevicePreviewRunResultsDto } from '../models/DevicePreviewRunResultsDto.ts';
import { PageDevicePreviewRunProjection } from '../models/PageDevicePreviewRunProjection.ts';
import { UpdateDevicePreviewFeedbackOptions } from '../models/UpdateDevicePreviewFeedbackOptions.ts';

/**
 * no description
 */
export class DevicePreviewsControllerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Cancel a running device preview run
     * @param runId 
     * @param cancelDevicePreviewRunOptions 
     */
    public async cancelDevicePreviewRun(runId: string, cancelDevicePreviewRunOptions?: CancelDevicePreviewRunOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'runId' is not null or undefined
        if (runId === null || runId === undefined) {
            throw new RequiredError('Required parameter runId was null or undefined when calling cancelDevicePreviewRun.');
        }



        // Path Params
        const localVarPath = '/emails/device-previews/{runId}/cancel'
            .replace('{' + 'runId' + '}', encodeURIComponent(String(runId)));

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
            ObjectSerializer.serialize(cancelDevicePreviewRunOptions, "CancelDevicePreviewRunOptions", ""),
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
     * Create device preview feedback
     * @param createDevicePreviewFeedbackOptions 
     */
    public async createDevicePreviewFeedback(createDevicePreviewFeedbackOptions: CreateDevicePreviewFeedbackOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'createDevicePreviewFeedbackOptions' is not null or undefined
        if (createDevicePreviewFeedbackOptions === null || createDevicePreviewFeedbackOptions === undefined) {
            throw new RequiredError('Required parameter createDevicePreviewFeedbackOptions was null or undefined when calling createDevicePreviewFeedback.');
        }


        // Path Params
        const localVarPath = '/emails/device-previews/feedback';

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
            ObjectSerializer.serialize(createDevicePreviewFeedbackOptions, "CreateDevicePreviewFeedbackOptions", ""),
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
     * Create a new device preview run for an email
     * @param emailId 
     * @param createDevicePreviewOptions 
     */
    public async createDevicePreviewRun(emailId: string, createDevicePreviewOptions?: CreateDevicePreviewOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'emailId' is not null or undefined
        if (emailId === null || emailId === undefined) {
            throw new RequiredError('Required parameter emailId was null or undefined when calling createDevicePreviewRun.');
        }



        // Path Params
        const localVarPath = '/emails/{emailId}/device-previews'
            .replace('{' + 'emailId' + '}', encodeURIComponent(String(emailId)));

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
            ObjectSerializer.serialize(createDevicePreviewOptions, "CreateDevicePreviewOptions", ""),
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
     * Delete local device preview run data
     * @param runId 
     */
    public async deleteDevicePreviewRun(runId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'runId' is not null or undefined
        if (runId === null || runId === undefined) {
            throw new RequiredError('Required parameter runId was null or undefined when calling deleteDevicePreviewRun.');
        }


        // Path Params
        const localVarPath = '/emails/device-previews/{runId}'
            .replace('{' + 'runId' + '}', encodeURIComponent(String(runId)));

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
     * Return active run for email or create one when none exists
     * @param emailId 
     * @param createDevicePreviewOptions 
     */
    public async ensureDevicePreviewRun(emailId: string, createDevicePreviewOptions?: CreateDevicePreviewOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'emailId' is not null or undefined
        if (emailId === null || emailId === undefined) {
            throw new RequiredError('Required parameter emailId was null or undefined when calling ensureDevicePreviewRun.');
        }



        // Path Params
        const localVarPath = '/emails/{emailId}/device-previews/latest'
            .replace('{' + 'emailId' + '}', encodeURIComponent(String(emailId)));

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
            ObjectSerializer.serialize(createDevicePreviewOptions, "CreateDevicePreviewOptions", ""),
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
     * Get a single device preview feedback item
     * @param feedbackId 
     */
    public async getDevicePreviewFeedback(feedbackId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'feedbackId' is not null or undefined
        if (feedbackId === null || feedbackId === undefined) {
            throw new RequiredError('Required parameter feedbackId was null or undefined when calling getDevicePreviewFeedback.');
        }


        // Path Params
        const localVarPath = '/emails/device-previews/feedback/{feedbackId}'
            .replace('{' + 'feedbackId' + '}', encodeURIComponent(String(feedbackId)));

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
     * List device preview feedback
     * @param page 
     * @param size 
     * @param source 
     * @param runId 
     * @param status 
     * @param provider 
     * @param category 
     * @param search 
     */
    public async getDevicePreviewFeedbackItems(page?: number, size?: number, source?: 'API_SERVICE' | 'LAB_USER' | 'END_USER' | 'SYSTEM', runId?: string, status?: 'OPEN' | 'ACKNOWLEDGED' | 'RESOLVED' | 'DISMISSED', provider?: 'GMAIL' | 'OUTLOOK' | 'YAHOO', category?: 'GENERAL' | 'RUN_QUALITY' | 'SCREENSHOT_QUALITY' | 'PROVIDER_ISSUE' | 'BUG_REPORT' | 'FEATURE_REQUEST' | 'NOTE', search?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;









        // Path Params
        const localVarPath = '/emails/device-previews/feedback';

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
        if (source !== undefined) {
            requestContext.setQueryParam("source", ObjectSerializer.serialize(source, "'API_SERVICE' | 'LAB_USER' | 'END_USER' | 'SYSTEM'", ""));
        }
        if (runId !== undefined) {
            requestContext.setQueryParam("runId", ObjectSerializer.serialize(runId, "string", "uuid"));
        }
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "'OPEN' | 'ACKNOWLEDGED' | 'RESOLVED' | 'DISMISSED'", ""));
        }
        if (provider !== undefined) {
            requestContext.setQueryParam("provider", ObjectSerializer.serialize(provider, "'GMAIL' | 'OUTLOOK' | 'YAHOO'", ""));
        }
        if (category !== undefined) {
            requestContext.setQueryParam("category", ObjectSerializer.serialize(category, "'GENERAL' | 'RUN_QUALITY' | 'SCREENSHOT_QUALITY' | 'PROVIDER_ISSUE' | 'BUG_REPORT' | 'FEATURE_REQUEST' | 'NOTE'", ""));
        }
        if (search !== undefined) {
            requestContext.setQueryParam("search", ObjectSerializer.serialize(search, "string", ""));
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
     * Get device preview run status
     * @param runId 
     */
    public async getDevicePreviewRun(runId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'runId' is not null or undefined
        if (runId === null || runId === undefined) {
            throw new RequiredError('Required parameter runId was null or undefined when calling getDevicePreviewRun.');
        }


        // Path Params
        const localVarPath = '/emails/device-previews/{runId}'
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
     * Get provider-level progress for a device preview run
     * @param runId 
     * @param provider 
     */
    public async getDevicePreviewRunProviderProgress(runId: string, provider: 'GMAIL' | 'OUTLOOK' | 'YAHOO', options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'runId' is not null or undefined
        if (runId === null || runId === undefined) {
            throw new RequiredError('Required parameter runId was null or undefined when calling getDevicePreviewRunProviderProgress.');
        }


        // verify required parameter 'provider' is not null or undefined
        if (provider === null || provider === undefined) {
            throw new RequiredError('Required parameter provider was null or undefined when calling getDevicePreviewRunProviderProgress.');
        }


        // Path Params
        const localVarPath = '/emails/device-previews/{runId}/providers/{provider}'
            .replace('{' + 'runId' + '}', encodeURIComponent(String(runId)))
            .replace('{' + 'provider' + '}', encodeURIComponent(String(provider)));

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
     * Get device preview run results
     * @param runId 
     */
    public async getDevicePreviewRunResults(runId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'runId' is not null or undefined
        if (runId === null || runId === undefined) {
            throw new RequiredError('Required parameter runId was null or undefined when calling getDevicePreviewRunResults.');
        }


        // Path Params
        const localVarPath = '/emails/device-previews/{runId}/results'
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
     * Get a seeded device preview screenshot image
     * @param runId 
     * @param screenshotId 
     */
    public async getDevicePreviewRunScreenshot(runId: string, screenshotId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'runId' is not null or undefined
        if (runId === null || runId === undefined) {
            throw new RequiredError('Required parameter runId was null or undefined when calling getDevicePreviewRunScreenshot.');
        }


        // verify required parameter 'screenshotId' is not null or undefined
        if (screenshotId === null || screenshotId === undefined) {
            throw new RequiredError('Required parameter screenshotId was null or undefined when calling getDevicePreviewRunScreenshot.');
        }


        // Path Params
        const localVarPath = '/emails/device-previews/{runId}/screenshots/{screenshotId}/image'
            .replace('{' + 'runId' + '}', encodeURIComponent(String(runId)))
            .replace('{' + 'screenshotId' + '}', encodeURIComponent(String(screenshotId)));

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
     * List previous device preview runs for an email
     * @param emailId 
     * @param limit 
     */
    public async getDevicePreviewRuns(emailId: string, limit?: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'emailId' is not null or undefined
        if (emailId === null || emailId === undefined) {
            throw new RequiredError('Required parameter emailId was null or undefined when calling getDevicePreviewRuns.');
        }



        // Path Params
        const localVarPath = '/emails/{emailId}/device-previews'
            .replace('{' + 'emailId' + '}', encodeURIComponent(String(emailId)));

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
     * List previous device preview runs for account
     * @param limit 
     */
    public async getDevicePreviewRunsForAccount(limit?: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;


        // Path Params
        const localVarPath = '/emails/device-previews';

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
     * List previous device preview runs for an email in paginated form
     * @param emailId 
     * @param page Optional page index in list pagination
     * @param size Optional page size for paginated result list.
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public async getDevicePreviewRunsOffsetPaginated(emailId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'emailId' is not null or undefined
        if (emailId === null || emailId === undefined) {
            throw new RequiredError('Required parameter emailId was null or undefined when calling getDevicePreviewRunsOffsetPaginated.');
        }





        // Path Params
        const localVarPath = '/emails/{emailId}/device-previews/offset-paginated'
            .replace('{' + 'emailId' + '}', encodeURIComponent(String(emailId)));

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
     * Update device preview feedback
     * @param feedbackId 
     * @param updateDevicePreviewFeedbackOptions 
     */
    public async updateDevicePreviewFeedback(feedbackId: string, updateDevicePreviewFeedbackOptions: UpdateDevicePreviewFeedbackOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'feedbackId' is not null or undefined
        if (feedbackId === null || feedbackId === undefined) {
            throw new RequiredError('Required parameter feedbackId was null or undefined when calling updateDevicePreviewFeedback.');
        }


        // verify required parameter 'updateDevicePreviewFeedbackOptions' is not null or undefined
        if (updateDevicePreviewFeedbackOptions === null || updateDevicePreviewFeedbackOptions === undefined) {
            throw new RequiredError('Required parameter updateDevicePreviewFeedbackOptions was null or undefined when calling updateDevicePreviewFeedback.');
        }


        // Path Params
        const localVarPath = '/emails/device-previews/feedback/{feedbackId}'
            .replace('{' + 'feedbackId' + '}', encodeURIComponent(String(feedbackId)));

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
            ObjectSerializer.serialize(updateDevicePreviewFeedbackOptions, "UpdateDevicePreviewFeedbackOptions", ""),
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

export class DevicePreviewsControllerApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cancelDevicePreviewRun
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cancelDevicePreviewRun(response: ResponseContext): Promise<CancelDevicePreviewRunResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CancelDevicePreviewRunResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CancelDevicePreviewRunResult", ""
            ) as CancelDevicePreviewRunResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CancelDevicePreviewRunResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CancelDevicePreviewRunResult", ""
            ) as CancelDevicePreviewRunResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createDevicePreviewFeedback
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createDevicePreviewFeedback(response: ResponseContext): Promise<DevicePreviewFeedbackDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DevicePreviewFeedbackDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewFeedbackDto", ""
            ) as DevicePreviewFeedbackDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DevicePreviewFeedbackDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewFeedbackDto", ""
            ) as DevicePreviewFeedbackDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createDevicePreviewRun
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createDevicePreviewRun(response: ResponseContext): Promise<CreateDevicePreviewRunResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateDevicePreviewRunResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateDevicePreviewRunResult", ""
            ) as CreateDevicePreviewRunResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateDevicePreviewRunResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateDevicePreviewRunResult", ""
            ) as CreateDevicePreviewRunResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteDevicePreviewRun
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteDevicePreviewRun(response: ResponseContext): Promise<DeleteDevicePreviewRunResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeleteDevicePreviewRunResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeleteDevicePreviewRunResult", ""
            ) as DeleteDevicePreviewRunResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeleteDevicePreviewRunResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeleteDevicePreviewRunResult", ""
            ) as DeleteDevicePreviewRunResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to ensureDevicePreviewRun
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async ensureDevicePreviewRun(response: ResponseContext): Promise<CreateDevicePreviewRunResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CreateDevicePreviewRunResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateDevicePreviewRunResult", ""
            ) as CreateDevicePreviewRunResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CreateDevicePreviewRunResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CreateDevicePreviewRunResult", ""
            ) as CreateDevicePreviewRunResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDevicePreviewFeedback
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDevicePreviewFeedback(response: ResponseContext): Promise<DevicePreviewFeedbackDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DevicePreviewFeedbackDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewFeedbackDto", ""
            ) as DevicePreviewFeedbackDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DevicePreviewFeedbackDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewFeedbackDto", ""
            ) as DevicePreviewFeedbackDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDevicePreviewFeedbackItems
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDevicePreviewFeedbackItems(response: ResponseContext): Promise<DevicePreviewFeedbackListDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DevicePreviewFeedbackListDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewFeedbackListDto", ""
            ) as DevicePreviewFeedbackListDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DevicePreviewFeedbackListDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewFeedbackListDto", ""
            ) as DevicePreviewFeedbackListDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDevicePreviewRun
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDevicePreviewRun(response: ResponseContext): Promise<DevicePreviewRunDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DevicePreviewRunDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewRunDto", ""
            ) as DevicePreviewRunDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DevicePreviewRunDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewRunDto", ""
            ) as DevicePreviewRunDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDevicePreviewRunProviderProgress
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDevicePreviewRunProviderProgress(response: ResponseContext): Promise<DevicePreviewProviderProgressDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DevicePreviewProviderProgressDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewProviderProgressDto", ""
            ) as DevicePreviewProviderProgressDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DevicePreviewProviderProgressDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewProviderProgressDto", ""
            ) as DevicePreviewProviderProgressDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDevicePreviewRunResults
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDevicePreviewRunResults(response: ResponseContext): Promise<DevicePreviewRunResultsDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DevicePreviewRunResultsDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewRunResultsDto", ""
            ) as DevicePreviewRunResultsDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DevicePreviewRunResultsDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewRunResultsDto", ""
            ) as DevicePreviewRunResultsDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDevicePreviewRunScreenshot
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDevicePreviewRunScreenshot(response: ResponseContext): Promise<string > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", "byte"
            ) as string;
            return body;
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
     * @params response Response returned by the server for a request to getDevicePreviewRuns
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDevicePreviewRuns(response: ResponseContext): Promise<Array<DevicePreviewRunDto> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<DevicePreviewRunDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<DevicePreviewRunDto>", ""
            ) as Array<DevicePreviewRunDto>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<DevicePreviewRunDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<DevicePreviewRunDto>", ""
            ) as Array<DevicePreviewRunDto>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDevicePreviewRunsForAccount
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDevicePreviewRunsForAccount(response: ResponseContext): Promise<Array<DevicePreviewRunDto> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<DevicePreviewRunDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<DevicePreviewRunDto>", ""
            ) as Array<DevicePreviewRunDto>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<DevicePreviewRunDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<DevicePreviewRunDto>", ""
            ) as Array<DevicePreviewRunDto>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDevicePreviewRunsOffsetPaginated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDevicePreviewRunsOffsetPaginated(response: ResponseContext): Promise<PageDevicePreviewRunProjection > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PageDevicePreviewRunProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageDevicePreviewRunProjection", ""
            ) as PageDevicePreviewRunProjection;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PageDevicePreviewRunProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageDevicePreviewRunProjection", ""
            ) as PageDevicePreviewRunProjection;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateDevicePreviewFeedback
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateDevicePreviewFeedback(response: ResponseContext): Promise<DevicePreviewFeedbackDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DevicePreviewFeedbackDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewFeedbackDto", ""
            ) as DevicePreviewFeedbackDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DevicePreviewFeedbackDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewFeedbackDto", ""
            ) as DevicePreviewFeedbackDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
