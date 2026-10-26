// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { AnalyzeDmarcReportOptions } from '../models/AnalyzeDmarcReportOptions.ts';
import { AnalyzeDmarcReportResults } from '../models/AnalyzeDmarcReportResults.ts';
import { AnalyzeEmailHeadersOptions } from '../models/AnalyzeEmailHeadersOptions.ts';
import { AnalyzeEmailHeadersResults } from '../models/AnalyzeEmailHeadersResults.ts';
import { CheckCampaignProbeOptions } from '../models/CheckCampaignProbeOptions.ts';
import { CheckCampaignProbeResults } from '../models/CheckCampaignProbeResults.ts';
import { CheckDnsPropagationOptions } from '../models/CheckDnsPropagationOptions.ts';
import { CheckDnsPropagationResults } from '../models/CheckDnsPropagationResults.ts';
import { CheckDomainMonitorOptions } from '../models/CheckDomainMonitorOptions.ts';
import { CheckDomainMonitorResults } from '../models/CheckDomainMonitorResults.ts';
import { CheckEmailAuditOptions } from '../models/CheckEmailAuditOptions.ts';
import { CheckEmailAuthStackOptions } from '../models/CheckEmailAuthStackOptions.ts';
import { CheckEmailAuthStackResults } from '../models/CheckEmailAuthStackResults.ts';
import { CheckEmailBlacklistOptions } from '../models/CheckEmailBlacklistOptions.ts';
import { CheckEmailBlacklistResults } from '../models/CheckEmailBlacklistResults.ts';
import { CheckEmailFeaturesClientSupportOptions } from '../models/CheckEmailFeaturesClientSupportOptions.ts';
import { CheckEmailFeaturesClientSupportResults } from '../models/CheckEmailFeaturesClientSupportResults.ts';
import { CreatePublicDeviceRenderTestOptions } from '../models/CreatePublicDeviceRenderTestOptions.ts';
import { CreatePublicSpamTestOptions } from '../models/CreatePublicSpamTestOptions.ts';
import { EmailAuditAnalysisResult } from '../models/EmailAuditAnalysisResult.ts';
import { FakeEmailPreview } from '../models/FakeEmailPreview.ts';
import { FakeEmailResult } from '../models/FakeEmailResult.ts';
import { GenerateBimiRecordOptions } from '../models/GenerateBimiRecordOptions.ts';
import { GenerateBimiRecordResults } from '../models/GenerateBimiRecordResults.ts';
import { GenerateDmarcRecordOptions } from '../models/GenerateDmarcRecordOptions.ts';
import { GenerateDmarcRecordResults } from '../models/GenerateDmarcRecordResults.ts';
import { GenerateMtaStsRecordOptions } from '../models/GenerateMtaStsRecordOptions.ts';
import { GenerateMtaStsRecordResults } from '../models/GenerateMtaStsRecordResults.ts';
import { GenerateSpfRecordOptions } from '../models/GenerateSpfRecordOptions.ts';
import { GenerateSpfRecordResults } from '../models/GenerateSpfRecordResults.ts';
import { GenerateTlsReportingRecordOptions } from '../models/GenerateTlsReportingRecordOptions.ts';
import { GenerateTlsReportingRecordResults } from '../models/GenerateTlsReportingRecordResults.ts';
import { LookupBimiDomainOptions } from '../models/LookupBimiDomainOptions.ts';
import { LookupBimiDomainResults } from '../models/LookupBimiDomainResults.ts';
import { LookupDkimDomainOptions } from '../models/LookupDkimDomainOptions.ts';
import { LookupDkimDomainResults } from '../models/LookupDkimDomainResults.ts';
import { LookupDmarcDomainOptions } from '../models/LookupDmarcDomainOptions.ts';
import { LookupDmarcDomainResults } from '../models/LookupDmarcDomainResults.ts';
import { LookupMtaStsDomainOptions } from '../models/LookupMtaStsDomainOptions.ts';
import { LookupMtaStsDomainResults } from '../models/LookupMtaStsDomainResults.ts';
import { LookupMxRecordsOptions } from '../models/LookupMxRecordsOptions.ts';
import { LookupMxRecordsResults } from '../models/LookupMxRecordsResults.ts';
import { LookupPtrOptions } from '../models/LookupPtrOptions.ts';
import { LookupPtrResults } from '../models/LookupPtrResults.ts';
import { LookupSpfDomainOptions } from '../models/LookupSpfDomainOptions.ts';
import { LookupSpfDomainResults } from '../models/LookupSpfDomainResults.ts';
import { LookupTlsReportingDomainOptions } from '../models/LookupTlsReportingDomainOptions.ts';
import { LookupTlsReportingDomainResults } from '../models/LookupTlsReportingDomainResults.ts';
import { NewFakeEmailAddressResult } from '../models/NewFakeEmailAddressResult.ts';
import { PublicDeviceRenderTargetListDto } from '../models/PublicDeviceRenderTargetListDto.ts';
import { PublicDeviceRenderTestDto } from '../models/PublicDeviceRenderTestDto.ts';
import { PublicEmailPreviewContentDto } from '../models/PublicEmailPreviewContentDto.ts';
import { PublicSpamTestResultsDto } from '../models/PublicSpamTestResultsDto.ts';
import { PublicSpamTestRunDto } from '../models/PublicSpamTestRunDto.ts';
import { SubmitPublicDeviceRenderHtmlOptions } from '../models/SubmitPublicDeviceRenderHtmlOptions.ts';
import { SubmitPublicSpamTestOptions } from '../models/SubmitPublicSpamTestOptions.ts';
import { TestSmtpServerOptions } from '../models/TestSmtpServerOptions.ts';
import { TestSmtpServerResults } from '../models/TestSmtpServerResults.ts';

