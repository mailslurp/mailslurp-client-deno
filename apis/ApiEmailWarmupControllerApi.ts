// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { CreateEmailWarmupProgramOptions } from '../models/CreateEmailWarmupProgramOptions.ts';
import { EmailWarmupOverviewDto } from '../models/EmailWarmupOverviewDto.ts';
import { EmailWarmupPlacementCheckDto } from '../models/EmailWarmupPlacementCheckDto.ts';
import { EmailWarmupProgramAnalyticsDto } from '../models/EmailWarmupProgramAnalyticsDto.ts';
import { EmailWarmupProgramCommandOptions } from '../models/EmailWarmupProgramCommandOptions.ts';
import { EmailWarmupProgramDto } from '../models/EmailWarmupProgramDto.ts';
import { EmailWarmupProgramPageDto } from '../models/EmailWarmupProgramPageDto.ts';
import { EmailWarmupReadinessDto } from '../models/EmailWarmupReadinessDto.ts';
import { EmailWarmupSendSlotPageDto } from '../models/EmailWarmupSendSlotPageDto.ts';
import { EmailWarmupUsageSummaryDto } from '../models/EmailWarmupUsageSummaryDto.ts';
import { UpdateEmailWarmupProgramOptions } from '../models/UpdateEmailWarmupProgramOptions.ts';
import { UpdateEmailWarmupSenderSeatsOptions } from '../models/UpdateEmailWarmupSenderSeatsOptions.ts';

/**
 * no description
 */
export class ApiEmailWarmupControllerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create an email warmup program
     * @param createEmailWarmupProgramOptions 
     */
    public async createEmailWarmupProgram(createEmailWarmupProgramOptions: CreateEmailWarmupProgramOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'createEmailWarmupProgramOptions' is not null or undefined
        if (createEmailWarmupProgramOptions === null || createEmailWarmupProgramOptions === undefined) {
            throw new RequiredError('Required parameter createEmailWarmupProgramOptions was null or undefined when calling createEmailWarmupProgram.');
        }


        // Path Params
        const localVarPath = '/email-warmup/programs';

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
            ObjectSerializer.serialize(createEmailWarmupProgramOptions, "CreateEmailWarmupProgramOptions", ""),
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
     * Delete an email warmup program
     * @param programId 
     * @param emailWarmupProgramCommandOptions 
     */
    public async deleteEmailWarmupProgram(programId: string, emailWarmupProgramCommandOptions: EmailWarmupProgramCommandOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'programId' is not null or undefined
        if (programId === null || programId === undefined) {
            throw new RequiredError('Required parameter programId was null or undefined when calling deleteEmailWarmupProgram.');
        }


        // verify required parameter 'emailWarmupProgramCommandOptions' is not null or undefined
        if (emailWarmupProgramCommandOptions === null || emailWarmupProgramCommandOptions === undefined) {
            throw new RequiredError('Required parameter emailWarmupProgramCommandOptions was null or undefined when calling deleteEmailWarmupProgram.');
        }


        // Path Params
        const localVarPath = '/email-warmup/programs/{programId}'
            .replace('{' + 'programId' + '}', encodeURIComponent(String(programId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
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
            ObjectSerializer.serialize(emailWarmupProgramCommandOptions, "EmailWarmupProgramCommandOptions", ""),
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
     * Cancel purchased email warmup sender seats
     */
    public async deleteEmailWarmupSenderSeats(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/email-warmup/programs/sender-seats';

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
     * Get operational email warmup activity and program progress
     * @param days 
     */
    public async getEmailWarmupOverview(days?: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;


        // Path Params
        const localVarPath = '/email-warmup/programs/overview';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (days !== undefined) {
            requestContext.setQueryParam("days", ObjectSerializer.serialize(days, "number", "int32"));
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
     * List Gmail and Outlook placement checks for an email warmup program
     * @param programId 
     */
    public async getEmailWarmupPlacementChecks(programId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'programId' is not null or undefined
        if (programId === null || programId === undefined) {
            throw new RequiredError('Required parameter programId was null or undefined when calling getEmailWarmupPlacementChecks.');
        }


        // Path Params
        const localVarPath = '/email-warmup/programs/{programId}/placement-checks'
            .replace('{' + 'programId' + '}', encodeURIComponent(String(programId)));

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
     * Get an email warmup program
     * @param programId 
     */
    public async getEmailWarmupProgram(programId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'programId' is not null or undefined
        if (programId === null || programId === undefined) {
            throw new RequiredError('Required parameter programId was null or undefined when calling getEmailWarmupProgram.');
        }


        // Path Params
        const localVarPath = '/email-warmup/programs/{programId}'
            .replace('{' + 'programId' + '}', encodeURIComponent(String(programId)));

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
     * Get email warmup program progress and daily activity
     * @param programId 
     * @param days 
     */
    public async getEmailWarmupProgramAnalytics(programId: string, days?: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'programId' is not null or undefined
        if (programId === null || programId === undefined) {
            throw new RequiredError('Required parameter programId was null or undefined when calling getEmailWarmupProgramAnalytics.');
        }



        // Path Params
        const localVarPath = '/email-warmup/programs/{programId}/analytics'
            .replace('{' + 'programId' + '}', encodeURIComponent(String(programId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (days !== undefined) {
            requestContext.setQueryParam("days", ObjectSerializer.serialize(days, "number", "int32"));
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
     * List email warmup programs
     * @param page 
     * @param size 
     */
    public async getEmailWarmupPrograms(page?: number, size?: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;



        // Path Params
        const localVarPath = '/email-warmup/programs';

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
     * Get warmup readiness, adaptive pacing, and sender-health signals
     * @param programId 
     */
    public async getEmailWarmupReadiness(programId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'programId' is not null or undefined
        if (programId === null || programId === undefined) {
            throw new RequiredError('Required parameter programId was null or undefined when calling getEmailWarmupReadiness.');
        }


        // Path Params
        const localVarPath = '/email-warmup/programs/{programId}/readiness'
            .replace('{' + 'programId' + '}', encodeURIComponent(String(programId)));

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
     * List scheduled email warmup slots
     * @param programId 
     * @param page 
     * @param size 
     */
    public async getEmailWarmupSlots(programId: string, page?: number, size?: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'programId' is not null or undefined
        if (programId === null || programId === undefined) {
            throw new RequiredError('Required parameter programId was null or undefined when calling getEmailWarmupSlots.');
        }




        // Path Params
        const localVarPath = '/email-warmup/programs/{programId}/slots'
            .replace('{' + 'programId' + '}', encodeURIComponent(String(programId)));

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
     * Get email warmup sender capacity, included credits, and billable usage
     */
    public async getEmailWarmupUsage(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/email-warmup/programs/usage';

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
     * Pause an email warmup program
     * @param programId 
     * @param emailWarmupProgramCommandOptions 
     */
    public async pauseEmailWarmupProgram(programId: string, emailWarmupProgramCommandOptions: EmailWarmupProgramCommandOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'programId' is not null or undefined
        if (programId === null || programId === undefined) {
            throw new RequiredError('Required parameter programId was null or undefined when calling pauseEmailWarmupProgram.');
        }


        // verify required parameter 'emailWarmupProgramCommandOptions' is not null or undefined
        if (emailWarmupProgramCommandOptions === null || emailWarmupProgramCommandOptions === undefined) {
            throw new RequiredError('Required parameter emailWarmupProgramCommandOptions was null or undefined when calling pauseEmailWarmupProgram.');
        }


        // Path Params
        const localVarPath = '/email-warmup/programs/{programId}/pause'
            .replace('{' + 'programId' + '}', encodeURIComponent(String(programId)));

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
            ObjectSerializer.serialize(emailWarmupProgramCommandOptions, "EmailWarmupProgramCommandOptions", ""),
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
     * Resume an email warmup program
     * @param programId 
     * @param emailWarmupProgramCommandOptions 
     */
    public async resumeEmailWarmupProgram(programId: string, emailWarmupProgramCommandOptions: EmailWarmupProgramCommandOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'programId' is not null or undefined
        if (programId === null || programId === undefined) {
            throw new RequiredError('Required parameter programId was null or undefined when calling resumeEmailWarmupProgram.');
        }


        // verify required parameter 'emailWarmupProgramCommandOptions' is not null or undefined
        if (emailWarmupProgramCommandOptions === null || emailWarmupProgramCommandOptions === undefined) {
            throw new RequiredError('Required parameter emailWarmupProgramCommandOptions was null or undefined when calling resumeEmailWarmupProgram.');
        }


        // Path Params
        const localVarPath = '/email-warmup/programs/{programId}/resume'
            .replace('{' + 'programId' + '}', encodeURIComponent(String(programId)));

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
            ObjectSerializer.serialize(emailWarmupProgramCommandOptions, "EmailWarmupProgramCommandOptions", ""),
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
     * Retry a system-paused email warmup program
     * @param programId 
     * @param emailWarmupProgramCommandOptions 
     */
    public async retryEmailWarmupProgram(programId: string, emailWarmupProgramCommandOptions: EmailWarmupProgramCommandOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'programId' is not null or undefined
        if (programId === null || programId === undefined) {
            throw new RequiredError('Required parameter programId was null or undefined when calling retryEmailWarmupProgram.');
        }


        // verify required parameter 'emailWarmupProgramCommandOptions' is not null or undefined
        if (emailWarmupProgramCommandOptions === null || emailWarmupProgramCommandOptions === undefined) {
            throw new RequiredError('Required parameter emailWarmupProgramCommandOptions was null or undefined when calling retryEmailWarmupProgram.');
        }


        // Path Params
        const localVarPath = '/email-warmup/programs/{programId}/retry'
            .replace('{' + 'programId' + '}', encodeURIComponent(String(programId)));

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
            ObjectSerializer.serialize(emailWarmupProgramCommandOptions, "EmailWarmupProgramCommandOptions", ""),
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
     * Start an email warmup program
     * @param programId 
     * @param emailWarmupProgramCommandOptions 
     */
    public async startEmailWarmupProgram(programId: string, emailWarmupProgramCommandOptions: EmailWarmupProgramCommandOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'programId' is not null or undefined
        if (programId === null || programId === undefined) {
            throw new RequiredError('Required parameter programId was null or undefined when calling startEmailWarmupProgram.');
        }


        // verify required parameter 'emailWarmupProgramCommandOptions' is not null or undefined
        if (emailWarmupProgramCommandOptions === null || emailWarmupProgramCommandOptions === undefined) {
            throw new RequiredError('Required parameter emailWarmupProgramCommandOptions was null or undefined when calling startEmailWarmupProgram.');
        }


        // Path Params
        const localVarPath = '/email-warmup/programs/{programId}/start'
            .replace('{' + 'programId' + '}', encodeURIComponent(String(programId)));

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
            ObjectSerializer.serialize(emailWarmupProgramCommandOptions, "EmailWarmupProgramCommandOptions", ""),
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
     * Stop an email warmup program
     * @param programId 
     * @param emailWarmupProgramCommandOptions 
     */
    public async stopEmailWarmupProgram(programId: string, emailWarmupProgramCommandOptions: EmailWarmupProgramCommandOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'programId' is not null or undefined
        if (programId === null || programId === undefined) {
            throw new RequiredError('Required parameter programId was null or undefined when calling stopEmailWarmupProgram.');
        }


        // verify required parameter 'emailWarmupProgramCommandOptions' is not null or undefined
        if (emailWarmupProgramCommandOptions === null || emailWarmupProgramCommandOptions === undefined) {
            throw new RequiredError('Required parameter emailWarmupProgramCommandOptions was null or undefined when calling stopEmailWarmupProgram.');
        }


        // Path Params
        const localVarPath = '/email-warmup/programs/{programId}/stop'
            .replace('{' + 'programId' + '}', encodeURIComponent(String(programId)));

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
            ObjectSerializer.serialize(emailWarmupProgramCommandOptions, "EmailWarmupProgramCommandOptions", ""),
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
     * Update a draft email warmup program
     * @param programId 
     * @param updateEmailWarmupProgramOptions 
     */
    public async updateEmailWarmupProgram(programId: string, updateEmailWarmupProgramOptions: UpdateEmailWarmupProgramOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'programId' is not null or undefined
        if (programId === null || programId === undefined) {
            throw new RequiredError('Required parameter programId was null or undefined when calling updateEmailWarmupProgram.');
        }


        // verify required parameter 'updateEmailWarmupProgramOptions' is not null or undefined
        if (updateEmailWarmupProgramOptions === null || updateEmailWarmupProgramOptions === undefined) {
            throw new RequiredError('Required parameter updateEmailWarmupProgramOptions was null or undefined when calling updateEmailWarmupProgram.');
        }


        // Path Params
        const localVarPath = '/email-warmup/programs/{programId}'
            .replace('{' + 'programId' + '}', encodeURIComponent(String(programId)));

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
            ObjectSerializer.serialize(updateEmailWarmupProgramOptions, "UpdateEmailWarmupProgramOptions", ""),
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
     * Update purchased email warmup sender seats
     * @param updateEmailWarmupSenderSeatsOptions 
     */
    public async updateEmailWarmupSenderSeats(updateEmailWarmupSenderSeatsOptions: UpdateEmailWarmupSenderSeatsOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'updateEmailWarmupSenderSeatsOptions' is not null or undefined
        if (updateEmailWarmupSenderSeatsOptions === null || updateEmailWarmupSenderSeatsOptions === undefined) {
            throw new RequiredError('Required parameter updateEmailWarmupSenderSeatsOptions was null or undefined when calling updateEmailWarmupSenderSeats.');
        }


        // Path Params
        const localVarPath = '/email-warmup/programs/sender-seats';

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
            ObjectSerializer.serialize(updateEmailWarmupSenderSeatsOptions, "UpdateEmailWarmupSenderSeatsOptions", ""),
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

export class ApiEmailWarmupControllerApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createEmailWarmupProgram
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createEmailWarmupProgram(response: ResponseContext): Promise<EmailWarmupProgramDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EmailWarmupProgramDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailWarmupProgramDto", ""
            ) as EmailWarmupProgramDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EmailWarmupProgramDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailWarmupProgramDto", ""
            ) as EmailWarmupProgramDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteEmailWarmupProgram
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteEmailWarmupProgram(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to deleteEmailWarmupSenderSeats
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteEmailWarmupSenderSeats(response: ResponseContext): Promise<EmailWarmupUsageSummaryDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EmailWarmupUsageSummaryDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailWarmupUsageSummaryDto", ""
            ) as EmailWarmupUsageSummaryDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EmailWarmupUsageSummaryDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailWarmupUsageSummaryDto", ""
            ) as EmailWarmupUsageSummaryDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEmailWarmupOverview
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getEmailWarmupOverview(response: ResponseContext): Promise<EmailWarmupOverviewDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EmailWarmupOverviewDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailWarmupOverviewDto", ""
            ) as EmailWarmupOverviewDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EmailWarmupOverviewDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailWarmupOverviewDto", ""
            ) as EmailWarmupOverviewDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEmailWarmupPlacementChecks
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getEmailWarmupPlacementChecks(response: ResponseContext): Promise<Array<EmailWarmupPlacementCheckDto> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<EmailWarmupPlacementCheckDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<EmailWarmupPlacementCheckDto>", ""
            ) as Array<EmailWarmupPlacementCheckDto>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<EmailWarmupPlacementCheckDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<EmailWarmupPlacementCheckDto>", ""
            ) as Array<EmailWarmupPlacementCheckDto>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEmailWarmupProgram
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getEmailWarmupProgram(response: ResponseContext): Promise<EmailWarmupProgramDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EmailWarmupProgramDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailWarmupProgramDto", ""
            ) as EmailWarmupProgramDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EmailWarmupProgramDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailWarmupProgramDto", ""
            ) as EmailWarmupProgramDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEmailWarmupProgramAnalytics
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getEmailWarmupProgramAnalytics(response: ResponseContext): Promise<EmailWarmupProgramAnalyticsDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EmailWarmupProgramAnalyticsDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailWarmupProgramAnalyticsDto", ""
            ) as EmailWarmupProgramAnalyticsDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EmailWarmupProgramAnalyticsDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailWarmupProgramAnalyticsDto", ""
            ) as EmailWarmupProgramAnalyticsDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEmailWarmupPrograms
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getEmailWarmupPrograms(response: ResponseContext): Promise<EmailWarmupProgramPageDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EmailWarmupProgramPageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailWarmupProgramPageDto", ""
            ) as EmailWarmupProgramPageDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EmailWarmupProgramPageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailWarmupProgramPageDto", ""
            ) as EmailWarmupProgramPageDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEmailWarmupReadiness
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getEmailWarmupReadiness(response: ResponseContext): Promise<EmailWarmupReadinessDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EmailWarmupReadinessDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailWarmupReadinessDto", ""
            ) as EmailWarmupReadinessDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EmailWarmupReadinessDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailWarmupReadinessDto", ""
            ) as EmailWarmupReadinessDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEmailWarmupSlots
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getEmailWarmupSlots(response: ResponseContext): Promise<EmailWarmupSendSlotPageDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EmailWarmupSendSlotPageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailWarmupSendSlotPageDto", ""
            ) as EmailWarmupSendSlotPageDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EmailWarmupSendSlotPageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailWarmupSendSlotPageDto", ""
            ) as EmailWarmupSendSlotPageDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEmailWarmupUsage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getEmailWarmupUsage(response: ResponseContext): Promise<EmailWarmupUsageSummaryDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EmailWarmupUsageSummaryDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailWarmupUsageSummaryDto", ""
            ) as EmailWarmupUsageSummaryDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EmailWarmupUsageSummaryDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailWarmupUsageSummaryDto", ""
            ) as EmailWarmupUsageSummaryDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to pauseEmailWarmupProgram
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async pauseEmailWarmupProgram(response: ResponseContext): Promise<EmailWarmupProgramDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EmailWarmupProgramDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailWarmupProgramDto", ""
            ) as EmailWarmupProgramDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EmailWarmupProgramDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailWarmupProgramDto", ""
            ) as EmailWarmupProgramDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to resumeEmailWarmupProgram
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async resumeEmailWarmupProgram(response: ResponseContext): Promise<EmailWarmupProgramDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EmailWarmupProgramDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailWarmupProgramDto", ""
            ) as EmailWarmupProgramDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EmailWarmupProgramDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailWarmupProgramDto", ""
            ) as EmailWarmupProgramDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to retryEmailWarmupProgram
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async retryEmailWarmupProgram(response: ResponseContext): Promise<EmailWarmupProgramDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EmailWarmupProgramDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailWarmupProgramDto", ""
            ) as EmailWarmupProgramDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EmailWarmupProgramDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailWarmupProgramDto", ""
            ) as EmailWarmupProgramDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to startEmailWarmupProgram
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async startEmailWarmupProgram(response: ResponseContext): Promise<EmailWarmupProgramDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EmailWarmupProgramDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailWarmupProgramDto", ""
            ) as EmailWarmupProgramDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EmailWarmupProgramDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailWarmupProgramDto", ""
            ) as EmailWarmupProgramDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to stopEmailWarmupProgram
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async stopEmailWarmupProgram(response: ResponseContext): Promise<EmailWarmupProgramDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EmailWarmupProgramDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailWarmupProgramDto", ""
            ) as EmailWarmupProgramDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EmailWarmupProgramDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailWarmupProgramDto", ""
            ) as EmailWarmupProgramDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateEmailWarmupProgram
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateEmailWarmupProgram(response: ResponseContext): Promise<EmailWarmupProgramDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EmailWarmupProgramDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailWarmupProgramDto", ""
            ) as EmailWarmupProgramDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EmailWarmupProgramDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailWarmupProgramDto", ""
            ) as EmailWarmupProgramDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateEmailWarmupSenderSeats
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateEmailWarmupSenderSeats(response: ResponseContext): Promise<EmailWarmupUsageSummaryDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EmailWarmupUsageSummaryDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailWarmupUsageSummaryDto", ""
            ) as EmailWarmupUsageSummaryDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EmailWarmupUsageSummaryDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailWarmupUsageSummaryDto", ""
            ) as EmailWarmupUsageSummaryDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
