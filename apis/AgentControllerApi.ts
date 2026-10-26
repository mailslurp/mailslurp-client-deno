// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { AccessibleInboxList } from '../models/AccessibleInboxList.ts';
import { AcquireAgentConversationClaimOptions } from '../models/AcquireAgentConversationClaimOptions.ts';
import { AgentApiErrorDto } from '../models/AgentApiErrorDto.ts';
import { AgentAutomationEventPageDto } from '../models/AgentAutomationEventPageDto.ts';
import { AgentCapabilitiesDto } from '../models/AgentCapabilitiesDto.ts';
import { AgentCompletedWorkItemDto } from '../models/AgentCompletedWorkItemDto.ts';
import { AgentConversationClaimDto } from '../models/AgentConversationClaimDto.ts';
import { AgentConversationCursorPageDto } from '../models/AgentConversationCursorPageDto.ts';
import { AgentConversationDetailV2Dto } from '../models/AgentConversationDetailV2Dto.ts';
import { AgentConversationHandoffDto } from '../models/AgentConversationHandoffDto.ts';
import { AgentConversationNoteDto } from '../models/AgentConversationNoteDto.ts';
import { AgentDeferredWorkItemDto } from '../models/AgentDeferredWorkItemDto.ts';
import { AgentInboxSendPolicyCheckOptions } from '../models/AgentInboxSendPolicyCheckOptions.ts';
import { AgentInboxSendPolicyDto } from '../models/AgentInboxSendPolicyDto.ts';
import { AgentPreparedReplyDto } from '../models/AgentPreparedReplyDto.ts';
import { AgentSmsConversationCursorPageDto } from '../models/AgentSmsConversationCursorPageDto.ts';
import { AgentSmsConversationDetailDto } from '../models/AgentSmsConversationDetailDto.ts';
import { AgentWorkItemDto } from '../models/AgentWorkItemDto.ts';
import { AgentWorkerHeartbeatDto } from '../models/AgentWorkerHeartbeatDto.ts';
import { AgentWorkerHeartbeatOptions } from '../models/AgentWorkerHeartbeatOptions.ts';
import { AttachmentMetaData } from '../models/AttachmentMetaData.ts';
import { CompleteAgentWorkItemOptions } from '../models/CompleteAgentWorkItemOptions.ts';
import { CreateAgentConversationHandoffOptions } from '../models/CreateAgentConversationHandoffOptions.ts';
import { CreateAgentConversationNoteOptions } from '../models/CreateAgentConversationNoteOptions.ts';
import { CreateAgentSmsConversationHandoffOptions } from '../models/CreateAgentSmsConversationHandoffOptions.ts';
import { CreateAgentSmsConversationNoteOptions } from '../models/CreateAgentSmsConversationNoteOptions.ts';
import { CreateInboxDto } from '../models/CreateInboxDto.ts';
import { CreateTotpDeviceBase32SecretKeyOptions } from '../models/CreateTotpDeviceBase32SecretKeyOptions.ts';
import { CreateTotpDeviceCustomOptions } from '../models/CreateTotpDeviceCustomOptions.ts';
import { CreateTotpDeviceOtpAuthUrlOptions } from '../models/CreateTotpDeviceOtpAuthUrlOptions.ts';
import { DeferAgentWorkItemOptions } from '../models/DeferAgentWorkItemOptions.ts';
import { Email } from '../models/Email.ts';
import { EmailDraftDto } from '../models/EmailDraftDto.ts';
import { EmailPreview } from '../models/EmailPreview.ts';
import { ExtractAttachmentTextOptions } from '../models/ExtractAttachmentTextOptions.ts';
import { ExtractAttachmentTextResult } from '../models/ExtractAttachmentTextResult.ts';
import { GetNextAgentWorkItemOptions } from '../models/GetNextAgentWorkItemOptions.ts';
import { InboxDto } from '../models/InboxDto.ts';
import { MatchOptions } from '../models/MatchOptions.ts';
import { PageAgentPhoneNumber } from '../models/PageAgentPhoneNumber.ts';
import { PageEmailDraftProjection } from '../models/PageEmailDraftProjection.ts';
import { PageEmailPreview } from '../models/PageEmailPreview.ts';
import { PageEmailThreadProjection } from '../models/PageEmailThreadProjection.ts';
import { PagePhoneMessageThreadItemProjection } from '../models/PagePhoneMessageThreadItemProjection.ts';
import { PagePhoneMessageThreadProjection } from '../models/PagePhoneMessageThreadProjection.ts';
import { PageSentSmsProjection } from '../models/PageSentSmsProjection.ts';
import { PageSmsProjection } from '../models/PageSmsProjection.ts';
import { PageTotpDeviceProjection } from '../models/PageTotpDeviceProjection.ts';
import { PhoneNumberDto } from '../models/PhoneNumberDto.ts';
import { PrepareAgentReplyOptions } from '../models/PrepareAgentReplyOptions.ts';
import { RenewAgentConversationClaimOptions } from '../models/RenewAgentConversationClaimOptions.ts';
import { ReplyToEmailOptions } from '../models/ReplyToEmailOptions.ts';
import { ScopedEmailThread } from '../models/ScopedEmailThread.ts';
import { SendEmailOptions } from '../models/SendEmailOptions.ts';
import { SentEmailDto } from '../models/SentEmailDto.ts';
import { SentSmsDto } from '../models/SentSmsDto.ts';
import { Set } from '../models/Set.ts';
import { SmsDto } from '../models/SmsDto.ts';
import { SmsReplyOptions } from '../models/SmsReplyOptions.ts';
import { SmsSendOptions } from '../models/SmsSendOptions.ts';
import { TotpDeviceCodeDto } from '../models/TotpDeviceCodeDto.ts';
import { TotpDeviceDto } from '../models/TotpDeviceDto.ts';
import { TotpDeviceOptionalDto } from '../models/TotpDeviceOptionalDto.ts';
import { UpdateInboxOptions } from '../models/UpdateInboxOptions.ts';
import { UpdateTotpDeviceOptions } from '../models/UpdateTotpDeviceOptions.ts';

/**
 * no description
 */