/**
 * no description
 */
export class ToolsControllerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Parse and summarize a DMARC aggregate XML report
     * @param analyzeDmarcReportOptions 
     */
    public async analyzeDmarcReport(analyzeDmarcReportOptions: AnalyzeDmarcReportOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'analyzeDmarcReportOptions' is not null or undefined
        if (analyzeDmarcReportOptions === null || analyzeDmarcReportOptions === undefined) {
            throw new RequiredError('Required parameter analyzeDmarcReportOptions was null or undefined when calling analyzeDmarcReport.');
        }


        // Path Params
        const localVarPath = '/tools/analyze-dmarc-report';

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
            ObjectSerializer.serialize(analyzeDmarcReportOptions, "AnalyzeDmarcReportOptions", ""),
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
     * Analyze email headers for auth results and delivery path
     * @param analyzeEmailHeadersOptions 
     */
    public async analyzeEmailHeaders(analyzeEmailHeadersOptions: AnalyzeEmailHeadersOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'analyzeEmailHeadersOptions' is not null or undefined
        if (analyzeEmailHeadersOptions === null || analyzeEmailHeadersOptions === undefined) {
            throw new RequiredError('Required parameter analyzeEmailHeadersOptions was null or undefined when calling analyzeEmailHeaders.');
        }


        // Path Params
        const localVarPath = '/tools/analyze-email-headers';

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
            ObjectSerializer.serialize(analyzeEmailHeadersOptions, "AnalyzeEmailHeadersOptions", ""),
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
     * Run a one-shot free campaign probe preflight check
     * @param checkCampaignProbeOptions 
     */
    public async checkCampaignProbe(checkCampaignProbeOptions: CheckCampaignProbeOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'checkCampaignProbeOptions' is not null or undefined
        if (checkCampaignProbeOptions === null || checkCampaignProbeOptions === undefined) {
            throw new RequiredError('Required parameter checkCampaignProbeOptions was null or undefined when calling checkCampaignProbe.');
        }


        // Path Params
        const localVarPath = '/tools/check-campaign-probe';

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
            ObjectSerializer.serialize(checkCampaignProbeOptions, "CheckCampaignProbeOptions", ""),
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
     * Check DNS propagation for a host and record type across configured resolvers
     * @param checkDnsPropagationOptions 
     */
    public async checkDnsPropagation(checkDnsPropagationOptions: CheckDnsPropagationOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'checkDnsPropagationOptions' is not null or undefined
        if (checkDnsPropagationOptions === null || checkDnsPropagationOptions === undefined) {
            throw new RequiredError('Required parameter checkDnsPropagationOptions was null or undefined when calling checkDnsPropagation.');
        }


        // Path Params
        const localVarPath = '/tools/check-dns-propagation';

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
            ObjectSerializer.serialize(checkDnsPropagationOptions, "CheckDnsPropagationOptions", ""),
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
     * Run a one-shot free domain monitor posture check
     * @param checkDomainMonitorOptions 
     */
    public async checkDomainMonitor(checkDomainMonitorOptions: CheckDomainMonitorOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'checkDomainMonitorOptions' is not null or undefined
        if (checkDomainMonitorOptions === null || checkDomainMonitorOptions === undefined) {
            throw new RequiredError('Required parameter checkDomainMonitorOptions was null or undefined when calling checkDomainMonitor.');
        }


        // Path Params
        const localVarPath = '/tools/check-domain-monitor';

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
            ObjectSerializer.serialize(checkDomainMonitorOptions, "CheckDomainMonitorOptions", ""),
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
     * Run a one-shot free email audit across links, images, HTML, and client support
     * @param checkEmailAuditOptions 
     */
    public async checkEmailAudit(checkEmailAuditOptions: CheckEmailAuditOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'checkEmailAuditOptions' is not null or undefined
        if (checkEmailAuditOptions === null || checkEmailAuditOptions === undefined) {
            throw new RequiredError('Required parameter checkEmailAuditOptions was null or undefined when calling checkEmailAudit.');
        }


        // Path Params
        const localVarPath = '/tools/check-email-audit';

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
            ObjectSerializer.serialize(checkEmailAuditOptions, "CheckEmailAuditOptions", ""),
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
     * Run a one-shot combined SPF, DKIM, DMARC, BIMI, MX, MTA-STS, and TLS-RPT check
     * @param checkEmailAuthStackOptions 
     */
    public async checkEmailAuthStack(checkEmailAuthStackOptions: CheckEmailAuthStackOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'checkEmailAuthStackOptions' is not null or undefined
        if (checkEmailAuthStackOptions === null || checkEmailAuthStackOptions === undefined) {
            throw new RequiredError('Required parameter checkEmailAuthStackOptions was null or undefined when calling checkEmailAuthStack.');
        }


        // Path Params
        const localVarPath = '/tools/check-email-auth-stack';

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
            ObjectSerializer.serialize(checkEmailAuthStackOptions, "CheckEmailAuthStackOptions", ""),
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
     * Check whether a domain or IP appears on configured DNS blacklists
     * @param checkEmailBlacklistOptions 
     */
    public async checkEmailBlacklist(checkEmailBlacklistOptions: CheckEmailBlacklistOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'checkEmailBlacklistOptions' is not null or undefined
        if (checkEmailBlacklistOptions === null || checkEmailBlacklistOptions === undefined) {
            throw new RequiredError('Required parameter checkEmailBlacklistOptions was null or undefined when calling checkEmailBlacklist.');
        }


        // Path Params
        const localVarPath = '/tools/check-email-blacklists';

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
            ObjectSerializer.serialize(checkEmailBlacklistOptions, "CheckEmailBlacklistOptions", ""),
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
     * Check email client support for email HTML and CSS features
     * @param checkEmailFeaturesClientSupportOptions 
     */
    public async checkEmailFeaturesClientSupport(checkEmailFeaturesClientSupportOptions: CheckEmailFeaturesClientSupportOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'checkEmailFeaturesClientSupportOptions' is not null or undefined
        if (checkEmailFeaturesClientSupportOptions === null || checkEmailFeaturesClientSupportOptions === undefined) {
            throw new RequiredError('Required parameter checkEmailFeaturesClientSupportOptions was null or undefined when calling checkEmailFeaturesClientSupport.');
        }


        // Path Params
        const localVarPath = '/tools/check-email-features-client-support';

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
            ObjectSerializer.serialize(checkEmailFeaturesClientSupportOptions, "CheckEmailFeaturesClientSupportOptions", ""),
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
     * Create a new email address using the fake email domains
     */
    public async createNewFakeEmailAddress(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/tools/fake-email';

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
     * Creates an unauthenticated free email render test and returns a short-lived generated email address.
     * Create a public email render test
     * @param createPublicDeviceRenderTestOptions 
     */
    public async createPublicDeviceRenderTest(createPublicDeviceRenderTestOptions: CreatePublicDeviceRenderTestOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'createPublicDeviceRenderTestOptions' is not null or undefined
        if (createPublicDeviceRenderTestOptions === null || createPublicDeviceRenderTestOptions === undefined) {
            throw new RequiredError('Required parameter createPublicDeviceRenderTestOptions was null or undefined when calling createPublicDeviceRenderTest.');
        }


        // Path Params
        const localVarPath = '/tools/device-render-test';

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
            ObjectSerializer.serialize(createPublicDeviceRenderTestOptions, "CreatePublicDeviceRenderTestOptions", ""),
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
     * Create an unauthenticated inbox placement run for public tools users. Returns seed addresses and a tracking token immediately.
     * Create a public spam test
     * @param createPublicSpamTestOptions 
     */
    public async createPublicSpamTest(createPublicSpamTestOptions: CreatePublicSpamTestOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'createPublicSpamTestOptions' is not null or undefined
        if (createPublicSpamTestOptions === null || createPublicSpamTestOptions === undefined) {
            throw new RequiredError('Required parameter createPublicSpamTestOptions was null or undefined when calling createPublicSpamTest.');
        }


        // Path Params
        const localVarPath = '/tools/spam-test';

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
            ObjectSerializer.serialize(createPublicSpamTestOptions, "CreatePublicSpamTestOptions", ""),
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
     * Delete a fake email address using the fake email domains
     * Delete a fake email address using the fake email domains
     * @param emailAddress 
     */
    public async deleteNewFakeEmailAddress(emailAddress: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'emailAddress' is not null or undefined
        if (emailAddress === null || emailAddress === undefined) {
            throw new RequiredError('Required parameter emailAddress was null or undefined when calling deleteNewFakeEmailAddress.');
        }


        // Path Params
        const localVarPath = '/tools/fake-email';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (emailAddress !== undefined) {
            requestContext.setQueryParam("emailAddress", ObjectSerializer.serialize(emailAddress, "string", ""));
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
     * Create a BIMI record policy
     * @param generateBimiRecordOptions 
     */
    public async generateBimiRecord(generateBimiRecordOptions: GenerateBimiRecordOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'generateBimiRecordOptions' is not null or undefined
        if (generateBimiRecordOptions === null || generateBimiRecordOptions === undefined) {
            throw new RequiredError('Required parameter generateBimiRecordOptions was null or undefined when calling generateBimiRecord.');
        }


        // Path Params
        const localVarPath = '/tools/generate-bimi-record';

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
            ObjectSerializer.serialize(generateBimiRecordOptions, "GenerateBimiRecordOptions", ""),
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
     * Create a DMARC record policy
     * @param generateDmarcRecordOptions 
     */
    public async generateDmarcRecord(generateDmarcRecordOptions: GenerateDmarcRecordOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'generateDmarcRecordOptions' is not null or undefined
        if (generateDmarcRecordOptions === null || generateDmarcRecordOptions === undefined) {
            throw new RequiredError('Required parameter generateDmarcRecordOptions was null or undefined when calling generateDmarcRecord.');
        }


        // Path Params
        const localVarPath = '/tools/generate-dmarc-record';

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
            ObjectSerializer.serialize(generateDmarcRecordOptions, "GenerateDmarcRecordOptions", ""),
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
     * Create a TLS reporting record policy
     * @param generateMtaStsRecordOptions 
     */
    public async generateMtaStsRecord(generateMtaStsRecordOptions: GenerateMtaStsRecordOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'generateMtaStsRecordOptions' is not null or undefined
        if (generateMtaStsRecordOptions === null || generateMtaStsRecordOptions === undefined) {
            throw new RequiredError('Required parameter generateMtaStsRecordOptions was null or undefined when calling generateMtaStsRecord.');
        }


        // Path Params
        const localVarPath = '/tools/generate-mta-sts-record';

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
            ObjectSerializer.serialize(generateMtaStsRecordOptions, "GenerateMtaStsRecordOptions", ""),
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
     * Create an SPF record
     * @param generateSpfRecordOptions 
     */
    public async generateSpfRecord(generateSpfRecordOptions: GenerateSpfRecordOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'generateSpfRecordOptions' is not null or undefined
        if (generateSpfRecordOptions === null || generateSpfRecordOptions === undefined) {
            throw new RequiredError('Required parameter generateSpfRecordOptions was null or undefined when calling generateSpfRecord.');
        }


        // Path Params
        const localVarPath = '/tools/generate-spf-record';

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
            ObjectSerializer.serialize(generateSpfRecordOptions, "GenerateSpfRecordOptions", ""),
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
     * Create a TLS reporting record policy
     * @param generateTlsReportingRecordOptions 
     */
    public async generateTlsReportingRecord(generateTlsReportingRecordOptions: GenerateTlsReportingRecordOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'generateTlsReportingRecordOptions' is not null or undefined
        if (generateTlsReportingRecordOptions === null || generateTlsReportingRecordOptions === undefined) {
            throw new RequiredError('Required parameter generateTlsReportingRecordOptions was null or undefined when calling generateTlsReportingRecord.');
        }


        // Path Params
        const localVarPath = '/tools/generate-tls-reporting-record';

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
            ObjectSerializer.serialize(generateTlsReportingRecordOptions, "GenerateTlsReportingRecordOptions", ""),
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
     * @param emailAddress 
     */
    public async getFakeEmailByEmailAddress(emailAddress: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'emailAddress' is not null or undefined
        if (emailAddress === null || emailAddress === undefined) {
            throw new RequiredError('Required parameter emailAddress was null or undefined when calling getFakeEmailByEmailAddress.');
        }


        // Path Params
        const localVarPath = '/tools/fake-email/byEmailAddress';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (emailAddress !== undefined) {
            requestContext.setQueryParam("emailAddress", ObjectSerializer.serialize(emailAddress, "string", ""));
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
     * Get a fake email by its ID
     * Get a fake email by its ID
     * @param id 
     */
    public async getFakeEmailById(id: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling getFakeEmailById.');
        }


        // Path Params
        const localVarPath = '/tools/fake-email';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("id", ObjectSerializer.serialize(id, "string", "uuid"));
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
     * Retrieve the raw content of a fake email by its ID
     * Get raw fake email content
     * @param id 
     */
    public async getFakeEmailRaw(id: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling getFakeEmailRaw.');
        }


        // Path Params
        const localVarPath = '/tools/fake-email/html';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("id", ObjectSerializer.serialize(id, "string", "uuid"));
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
     * Get fake emails for an address
     * Get fake emails for an address
     * @param emailAddress 
     * @param page 
     */
    public async getFakeEmailsForAddress(emailAddress: string, page?: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'emailAddress' is not null or undefined
        if (emailAddress === null || emailAddress === undefined) {
            throw new RequiredError('Required parameter emailAddress was null or undefined when calling getFakeEmailsForAddress.');
        }



        // Path Params
        const localVarPath = '/tools/fake-emails';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", "int32"));
        }
        if (emailAddress !== undefined) {
            requestContext.setQueryParam("emailAddress", ObjectSerializer.serialize(emailAddress, "string", ""));
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
     * Returns the currently healthy target choices exposed by the free email render tool.
     * List available public email render targets
     */
    public async getPublicDeviceRenderTargets(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/tools/device-render-test/targets';

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
     * Returns status for a free email render test and the public share redirect when the render run is ready.
     * Get a public email render test
     * @param id 
     */
    public async getPublicDeviceRenderTest(id: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling getPublicDeviceRenderTest.');
        }


        // Path Params
        const localVarPath = '/tools/device-render-test/{id}'
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
     * Get light and dark public email preview content
     * @param id 
     */
    public async getPublicEmailPreviewContent(id: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling getPublicEmailPreviewContent.');
        }


        // Path Params
        const localVarPath = '/tools/device-render-test/{id}/content'
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
     * Returns public spam test run status, token, seed addresses, and free-limit state.
     * Get a public spam test run
     * @param id 
     */
    public async getPublicSpamTest(id: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling getPublicSpamTest.');
        }


        // Path Params
        const localVarPath = '/tools/spam-test/{id}'
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
     * Returns public spam test run status and any available inbox placement results.
     * Get public spam test results
     * @param id 
     */
    public async getPublicSpamTestResults(id: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling getPublicSpamTestResults.');
        }


        // Path Params
        const localVarPath = '/tools/spam-test/{id}/results'
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
     * Lookup a BIMI record policy
     * @param lookupBimiDomainOptions 
     */
    public async lookupBimiDomain(lookupBimiDomainOptions: LookupBimiDomainOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'lookupBimiDomainOptions' is not null or undefined
        if (lookupBimiDomainOptions === null || lookupBimiDomainOptions === undefined) {
            throw new RequiredError('Required parameter lookupBimiDomainOptions was null or undefined when calling lookupBimiDomain.');
        }


        // Path Params
        const localVarPath = '/tools/lookup-bimi-domain';

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
            ObjectSerializer.serialize(lookupBimiDomainOptions, "LookupBimiDomainOptions", ""),
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
     * Lookup and validate a DKIM record
     * @param lookupDkimDomainOptions 
     */
    public async lookupDkimDomain(lookupDkimDomainOptions: LookupDkimDomainOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'lookupDkimDomainOptions' is not null or undefined
        if (lookupDkimDomainOptions === null || lookupDkimDomainOptions === undefined) {
            throw new RequiredError('Required parameter lookupDkimDomainOptions was null or undefined when calling lookupDkimDomain.');
        }


        // Path Params
        const localVarPath = '/tools/lookup-dkim-domain';

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
            ObjectSerializer.serialize(lookupDkimDomainOptions, "LookupDkimDomainOptions", ""),
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
     * Lookup a DMARC record policy
     * @param lookupDmarcDomainOptions 
     */
    public async lookupDmarcDomain(lookupDmarcDomainOptions: LookupDmarcDomainOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'lookupDmarcDomainOptions' is not null or undefined
        if (lookupDmarcDomainOptions === null || lookupDmarcDomainOptions === undefined) {
            throw new RequiredError('Required parameter lookupDmarcDomainOptions was null or undefined when calling lookupDmarcDomain.');
        }


        // Path Params
        const localVarPath = '/tools/lookup-dmarc-domain';

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
            ObjectSerializer.serialize(lookupDmarcDomainOptions, "LookupDmarcDomainOptions", ""),
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
     * Lookup a MTA-STS domain policy
     * @param lookupMtaStsDomainOptions 
     */
    public async lookupMtaStsDomain(lookupMtaStsDomainOptions: LookupMtaStsDomainOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'lookupMtaStsDomainOptions' is not null or undefined
        if (lookupMtaStsDomainOptions === null || lookupMtaStsDomainOptions === undefined) {
            throw new RequiredError('Required parameter lookupMtaStsDomainOptions was null or undefined when calling lookupMtaStsDomain.');
        }


        // Path Params
        const localVarPath = '/tools/lookup-mta-sts-domain';

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
            ObjectSerializer.serialize(lookupMtaStsDomainOptions, "LookupMtaStsDomainOptions", ""),
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
     * Lookup a MX records for a domain
     * @param lookupMxRecordsOptions 
     */
    public async lookupMxRecord(lookupMxRecordsOptions: LookupMxRecordsOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'lookupMxRecordsOptions' is not null or undefined
        if (lookupMxRecordsOptions === null || lookupMxRecordsOptions === undefined) {
            throw new RequiredError('Required parameter lookupMxRecordsOptions was null or undefined when calling lookupMxRecord.');
        }


        // Path Params
        const localVarPath = '/tools/lookup-mx-records';

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
            ObjectSerializer.serialize(lookupMxRecordsOptions, "LookupMxRecordsOptions", ""),
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
     * Lookup PTR records for an IP address
     * @param lookupPtrOptions 
     */
    public async lookupPtr(lookupPtrOptions: LookupPtrOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'lookupPtrOptions' is not null or undefined
        if (lookupPtrOptions === null || lookupPtrOptions === undefined) {
            throw new RequiredError('Required parameter lookupPtrOptions was null or undefined when calling lookupPtr.');
        }


        // Path Params
        const localVarPath = '/tools/lookup-ptr';

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
            ObjectSerializer.serialize(lookupPtrOptions, "LookupPtrOptions", ""),
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
     * Lookup and validate an SPF record
     * @param lookupSpfDomainOptions 
     */
    public async lookupSpfDomain(lookupSpfDomainOptions: LookupSpfDomainOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'lookupSpfDomainOptions' is not null or undefined
        if (lookupSpfDomainOptions === null || lookupSpfDomainOptions === undefined) {
            throw new RequiredError('Required parameter lookupSpfDomainOptions was null or undefined when calling lookupSpfDomain.');
        }


        // Path Params
        const localVarPath = '/tools/lookup-spf-domain';

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
            ObjectSerializer.serialize(lookupSpfDomainOptions, "LookupSpfDomainOptions", ""),
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
     * Lookup a TLS reporting domain policy
     * @param lookupTlsReportingDomainOptions 
     */
    public async lookupTlsReportingDomain(lookupTlsReportingDomainOptions: LookupTlsReportingDomainOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'lookupTlsReportingDomainOptions' is not null or undefined
        if (lookupTlsReportingDomainOptions === null || lookupTlsReportingDomainOptions === undefined) {
            throw new RequiredError('Required parameter lookupTlsReportingDomainOptions was null or undefined when calling lookupTlsReportingDomain.');
        }


        // Path Params
        const localVarPath = '/tools/lookup-tls-reporting-domain';

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
            ObjectSerializer.serialize(lookupTlsReportingDomainOptions, "LookupTlsReportingDomainOptions", ""),
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
     * Submit an EML file to a public email render test
     * @param id 
     */
    public async submitPublicDeviceRenderEml(id: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling submitPublicDeviceRenderEml.');
        }


        // Path Params
        const localVarPath = '/tools/device-render-test/{id}/eml'
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
     * Submit HTML to a public email render test
     * @param id 
     * @param submitPublicDeviceRenderHtmlOptions 
     */
    public async submitPublicDeviceRenderHtml(id: string, submitPublicDeviceRenderHtmlOptions: SubmitPublicDeviceRenderHtmlOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling submitPublicDeviceRenderHtml.');
        }


        // verify required parameter 'submitPublicDeviceRenderHtmlOptions' is not null or undefined
        if (submitPublicDeviceRenderHtmlOptions === null || submitPublicDeviceRenderHtmlOptions === undefined) {
            throw new RequiredError('Required parameter submitPublicDeviceRenderHtmlOptions was null or undefined when calling submitPublicDeviceRenderHtml.');
        }


        // Path Params
        const localVarPath = '/tools/device-render-test/{id}/html'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

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
            ObjectSerializer.serialize(submitPublicDeviceRenderHtmlOptions, "SubmitPublicDeviceRenderHtmlOptions", ""),
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
     * Records that the caller sent an email to the generated address so submission and delivery failures can be distinguished from setup abandonment.
     * Mark a public email render test as submitted
     * @param id 
     */
    public async submitPublicDeviceRenderTest(id: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling submitPublicDeviceRenderTest.');
        }


        // Path Params
        const localVarPath = '/tools/device-render-test/{id}/submit'
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
     * Marks a previously created public spam test as submitted after the caller has sent the test email to the seed addresses.
     * Mark a public spam test as submitted
     * @param id 
     * @param submitPublicSpamTestOptions 
     */
    public async submitPublicSpamTest(id: string, submitPublicSpamTestOptions: SubmitPublicSpamTestOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling submitPublicSpamTest.');
        }


        // verify required parameter 'submitPublicSpamTestOptions' is not null or undefined
        if (submitPublicSpamTestOptions === null || submitPublicSpamTestOptions === undefined) {
            throw new RequiredError('Required parameter submitPublicSpamTestOptions was null or undefined when calling submitPublicSpamTest.');
        }


        // Path Params
        const localVarPath = '/tools/spam-test/{id}/submit'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

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
            ObjectSerializer.serialize(submitPublicSpamTestOptions, "SubmitPublicSpamTestOptions", ""),
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
     * Run a conservative SMTP connectivity, TLS, and AUTH diagnostic
     * @param testSmtpServerOptions 
     */
    public async testSmtpServer(testSmtpServerOptions: TestSmtpServerOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'testSmtpServerOptions' is not null or undefined
        if (testSmtpServerOptions === null || testSmtpServerOptions === undefined) {
            throw new RequiredError('Required parameter testSmtpServerOptions was null or undefined when calling testSmtpServer.');
        }


        // Path Params
        const localVarPath = '/tools/test-smtp-server';

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
            ObjectSerializer.serialize(testSmtpServerOptions, "TestSmtpServerOptions", ""),
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

export class ToolsControllerApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to analyzeDmarcReport
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async analyzeDmarcReport(response: ResponseContext): Promise<AnalyzeDmarcReportResults > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AnalyzeDmarcReportResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnalyzeDmarcReportResults", ""
            ) as AnalyzeDmarcReportResults;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AnalyzeDmarcReportResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnalyzeDmarcReportResults", ""
            ) as AnalyzeDmarcReportResults;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to analyzeEmailHeaders
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async analyzeEmailHeaders(response: ResponseContext): Promise<AnalyzeEmailHeadersResults > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AnalyzeEmailHeadersResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnalyzeEmailHeadersResults", ""
            ) as AnalyzeEmailHeadersResults;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AnalyzeEmailHeadersResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AnalyzeEmailHeadersResults", ""
            ) as AnalyzeEmailHeadersResults;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to checkCampaignProbe
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async checkCampaignProbe(response: ResponseContext): Promise<CheckCampaignProbeResults > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CheckCampaignProbeResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CheckCampaignProbeResults", ""
            ) as CheckCampaignProbeResults;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CheckCampaignProbeResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CheckCampaignProbeResults", ""
            ) as CheckCampaignProbeResults;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to checkDnsPropagation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async checkDnsPropagation(response: ResponseContext): Promise<CheckDnsPropagationResults > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CheckDnsPropagationResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CheckDnsPropagationResults", ""
            ) as CheckDnsPropagationResults;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CheckDnsPropagationResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CheckDnsPropagationResults", ""
            ) as CheckDnsPropagationResults;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to checkDomainMonitor
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async checkDomainMonitor(response: ResponseContext): Promise<CheckDomainMonitorResults > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CheckDomainMonitorResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CheckDomainMonitorResults", ""
            ) as CheckDomainMonitorResults;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CheckDomainMonitorResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CheckDomainMonitorResults", ""
            ) as CheckDomainMonitorResults;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to checkEmailAudit
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async checkEmailAudit(response: ResponseContext): Promise<EmailAuditAnalysisResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EmailAuditAnalysisResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailAuditAnalysisResult", ""
            ) as EmailAuditAnalysisResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EmailAuditAnalysisResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailAuditAnalysisResult", ""
            ) as EmailAuditAnalysisResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to checkEmailAuthStack
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async checkEmailAuthStack(response: ResponseContext): Promise<CheckEmailAuthStackResults > {
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
     * @params response Response returned by the server for a request to checkEmailBlacklist
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async checkEmailBlacklist(response: ResponseContext): Promise<CheckEmailBlacklistResults > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CheckEmailBlacklistResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CheckEmailBlacklistResults", ""
            ) as CheckEmailBlacklistResults;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CheckEmailBlacklistResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CheckEmailBlacklistResults", ""
            ) as CheckEmailBlacklistResults;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to checkEmailFeaturesClientSupport
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async checkEmailFeaturesClientSupport(response: ResponseContext): Promise<CheckEmailFeaturesClientSupportResults > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CheckEmailFeaturesClientSupportResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CheckEmailFeaturesClientSupportResults", ""
            ) as CheckEmailFeaturesClientSupportResults;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CheckEmailFeaturesClientSupportResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CheckEmailFeaturesClientSupportResults", ""
            ) as CheckEmailFeaturesClientSupportResults;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNewFakeEmailAddress
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createNewFakeEmailAddress(response: ResponseContext): Promise<NewFakeEmailAddressResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NewFakeEmailAddressResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NewFakeEmailAddressResult", ""
            ) as NewFakeEmailAddressResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NewFakeEmailAddressResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NewFakeEmailAddressResult", ""
            ) as NewFakeEmailAddressResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPublicDeviceRenderTest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createPublicDeviceRenderTest(response: ResponseContext): Promise<PublicDeviceRenderTestDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PublicDeviceRenderTestDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicDeviceRenderTestDto", ""
            ) as PublicDeviceRenderTestDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PublicDeviceRenderTestDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicDeviceRenderTestDto", ""
            ) as PublicDeviceRenderTestDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPublicSpamTest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createPublicSpamTest(response: ResponseContext): Promise<PublicSpamTestRunDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PublicSpamTestRunDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicSpamTestRunDto", ""
            ) as PublicSpamTestRunDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PublicSpamTestRunDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicSpamTestRunDto", ""
            ) as PublicSpamTestRunDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteNewFakeEmailAddress
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteNewFakeEmailAddress(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to generateBimiRecord
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async generateBimiRecord(response: ResponseContext): Promise<GenerateBimiRecordResults > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GenerateBimiRecordResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenerateBimiRecordResults", ""
            ) as GenerateBimiRecordResults;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GenerateBimiRecordResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenerateBimiRecordResults", ""
            ) as GenerateBimiRecordResults;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to generateDmarcRecord
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async generateDmarcRecord(response: ResponseContext): Promise<GenerateDmarcRecordResults > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GenerateDmarcRecordResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenerateDmarcRecordResults", ""
            ) as GenerateDmarcRecordResults;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GenerateDmarcRecordResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenerateDmarcRecordResults", ""
            ) as GenerateDmarcRecordResults;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to generateMtaStsRecord
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async generateMtaStsRecord(response: ResponseContext): Promise<GenerateMtaStsRecordResults > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GenerateMtaStsRecordResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenerateMtaStsRecordResults", ""
            ) as GenerateMtaStsRecordResults;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GenerateMtaStsRecordResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenerateMtaStsRecordResults", ""
            ) as GenerateMtaStsRecordResults;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to generateSpfRecord
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async generateSpfRecord(response: ResponseContext): Promise<GenerateSpfRecordResults > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GenerateSpfRecordResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenerateSpfRecordResults", ""
            ) as GenerateSpfRecordResults;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GenerateSpfRecordResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenerateSpfRecordResults", ""
            ) as GenerateSpfRecordResults;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to generateTlsReportingRecord
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async generateTlsReportingRecord(response: ResponseContext): Promise<GenerateTlsReportingRecordResults > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GenerateTlsReportingRecordResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenerateTlsReportingRecordResults", ""
            ) as GenerateTlsReportingRecordResults;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GenerateTlsReportingRecordResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenerateTlsReportingRecordResults", ""
            ) as GenerateTlsReportingRecordResults;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFakeEmailByEmailAddress
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFakeEmailByEmailAddress(response: ResponseContext): Promise<FakeEmailResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: FakeEmailResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FakeEmailResult", ""
            ) as FakeEmailResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: FakeEmailResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FakeEmailResult", ""
            ) as FakeEmailResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFakeEmailById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFakeEmailById(response: ResponseContext): Promise<FakeEmailResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: FakeEmailResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FakeEmailResult", ""
            ) as FakeEmailResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: FakeEmailResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "FakeEmailResult", ""
            ) as FakeEmailResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getFakeEmailRaw
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFakeEmailRaw(response: ResponseContext): Promise<string > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
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
     * @params response Response returned by the server for a request to getFakeEmailsForAddress
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getFakeEmailsForAddress(response: ResponseContext): Promise<Array<FakeEmailPreview> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<FakeEmailPreview> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<FakeEmailPreview>", ""
            ) as Array<FakeEmailPreview>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<FakeEmailPreview> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<FakeEmailPreview>", ""
            ) as Array<FakeEmailPreview>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPublicDeviceRenderTargets
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPublicDeviceRenderTargets(response: ResponseContext): Promise<PublicDeviceRenderTargetListDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PublicDeviceRenderTargetListDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicDeviceRenderTargetListDto", ""
            ) as PublicDeviceRenderTargetListDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PublicDeviceRenderTargetListDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicDeviceRenderTargetListDto", ""
            ) as PublicDeviceRenderTargetListDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPublicDeviceRenderTest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPublicDeviceRenderTest(response: ResponseContext): Promise<PublicDeviceRenderTestDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PublicDeviceRenderTestDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicDeviceRenderTestDto", ""
            ) as PublicDeviceRenderTestDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PublicDeviceRenderTestDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicDeviceRenderTestDto", ""
            ) as PublicDeviceRenderTestDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPublicEmailPreviewContent
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPublicEmailPreviewContent(response: ResponseContext): Promise<PublicEmailPreviewContentDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PublicEmailPreviewContentDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicEmailPreviewContentDto", ""
            ) as PublicEmailPreviewContentDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PublicEmailPreviewContentDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicEmailPreviewContentDto", ""
            ) as PublicEmailPreviewContentDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPublicSpamTest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPublicSpamTest(response: ResponseContext): Promise<PublicSpamTestRunDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PublicSpamTestRunDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicSpamTestRunDto", ""
            ) as PublicSpamTestRunDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PublicSpamTestRunDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicSpamTestRunDto", ""
            ) as PublicSpamTestRunDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPublicSpamTestResults
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPublicSpamTestResults(response: ResponseContext): Promise<PublicSpamTestResultsDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PublicSpamTestResultsDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicSpamTestResultsDto", ""
            ) as PublicSpamTestResultsDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PublicSpamTestResultsDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicSpamTestResultsDto", ""
            ) as PublicSpamTestResultsDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to lookupBimiDomain
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async lookupBimiDomain(response: ResponseContext): Promise<LookupBimiDomainResults > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LookupBimiDomainResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupBimiDomainResults", ""
            ) as LookupBimiDomainResults;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LookupBimiDomainResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupBimiDomainResults", ""
            ) as LookupBimiDomainResults;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to lookupDkimDomain
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async lookupDkimDomain(response: ResponseContext): Promise<LookupDkimDomainResults > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LookupDkimDomainResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupDkimDomainResults", ""
            ) as LookupDkimDomainResults;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LookupDkimDomainResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupDkimDomainResults", ""
            ) as LookupDkimDomainResults;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to lookupDmarcDomain
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async lookupDmarcDomain(response: ResponseContext): Promise<LookupDmarcDomainResults > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LookupDmarcDomainResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupDmarcDomainResults", ""
            ) as LookupDmarcDomainResults;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LookupDmarcDomainResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupDmarcDomainResults", ""
            ) as LookupDmarcDomainResults;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to lookupMtaStsDomain
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async lookupMtaStsDomain(response: ResponseContext): Promise<LookupMtaStsDomainResults > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LookupMtaStsDomainResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupMtaStsDomainResults", ""
            ) as LookupMtaStsDomainResults;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LookupMtaStsDomainResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupMtaStsDomainResults", ""
            ) as LookupMtaStsDomainResults;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to lookupMxRecord
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async lookupMxRecord(response: ResponseContext): Promise<LookupMxRecordsResults > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LookupMxRecordsResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupMxRecordsResults", ""
            ) as LookupMxRecordsResults;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LookupMxRecordsResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupMxRecordsResults", ""
            ) as LookupMxRecordsResults;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to lookupPtr
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async lookupPtr(response: ResponseContext): Promise<LookupPtrResults > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LookupPtrResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupPtrResults", ""
            ) as LookupPtrResults;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LookupPtrResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupPtrResults", ""
            ) as LookupPtrResults;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to lookupSpfDomain
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async lookupSpfDomain(response: ResponseContext): Promise<LookupSpfDomainResults > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LookupSpfDomainResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupSpfDomainResults", ""
            ) as LookupSpfDomainResults;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LookupSpfDomainResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupSpfDomainResults", ""
            ) as LookupSpfDomainResults;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to lookupTlsReportingDomain
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async lookupTlsReportingDomain(response: ResponseContext): Promise<LookupTlsReportingDomainResults > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LookupTlsReportingDomainResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupTlsReportingDomainResults", ""
            ) as LookupTlsReportingDomainResults;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LookupTlsReportingDomainResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupTlsReportingDomainResults", ""
            ) as LookupTlsReportingDomainResults;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to submitPublicDeviceRenderEml
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async submitPublicDeviceRenderEml(response: ResponseContext): Promise<PublicDeviceRenderTestDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PublicDeviceRenderTestDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicDeviceRenderTestDto", ""
            ) as PublicDeviceRenderTestDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PublicDeviceRenderTestDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicDeviceRenderTestDto", ""
            ) as PublicDeviceRenderTestDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to submitPublicDeviceRenderHtml
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async submitPublicDeviceRenderHtml(response: ResponseContext): Promise<PublicDeviceRenderTestDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PublicDeviceRenderTestDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicDeviceRenderTestDto", ""
            ) as PublicDeviceRenderTestDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PublicDeviceRenderTestDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicDeviceRenderTestDto", ""
            ) as PublicDeviceRenderTestDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to submitPublicDeviceRenderTest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async submitPublicDeviceRenderTest(response: ResponseContext): Promise<PublicDeviceRenderTestDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PublicDeviceRenderTestDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicDeviceRenderTestDto", ""
            ) as PublicDeviceRenderTestDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PublicDeviceRenderTestDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicDeviceRenderTestDto", ""
            ) as PublicDeviceRenderTestDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to submitPublicSpamTest
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async submitPublicSpamTest(response: ResponseContext): Promise<PublicSpamTestRunDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PublicSpamTestRunDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicSpamTestRunDto", ""
            ) as PublicSpamTestRunDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PublicSpamTestRunDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PublicSpamTestRunDto", ""
            ) as PublicSpamTestRunDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testSmtpServer
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testSmtpServer(response: ResponseContext): Promise<TestSmtpServerResults > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TestSmtpServerResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TestSmtpServerResults", ""
            ) as TestSmtpServerResults;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TestSmtpServerResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TestSmtpServerResults", ""
            ) as TestSmtpServerResults;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
