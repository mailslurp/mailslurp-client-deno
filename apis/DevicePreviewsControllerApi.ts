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
import { CreateDevicePreviewFolderOptions } from '../models/CreateDevicePreviewFolderOptions.ts';
import { CreateDevicePreviewHtmlImportOptions } from '../models/CreateDevicePreviewHtmlImportOptions.ts';
import { CreateDevicePreviewImportOptions } from '../models/CreateDevicePreviewImportOptions.ts';
import { CreateDevicePreviewIngestAddressOptions } from '../models/CreateDevicePreviewIngestAddressOptions.ts';
import { CreateDevicePreviewOptions } from '../models/CreateDevicePreviewOptions.ts';
import { CreateDevicePreviewProfileOptions } from '../models/CreateDevicePreviewProfileOptions.ts';
import { CreateDevicePreviewRunResult } from '../models/CreateDevicePreviewRunResult.ts';
import { CreateDevicePreviewShareLinkOptions } from '../models/CreateDevicePreviewShareLinkOptions.ts';
import { DeleteDevicePreviewFolderResult } from '../models/DeleteDevicePreviewFolderResult.ts';
import { DeleteDevicePreviewProfileResult } from '../models/DeleteDevicePreviewProfileResult.ts';
import { DeleteDevicePreviewRunResult } from '../models/DeleteDevicePreviewRunResult.ts';
import { DeleteDevicePreviewShareLinkResult } from '../models/DeleteDevicePreviewShareLinkResult.ts';
import { DevicePreviewAccountSettingsDto } from '../models/DevicePreviewAccountSettingsDto.ts';
import { DevicePreviewEmailSubmissionDto } from '../models/DevicePreviewEmailSubmissionDto.ts';
import { DevicePreviewEmailSubmissionWaitResult } from '../models/DevicePreviewEmailSubmissionWaitResult.ts';
import { DevicePreviewFeedbackDto } from '../models/DevicePreviewFeedbackDto.ts';
import { DevicePreviewFeedbackListDto } from '../models/DevicePreviewFeedbackListDto.ts';
import { DevicePreviewFolderDto } from '../models/DevicePreviewFolderDto.ts';
import { DevicePreviewIngestAddressDto } from '../models/DevicePreviewIngestAddressDto.ts';
import { DevicePreviewIngestRunWaitResult } from '../models/DevicePreviewIngestRunWaitResult.ts';
import { DevicePreviewNativeTargetAvailabilityListDto } from '../models/DevicePreviewNativeTargetAvailabilityListDto.ts';
import { DevicePreviewNativeTargetListDto } from '../models/DevicePreviewNativeTargetListDto.ts';
import { DevicePreviewProfileDto } from '../models/DevicePreviewProfileDto.ts';
import { DevicePreviewProviderProgressDto } from '../models/DevicePreviewProviderProgressDto.ts';
import { DevicePreviewRunDto } from '../models/DevicePreviewRunDto.ts';
import { DevicePreviewRunResultsDto } from '../models/DevicePreviewRunResultsDto.ts';
import { DevicePreviewRunWaitResult } from '../models/DevicePreviewRunWaitResult.ts';
import { DevicePreviewShareLinkDto } from '../models/DevicePreviewShareLinkDto.ts';
import { DevicePreviewSharedResultDto } from '../models/DevicePreviewSharedResultDto.ts';
import { DevicePreviewSourceEmailDto } from '../models/DevicePreviewSourceEmailDto.ts';
import { MoveDevicePreviewRunsOptions } from '../models/MoveDevicePreviewRunsOptions.ts';
import { MoveDevicePreviewRunsResult } from '../models/MoveDevicePreviewRunsResult.ts';
import { PageDevicePreviewRunProjection } from '../models/PageDevicePreviewRunProjection.ts';
import { RerunDevicePreviewTargetsOptions } from '../models/RerunDevicePreviewTargetsOptions.ts';
import { RerunDevicePreviewTargetsResult } from '../models/RerunDevicePreviewTargetsResult.ts';
import { UpdateDevicePreviewFeedbackOptions } from '../models/UpdateDevicePreviewFeedbackOptions.ts';
import { UpdateDevicePreviewFolderOptions } from '../models/UpdateDevicePreviewFolderOptions.ts';
import { UpdateDevicePreviewIngestDomainOptions } from '../models/UpdateDevicePreviewIngestDomainOptions.ts';
import { UpdateDevicePreviewProfileOptions } from '../models/UpdateDevicePreviewProfileOptions.ts';

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
     * Create a device preview folder
     * @param createDevicePreviewFolderOptions 
     */
    public async createDevicePreviewFolder(createDevicePreviewFolderOptions: CreateDevicePreviewFolderOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'createDevicePreviewFolderOptions' is not null or undefined
        if (createDevicePreviewFolderOptions === null || createDevicePreviewFolderOptions === undefined) {
            throw new RequiredError('Required parameter createDevicePreviewFolderOptions was null or undefined when calling createDevicePreviewFolder.');
        }


        // Path Params
        const localVarPath = '/emails/device-previews/folders';

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
            ObjectSerializer.serialize(createDevicePreviewFolderOptions, "CreateDevicePreviewFolderOptions", ""),
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
     * Create a temporary email address for device preview import
     * @param createDevicePreviewIngestAddressOptions 
     */
    public async createDevicePreviewImportAddress(createDevicePreviewIngestAddressOptions?: CreateDevicePreviewIngestAddressOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;


        // Path Params
        const localVarPath = '/emails/device-previews/import-addresses';

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
            ObjectSerializer.serialize(createDevicePreviewIngestAddressOptions, "CreateDevicePreviewIngestAddressOptions", ""),
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
     * Create a device preview profile
     * @param createDevicePreviewProfileOptions 
     */
    public async createDevicePreviewProfile(createDevicePreviewProfileOptions: CreateDevicePreviewProfileOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'createDevicePreviewProfileOptions' is not null or undefined
        if (createDevicePreviewProfileOptions === null || createDevicePreviewProfileOptions === undefined) {
            throw new RequiredError('Required parameter createDevicePreviewProfileOptions was null or undefined when calling createDevicePreviewProfile.');
        }


        // Path Params
        const localVarPath = '/emails/device-previews/profiles';

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
            ObjectSerializer.serialize(createDevicePreviewProfileOptions, "CreateDevicePreviewProfileOptions", ""),
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
     * Uploads an HTML or RFC822 EML file, or a ZIP archive containing exactly one HTML or EML file. ZIP uploads are bounded by entry count, expanded size, and compression ratio.
     * Create a device preview run from an HTML, EML, or ZIP file
     * @param file An .html, .htm, or .eml file, or a .zip archive containing exactly one supported file.
     * @param subject 
     * @param from 
     * @param to 
     * @param sourceAlias 
     * @param externalId 
     * @param providers Legacy web-provider keys to render.
     * @param allTargets Render every currently configured target.
     * @param targets Device preview target keys to render.
     * @param emailAudit 
     * @param domainMonitor 
     * @param senderDomain 
     * @param folderId 
     */
    public async createDevicePreviewRunFromFile(file: HttpFile, subject?: string, from?: string, to?: string, sourceAlias?: string, externalId?: string, providers?: Array<string>, allTargets?: boolean, targets?: Array<string>, emailAudit?: boolean, domainMonitor?: boolean, senderDomain?: string, folderId?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'file' is not null or undefined
        if (file === null || file === undefined) {
            throw new RequiredError('Required parameter file was null or undefined when calling createDevicePreviewRunFromFile.');
        }














        // Path Params
        const localVarPath = '/emails/device-previews/import/file';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (subject !== undefined) {
            requestContext.setQueryParam("subject", ObjectSerializer.serialize(subject, "string", ""));
        }
        if (from !== undefined) {
            requestContext.setQueryParam("from", ObjectSerializer.serialize(from, "string", ""));
        }
        if (to !== undefined) {
            requestContext.setQueryParam("to", ObjectSerializer.serialize(to, "string", ""));
        }
        if (sourceAlias !== undefined) {
            requestContext.setQueryParam("sourceAlias", ObjectSerializer.serialize(sourceAlias, "string", ""));
        }
        if (externalId !== undefined) {
            requestContext.setQueryParam("externalId", ObjectSerializer.serialize(externalId, "string", ""));
        }
        if (providers !== undefined) {
            requestContext.setQueryParam("providers", ObjectSerializer.serialize(providers, "Array<string>", ""));
        }
        if (allTargets !== undefined) {
            requestContext.setQueryParam("allTargets", ObjectSerializer.serialize(allTargets, "boolean", ""));
        }
        if (targets !== undefined) {
            requestContext.setQueryParam("targets", ObjectSerializer.serialize(targets, "Array<string>", ""));
        }
        if (emailAudit !== undefined) {
            requestContext.setQueryParam("emailAudit", ObjectSerializer.serialize(emailAudit, "boolean", ""));
        }
        if (domainMonitor !== undefined) {
            requestContext.setQueryParam("domainMonitor", ObjectSerializer.serialize(domainMonitor, "boolean", ""));
        }
        if (senderDomain !== undefined) {
            requestContext.setQueryParam("senderDomain", ObjectSerializer.serialize(senderDomain, "string", ""));
        }
        if (folderId !== undefined) {
            requestContext.setQueryParam("folderId", ObjectSerializer.serialize(folderId, "string", "uuid"));
        }

        // Header Params

        // Form Params
        let localVarFormParams = new FormData();

        if (file !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('file', file, file.name);
        }
        requestContext.setBody(localVarFormParams);

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
     * Create a device preview run from HTML
     * @param createDevicePreviewHtmlImportOptions 
     */
    public async createDevicePreviewRunFromHtmlImport(createDevicePreviewHtmlImportOptions: CreateDevicePreviewHtmlImportOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'createDevicePreviewHtmlImportOptions' is not null or undefined
        if (createDevicePreviewHtmlImportOptions === null || createDevicePreviewHtmlImportOptions === undefined) {
            throw new RequiredError('Required parameter createDevicePreviewHtmlImportOptions was null or undefined when calling createDevicePreviewRunFromHtmlImport.');
        }


        // Path Params
        const localVarPath = '/emails/device-previews/import/html';

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
            ObjectSerializer.serialize(createDevicePreviewHtmlImportOptions, "CreateDevicePreviewHtmlImportOptions", ""),
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
     * Create a device preview run from imported raw MIME
     * @param createDevicePreviewImportOptions 
     */
    public async createDevicePreviewRunFromImport(createDevicePreviewImportOptions: CreateDevicePreviewImportOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'createDevicePreviewImportOptions' is not null or undefined
        if (createDevicePreviewImportOptions === null || createDevicePreviewImportOptions === undefined) {
            throw new RequiredError('Required parameter createDevicePreviewImportOptions was null or undefined when calling createDevicePreviewRunFromImport.');
        }


        // Path Params
        const localVarPath = '/emails/device-previews/import';

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
            ObjectSerializer.serialize(createDevicePreviewImportOptions, "CreateDevicePreviewImportOptions", ""),
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
     * Create a device preview run from multipart EML upload
     * @param file 
     * @param sourceAlias 
     * @param externalId 
     * @param allTargets Render every currently configured target.
     * @param targets Device preview target keys to render.
     * @param folderId 
     */
    public async createDevicePreviewRunFromMultipartImport(file: HttpFile, sourceAlias?: string, externalId?: string, allTargets?: boolean, targets?: Array<string>, folderId?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'file' is not null or undefined
        if (file === null || file === undefined) {
            throw new RequiredError('Required parameter file was null or undefined when calling createDevicePreviewRunFromMultipartImport.');
        }







        // Path Params
        const localVarPath = '/emails/device-previews/import/multipart';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (sourceAlias !== undefined) {
            requestContext.setQueryParam("sourceAlias", ObjectSerializer.serialize(sourceAlias, "string", ""));
        }
        if (externalId !== undefined) {
            requestContext.setQueryParam("externalId", ObjectSerializer.serialize(externalId, "string", ""));
        }
        if (allTargets !== undefined) {
            requestContext.setQueryParam("allTargets", ObjectSerializer.serialize(allTargets, "boolean", ""));
        }
        if (targets !== undefined) {
            requestContext.setQueryParam("targets", ObjectSerializer.serialize(targets, "Array<string>", ""));
        }
        if (folderId !== undefined) {
            requestContext.setQueryParam("folderId", ObjectSerializer.serialize(folderId, "string", "uuid"));
        }

        // Header Params

        // Form Params
        let localVarFormParams = new FormData();

        if (file !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('file', file, file.name);
        }
        requestContext.setBody(localVarFormParams);

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
     * Create a device preview run from raw MIME bytes
     * @param sourceAlias 
     * @param externalId 
     * @param allTargets Render every currently configured target.
     * @param targets Device preview target keys to render.
     * @param folderId 
     */
    public async createDevicePreviewRunFromRawImport(sourceAlias?: string, externalId?: string, allTargets?: boolean, targets?: Array<string>, folderId?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;






        // Path Params
        const localVarPath = '/emails/device-previews/import/raw';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (sourceAlias !== undefined) {
            requestContext.setQueryParam("sourceAlias", ObjectSerializer.serialize(sourceAlias, "string", ""));
        }
        if (externalId !== undefined) {
            requestContext.setQueryParam("externalId", ObjectSerializer.serialize(externalId, "string", ""));
        }
        if (allTargets !== undefined) {
            requestContext.setQueryParam("allTargets", ObjectSerializer.serialize(allTargets, "boolean", ""));
        }
        if (targets !== undefined) {
            requestContext.setQueryParam("targets", ObjectSerializer.serialize(targets, "Array<string>", ""));
        }
        if (folderId !== undefined) {
            requestContext.setQueryParam("folderId", ObjectSerializer.serialize(folderId, "string", "uuid"));
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
     * Create a share link for a device preview run
     * @param runId 
     * @param createDevicePreviewShareLinkOptions 
     */
    public async createDevicePreviewShareLink(runId: string, createDevicePreviewShareLinkOptions?: CreateDevicePreviewShareLinkOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'runId' is not null or undefined
        if (runId === null || runId === undefined) {
            throw new RequiredError('Required parameter runId was null or undefined when calling createDevicePreviewShareLink.');
        }



        // Path Params
        const localVarPath = '/emails/device-previews/{runId}/share-links'
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
            ObjectSerializer.serialize(createDevicePreviewShareLinkOptions, "CreateDevicePreviewShareLinkOptions", ""),
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
     * Delete a folder, preserving renders and child folders
     * @param folderId 
     */
    public async deleteDevicePreviewFolder(folderId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'folderId' is not null or undefined
        if (folderId === null || folderId === undefined) {
            throw new RequiredError('Required parameter folderId was null or undefined when calling deleteDevicePreviewFolder.');
        }


        // Path Params
        const localVarPath = '/emails/device-previews/folders/{folderId}'
            .replace('{' + 'folderId' + '}', encodeURIComponent(String(folderId)));

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
     * Delete a device preview profile
     * @param profileId 
     */
    public async deleteDevicePreviewProfile(profileId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'profileId' is not null or undefined
        if (profileId === null || profileId === undefined) {
            throw new RequiredError('Required parameter profileId was null or undefined when calling deleteDevicePreviewProfile.');
        }


        // Path Params
        const localVarPath = '/emails/device-previews/profiles/{profileId}'
            .replace('{' + 'profileId' + '}', encodeURIComponent(String(profileId)));

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
     * Revoke a device preview share link
     * @param shareLinkId 
     */
    public async deleteDevicePreviewShareLink(shareLinkId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'shareLinkId' is not null or undefined
        if (shareLinkId === null || shareLinkId === undefined) {
            throw new RequiredError('Required parameter shareLinkId was null or undefined when calling deleteDevicePreviewShareLink.');
        }


        // Path Params
        const localVarPath = '/emails/device-previews/share-links/{shareLinkId}'
            .replace('{' + 'shareLinkId' + '}', encodeURIComponent(String(shareLinkId)));

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
     * Download the original RFC822 email for a device preview submission
     * @param submissionId 
     */
    public async downloadDevicePreviewEmailSubmissionSourceEmail(submissionId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'submissionId' is not null or undefined
        if (submissionId === null || submissionId === undefined) {
            throw new RequiredError('Required parameter submissionId was null or undefined when calling downloadDevicePreviewEmailSubmissionSourceEmail.');
        }


        // Path Params
        const localVarPath = '/emails/device-previews/email-submissions/{submissionId}/source-email/raw'
            .replace('{' + 'submissionId' + '}', encodeURIComponent(String(submissionId)));

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
     * Download the original RFC822 email for a device preview run
     * @param runId 
     */
    public async downloadDevicePreviewRunSourceEmail(runId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'runId' is not null or undefined
        if (runId === null || runId === undefined) {
            throw new RequiredError('Required parameter runId was null or undefined when calling downloadDevicePreviewRunSourceEmail.');
        }


        // Path Params
        const localVarPath = '/emails/device-previews/{runId}/source-email/raw'
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
     * Return account device preview email domain setup or create one
     */
    public async getDevicePreviewEmailDomainOrCreate(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/emails/device-previews/email-domain';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
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
     * List device preview runs created from account email domains
     * @param since 
     * @param emailDomainId 
     * @param profileId 
     * @param localPart 
     * @param limit 
     * @param hydrateThumbnail Hydrate each returned run with a nullable primary screenshot thumbnail URL.
     */
    public async getDevicePreviewEmailRuns(since: Date, emailDomainId?: string, profileId?: string, localPart?: string, limit?: number, hydrateThumbnail?: boolean, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'since' is not null or undefined
        if (since === null || since === undefined) {
            throw new RequiredError('Required parameter since was null or undefined when calling getDevicePreviewEmailRuns.');
        }







        // Path Params
        const localVarPath = '/emails/device-previews/email-runs';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (since !== undefined) {
            requestContext.setQueryParam("since", ObjectSerializer.serialize(since, "Date", "date-time"));
        }
        if (emailDomainId !== undefined) {
            requestContext.setQueryParam("emailDomainId", ObjectSerializer.serialize(emailDomainId, "string", "uuid"));
        }
        if (profileId !== undefined) {
            requestContext.setQueryParam("profileId", ObjectSerializer.serialize(profileId, "string", "uuid"));
        }
        if (localPart !== undefined) {
            requestContext.setQueryParam("localPart", ObjectSerializer.serialize(localPart, "string", ""));
        }
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }
        if (hydrateThumbnail !== undefined) {
            requestContext.setQueryParam("hydrateThumbnail", ObjectSerializer.serialize(hydrateThumbnail, "boolean", ""));
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
     * Get the original email content for a device preview submission
     * @param submissionId 
     */
    public async getDevicePreviewEmailSubmissionSourceEmail(submissionId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'submissionId' is not null or undefined
        if (submissionId === null || submissionId === undefined) {
            throw new RequiredError('Required parameter submissionId was null or undefined when calling getDevicePreviewEmailSubmissionSourceEmail.');
        }


        // Path Params
        const localVarPath = '/emails/device-previews/email-submissions/{submissionId}/source-email'
            .replace('{' + 'submissionId' + '}', encodeURIComponent(String(submissionId)));

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
     * List received device preview email submissions
     * @param since 
     * @param emailDomainId 
     * @param profileId 
     * @param localPart 
     * @param limit 
     * @param recipientEmailAddress 
     */
    public async getDevicePreviewEmailSubmissions(since: Date, emailDomainId?: string, profileId?: string, localPart?: string, limit?: number, recipientEmailAddress?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'since' is not null or undefined
        if (since === null || since === undefined) {
            throw new RequiredError('Required parameter since was null or undefined when calling getDevicePreviewEmailSubmissions.');
        }







        // Path Params
        const localVarPath = '/emails/device-previews/email-submissions';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (since !== undefined) {
            requestContext.setQueryParam("since", ObjectSerializer.serialize(since, "Date", "date-time"));
        }
        if (emailDomainId !== undefined) {
            requestContext.setQueryParam("emailDomainId", ObjectSerializer.serialize(emailDomainId, "string", "uuid"));
        }
        if (profileId !== undefined) {
            requestContext.setQueryParam("profileId", ObjectSerializer.serialize(profileId, "string", "uuid"));
        }
        if (localPart !== undefined) {
            requestContext.setQueryParam("localPart", ObjectSerializer.serialize(localPart, "string", ""));
        }
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }
        if (recipientEmailAddress !== undefined) {
            requestContext.setQueryParam("recipientEmailAddress", ObjectSerializer.serialize(recipientEmailAddress, "string", ""));
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
     * Get a device preview folder
     * @param folderId 
     */
    public async getDevicePreviewFolder(folderId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'folderId' is not null or undefined
        if (folderId === null || folderId === undefined) {
            throw new RequiredError('Required parameter folderId was null or undefined when calling getDevicePreviewFolder.');
        }


        // Path Params
        const localVarPath = '/emails/device-previews/folders/{folderId}'
            .replace('{' + 'folderId' + '}', encodeURIComponent(String(folderId)));

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
     * List device preview folders
     */
    public async getDevicePreviewFolders(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/emails/device-previews/folders';

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
     * Get temporary device preview import address status
     * @param sessionId 
     */
    public async getDevicePreviewImportAddress(sessionId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'sessionId' is not null or undefined
        if (sessionId === null || sessionId === undefined) {
            throw new RequiredError('Required parameter sessionId was null or undefined when calling getDevicePreviewImportAddress.');
        }


        // Path Params
        const localVarPath = '/emails/device-previews/import-addresses/{sessionId}'
            .replace('{' + 'sessionId' + '}', encodeURIComponent(String(sessionId)));

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
     * Returns live native device preview target availability for authenticated API clients, including worker health, queue, timeout, and status fields. Use `/device-preview-targets` when you need the stable catalog without transient availability data.
     * Get native device preview target availability
     */
    public async getDevicePreviewNativeTargetAvailability(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/emails/device-previews/native-targets/availability';

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
     * Get a device preview profile
     * @param profileId 
     */
    public async getDevicePreviewProfile(profileId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'profileId' is not null or undefined
        if (profileId === null || profileId === undefined) {
            throw new RequiredError('Required parameter profileId was null or undefined when calling getDevicePreviewProfile.');
        }


        // Path Params
        const localVarPath = '/emails/device-previews/profiles/{profileId}'
            .replace('{' + 'profileId' + '}', encodeURIComponent(String(profileId)));

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
     * List device preview profiles
     */
    public async getDevicePreviewProfiles(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/emails/device-previews/profiles';

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
     * Get a device preview screenshot image
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
     * Get the original email content for a device preview run
     * @param runId 
     */
    public async getDevicePreviewRunSourceEmail(runId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'runId' is not null or undefined
        if (runId === null || runId === undefined) {
            throw new RequiredError('Required parameter runId was null or undefined when calling getDevicePreviewRunSourceEmail.');
        }


        // Path Params
        const localVarPath = '/emails/device-previews/{runId}/source-email'
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
     * List previous device preview runs for an email
     * @param emailId 
     * @param limit 
     * @param hydrateThumbnail Hydrate each returned run with a nullable primary screenshot thumbnail URL.
     */
    public async getDevicePreviewRuns(emailId: string, limit?: number, hydrateThumbnail?: boolean, options?: Configuration): Promise<RequestContext> {
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
        if (hydrateThumbnail !== undefined) {
            requestContext.setQueryParam("hydrateThumbnail", ObjectSerializer.serialize(hydrateThumbnail, "boolean", ""));
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
     * @param hydrateThumbnail Hydrate each returned run with a nullable primary screenshot thumbnail URL.
     */
    public async getDevicePreviewRunsForAccount(limit?: number, hydrateThumbnail?: boolean, options?: Configuration): Promise<RequestContext> {
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
        if (hydrateThumbnail !== undefined) {
            requestContext.setQueryParam("hydrateThumbnail", ObjectSerializer.serialize(hydrateThumbnail, "boolean", ""));
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
     * List previous device preview runs for account in paginated form
     * @param page Optional page index in list pagination
     * @param size Optional page size for paginated result list.
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param hydrateThumbnail Hydrate each returned run with a nullable primary screenshot thumbnail URL.
     * @param folderId 
     * @param unfiledOnly 
     * @param emailId 
     */
    public async getDevicePreviewRunsForAccountOffsetPaginated(page?: number, size?: number, sort?: 'ASC' | 'DESC', hydrateThumbnail?: boolean, folderId?: string, unfiledOnly?: boolean, emailId?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;








        // Path Params
        const localVarPath = '/emails/device-previews/offset-paginated';

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
        if (hydrateThumbnail !== undefined) {
            requestContext.setQueryParam("hydrateThumbnail", ObjectSerializer.serialize(hydrateThumbnail, "boolean", ""));
        }
        if (folderId !== undefined) {
            requestContext.setQueryParam("folderId", ObjectSerializer.serialize(folderId, "string", "uuid"));
        }
        if (unfiledOnly !== undefined) {
            requestContext.setQueryParam("unfiledOnly", ObjectSerializer.serialize(unfiledOnly, "boolean", ""));
        }
        if (emailId !== undefined) {
            requestContext.setQueryParam("emailId", ObjectSerializer.serialize(emailId, "string", "uuid"));
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
     * @param hydrateThumbnail Hydrate each returned run with a nullable primary screenshot thumbnail URL.
     */
    public async getDevicePreviewRunsOffsetPaginated(emailId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', hydrateThumbnail?: boolean, options?: Configuration): Promise<RequestContext> {
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
        if (hydrateThumbnail !== undefined) {
            requestContext.setQueryParam("hydrateThumbnail", ObjectSerializer.serialize(hydrateThumbnail, "boolean", ""));
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
     * List share links for a device preview run
     * @param runId 
     */
    public async getDevicePreviewShareLinks(runId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'runId' is not null or undefined
        if (runId === null || runId === undefined) {
            throw new RequiredError('Required parameter runId was null or undefined when calling getDevicePreviewShareLinks.');
        }


        // Path Params
        const localVarPath = '/emails/device-previews/{runId}/share-links'
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
     * Get a public shared device preview result
     * @param shareToken 
     */
    public async getDevicePreviewSharedResult(shareToken: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'shareToken' is not null or undefined
        if (shareToken === null || shareToken === undefined) {
            throw new RequiredError('Required parameter shareToken was null or undefined when calling getDevicePreviewSharedResult.');
        }


        // Path Params
        const localVarPath = '/emails/device-previews/share/{shareToken}'
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
     * Get a public shared device preview screenshot image
     * @param shareToken 
     * @param screenshotId 
     */
    public async getDevicePreviewSharedResultScreenshot(shareToken: string, screenshotId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'shareToken' is not null or undefined
        if (shareToken === null || shareToken === undefined) {
            throw new RequiredError('Required parameter shareToken was null or undefined when calling getDevicePreviewSharedResultScreenshot.');
        }


        // verify required parameter 'screenshotId' is not null or undefined
        if (screenshotId === null || screenshotId === undefined) {
            throw new RequiredError('Required parameter screenshotId was null or undefined when calling getDevicePreviewSharedResultScreenshot.');
        }


        // Path Params
        const localVarPath = '/emails/device-previews/share/{shareToken}/screenshots/{screenshotId}/image'
            .replace('{' + 'shareToken' + '}', encodeURIComponent(String(shareToken)))
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
     * Returns visible native device preview target metadata without worker availability, queue, or health fields.
     * List device preview targets
     */
    public async getDevicePreviewTargets(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/device-preview-targets';

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
     * Move device preview runs to a folder or Unfiled
     * @param moveDevicePreviewRunsOptions 
     */
    public async moveDevicePreviewRuns(moveDevicePreviewRunsOptions: MoveDevicePreviewRunsOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'moveDevicePreviewRunsOptions' is not null or undefined
        if (moveDevicePreviewRunsOptions === null || moveDevicePreviewRunsOptions === undefined) {
            throw new RequiredError('Required parameter moveDevicePreviewRunsOptions was null or undefined when calling moveDevicePreviewRuns.');
        }


        // Path Params
        const localVarPath = '/emails/device-previews/folders/runs';

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
            ObjectSerializer.serialize(moveDevicePreviewRunsOptions, "MoveDevicePreviewRunsOptions", ""),
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
     * Set failedOnly=false to rerun a successful target. Successful targets consume their configured credit cost again.
     * Rerun selected device preview targets in the same run
     * @param runId 
     * @param rerunDevicePreviewTargetsOptions 
     */
    public async rerunDevicePreviewTargets(runId: string, rerunDevicePreviewTargetsOptions: RerunDevicePreviewTargetsOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'runId' is not null or undefined
        if (runId === null || runId === undefined) {
            throw new RequiredError('Required parameter runId was null or undefined when calling rerunDevicePreviewTargets.');
        }


        // verify required parameter 'rerunDevicePreviewTargetsOptions' is not null or undefined
        if (rerunDevicePreviewTargetsOptions === null || rerunDevicePreviewTargetsOptions === undefined) {
            throw new RequiredError('Required parameter rerunDevicePreviewTargetsOptions was null or undefined when calling rerunDevicePreviewTargets.');
        }


        // Path Params
        const localVarPath = '/emails/device-previews/{runId}/targets/rerun'
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
            ObjectSerializer.serialize(rerunDevicePreviewTargetsOptions, "RerunDevicePreviewTargetsOptions", ""),
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
     * Update account device preview email subdomain
     * @param updateDevicePreviewIngestDomainOptions 
     */
    public async updateDevicePreviewEmailDomainSubdomain(updateDevicePreviewIngestDomainOptions: UpdateDevicePreviewIngestDomainOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'updateDevicePreviewIngestDomainOptions' is not null or undefined
        if (updateDevicePreviewIngestDomainOptions === null || updateDevicePreviewIngestDomainOptions === undefined) {
            throw new RequiredError('Required parameter updateDevicePreviewIngestDomainOptions was null or undefined when calling updateDevicePreviewEmailDomainSubdomain.');
        }


        // Path Params
        const localVarPath = '/emails/device-previews/email-domain/subdomain';

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
            ObjectSerializer.serialize(updateDevicePreviewIngestDomainOptions, "UpdateDevicePreviewIngestDomainOptions", ""),
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

    /**
     * Rename or move a device preview folder
     * @param folderId 
     * @param updateDevicePreviewFolderOptions 
     */
    public async updateDevicePreviewFolder(folderId: string, updateDevicePreviewFolderOptions: UpdateDevicePreviewFolderOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'folderId' is not null or undefined
        if (folderId === null || folderId === undefined) {
            throw new RequiredError('Required parameter folderId was null or undefined when calling updateDevicePreviewFolder.');
        }


        // verify required parameter 'updateDevicePreviewFolderOptions' is not null or undefined
        if (updateDevicePreviewFolderOptions === null || updateDevicePreviewFolderOptions === undefined) {
            throw new RequiredError('Required parameter updateDevicePreviewFolderOptions was null or undefined when calling updateDevicePreviewFolder.');
        }


        // Path Params
        const localVarPath = '/emails/device-previews/folders/{folderId}'
            .replace('{' + 'folderId' + '}', encodeURIComponent(String(folderId)));

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
            ObjectSerializer.serialize(updateDevicePreviewFolderOptions, "UpdateDevicePreviewFolderOptions", ""),
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
     * Update a device preview profile
     * @param profileId 
     * @param updateDevicePreviewProfileOptions 
     */
    public async updateDevicePreviewProfile(profileId: string, updateDevicePreviewProfileOptions: UpdateDevicePreviewProfileOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'profileId' is not null or undefined
        if (profileId === null || profileId === undefined) {
            throw new RequiredError('Required parameter profileId was null or undefined when calling updateDevicePreviewProfile.');
        }


        // verify required parameter 'updateDevicePreviewProfileOptions' is not null or undefined
        if (updateDevicePreviewProfileOptions === null || updateDevicePreviewProfileOptions === undefined) {
            throw new RequiredError('Required parameter updateDevicePreviewProfileOptions was null or undefined when calling updateDevicePreviewProfile.');
        }


        // Path Params
        const localVarPath = '/emails/device-previews/profiles/{profileId}'
            .replace('{' + 'profileId' + '}', encodeURIComponent(String(profileId)));

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
            ObjectSerializer.serialize(updateDevicePreviewProfileOptions, "UpdateDevicePreviewProfileOptions", ""),
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
     * Wait for device preview runs created from account email domains
     * @param since 
     * @param emailDomainId 
     * @param profileId 
     * @param localPart 
     * @param limit 
     * @param timeoutMillis 
     * @param pollIntervalMillis 
     * @param hydrateThumbnail Hydrate each returned run with a nullable primary screenshot thumbnail URL.
     */
    public async waitForDevicePreviewEmailRuns(since: Date, emailDomainId?: string, profileId?: string, localPart?: string, limit?: number, timeoutMillis?: number, pollIntervalMillis?: number, hydrateThumbnail?: boolean, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'since' is not null or undefined
        if (since === null || since === undefined) {
            throw new RequiredError('Required parameter since was null or undefined when calling waitForDevicePreviewEmailRuns.');
        }









        // Path Params
        const localVarPath = '/emails/device-previews/email-runs/wait';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (since !== undefined) {
            requestContext.setQueryParam("since", ObjectSerializer.serialize(since, "Date", "date-time"));
        }
        if (emailDomainId !== undefined) {
            requestContext.setQueryParam("emailDomainId", ObjectSerializer.serialize(emailDomainId, "string", "uuid"));
        }
        if (profileId !== undefined) {
            requestContext.setQueryParam("profileId", ObjectSerializer.serialize(profileId, "string", "uuid"));
        }
        if (localPart !== undefined) {
            requestContext.setQueryParam("localPart", ObjectSerializer.serialize(localPart, "string", ""));
        }
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }
        if (timeoutMillis !== undefined) {
            requestContext.setQueryParam("timeoutMillis", ObjectSerializer.serialize(timeoutMillis, "number", "int64"));
        }
        if (pollIntervalMillis !== undefined) {
            requestContext.setQueryParam("pollIntervalMillis", ObjectSerializer.serialize(pollIntervalMillis, "number", "int64"));
        }
        if (hydrateThumbnail !== undefined) {
            requestContext.setQueryParam("hydrateThumbnail", ObjectSerializer.serialize(hydrateThumbnail, "boolean", ""));
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
     * Wait for received device preview email submissions
     * @param since 
     * @param emailDomainId 
     * @param profileId 
     * @param localPart 
     * @param limit 
     * @param timeoutMillis 
     * @param pollIntervalMillis 
     * @param recipientEmailAddress 
     */
    public async waitForDevicePreviewEmailSubmissions(since: Date, emailDomainId?: string, profileId?: string, localPart?: string, limit?: number, timeoutMillis?: number, pollIntervalMillis?: number, recipientEmailAddress?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'since' is not null or undefined
        if (since === null || since === undefined) {
            throw new RequiredError('Required parameter since was null or undefined when calling waitForDevicePreviewEmailSubmissions.');
        }









        // Path Params
        const localVarPath = '/emails/device-previews/email-submissions/wait';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (since !== undefined) {
            requestContext.setQueryParam("since", ObjectSerializer.serialize(since, "Date", "date-time"));
        }
        if (emailDomainId !== undefined) {
            requestContext.setQueryParam("emailDomainId", ObjectSerializer.serialize(emailDomainId, "string", "uuid"));
        }
        if (profileId !== undefined) {
            requestContext.setQueryParam("profileId", ObjectSerializer.serialize(profileId, "string", "uuid"));
        }
        if (localPart !== undefined) {
            requestContext.setQueryParam("localPart", ObjectSerializer.serialize(localPart, "string", ""));
        }
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }
        if (timeoutMillis !== undefined) {
            requestContext.setQueryParam("timeoutMillis", ObjectSerializer.serialize(timeoutMillis, "number", "int64"));
        }
        if (pollIntervalMillis !== undefined) {
            requestContext.setQueryParam("pollIntervalMillis", ObjectSerializer.serialize(pollIntervalMillis, "number", "int64"));
        }
        if (recipientEmailAddress !== undefined) {
            requestContext.setQueryParam("recipientEmailAddress", ObjectSerializer.serialize(recipientEmailAddress, "string", ""));
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
     * Wait for device preview run to complete
     * @param runId 
     * @param timeoutMillis 
     * @param pollIntervalMillis 
     */
    public async waitForDevicePreviewRun(runId: string, timeoutMillis?: number, pollIntervalMillis?: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'runId' is not null or undefined
        if (runId === null || runId === undefined) {
            throw new RequiredError('Required parameter runId was null or undefined when calling waitForDevicePreviewRun.');
        }




        // Path Params
        const localVarPath = '/emails/device-previews/{runId}/wait'
            .replace('{' + 'runId' + '}', encodeURIComponent(String(runId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (timeoutMillis !== undefined) {
            requestContext.setQueryParam("timeoutMillis", ObjectSerializer.serialize(timeoutMillis, "number", "int64"));
        }
        if (pollIntervalMillis !== undefined) {
            requestContext.setQueryParam("pollIntervalMillis", ObjectSerializer.serialize(pollIntervalMillis, "number", "int64"));
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
     * @params response Response returned by the server for a request to createDevicePreviewFolder
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createDevicePreviewFolder(response: ResponseContext): Promise<DevicePreviewFolderDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DevicePreviewFolderDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewFolderDto", ""
            ) as DevicePreviewFolderDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DevicePreviewFolderDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewFolderDto", ""
            ) as DevicePreviewFolderDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createDevicePreviewImportAddress
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createDevicePreviewImportAddress(response: ResponseContext): Promise<DevicePreviewIngestAddressDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DevicePreviewIngestAddressDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewIngestAddressDto", ""
            ) as DevicePreviewIngestAddressDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DevicePreviewIngestAddressDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewIngestAddressDto", ""
            ) as DevicePreviewIngestAddressDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createDevicePreviewProfile
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createDevicePreviewProfile(response: ResponseContext): Promise<DevicePreviewProfileDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DevicePreviewProfileDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewProfileDto", ""
            ) as DevicePreviewProfileDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DevicePreviewProfileDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewProfileDto", ""
            ) as DevicePreviewProfileDto;
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
     * @params response Response returned by the server for a request to createDevicePreviewRunFromFile
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createDevicePreviewRunFromFile(response: ResponseContext): Promise<CreateDevicePreviewRunResult > {
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
     * @params response Response returned by the server for a request to createDevicePreviewRunFromHtmlImport
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createDevicePreviewRunFromHtmlImport(response: ResponseContext): Promise<CreateDevicePreviewRunResult > {
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
     * @params response Response returned by the server for a request to createDevicePreviewRunFromImport
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createDevicePreviewRunFromImport(response: ResponseContext): Promise<CreateDevicePreviewRunResult > {
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
     * @params response Response returned by the server for a request to createDevicePreviewRunFromMultipartImport
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createDevicePreviewRunFromMultipartImport(response: ResponseContext): Promise<CreateDevicePreviewRunResult > {
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
     * @params response Response returned by the server for a request to createDevicePreviewRunFromRawImport
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createDevicePreviewRunFromRawImport(response: ResponseContext): Promise<CreateDevicePreviewRunResult > {
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
     * @params response Response returned by the server for a request to createDevicePreviewShareLink
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createDevicePreviewShareLink(response: ResponseContext): Promise<DevicePreviewShareLinkDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DevicePreviewShareLinkDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewShareLinkDto", ""
            ) as DevicePreviewShareLinkDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DevicePreviewShareLinkDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewShareLinkDto", ""
            ) as DevicePreviewShareLinkDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteDevicePreviewFolder
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteDevicePreviewFolder(response: ResponseContext): Promise<DeleteDevicePreviewFolderResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeleteDevicePreviewFolderResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeleteDevicePreviewFolderResult", ""
            ) as DeleteDevicePreviewFolderResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeleteDevicePreviewFolderResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeleteDevicePreviewFolderResult", ""
            ) as DeleteDevicePreviewFolderResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteDevicePreviewProfile
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteDevicePreviewProfile(response: ResponseContext): Promise<DeleteDevicePreviewProfileResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeleteDevicePreviewProfileResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeleteDevicePreviewProfileResult", ""
            ) as DeleteDevicePreviewProfileResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeleteDevicePreviewProfileResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeleteDevicePreviewProfileResult", ""
            ) as DeleteDevicePreviewProfileResult;
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
     * @params response Response returned by the server for a request to deleteDevicePreviewShareLink
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteDevicePreviewShareLink(response: ResponseContext): Promise<DeleteDevicePreviewShareLinkResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeleteDevicePreviewShareLinkResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeleteDevicePreviewShareLinkResult", ""
            ) as DeleteDevicePreviewShareLinkResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeleteDevicePreviewShareLinkResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeleteDevicePreviewShareLinkResult", ""
            ) as DeleteDevicePreviewShareLinkResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to downloadDevicePreviewEmailSubmissionSourceEmail
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async downloadDevicePreviewEmailSubmissionSourceEmail(response: ResponseContext): Promise<HttpFile > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: HttpFile = await response.getBodyAsFile() as any as HttpFile;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HttpFile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpFile", "binary"
            ) as HttpFile;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to downloadDevicePreviewRunSourceEmail
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async downloadDevicePreviewRunSourceEmail(response: ResponseContext): Promise<HttpFile > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: HttpFile = await response.getBodyAsFile() as any as HttpFile;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HttpFile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpFile", "binary"
            ) as HttpFile;
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
     * @params response Response returned by the server for a request to getDevicePreviewEmailDomainOrCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDevicePreviewEmailDomainOrCreate(response: ResponseContext): Promise<DevicePreviewAccountSettingsDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DevicePreviewAccountSettingsDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewAccountSettingsDto", ""
            ) as DevicePreviewAccountSettingsDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DevicePreviewAccountSettingsDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewAccountSettingsDto", ""
            ) as DevicePreviewAccountSettingsDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDevicePreviewEmailRuns
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDevicePreviewEmailRuns(response: ResponseContext): Promise<Array<DevicePreviewRunDto> > {
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
     * @params response Response returned by the server for a request to getDevicePreviewEmailSubmissionSourceEmail
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDevicePreviewEmailSubmissionSourceEmail(response: ResponseContext): Promise<DevicePreviewSourceEmailDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DevicePreviewSourceEmailDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewSourceEmailDto", ""
            ) as DevicePreviewSourceEmailDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DevicePreviewSourceEmailDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewSourceEmailDto", ""
            ) as DevicePreviewSourceEmailDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDevicePreviewEmailSubmissions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDevicePreviewEmailSubmissions(response: ResponseContext): Promise<Array<DevicePreviewEmailSubmissionDto> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<DevicePreviewEmailSubmissionDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<DevicePreviewEmailSubmissionDto>", ""
            ) as Array<DevicePreviewEmailSubmissionDto>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<DevicePreviewEmailSubmissionDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<DevicePreviewEmailSubmissionDto>", ""
            ) as Array<DevicePreviewEmailSubmissionDto>;
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
     * @params response Response returned by the server for a request to getDevicePreviewFolder
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDevicePreviewFolder(response: ResponseContext): Promise<DevicePreviewFolderDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DevicePreviewFolderDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewFolderDto", ""
            ) as DevicePreviewFolderDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DevicePreviewFolderDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewFolderDto", ""
            ) as DevicePreviewFolderDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDevicePreviewFolders
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDevicePreviewFolders(response: ResponseContext): Promise<Array<DevicePreviewFolderDto> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<DevicePreviewFolderDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<DevicePreviewFolderDto>", ""
            ) as Array<DevicePreviewFolderDto>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<DevicePreviewFolderDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<DevicePreviewFolderDto>", ""
            ) as Array<DevicePreviewFolderDto>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDevicePreviewImportAddress
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDevicePreviewImportAddress(response: ResponseContext): Promise<DevicePreviewIngestAddressDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DevicePreviewIngestAddressDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewIngestAddressDto", ""
            ) as DevicePreviewIngestAddressDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DevicePreviewIngestAddressDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewIngestAddressDto", ""
            ) as DevicePreviewIngestAddressDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDevicePreviewNativeTargetAvailability
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDevicePreviewNativeTargetAvailability(response: ResponseContext): Promise<DevicePreviewNativeTargetAvailabilityListDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DevicePreviewNativeTargetAvailabilityListDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewNativeTargetAvailabilityListDto", ""
            ) as DevicePreviewNativeTargetAvailabilityListDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DevicePreviewNativeTargetAvailabilityListDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewNativeTargetAvailabilityListDto", ""
            ) as DevicePreviewNativeTargetAvailabilityListDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDevicePreviewProfile
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDevicePreviewProfile(response: ResponseContext): Promise<DevicePreviewProfileDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DevicePreviewProfileDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewProfileDto", ""
            ) as DevicePreviewProfileDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DevicePreviewProfileDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewProfileDto", ""
            ) as DevicePreviewProfileDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDevicePreviewProfiles
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDevicePreviewProfiles(response: ResponseContext): Promise<Array<DevicePreviewProfileDto> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<DevicePreviewProfileDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<DevicePreviewProfileDto>", ""
            ) as Array<DevicePreviewProfileDto>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<DevicePreviewProfileDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<DevicePreviewProfileDto>", ""
            ) as Array<DevicePreviewProfileDto>;
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
     * @params response Response returned by the server for a request to getDevicePreviewRunSourceEmail
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDevicePreviewRunSourceEmail(response: ResponseContext): Promise<DevicePreviewSourceEmailDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DevicePreviewSourceEmailDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewSourceEmailDto", ""
            ) as DevicePreviewSourceEmailDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DevicePreviewSourceEmailDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewSourceEmailDto", ""
            ) as DevicePreviewSourceEmailDto;
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
     * @params response Response returned by the server for a request to getDevicePreviewRunsForAccountOffsetPaginated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDevicePreviewRunsForAccountOffsetPaginated(response: ResponseContext): Promise<PageDevicePreviewRunProjection > {
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
     * @params response Response returned by the server for a request to getDevicePreviewShareLinks
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDevicePreviewShareLinks(response: ResponseContext): Promise<Array<DevicePreviewShareLinkDto> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<DevicePreviewShareLinkDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<DevicePreviewShareLinkDto>", ""
            ) as Array<DevicePreviewShareLinkDto>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<DevicePreviewShareLinkDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<DevicePreviewShareLinkDto>", ""
            ) as Array<DevicePreviewShareLinkDto>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDevicePreviewSharedResult
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDevicePreviewSharedResult(response: ResponseContext): Promise<DevicePreviewSharedResultDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DevicePreviewSharedResultDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewSharedResultDto", ""
            ) as DevicePreviewSharedResultDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DevicePreviewSharedResultDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewSharedResultDto", ""
            ) as DevicePreviewSharedResultDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDevicePreviewSharedResultScreenshot
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDevicePreviewSharedResultScreenshot(response: ResponseContext): Promise<string > {
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
     * @params response Response returned by the server for a request to getDevicePreviewTargets
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDevicePreviewTargets(response: ResponseContext): Promise<DevicePreviewNativeTargetListDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DevicePreviewNativeTargetListDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewNativeTargetListDto", ""
            ) as DevicePreviewNativeTargetListDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DevicePreviewNativeTargetListDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewNativeTargetListDto", ""
            ) as DevicePreviewNativeTargetListDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to moveDevicePreviewRuns
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async moveDevicePreviewRuns(response: ResponseContext): Promise<MoveDevicePreviewRunsResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MoveDevicePreviewRunsResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MoveDevicePreviewRunsResult", ""
            ) as MoveDevicePreviewRunsResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MoveDevicePreviewRunsResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MoveDevicePreviewRunsResult", ""
            ) as MoveDevicePreviewRunsResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to rerunDevicePreviewTargets
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async rerunDevicePreviewTargets(response: ResponseContext): Promise<RerunDevicePreviewTargetsResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RerunDevicePreviewTargetsResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RerunDevicePreviewTargetsResult", ""
            ) as RerunDevicePreviewTargetsResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RerunDevicePreviewTargetsResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RerunDevicePreviewTargetsResult", ""
            ) as RerunDevicePreviewTargetsResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateDevicePreviewEmailDomainSubdomain
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateDevicePreviewEmailDomainSubdomain(response: ResponseContext): Promise<DevicePreviewAccountSettingsDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DevicePreviewAccountSettingsDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewAccountSettingsDto", ""
            ) as DevicePreviewAccountSettingsDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DevicePreviewAccountSettingsDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewAccountSettingsDto", ""
            ) as DevicePreviewAccountSettingsDto;
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

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateDevicePreviewFolder
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateDevicePreviewFolder(response: ResponseContext): Promise<DevicePreviewFolderDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DevicePreviewFolderDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewFolderDto", ""
            ) as DevicePreviewFolderDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DevicePreviewFolderDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewFolderDto", ""
            ) as DevicePreviewFolderDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateDevicePreviewProfile
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateDevicePreviewProfile(response: ResponseContext): Promise<DevicePreviewProfileDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DevicePreviewProfileDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewProfileDto", ""
            ) as DevicePreviewProfileDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DevicePreviewProfileDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewProfileDto", ""
            ) as DevicePreviewProfileDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to waitForDevicePreviewEmailRuns
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async waitForDevicePreviewEmailRuns(response: ResponseContext): Promise<DevicePreviewIngestRunWaitResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DevicePreviewIngestRunWaitResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewIngestRunWaitResult", ""
            ) as DevicePreviewIngestRunWaitResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DevicePreviewIngestRunWaitResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewIngestRunWaitResult", ""
            ) as DevicePreviewIngestRunWaitResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to waitForDevicePreviewEmailSubmissions
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async waitForDevicePreviewEmailSubmissions(response: ResponseContext): Promise<DevicePreviewEmailSubmissionWaitResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DevicePreviewEmailSubmissionWaitResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewEmailSubmissionWaitResult", ""
            ) as DevicePreviewEmailSubmissionWaitResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DevicePreviewEmailSubmissionWaitResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewEmailSubmissionWaitResult", ""
            ) as DevicePreviewEmailSubmissionWaitResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to waitForDevicePreviewRun
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async waitForDevicePreviewRun(response: ResponseContext): Promise<DevicePreviewRunWaitResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DevicePreviewRunWaitResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewRunWaitResult", ""
            ) as DevicePreviewRunWaitResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DevicePreviewRunWaitResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DevicePreviewRunWaitResult", ""
            ) as DevicePreviewRunWaitResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