export class AgentControllerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Atomically leases a conversation to one worker. A conflict means another unexpired worker owns it. Use expectedVersion to reject work selected from stale context.
     * Acquire a renewable conversation claim
     * @param conversationId 
     * @param acquireAgentConversationClaimOptions 
     */
    public async agentAcquireConversationClaim(conversationId: string, acquireAgentConversationClaimOptions: AcquireAgentConversationClaimOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'conversationId' is not null or undefined
        if (conversationId === null || conversationId === undefined) {
            throw new RequiredError('Required parameter conversationId was null or undefined when calling agentAcquireConversationClaim.');
        }


        // verify required parameter 'acquireAgentConversationClaimOptions' is not null or undefined
        if (acquireAgentConversationClaimOptions === null || acquireAgentConversationClaimOptions === undefined) {
            throw new RequiredError('Required parameter acquireAgentConversationClaimOptions was null or undefined when calling agentAcquireConversationClaim.');
        }


        // Path Params
        const localVarPath = '/agent/conversations/{conversationId}/claims'
            .replace('{' + 'conversationId' + '}', encodeURIComponent(String(conversationId)));

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
            ObjectSerializer.serialize(acquireAgentConversationClaimOptions, "AcquireAgentConversationClaimOptions", ""),
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
     * Adds agent/operator collaboration context without sending any email to the customer.
     * Add an internal conversation note
     * @param conversationId 
     * @param createAgentConversationNoteOptions 
     */
    public async agentAddConversationNote(conversationId: string, createAgentConversationNoteOptions: CreateAgentConversationNoteOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'conversationId' is not null or undefined
        if (conversationId === null || conversationId === undefined) {
            throw new RequiredError('Required parameter conversationId was null or undefined when calling agentAddConversationNote.');
        }


        // verify required parameter 'createAgentConversationNoteOptions' is not null or undefined
        if (createAgentConversationNoteOptions === null || createAgentConversationNoteOptions === undefined) {
            throw new RequiredError('Required parameter createAgentConversationNoteOptions was null or undefined when calling agentAddConversationNote.');
        }


        // Path Params
        const localVarPath = '/agent/conversations/{conversationId}/notes'
            .replace('{' + 'conversationId' + '}', encodeURIComponent(String(conversationId)));

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
            ObjectSerializer.serialize(createAgentConversationNoteOptions, "CreateAgentConversationNoteOptions", ""),
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
     * Add an internal SMS conversation note
     * @param conversationId 
     * @param createAgentSmsConversationNoteOptions 
     */
    public async agentAddSmsNote(conversationId: string, createAgentSmsConversationNoteOptions: CreateAgentSmsConversationNoteOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'conversationId' is not null or undefined
        if (conversationId === null || conversationId === undefined) {
            throw new RequiredError('Required parameter conversationId was null or undefined when calling agentAddSmsNote.');
        }


        // verify required parameter 'createAgentSmsConversationNoteOptions' is not null or undefined
        if (createAgentSmsConversationNoteOptions === null || createAgentSmsConversationNoteOptions === undefined) {
            throw new RequiredError('Required parameter createAgentSmsConversationNoteOptions was null or undefined when calling agentAddSmsNote.');
        }


        // Path Params
        const localVarPath = '/agent/sms-conversations/{conversationId}/notes'
            .replace('{' + 'conversationId' + '}', encodeURIComponent(String(conversationId)));

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
            ObjectSerializer.serialize(createAgentSmsConversationNoteOptions, "CreateAgentSmsConversationNoteOptions", ""),
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
     * Evaluates effective inbox and account sending rules before an agent creates a send action. A blocked result includes the operator recovery route.
     * Check whether sending rules allow recipients
     * @param inboxId 
     * @param agentInboxSendPolicyCheckOptions 
     */
    public async agentCheckInboxSendPolicy(inboxId: string, agentInboxSendPolicyCheckOptions: AgentInboxSendPolicyCheckOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'inboxId' is not null or undefined
        if (inboxId === null || inboxId === undefined) {
            throw new RequiredError('Required parameter inboxId was null or undefined when calling agentCheckInboxSendPolicy.');
        }


        // verify required parameter 'agentInboxSendPolicyCheckOptions' is not null or undefined
        if (agentInboxSendPolicyCheckOptions === null || agentInboxSendPolicyCheckOptions === undefined) {
            throw new RequiredError('Required parameter agentInboxSendPolicyCheckOptions was null or undefined when calling agentCheckInboxSendPolicy.');
        }


        // Path Params
        const localVarPath = '/agent/inboxes/{inboxId}/send-policy/check'
            .replace('{' + 'inboxId' + '}', encodeURIComponent(String(inboxId)));

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
            ObjectSerializer.serialize(agentInboxSendPolicyCheckOptions, "AgentInboxSendPolicyCheckOptions", ""),
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
     * Acquire an SMS conversation claim
     * @param conversationId 
     * @param acquireAgentConversationClaimOptions 
     */
    public async agentClaimSmsConversation(conversationId: string, acquireAgentConversationClaimOptions: AcquireAgentConversationClaimOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'conversationId' is not null or undefined
        if (conversationId === null || conversationId === undefined) {
            throw new RequiredError('Required parameter conversationId was null or undefined when calling agentClaimSmsConversation.');
        }


        // verify required parameter 'acquireAgentConversationClaimOptions' is not null or undefined
        if (acquireAgentConversationClaimOptions === null || acquireAgentConversationClaimOptions === undefined) {
            throw new RequiredError('Required parameter acquireAgentConversationClaimOptions was null or undefined when calling agentClaimSmsConversation.');
        }


        // Path Params
        const localVarPath = '/agent/sms-conversations/{conversationId}/claims'
            .replace('{' + 'conversationId' + '}', encodeURIComponent(String(conversationId)));

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
            ObjectSerializer.serialize(acquireAgentConversationClaimOptions, "AcquireAgentConversationClaimOptions", ""),
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
     * Revalidates conversation freshness, sends one threaded reply with an idempotency key, and releases the supplied claim only after the send succeeds.
     * Complete a work item with an idempotent reply
     * @param conversationId 
     * @param completeAgentWorkItemOptions 
     */
    public async agentCompleteWorkItem(conversationId: string, completeAgentWorkItemOptions: CompleteAgentWorkItemOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'conversationId' is not null or undefined
        if (conversationId === null || conversationId === undefined) {
            throw new RequiredError('Required parameter conversationId was null or undefined when calling agentCompleteWorkItem.');
        }


        // verify required parameter 'completeAgentWorkItemOptions' is not null or undefined
        if (completeAgentWorkItemOptions === null || completeAgentWorkItemOptions === undefined) {
            throw new RequiredError('Required parameter completeAgentWorkItemOptions was null or undefined when calling agentCompleteWorkItem.');
        }


        // Path Params
        const localVarPath = '/agent/work-items/{conversationId}/complete'
            .replace('{' + 'conversationId' + '}', encodeURIComponent(String(conversationId)));

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
            ObjectSerializer.serialize(completeAgentWorkItemOptions, "CompleteAgentWorkItemOptions", ""),
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
     * Creates a saved draft in the path inbox using the same SendEmailOptions shape as sending, without sending the email.
     * Create a scoped email draft for an agent
     * @param inboxId ID of inbox to save the draft against
     * @param sendEmailOptions 
     * @param sourceEmailId Optional source email this draft responds to. When supplied, MailSlurp links the draft and later draft actions to that conversation.
     */
    public async agentCreateEmailDraft(inboxId: string, sendEmailOptions: SendEmailOptions, sourceEmailId?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'inboxId' is not null or undefined
        if (inboxId === null || inboxId === undefined) {
            throw new RequiredError('Required parameter inboxId was null or undefined when calling agentCreateEmailDraft.');
        }


        // verify required parameter 'sendEmailOptions' is not null or undefined
        if (sendEmailOptions === null || sendEmailOptions === undefined) {
            throw new RequiredError('Required parameter sendEmailOptions was null or undefined when calling agentCreateEmailDraft.');
        }



        // Path Params
        const localVarPath = '/agent/inboxes/{inboxId}/drafts'
            .replace('{' + 'inboxId' + '}', encodeURIComponent(String(inboxId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (sourceEmailId !== undefined) {
            requestContext.setQueryParam("sourceEmailId", ObjectSerializer.serialize(sourceEmailId, "string", "uuid"));
        }

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(sendEmailOptions, "SendEmailOptions", ""),
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
     * Creates an inbox without changing this agent connection's scopes. Account-wide scope is required so the new inbox is already covered.
     * Create an inbox with an account-wide inbox-manager connection
     * @param createInboxDto 
     */
    public async agentCreateInbox(createInboxDto: CreateInboxDto, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'createInboxDto' is not null or undefined
        if (createInboxDto === null || createInboxDto === undefined) {
            throw new RequiredError('Required parameter createInboxDto was null or undefined when calling agentCreateInbox.');
        }


        // Path Params
        const localVarPath = '/agent/inboxes';

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
            ObjectSerializer.serialize(createInboxDto, "CreateInboxDto", ""),
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
     * Builds the same recipients and RFC In-Reply-To/References headers as immediate reply, saves them as a draft, and preserves the required threading headers across later agent draft updates.
     * Create a correctly threaded reply draft
     * @param emailId 
     * @param replyToEmailOptions 
     */
    public async agentCreateReplyDraft(emailId: string, replyToEmailOptions: ReplyToEmailOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'emailId' is not null or undefined
        if (emailId === null || emailId === undefined) {
            throw new RequiredError('Required parameter emailId was null or undefined when calling agentCreateReplyDraft.');
        }


        // verify required parameter 'replyToEmailOptions' is not null or undefined
        if (replyToEmailOptions === null || replyToEmailOptions === undefined) {
            throw new RequiredError('Required parameter replyToEmailOptions was null or undefined when calling agentCreateReplyDraft.');
        }


        // Path Params
        const localVarPath = '/agent/emails/{emailId}/reply-draft'
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
            ObjectSerializer.serialize(replyToEmailOptions, "ReplyToEmailOptions", ""),
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
     * Create an agent-managed TOTP device from a base32 secret key
     * @param createTotpDeviceBase32SecretKeyOptions 
     */
    public async agentCreateTotpDeviceForBase32SecretKey(createTotpDeviceBase32SecretKeyOptions: CreateTotpDeviceBase32SecretKeyOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'createTotpDeviceBase32SecretKeyOptions' is not null or undefined
        if (createTotpDeviceBase32SecretKeyOptions === null || createTotpDeviceBase32SecretKeyOptions === undefined) {
            throw new RequiredError('Required parameter createTotpDeviceBase32SecretKeyOptions was null or undefined when calling agentCreateTotpDeviceForBase32SecretKey.');
        }


        // Path Params
        const localVarPath = '/agent/totp/devices/base32-secret-key';

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
            ObjectSerializer.serialize(createTotpDeviceBase32SecretKeyOptions, "CreateTotpDeviceBase32SecretKeyOptions", ""),
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
     * Create an agent-managed TOTP device from custom options
     * @param createTotpDeviceCustomOptions 
     */
    public async agentCreateTotpDeviceForCustom(createTotpDeviceCustomOptions: CreateTotpDeviceCustomOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'createTotpDeviceCustomOptions' is not null or undefined
        if (createTotpDeviceCustomOptions === null || createTotpDeviceCustomOptions === undefined) {
            throw new RequiredError('Required parameter createTotpDeviceCustomOptions was null or undefined when calling agentCreateTotpDeviceForCustom.');
        }


        // Path Params
        const localVarPath = '/agent/totp/devices/custom';

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
            ObjectSerializer.serialize(createTotpDeviceCustomOptions, "CreateTotpDeviceCustomOptions", ""),
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
     * Create an agent-managed TOTP device from an OTP Auth URL
     * @param createTotpDeviceOtpAuthUrlOptions 
     */
    public async agentCreateTotpDeviceForOtpAuthUrl(createTotpDeviceOtpAuthUrlOptions: CreateTotpDeviceOtpAuthUrlOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'createTotpDeviceOtpAuthUrlOptions' is not null or undefined
        if (createTotpDeviceOtpAuthUrlOptions === null || createTotpDeviceOtpAuthUrlOptions === undefined) {
            throw new RequiredError('Required parameter createTotpDeviceOtpAuthUrlOptions was null or undefined when calling agentCreateTotpDeviceForOtpAuthUrl.');
        }


        // Path Params
        const localVarPath = '/agent/totp/devices/otp-auth-url';

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
            ObjectSerializer.serialize(createTotpDeviceOtpAuthUrlOptions, "CreateTotpDeviceOtpAuthUrlOptions", ""),
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
     * Creates or returns the active review handoff and releases the supplied claim after the handoff is durable. Deferral is a normal workflow result rather than an operational failure.
     * Defer a work item to human review
     * @param conversationId 
     * @param deferAgentWorkItemOptions 
     */
    public async agentDeferWorkItem(conversationId: string, deferAgentWorkItemOptions: DeferAgentWorkItemOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'conversationId' is not null or undefined
        if (conversationId === null || conversationId === undefined) {
            throw new RequiredError('Required parameter conversationId was null or undefined when calling agentDeferWorkItem.');
        }


        // verify required parameter 'deferAgentWorkItemOptions' is not null or undefined
        if (deferAgentWorkItemOptions === null || deferAgentWorkItemOptions === undefined) {
            throw new RequiredError('Required parameter deferAgentWorkItemOptions was null or undefined when calling agentDeferWorkItem.');
        }


        // Path Params
        const localVarPath = '/agent/work-items/{conversationId}/defer'
            .replace('{' + 'conversationId' + '}', encodeURIComponent(String(conversationId)));

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
            ObjectSerializer.serialize(deferAgentWorkItemOptions, "DeferAgentWorkItemOptions", ""),
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
     * Deletes a saved draft without sending it.
     * Delete a scoped email draft for an agent
     * @param inboxId ID of inbox the draft belongs to
     * @param draftId ID of draft
     */
    public async agentDeleteEmailDraft(inboxId: string, draftId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'inboxId' is not null or undefined
        if (inboxId === null || inboxId === undefined) {
            throw new RequiredError('Required parameter inboxId was null or undefined when calling agentDeleteEmailDraft.');
        }


        // verify required parameter 'draftId' is not null or undefined
        if (draftId === null || draftId === undefined) {
            throw new RequiredError('Required parameter draftId was null or undefined when calling agentDeleteEmailDraft.');
        }


        // Path Params
        const localVarPath = '/agent/inboxes/{inboxId}/drafts/{draftId}'
            .replace('{' + 'inboxId' + '}', encodeURIComponent(String(inboxId)))
            .replace('{' + 'draftId' + '}', encodeURIComponent(String(draftId)));

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
     * Delete an agent-managed TOTP device
     * @param id 
     */
    public async agentDeleteTotpDevice(id: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling agentDeleteTotpDevice.');
        }


        // Path Params
        const localVarPath = '/agent/totp/devices/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

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
     * Extracts bounded text only after verifying both the email scope and that the attachment belongs to that email. List attachments first instead of guessing IDs.
     * Extract text from a scoped email attachment for an agent
     * @param emailId 
     * @param attachmentId 
     * @param extractAttachmentTextOptions 
     */
    public async agentExtractEmailAttachmentText(emailId: string, attachmentId: string, extractAttachmentTextOptions?: ExtractAttachmentTextOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'emailId' is not null or undefined
        if (emailId === null || emailId === undefined) {
            throw new RequiredError('Required parameter emailId was null or undefined when calling agentExtractEmailAttachmentText.');
        }


        // verify required parameter 'attachmentId' is not null or undefined
        if (attachmentId === null || attachmentId === undefined) {
            throw new RequiredError('Required parameter attachmentId was null or undefined when calling agentExtractEmailAttachmentText.');
        }



        // Path Params
        const localVarPath = '/agent/emails/{emailId}/attachments/{attachmentId}/text'
            .replace('{' + 'emailId' + '}', encodeURIComponent(String(emailId)))
            .replace('{' + 'attachmentId' + '}', encodeURIComponent(String(attachmentId)));

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
            ObjectSerializer.serialize(extractAttachmentTextOptions, "ExtractAttachmentTextOptions", ""),
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
     * Generate a code for an agent-managed TOTP device
     * @param id 
     * @param at 
     * @param minSecondsUntilExpire Minimum remaining code lifetime. The request may wait for the next period when needed.
     */
    public async agentGenerateTotpDeviceCode(id: string, at?: Date, minSecondsUntilExpire?: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling agentGenerateTotpDeviceCode.');
        }




        // Path Params
        const localVarPath = '/agent/totp/devices/{id}/code'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (at !== undefined) {
            requestContext.setQueryParam("at", ObjectSerializer.serialize(at, "Date", "date-time"));
        }
        if (minSecondsUntilExpire !== undefined) {
            requestContext.setQueryParam("minSecondsUntilExpire", ObjectSerializer.serialize(minSecondsUntilExpire, "number", "int32"));
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
     * Returns the connection identity, role, effective permission names, declared resource scope, feature availability, and server-enforced limits. Call this once during worker startup instead of hard-coding role behavior.
     * Discover this agent connection's capabilities
     */
    public async agentGetCapabilities(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/agent/capabilities';

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
     * Returns the projected conversation plus this connection's bounded activity timeline, internal notes, and active human-review handoff.
     * Get one scoped conversation
     * @param conversationId 
     */
    public async agentGetConversationV2(conversationId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'conversationId' is not null or undefined
        if (conversationId === null || conversationId === undefined) {
            throw new RequiredError('Required parameter conversationId was null or undefined when calling agentGetConversationV2.');
        }


        // Path Params
        const localVarPath = '/agent/conversations/{conversationId}'
            .replace('{' + 'conversationId' + '}', encodeURIComponent(String(conversationId)));

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
     * Returns parsed email content after resolving the message inbox and checking agent scope.
     * Get scoped hydrated email for an agent
     * @param emailId ID of email to inspect
     */
    public async agentGetEmail(emailId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'emailId' is not null or undefined
        if (emailId === null || emailId === undefined) {
            throw new RequiredError('Required parameter emailId was null or undefined when calling agentGetEmail.');
        }


        // Path Params
        const localVarPath = '/agent/emails/{emailId}'
            .replace('{' + 'emailId' + '}', encodeURIComponent(String(emailId)));

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
     * Returns a saved draft including the full SendEmailOptions payload.
     * Get a scoped email draft for an agent
     * @param inboxId ID of inbox the draft belongs to
     * @param draftId ID of draft
     */
    public async agentGetEmailDraft(inboxId: string, draftId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'inboxId' is not null or undefined
        if (inboxId === null || inboxId === undefined) {
            throw new RequiredError('Required parameter inboxId was null or undefined when calling agentGetEmailDraft.');
        }


        // verify required parameter 'draftId' is not null or undefined
        if (draftId === null || draftId === undefined) {
            throw new RequiredError('Required parameter draftId was null or undefined when calling agentGetEmailDraft.');
        }


        // Path Params
        const localVarPath = '/agent/inboxes/{inboxId}/drafts/{draftId}'
            .replace('{' + 'inboxId' + '}', encodeURIComponent(String(inboxId)))
            .replace('{' + 'draftId' + '}', encodeURIComponent(String(draftId)));

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
     * Returns lightweight metadata and headers for an email after resolving its inbox and checking the agent key scope.
     * Get scoped email summary for an agent
     * @param emailId ID of email to inspect
     */
    public async agentGetEmailSummary(emailId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'emailId' is not null or undefined
        if (emailId === null || emailId === undefined) {
            throw new RequiredError('Required parameter emailId was null or undefined when calling agentGetEmailSummary.');
        }


        // Path Params
        const localVarPath = '/agent/emails/{emailId}/summary'
            .replace('{' + 'emailId' + '}', encodeURIComponent(String(emailId)));

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
     * Returns thread metadata and ordered messages using an email ID as the authorization anchor. Arbitrary thread-ID probing is not allowed.
     * Get a scoped email thread for an agent
     * @param emailId 
     * @param sort 
     */
    public async agentGetEmailThread(emailId: string, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'emailId' is not null or undefined
        if (emailId === null || emailId === undefined) {
            throw new RequiredError('Required parameter emailId was null or undefined when calling agentGetEmailThread.');
        }



        // Path Params
        const localVarPath = '/agent/emails/{emailId}/thread'
            .replace('{' + 'emailId' + '}', encodeURIComponent(String(emailId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
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
     * Waits for and returns the latest email in one scoped inbox. This is the agent-shaped equivalent of latest-message polling.
     * Get latest scoped inbox email for an agent
     * @param inboxId ID of inbox the agent may read
     * @param timeoutMillis Timeout milliseconds to wait for latest email
     * @param unreadOnly Only return unread emails
     * @param since Only return email received at or after this time
     * @param before Only return email received before this time
     */
    public async agentGetLatestInboxEmail(inboxId: string, timeoutMillis?: number, unreadOnly?: boolean, since?: Date, before?: Date, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'inboxId' is not null or undefined
        if (inboxId === null || inboxId === undefined) {
            throw new RequiredError('Required parameter inboxId was null or undefined when calling agentGetLatestInboxEmail.');
        }






        // Path Params
        const localVarPath = '/agent/inboxes/{inboxId}/emails/latest'
            .replace('{' + 'inboxId' + '}', encodeURIComponent(String(inboxId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (timeoutMillis !== undefined) {
            requestContext.setQueryParam("timeoutMillis", ObjectSerializer.serialize(timeoutMillis, "number", "int64"));
        }
        if (unreadOnly !== undefined) {
            requestContext.setQueryParam("unreadOnly", ObjectSerializer.serialize(unreadOnly, "boolean", ""));
        }
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
     * Selects the oldest available scoped conversation and atomically claims it for one worker. This combines queue selection and claim acquisition so concurrent workers do not need to coordinate those steps themselves.
     * Claim the next conversation work item
     * @param getNextAgentWorkItemOptions 
     */
    public async agentGetNextWorkItem(getNextAgentWorkItemOptions: GetNextAgentWorkItemOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'getNextAgentWorkItemOptions' is not null or undefined
        if (getNextAgentWorkItemOptions === null || getNextAgentWorkItemOptions === undefined) {
            throw new RequiredError('Required parameter getNextAgentWorkItemOptions was null or undefined when calling agentGetNextWorkItem.');
        }


        // Path Params
        const localVarPath = '/agent/work-items/next';

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
            ObjectSerializer.serialize(getNextAgentWorkItemOptions, "GetNextAgentWorkItemOptions", ""),
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
     * List SMS thread messages
     * @param phoneNumberId 
     * @param otherPhoneNumber Other participant phone number in E.164 format
     * @param page 
     * @param size 
     */
    public async agentGetPhoneMessageThreadItems(phoneNumberId: string, otherPhoneNumber: string, page?: number, size?: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'phoneNumberId' is not null or undefined
        if (phoneNumberId === null || phoneNumberId === undefined) {
            throw new RequiredError('Required parameter phoneNumberId was null or undefined when calling agentGetPhoneMessageThreadItems.');
        }


        // verify required parameter 'otherPhoneNumber' is not null or undefined
        if (otherPhoneNumber === null || otherPhoneNumber === undefined) {
            throw new RequiredError('Required parameter otherPhoneNumber was null or undefined when calling agentGetPhoneMessageThreadItems.');
        }




        // Path Params
        const localVarPath = '/agent/phone-numbers/{phoneNumberId}/message-threads/{otherPhoneNumber}'
            .replace('{' + 'phoneNumberId' + '}', encodeURIComponent(String(phoneNumberId)))
            .replace('{' + 'otherPhoneNumber' + '}', encodeURIComponent(String(otherPhoneNumber)));

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
     * List SMS threads
     * @param phoneNumberId 
     * @param page 
     * @param size 
     */
    public async agentGetPhoneMessageThreads(phoneNumberId: string, page?: number, size?: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'phoneNumberId' is not null or undefined
        if (phoneNumberId === null || phoneNumberId === undefined) {
            throw new RequiredError('Required parameter phoneNumberId was null or undefined when calling agentGetPhoneMessageThreads.');
        }




        // Path Params
        const localVarPath = '/agent/phone-numbers/{phoneNumberId}/message-threads'
            .replace('{' + 'phoneNumberId' + '}', encodeURIComponent(String(phoneNumberId)));

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
     * Get an assigned phone number
     * @param phoneNumberId 
     */
    public async agentGetPhoneNumber(phoneNumberId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'phoneNumberId' is not null or undefined
        if (phoneNumberId === null || phoneNumberId === undefined) {
            throw new RequiredError('Required parameter phoneNumberId was null or undefined when calling agentGetPhoneNumber.');
        }


        // Path Params
        const localVarPath = '/agent/phone-numbers/{phoneNumberId}'
            .replace('{' + 'phoneNumberId' + '}', encodeURIComponent(String(phoneNumberId)));

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
     * Returns only active phone numbers explicitly assigned to this agent connection.
     * List assigned phone numbers
     * @param page 
     * @param size 
     * @param sort 
     * @param search 
     */
    public async agentGetPhoneNumbers(page?: number, size?: number, sort?: 'ASC' | 'DESC', search?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;





        // Path Params
        const localVarPath = '/agent/phone-numbers';

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
     * Get received SMS
     * @param phoneNumberId 
     * @param smsId 
     */
    public async agentGetReceivedSmsMessage(phoneNumberId: string, smsId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'phoneNumberId' is not null or undefined
        if (phoneNumberId === null || phoneNumberId === undefined) {
            throw new RequiredError('Required parameter phoneNumberId was null or undefined when calling agentGetReceivedSmsMessage.');
        }


        // verify required parameter 'smsId' is not null or undefined
        if (smsId === null || smsId === undefined) {
            throw new RequiredError('Required parameter smsId was null or undefined when calling agentGetReceivedSmsMessage.');
        }


        // Path Params
        const localVarPath = '/agent/phone-numbers/{phoneNumberId}/sms/{smsId}'
            .replace('{' + 'phoneNumberId' + '}', encodeURIComponent(String(phoneNumberId)))
            .replace('{' + 'smsId' + '}', encodeURIComponent(String(smsId)));

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
     * List received SMS for an assigned phone number
     * @param phoneNumberId 
     * @param page 
     * @param size 
     * @param sort 
     * @param since 
     * @param before 
     * @param search 
     * @param favourite 
     */
    public async agentGetReceivedSmsMessages(phoneNumberId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, search?: string, favourite?: boolean, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'phoneNumberId' is not null or undefined
        if (phoneNumberId === null || phoneNumberId === undefined) {
            throw new RequiredError('Required parameter phoneNumberId was null or undefined when calling agentGetReceivedSmsMessages.');
        }









        // Path Params
        const localVarPath = '/agent/phone-numbers/{phoneNumberId}/sms'
            .replace('{' + 'phoneNumberId' + '}', encodeURIComponent(String(phoneNumberId)));

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
        if (since !== undefined) {
            requestContext.setQueryParam("since", ObjectSerializer.serialize(since, "Date", "date-time"));
        }
        if (before !== undefined) {
            requestContext.setQueryParam("before", ObjectSerializer.serialize(before, "Date", "date-time"));
        }
        if (search !== undefined) {
            requestContext.setQueryParam("search", ObjectSerializer.serialize(search, "string", ""));
        }
        if (favourite !== undefined) {
            requestContext.setQueryParam("favourite", ObjectSerializer.serialize(favourite, "boolean", ""));
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
     * Get sent SMS
     * @param phoneNumberId 
     * @param sentSmsId 
     */
    public async agentGetSentSmsMessage(phoneNumberId: string, sentSmsId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'phoneNumberId' is not null or undefined
        if (phoneNumberId === null || phoneNumberId === undefined) {
            throw new RequiredError('Required parameter phoneNumberId was null or undefined when calling agentGetSentSmsMessage.');
        }


        // verify required parameter 'sentSmsId' is not null or undefined
        if (sentSmsId === null || sentSmsId === undefined) {
            throw new RequiredError('Required parameter sentSmsId was null or undefined when calling agentGetSentSmsMessage.');
        }


        // Path Params
        const localVarPath = '/agent/phone-numbers/{phoneNumberId}/sms/sent/{sentSmsId}'
            .replace('{' + 'phoneNumberId' + '}', encodeURIComponent(String(phoneNumberId)))
            .replace('{' + 'sentSmsId' + '}', encodeURIComponent(String(sentSmsId)));

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
     * List sent SMS for an assigned phone number
     * @param phoneNumberId 
     * @param page 
     * @param size 
     * @param sort 
     * @param since 
     * @param before 
     * @param search 
     */
    public async agentGetSentSmsMessages(phoneNumberId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, search?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'phoneNumberId' is not null or undefined
        if (phoneNumberId === null || phoneNumberId === undefined) {
            throw new RequiredError('Required parameter phoneNumberId was null or undefined when calling agentGetSentSmsMessages.');
        }








        // Path Params
        const localVarPath = '/agent/phone-numbers/{phoneNumberId}/sms/sent'
            .replace('{' + 'phoneNumberId' + '}', encodeURIComponent(String(phoneNumberId)));

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
        if (since !== undefined) {
            requestContext.setQueryParam("since", ObjectSerializer.serialize(since, "Date", "date-time"));
        }
        if (before !== undefined) {
            requestContext.setQueryParam("before", ObjectSerializer.serialize(before, "Date", "date-time"));
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
     * Get one SMS conversation
     * @param conversationId 
     */
    public async agentGetSmsConversation(conversationId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'conversationId' is not null or undefined
        if (conversationId === null || conversationId === undefined) {
            throw new RequiredError('Required parameter conversationId was null or undefined when calling agentGetSmsConversation.');
        }


        // Path Params
        const localVarPath = '/agent/sms-conversations/{conversationId}'
            .replace('{' + 'conversationId' + '}', encodeURIComponent(String(conversationId)));

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
     * Get an agent-accessible TOTP device
     * @param id 
     */
    public async agentGetTotpDevice(id: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling agentGetTotpDevice.');
        }


        // Path Params
        const localVarPath = '/agent/totp/devices/{id}'
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
     * Find an agent-accessible TOTP device by name, issuer, or username
     * @param name 
     * @param issuer 
     * @param username 
     */
    public async agentGetTotpDeviceBy(name?: string, issuer?: string, username?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;




        // Path Params
        const localVarPath = '/agent/totp/devices/by';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "string", ""));
        }
        if (issuer !== undefined) {
            requestContext.setQueryParam("issuer", ObjectSerializer.serialize(issuer, "string", ""));
        }
        if (username !== undefined) {
            requestContext.setQueryParam("username", ObjectSerializer.serialize(username, "string", ""));
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
     * List agent-accessible TOTP devices
     * @param page 
     * @param size 
     * @param sort 
     * @param issuer 
     * @param username 
     */
    public async agentGetTotpDevices(page?: number, size?: number, sort?: 'ASC' | 'DESC', issuer?: string, username?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;






        // Path Params
        const localVarPath = '/agent/totp/devices';

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
        if (issuer !== undefined) {
            requestContext.setQueryParam("issuer", ObjectSerializer.serialize(issuer, "string", ""));
        }
        if (username !== undefined) {
            requestContext.setQueryParam("username", ObjectSerializer.serialize(username, "string", ""));
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
     * Returns the inbox IDs, addresses, names, and tags visible to this resource-scoped agent key. Agents should use this endpoint instead of guessing inbox IDs.
     * List inboxes accessible to an agent
     * @param size 
     * @param sort 
     */
    public async agentListAccessibleInboxes(size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;



        // Path Params
        const localVarPath = '/agent/inboxes';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
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
     * Returns an ordered at-least-once event batch. Persist nextCursor after processing and deduplicate by eventId. waitSeconds enables bounded long polling; production workers should not continuously call latest-email polling.
     * Read durable scoped automation events
     * @param cursor 
     * @param eventType 
     * @param size 
     * @param waitSeconds 
     */
    public async agentListAutomationEvents(cursor?: string, eventType?: Set<'EMAIL_RECEIVED' | 'EMAIL_SENT' | 'SMS_RECEIVED' | 'SMS_SENT' | 'CONVERSATION_CLAIMED' | 'CONVERSATION_CLAIM_RELEASED' | 'CONVERSATION_NOTE_ADDED' | 'CONVERSATION_REVIEW_REQUESTED' | 'CONVERSATION_REVIEW_DECIDED' | 'CONVERSATION_RESOLVED' | 'CONVERSATION_REOPENED' | 'AGENT_REPLY_COMPLETED' | 'AGENT_SMS_SENT' | 'AGENT_SMS_REPLY_COMPLETED' | 'AGENT_DRAFT_CREATED' | 'AGENT_DRAFT_SENT' | 'AGENT_ACTION_FAILED'>, size?: number, waitSeconds?: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;





        // Path Params
        const localVarPath = '/agent/events';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }
        if (eventType !== undefined) {
            requestContext.setQueryParam("eventType", ObjectSerializer.serialize(eventType, "Set<'EMAIL_RECEIVED' | 'EMAIL_SENT' | 'SMS_RECEIVED' | 'SMS_SENT' | 'CONVERSATION_CLAIMED' | 'CONVERSATION_CLAIM_RELEASED' | 'CONVERSATION_NOTE_ADDED' | 'CONVERSATION_REVIEW_REQUESTED' | 'CONVERSATION_REVIEW_DECIDED' | 'CONVERSATION_RESOLVED' | 'CONVERSATION_REOPENED' | 'AGENT_REPLY_COMPLETED' | 'AGENT_SMS_SENT' | 'AGENT_SMS_REPLY_COMPLETED' | 'AGENT_DRAFT_CREATED' | 'AGENT_DRAFT_SENT' | 'AGENT_ACTION_FAILED'>", ""));
        }
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "number", "int32"));
        }
        if (waitSeconds !== undefined) {
            requestContext.setQueryParam("waitSeconds", ObjectSerializer.serialize(waitSeconds, "number", "int32"));
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
     * Reads the bounded mail-thread projection and applies current connection scope on every request. Persist nextCursor only after processing the returned page. Exact totals are intentionally omitted.
     * List active conversations with an opaque keyset cursor
     * @param workflowState 
     * @param outcome 
     * @param reviewStatus 
     * @param inboxId 
     * @param unread 
     * @param hasAttachments 
     * @param since 
     * @param before 
     * @param search 
     * @param sort 
     * @param cursor 
     * @param size 
     */
    public async agentListConversationsV2(workflowState?: 'AVAILABLE' | 'CLAIMED' | 'WAITING_ON_AGENT' | 'WAITING_ON_CUSTOMER' | 'REVIEW' | 'RESOLVED', outcome?: 'READ' | 'DRAFTED' | 'REPLIED' | 'REVIEW_REQUESTED' | 'FAILED' | 'RESOLVED', reviewStatus?: 'NONE' | 'REQUESTED' | 'ASSIGNED' | 'APPROVED' | 'REJECTED' | 'RESOLVED', inboxId?: string, unread?: boolean, hasAttachments?: boolean, since?: Date, before?: Date, search?: string, sort?: 'LAST_MESSAGE_DESC' | 'OLDEST_UNHANDLED_ASC' | 'REVIEW_PRIORITY_DESC', cursor?: string, size?: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;













        // Path Params
        const localVarPath = '/agent/conversations';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (workflowState !== undefined) {
            requestContext.setQueryParam("workflowState", ObjectSerializer.serialize(workflowState, "'AVAILABLE' | 'CLAIMED' | 'WAITING_ON_AGENT' | 'WAITING_ON_CUSTOMER' | 'REVIEW' | 'RESOLVED'", ""));
        }
        if (outcome !== undefined) {
            requestContext.setQueryParam("outcome", ObjectSerializer.serialize(outcome, "'READ' | 'DRAFTED' | 'REPLIED' | 'REVIEW_REQUESTED' | 'FAILED' | 'RESOLVED'", ""));
        }
        if (reviewStatus !== undefined) {
            requestContext.setQueryParam("reviewStatus", ObjectSerializer.serialize(reviewStatus, "'NONE' | 'REQUESTED' | 'ASSIGNED' | 'APPROVED' | 'REJECTED' | 'RESOLVED'", ""));
        }
        if (inboxId !== undefined) {
            requestContext.setQueryParam("inboxId", ObjectSerializer.serialize(inboxId, "string", "uuid"));
        }
        if (unread !== undefined) {
            requestContext.setQueryParam("unread", ObjectSerializer.serialize(unread, "boolean", ""));
        }
        if (hasAttachments !== undefined) {
            requestContext.setQueryParam("hasAttachments", ObjectSerializer.serialize(hasAttachments, "boolean", ""));
        }
        if (since !== undefined) {
            requestContext.setQueryParam("since", ObjectSerializer.serialize(since, "Date", "date-time"));
        }
        if (before !== undefined) {
            requestContext.setQueryParam("before", ObjectSerializer.serialize(before, "Date", "date-time"));
        }
        if (search !== undefined) {
            requestContext.setQueryParam("search", ObjectSerializer.serialize(search, "string", ""));
        }
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'LAST_MESSAGE_DESC' | 'OLDEST_UNHANDLED_ASC' | 'REVIEW_PRIORITY_DESC'", ""));
        }
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
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
     * Returns bounded attachment metadata only after verifying the email belongs to an inbox visible to the agent key.
     * List attachments on a scoped email for an agent
     * @param emailId 
     */
    public async agentListEmailAttachments(emailId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'emailId' is not null or undefined
        if (emailId === null || emailId === undefined) {
            throw new RequiredError('Required parameter emailId was null or undefined when calling agentListEmailAttachments.');
        }


        // Path Params
        const localVarPath = '/agent/emails/{emailId}/attachments'
            .replace('{' + 'emailId' + '}', encodeURIComponent(String(emailId)));

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
     * Lists draft previews for one scoped inbox.
     * List scoped email drafts for an agent
     * @param inboxId ID of inbox to list drafts for
     * @param page Optional page index in draft pagination
     * @param size Optional page size in draft pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public async agentListEmailDrafts(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'inboxId' is not null or undefined
        if (inboxId === null || inboxId === undefined) {
            throw new RequiredError('Required parameter inboxId was null or undefined when calling agentListEmailDrafts.');
        }





        // Path Params
        const localVarPath = '/agent/inboxes/{inboxId}/drafts'
            .replace('{' + 'inboxId' + '}', encodeURIComponent(String(inboxId)));

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
     * Returns paginated email previews for one inbox after checking the agent key has AGENT_READ_EMAIL and is scoped to the inbox.
     * List scoped inbox emails for an agent
     * @param inboxId ID of inbox the agent may read
     * @param page Optional page index in inbox emails list pagination
     * @param size Optional page size in inbox emails list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Optional filter by received after given date time
     * @param before Optional filter by received before given date time
     * @param syncConnectors Sync connectors before fetching emails
     */
    public async agentListInboxEmails(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, syncConnectors?: boolean, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'inboxId' is not null or undefined
        if (inboxId === null || inboxId === undefined) {
            throw new RequiredError('Required parameter inboxId was null or undefined when calling agentListInboxEmails.');
        }








        // Path Params
        const localVarPath = '/agent/inboxes/{inboxId}/emails'
            .replace('{' + 'inboxId' + '}', encodeURIComponent(String(inboxId)));

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
        if (since !== undefined) {
            requestContext.setQueryParam("since", ObjectSerializer.serialize(since, "Date", "date-time"));
        }
        if (before !== undefined) {
            requestContext.setQueryParam("before", ObjectSerializer.serialize(before, "Date", "date-time"));
        }
        if (syncConnectors !== undefined) {
            requestContext.setQueryParam("syncConnectors", ObjectSerializer.serialize(syncConnectors, "boolean", ""));
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
     * Lists conversation threads for one scoped inbox, including unread state, attachment presence, message count, and latest-message excerpts.
     * List scoped inbox threads for an agent
     * @param inboxId 
     * @param page 
     * @param size 
     * @param sort 
     * @param search 
     * @param since 
     * @param before 
     */
    public async agentListInboxThreads(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', search?: string, since?: Date, before?: Date, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'inboxId' is not null or undefined
        if (inboxId === null || inboxId === undefined) {
            throw new RequiredError('Required parameter inboxId was null or undefined when calling agentListInboxThreads.');
        }








        // Path Params
        const localVarPath = '/agent/inboxes/{inboxId}/threads'
            .replace('{' + 'inboxId' + '}', encodeURIComponent(String(inboxId)));

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
        if (search !== undefined) {
            requestContext.setQueryParam("search", ObjectSerializer.serialize(search, "string", ""));
        }
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
     * List active SMS conversations
     * @param workflowState 
     * @param outcome 
     * @param reviewStatus 
     * @param phoneNumberId 
     * @param unread 
     * @param hasMedia 
     * @param since 
     * @param before 
     * @param search 
     * @param sort 
     * @param cursor 
     * @param size 
     */
    public async agentListSmsConversations(workflowState?: 'AVAILABLE' | 'CLAIMED' | 'WAITING_ON_AGENT' | 'WAITING_ON_CUSTOMER' | 'REVIEW' | 'RESOLVED', outcome?: 'READ' | 'DRAFTED' | 'REPLIED' | 'REVIEW_REQUESTED' | 'FAILED' | 'RESOLVED', reviewStatus?: 'NONE' | 'REQUESTED' | 'ASSIGNED' | 'APPROVED' | 'REJECTED' | 'RESOLVED', phoneNumberId?: string, unread?: boolean, hasMedia?: boolean, since?: Date, before?: Date, search?: string, sort?: 'LAST_MESSAGE_DESC' | 'OLDEST_UNHANDLED_ASC' | 'REVIEW_PRIORITY_DESC', cursor?: string, size?: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;













        // Path Params
        const localVarPath = '/agent/sms-conversations';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (workflowState !== undefined) {
            requestContext.setQueryParam("workflowState", ObjectSerializer.serialize(workflowState, "'AVAILABLE' | 'CLAIMED' | 'WAITING_ON_AGENT' | 'WAITING_ON_CUSTOMER' | 'REVIEW' | 'RESOLVED'", ""));
        }
        if (outcome !== undefined) {
            requestContext.setQueryParam("outcome", ObjectSerializer.serialize(outcome, "'READ' | 'DRAFTED' | 'REPLIED' | 'REVIEW_REQUESTED' | 'FAILED' | 'RESOLVED'", ""));
        }
        if (reviewStatus !== undefined) {
            requestContext.setQueryParam("reviewStatus", ObjectSerializer.serialize(reviewStatus, "'NONE' | 'REQUESTED' | 'ASSIGNED' | 'APPROVED' | 'REJECTED' | 'RESOLVED'", ""));
        }
        if (phoneNumberId !== undefined) {
            requestContext.setQueryParam("phoneNumberId", ObjectSerializer.serialize(phoneNumberId, "string", "uuid"));
        }
        if (unread !== undefined) {
            requestContext.setQueryParam("unread", ObjectSerializer.serialize(unread, "boolean", ""));
        }
        if (hasMedia !== undefined) {
            requestContext.setQueryParam("hasMedia", ObjectSerializer.serialize(hasMedia, "boolean", ""));
        }
        if (since !== undefined) {
            requestContext.setQueryParam("since", ObjectSerializer.serialize(since, "Date", "date-time"));
        }
        if (before !== undefined) {
            requestContext.setQueryParam("before", ObjectSerializer.serialize(before, "Date", "date-time"));
        }
        if (search !== undefined) {
            requestContext.setQueryParam("search", ObjectSerializer.serialize(search, "string", ""));
        }
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'LAST_MESSAGE_DESC' | 'OLDEST_UNHANDLED_ASC' | 'REVIEW_PRIORITY_DESC'", ""));
        }
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
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
     * Checks that the selected conversation and latest inbound email are still current, then creates a correctly threaded reply draft. An optional internal note records context for human review without sending email.
     * Prepare a guarded reply draft
     * @param conversationId 
     * @param prepareAgentReplyOptions 
     */
    public async agentPrepareWorkItemReply(conversationId: string, prepareAgentReplyOptions: PrepareAgentReplyOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'conversationId' is not null or undefined
        if (conversationId === null || conversationId === undefined) {
            throw new RequiredError('Required parameter conversationId was null or undefined when calling agentPrepareWorkItemReply.');
        }


        // verify required parameter 'prepareAgentReplyOptions' is not null or undefined
        if (prepareAgentReplyOptions === null || prepareAgentReplyOptions === undefined) {
            throw new RequiredError('Required parameter prepareAgentReplyOptions was null or undefined when calling agentPrepareWorkItemReply.');
        }


        // Path Params
        const localVarPath = '/agent/work-items/{conversationId}/prepare-reply'
            .replace('{' + 'conversationId' + '}', encodeURIComponent(String(conversationId)));

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
            ObjectSerializer.serialize(prepareAgentReplyOptions, "PrepareAgentReplyOptions", ""),
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
     * Release is idempotent; repeating it does not fail.
     * Release a conversation claim
     * @param conversationId 
     * @param claimId 
     */
    public async agentReleaseConversationClaim(conversationId: string, claimId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'conversationId' is not null or undefined
        if (conversationId === null || conversationId === undefined) {
            throw new RequiredError('Required parameter conversationId was null or undefined when calling agentReleaseConversationClaim.');
        }


        // verify required parameter 'claimId' is not null or undefined
        if (claimId === null || claimId === undefined) {
            throw new RequiredError('Required parameter claimId was null or undefined when calling agentReleaseConversationClaim.');
        }


        // Path Params
        const localVarPath = '/agent/conversations/{conversationId}/claims/{claimId}'
            .replace('{' + 'conversationId' + '}', encodeURIComponent(String(conversationId)))
            .replace('{' + 'claimId' + '}', encodeURIComponent(String(claimId)));

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
     * Release an SMS conversation claim
     * @param conversationId 
     * @param claimId 
     */
    public async agentReleaseSmsClaim(conversationId: string, claimId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'conversationId' is not null or undefined
        if (conversationId === null || conversationId === undefined) {
            throw new RequiredError('Required parameter conversationId was null or undefined when calling agentReleaseSmsClaim.');
        }


        // verify required parameter 'claimId' is not null or undefined
        if (claimId === null || claimId === undefined) {
            throw new RequiredError('Required parameter claimId was null or undefined when calling agentReleaseSmsClaim.');
        }


        // Path Params
        const localVarPath = '/agent/sms-conversations/{conversationId}/claims/{claimId}'
            .replace('{' + 'conversationId' + '}', encodeURIComponent(String(conversationId)))
            .replace('{' + 'claimId' + '}', encodeURIComponent(String(claimId)));

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
     * Renew a conversation claim
     * @param conversationId 
     * @param claimId 
     * @param renewAgentConversationClaimOptions 
     */
    public async agentRenewConversationClaim(conversationId: string, claimId: string, renewAgentConversationClaimOptions: RenewAgentConversationClaimOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'conversationId' is not null or undefined
        if (conversationId === null || conversationId === undefined) {
            throw new RequiredError('Required parameter conversationId was null or undefined when calling agentRenewConversationClaim.');
        }


        // verify required parameter 'claimId' is not null or undefined
        if (claimId === null || claimId === undefined) {
            throw new RequiredError('Required parameter claimId was null or undefined when calling agentRenewConversationClaim.');
        }


        // verify required parameter 'renewAgentConversationClaimOptions' is not null or undefined
        if (renewAgentConversationClaimOptions === null || renewAgentConversationClaimOptions === undefined) {
            throw new RequiredError('Required parameter renewAgentConversationClaimOptions was null or undefined when calling agentRenewConversationClaim.');
        }


        // Path Params
        const localVarPath = '/agent/conversations/{conversationId}/claims/{claimId}'
            .replace('{' + 'conversationId' + '}', encodeURIComponent(String(conversationId)))
            .replace('{' + 'claimId' + '}', encodeURIComponent(String(claimId)));

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
            ObjectSerializer.serialize(renewAgentConversationClaimOptions, "RenewAgentConversationClaimOptions", ""),
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
     * Renew an SMS conversation claim
     * @param conversationId 
     * @param claimId 
     * @param renewAgentConversationClaimOptions 
     */
    public async agentRenewSmsClaim(conversationId: string, claimId: string, renewAgentConversationClaimOptions: RenewAgentConversationClaimOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'conversationId' is not null or undefined
        if (conversationId === null || conversationId === undefined) {
            throw new RequiredError('Required parameter conversationId was null or undefined when calling agentRenewSmsClaim.');
        }


        // verify required parameter 'claimId' is not null or undefined
        if (claimId === null || claimId === undefined) {
            throw new RequiredError('Required parameter claimId was null or undefined when calling agentRenewSmsClaim.');
        }


        // verify required parameter 'renewAgentConversationClaimOptions' is not null or undefined
        if (renewAgentConversationClaimOptions === null || renewAgentConversationClaimOptions === undefined) {
            throw new RequiredError('Required parameter renewAgentConversationClaimOptions was null or undefined when calling agentRenewSmsClaim.');
        }


        // Path Params
        const localVarPath = '/agent/sms-conversations/{conversationId}/claims/{claimId}'
            .replace('{' + 'conversationId' + '}', encodeURIComponent(String(conversationId)))
            .replace('{' + 'claimId' + '}', encodeURIComponent(String(claimId)));

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
            ObjectSerializer.serialize(renewAgentConversationClaimOptions, "RenewAgentConversationClaimOptions", ""),
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
     * Sends a reply using the original conversation context after checking AGENT_REPLY_EMAIL and inbox scope.
     * Reply to a scoped email as an agent
     * @param emailId ID of email to reply to
     * @param replyToEmailOptions 
     * @param idempotencyKey 
     * @param expectedConversationVersion 
     * @param expectedLatestEmailId 
     */
    public async agentReplyToEmail(emailId: string, replyToEmailOptions: ReplyToEmailOptions, idempotencyKey?: string, expectedConversationVersion?: number, expectedLatestEmailId?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'emailId' is not null or undefined
        if (emailId === null || emailId === undefined) {
            throw new RequiredError('Required parameter emailId was null or undefined when calling agentReplyToEmail.');
        }


        // verify required parameter 'replyToEmailOptions' is not null or undefined
        if (replyToEmailOptions === null || replyToEmailOptions === undefined) {
            throw new RequiredError('Required parameter replyToEmailOptions was null or undefined when calling agentReplyToEmail.');
        }





        // Path Params
        const localVarPath = '/agent/emails/{emailId}/reply'
            .replace('{' + 'emailId' + '}', encodeURIComponent(String(emailId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (expectedConversationVersion !== undefined) {
            requestContext.setQueryParam("expectedConversationVersion", ObjectSerializer.serialize(expectedConversationVersion, "number", "int64"));
        }
        if (expectedLatestEmailId !== undefined) {
            requestContext.setQueryParam("expectedLatestEmailId", ObjectSerializer.serialize(expectedLatestEmailId, "string", "uuid"));
        }

        // Header Params
        requestContext.setHeaderParam("Idempotency-Key", ObjectSerializer.serialize(idempotencyKey, "string", ""));

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(replyToEmailOptions, "ReplyToEmailOptions", ""),
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
     * Reply to received SMS
     * @param phoneNumberId 
     * @param smsId 
     * @param smsReplyOptions 
     * @param idempotencyKey 
     * @param expectedConversationVersion 
     * @param expectedLatestMessageId 
     */
    public async agentReplyToSms(phoneNumberId: string, smsId: string, smsReplyOptions: SmsReplyOptions, idempotencyKey?: string, expectedConversationVersion?: number, expectedLatestMessageId?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'phoneNumberId' is not null or undefined
        if (phoneNumberId === null || phoneNumberId === undefined) {
            throw new RequiredError('Required parameter phoneNumberId was null or undefined when calling agentReplyToSms.');
        }


        // verify required parameter 'smsId' is not null or undefined
        if (smsId === null || smsId === undefined) {
            throw new RequiredError('Required parameter smsId was null or undefined when calling agentReplyToSms.');
        }


        // verify required parameter 'smsReplyOptions' is not null or undefined
        if (smsReplyOptions === null || smsReplyOptions === undefined) {
            throw new RequiredError('Required parameter smsReplyOptions was null or undefined when calling agentReplyToSms.');
        }





        // Path Params
        const localVarPath = '/agent/phone-numbers/{phoneNumberId}/sms/{smsId}/reply'
            .replace('{' + 'phoneNumberId' + '}', encodeURIComponent(String(phoneNumberId)))
            .replace('{' + 'smsId' + '}', encodeURIComponent(String(smsId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (expectedConversationVersion !== undefined) {
            requestContext.setQueryParam("expectedConversationVersion", ObjectSerializer.serialize(expectedConversationVersion, "number", "int64"));
        }
        if (expectedLatestMessageId !== undefined) {
            requestContext.setQueryParam("expectedLatestMessageId", ObjectSerializer.serialize(expectedLatestMessageId, "string", "uuid"));
        }

        // Header Params
        requestContext.setHeaderParam("Idempotency-Key", ObjectSerializer.serialize(idempotencyKey, "string", ""));

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(smsReplyOptions, "SmsReplyOptions", ""),
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
     * Records one running worker instance and its deployed release for owner-side health monitoring. Send this during startup and periodically while the process can accept work; it does not claim or mutate a conversation.
     * Report a worker heartbeat
     * @param agentWorkerHeartbeatOptions 
     */
    public async agentReportWorkerHeartbeat(agentWorkerHeartbeatOptions: AgentWorkerHeartbeatOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'agentWorkerHeartbeatOptions' is not null or undefined
        if (agentWorkerHeartbeatOptions === null || agentWorkerHeartbeatOptions === undefined) {
            throw new RequiredError('Required parameter agentWorkerHeartbeatOptions was null or undefined when calling agentReportWorkerHeartbeat.');
        }


        // Path Params
        const localVarPath = '/agent/runtime/heartbeat';

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
            ObjectSerializer.serialize(agentWorkerHeartbeatOptions, "AgentWorkerHeartbeatOptions", ""),
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
     * Creates or returns the active handoff and moves the shared workflow state into REVIEW without classifying the request as an operational failure.
     * Request human review for a conversation
     * @param conversationId 
     * @param createAgentConversationHandoffOptions 
     */
    public async agentRequestConversationHandoff(conversationId: string, createAgentConversationHandoffOptions: CreateAgentConversationHandoffOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'conversationId' is not null or undefined
        if (conversationId === null || conversationId === undefined) {
            throw new RequiredError('Required parameter conversationId was null or undefined when calling agentRequestConversationHandoff.');
        }


        // verify required parameter 'createAgentConversationHandoffOptions' is not null or undefined
        if (createAgentConversationHandoffOptions === null || createAgentConversationHandoffOptions === undefined) {
            throw new RequiredError('Required parameter createAgentConversationHandoffOptions was null or undefined when calling agentRequestConversationHandoff.');
        }


        // Path Params
        const localVarPath = '/agent/conversations/{conversationId}/handoffs'
            .replace('{' + 'conversationId' + '}', encodeURIComponent(String(conversationId)));

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
            ObjectSerializer.serialize(createAgentConversationHandoffOptions, "CreateAgentConversationHandoffOptions", ""),
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
     * Request human review for an SMS conversation
     * @param conversationId 
     * @param createAgentSmsConversationHandoffOptions 
     */
    public async agentRequestSmsHandoff(conversationId: string, createAgentSmsConversationHandoffOptions: CreateAgentSmsConversationHandoffOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'conversationId' is not null or undefined
        if (conversationId === null || conversationId === undefined) {
            throw new RequiredError('Required parameter conversationId was null or undefined when calling agentRequestSmsHandoff.');
        }


        // verify required parameter 'createAgentSmsConversationHandoffOptions' is not null or undefined
        if (createAgentSmsConversationHandoffOptions === null || createAgentSmsConversationHandoffOptions === undefined) {
            throw new RequiredError('Required parameter createAgentSmsConversationHandoffOptions was null or undefined when calling agentRequestSmsHandoff.');
        }


        // Path Params
        const localVarPath = '/agent/sms-conversations/{conversationId}/handoffs'
            .replace('{' + 'conversationId' + '}', encodeURIComponent(String(conversationId)));

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
            ObjectSerializer.serialize(createAgentSmsConversationHandoffOptions, "CreateAgentSmsConversationHandoffOptions", ""),
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
     * Searches one scoped inbox using explicit field matches and attachment conditions. Use this for deterministic automation recovery instead of repeatedly fetching the latest message.
     * Search scoped inbox emails for an agent
     * @param inboxId 
     * @param matchOptions 
     * @param size 
     * @param sort 
     * @param since 
     * @param before 
     * @param unreadOnly 
     */
    public async agentSearchInboxEmails(inboxId: string, matchOptions: MatchOptions, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, unreadOnly?: boolean, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'inboxId' is not null or undefined
        if (inboxId === null || inboxId === undefined) {
            throw new RequiredError('Required parameter inboxId was null or undefined when calling agentSearchInboxEmails.');
        }


        // verify required parameter 'matchOptions' is not null or undefined
        if (matchOptions === null || matchOptions === undefined) {
            throw new RequiredError('Required parameter matchOptions was null or undefined when calling agentSearchInboxEmails.');
        }







        // Path Params
        const localVarPath = '/agent/inboxes/{inboxId}/emails/search'
            .replace('{' + 'inboxId' + '}', encodeURIComponent(String(inboxId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "number", "int32"));
        }
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'ASC' | 'DESC'", ""));
        }
        if (since !== undefined) {
            requestContext.setQueryParam("since", ObjectSerializer.serialize(since, "Date", "date-time"));
        }
        if (before !== undefined) {
            requestContext.setQueryParam("before", ObjectSerializer.serialize(before, "Date", "date-time"));
        }
        if (unreadOnly !== undefined) {
            requestContext.setQueryParam("unreadOnly", ObjectSerializer.serialize(unreadOnly, "boolean", ""));
        }

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(matchOptions, "MatchOptions", ""),
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
     * Sends a saved draft through the existing inbox send pipeline and deletes it only after send success.
     * Send a scoped email draft for an agent
     * @param inboxId ID of inbox the draft belongs to
     * @param draftId ID of draft
     * @param idempotencyKey 
     */
    public async agentSendEmailDraft(inboxId: string, draftId: string, idempotencyKey?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'inboxId' is not null or undefined
        if (inboxId === null || inboxId === undefined) {
            throw new RequiredError('Required parameter inboxId was null or undefined when calling agentSendEmailDraft.');
        }


        // verify required parameter 'draftId' is not null or undefined
        if (draftId === null || draftId === undefined) {
            throw new RequiredError('Required parameter draftId was null or undefined when calling agentSendEmailDraft.');
        }



        // Path Params
        const localVarPath = '/agent/inboxes/{inboxId}/drafts/{draftId}/send'
            .replace('{' + 'inboxId' + '}', encodeURIComponent(String(inboxId)))
            .replace('{' + 'draftId' + '}', encodeURIComponent(String(draftId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params
        requestContext.setHeaderParam("Idempotency-Key", ObjectSerializer.serialize(idempotencyKey, "string", ""));

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
     * Send SMS from an assigned phone number
     * @param phoneNumberId 
     * @param smsSendOptions 
     * @param idempotencyKey 
     * @param expectedConversationVersion 
     * @param expectedLatestMessageId 
     */
    public async agentSendSms(phoneNumberId: string, smsSendOptions: SmsSendOptions, idempotencyKey?: string, expectedConversationVersion?: number, expectedLatestMessageId?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'phoneNumberId' is not null or undefined
        if (phoneNumberId === null || phoneNumberId === undefined) {
            throw new RequiredError('Required parameter phoneNumberId was null or undefined when calling agentSendSms.');
        }


        // verify required parameter 'smsSendOptions' is not null or undefined
        if (smsSendOptions === null || smsSendOptions === undefined) {
            throw new RequiredError('Required parameter smsSendOptions was null or undefined when calling agentSendSms.');
        }





        // Path Params
        const localVarPath = '/agent/phone-numbers/{phoneNumberId}/sms'
            .replace('{' + 'phoneNumberId' + '}', encodeURIComponent(String(phoneNumberId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (expectedConversationVersion !== undefined) {
            requestContext.setQueryParam("expectedConversationVersion", ObjectSerializer.serialize(expectedConversationVersion, "number", "int64"));
        }
        if (expectedLatestMessageId !== undefined) {
            requestContext.setQueryParam("expectedLatestMessageId", ObjectSerializer.serialize(expectedLatestMessageId, "string", "uuid"));
        }

        // Header Params
        requestContext.setHeaderParam("Idempotency-Key", ObjectSerializer.serialize(idempotencyKey, "string", ""));

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(smsSendOptions, "SmsSendOptions", ""),
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
     * Replaces the SendEmailOptions stored for a draft. The draft remains attached to its original inbox.
     * Update a scoped email draft for an agent
     * @param inboxId ID of inbox the draft belongs to
     * @param draftId ID of draft
     * @param sendEmailOptions 
     */
    public async agentUpdateEmailDraft(inboxId: string, draftId: string, sendEmailOptions: SendEmailOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'inboxId' is not null or undefined
        if (inboxId === null || inboxId === undefined) {
            throw new RequiredError('Required parameter inboxId was null or undefined when calling agentUpdateEmailDraft.');
        }


        // verify required parameter 'draftId' is not null or undefined
        if (draftId === null || draftId === undefined) {
            throw new RequiredError('Required parameter draftId was null or undefined when calling agentUpdateEmailDraft.');
        }


        // verify required parameter 'sendEmailOptions' is not null or undefined
        if (sendEmailOptions === null || sendEmailOptions === undefined) {
            throw new RequiredError('Required parameter sendEmailOptions was null or undefined when calling agentUpdateEmailDraft.');
        }


        // Path Params
        const localVarPath = '/agent/inboxes/{inboxId}/drafts/{draftId}'
            .replace('{' + 'inboxId' + '}', encodeURIComponent(String(inboxId)))
            .replace('{' + 'draftId' + '}', encodeURIComponent(String(draftId)));

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
            ObjectSerializer.serialize(sendEmailOptions, "SendEmailOptions", ""),
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
     * Update an inbox visible to an inbox-manager connection
     * @param inboxId 
     * @param updateInboxOptions 
     */
    public async agentUpdateInbox(inboxId: string, updateInboxOptions: UpdateInboxOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'inboxId' is not null or undefined
        if (inboxId === null || inboxId === undefined) {
            throw new RequiredError('Required parameter inboxId was null or undefined when calling agentUpdateInbox.');
        }


        // verify required parameter 'updateInboxOptions' is not null or undefined
        if (updateInboxOptions === null || updateInboxOptions === undefined) {
            throw new RequiredError('Required parameter updateInboxOptions was null or undefined when calling agentUpdateInbox.');
        }


        // Path Params
        const localVarPath = '/agent/inboxes/{inboxId}'
            .replace('{' + 'inboxId' + '}', encodeURIComponent(String(inboxId)));

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
            ObjectSerializer.serialize(updateInboxOptions, "UpdateInboxOptions", ""),
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
     * Update an agent-managed TOTP device
     * @param id 
     * @param updateTotpDeviceOptions 
     */
    public async agentUpdateTotpDevice(id: string, updateTotpDeviceOptions: UpdateTotpDeviceOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling agentUpdateTotpDevice.');
        }


        // verify required parameter 'updateTotpDeviceOptions' is not null or undefined
        if (updateTotpDeviceOptions === null || updateTotpDeviceOptions === undefined) {
            throw new RequiredError('Required parameter updateTotpDeviceOptions was null or undefined when calling agentUpdateTotpDevice.');
        }


        // Path Params
        const localVarPath = '/agent/totp/devices/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

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
            ObjectSerializer.serialize(updateTotpDeviceOptions, "UpdateTotpDeviceOptions", ""),
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

export class AgentControllerApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentAcquireConversationClaim
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentAcquireConversationClaim(response: ResponseContext): Promise<AgentConversationClaimDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: AgentConversationClaimDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentConversationClaimDto", ""
            ) as AgentConversationClaimDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AgentConversationClaimDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentConversationClaimDto", ""
            ) as AgentConversationClaimDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentAddConversationNote
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentAddConversationNote(response: ResponseContext): Promise<AgentConversationNoteDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: AgentConversationNoteDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentConversationNoteDto", ""
            ) as AgentConversationNoteDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AgentConversationNoteDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentConversationNoteDto", ""
            ) as AgentConversationNoteDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentAddSmsNote
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentAddSmsNote(response: ResponseContext): Promise<AgentConversationNoteDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: AgentConversationNoteDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentConversationNoteDto", ""
            ) as AgentConversationNoteDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AgentConversationNoteDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentConversationNoteDto", ""
            ) as AgentConversationNoteDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentCheckInboxSendPolicy
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentCheckInboxSendPolicy(response: ResponseContext): Promise<AgentInboxSendPolicyDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AgentInboxSendPolicyDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentInboxSendPolicyDto", ""
            ) as AgentInboxSendPolicyDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AgentInboxSendPolicyDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentInboxSendPolicyDto", ""
            ) as AgentInboxSendPolicyDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentClaimSmsConversation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentClaimSmsConversation(response: ResponseContext): Promise<AgentConversationClaimDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: AgentConversationClaimDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentConversationClaimDto", ""
            ) as AgentConversationClaimDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AgentConversationClaimDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentConversationClaimDto", ""
            ) as AgentConversationClaimDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentCompleteWorkItem
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentCompleteWorkItem(response: ResponseContext): Promise<AgentCompletedWorkItemDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AgentCompletedWorkItemDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentCompletedWorkItemDto", ""
            ) as AgentCompletedWorkItemDto;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AgentApiErrorDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentApiErrorDto", ""
            ) as AgentApiErrorDto;
            throw new ApiException<AgentApiErrorDto>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AgentCompletedWorkItemDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentCompletedWorkItemDto", ""
            ) as AgentCompletedWorkItemDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentCreateEmailDraft
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentCreateEmailDraft(response: ResponseContext): Promise<EmailDraftDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: EmailDraftDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailDraftDto", ""
            ) as EmailDraftDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EmailDraftDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailDraftDto", ""
            ) as EmailDraftDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentCreateInbox
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentCreateInbox(response: ResponseContext): Promise<InboxDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: InboxDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxDto", ""
            ) as InboxDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InboxDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxDto", ""
            ) as InboxDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentCreateReplyDraft
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentCreateReplyDraft(response: ResponseContext): Promise<EmailDraftDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: EmailDraftDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailDraftDto", ""
            ) as EmailDraftDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EmailDraftDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailDraftDto", ""
            ) as EmailDraftDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentCreateTotpDeviceForBase32SecretKey
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentCreateTotpDeviceForBase32SecretKey(response: ResponseContext): Promise<TotpDeviceDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: TotpDeviceDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TotpDeviceDto", ""
            ) as TotpDeviceDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TotpDeviceDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TotpDeviceDto", ""
            ) as TotpDeviceDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentCreateTotpDeviceForCustom
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentCreateTotpDeviceForCustom(response: ResponseContext): Promise<TotpDeviceDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: TotpDeviceDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TotpDeviceDto", ""
            ) as TotpDeviceDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TotpDeviceDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TotpDeviceDto", ""
            ) as TotpDeviceDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentCreateTotpDeviceForOtpAuthUrl
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentCreateTotpDeviceForOtpAuthUrl(response: ResponseContext): Promise<TotpDeviceDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: TotpDeviceDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TotpDeviceDto", ""
            ) as TotpDeviceDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TotpDeviceDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TotpDeviceDto", ""
            ) as TotpDeviceDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentDeferWorkItem
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentDeferWorkItem(response: ResponseContext): Promise<AgentDeferredWorkItemDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AgentDeferredWorkItemDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentDeferredWorkItemDto", ""
            ) as AgentDeferredWorkItemDto;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AgentApiErrorDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentApiErrorDto", ""
            ) as AgentApiErrorDto;
            throw new ApiException<AgentApiErrorDto>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AgentDeferredWorkItemDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentDeferredWorkItemDto", ""
            ) as AgentDeferredWorkItemDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentDeleteEmailDraft
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentDeleteEmailDraft(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to agentDeleteTotpDevice
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentDeleteTotpDevice(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to agentExtractEmailAttachmentText
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentExtractEmailAttachmentText(response: ResponseContext): Promise<ExtractAttachmentTextResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ExtractAttachmentTextResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExtractAttachmentTextResult", ""
            ) as ExtractAttachmentTextResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ExtractAttachmentTextResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExtractAttachmentTextResult", ""
            ) as ExtractAttachmentTextResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentGenerateTotpDeviceCode
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentGenerateTotpDeviceCode(response: ResponseContext): Promise<TotpDeviceCodeDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TotpDeviceCodeDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TotpDeviceCodeDto", ""
            ) as TotpDeviceCodeDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TotpDeviceCodeDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TotpDeviceCodeDto", ""
            ) as TotpDeviceCodeDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentGetCapabilities
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentGetCapabilities(response: ResponseContext): Promise<AgentCapabilitiesDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AgentCapabilitiesDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentCapabilitiesDto", ""
            ) as AgentCapabilitiesDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AgentCapabilitiesDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentCapabilitiesDto", ""
            ) as AgentCapabilitiesDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentGetConversationV2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentGetConversationV2(response: ResponseContext): Promise<AgentConversationDetailV2Dto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AgentConversationDetailV2Dto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentConversationDetailV2Dto", ""
            ) as AgentConversationDetailV2Dto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AgentConversationDetailV2Dto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentConversationDetailV2Dto", ""
            ) as AgentConversationDetailV2Dto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentGetEmail
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentGetEmail(response: ResponseContext): Promise<Email > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Email = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Email", ""
            ) as Email;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Email = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Email", ""
            ) as Email;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentGetEmailDraft
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentGetEmailDraft(response: ResponseContext): Promise<EmailDraftDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EmailDraftDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailDraftDto", ""
            ) as EmailDraftDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EmailDraftDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailDraftDto", ""
            ) as EmailDraftDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentGetEmailSummary
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentGetEmailSummary(response: ResponseContext): Promise<EmailPreview > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EmailPreview = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailPreview", ""
            ) as EmailPreview;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EmailPreview = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailPreview", ""
            ) as EmailPreview;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentGetEmailThread
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentGetEmailThread(response: ResponseContext): Promise<ScopedEmailThread > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ScopedEmailThread = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ScopedEmailThread", ""
            ) as ScopedEmailThread;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ScopedEmailThread = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ScopedEmailThread", ""
            ) as ScopedEmailThread;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentGetLatestInboxEmail
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentGetLatestInboxEmail(response: ResponseContext): Promise<Email > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Email = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Email", ""
            ) as Email;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Email = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Email", ""
            ) as Email;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentGetNextWorkItem
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentGetNextWorkItem(response: ResponseContext): Promise<AgentWorkItemDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AgentWorkItemDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentWorkItemDto", ""
            ) as AgentWorkItemDto;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AgentApiErrorDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentApiErrorDto", ""
            ) as AgentApiErrorDto;
            throw new ApiException<AgentApiErrorDto>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AgentWorkItemDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentWorkItemDto", ""
            ) as AgentWorkItemDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentGetPhoneMessageThreadItems
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentGetPhoneMessageThreadItems(response: ResponseContext): Promise<PagePhoneMessageThreadItemProjection > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PagePhoneMessageThreadItemProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PagePhoneMessageThreadItemProjection", ""
            ) as PagePhoneMessageThreadItemProjection;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PagePhoneMessageThreadItemProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PagePhoneMessageThreadItemProjection", ""
            ) as PagePhoneMessageThreadItemProjection;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentGetPhoneMessageThreads
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentGetPhoneMessageThreads(response: ResponseContext): Promise<PagePhoneMessageThreadProjection > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PagePhoneMessageThreadProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PagePhoneMessageThreadProjection", ""
            ) as PagePhoneMessageThreadProjection;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PagePhoneMessageThreadProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PagePhoneMessageThreadProjection", ""
            ) as PagePhoneMessageThreadProjection;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentGetPhoneNumber
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentGetPhoneNumber(response: ResponseContext): Promise<PhoneNumberDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneNumberDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberDto", ""
            ) as PhoneNumberDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhoneNumberDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberDto", ""
            ) as PhoneNumberDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentGetPhoneNumbers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentGetPhoneNumbers(response: ResponseContext): Promise<PageAgentPhoneNumber > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PageAgentPhoneNumber = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageAgentPhoneNumber", ""
            ) as PageAgentPhoneNumber;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PageAgentPhoneNumber = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageAgentPhoneNumber", ""
            ) as PageAgentPhoneNumber;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentGetReceivedSmsMessage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentGetReceivedSmsMessage(response: ResponseContext): Promise<SmsDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SmsDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SmsDto", ""
            ) as SmsDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SmsDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SmsDto", ""
            ) as SmsDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentGetReceivedSmsMessages
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentGetReceivedSmsMessages(response: ResponseContext): Promise<PageSmsProjection > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PageSmsProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageSmsProjection", ""
            ) as PageSmsProjection;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PageSmsProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageSmsProjection", ""
            ) as PageSmsProjection;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentGetSentSmsMessage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentGetSentSmsMessage(response: ResponseContext): Promise<SentSmsDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SentSmsDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SentSmsDto", ""
            ) as SentSmsDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SentSmsDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SentSmsDto", ""
            ) as SentSmsDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentGetSentSmsMessages
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentGetSentSmsMessages(response: ResponseContext): Promise<PageSentSmsProjection > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PageSentSmsProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageSentSmsProjection", ""
            ) as PageSentSmsProjection;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PageSentSmsProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageSentSmsProjection", ""
            ) as PageSentSmsProjection;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentGetSmsConversation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentGetSmsConversation(response: ResponseContext): Promise<AgentSmsConversationDetailDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AgentSmsConversationDetailDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentSmsConversationDetailDto", ""
            ) as AgentSmsConversationDetailDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AgentSmsConversationDetailDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentSmsConversationDetailDto", ""
            ) as AgentSmsConversationDetailDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentGetTotpDevice
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentGetTotpDevice(response: ResponseContext): Promise<TotpDeviceDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TotpDeviceDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TotpDeviceDto", ""
            ) as TotpDeviceDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TotpDeviceDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TotpDeviceDto", ""
            ) as TotpDeviceDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentGetTotpDeviceBy
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentGetTotpDeviceBy(response: ResponseContext): Promise<TotpDeviceOptionalDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TotpDeviceOptionalDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TotpDeviceOptionalDto", ""
            ) as TotpDeviceOptionalDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TotpDeviceOptionalDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TotpDeviceOptionalDto", ""
            ) as TotpDeviceOptionalDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentGetTotpDevices
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentGetTotpDevices(response: ResponseContext): Promise<PageTotpDeviceProjection > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PageTotpDeviceProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageTotpDeviceProjection", ""
            ) as PageTotpDeviceProjection;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PageTotpDeviceProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageTotpDeviceProjection", ""
            ) as PageTotpDeviceProjection;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentListAccessibleInboxes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentListAccessibleInboxes(response: ResponseContext): Promise<AccessibleInboxList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AccessibleInboxList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccessibleInboxList", ""
            ) as AccessibleInboxList;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AccessibleInboxList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AccessibleInboxList", ""
            ) as AccessibleInboxList;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentListAutomationEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentListAutomationEvents(response: ResponseContext): Promise<AgentAutomationEventPageDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AgentAutomationEventPageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentAutomationEventPageDto", ""
            ) as AgentAutomationEventPageDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AgentAutomationEventPageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentAutomationEventPageDto", ""
            ) as AgentAutomationEventPageDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentListConversationsV2
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentListConversationsV2(response: ResponseContext): Promise<AgentConversationCursorPageDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AgentConversationCursorPageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentConversationCursorPageDto", ""
            ) as AgentConversationCursorPageDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AgentConversationCursorPageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentConversationCursorPageDto", ""
            ) as AgentConversationCursorPageDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentListEmailAttachments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentListEmailAttachments(response: ResponseContext): Promise<Array<AttachmentMetaData> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<AttachmentMetaData> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<AttachmentMetaData>", ""
            ) as Array<AttachmentMetaData>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<AttachmentMetaData> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<AttachmentMetaData>", ""
            ) as Array<AttachmentMetaData>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentListEmailDrafts
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentListEmailDrafts(response: ResponseContext): Promise<PageEmailDraftProjection > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PageEmailDraftProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageEmailDraftProjection", ""
            ) as PageEmailDraftProjection;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PageEmailDraftProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageEmailDraftProjection", ""
            ) as PageEmailDraftProjection;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentListInboxEmails
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentListInboxEmails(response: ResponseContext): Promise<PageEmailPreview > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PageEmailPreview = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageEmailPreview", ""
            ) as PageEmailPreview;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PageEmailPreview = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageEmailPreview", ""
            ) as PageEmailPreview;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentListInboxThreads
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentListInboxThreads(response: ResponseContext): Promise<PageEmailThreadProjection > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PageEmailThreadProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageEmailThreadProjection", ""
            ) as PageEmailThreadProjection;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PageEmailThreadProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageEmailThreadProjection", ""
            ) as PageEmailThreadProjection;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentListSmsConversations
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentListSmsConversations(response: ResponseContext): Promise<AgentSmsConversationCursorPageDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AgentSmsConversationCursorPageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentSmsConversationCursorPageDto", ""
            ) as AgentSmsConversationCursorPageDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AgentSmsConversationCursorPageDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentSmsConversationCursorPageDto", ""
            ) as AgentSmsConversationCursorPageDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentPrepareWorkItemReply
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentPrepareWorkItemReply(response: ResponseContext): Promise<AgentPreparedReplyDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AgentPreparedReplyDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentPreparedReplyDto", ""
            ) as AgentPreparedReplyDto;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: AgentApiErrorDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentApiErrorDto", ""
            ) as AgentApiErrorDto;
            throw new ApiException<AgentApiErrorDto>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AgentPreparedReplyDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentPreparedReplyDto", ""
            ) as AgentPreparedReplyDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentReleaseConversationClaim
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentReleaseConversationClaim(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to agentReleaseSmsClaim
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentReleaseSmsClaim(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to agentRenewConversationClaim
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentRenewConversationClaim(response: ResponseContext): Promise<AgentConversationClaimDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AgentConversationClaimDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentConversationClaimDto", ""
            ) as AgentConversationClaimDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AgentConversationClaimDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentConversationClaimDto", ""
            ) as AgentConversationClaimDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentRenewSmsClaim
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentRenewSmsClaim(response: ResponseContext): Promise<AgentConversationClaimDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AgentConversationClaimDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentConversationClaimDto", ""
            ) as AgentConversationClaimDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AgentConversationClaimDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentConversationClaimDto", ""
            ) as AgentConversationClaimDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentReplyToEmail
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentReplyToEmail(response: ResponseContext): Promise<SentEmailDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SentEmailDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SentEmailDto", ""
            ) as SentEmailDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SentEmailDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SentEmailDto", ""
            ) as SentEmailDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentReplyToSms
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentReplyToSms(response: ResponseContext): Promise<SentSmsDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: SentSmsDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SentSmsDto", ""
            ) as SentSmsDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SentSmsDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SentSmsDto", ""
            ) as SentSmsDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentReportWorkerHeartbeat
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentReportWorkerHeartbeat(response: ResponseContext): Promise<AgentWorkerHeartbeatDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AgentWorkerHeartbeatDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentWorkerHeartbeatDto", ""
            ) as AgentWorkerHeartbeatDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AgentWorkerHeartbeatDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentWorkerHeartbeatDto", ""
            ) as AgentWorkerHeartbeatDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentRequestConversationHandoff
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentRequestConversationHandoff(response: ResponseContext): Promise<AgentConversationHandoffDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: AgentConversationHandoffDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentConversationHandoffDto", ""
            ) as AgentConversationHandoffDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AgentConversationHandoffDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentConversationHandoffDto", ""
            ) as AgentConversationHandoffDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentRequestSmsHandoff
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentRequestSmsHandoff(response: ResponseContext): Promise<AgentConversationHandoffDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: AgentConversationHandoffDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentConversationHandoffDto", ""
            ) as AgentConversationHandoffDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AgentConversationHandoffDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AgentConversationHandoffDto", ""
            ) as AgentConversationHandoffDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentSearchInboxEmails
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentSearchInboxEmails(response: ResponseContext): Promise<Array<EmailPreview> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<EmailPreview> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<EmailPreview>", ""
            ) as Array<EmailPreview>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<EmailPreview> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<EmailPreview>", ""
            ) as Array<EmailPreview>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentSendEmailDraft
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentSendEmailDraft(response: ResponseContext): Promise<SentEmailDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: SentEmailDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SentEmailDto", ""
            ) as SentEmailDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SentEmailDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SentEmailDto", ""
            ) as SentEmailDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentSendSms
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentSendSms(response: ResponseContext): Promise<SentSmsDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: SentSmsDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SentSmsDto", ""
            ) as SentSmsDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SentSmsDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SentSmsDto", ""
            ) as SentSmsDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentUpdateEmailDraft
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentUpdateEmailDraft(response: ResponseContext): Promise<EmailDraftDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EmailDraftDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailDraftDto", ""
            ) as EmailDraftDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EmailDraftDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmailDraftDto", ""
            ) as EmailDraftDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentUpdateInbox
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentUpdateInbox(response: ResponseContext): Promise<InboxDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InboxDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxDto", ""
            ) as InboxDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InboxDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxDto", ""
            ) as InboxDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to agentUpdateTotpDevice
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async agentUpdateTotpDevice(response: ResponseContext): Promise<TotpDeviceDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TotpDeviceDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TotpDeviceDto", ""
            ) as TotpDeviceDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TotpDeviceDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TotpDeviceDto", ""
            ) as TotpDeviceDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
