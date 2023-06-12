import { ResponseContext, RequestContext, HttpFile } from '../http/http.ts';
import * as models from '../models/all.ts';
import { Configuration} from '../configuration.ts'

import { AbstractWebhookPayload } from '../models/AbstractWebhookPayload.ts';
import { AliasDto } from '../models/AliasDto.ts';
import { AliasProjection } from '../models/AliasProjection.ts';
import { AttachmentEntity } from '../models/AttachmentEntity.ts';
import { AttachmentMetaData } from '../models/AttachmentMetaData.ts';
import { AttachmentProjection } from '../models/AttachmentProjection.ts';
import { BasicAuthOptions } from '../models/BasicAuthOptions.ts';
import { BounceProjection } from '../models/BounceProjection.ts';
import { BounceRecipientProjection } from '../models/BounceRecipientProjection.ts';
import { BouncedEmailDto } from '../models/BouncedEmailDto.ts';
import { BouncedRecipientDto } from '../models/BouncedRecipientDto.ts';
import { BulkSendEmailOptions } from '../models/BulkSendEmailOptions.ts';
import { Complaint } from '../models/Complaint.ts';
import { ConditionOption } from '../models/ConditionOption.ts';
import { ConnectorDto } from '../models/ConnectorDto.ts';
import { ConnectorProjection } from '../models/ConnectorProjection.ts';
import { ConnectorSyncEventDto } from '../models/ConnectorSyncEventDto.ts';
import { ConnectorSyncEventProjection } from '../models/ConnectorSyncEventProjection.ts';
import { ConnectorSyncRequestResult } from '../models/ConnectorSyncRequestResult.ts';
import { ConnectorSyncRequestResultException } from '../models/ConnectorSyncRequestResultException.ts';
import { ConnectorSyncRequestResultExceptionCause } from '../models/ConnectorSyncRequestResultExceptionCause.ts';
import { ConnectorSyncRequestResultExceptionCauseStackTrace } from '../models/ConnectorSyncRequestResultExceptionCauseStackTrace.ts';
import { ConnectorSyncRequestResultExceptionCauseSuppressed } from '../models/ConnectorSyncRequestResultExceptionCauseSuppressed.ts';
import { ConnectorSyncResult } from '../models/ConnectorSyncResult.ts';
import { ContactDto } from '../models/ContactDto.ts';
import { ContactProjection } from '../models/ContactProjection.ts';
import { ContentMatchOptions } from '../models/ContentMatchOptions.ts';
import { CountDto } from '../models/CountDto.ts';
import { CreateAliasOptions } from '../models/CreateAliasOptions.ts';
import { CreateConnectorImapOptions } from '../models/CreateConnectorImapOptions.ts';
import { CreateConnectorOptions } from '../models/CreateConnectorOptions.ts';
import { CreateContactOptions } from '../models/CreateContactOptions.ts';
import { CreateDomainOptions } from '../models/CreateDomainOptions.ts';
import { CreateEmergencyAddressOptions } from '../models/CreateEmergencyAddressOptions.ts';
import { CreateGroupOptions } from '../models/CreateGroupOptions.ts';
import { CreateInboxDto } from '../models/CreateInboxDto.ts';
import { CreateInboxForwarderOptions } from '../models/CreateInboxForwarderOptions.ts';
import { CreateInboxReplierOptions } from '../models/CreateInboxReplierOptions.ts';
import { CreateInboxRulesetOptions } from '../models/CreateInboxRulesetOptions.ts';
import { CreateTemplateOptions } from '../models/CreateTemplateOptions.ts';
import { CreateTrackingPixelOptions } from '../models/CreateTrackingPixelOptions.ts';
import { CreateWebhookOptions } from '../models/CreateWebhookOptions.ts';
import { DNSLookupOptions } from '../models/DNSLookupOptions.ts';
import { DNSLookupResult } from '../models/DNSLookupResult.ts';
import { DNSLookupResults } from '../models/DNSLookupResults.ts';
import { DeliveryStatusDto } from '../models/DeliveryStatusDto.ts';
import { DescribeDomainOptions } from '../models/DescribeDomainOptions.ts';
import { DescribeMailServerDomainResult } from '../models/DescribeMailServerDomainResult.ts';
import { DomainDto } from '../models/DomainDto.ts';
import { DomainIssuesDto } from '../models/DomainIssuesDto.ts';
import { DomainNameRecord } from '../models/DomainNameRecord.ts';
import { DomainPreview } from '../models/DomainPreview.ts';
import { DownloadAttachmentDto } from '../models/DownloadAttachmentDto.ts';
import { Email } from '../models/Email.ts';
import { EmailAnalysis } from '../models/EmailAnalysis.ts';
import { EmailContentMatchResult } from '../models/EmailContentMatchResult.ts';
import { EmailHtmlDto } from '../models/EmailHtmlDto.ts';
import { EmailLinksResult } from '../models/EmailLinksResult.ts';
import { EmailPreview } from '../models/EmailPreview.ts';
import { EmailPreviewUrls } from '../models/EmailPreviewUrls.ts';
import { EmailProjection } from '../models/EmailProjection.ts';
import { EmailRecipients } from '../models/EmailRecipients.ts';
import { EmailTextLinesResult } from '../models/EmailTextLinesResult.ts';
import { EmailValidationRequestDto } from '../models/EmailValidationRequestDto.ts';
import { EmailVerificationResult } from '../models/EmailVerificationResult.ts';
import { EmergencyAddress } from '../models/EmergencyAddress.ts';
import { EmergencyAddressDto } from '../models/EmergencyAddressDto.ts';
import { EmptyResponseDto } from '../models/EmptyResponseDto.ts';
import { ExpirationDefaults } from '../models/ExpirationDefaults.ts';
import { ExpiredInboxDto } from '../models/ExpiredInboxDto.ts';
import { ExpiredInboxRecordProjection } from '../models/ExpiredInboxRecordProjection.ts';
import { ExportLink } from '../models/ExportLink.ts';
import { ExportOptions } from '../models/ExportOptions.ts';
import { FilterBouncedRecipientsOptions } from '../models/FilterBouncedRecipientsOptions.ts';
import { FilterBouncedRecipientsResult } from '../models/FilterBouncedRecipientsResult.ts';
import { FlushExpiredInboxesResult } from '../models/FlushExpiredInboxesResult.ts';
import { ForwardEmailOptions } from '../models/ForwardEmailOptions.ts';
import { GravatarUrl } from '../models/GravatarUrl.ts';
import { GroupContactsDto } from '../models/GroupContactsDto.ts';
import { GroupDto } from '../models/GroupDto.ts';
import { GroupProjection } from '../models/GroupProjection.ts';
import { HTMLValidationResult } from '../models/HTMLValidationResult.ts';
import { IPAddressResult } from '../models/IPAddressResult.ts';
import { ImapFlagOperationOptions } from '../models/ImapFlagOperationOptions.ts';
import { ImapSmtpAccessDetails } from '../models/ImapSmtpAccessDetails.ts';
import { InboxByEmailAddressResult } from '../models/InboxByEmailAddressResult.ts';
import { InboxByNameResult } from '../models/InboxByNameResult.ts';
import { InboxDto } from '../models/InboxDto.ts';
import { InboxExistsDto } from '../models/InboxExistsDto.ts';
import { InboxForwarderDto } from '../models/InboxForwarderDto.ts';
import { InboxForwarderEventProjection } from '../models/InboxForwarderEventProjection.ts';
import { InboxForwarderTestOptions } from '../models/InboxForwarderTestOptions.ts';
import { InboxForwarderTestResult } from '../models/InboxForwarderTestResult.ts';
import { InboxIdItem } from '../models/InboxIdItem.ts';
import { InboxIdsResult } from '../models/InboxIdsResult.ts';
import { InboxPreview } from '../models/InboxPreview.ts';
import { InboxReplierDto } from '../models/InboxReplierDto.ts';
import { InboxReplierEventProjection } from '../models/InboxReplierEventProjection.ts';
import { InboxRulesetDto } from '../models/InboxRulesetDto.ts';
import { InboxRulesetTestOptions } from '../models/InboxRulesetTestOptions.ts';
import { InboxRulesetTestResult } from '../models/InboxRulesetTestResult.ts';
import { InlineObject } from '../models/InlineObject.ts';
import { InlineObject1 } from '../models/InlineObject1.ts';
import { JSONSchemaDto } from '../models/JSONSchemaDto.ts';
import { ListUnsubscribeRecipientProjection } from '../models/ListUnsubscribeRecipientProjection.ts';
import { MatchOption } from '../models/MatchOption.ts';
import { MatchOptions } from '../models/MatchOptions.ts';
import { MissedEmailDto } from '../models/MissedEmailDto.ts';
import { MissedEmailProjection } from '../models/MissedEmailProjection.ts';
import { NameServerRecord } from '../models/NameServerRecord.ts';
import { OrganizationInboxProjection } from '../models/OrganizationInboxProjection.ts';
import { PageAlias } from '../models/PageAlias.ts';
import { PageAttachmentEntity } from '../models/PageAttachmentEntity.ts';
import { PageBouncedEmail } from '../models/PageBouncedEmail.ts';
import { PageBouncedRecipients } from '../models/PageBouncedRecipients.ts';
import { PageComplaint } from '../models/PageComplaint.ts';
import { PageConnector } from '../models/PageConnector.ts';
import { PageConnectorSyncEvents } from '../models/PageConnectorSyncEvents.ts';
import { PageContactProjection } from '../models/PageContactProjection.ts';
import { PageDeliveryStatus } from '../models/PageDeliveryStatus.ts';
import { PageEmailPreview } from '../models/PageEmailPreview.ts';
import { PageEmailProjection } from '../models/PageEmailProjection.ts';
import { PageEmailValidationRequest } from '../models/PageEmailValidationRequest.ts';
import { PageExpiredInboxRecordProjection } from '../models/PageExpiredInboxRecordProjection.ts';
import { PageGroupProjection } from '../models/PageGroupProjection.ts';
import { PageInboxForwarderDto } from '../models/PageInboxForwarderDto.ts';
import { PageInboxForwarderEvents } from '../models/PageInboxForwarderEvents.ts';
import { PageInboxProjection } from '../models/PageInboxProjection.ts';
import { PageInboxReplierDto } from '../models/PageInboxReplierDto.ts';
import { PageInboxReplierEvents } from '../models/PageInboxReplierEvents.ts';
import { PageInboxRulesetDto } from '../models/PageInboxRulesetDto.ts';
import { PageListUnsubscribeRecipients } from '../models/PageListUnsubscribeRecipients.ts';
import { PageMissedEmailProjection } from '../models/PageMissedEmailProjection.ts';
import { PageOrganizationInboxProjection } from '../models/PageOrganizationInboxProjection.ts';
import { PagePhoneNumberProjection } from '../models/PagePhoneNumberProjection.ts';
import { PageScheduledJobs } from '../models/PageScheduledJobs.ts';
import { PageSentEmailProjection } from '../models/PageSentEmailProjection.ts';
import { PageSentEmailWithQueueProjection } from '../models/PageSentEmailWithQueueProjection.ts';
import { PageSmsProjection } from '../models/PageSmsProjection.ts';
import { PageTemplateProjection } from '../models/PageTemplateProjection.ts';
import { PageThreadProjection } from '../models/PageThreadProjection.ts';
import { PageTrackingPixelProjection } from '../models/PageTrackingPixelProjection.ts';
import { PageUnknownMissedEmailProjection } from '../models/PageUnknownMissedEmailProjection.ts';
import { PageWebhookProjection } from '../models/PageWebhookProjection.ts';
import { PageWebhookResult } from '../models/PageWebhookResult.ts';
import { PageableObject } from '../models/PageableObject.ts';
import { PhoneNumberDto } from '../models/PhoneNumberDto.ts';
import { PhoneNumberProjection } from '../models/PhoneNumberProjection.ts';
import { PhonePlanDto } from '../models/PhonePlanDto.ts';
import { RawEmailJson } from '../models/RawEmailJson.ts';
import { Recipient } from '../models/Recipient.ts';
import { ReplyToAliasEmailOptions } from '../models/ReplyToAliasEmailOptions.ts';
import { ReplyToEmailOptions } from '../models/ReplyToEmailOptions.ts';
import { ScheduledJob } from '../models/ScheduledJob.ts';
import { ScheduledJobDto } from '../models/ScheduledJobDto.ts';
import { SendEmailOptions } from '../models/SendEmailOptions.ts';
import { SendSMTPEnvelopeOptions } from '../models/SendSMTPEnvelopeOptions.ts';
import { SendWithQueueResult } from '../models/SendWithQueueResult.ts';
import { Sender } from '../models/Sender.ts';
import { SentEmailDto } from '../models/SentEmailDto.ts';
import { SentEmailProjection } from '../models/SentEmailProjection.ts';
import { SetInboxFavouritedOptions } from '../models/SetInboxFavouritedOptions.ts';
import { SimpleSendEmailOptions } from '../models/SimpleSendEmailOptions.ts';
import { SmsDto } from '../models/SmsDto.ts';
import { SmsMatchOption } from '../models/SmsMatchOption.ts';
import { SmsPreview } from '../models/SmsPreview.ts';
import { SmsProjection } from '../models/SmsProjection.ts';
import { Sort } from '../models/Sort.ts';
import { TemplateDto } from '../models/TemplateDto.ts';
import { TemplatePreview } from '../models/TemplatePreview.ts';
import { TemplateProjection } from '../models/TemplateProjection.ts';
import { TemplateVariable } from '../models/TemplateVariable.ts';
import { TestNewInboxForwarderOptions } from '../models/TestNewInboxForwarderOptions.ts';
import { TestNewInboxRulesetOptions } from '../models/TestNewInboxRulesetOptions.ts';
import { TestPhoneNumberOptions } from '../models/TestPhoneNumberOptions.ts';
import { ThreadProjection } from '../models/ThreadProjection.ts';
import { TrackingPixelDto } from '../models/TrackingPixelDto.ts';
import { TrackingPixelProjection } from '../models/TrackingPixelProjection.ts';
import { UnknownMissedEmailProjection } from '../models/UnknownMissedEmailProjection.ts';
import { UnreadCount } from '../models/UnreadCount.ts';
import { UnseenErrorCountDto } from '../models/UnseenErrorCountDto.ts';
import { UpdateAliasOptions } from '../models/UpdateAliasOptions.ts';
import { UpdateDomainOptions } from '../models/UpdateDomainOptions.ts';
import { UpdateGroupContacts } from '../models/UpdateGroupContacts.ts';
import { UpdateInboxOptions } from '../models/UpdateInboxOptions.ts';
import { UpdateInboxReplierOptions } from '../models/UpdateInboxReplierOptions.ts';
import { UploadAttachmentOptions } from '../models/UploadAttachmentOptions.ts';
import { UserInfoDto } from '../models/UserInfoDto.ts';
import { ValidateEmailAddressListOptions } from '../models/ValidateEmailAddressListOptions.ts';
import { ValidateEmailAddressListResult } from '../models/ValidateEmailAddressListResult.ts';
import { ValidationDto } from '../models/ValidationDto.ts';
import { ValidationMessage } from '../models/ValidationMessage.ts';
import { VerifyEmailAddressOptions } from '../models/VerifyEmailAddressOptions.ts';
import { VerifyWebhookSignatureOptions } from '../models/VerifyWebhookSignatureOptions.ts';
import { VerifyWebhookSignatureResults } from '../models/VerifyWebhookSignatureResults.ts';
import { WaitForConditions } from '../models/WaitForConditions.ts';
import { WaitForSingleSmsOptions } from '../models/WaitForSingleSmsOptions.ts';
import { WaitForSmsConditions } from '../models/WaitForSmsConditions.ts';
import { WebhookBouncePayload } from '../models/WebhookBouncePayload.ts';
import { WebhookBounceRecipientPayload } from '../models/WebhookBounceRecipientPayload.ts';
import { WebhookDeliveryStatusPayload } from '../models/WebhookDeliveryStatusPayload.ts';
import { WebhookDto } from '../models/WebhookDto.ts';
import { WebhookEmailOpenedPayload } from '../models/WebhookEmailOpenedPayload.ts';
import { WebhookEmailReadPayload } from '../models/WebhookEmailReadPayload.ts';
import { WebhookHeaderNameValue } from '../models/WebhookHeaderNameValue.ts';
import { WebhookHeaders } from '../models/WebhookHeaders.ts';
import { WebhookNewAttachmentPayload } from '../models/WebhookNewAttachmentPayload.ts';
import { WebhookNewContactPayload } from '../models/WebhookNewContactPayload.ts';
import { WebhookNewEmailPayload } from '../models/WebhookNewEmailPayload.ts';
import { WebhookNewSmsPayload } from '../models/WebhookNewSmsPayload.ts';
import { WebhookProjection } from '../models/WebhookProjection.ts';
import { WebhookRedriveResult } from '../models/WebhookRedriveResult.ts';
import { WebhookResultDto } from '../models/WebhookResultDto.ts';
import { WebhookTestRequest } from '../models/WebhookTestRequest.ts';
import { WebhookTestResponse } from '../models/WebhookTestResponse.ts';
import { WebhookTestResult } from '../models/WebhookTestResult.ts';

import { ObservableAliasControllerApi } from "./ObservableAPI.ts";
import { AliasControllerApiRequestFactory, AliasControllerApiResponseProcessor} from "../apis/AliasControllerApi.ts";

export interface AliasControllerApiCreateAliasRequest {
    /**
     * 
     * @type CreateAliasOptions
     * @memberof AliasControllerApicreateAlias
     */
    createAliasOptions: CreateAliasOptions
}

export interface AliasControllerApiDeleteAliasRequest {
    /**
     * 
     * @type string
     * @memberof AliasControllerApideleteAlias
     */
    aliasId: string
}

export interface AliasControllerApiGetAliasRequest {
    /**
     * 
     * @type string
     * @memberof AliasControllerApigetAlias
     */
    aliasId: string
}

export interface AliasControllerApiGetAliasEmailsRequest {
    /**
     * 
     * @type string
     * @memberof AliasControllerApigetAliasEmails
     */
    aliasId: string
    /**
     * Optional page index alias email list pagination
     * @type number
     * @memberof AliasControllerApigetAliasEmails
     */
    page?: number
    /**
     * Optional page size alias email list pagination
     * @type number
     * @memberof AliasControllerApigetAliasEmails
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof AliasControllerApigetAliasEmails
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Optional filter by sent after given date time
     * @type Date
     * @memberof AliasControllerApigetAliasEmails
     */
    since?: Date
    /**
     * Optional filter by sent before given date time
     * @type Date
     * @memberof AliasControllerApigetAliasEmails
     */
    before?: Date
}

export interface AliasControllerApiGetAliasThreadsRequest {
    /**
     * 
     * @type string
     * @memberof AliasControllerApigetAliasThreads
     */
    aliasId: string
    /**
     * Optional page index in thread list pagination
     * @type number
     * @memberof AliasControllerApigetAliasThreads
     */
    page?: number
    /**
     * Optional page size in thread list pagination
     * @type number
     * @memberof AliasControllerApigetAliasThreads
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof AliasControllerApigetAliasThreads
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Optional filter by sent after given date time
     * @type Date
     * @memberof AliasControllerApigetAliasThreads
     */
    since?: Date
    /**
     * Optional filter by sent before given date time
     * @type Date
     * @memberof AliasControllerApigetAliasThreads
     */
    before?: Date
}

export interface AliasControllerApiGetAliasesRequest {
    /**
     * Optional page index in alias list pagination
     * @type number
     * @memberof AliasControllerApigetAliases
     */
    page?: number
    /**
     * Optional page size in alias list pagination
     * @type number
     * @memberof AliasControllerApigetAliases
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof AliasControllerApigetAliases
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof AliasControllerApigetAliases
     */
    since?: Date
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof AliasControllerApigetAliases
     */
    before?: Date
}

export interface AliasControllerApiReplyToAliasEmailRequest {
    /**
     * ID of the alias that email belongs to
     * @type string
     * @memberof AliasControllerApireplyToAliasEmail
     */
    aliasId: string
    /**
     * ID of the email that should be replied to
     * @type string
     * @memberof AliasControllerApireplyToAliasEmail
     */
    emailId: string
    /**
     * 
     * @type ReplyToAliasEmailOptions
     * @memberof AliasControllerApireplyToAliasEmail
     */
    replyToAliasEmailOptions: ReplyToAliasEmailOptions
}

export interface AliasControllerApiSendAliasEmailRequest {
    /**
     * 
     * @type string
     * @memberof AliasControllerApisendAliasEmail
     */
    aliasId: string
    /**
     * 
     * @type SendEmailOptions
     * @memberof AliasControllerApisendAliasEmail
     */
    sendEmailOptions: SendEmailOptions
}

export interface AliasControllerApiUpdateAliasRequest {
    /**
     * 
     * @type string
     * @memberof AliasControllerApiupdateAlias
     */
    aliasId: string
    /**
     * 
     * @type UpdateAliasOptions
     * @memberof AliasControllerApiupdateAlias
     */
    updateAliasOptions: UpdateAliasOptions
}

export class ObjectAliasControllerApi {
    private api: ObservableAliasControllerApi

    public constructor(configuration: Configuration, requestFactory?: AliasControllerApiRequestFactory, responseProcessor?: AliasControllerApiResponseProcessor) {
        this.api = new ObservableAliasControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Email aliases use a MailSlurp randomly generated email address (or a custom domain inbox that you provide) to mask or proxy a real email address. Emails sent to the alias address will be forwarded to the hidden email address it was created for. If you want to send a reply use the threadId attached
     * Create an email alias. Must be verified by clicking link inside verification email that will be sent to the address. Once verified the alias will be active.
     * @param param the request object
     */
    public createAlias(param: AliasControllerApiCreateAliasRequest, options?: Configuration): Promise<AliasDto> {
        return this.api.createAlias(param.createAliasOptions,  options).toPromise();
    }

    /**
     * Delete an email alias
     * @param param the request object
     */
    public deleteAlias(param: AliasControllerApiDeleteAliasRequest, options?: Configuration): Promise<void> {
        return this.api.deleteAlias(param.aliasId,  options).toPromise();
    }

    /**
     * Get an email alias by ID
     * Get an email alias
     * @param param the request object
     */
    public getAlias(param: AliasControllerApiGetAliasRequest, options?: Configuration): Promise<AliasDto> {
        return this.api.getAlias(param.aliasId,  options).toPromise();
    }

    /**
     * Get paginated emails for an alias by ID
     * Get emails for an alias
     * @param param the request object
     */
    public getAliasEmails(param: AliasControllerApiGetAliasEmailsRequest, options?: Configuration): Promise<PageEmailProjection> {
        return this.api.getAliasEmails(param.aliasId, param.page, param.size, param.sort, param.since, param.before,  options).toPromise();
    }

    /**
     * Returns threads created for an email alias in paginated form
     * Get threads created for an alias
     * @param param the request object
     */
    public getAliasThreads(param: AliasControllerApiGetAliasThreadsRequest, options?: Configuration): Promise<PageThreadProjection> {
        return this.api.getAliasThreads(param.aliasId, param.page, param.size, param.sort, param.since, param.before,  options).toPromise();
    }

    /**
     * Get all email aliases in paginated form
     * Get all email aliases you have created
     * @param param the request object
     */
    public getAliases(param: AliasControllerApiGetAliasesRequest, options?: Configuration): Promise<PageAlias> {
        return this.api.getAliases(param.page, param.size, param.sort, param.since, param.before,  options).toPromise();
    }

    /**
     * Send the reply to the email sender or reply-to and include same subject cc bcc etc. Reply to an email and the contents will be sent with the existing subject to the emails `to`, `cc`, and `bcc`.
     * Reply to an email
     * @param param the request object
     */
    public replyToAliasEmail(param: AliasControllerApiReplyToAliasEmailRequest, options?: Configuration): Promise<SentEmailDto> {
        return this.api.replyToAliasEmail(param.aliasId, param.emailId, param.replyToAliasEmailOptions,  options).toPromise();
    }

    /**
     * Send an email from an alias. Replies to the email will be forwarded to the alias masked email address
     * Send an email from an alias inbox
     * @param param the request object
     */
    public sendAliasEmail(param: AliasControllerApiSendAliasEmailRequest, options?: Configuration): Promise<SentEmailDto> {
        return this.api.sendAliasEmail(param.aliasId, param.sendEmailOptions,  options).toPromise();
    }

    /**
     * Update an email alias
     * @param param the request object
     */
    public updateAlias(param: AliasControllerApiUpdateAliasRequest, options?: Configuration): Promise<AliasDto> {
        return this.api.updateAlias(param.aliasId, param.updateAliasOptions,  options).toPromise();
    }

}

import { ObservableAttachmentControllerApi } from "./ObservableAPI.ts";
import { AttachmentControllerApiRequestFactory, AttachmentControllerApiResponseProcessor} from "../apis/AttachmentControllerApi.ts";

export interface AttachmentControllerApiDeleteAllAttachmentsRequest {
}

export interface AttachmentControllerApiDeleteAttachmentRequest {
    /**
     * ID of attachment
     * @type string
     * @memberof AttachmentControllerApideleteAttachment
     */
    attachmentId: string
}

export interface AttachmentControllerApiDownloadAttachmentAsBase64EncodedRequest {
    /**
     * ID of attachment
     * @type string
     * @memberof AttachmentControllerApidownloadAttachmentAsBase64Encoded
     */
    attachmentId: string
}

export interface AttachmentControllerApiDownloadAttachmentAsBytesRequest {
    /**
     * ID of attachment
     * @type string
     * @memberof AttachmentControllerApidownloadAttachmentAsBytes
     */
    attachmentId: string
}

export interface AttachmentControllerApiGetAttachmentRequest {
    /**
     * ID of attachment
     * @type string
     * @memberof AttachmentControllerApigetAttachment
     */
    attachmentId: string
}

export interface AttachmentControllerApiGetAttachmentInfoRequest {
    /**
     * ID of attachment
     * @type string
     * @memberof AttachmentControllerApigetAttachmentInfo
     */
    attachmentId: string
}

export interface AttachmentControllerApiGetAttachmentsRequest {
    /**
     * Optional page index for list pagination
     * @type number
     * @memberof AttachmentControllerApigetAttachments
     */
    page?: number
    /**
     * Optional page size for list pagination
     * @type number
     * @memberof AttachmentControllerApigetAttachments
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof AttachmentControllerApigetAttachments
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Optional file name and content type search filter
     * @type string
     * @memberof AttachmentControllerApigetAttachments
     */
    fileNameFilter?: string
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof AttachmentControllerApigetAttachments
     */
    since?: Date
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof AttachmentControllerApigetAttachments
     */
    before?: Date
}

export interface AttachmentControllerApiUploadAttachmentRequest {
    /**
     * 
     * @type UploadAttachmentOptions
     * @memberof AttachmentControllerApiuploadAttachment
     */
    uploadAttachmentOptions: UploadAttachmentOptions
}

export interface AttachmentControllerApiUploadAttachmentBytesRequest {
    /**
     * 
     * @type InlineObject1
     * @memberof AttachmentControllerApiuploadAttachmentBytes
     */
    inlineObject1: InlineObject1
    /**
     * Optional contentType for file. For instance &#x60;application/pdf&#x60;
     * @type string
     * @memberof AttachmentControllerApiuploadAttachmentBytes
     */
    contentType?: string
    /**
     * Optional filename to save upload with
     * @type string
     * @memberof AttachmentControllerApiuploadAttachmentBytes
     */
    filename?: string
}

export interface AttachmentControllerApiUploadMultipartFormRequest {
    /**
     * Optional content type of attachment
     * @type string
     * @memberof AttachmentControllerApiuploadMultipartForm
     */
    contentType?: string
    /**
     * Optional name of file
     * @type string
     * @memberof AttachmentControllerApiuploadMultipartForm
     */
    filename?: string
    /**
     * Optional content type header of attachment
     * @type string
     * @memberof AttachmentControllerApiuploadMultipartForm
     */
    xFilename?: string
    /**
     * 
     * @type InlineObject
     * @memberof AttachmentControllerApiuploadMultipartForm
     */
    inlineObject?: InlineObject
}

export class ObjectAttachmentControllerApi {
    private api: ObservableAttachmentControllerApi

    public constructor(configuration: Configuration, requestFactory?: AttachmentControllerApiRequestFactory, responseProcessor?: AttachmentControllerApiResponseProcessor) {
        this.api = new ObservableAttachmentControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete all attachments
     * @param param the request object
     */
    public deleteAllAttachments(param: AttachmentControllerApiDeleteAllAttachmentsRequest, options?: Configuration): Promise<void> {
        return this.api.deleteAllAttachments( options).toPromise();
    }

    /**
     * Delete an attachment
     * @param param the request object
     */
    public deleteAttachment(param: AttachmentControllerApiDeleteAttachmentRequest, options?: Configuration): Promise<void> {
        return this.api.deleteAttachment(param.attachmentId,  options).toPromise();
    }

    /**
     * Returns the specified attachment for a given email as a base 64 encoded string. The response type is application/json. This method is similar to the `downloadAttachment` method but allows some clients to get around issues with binary responses.
     * Get email attachment as base64 encoded string as alternative to binary responses. To read the content decode the Base64 encoded contents.
     * @param param the request object
     */
    public downloadAttachmentAsBase64Encoded(param: AttachmentControllerApiDownloadAttachmentAsBase64EncodedRequest, options?: Configuration): Promise<DownloadAttachmentDto> {
        return this.api.downloadAttachmentAsBase64Encoded(param.attachmentId,  options).toPromise();
    }

    /**
     * Returns the specified attachment for a given email as a stream / array of bytes. You can find attachment ids in email responses endpoint responses. The response type is application/octet-stream.
     * Download attachments. Get email attachment bytes. If you have trouble with byte responses try the `downloadAttachmentBase64` response endpoints.
     * @param param the request object
     */
    public downloadAttachmentAsBytes(param: AttachmentControllerApiDownloadAttachmentAsBytesRequest, options?: Configuration): Promise<void> {
        return this.api.downloadAttachmentAsBytes(param.attachmentId,  options).toPromise();
    }

    /**
     * Get an attachment entity
     * @param param the request object
     */
    public getAttachment(param: AttachmentControllerApiGetAttachmentRequest, options?: Configuration): Promise<AttachmentEntity> {
        return this.api.getAttachment(param.attachmentId,  options).toPromise();
    }

    /**
     * Returns the metadata for an attachment. It is saved separately to the content of the attachment. Contains properties `name` and `content-type` and `content-length` in bytes for a given attachment.
     * Get email attachment metadata information
     * @param param the request object
     */
    public getAttachmentInfo(param: AttachmentControllerApiGetAttachmentInfoRequest, options?: Configuration): Promise<AttachmentMetaData> {
        return this.api.getAttachmentInfo(param.attachmentId,  options).toPromise();
    }

    /**
     * Get all attachments in paginated response. Each entity contains meta data for the attachment such as `name` and `content-type`. Use the `attachmentId` and the download endpoints to get the file contents.
     * Get email attachments
     * @param param the request object
     */
    public getAttachments(param: AttachmentControllerApiGetAttachmentsRequest, options?: Configuration): Promise<PageAttachmentEntity> {
        return this.api.getAttachments(param.page, param.size, param.sort, param.fileNameFilter, param.since, param.before,  options).toPromise();
    }

    /**
     * Upload an attachment for sending using base64 file encoding. Returns an array whose first element is the ID of the uploaded attachment.
     * @param param the request object
     */
    public uploadAttachment(param: AttachmentControllerApiUploadAttachmentRequest, options?: Configuration): Promise<Array<string>> {
        return this.api.uploadAttachment(param.uploadAttachmentOptions,  options).toPromise();
    }

    /**
     * Upload an attachment for sending using file byte stream input octet stream. Returns an array whose first element is the ID of the uploaded attachment.
     * @param param the request object
     */
    public uploadAttachmentBytes(param: AttachmentControllerApiUploadAttachmentBytesRequest, options?: Configuration): Promise<Array<string>> {
        return this.api.uploadAttachmentBytes(param.inlineObject1, param.contentType, param.filename,  options).toPromise();
    }

    /**
     * Upload an attachment for sending using a Multipart Form request. Returns an array whose first element is the ID of the uploaded attachment.
     * @param param the request object
     */
    public uploadMultipartForm(param: AttachmentControllerApiUploadMultipartFormRequest, options?: Configuration): Promise<Array<string>> {
        return this.api.uploadMultipartForm(param.contentType, param.filename, param.xFilename, param.inlineObject,  options).toPromise();
    }

}

import { ObservableBounceControllerApi } from "./ObservableAPI.ts";
import { BounceControllerApiRequestFactory, BounceControllerApiResponseProcessor} from "../apis/BounceControllerApi.ts";

export interface BounceControllerApiFilterBouncedRecipientRequest {
    /**
     * 
     * @type FilterBouncedRecipientsOptions
     * @memberof BounceControllerApifilterBouncedRecipient
     */
    filterBouncedRecipientsOptions: FilterBouncedRecipientsOptions
}

export interface BounceControllerApiGetBouncedEmailRequest {
    /**
     * ID of the bounced email to fetch
     * @type string
     * @memberof BounceControllerApigetBouncedEmail
     */
    id: string
}

export interface BounceControllerApiGetBouncedEmailsRequest {
    /**
     * Optional page index
     * @type number
     * @memberof BounceControllerApigetBouncedEmails
     */
    page?: number
    /**
     * Optional page size 
     * @type number
     * @memberof BounceControllerApigetBouncedEmails
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof BounceControllerApigetBouncedEmails
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof BounceControllerApigetBouncedEmails
     */
    since?: Date
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof BounceControllerApigetBouncedEmails
     */
    before?: Date
}

export interface BounceControllerApiGetBouncedRecipientRequest {
    /**
     * ID of the bounced recipient
     * @type string
     * @memberof BounceControllerApigetBouncedRecipient
     */
    id: string
}

export interface BounceControllerApiGetBouncedRecipientsRequest {
    /**
     * Optional page index 
     * @type number
     * @memberof BounceControllerApigetBouncedRecipients
     */
    page?: number
    /**
     * Optional page size 
     * @type number
     * @memberof BounceControllerApigetBouncedRecipients
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof BounceControllerApigetBouncedRecipients
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof BounceControllerApigetBouncedRecipients
     */
    since?: Date
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof BounceControllerApigetBouncedRecipients
     */
    before?: Date
}

export interface BounceControllerApiGetComplaintsRequest {
    /**
     * Optional page index 
     * @type number
     * @memberof BounceControllerApigetComplaints
     */
    page?: number
    /**
     * Optional page size 
     * @type number
     * @memberof BounceControllerApigetComplaints
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof BounceControllerApigetComplaints
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof BounceControllerApigetComplaints
     */
    since?: Date
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof BounceControllerApigetComplaints
     */
    before?: Date
}

export interface BounceControllerApiGetListUnsubscribeRecipientsRequest {
    /**
     * Optional page index
     * @type number
     * @memberof BounceControllerApigetListUnsubscribeRecipients
     */
    page?: number
    /**
     * Optional page size 
     * @type number
     * @memberof BounceControllerApigetListUnsubscribeRecipients
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof BounceControllerApigetListUnsubscribeRecipients
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Filter by domainId
     * @type string
     * @memberof BounceControllerApigetListUnsubscribeRecipients
     */
    domainId?: string
}

export class ObjectBounceControllerApi {
    private api: ObservableBounceControllerApi

    public constructor(configuration: Configuration, requestFactory?: BounceControllerApiRequestFactory, responseProcessor?: BounceControllerApiResponseProcessor) {
        this.api = new ObservableBounceControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Prevent email sending errors by remove recipients who have resulted in past email bounces or complaints
     * Filter a list of email recipients and remove those who have bounced
     * @param param the request object
     */
    public filterBouncedRecipient(param: BounceControllerApiFilterBouncedRecipientRequest, options?: Configuration): Promise<FilterBouncedRecipientsResult> {
        return this.api.filterBouncedRecipient(param.filterBouncedRecipientsOptions,  options).toPromise();
    }

    /**
     * Bounced emails are email you have sent that were rejected by a recipient
     * Get a bounced email.
     * @param param the request object
     */
    public getBouncedEmail(param: BounceControllerApiGetBouncedEmailRequest, options?: Configuration): Promise<BouncedEmailDto> {
        return this.api.getBouncedEmail(param.id,  options).toPromise();
    }

    /**
     * Bounced emails are email you have sent that were rejected by a recipient
     * Get paginated list of bounced emails.
     * @param param the request object
     */
    public getBouncedEmails(param: BounceControllerApiGetBouncedEmailsRequest, options?: Configuration): Promise<PageBouncedEmail> {
        return this.api.getBouncedEmails(param.page, param.size, param.sort, param.since, param.before,  options).toPromise();
    }

    /**
     * Bounced emails are email you have sent that were rejected by a recipient
     * Get a bounced email.
     * @param param the request object
     */
    public getBouncedRecipient(param: BounceControllerApiGetBouncedRecipientRequest, options?: Configuration): Promise<BouncedRecipientDto> {
        return this.api.getBouncedRecipient(param.id,  options).toPromise();
    }

    /**
     * Bounced recipients are email addresses that you have sent emails to that did not accept the sent email. Once a recipient is bounced you cannot send emails to that address.
     * Get paginated list of bounced recipients.
     * @param param the request object
     */
    public getBouncedRecipients(param: BounceControllerApiGetBouncedRecipientsRequest, options?: Configuration): Promise<PageBouncedRecipients> {
        return this.api.getBouncedRecipients(param.page, param.size, param.sort, param.since, param.before,  options).toPromise();
    }

    /**
     * SMTP complaints made against your account
     * Get paginated list of complaints.
     * @param param the request object
     */
    public getComplaints(param: BounceControllerApiGetComplaintsRequest, options?: Configuration): Promise<PageComplaint> {
        return this.api.getComplaints(param.page, param.size, param.sort, param.since, param.before,  options).toPromise();
    }

    /**
     * Unsubscribed recipient have unsubscribed from a mailing list for a user or domain and cannot be contacted again.
     * Get paginated list of unsubscribed recipients.
     * @param param the request object
     */
    public getListUnsubscribeRecipients(param: BounceControllerApiGetListUnsubscribeRecipientsRequest, options?: Configuration): Promise<PageListUnsubscribeRecipients> {
        return this.api.getListUnsubscribeRecipients(param.page, param.size, param.sort, param.domainId,  options).toPromise();
    }

}

import { ObservableBulkActionsControllerApi } from "./ObservableAPI.ts";
import { BulkActionsControllerApiRequestFactory, BulkActionsControllerApiResponseProcessor} from "../apis/BulkActionsControllerApi.ts";

export interface BulkActionsControllerApiBulkCreateInboxesRequest {
    /**
     * Number of inboxes to be created in bulk
     * @type number
     * @memberof BulkActionsControllerApibulkCreateInboxes
     */
    count: number
}

export interface BulkActionsControllerApiBulkDeleteInboxesRequest {
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof BulkActionsControllerApibulkDeleteInboxes
     */
    requestBody: Array<string>
}

export interface BulkActionsControllerApiBulkSendEmailsRequest {
    /**
     * 
     * @type BulkSendEmailOptions
     * @memberof BulkActionsControllerApibulkSendEmails
     */
    bulkSendEmailOptions: BulkSendEmailOptions
}

export class ObjectBulkActionsControllerApi {
    private api: ObservableBulkActionsControllerApi

    public constructor(configuration: Configuration, requestFactory?: BulkActionsControllerApiRequestFactory, responseProcessor?: BulkActionsControllerApiResponseProcessor) {
        this.api = new ObservableBulkActionsControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Bulk create Inboxes (email addresses)
     * @param param the request object
     */
    public bulkCreateInboxes(param: BulkActionsControllerApiBulkCreateInboxesRequest, options?: Configuration): Promise<Array<InboxDto>> {
        return this.api.bulkCreateInboxes(param.count,  options).toPromise();
    }

    /**
     * Bulk Delete Inboxes
     * @param param the request object
     */
    public bulkDeleteInboxes(param: BulkActionsControllerApiBulkDeleteInboxesRequest, options?: Configuration): Promise<void> {
        return this.api.bulkDeleteInboxes(param.requestBody,  options).toPromise();
    }

    /**
     * Bulk Send Emails
     * @param param the request object
     */
    public bulkSendEmails(param: BulkActionsControllerApiBulkSendEmailsRequest, options?: Configuration): Promise<void> {
        return this.api.bulkSendEmails(param.bulkSendEmailOptions,  options).toPromise();
    }

}

import { ObservableCommonActionsControllerApi } from "./ObservableAPI.ts";
import { CommonActionsControllerApiRequestFactory, CommonActionsControllerApiResponseProcessor} from "../apis/CommonActionsControllerApi.ts";

export interface CommonActionsControllerApiCreateNewEmailAddressRequest {
    /**
     * 
     * @type boolean
     * @memberof CommonActionsControllerApicreateNewEmailAddress
     */
    allowTeamAccess?: boolean
    /**
     * 
     * @type boolean
     * @memberof CommonActionsControllerApicreateNewEmailAddress
     */
    useDomainPool?: boolean
    /**
     * 
     * @type Date
     * @memberof CommonActionsControllerApicreateNewEmailAddress
     */
    expiresAt?: Date
    /**
     * 
     * @type number
     * @memberof CommonActionsControllerApicreateNewEmailAddress
     */
    expiresIn?: number
    /**
     * 
     * @type string
     * @memberof CommonActionsControllerApicreateNewEmailAddress
     */
    emailAddress?: string
    /**
     * 
     * @type &#39;HTTP_INBOX&#39; | &#39;SMTP_INBOX&#39;
     * @memberof CommonActionsControllerApicreateNewEmailAddress
     */
    inboxType?: 'HTTP_INBOX' | 'SMTP_INBOX'
    /**
     * 
     * @type string
     * @memberof CommonActionsControllerApicreateNewEmailAddress
     */
    description?: string
    /**
     * 
     * @type string
     * @memberof CommonActionsControllerApicreateNewEmailAddress
     */
    name?: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof CommonActionsControllerApicreateNewEmailAddress
     */
    tags?: Array<string>
    /**
     * 
     * @type boolean
     * @memberof CommonActionsControllerApicreateNewEmailAddress
     */
    favourite?: boolean
    /**
     * 
     * @type boolean
     * @memberof CommonActionsControllerApicreateNewEmailAddress
     */
    virtualInbox?: boolean
    /**
     * 
     * @type boolean
     * @memberof CommonActionsControllerApicreateNewEmailAddress
     */
    useShortAddress?: boolean
    /**
     * 
     * @type string
     * @memberof CommonActionsControllerApicreateNewEmailAddress
     */
    domainName?: string
    /**
     * 
     * @type string
     * @memberof CommonActionsControllerApicreateNewEmailAddress
     */
    domainId?: string
}

export interface CommonActionsControllerApiCreateRandomInboxRequest {
    /**
     * 
     * @type boolean
     * @memberof CommonActionsControllerApicreateRandomInbox
     */
    allowTeamAccess?: boolean
    /**
     * 
     * @type boolean
     * @memberof CommonActionsControllerApicreateRandomInbox
     */
    useDomainPool?: boolean
    /**
     * 
     * @type Date
     * @memberof CommonActionsControllerApicreateRandomInbox
     */
    expiresAt?: Date
    /**
     * 
     * @type number
     * @memberof CommonActionsControllerApicreateRandomInbox
     */
    expiresIn?: number
    /**
     * 
     * @type string
     * @memberof CommonActionsControllerApicreateRandomInbox
     */
    emailAddress?: string
    /**
     * 
     * @type &#39;HTTP_INBOX&#39; | &#39;SMTP_INBOX&#39;
     * @memberof CommonActionsControllerApicreateRandomInbox
     */
    inboxType?: 'HTTP_INBOX' | 'SMTP_INBOX'
    /**
     * 
     * @type string
     * @memberof CommonActionsControllerApicreateRandomInbox
     */
    description?: string
    /**
     * 
     * @type string
     * @memberof CommonActionsControllerApicreateRandomInbox
     */
    name?: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof CommonActionsControllerApicreateRandomInbox
     */
    tags?: Array<string>
    /**
     * 
     * @type boolean
     * @memberof CommonActionsControllerApicreateRandomInbox
     */
    favourite?: boolean
    /**
     * 
     * @type boolean
     * @memberof CommonActionsControllerApicreateRandomInbox
     */
    virtualInbox?: boolean
    /**
     * 
     * @type boolean
     * @memberof CommonActionsControllerApicreateRandomInbox
     */
    useShortAddress?: boolean
    /**
     * 
     * @type string
     * @memberof CommonActionsControllerApicreateRandomInbox
     */
    domainName?: string
    /**
     * 
     * @type string
     * @memberof CommonActionsControllerApicreateRandomInbox
     */
    domainId?: string
}

export interface CommonActionsControllerApiDeleteEmailAddressRequest {
    /**
     * 
     * @type string
     * @memberof CommonActionsControllerApideleteEmailAddress
     */
    inboxId: string
}

export interface CommonActionsControllerApiEmptyInboxRequest {
    /**
     * 
     * @type string
     * @memberof CommonActionsControllerApiemptyInbox
     */
    inboxId: string
}

export interface CommonActionsControllerApiSendEmailSimpleRequest {
    /**
     * 
     * @type SimpleSendEmailOptions
     * @memberof CommonActionsControllerApisendEmailSimple
     */
    simpleSendEmailOptions: SimpleSendEmailOptions
}

export class ObjectCommonActionsControllerApi {
    private api: ObservableCommonActionsControllerApi

    public constructor(configuration: Configuration, requestFactory?: CommonActionsControllerApiRequestFactory, responseProcessor?: CommonActionsControllerApiResponseProcessor) {
        this.api = new ObservableCommonActionsControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns an Inbox with an `id` and an `emailAddress`
     * Create new random inbox
     * @param param the request object
     */
    public createNewEmailAddress(param: CommonActionsControllerApiCreateNewEmailAddressRequest, options?: Configuration): Promise<InboxDto> {
        return this.api.createNewEmailAddress(param.allowTeamAccess, param.useDomainPool, param.expiresAt, param.expiresIn, param.emailAddress, param.inboxType, param.description, param.name, param.tags, param.favourite, param.virtualInbox, param.useShortAddress, param.domainName, param.domainId,  options).toPromise();
    }

    /**
     * Returns an Inbox with an `id` and an `emailAddress`
     * Create new random inbox
     * @param param the request object
     */
    public createRandomInbox(param: CommonActionsControllerApiCreateRandomInboxRequest, options?: Configuration): Promise<InboxDto> {
        return this.api.createRandomInbox(param.allowTeamAccess, param.useDomainPool, param.expiresAt, param.expiresIn, param.emailAddress, param.inboxType, param.description, param.name, param.tags, param.favourite, param.virtualInbox, param.useShortAddress, param.domainName, param.domainId,  options).toPromise();
    }

    /**
     * Deletes inbox email address
     * Delete inbox email address by inbox id
     * @param param the request object
     */
    public deleteEmailAddress(param: CommonActionsControllerApiDeleteEmailAddressRequest, options?: Configuration): Promise<void> {
        return this.api.deleteEmailAddress(param.inboxId,  options).toPromise();
    }

    /**
     * Deletes all emails
     * Delete all emails in an inbox
     * @param param the request object
     */
    public emptyInbox(param: CommonActionsControllerApiEmptyInboxRequest, options?: Configuration): Promise<void> {
        return this.api.emptyInbox(param.inboxId,  options).toPromise();
    }

    /**
     * If no senderId or inboxId provided a random email address will be used to send from.
     * Send an email
     * @param param the request object
     */
    public sendEmailSimple(param: CommonActionsControllerApiSendEmailSimpleRequest, options?: Configuration): Promise<void> {
        return this.api.sendEmailSimple(param.simpleSendEmailOptions,  options).toPromise();
    }

}

import { ObservableConnectorControllerApi } from "./ObservableAPI.ts";
import { ConnectorControllerApiRequestFactory, ConnectorControllerApiResponseProcessor} from "../apis/ConnectorControllerApi.ts";

export interface ConnectorControllerApiCreateConnectorRequest {
    /**
     * 
     * @type CreateConnectorOptions
     * @memberof ConnectorControllerApicreateConnector
     */
    createConnectorOptions: CreateConnectorOptions
}

export interface ConnectorControllerApiDeleteConnectorRequest {
    /**
     * 
     * @type string
     * @memberof ConnectorControllerApideleteConnector
     */
    id: string
}

export interface ConnectorControllerApiGetAllConnectorSyncEventsRequest {
    /**
     * Optional page index in connector list pagination
     * @type number
     * @memberof ConnectorControllerApigetAllConnectorSyncEvents
     */
    page?: number
    /**
     * Optional page size in connector list pagination
     * @type number
     * @memberof ConnectorControllerApigetAllConnectorSyncEvents
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof ConnectorControllerApigetAllConnectorSyncEvents
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof ConnectorControllerApigetAllConnectorSyncEvents
     */
    since?: Date
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof ConnectorControllerApigetAllConnectorSyncEvents
     */
    before?: Date
}

export interface ConnectorControllerApiGetConnectorRequest {
    /**
     * 
     * @type string
     * @memberof ConnectorControllerApigetConnector
     */
    id: string
}

export interface ConnectorControllerApiGetConnectorSyncEventRequest {
    /**
     * 
     * @type string
     * @memberof ConnectorControllerApigetConnectorSyncEvent
     */
    id: string
}

export interface ConnectorControllerApiGetConnectorSyncEventsRequest {
    /**
     * 
     * @type string
     * @memberof ConnectorControllerApigetConnectorSyncEvents
     */
    id: string
    /**
     * Optional page index in connector list pagination
     * @type number
     * @memberof ConnectorControllerApigetConnectorSyncEvents
     */
    page?: number
    /**
     * Optional page size in connector list pagination
     * @type number
     * @memberof ConnectorControllerApigetConnectorSyncEvents
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof ConnectorControllerApigetConnectorSyncEvents
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof ConnectorControllerApigetConnectorSyncEvents
     */
    since?: Date
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof ConnectorControllerApigetConnectorSyncEvents
     */
    before?: Date
}

export interface ConnectorControllerApiGetConnectorsRequest {
    /**
     * Optional page index in connector list pagination
     * @type number
     * @memberof ConnectorControllerApigetConnectors
     */
    page?: number
    /**
     * Optional page size in connector list pagination
     * @type number
     * @memberof ConnectorControllerApigetConnectors
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof ConnectorControllerApigetConnectors
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof ConnectorControllerApigetConnectors
     */
    since?: Date
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof ConnectorControllerApigetConnectors
     */
    before?: Date
}

export interface ConnectorControllerApiSyncConnectorRequest {
    /**
     * 
     * @type string
     * @memberof ConnectorControllerApisyncConnector
     */
    id: string
}

export interface ConnectorControllerApiUpdateConnectorRequest {
    /**
     * 
     * @type string
     * @memberof ConnectorControllerApiupdateConnector
     */
    id: string
    /**
     * 
     * @type CreateConnectorOptions
     * @memberof ConnectorControllerApiupdateConnector
     */
    createConnectorOptions: CreateConnectorOptions
}

export class ObjectConnectorControllerApi {
    private api: ObservableConnectorControllerApi

    public constructor(configuration: Configuration, requestFactory?: ConnectorControllerApiRequestFactory, responseProcessor?: ConnectorControllerApiResponseProcessor) {
        this.api = new ObservableConnectorControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Sync emails between external mailboxes and MailSlurp inboxes
     * Create an inbox connector
     * @param param the request object
     */
    public createConnector(param: ConnectorControllerApiCreateConnectorRequest, options?: Configuration): Promise<ConnectorDto> {
        return this.api.createConnector(param.createConnectorOptions,  options).toPromise();
    }

    /**
     * Delete an inbox connector
     * @param param the request object
     */
    public deleteConnector(param: ConnectorControllerApiDeleteConnectorRequest, options?: Configuration): Promise<void> {
        return this.api.deleteConnector(param.id,  options).toPromise();
    }

    /**
     * Get all inbox connector sync events
     * @param param the request object
     */
    public getAllConnectorSyncEvents(param: ConnectorControllerApiGetAllConnectorSyncEventsRequest, options?: Configuration): Promise<PageConnectorSyncEvents> {
        return this.api.getAllConnectorSyncEvents(param.page, param.size, param.sort, param.since, param.before,  options).toPromise();
    }

    /**
     * Get an inbox connector
     * @param param the request object
     */
    public getConnector(param: ConnectorControllerApiGetConnectorRequest, options?: Configuration): Promise<ConnectorDto> {
        return this.api.getConnector(param.id,  options).toPromise();
    }

    /**
     * Get an inbox connector sync event
     * @param param the request object
     */
    public getConnectorSyncEvent(param: ConnectorControllerApiGetConnectorSyncEventRequest, options?: Configuration): Promise<ConnectorSyncEventDto> {
        return this.api.getConnectorSyncEvent(param.id,  options).toPromise();
    }

    /**
     * Get an inbox connector sync events
     * @param param the request object
     */
    public getConnectorSyncEvents(param: ConnectorControllerApiGetConnectorSyncEventsRequest, options?: Configuration): Promise<PageConnectorSyncEvents> {
        return this.api.getConnectorSyncEvents(param.id, param.page, param.size, param.sort, param.since, param.before,  options).toPromise();
    }

    /**
     * List inbox connectors that sync external emails to MailSlurp inboxes
     * Get inbox connectors
     * @param param the request object
     */
    public getConnectors(param: ConnectorControllerApiGetConnectorsRequest, options?: Configuration): Promise<PageConnector> {
        return this.api.getConnectors(param.page, param.size, param.sort, param.since, param.before,  options).toPromise();
    }

    /**
     * Sync an inbox connector
     * @param param the request object
     */
    public syncConnector(param: ConnectorControllerApiSyncConnectorRequest, options?: Configuration): Promise<ConnectorSyncRequestResult> {
        return this.api.syncConnector(param.id,  options).toPromise();
    }

    /**
     * Update an inbox connector
     * @param param the request object
     */
    public updateConnector(param: ConnectorControllerApiUpdateConnectorRequest, options?: Configuration): Promise<ConnectorDto> {
        return this.api.updateConnector(param.id, param.createConnectorOptions,  options).toPromise();
    }

}

import { ObservableContactControllerApi } from "./ObservableAPI.ts";
import { ContactControllerApiRequestFactory, ContactControllerApiResponseProcessor} from "../apis/ContactControllerApi.ts";

export interface ContactControllerApiCreateContactRequest {
    /**
     * 
     * @type CreateContactOptions
     * @memberof ContactControllerApicreateContact
     */
    createContactOptions: CreateContactOptions
}

export interface ContactControllerApiDeleteContactRequest {
    /**
     * 
     * @type string
     * @memberof ContactControllerApideleteContact
     */
    contactId: string
}

export interface ContactControllerApiGetAllContactsRequest {
    /**
     * Optional page index in list pagination
     * @type number
     * @memberof ContactControllerApigetAllContacts
     */
    page?: number
    /**
     * Optional page size in list pagination
     * @type number
     * @memberof ContactControllerApigetAllContacts
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof ContactControllerApigetAllContacts
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof ContactControllerApigetAllContacts
     */
    since?: Date
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof ContactControllerApigetAllContacts
     */
    before?: Date
}

export interface ContactControllerApiGetContactRequest {
    /**
     * 
     * @type string
     * @memberof ContactControllerApigetContact
     */
    contactId: string
}

export interface ContactControllerApiGetContactVCardRequest {
    /**
     * 
     * @type string
     * @memberof ContactControllerApigetContactVCard
     */
    contactId: string
}

export interface ContactControllerApiGetContactsRequest {
}

export class ObjectContactControllerApi {
    private api: ObservableContactControllerApi

    public constructor(configuration: Configuration, requestFactory?: ContactControllerApiRequestFactory, responseProcessor?: ContactControllerApiResponseProcessor) {
        this.api = new ObservableContactControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a contact
     * @param param the request object
     */
    public createContact(param: ContactControllerApiCreateContactRequest, options?: Configuration): Promise<ContactDto> {
        return this.api.createContact(param.createContactOptions,  options).toPromise();
    }

    /**
     * Delete contact
     * @param param the request object
     */
    public deleteContact(param: ContactControllerApiDeleteContactRequest, options?: Configuration): Promise<void> {
        return this.api.deleteContact(param.contactId,  options).toPromise();
    }

    /**
     * Get all contacts
     * @param param the request object
     */
    public getAllContacts(param: ContactControllerApiGetAllContactsRequest, options?: Configuration): Promise<PageContactProjection> {
        return this.api.getAllContacts(param.page, param.size, param.sort, param.since, param.before,  options).toPromise();
    }

    /**
     * Get contact
     * @param param the request object
     */
    public getContact(param: ContactControllerApiGetContactRequest, options?: Configuration): Promise<ContactDto> {
        return this.api.getContact(param.contactId,  options).toPromise();
    }

    /**
     * Get contact vCard vcf file
     * @param param the request object
     */
    public getContactVCard(param: ContactControllerApiGetContactVCardRequest, options?: Configuration): Promise<Array<string>> {
        return this.api.getContactVCard(param.contactId,  options).toPromise();
    }

    /**
     * Get all contacts
     * @param param the request object
     */
    public getContacts(param: ContactControllerApiGetContactsRequest, options?: Configuration): Promise<Array<ContactProjection>> {
        return this.api.getContacts( options).toPromise();
    }

}

import { ObservableDomainControllerApi } from "./ObservableAPI.ts";
import { DomainControllerApiRequestFactory, DomainControllerApiResponseProcessor} from "../apis/DomainControllerApi.ts";

export interface DomainControllerApiAddDomainWildcardCatchAllRequest {
    /**
     * 
     * @type string
     * @memberof DomainControllerApiaddDomainWildcardCatchAll
     */
    id: string
}

export interface DomainControllerApiCreateDomainRequest {
    /**
     * 
     * @type CreateDomainOptions
     * @memberof DomainControllerApicreateDomain
     */
    createDomainOptions: CreateDomainOptions
}

export interface DomainControllerApiDeleteDomainRequest {
    /**
     * 
     * @type string
     * @memberof DomainControllerApideleteDomain
     */
    id: string
}

export interface DomainControllerApiGetDomainRequest {
    /**
     * 
     * @type string
     * @memberof DomainControllerApigetDomain
     */
    id: string
    /**
     * 
     * @type boolean
     * @memberof DomainControllerApigetDomain
     */
    checkForErrors?: boolean
}

export interface DomainControllerApiGetDomainIssuesRequest {
}

export interface DomainControllerApiGetDomainWildcardCatchAllInboxRequest {
    /**
     * 
     * @type string
     * @memberof DomainControllerApigetDomainWildcardCatchAllInbox
     */
    id: string
}

export interface DomainControllerApiGetDomainsRequest {
}

export interface DomainControllerApiUpdateDomainRequest {
    /**
     * 
     * @type string
     * @memberof DomainControllerApiupdateDomain
     */
    id: string
    /**
     * 
     * @type UpdateDomainOptions
     * @memberof DomainControllerApiupdateDomain
     */
    updateDomainOptions: UpdateDomainOptions
}

export class ObjectDomainControllerApi {
    private api: ObservableDomainControllerApi

    public constructor(configuration: Configuration, requestFactory?: DomainControllerApiRequestFactory, responseProcessor?: DomainControllerApiResponseProcessor) {
        this.api = new ObservableDomainControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a catch all inbox to a domain so that any emails sent to it that cannot be matched will be sent to the catch all inbox generated
     * Add catch all wild card inbox to domain
     * @param param the request object
     */
    public addDomainWildcardCatchAll(param: DomainControllerApiAddDomainWildcardCatchAllRequest, options?: Configuration): Promise<DomainDto> {
        return this.api.addDomainWildcardCatchAll(param.id,  options).toPromise();
    }

    /**
     * Link a domain that you own with MailSlurp so you can create email addresses using it. Endpoint returns DNS records used for validation. You must add these verification records to your host provider's DNS setup to verify the domain.
     * Create Domain
     * @param param the request object
     */
    public createDomain(param: DomainControllerApiCreateDomainRequest, options?: Configuration): Promise<DomainDto> {
        return this.api.createDomain(param.createDomainOptions,  options).toPromise();
    }

    /**
     * Delete a domain. This will disable any existing inboxes that use this domain.
     * Delete a domain
     * @param param the request object
     */
    public deleteDomain(param: DomainControllerApiDeleteDomainRequest, options?: Configuration): Promise<Array<string>> {
        return this.api.deleteDomain(param.id,  options).toPromise();
    }

    /**
     * Returns domain verification status and tokens for a given domain
     * Get a domain
     * @param param the request object
     */
    public getDomain(param: DomainControllerApiGetDomainRequest, options?: Configuration): Promise<DomainDto> {
        return this.api.getDomain(param.id, param.checkForErrors,  options).toPromise();
    }

    /**
     * List domain issues for domains you have created
     * Get domain issues
     * @param param the request object
     */
    public getDomainIssues(param: DomainControllerApiGetDomainIssuesRequest, options?: Configuration): Promise<DomainIssuesDto> {
        return this.api.getDomainIssues( options).toPromise();
    }

    /**
     * Get the catch all inbox for a domain for missed emails
     * Get catch all wild card inbox for domain
     * @param param the request object
     */
    public getDomainWildcardCatchAllInbox(param: DomainControllerApiGetDomainWildcardCatchAllInboxRequest, options?: Configuration): Promise<InboxDto> {
        return this.api.getDomainWildcardCatchAllInbox(param.id,  options).toPromise();
    }

    /**
     * List all custom domains you have created
     * Get domains
     * @param param the request object
     */
    public getDomains(param: DomainControllerApiGetDomainsRequest, options?: Configuration): Promise<Array<DomainPreview>> {
        return this.api.getDomains( options).toPromise();
    }

    /**
     * Update values on a domain. Note you cannot change the domain name as it is immutable. Recreate the domain if you need to alter this.
     * Update a domain
     * @param param the request object
     */
    public updateDomain(param: DomainControllerApiUpdateDomainRequest, options?: Configuration): Promise<DomainDto> {
        return this.api.updateDomain(param.id, param.updateDomainOptions,  options).toPromise();
    }

}

import { ObservableEmailControllerApi } from "./ObservableAPI.ts";
import { EmailControllerApiRequestFactory, EmailControllerApiResponseProcessor} from "../apis/EmailControllerApi.ts";

export interface EmailControllerApiApplyImapFlagOperationRequest {
    /**
     * 
     * @type string
     * @memberof EmailControllerApiapplyImapFlagOperation
     */
    emailId: string
    /**
     * 
     * @type ImapFlagOperationOptions
     * @memberof EmailControllerApiapplyImapFlagOperation
     */
    imapFlagOperationOptions: ImapFlagOperationOptions
}

export interface EmailControllerApiDeleteAllEmailsRequest {
}

export interface EmailControllerApiDeleteEmailRequest {
    /**
     * ID of email to delete
     * @type string
     * @memberof EmailControllerApideleteEmail
     */
    emailId: string
}

export interface EmailControllerApiDownloadAttachmentRequest {
    /**
     * ID of email
     * @type string
     * @memberof EmailControllerApidownloadAttachment
     */
    emailId: string
    /**
     * ID of attachment
     * @type string
     * @memberof EmailControllerApidownloadAttachment
     */
    attachmentId: string
    /**
     * Can pass apiKey in url for this request if you wish to download the file in a browser. Content type will be set to original content type of the attachment file. This is so that browsers can download the file correctly.
     * @type string
     * @memberof EmailControllerApidownloadAttachment
     */
    apiKey?: string
}

export interface EmailControllerApiDownloadAttachmentBase64Request {
    /**
     * ID of email
     * @type string
     * @memberof EmailControllerApidownloadAttachmentBase64
     */
    emailId: string
    /**
     * ID of attachment
     * @type string
     * @memberof EmailControllerApidownloadAttachmentBase64
     */
    attachmentId: string
}

export interface EmailControllerApiDownloadBodyRequest {
    /**
     * ID of email
     * @type string
     * @memberof EmailControllerApidownloadBody
     */
    emailId: string
}

export interface EmailControllerApiDownloadBodyBytesRequest {
    /**
     * ID of email
     * @type string
     * @memberof EmailControllerApidownloadBodyBytes
     */
    emailId: string
}

export interface EmailControllerApiForwardEmailRequest {
    /**
     * ID of email
     * @type string
     * @memberof EmailControllerApiforwardEmail
     */
    emailId: string
    /**
     * 
     * @type ForwardEmailOptions
     * @memberof EmailControllerApiforwardEmail
     */
    forwardEmailOptions: ForwardEmailOptions
}

export interface EmailControllerApiGetAttachmentMetaDataRequest {
    /**
     * ID of email
     * @type string
     * @memberof EmailControllerApigetAttachmentMetaData
     */
    emailId: string
    /**
     * ID of attachment
     * @type string
     * @memberof EmailControllerApigetAttachmentMetaData
     */
    attachmentId: string
}

export interface EmailControllerApiGetEmailRequest {
    /**
     * 
     * @type string
     * @memberof EmailControllerApigetEmail
     */
    emailId: string
    /**
     * Decode email body quoted-printable encoding to plain text. SMTP servers often encode text using quoted-printable format (for instance &#x60;&#x3D;D7&#x60;). This can be a pain for testing
     * @type boolean
     * @memberof EmailControllerApigetEmail
     */
    decode?: boolean
}

export interface EmailControllerApiGetEmailAttachmentsRequest {
    /**
     * ID of email
     * @type string
     * @memberof EmailControllerApigetEmailAttachments
     */
    emailId: string
}

export interface EmailControllerApiGetEmailContentMatchRequest {
    /**
     * ID of email to match against
     * @type string
     * @memberof EmailControllerApigetEmailContentMatch
     */
    emailId: string
    /**
     * 
     * @type ContentMatchOptions
     * @memberof EmailControllerApigetEmailContentMatch
     */
    contentMatchOptions: ContentMatchOptions
}

export interface EmailControllerApiGetEmailCountRequest {
}

export interface EmailControllerApiGetEmailHTMLRequest {
    /**
     * 
     * @type string
     * @memberof EmailControllerApigetEmailHTML
     */
    emailId: string
    /**
     * 
     * @type boolean
     * @memberof EmailControllerApigetEmailHTML
     */
    decode?: boolean
}

export interface EmailControllerApiGetEmailHTMLJsonRequest {
    /**
     * 
     * @type string
     * @memberof EmailControllerApigetEmailHTMLJson
     */
    emailId: string
    /**
     * 
     * @type boolean
     * @memberof EmailControllerApigetEmailHTMLJson
     */
    decode?: boolean
}

export interface EmailControllerApiGetEmailHTMLQueryRequest {
    /**
     * ID of email to perform HTML query on
     * @type string
     * @memberof EmailControllerApigetEmailHTMLQuery
     */
    emailId: string
    /**
     * HTML selector to search for. Uses JQuery/JSoup/CSS style selector like &#39;.my-div&#39; to match content. See https://jsoup.org/apidocs/org/jsoup/select/Selector.html for more information.
     * @type string
     * @memberof EmailControllerApigetEmailHTMLQuery
     */
    htmlSelector: string
}

export interface EmailControllerApiGetEmailLinksRequest {
    /**
     * ID of email to fetch text for
     * @type string
     * @memberof EmailControllerApigetEmailLinks
     */
    emailId: string
}

export interface EmailControllerApiGetEmailPreviewURLsRequest {
    /**
     * 
     * @type string
     * @memberof EmailControllerApigetEmailPreviewURLs
     */
    emailId: string
}

export interface EmailControllerApiGetEmailTextLinesRequest {
    /**
     * ID of email to fetch text for
     * @type string
     * @memberof EmailControllerApigetEmailTextLines
     */
    emailId: string
    /**
     * Decode HTML entities
     * @type boolean
     * @memberof EmailControllerApigetEmailTextLines
     */
    decodeHtmlEntities?: boolean
    /**
     * Line separator character
     * @type string
     * @memberof EmailControllerApigetEmailTextLines
     */
    lineSeparator?: string
}

export interface EmailControllerApiGetEmailsPaginatedRequest {
    /**
     * Optional inbox ids to filter by. Can be repeated. By default will use all inboxes belonging to your account.
     * @type Array&lt;string&gt;
     * @memberof EmailControllerApigetEmailsPaginated
     */
    inboxId?: Array<string>
    /**
     * Optional page index in email list pagination
     * @type number
     * @memberof EmailControllerApigetEmailsPaginated
     */
    page?: number
    /**
     * Optional page size in email list pagination. Maximum size is 100. Use page index and sort to page through larger results
     * @type number
     * @memberof EmailControllerApigetEmailsPaginated
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof EmailControllerApigetEmailsPaginated
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Optional filter for unread emails only. All emails are considered unread until they are viewed in the dashboard or requested directly
     * @type boolean
     * @memberof EmailControllerApigetEmailsPaginated
     */
    unreadOnly?: boolean
    /**
     * Optional search filter. Searches email recipients, sender, subject, email address and ID. Does not search email body
     * @type string
     * @memberof EmailControllerApigetEmailsPaginated
     */
    searchFilter?: string
    /**
     * Optional filter emails received after given date time
     * @type Date
     * @memberof EmailControllerApigetEmailsPaginated
     */
    since?: Date
    /**
     * Optional filter emails received before given date time
     * @type Date
     * @memberof EmailControllerApigetEmailsPaginated
     */
    before?: Date
}

export interface EmailControllerApiGetGravatarUrlForEmailAddressRequest {
    /**
     * 
     * @type string
     * @memberof EmailControllerApigetGravatarUrlForEmailAddress
     */
    emailAddress: string
    /**
     * 
     * @type string
     * @memberof EmailControllerApigetGravatarUrlForEmailAddress
     */
    size?: string
}

export interface EmailControllerApiGetLatestEmailRequest {
    /**
     * Optional set of inboxes to filter by. Only get the latest email from these inbox IDs. If not provided will search across all inboxes
     * @type Array&lt;string&gt;
     * @memberof EmailControllerApigetLatestEmail
     */
    inboxIds?: Array<string>
}

export interface EmailControllerApiGetLatestEmailInInbox1Request {
    /**
     * ID of the inbox you want to get the latest email from
     * @type string
     * @memberof EmailControllerApigetLatestEmailInInbox1
     */
    inboxId: string
}

export interface EmailControllerApiGetOrganizationEmailsPaginatedRequest {
    /**
     * Optional inbox ids to filter by. Can be repeated. By default will use all inboxes belonging to your account.
     * @type Array&lt;string&gt;
     * @memberof EmailControllerApigetOrganizationEmailsPaginated
     */
    inboxId?: Array<string>
    /**
     * Optional page index in email list pagination
     * @type number
     * @memberof EmailControllerApigetOrganizationEmailsPaginated
     */
    page?: number
    /**
     * Optional page size in email list pagination. Maximum size is 100. Use page index and sort to page through larger results
     * @type number
     * @memberof EmailControllerApigetOrganizationEmailsPaginated
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof EmailControllerApigetOrganizationEmailsPaginated
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Optional filter for unread emails only. All emails are considered unread until they are viewed in the dashboard or requested directly
     * @type boolean
     * @memberof EmailControllerApigetOrganizationEmailsPaginated
     */
    unreadOnly?: boolean
    /**
     * Optional search filter search filter for emails.
     * @type string
     * @memberof EmailControllerApigetOrganizationEmailsPaginated
     */
    searchFilter?: string
    /**
     * Optional filter emails received after given date time
     * @type Date
     * @memberof EmailControllerApigetOrganizationEmailsPaginated
     */
    since?: Date
    /**
     * Optional filter emails received before given date time
     * @type Date
     * @memberof EmailControllerApigetOrganizationEmailsPaginated
     */
    before?: Date
}

export interface EmailControllerApiGetRawEmailContentsRequest {
    /**
     * ID of email
     * @type string
     * @memberof EmailControllerApigetRawEmailContents
     */
    emailId: string
}

export interface EmailControllerApiGetRawEmailJsonRequest {
    /**
     * ID of email
     * @type string
     * @memberof EmailControllerApigetRawEmailJson
     */
    emailId: string
}

export interface EmailControllerApiGetUnreadEmailCountRequest {
}

export interface EmailControllerApiMarkAsReadRequest {
    /**
     * 
     * @type string
     * @memberof EmailControllerApimarkAsRead
     */
    emailId: string
    /**
     * What value to assign to email read property. Default true.
     * @type boolean
     * @memberof EmailControllerApimarkAsRead
     */
    read?: boolean
}

export interface EmailControllerApiReplyToEmailRequest {
    /**
     * ID of the email that should be replied to
     * @type string
     * @memberof EmailControllerApireplyToEmail
     */
    emailId: string
    /**
     * 
     * @type ReplyToEmailOptions
     * @memberof EmailControllerApireplyToEmail
     */
    replyToEmailOptions: ReplyToEmailOptions
}

export interface EmailControllerApiSendEmailSourceOptionalRequest {
    /**
     * 
     * @type SendEmailOptions
     * @memberof EmailControllerApisendEmailSourceOptional
     */
    sendEmailOptions: SendEmailOptions
    /**
     * ID of the inbox you want to send the email from
     * @type string
     * @memberof EmailControllerApisendEmailSourceOptional
     */
    inboxId?: string
    /**
     * Use domain pool. Optionally create inbox to send from using the mailslurp domain pool.
     * @type boolean
     * @memberof EmailControllerApisendEmailSourceOptional
     */
    useDomainPool?: boolean
    /**
     * Optionally create inbox to send from that is a virtual inbox and won&#39;t send to external addresses
     * @type boolean
     * @memberof EmailControllerApisendEmailSourceOptional
     */
    virtualSend?: boolean
}

export interface EmailControllerApiValidateEmailRequest {
    /**
     * ID of email
     * @type string
     * @memberof EmailControllerApivalidateEmail
     */
    emailId: string
}

export class ObjectEmailControllerApi {
    private api: ObservableEmailControllerApi

    public constructor(configuration: Configuration, requestFactory?: EmailControllerApiRequestFactory, responseProcessor?: EmailControllerApiResponseProcessor) {
        this.api = new ObservableEmailControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Apply RFC3501 section-2.3.2 IMAP flag operations on an email
     * Set IMAP flags associated with a message. Only supports '\\Seen' flag.
     * @param param the request object
     */
    public applyImapFlagOperation(param: EmailControllerApiApplyImapFlagOperationRequest, options?: Configuration): Promise<EmailPreview> {
        return this.api.applyImapFlagOperation(param.emailId, param.imapFlagOperationOptions,  options).toPromise();
    }

    /**
     * Deletes all emails in your account. Be careful as emails cannot be recovered
     * Delete all emails in all inboxes.
     * @param param the request object
     */
    public deleteAllEmails(param: EmailControllerApiDeleteAllEmailsRequest, options?: Configuration): Promise<void> {
        return this.api.deleteAllEmails( options).toPromise();
    }

    /**
     * Deletes an email and removes it from the inbox. Deleted emails cannot be recovered.
     * Delete an email
     * @param param the request object
     */
    public deleteEmail(param: EmailControllerApiDeleteEmailRequest, options?: Configuration): Promise<void> {
        return this.api.deleteEmail(param.emailId,  options).toPromise();
    }

    /**
     * Returns the specified attachment for a given email as a stream / array of bytes. You can find attachment ids in email responses endpoint responses. The response type is application/octet-stream.
     * Get email attachment bytes. Returned as `octet-stream` with content type header. If you have trouble with byte responses try the `downloadAttachmentBase64` response endpoints and convert the base 64 encoded content to a file or string.
     * @param param the request object
     */
    public downloadAttachment(param: EmailControllerApiDownloadAttachmentRequest, options?: Configuration): Promise<void> {
        return this.api.downloadAttachment(param.emailId, param.attachmentId, param.apiKey,  options).toPromise();
    }

    /**
     * Returns the specified attachment for a given email as a base 64 encoded string. The response type is application/json. This method is similar to the `downloadAttachment` method but allows some clients to get around issues with binary responses.
     * Get email attachment as base64 encoded string as an alternative to binary responses. Decode the `base64FileContents` as a `utf-8` encoded string or array of bytes depending on the `contentType`.
     * @param param the request object
     */
    public downloadAttachmentBase64(param: EmailControllerApiDownloadAttachmentBase64Request, options?: Configuration): Promise<DownloadAttachmentDto> {
        return this.api.downloadAttachmentBase64(param.emailId, param.attachmentId,  options).toPromise();
    }

    /**
     * Returns the specified email body for a given email as a string
     * Get email body as string. Returned as `plain/text` with content type header.
     * @param param the request object
     */
    public downloadBody(param: EmailControllerApiDownloadBodyRequest, options?: Configuration): Promise<string> {
        return this.api.downloadBody(param.emailId,  options).toPromise();
    }

    /**
     * Returns the specified email body for a given email as a stream / array of bytes.
     * Get email body in bytes. Returned as `octet-stream` with content type header.
     * @param param the request object
     */
    public downloadBodyBytes(param: EmailControllerApiDownloadBodyBytesRequest, options?: Configuration): Promise<void> {
        return this.api.downloadBodyBytes(param.emailId,  options).toPromise();
    }

    /**
     * Forward an existing email to new recipients. The sender of the email will be the inbox that received the email you are forwarding. You can override the sender with the `from` option. Note you must have access to the from address in MailSlurp to use the override. For more control consider fetching the email and sending it a new using the send email endpoints.
     * Forward email to recipients
     * @param param the request object
     */
    public forwardEmail(param: EmailControllerApiForwardEmailRequest, options?: Configuration): Promise<SentEmailDto> {
        return this.api.forwardEmail(param.emailId, param.forwardEmailOptions,  options).toPromise();
    }

    /**
     * Returns the metadata such as name and content-type for a given attachment and email.
     * Get email attachment metadata. This is the `contentType` and `contentLength` of an attachment. To get the individual attachments  use the `downloadAttachment` methods.
     * @param param the request object
     */
    public getAttachmentMetaData(param: EmailControllerApiGetAttachmentMetaDataRequest, options?: Configuration): Promise<AttachmentMetaData> {
        return this.api.getAttachmentMetaData(param.emailId, param.attachmentId,  options).toPromise();
    }

    /**
     * Returns a email summary object with headers and content. To retrieve the raw unparsed email use the getRawEmail endpoints
     * Get email content including headers and body. Expects email to exist by ID. For emails that may not have arrived yet use the WaitForController.
     * @param param the request object
     */
    public getEmail(param: EmailControllerApiGetEmailRequest, options?: Configuration): Promise<Email> {
        return this.api.getEmail(param.emailId, param.decode,  options).toPromise();
    }

    /**
     * Returns an array of attachment metadata such as name and content-type for a given email if present.
     * Get all email attachment metadata. Metadata includes name and size of attachments.
     * @param param the request object
     */
    public getEmailAttachments(param: EmailControllerApiGetEmailAttachmentsRequest, options?: Configuration): Promise<Array<AttachmentMetaData>> {
        return this.api.getEmailAttachments(param.emailId,  options).toPromise();
    }

    /**
     * Return the matches for a given Java style regex pattern. Do not include the typical `/` at start or end of regex in some languages. Given an example `your code is: 12345` the pattern to extract match looks like `code is: (\\d{6})`. This will return an array of matches with the first matching the entire pattern and the subsequent matching the groups: `['code is: 123456', '123456']` See https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html for more information of available patterns. 
     * Get email content regex pattern match results. Runs regex against email body and returns match groups.
     * @param param the request object
     */
    public getEmailContentMatch(param: EmailControllerApiGetEmailContentMatchRequest, options?: Configuration): Promise<EmailContentMatchResult> {
        return this.api.getEmailContentMatch(param.emailId, param.contentMatchOptions,  options).toPromise();
    }

    /**
     * Get email count
     * @param param the request object
     */
    public getEmailCount(param: EmailControllerApiGetEmailCountRequest, options?: Configuration): Promise<CountDto> {
        return this.api.getEmailCount( options).toPromise();
    }

    /**
     * Retrieve email content as HTML response for viewing in browsers. Decodes quoted-printable entities and converts charset to UTF-8. Pass your API KEY as a request parameter when viewing in a browser: `?apiKey=xxx`. Returns content-type `text/html;charset=utf-8` so you must call expecting that content response not JSON. For JSON response see the `getEmailHTMLJson` method.
     * Get email content as HTML. For displaying emails in browser context.
     * @param param the request object
     */
    public getEmailHTML(param: EmailControllerApiGetEmailHTMLRequest, options?: Configuration): Promise<string> {
        return this.api.getEmailHTML(param.emailId, param.decode,  options).toPromise();
    }

    /**
     * Retrieve email content as HTML response. Decodes quoted-printable entities and converts charset to UTF-8. Returns content-type `application/json;charset=utf-8` so you must call expecting that content response not JSON.
     * Get email content as HTML in JSON wrapper. For fetching entity decoded HTML content
     * @param param the request object
     */
    public getEmailHTMLJson(param: EmailControllerApiGetEmailHTMLJsonRequest, options?: Configuration): Promise<EmailHtmlDto> {
        return this.api.getEmailHTMLJson(param.emailId, param.decode,  options).toPromise();
    }

    /**
     * Parse an email body and return the content as an array of text. HTML parsing uses JSoup which supports JQuery/CSS style selectors
     * Parse and return text from an email, stripping HTML and decoding encoded characters
     * @param param the request object
     */
    public getEmailHTMLQuery(param: EmailControllerApiGetEmailHTMLQueryRequest, options?: Configuration): Promise<EmailTextLinesResult> {
        return this.api.getEmailHTMLQuery(param.emailId, param.htmlSelector,  options).toPromise();
    }

    /**
     * HTML parsing uses JSoup and UNIX line separators. Searches content for href attributes
     * Parse and return list of links found in an email (only works for HTML content)
     * @param param the request object
     */
    public getEmailLinks(param: EmailControllerApiGetEmailLinksRequest, options?: Configuration): Promise<EmailLinksResult> {
        return this.api.getEmailLinks(param.emailId,  options).toPromise();
    }

    /**
     * Get a list of URLs for email content as text/html or raw SMTP message for viewing the message in a browser.
     * Get email URLs for viewing in browser or downloading
     * @param param the request object
     */
    public getEmailPreviewURLs(param: EmailControllerApiGetEmailPreviewURLsRequest, options?: Configuration): Promise<EmailPreviewUrls> {
        return this.api.getEmailPreviewURLs(param.emailId,  options).toPromise();
    }

    /**
     * Parse an email body and return the content as an array of strings. HTML parsing uses JSoup and UNIX line separators.
     * Parse and return text from an email, stripping HTML and decoding encoded characters
     * @param param the request object
     */
    public getEmailTextLines(param: EmailControllerApiGetEmailTextLinesRequest, options?: Configuration): Promise<EmailTextLinesResult> {
        return this.api.getEmailTextLines(param.emailId, param.decodeHtmlEntities, param.lineSeparator,  options).toPromise();
    }

    /**
     * By default returns all emails across all inboxes sorted by ascending created at date. Responses are paginated. You can restrict results to a list of inbox IDs. You can also filter out read messages
     * Get all emails in all inboxes in paginated form. Email API list all.
     * @param param the request object
     */
    public getEmailsPaginated(param: EmailControllerApiGetEmailsPaginatedRequest, options?: Configuration): Promise<PageEmailProjection> {
        return this.api.getEmailsPaginated(param.inboxId, param.page, param.size, param.sort, param.unreadOnly, param.searchFilter, param.since, param.before,  options).toPromise();
    }

    /**
     * Get gravatar url for email address
     * @param param the request object
     */
    public getGravatarUrlForEmailAddress(param: EmailControllerApiGetGravatarUrlForEmailAddressRequest, options?: Configuration): Promise<GravatarUrl> {
        return this.api.getGravatarUrlForEmailAddress(param.emailAddress, param.size,  options).toPromise();
    }

    /**
     * Get the newest email in all inboxes or in a passed set of inbox IDs
     * Get latest email in all inboxes. Most recently received.
     * @param param the request object
     */
    public getLatestEmail(param: EmailControllerApiGetLatestEmailRequest, options?: Configuration): Promise<Email> {
        return this.api.getLatestEmail(param.inboxIds,  options).toPromise();
    }

    /**
     * Get the newest email in all inboxes or in a passed set of inbox IDs
     * Get latest email in an inbox. Use `WaitForController` to get emails that may not have arrived yet.
     * @param param the request object
     */
    public getLatestEmailInInbox1(param: EmailControllerApiGetLatestEmailInInbox1Request, options?: Configuration): Promise<Email> {
        return this.api.getLatestEmailInInbox1(param.inboxId,  options).toPromise();
    }

    /**
     * By default returns all emails across all team inboxes sorted by ascending created at date. Responses are paginated. You can restrict results to a list of inbox IDs. You can also filter out read messages
     * Get all organization emails. List team or shared test email accounts
     * @param param the request object
     */
    public getOrganizationEmailsPaginated(param: EmailControllerApiGetOrganizationEmailsPaginatedRequest, options?: Configuration): Promise<PageEmailProjection> {
        return this.api.getOrganizationEmailsPaginated(param.inboxId, param.page, param.size, param.sort, param.unreadOnly, param.searchFilter, param.since, param.before,  options).toPromise();
    }

    /**
     * Returns a raw, unparsed, and unprocessed email. If your client has issues processing the response it is likely due to the response content-type which is text/plain. If you need a JSON response content-type use the getRawEmailJson endpoint
     * Get raw email string. Returns unparsed raw SMTP message with headers and body.
     * @param param the request object
     */
    public getRawEmailContents(param: EmailControllerApiGetRawEmailContentsRequest, options?: Configuration): Promise<string> {
        return this.api.getRawEmailContents(param.emailId,  options).toPromise();
    }

    /**
     * Returns a raw, unparsed, and unprocessed email wrapped in a JSON response object for easier handling when compared with the getRawEmail text/plain response
     * Get raw email in JSON. Unparsed SMTP message in JSON wrapper format.
     * @param param the request object
     */
    public getRawEmailJson(param: EmailControllerApiGetRawEmailJsonRequest, options?: Configuration): Promise<RawEmailJson> {
        return this.api.getRawEmailJson(param.emailId,  options).toPromise();
    }

    /**
     * Get number of emails unread. Unread means has not been viewed in dashboard or returned in an email API response
     * Get unread email count
     * @param param the request object
     */
    public getUnreadEmailCount(param: EmailControllerApiGetUnreadEmailCountRequest, options?: Configuration): Promise<UnreadCount> {
        return this.api.getUnreadEmailCount( options).toPromise();
    }

    /**
     * Marks an email as read or unread. Pass boolean read flag to set value. This is useful if you want to read an email but keep it as unread
     * Mark an email as read on unread
     * @param param the request object
     */
    public markAsRead(param: EmailControllerApiMarkAsReadRequest, options?: Configuration): Promise<EmailPreview> {
        return this.api.markAsRead(param.emailId, param.read,  options).toPromise();
    }

    /**
     * Send the reply to the email sender or reply-to and include same subject cc bcc etc. Reply to an email and the contents will be sent with the existing subject to the emails `to`, `cc`, and `bcc`.
     * Reply to an email
     * @param param the request object
     */
    public replyToEmail(param: EmailControllerApiReplyToEmailRequest, options?: Configuration): Promise<SentEmailDto> {
        return this.api.replyToEmail(param.emailId, param.replyToEmailOptions,  options).toPromise();
    }

    /**
     * Alias for `InboxController.sendEmail` method - see original method for full details. Sends an email from a given inbox that you have created. If no inbox is supplied a random inbox will be created for you and used to send the email.
     * Send email
     * @param param the request object
     */
    public sendEmailSourceOptional(param: EmailControllerApiSendEmailSourceOptionalRequest, options?: Configuration): Promise<void> {
        return this.api.sendEmailSourceOptional(param.sendEmailOptions, param.inboxId, param.useDomainPool, param.virtualSend,  options).toPromise();
    }

    /**
     * Validate the HTML content of email if HTML is found. Considered valid if no HTML is present.
     * Validate email HTML contents
     * @param param the request object
     */
    public validateEmail(param: EmailControllerApiValidateEmailRequest, options?: Configuration): Promise<ValidationDto> {
        return this.api.validateEmail(param.emailId,  options).toPromise();
    }

}

import { ObservableEmailVerificationControllerApi } from "./ObservableAPI.ts";
import { EmailVerificationControllerApiRequestFactory, EmailVerificationControllerApiResponseProcessor} from "../apis/EmailVerificationControllerApi.ts";

export interface EmailVerificationControllerApiGetValidationRequestsRequest {
    /**
     * Optional page index in list pagination
     * @type number
     * @memberof EmailVerificationControllerApigetValidationRequests
     */
    page?: number
    /**
     * Optional page size for paginated result list.
     * @type number
     * @memberof EmailVerificationControllerApigetValidationRequests
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof EmailVerificationControllerApigetValidationRequests
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Optional search filter
     * @type string
     * @memberof EmailVerificationControllerApigetValidationRequests
     */
    searchFilter?: string
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof EmailVerificationControllerApigetValidationRequests
     */
    since?: Date
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof EmailVerificationControllerApigetValidationRequests
     */
    before?: Date
    /**
     * Filter where email is valid is true or false
     * @type boolean
     * @memberof EmailVerificationControllerApigetValidationRequests
     */
    isValid?: boolean
}

export interface EmailVerificationControllerApiValidateEmailAddressListRequest {
    /**
     * 
     * @type ValidateEmailAddressListOptions
     * @memberof EmailVerificationControllerApivalidateEmailAddressList
     */
    validateEmailAddressListOptions: ValidateEmailAddressListOptions
}

export class ObjectEmailVerificationControllerApi {
    private api: ObservableEmailVerificationControllerApi

    public constructor(configuration: Configuration, requestFactory?: EmailVerificationControllerApiRequestFactory, responseProcessor?: EmailVerificationControllerApiResponseProcessor) {
        this.api = new ObservableEmailVerificationControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Validate a list of email addresses. Per unit billing. See your plan for pricing.
     * @param param the request object
     */
    public getValidationRequests(param: EmailVerificationControllerApiGetValidationRequestsRequest, options?: Configuration): Promise<PageEmailValidationRequest> {
        return this.api.getValidationRequests(param.page, param.size, param.sort, param.searchFilter, param.since, param.before, param.isValid,  options).toPromise();
    }

    /**
     * Validate a list of email addresses. Per unit billing. See your plan for pricing.
     * @param param the request object
     */
    public validateEmailAddressList(param: EmailVerificationControllerApiValidateEmailAddressListRequest, options?: Configuration): Promise<ValidateEmailAddressListResult> {
        return this.api.validateEmailAddressList(param.validateEmailAddressListOptions,  options).toPromise();
    }

}

import { ObservableExpiredControllerApi } from "./ObservableAPI.ts";
import { ExpiredControllerApiRequestFactory, ExpiredControllerApiResponseProcessor} from "../apis/ExpiredControllerApi.ts";

export interface ExpiredControllerApiGetExpirationDefaultsRequest {
}

export interface ExpiredControllerApiGetExpiredInboxByInboxIdRequest {
    /**
     * ID of inbox you want to retrieve (not the inbox ID)
     * @type string
     * @memberof ExpiredControllerApigetExpiredInboxByInboxId
     */
    inboxId: string
}

export interface ExpiredControllerApiGetExpiredInboxRecordRequest {
    /**
     * ID of the ExpiredInboxRecord you want to retrieve. This is different from the ID of the inbox you are interested in. See other methods for getting ExpiredInboxRecord for an inbox inboxId
     * @type string
     * @memberof ExpiredControllerApigetExpiredInboxRecord
     */
    expiredId: string
}

export interface ExpiredControllerApiGetExpiredInboxesRequest {
    /**
     * Optional page index in inbox sent email list pagination
     * @type number
     * @memberof ExpiredControllerApigetExpiredInboxes
     */
    page?: number
    /**
     * Optional page size in inbox sent email list pagination
     * @type number
     * @memberof ExpiredControllerApigetExpiredInboxes
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof ExpiredControllerApigetExpiredInboxes
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof ExpiredControllerApigetExpiredInboxes
     */
    since?: Date
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof ExpiredControllerApigetExpiredInboxes
     */
    before?: Date
}

export class ObjectExpiredControllerApi {
    private api: ObservableExpiredControllerApi

    public constructor(configuration: Configuration, requestFactory?: ExpiredControllerApiRequestFactory, responseProcessor?: ExpiredControllerApiResponseProcessor) {
        this.api = new ObservableExpiredControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Return default times used for inbox expiration
     * Get default expiration settings
     * @param param the request object
     */
    public getExpirationDefaults(param: ExpiredControllerApiGetExpirationDefaultsRequest, options?: Configuration): Promise<ExpirationDefaults> {
        return this.api.getExpirationDefaults( options).toPromise();
    }

    /**
     * Use the inboxId to return an ExpiredInboxRecord if an inbox has expired. Inboxes expire and are disabled if an expiration date is set or plan requires. Returns 404 if no expired inbox is found for the inboxId
     * Get expired inbox record for a previously existing inbox
     * @param param the request object
     */
    public getExpiredInboxByInboxId(param: ExpiredControllerApiGetExpiredInboxByInboxIdRequest, options?: Configuration): Promise<ExpiredInboxDto> {
        return this.api.getExpiredInboxByInboxId(param.inboxId,  options).toPromise();
    }

    /**
     * Inboxes created with an expiration date will expire after the given date and be moved to an ExpiredInbox entity. You can still read emails in the inbox but it can no longer send or receive emails. Fetch the expired inboxes to view the old inboxes properties
     * Get an expired inbox record
     * @param param the request object
     */
    public getExpiredInboxRecord(param: ExpiredControllerApiGetExpiredInboxRecordRequest, options?: Configuration): Promise<ExpiredInboxDto> {
        return this.api.getExpiredInboxRecord(param.expiredId,  options).toPromise();
    }

    /**
     * Inboxes created with an expiration date will expire after the given date. An ExpiredInboxRecord is created that records the inboxes old ID and email address. You can still read emails in the inbox (using the inboxes old ID) but the email address associated with the inbox can no longer send or receive emails. Fetch expired inbox records to view the old inboxes properties
     * List records of expired inboxes
     * @param param the request object
     */
    public getExpiredInboxes(param: ExpiredControllerApiGetExpiredInboxesRequest, options?: Configuration): Promise<PageExpiredInboxRecordProjection> {
        return this.api.getExpiredInboxes(param.page, param.size, param.sort, param.since, param.before,  options).toPromise();
    }

}

import { ObservableExportControllerApi } from "./ObservableAPI.ts";
import { ExportControllerApiRequestFactory, ExportControllerApiResponseProcessor} from "../apis/ExportControllerApi.ts";

export interface ExportControllerApiExportEntitiesRequest {
    /**
     * 
     * @type &#39;INBOXES&#39; | &#39;CONTACTS&#39; | &#39;ATTACHMENTS&#39; | &#39;EMAILS&#39;
     * @memberof ExportControllerApiexportEntities
     */
    exportType: 'INBOXES' | 'CONTACTS' | 'ATTACHMENTS' | 'EMAILS'
    /**
     * 
     * @type string
     * @memberof ExportControllerApiexportEntities
     */
    apiKey: string
    /**
     * 
     * @type &#39;CSV_DEFAULT&#39; | &#39;CSV_EXCEL&#39;
     * @memberof ExportControllerApiexportEntities
     */
    outputFormat: 'CSV_DEFAULT' | 'CSV_EXCEL'
    /**
     * 
     * @type string
     * @memberof ExportControllerApiexportEntities
     */
    filter?: string
    /**
     * 
     * @type string
     * @memberof ExportControllerApiexportEntities
     */
    listSeparatorToken?: string
    /**
     * 
     * @type boolean
     * @memberof ExportControllerApiexportEntities
     */
    excludePreviouslyExported?: boolean
    /**
     * 
     * @type Date
     * @memberof ExportControllerApiexportEntities
     */
    createdEarliestTime?: Date
    /**
     * 
     * @type Date
     * @memberof ExportControllerApiexportEntities
     */
    createdOldestTime?: Date
}

export interface ExportControllerApiGetExportLinkRequest {
    /**
     * 
     * @type &#39;INBOXES&#39; | &#39;CONTACTS&#39; | &#39;ATTACHMENTS&#39; | &#39;EMAILS&#39;
     * @memberof ExportControllerApigetExportLink
     */
    exportType: 'INBOXES' | 'CONTACTS' | 'ATTACHMENTS' | 'EMAILS'
    /**
     * 
     * @type ExportOptions
     * @memberof ExportControllerApigetExportLink
     */
    exportOptions: ExportOptions
    /**
     * 
     * @type string
     * @memberof ExportControllerApigetExportLink
     */
    apiKey?: string
}

export class ObjectExportControllerApi {
    private api: ObservableExportControllerApi

    public constructor(configuration: Configuration, requestFactory?: ExportControllerApiRequestFactory, responseProcessor?: ExportControllerApiResponseProcessor) {
        this.api = new ObservableExportControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Export inboxes link callable via browser
     * @param param the request object
     */
    public exportEntities(param: ExportControllerApiExportEntitiesRequest, options?: Configuration): Promise<Array<string>> {
        return this.api.exportEntities(param.exportType, param.apiKey, param.outputFormat, param.filter, param.listSeparatorToken, param.excludePreviouslyExported, param.createdEarliestTime, param.createdOldestTime,  options).toPromise();
    }

    /**
     * Get export link
     * @param param the request object
     */
    public getExportLink(param: ExportControllerApiGetExportLinkRequest, options?: Configuration): Promise<ExportLink> {
        return this.api.getExportLink(param.exportType, param.exportOptions, param.apiKey,  options).toPromise();
    }

}

import { ObservableFormControllerApi } from "./ObservableAPI.ts";
import { FormControllerApiRequestFactory, FormControllerApiResponseProcessor} from "../apis/FormControllerApi.ts";

export interface FormControllerApiSubmitFormRequest {
    /**
     * The email address that submitted form should be sent to.
     * @type string
     * @memberof FormControllerApisubmitForm
     */
    to?: string
    /**
     * Optional subject of the email that will be sent.
     * @type string
     * @memberof FormControllerApisubmitForm
     */
    subject?: string
    /**
     * Optional URL to redirect form submitter to after submission. If not present user will see a success message.
     * @type string
     * @memberof FormControllerApisubmitForm
     */
    redirectTo?: string
    /**
     * Email address of the submitting user. Include this if you wish to record the submitters email address and reply to it later.
     * @type string
     * @memberof FormControllerApisubmitForm
     */
    emailAddress?: string
    /**
     * Optional success message to display if no _redirectTo present.
     * @type string
     * @memberof FormControllerApisubmitForm
     */
    successMessage?: string
    /**
     * Optional but recommended field that catches spammers out. Include as a hidden form field but LEAVE EMPTY. Spam-bots will usually fill every field. If the _spamCheck field is filled the form submission will be ignored.
     * @type string
     * @memberof FormControllerApisubmitForm
     */
    spamCheck?: string
    /**
     * All other parameters or fields will be accepted and attached to the sent email. This includes files and any HTML form field with a name. These fields will become the body of the email that is sent.
     * @type string
     * @memberof FormControllerApisubmitForm
     */
    otherParameters?: string
}

export class ObjectFormControllerApi {
    private api: ObservableFormControllerApi

    public constructor(configuration: Configuration, requestFactory?: FormControllerApiRequestFactory, responseProcessor?: FormControllerApiResponseProcessor) {
        this.api = new ObservableFormControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint allows you to submit HTML forms and receive the field values and files via email.   #### Parameters The endpoint looks for special meta parameters in the form fields OR in the URL request parameters. The meta parameters can be used to specify the behaviour of the email.   You must provide at-least a `_to` email address to tell the endpoint where the form should be emailed. These can be submitted as hidden HTML input fields with the corresponding `name` attributes or as URL query parameters such as `?_to=test@example.com`  The endpoint takes all other form fields that are named and includes them in the message body of the email. Files are sent as attachments.  #### Submitting This endpoint accepts form submission via POST method. It accepts `application/x-www-form-urlencoded`, and `multipart/form-data` content-types.  #### HTML Example ```html <form    action=\"https://api.mailslurp.com/forms\"   method=\"post\" >   <input name=\"_to\" type=\"hidden\" value=\"test@example.com\"/>   <textarea name=\"feedback\"></textarea>   <button type=\"submit\">Submit</button> </form> ```  #### URL Example ```html <form    action=\"https://api.mailslurp.com/forms?_to=test@example.com\"   method=\"post\" >   <textarea name=\"feedback\"></textarea>   <button type=\"submit\">Submit</button> </form> ```    The email address is specified by a `_to` field OR is extracted from an email alias specified by a `_toAlias` field (see the alias controller for more information).  Endpoint accepts .  You can specify a content type in HTML forms using the `enctype` attribute, for instance: `<form enctype=\"multipart/form-data\">`.  
     * Submit a form to be parsed and sent as an email to an address determined by the form fields
     * @param param the request object
     */
    public submitForm(param: FormControllerApiSubmitFormRequest, options?: Configuration): Promise<string> {
        return this.api.submitForm(param.to, param.subject, param.redirectTo, param.emailAddress, param.successMessage, param.spamCheck, param.otherParameters,  options).toPromise();
    }

}

import { ObservableGroupControllerApi } from "./ObservableAPI.ts";
import { GroupControllerApiRequestFactory, GroupControllerApiResponseProcessor} from "../apis/GroupControllerApi.ts";

export interface GroupControllerApiAddContactsToGroupRequest {
    /**
     * 
     * @type string
     * @memberof GroupControllerApiaddContactsToGroup
     */
    groupId: string
    /**
     * 
     * @type UpdateGroupContacts
     * @memberof GroupControllerApiaddContactsToGroup
     */
    updateGroupContacts: UpdateGroupContacts
}

export interface GroupControllerApiCreateGroupRequest {
    /**
     * 
     * @type CreateGroupOptions
     * @memberof GroupControllerApicreateGroup
     */
    createGroupOptions: CreateGroupOptions
}

export interface GroupControllerApiDeleteGroupRequest {
    /**
     * 
     * @type string
     * @memberof GroupControllerApideleteGroup
     */
    groupId: string
}

export interface GroupControllerApiGetAllGroupsRequest {
    /**
     * Optional page index in list pagination
     * @type number
     * @memberof GroupControllerApigetAllGroups
     */
    page?: number
    /**
     * Optional page size in list pagination
     * @type number
     * @memberof GroupControllerApigetAllGroups
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof GroupControllerApigetAllGroups
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof GroupControllerApigetAllGroups
     */
    since?: Date
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof GroupControllerApigetAllGroups
     */
    before?: Date
}

export interface GroupControllerApiGetGroupRequest {
    /**
     * 
     * @type string
     * @memberof GroupControllerApigetGroup
     */
    groupId: string
}

export interface GroupControllerApiGetGroupWithContactsRequest {
    /**
     * 
     * @type string
     * @memberof GroupControllerApigetGroupWithContacts
     */
    groupId: string
}

export interface GroupControllerApiGetGroupWithContactsPaginatedRequest {
    /**
     * 
     * @type string
     * @memberof GroupControllerApigetGroupWithContactsPaginated
     */
    groupId: string
    /**
     * Optional page index in group contact pagination
     * @type number
     * @memberof GroupControllerApigetGroupWithContactsPaginated
     */
    page?: number
    /**
     * Optional page size in group contact pagination
     * @type number
     * @memberof GroupControllerApigetGroupWithContactsPaginated
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof GroupControllerApigetGroupWithContactsPaginated
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof GroupControllerApigetGroupWithContactsPaginated
     */
    since?: Date
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof GroupControllerApigetGroupWithContactsPaginated
     */
    before?: Date
}

export interface GroupControllerApiGetGroupsRequest {
}

export interface GroupControllerApiRemoveContactsFromGroupRequest {
    /**
     * 
     * @type string
     * @memberof GroupControllerApiremoveContactsFromGroup
     */
    groupId: string
    /**
     * 
     * @type UpdateGroupContacts
     * @memberof GroupControllerApiremoveContactsFromGroup
     */
    updateGroupContacts: UpdateGroupContacts
}

export class ObjectGroupControllerApi {
    private api: ObservableGroupControllerApi

    public constructor(configuration: Configuration, requestFactory?: GroupControllerApiRequestFactory, responseProcessor?: GroupControllerApiResponseProcessor) {
        this.api = new ObservableGroupControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add contacts to a group
     * @param param the request object
     */
    public addContactsToGroup(param: GroupControllerApiAddContactsToGroupRequest, options?: Configuration): Promise<GroupContactsDto> {
        return this.api.addContactsToGroup(param.groupId, param.updateGroupContacts,  options).toPromise();
    }

    /**
     * Create a group
     * @param param the request object
     */
    public createGroup(param: GroupControllerApiCreateGroupRequest, options?: Configuration): Promise<GroupDto> {
        return this.api.createGroup(param.createGroupOptions,  options).toPromise();
    }

    /**
     * Delete group
     * @param param the request object
     */
    public deleteGroup(param: GroupControllerApiDeleteGroupRequest, options?: Configuration): Promise<void> {
        return this.api.deleteGroup(param.groupId,  options).toPromise();
    }

    /**
     * Get all Contact Groups in paginated format
     * @param param the request object
     */
    public getAllGroups(param: GroupControllerApiGetAllGroupsRequest, options?: Configuration): Promise<PageGroupProjection> {
        return this.api.getAllGroups(param.page, param.size, param.sort, param.since, param.before,  options).toPromise();
    }

    /**
     * Get group
     * @param param the request object
     */
    public getGroup(param: GroupControllerApiGetGroupRequest, options?: Configuration): Promise<GroupDto> {
        return this.api.getGroup(param.groupId,  options).toPromise();
    }

    /**
     * Get group and contacts belonging to it
     * @param param the request object
     */
    public getGroupWithContacts(param: GroupControllerApiGetGroupWithContactsRequest, options?: Configuration): Promise<GroupContactsDto> {
        return this.api.getGroupWithContacts(param.groupId,  options).toPromise();
    }

    /**
     * Get group and paginated contacts belonging to it
     * @param param the request object
     */
    public getGroupWithContactsPaginated(param: GroupControllerApiGetGroupWithContactsPaginatedRequest, options?: Configuration): Promise<PageContactProjection> {
        return this.api.getGroupWithContactsPaginated(param.groupId, param.page, param.size, param.sort, param.since, param.before,  options).toPromise();
    }

    /**
     * Get all groups
     * @param param the request object
     */
    public getGroups(param: GroupControllerApiGetGroupsRequest, options?: Configuration): Promise<Array<GroupProjection>> {
        return this.api.getGroups( options).toPromise();
    }

    /**
     * Remove contacts from a group
     * @param param the request object
     */
    public removeContactsFromGroup(param: GroupControllerApiRemoveContactsFromGroupRequest, options?: Configuration): Promise<GroupContactsDto> {
        return this.api.removeContactsFromGroup(param.groupId, param.updateGroupContacts,  options).toPromise();
    }

}

import { ObservableInboxControllerApi } from "./ObservableAPI.ts";
import { InboxControllerApiRequestFactory, InboxControllerApiResponseProcessor} from "../apis/InboxControllerApi.ts";

export interface InboxControllerApiCancelScheduledJobRequest {
    /**
     * 
     * @type string
     * @memberof InboxControllerApicancelScheduledJob
     */
    jobId: string
}

export interface InboxControllerApiCreateInboxRequest {
    /**
     * A custom email address to use with the inbox. Defaults to null. When null MailSlurp will assign a random email address to the inbox such as &#x60;123@mailslurp.com&#x60;. If you use the &#x60;useDomainPool&#x60; option when the email address is null it will generate an email address with a more varied domain ending such as &#x60;123@mailslurp.info&#x60; or &#x60;123@mailslurp.biz&#x60;. When a custom email address is provided the address is split into a domain and the domain is queried against your user. If you have created the domain in the MailSlurp dashboard and verified it you can use any email address that ends with the domain. Note domain types must match the inbox type - so &#x60;SMTP&#x60; inboxes will only work with &#x60;SMTP&#x60; type domains. Avoid &#x60;SMTP&#x60; inboxes if you need to send emails as they can only receive. Send an email to this address and the inbox will receive and store it for you. To retrieve the email use the Inbox and Email Controller endpoints with the inbox ID.
     * @type string
     * @memberof InboxControllerApicreateInbox
     */
    emailAddress?: string
    /**
     * Tags that inbox has been tagged with. Tags can be added to inboxes to group different inboxes within an account. You can also search for inboxes by tag in the dashboard UI.
     * @type Array&lt;string&gt;
     * @memberof InboxControllerApicreateInbox
     */
    tags?: Array<string>
    /**
     * Optional name of the inbox. Displayed in the dashboard for easier search and used as the sender name when sending emails.
     * @type string
     * @memberof InboxControllerApicreateInbox
     */
    name?: string
    /**
     * Optional description of the inbox for labelling purposes. Is shown in the dashboard and can be used with
     * @type string
     * @memberof InboxControllerApicreateInbox
     */
    description?: string
    /**
     * Use the MailSlurp domain name pool with this inbox when creating the email address. Defaults to null. If enabled the inbox will be an email address with a domain randomly chosen from a list of the MailSlurp domains. This is useful when the default &#x60;@mailslurp.com&#x60; email addresses used with inboxes are blocked or considered spam by a provider or receiving service. When domain pool is enabled an email address will be generated ending in &#x60;@mailslurp.{world,info,xyz,...}&#x60; . This means a TLD is randomly selecting from a list of &#x60;.biz&#x60;, &#x60;.info&#x60;, &#x60;.xyz&#x60; etc to add variance to the generated email addresses. When null or false MailSlurp uses the default behavior of &#x60;@mailslurp.com&#x60; or custom email address provided by the emailAddress field. Note this feature is only available for &#x60;HTTP&#x60; inbox types.
     * @type boolean
     * @memberof InboxControllerApicreateInbox
     */
    useDomainPool?: boolean
    /**
     * Is the inbox a favorite. Marking an inbox as a favorite is typically done in the dashboard for quick access or filtering
     * @type boolean
     * @memberof InboxControllerApicreateInbox
     */
    favourite?: boolean
    /**
     * Optional inbox expiration date. If null then this inbox is permanent and the emails in it won&#39;t be deleted. If an expiration date is provided or is required by your plan the inbox will be closed when the expiration time is reached. Expired inboxes still contain their emails but can no longer send or receive emails. An ExpiredInboxRecord is created when an inbox and the email address and inbox ID are recorded. The expiresAt property is a timestamp string in ISO DateTime Format yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSXXX.
     * @type Date
     * @memberof InboxControllerApicreateInbox
     */
    expiresAt?: Date
    /**
     * Number of milliseconds that inbox should exist for
     * @type number
     * @memberof InboxControllerApicreateInbox
     */
    expiresIn?: number
    /**
     * DEPRECATED (team access is always true). Grant team access to this inbox and the emails that belong to it for team members of your organization.
     * @type boolean
     * @memberof InboxControllerApicreateInbox
     */
    allowTeamAccess?: boolean
    /**
     * HTTP (default) or SMTP inbox type. HTTP inboxes are default and best solution for most cases. SMTP inboxes are more reliable for public inbound email consumption (but do not support sending emails). When using custom domains the domain type must match the inbox type. HTTP inboxes are processed by AWS SES while SMTP inboxes use a custom mail server running at &#x60;mx.mailslurp.com&#x60;.
     * @type &#39;HTTP_INBOX&#39; | &#39;SMTP_INBOX&#39;
     * @memberof InboxControllerApicreateInbox
     */
    inboxType?: 'HTTP_INBOX' | 'SMTP_INBOX'
    /**
     * Virtual inbox prevents any outbound emails from being sent. It creates sent email records but will never send real emails to recipients. Great for testing and faking email sending.
     * @type boolean
     * @memberof InboxControllerApicreateInbox
     */
    virtualInbox?: boolean
    /**
     * Use a shorter email address under 31 characters
     * @type boolean
     * @memberof InboxControllerApicreateInbox
     */
    useShortAddress?: boolean
    /**
     * ID of custom domain to use for email address.
     * @type string
     * @memberof InboxControllerApicreateInbox
     */
    domainId?: string
    /**
     * FQDN domain name for the domain you have verified. Will be appended with a randomly assigned recipient name. Use the &#x60;emailAddress&#x60; option instead to specify the full custom inbox.
     * @type string
     * @memberof InboxControllerApicreateInbox
     */
    domainName?: string
}

export interface InboxControllerApiCreateInboxRulesetRequest {
    /**
     * inboxId
     * @type string
     * @memberof InboxControllerApicreateInboxRuleset
     */
    inboxId: string
    /**
     * 
     * @type CreateInboxRulesetOptions
     * @memberof InboxControllerApicreateInboxRuleset
     */
    createInboxRulesetOptions: CreateInboxRulesetOptions
}

export interface InboxControllerApiCreateInboxWithDefaultsRequest {
}

export interface InboxControllerApiCreateInboxWithOptionsRequest {
    /**
     * 
     * @type CreateInboxDto
     * @memberof InboxControllerApicreateInboxWithOptions
     */
    createInboxDto: CreateInboxDto
}

export interface InboxControllerApiDeleteAllInboxEmailsRequest {
    /**
     * 
     * @type string
     * @memberof InboxControllerApideleteAllInboxEmails
     */
    inboxId: string
}

export interface InboxControllerApiDeleteAllInboxesRequest {
}

export interface InboxControllerApiDeleteInboxRequest {
    /**
     * 
     * @type string
     * @memberof InboxControllerApideleteInbox
     */
    inboxId: string
}

export interface InboxControllerApiDoesInboxExistRequest {
    /**
     * Email address
     * @type string
     * @memberof InboxControllerApidoesInboxExist
     */
    emailAddress: string
    /**
     * 
     * @type boolean
     * @memberof InboxControllerApidoesInboxExist
     */
    allowCatchAll?: boolean
}

export interface InboxControllerApiFlushExpiredRequest {
    /**
     * Optional expired at before flag to flush expired inboxes that have expired before the given time
     * @type Date
     * @memberof InboxControllerApiflushExpired
     */
    before?: Date
}

export interface InboxControllerApiGetAllInboxesRequest {
    /**
     * Optional page index in list pagination
     * @type number
     * @memberof InboxControllerApigetAllInboxes
     */
    page?: number
    /**
     * Optional page size in list pagination
     * @type number
     * @memberof InboxControllerApigetAllInboxes
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof InboxControllerApigetAllInboxes
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Optionally filter results for favourites only
     * @type boolean
     * @memberof InboxControllerApigetAllInboxes
     */
    favourite?: boolean
    /**
     * Optionally filter by search words partial matching ID, tags, name, and email address
     * @type string
     * @memberof InboxControllerApigetAllInboxes
     */
    search?: string
    /**
     * Optionally filter by tags. Will return inboxes that include given tags
     * @type string
     * @memberof InboxControllerApigetAllInboxes
     */
    tag?: string
    /**
     * DEPRECATED. Optionally filter by team access.
     * @type boolean
     * @memberof InboxControllerApigetAllInboxes
     */
    teamAccess?: boolean
    /**
     * Optional filter by created after given date time
     * @type Date
     * @memberof InboxControllerApigetAllInboxes
     */
    since?: Date
    /**
     * Optional filter by created before given date time
     * @type Date
     * @memberof InboxControllerApigetAllInboxes
     */
    before?: Date
    /**
     * Optional filter by inbox type
     * @type &#39;HTTP_INBOX&#39; | &#39;SMTP_INBOX&#39;
     * @memberof InboxControllerApigetAllInboxes
     */
    inboxType?: 'HTTP_INBOX' | 'SMTP_INBOX'
    /**
     * Optional domain ID filter
     * @type string
     * @memberof InboxControllerApigetAllInboxes
     */
    domainId?: string
}

export interface InboxControllerApiGetAllScheduledJobsRequest {
    /**
     * Optional page index in scheduled job list pagination
     * @type number
     * @memberof InboxControllerApigetAllScheduledJobs
     */
    page?: number
    /**
     * Optional page size in scheduled job list pagination
     * @type number
     * @memberof InboxControllerApigetAllScheduledJobs
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof InboxControllerApigetAllScheduledJobs
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof InboxControllerApigetAllScheduledJobs
     */
    since?: Date
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof InboxControllerApigetAllScheduledJobs
     */
    before?: Date
}

export interface InboxControllerApiGetDeliveryStatusesByInboxIdRequest {
    /**
     * 
     * @type string
     * @memberof InboxControllerApigetDeliveryStatusesByInboxId
     */
    inboxId: string
    /**
     * Optional page index in delivery status list pagination
     * @type number
     * @memberof InboxControllerApigetDeliveryStatusesByInboxId
     */
    page?: number
    /**
     * Optional page size in delivery status list pagination
     * @type number
     * @memberof InboxControllerApigetDeliveryStatusesByInboxId
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof InboxControllerApigetDeliveryStatusesByInboxId
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof InboxControllerApigetDeliveryStatusesByInboxId
     */
    since?: Date
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof InboxControllerApigetDeliveryStatusesByInboxId
     */
    before?: Date
}

export interface InboxControllerApiGetEmailsRequest {
    /**
     * Id of inbox that emails belongs to
     * @type string
     * @memberof InboxControllerApigetEmails
     */
    inboxId: string
    /**
     * Alias for limit. Assessed first before assessing any passed limit.
     * @type number
     * @memberof InboxControllerApigetEmails
     */
    size?: number
    /**
     * Limit the result set, ordered by received date time sort direction. Maximum 100. For more listing options see the email controller
     * @type number
     * @memberof InboxControllerApigetEmails
     */
    limit?: number
    /**
     * Sort the results by received date and direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof InboxControllerApigetEmails
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Maximum milliseconds to spend retrying inbox database until minCount emails are returned
     * @type number
     * @memberof InboxControllerApigetEmails
     */
    retryTimeout?: number
    /**
     * 
     * @type number
     * @memberof InboxControllerApigetEmails
     */
    delayTimeout?: number
    /**
     * Minimum acceptable email count. Will cause request to hang (and retry) until minCount is satisfied or retryTimeout is reached.
     * @type number
     * @memberof InboxControllerApigetEmails
     */
    minCount?: number
    /**
     * 
     * @type boolean
     * @memberof InboxControllerApigetEmails
     */
    unreadOnly?: boolean
    /**
     * Exclude emails received after this ISO 8601 date time
     * @type Date
     * @memberof InboxControllerApigetEmails
     */
    before?: Date
    /**
     * Exclude emails received before this ISO 8601 date time
     * @type Date
     * @memberof InboxControllerApigetEmails
     */
    since?: Date
}

export interface InboxControllerApiGetImapSmtpAccessRequest {
    /**
     * Inbox ID
     * @type string
     * @memberof InboxControllerApigetImapSmtpAccess
     */
    inboxId?: string
}

export interface InboxControllerApiGetInboxRequest {
    /**
     * 
     * @type string
     * @memberof InboxControllerApigetInbox
     */
    inboxId: string
}

export interface InboxControllerApiGetInboxByEmailAddressRequest {
    /**
     * 
     * @type string
     * @memberof InboxControllerApigetInboxByEmailAddress
     */
    emailAddress: string
}

export interface InboxControllerApiGetInboxByNameRequest {
    /**
     * 
     * @type string
     * @memberof InboxControllerApigetInboxByName
     */
    name: string
}

export interface InboxControllerApiGetInboxCountRequest {
}

export interface InboxControllerApiGetInboxEmailCountRequest {
    /**
     * Id of inbox that emails belongs to
     * @type string
     * @memberof InboxControllerApigetInboxEmailCount
     */
    inboxId: string
}

export interface InboxControllerApiGetInboxEmailsPaginatedRequest {
    /**
     * Id of inbox that emails belongs to
     * @type string
     * @memberof InboxControllerApigetInboxEmailsPaginated
     */
    inboxId: string
    /**
     * Optional page index in inbox emails list pagination
     * @type number
     * @memberof InboxControllerApigetInboxEmailsPaginated
     */
    page?: number
    /**
     * Optional page size in inbox emails list pagination
     * @type number
     * @memberof InboxControllerApigetInboxEmailsPaginated
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof InboxControllerApigetInboxEmailsPaginated
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Optional filter by received after given date time
     * @type Date
     * @memberof InboxControllerApigetInboxEmailsPaginated
     */
    since?: Date
    /**
     * Optional filter by received before given date time
     * @type Date
     * @memberof InboxControllerApigetInboxEmailsPaginated
     */
    before?: Date
}

export interface InboxControllerApiGetInboxIdsRequest {
}

export interface InboxControllerApiGetInboxSentEmailsRequest {
    /**
     * 
     * @type string
     * @memberof InboxControllerApigetInboxSentEmails
     */
    inboxId: string
    /**
     * Optional page index in inbox sent email list pagination
     * @type number
     * @memberof InboxControllerApigetInboxSentEmails
     */
    page?: number
    /**
     * Optional page size in inbox sent email list pagination
     * @type number
     * @memberof InboxControllerApigetInboxSentEmails
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof InboxControllerApigetInboxSentEmails
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Optional sent email search
     * @type string
     * @memberof InboxControllerApigetInboxSentEmails
     */
    searchFilter?: string
    /**
     * Optional filter by sent after given date time
     * @type Date
     * @memberof InboxControllerApigetInboxSentEmails
     */
    since?: Date
    /**
     * Optional filter by sent before given date time
     * @type Date
     * @memberof InboxControllerApigetInboxSentEmails
     */
    before?: Date
}

export interface InboxControllerApiGetInboxTagsRequest {
}

export interface InboxControllerApiGetInboxesRequest {
    /**
     * Optional result size limit. Note an automatic limit of 100 results is applied. See the paginated &#x60;getAllEmails&#x60; for larger queries.
     * @type number
     * @memberof InboxControllerApigetInboxes
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof InboxControllerApigetInboxes
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Optional filter by created after given date time
     * @type Date
     * @memberof InboxControllerApigetInboxes
     */
    since?: Date
    /**
     * Optional exclude catch all inboxes
     * @type boolean
     * @memberof InboxControllerApigetInboxes
     */
    excludeCatchAllInboxes?: boolean
    /**
     * Optional filter by created before given date time
     * @type Date
     * @memberof InboxControllerApigetInboxes
     */
    before?: Date
}

export interface InboxControllerApiGetLatestEmailInInboxRequest {
    /**
     * ID of the inbox you want to get the latest email from
     * @type string
     * @memberof InboxControllerApigetLatestEmailInInbox
     */
    inboxId: string
    /**
     * Timeout milliseconds to wait for latest email
     * @type number
     * @memberof InboxControllerApigetLatestEmailInInbox
     */
    timeoutMillis: number
}

export interface InboxControllerApiGetOrganizationInboxesRequest {
    /**
     * Optional page index in list pagination
     * @type number
     * @memberof InboxControllerApigetOrganizationInboxes
     */
    page?: number
    /**
     * Optional page size in list pagination
     * @type number
     * @memberof InboxControllerApigetOrganizationInboxes
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof InboxControllerApigetOrganizationInboxes
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Optional search filter
     * @type string
     * @memberof InboxControllerApigetOrganizationInboxes
     */
    searchFilter?: string
    /**
     * Optional filter by created after given date time
     * @type Date
     * @memberof InboxControllerApigetOrganizationInboxes
     */
    since?: Date
    /**
     * Optional filter by created before given date time
     * @type Date
     * @memberof InboxControllerApigetOrganizationInboxes
     */
    before?: Date
}

export interface InboxControllerApiGetScheduledJobRequest {
    /**
     * 
     * @type string
     * @memberof InboxControllerApigetScheduledJob
     */
    jobId: string
}

export interface InboxControllerApiGetScheduledJobsByInboxIdRequest {
    /**
     * 
     * @type string
     * @memberof InboxControllerApigetScheduledJobsByInboxId
     */
    inboxId: string
    /**
     * Optional page index in scheduled job list pagination
     * @type number
     * @memberof InboxControllerApigetScheduledJobsByInboxId
     */
    page?: number
    /**
     * Optional page size in scheduled job list pagination
     * @type number
     * @memberof InboxControllerApigetScheduledJobsByInboxId
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof InboxControllerApigetScheduledJobsByInboxId
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof InboxControllerApigetScheduledJobsByInboxId
     */
    since?: Date
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof InboxControllerApigetScheduledJobsByInboxId
     */
    before?: Date
}

export interface InboxControllerApiListInboxRulesetsRequest {
    /**
     * 
     * @type string
     * @memberof InboxControllerApilistInboxRulesets
     */
    inboxId: string
    /**
     * Optional page index in inbox ruleset list pagination
     * @type number
     * @memberof InboxControllerApilistInboxRulesets
     */
    page?: number
    /**
     * Optional page size in inbox ruleset list pagination
     * @type number
     * @memberof InboxControllerApilistInboxRulesets
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof InboxControllerApilistInboxRulesets
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Optional search filter
     * @type string
     * @memberof InboxControllerApilistInboxRulesets
     */
    searchFilter?: string
    /**
     * Optional filter by created after given date time
     * @type Date
     * @memberof InboxControllerApilistInboxRulesets
     */
    since?: Date
    /**
     * Optional filter by created before given date time
     * @type Date
     * @memberof InboxControllerApilistInboxRulesets
     */
    before?: Date
}

export interface InboxControllerApiListInboxTrackingPixelsRequest {
    /**
     * 
     * @type string
     * @memberof InboxControllerApilistInboxTrackingPixels
     */
    inboxId: string
    /**
     * Optional page index in inbox tracking pixel list pagination
     * @type number
     * @memberof InboxControllerApilistInboxTrackingPixels
     */
    page?: number
    /**
     * Optional page size in inbox tracking pixel list pagination
     * @type number
     * @memberof InboxControllerApilistInboxTrackingPixels
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof InboxControllerApilistInboxTrackingPixels
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Optional search filter
     * @type string
     * @memberof InboxControllerApilistInboxTrackingPixels
     */
    searchFilter?: string
    /**
     * Optional filter by created after given date time
     * @type Date
     * @memberof InboxControllerApilistInboxTrackingPixels
     */
    since?: Date
    /**
     * Optional filter by created before given date time
     * @type Date
     * @memberof InboxControllerApilistInboxTrackingPixels
     */
    before?: Date
}

export interface InboxControllerApiSendEmailRequest {
    /**
     * ID of the inbox you want to send the email from
     * @type string
     * @memberof InboxControllerApisendEmail
     */
    inboxId: string
    /**
     * 
     * @type SendEmailOptions
     * @memberof InboxControllerApisendEmail
     */
    sendEmailOptions: SendEmailOptions
}

export interface InboxControllerApiSendEmailAndConfirmRequest {
    /**
     * ID of the inbox you want to send the email from
     * @type string
     * @memberof InboxControllerApisendEmailAndConfirm
     */
    inboxId: string
    /**
     * 
     * @type SendEmailOptions
     * @memberof InboxControllerApisendEmailAndConfirm
     */
    sendEmailOptions: SendEmailOptions
}

export interface InboxControllerApiSendEmailWithQueueRequest {
    /**
     * ID of the inbox you want to send the email from
     * @type string
     * @memberof InboxControllerApisendEmailWithQueue
     */
    inboxId: string
    /**
     * Validate before adding to queue
     * @type boolean
     * @memberof InboxControllerApisendEmailWithQueue
     */
    validateBeforeEnqueue: boolean
    /**
     * 
     * @type SendEmailOptions
     * @memberof InboxControllerApisendEmailWithQueue
     */
    sendEmailOptions: SendEmailOptions
}

export interface InboxControllerApiSendSmtpEnvelopeRequest {
    /**
     * ID of the inbox you want to send the email from
     * @type string
     * @memberof InboxControllerApisendSmtpEnvelope
     */
    inboxId: string
    /**
     * 
     * @type SendSMTPEnvelopeOptions
     * @memberof InboxControllerApisendSmtpEnvelope
     */
    sendSMTPEnvelopeOptions: SendSMTPEnvelopeOptions
}

export interface InboxControllerApiSendTestEmailRequest {
    /**
     * 
     * @type string
     * @memberof InboxControllerApisendTestEmail
     */
    inboxId: string
}

export interface InboxControllerApiSendWithScheduleRequest {
    /**
     * ID of the inbox you want to send the email from
     * @type string
     * @memberof InboxControllerApisendWithSchedule
     */
    inboxId: string
    /**
     * 
     * @type SendEmailOptions
     * @memberof InboxControllerApisendWithSchedule
     */
    sendEmailOptions: SendEmailOptions
    /**
     * Sending timestamp
     * @type Date
     * @memberof InboxControllerApisendWithSchedule
     */
    sendAtTimestamp?: Date
    /**
     * Send after n seconds
     * @type number
     * @memberof InboxControllerApisendWithSchedule
     */
    sendAtNowPlusSeconds?: number
    /**
     * Validate before adding to queue
     * @type boolean
     * @memberof InboxControllerApisendWithSchedule
     */
    validateBeforeEnqueue?: boolean
}

export interface InboxControllerApiSetInboxFavouritedRequest {
    /**
     * ID of inbox to set favourite state
     * @type string
     * @memberof InboxControllerApisetInboxFavourited
     */
    inboxId: string
    /**
     * 
     * @type SetInboxFavouritedOptions
     * @memberof InboxControllerApisetInboxFavourited
     */
    setInboxFavouritedOptions: SetInboxFavouritedOptions
}

export interface InboxControllerApiUpdateInboxRequest {
    /**
     * 
     * @type string
     * @memberof InboxControllerApiupdateInbox
     */
    inboxId: string
    /**
     * 
     * @type UpdateInboxOptions
     * @memberof InboxControllerApiupdateInbox
     */
    updateInboxOptions: UpdateInboxOptions
}

export class ObjectInboxControllerApi {
    private api: ObservableInboxControllerApi

    public constructor(configuration: Configuration, requestFactory?: InboxControllerApiRequestFactory, responseProcessor?: InboxControllerApiResponseProcessor) {
        this.api = new ObservableInboxControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a scheduled email job and cancel it. Will fail if status of job is already cancelled, failed, or complete.
     * Cancel a scheduled email job
     * @param param the request object
     */
    public cancelScheduledJob(param: InboxControllerApiCancelScheduledJobRequest, options?: Configuration): Promise<ScheduledJobDto> {
        return this.api.cancelScheduledJob(param.jobId,  options).toPromise();
    }

    /**
     * Create a new inbox and with a randomized email address to send and receive from. Pass emailAddress parameter if you wish to use a specific email address. Creating an inbox is required before sending or receiving emails. If writing tests it is recommended that you create a new inbox during each test method so that it is unique and empty. 
     * Create an inbox email address. An inbox has a real email address and can send and receive emails. Inboxes can be either `SMTP` or `HTTP` inboxes.
     * @param param the request object
     */
    public createInbox(param: InboxControllerApiCreateInboxRequest, options?: Configuration): Promise<InboxDto> {
        return this.api.createInbox(param.emailAddress, param.tags, param.name, param.description, param.useDomainPool, param.favourite, param.expiresAt, param.expiresIn, param.allowTeamAccess, param.inboxType, param.virtualInbox, param.useShortAddress, param.domainId, param.domainName,  options).toPromise();
    }

    /**
     * Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving
     * Create an inbox ruleset
     * @param param the request object
     */
    public createInboxRuleset(param: InboxControllerApiCreateInboxRulesetRequest, options?: Configuration): Promise<InboxRulesetDto> {
        return this.api.createInboxRuleset(param.inboxId, param.createInboxRulesetOptions,  options).toPromise();
    }

    /**
     * Create an inbox with default options. Uses MailSlurp domain pool address and is private.
     * @param param the request object
     */
    public createInboxWithDefaults(param: InboxControllerApiCreateInboxWithDefaultsRequest, options?: Configuration): Promise<InboxDto> {
        return this.api.createInboxWithDefaults( options).toPromise();
    }

    /**
     * Additional endpoint that allows inbox creation with request body options. Can be more flexible that other methods for some clients.
     * Create an inbox with options. Extended options for inbox creation.
     * @param param the request object
     */
    public createInboxWithOptions(param: InboxControllerApiCreateInboxWithOptionsRequest, options?: Configuration): Promise<InboxDto> {
        return this.api.createInboxWithOptions(param.createInboxDto,  options).toPromise();
    }

    /**
     * Deletes all emails in an inbox. Be careful as emails cannot be recovered
     * Delete all emails in a given inboxes.
     * @param param the request object
     */
    public deleteAllInboxEmails(param: InboxControllerApiDeleteAllInboxEmailsRequest, options?: Configuration): Promise<void> {
        return this.api.deleteAllInboxEmails(param.inboxId,  options).toPromise();
    }

    /**
     * Permanently delete all inboxes and associated email addresses. This will also delete all emails within the inboxes. Be careful as inboxes cannot be recovered once deleted. Note: deleting inboxes will not impact your usage limits. Monthly inbox creation limits are based on how many inboxes were created in the last 30 days, not how many inboxes you currently have.
     * Delete all inboxes
     * @param param the request object
     */
    public deleteAllInboxes(param: InboxControllerApiDeleteAllInboxesRequest, options?: Configuration): Promise<void> {
        return this.api.deleteAllInboxes( options).toPromise();
    }

    /**
     * Permanently delete an inbox and associated email address as well as all emails within the given inbox. This action cannot be undone. Note: deleting an inbox will not affect your account usage. Monthly inbox usage is based on how many inboxes you create within 30 days, not how many exist at time of request.
     * Delete inbox
     * @param param the request object
     */
    public deleteInbox(param: InboxControllerApiDeleteInboxRequest, options?: Configuration): Promise<void> {
        return this.api.deleteInbox(param.inboxId,  options).toPromise();
    }

    /**
     * Check if inboxes exist by email address. Useful if you are sending emails to mailslurp addresses
     * Does inbox exist
     * @param param the request object
     */
    public doesInboxExist(param: InboxControllerApiDoesInboxExistRequest, options?: Configuration): Promise<InboxExistsDto> {
        return this.api.doesInboxExist(param.emailAddress, param.allowCatchAll,  options).toPromise();
    }

    /**
     * Remove any expired inboxes for your account (instead of waiting for scheduled removal on server)
     * Remove expired inboxes
     * @param param the request object
     */
    public flushExpired(param: InboxControllerApiFlushExpiredRequest, options?: Configuration): Promise<FlushExpiredInboxesResult> {
        return this.api.flushExpired(param.before,  options).toPromise();
    }

    /**
     * List inboxes in paginated form. The results are available on the `content` property of the returned object. This method allows for page index (zero based), page size (how many results to return), and a sort direction (based on createdAt time). You Can also filter by whether an inbox is favorited or use email address pattern. This method is the recommended way to query inboxes. The alternative `getInboxes` method returns a full list of inboxes but is limited to 100 results.
     * List All Inboxes Paginated
     * @param param the request object
     */
    public getAllInboxes(param: InboxControllerApiGetAllInboxesRequest, options?: Configuration): Promise<PageInboxProjection> {
        return this.api.getAllInboxes(param.page, param.size, param.sort, param.favourite, param.search, param.tag, param.teamAccess, param.since, param.before, param.inboxType, param.domainId,  options).toPromise();
    }

    /**
     * Schedule sending of emails using scheduled jobs. These can be inbox or account level.
     * Get all scheduled email sending jobs for account
     * @param param the request object
     */
    public getAllScheduledJobs(param: InboxControllerApiGetAllScheduledJobsRequest, options?: Configuration): Promise<PageScheduledJobs> {
        return this.api.getAllScheduledJobs(param.page, param.size, param.sort, param.since, param.before,  options).toPromise();
    }

    /**
     * Get all email delivery statuses for an inbox
     * @param param the request object
     */
    public getDeliveryStatusesByInboxId(param: InboxControllerApiGetDeliveryStatusesByInboxIdRequest, options?: Configuration): Promise<PageDeliveryStatus> {
        return this.api.getDeliveryStatusesByInboxId(param.inboxId, param.page, param.size, param.sort, param.since, param.before,  options).toPromise();
    }

    /**
     * List emails that an inbox has received. Only emails that are sent to the inbox's email address will appear in the inbox. It may take several seconds for any email you send to an inbox's email address to appear in the inbox. To make this endpoint wait for a minimum number of emails use the `minCount` parameter. The server will retry the inbox database until the `minCount` is satisfied or the `retryTimeout` is reached
     * Get emails in an Inbox. This method is not idempotent as it allows retries and waits if you want certain conditions to be met before returning. For simple listing and sorting of known emails use the email controller instead.
     * @param param the request object
     */
    public getEmails(param: InboxControllerApiGetEmailsRequest, options?: Configuration): Promise<Array<EmailPreview>> {
        return this.api.getEmails(param.inboxId, param.size, param.limit, param.sort, param.retryTimeout, param.delayTimeout, param.minCount, param.unreadOnly, param.before, param.since,  options).toPromise();
    }

    /**
     * Get IMAP and SMTP access usernames and passwords
     * @param param the request object
     */
    public getImapSmtpAccess(param: InboxControllerApiGetImapSmtpAccessRequest, options?: Configuration): Promise<ImapSmtpAccessDetails> {
        return this.api.getImapSmtpAccess(param.inboxId,  options).toPromise();
    }

    /**
     * Returns an inbox's properties, including its email address and ID.
     * Get Inbox. Returns properties of an inbox.
     * @param param the request object
     */
    public getInbox(param: InboxControllerApiGetInboxRequest, options?: Configuration): Promise<InboxDto> {
        return this.api.getInbox(param.inboxId,  options).toPromise();
    }

    /**
     * Get a inbox result by email address
     * Search for an inbox with the provided email address
     * @param param the request object
     */
    public getInboxByEmailAddress(param: InboxControllerApiGetInboxByEmailAddressRequest, options?: Configuration): Promise<InboxByEmailAddressResult> {
        return this.api.getInboxByEmailAddress(param.emailAddress,  options).toPromise();
    }

    /**
     * Get a inbox result by name
     * Search for an inbox with the given name
     * @param param the request object
     */
    public getInboxByName(param: InboxControllerApiGetInboxByNameRequest, options?: Configuration): Promise<InboxByNameResult> {
        return this.api.getInboxByName(param.name,  options).toPromise();
    }

    /**
     * Get total inbox count
     * @param param the request object
     */
    public getInboxCount(param: InboxControllerApiGetInboxCountRequest, options?: Configuration): Promise<CountDto> {
        return this.api.getInboxCount( options).toPromise();
    }

    /**
     * Get email count in inbox
     * @param param the request object
     */
    public getInboxEmailCount(param: InboxControllerApiGetInboxEmailCountRequest, options?: Configuration): Promise<CountDto> {
        return this.api.getInboxEmailCount(param.inboxId,  options).toPromise();
    }

    /**
     * Get a paginated list of emails in an inbox. Does not hold connections open.
     * Get inbox emails paginated
     * @param param the request object
     */
    public getInboxEmailsPaginated(param: InboxControllerApiGetInboxEmailsPaginatedRequest, options?: Configuration): Promise<PageEmailPreview> {
        return this.api.getInboxEmailsPaginated(param.inboxId, param.page, param.size, param.sort, param.since, param.before,  options).toPromise();
    }

    /**
     * Get list of inbox IDs
     * Get all inbox IDs
     * @param param the request object
     */
    public getInboxIds(param: InboxControllerApiGetInboxIdsRequest, options?: Configuration): Promise<InboxIdsResult> {
        return this.api.getInboxIds( options).toPromise();
    }

    /**
     * Returns an inbox's sent email receipts. Call individual sent email endpoints for more details. Note for privacy reasons the full body of sent emails is never stored. An MD5 hash hex is available for comparison instead.
     * Get Inbox Sent Emails
     * @param param the request object
     */
    public getInboxSentEmails(param: InboxControllerApiGetInboxSentEmailsRequest, options?: Configuration): Promise<PageSentEmailProjection> {
        return this.api.getInboxSentEmails(param.inboxId, param.page, param.size, param.sort, param.searchFilter, param.since, param.before,  options).toPromise();
    }

    /**
     * Get all inbox tags
     * Get inbox tags
     * @param param the request object
     */
    public getInboxTags(param: InboxControllerApiGetInboxTagsRequest, options?: Configuration): Promise<Array<string>> {
        return this.api.getInboxTags( options).toPromise();
    }

    /**
     * List the inboxes you have created. Note use of the more advanced `getAllInboxes` is recommended and allows paginated access using a limit and sort parameter.
     * List Inboxes and email addresses
     * @param param the request object
     */
    public getInboxes(param: InboxControllerApiGetInboxesRequest, options?: Configuration): Promise<Array<InboxDto>> {
        return this.api.getInboxes(param.size, param.sort, param.since, param.excludeCatchAllInboxes, param.before,  options).toPromise();
    }

    /**
     * Get the newest email in an inbox or wait for one to arrive
     * Get latest email in an inbox. Use `WaitForController` to get emails that may not have arrived yet.
     * @param param the request object
     */
    public getLatestEmailInInbox(param: InboxControllerApiGetLatestEmailInInboxRequest, options?: Configuration): Promise<Email> {
        return this.api.getLatestEmailInInbox(param.inboxId, param.timeoutMillis,  options).toPromise();
    }

    /**
     * List organization inboxes in paginated form. These are inboxes created with `allowTeamAccess` flag enabled. Organization inboxes are `readOnly` for non-admin users. The results are available on the `content` property of the returned object. This method allows for page index (zero based), page size (how many results to return), and a sort direction (based on createdAt time). 
     * List Organization Inboxes Paginated
     * @param param the request object
     */
    public getOrganizationInboxes(param: InboxControllerApiGetOrganizationInboxesRequest, options?: Configuration): Promise<PageOrganizationInboxProjection> {
        return this.api.getOrganizationInboxes(param.page, param.size, param.sort, param.searchFilter, param.since, param.before,  options).toPromise();
    }

    /**
     * Get a scheduled email job details.
     * Get a scheduled email job
     * @param param the request object
     */
    public getScheduledJob(param: InboxControllerApiGetScheduledJobRequest, options?: Configuration): Promise<ScheduledJobDto> {
        return this.api.getScheduledJob(param.jobId,  options).toPromise();
    }

    /**
     * Schedule sending of emails using scheduled jobs.
     * Get all scheduled email sending jobs for the inbox
     * @param param the request object
     */
    public getScheduledJobsByInboxId(param: InboxControllerApiGetScheduledJobsByInboxIdRequest, options?: Configuration): Promise<PageScheduledJobs> {
        return this.api.getScheduledJobsByInboxId(param.inboxId, param.page, param.size, param.sort, param.since, param.before,  options).toPromise();
    }

    /**
     * List all rulesets attached to an inbox
     * List inbox rulesets
     * @param param the request object
     */
    public listInboxRulesets(param: InboxControllerApiListInboxRulesetsRequest, options?: Configuration): Promise<PageInboxRulesetDto> {
        return this.api.listInboxRulesets(param.inboxId, param.page, param.size, param.sort, param.searchFilter, param.since, param.before,  options).toPromise();
    }

    /**
     * List all tracking pixels sent from an inbox
     * List inbox tracking pixels
     * @param param the request object
     */
    public listInboxTrackingPixels(param: InboxControllerApiListInboxTrackingPixelsRequest, options?: Configuration): Promise<PageTrackingPixelProjection> {
        return this.api.listInboxTrackingPixels(param.inboxId, param.page, param.size, param.sort, param.searchFilter, param.since, param.before,  options).toPromise();
    }

    /**
     * Send an email from an inbox's email address.  The request body should contain the `SendEmailOptions` that include recipients, attachments, body etc. See `SendEmailOptions` for all available properties. Note the `inboxId` refers to the inbox's id not the inbox's email address. See https://www.mailslurp.com/guides/ for more information on how to send emails. This method does not return a sent email entity due to legacy reasons. To send and get a sent email as returned response use the sister method `sendEmailAndConfirm`.
     * Send Email
     * @param param the request object
     */
    public sendEmail(param: InboxControllerApiSendEmailRequest, options?: Configuration): Promise<void> {
        return this.api.sendEmail(param.inboxId, param.sendEmailOptions,  options).toPromise();
    }

    /**
     * Sister method for standard `sendEmail` method with the benefit of returning a `SentEmail` entity confirming the successful sending of the email with a link to the sent object created for it.
     * Send email and return sent confirmation
     * @param param the request object
     */
    public sendEmailAndConfirm(param: InboxControllerApiSendEmailAndConfirmRequest, options?: Configuration): Promise<SentEmailDto> {
        return this.api.sendEmailAndConfirm(param.inboxId, param.sendEmailOptions,  options).toPromise();
    }

    /**
     * Send an email using a queue. Will place the email onto a queue that will then be processed and sent. Use this queue method to enable any failed email sending to be recovered. This will prevent lost emails when sending if your account encounters a block or payment issue.
     * Send email with queue
     * @param param the request object
     */
    public sendEmailWithQueue(param: InboxControllerApiSendEmailWithQueueRequest, options?: Configuration): Promise<void> {
        return this.api.sendEmailWithQueue(param.inboxId, param.validateBeforeEnqueue, param.sendEmailOptions,  options).toPromise();
    }

    /**
     * Send email using an SMTP envelope containing RCPT TO, MAIL FROM, and a SMTP BODY.
     * Send email using an SMTP mail envelope and message body and return sent confirmation
     * @param param the request object
     */
    public sendSmtpEnvelope(param: InboxControllerApiSendSmtpEnvelopeRequest, options?: Configuration): Promise<SentEmailDto> {
        return this.api.sendSmtpEnvelope(param.inboxId, param.sendSMTPEnvelopeOptions,  options).toPromise();
    }

    /**
     * Send an inbox a test email to test email receiving is working
     * Send a test email to inbox
     * @param param the request object
     */
    public sendTestEmail(param: InboxControllerApiSendTestEmailRequest, options?: Configuration): Promise<void> {
        return this.api.sendTestEmail(param.inboxId,  options).toPromise();
    }

    /**
     * Send an email using a delay. Will place the email onto a scheduler that will then be processed and sent. Use delays to schedule email sending.
     * Send email with with delay or schedule
     * @param param the request object
     */
    public sendWithSchedule(param: InboxControllerApiSendWithScheduleRequest, options?: Configuration): Promise<ScheduledJobDto> {
        return this.api.sendWithSchedule(param.inboxId, param.sendEmailOptions, param.sendAtTimestamp, param.sendAtNowPlusSeconds, param.validateBeforeEnqueue,  options).toPromise();
    }

    /**
     * Set and return new favourite state for an inbox
     * Set inbox favourited state
     * @param param the request object
     */
    public setInboxFavourited(param: InboxControllerApiSetInboxFavouritedRequest, options?: Configuration): Promise<InboxDto> {
        return this.api.setInboxFavourited(param.inboxId, param.setInboxFavouritedOptions,  options).toPromise();
    }

    /**
     * Update editable fields on an inbox
     * Update Inbox. Change name and description. Email address is not editable.
     * @param param the request object
     */
    public updateInbox(param: InboxControllerApiUpdateInboxRequest, options?: Configuration): Promise<InboxDto> {
        return this.api.updateInbox(param.inboxId, param.updateInboxOptions,  options).toPromise();
    }

}

import { ObservableInboxForwarderControllerApi } from "./ObservableAPI.ts";
import { InboxForwarderControllerApiRequestFactory, InboxForwarderControllerApiResponseProcessor} from "../apis/InboxForwarderControllerApi.ts";

export interface InboxForwarderControllerApiCreateNewInboxForwarderRequest {
    /**
     * Inbox id to attach forwarder to
     * @type string
     * @memberof InboxForwarderControllerApicreateNewInboxForwarder
     */
    inboxId: string
    /**
     * 
     * @type CreateInboxForwarderOptions
     * @memberof InboxForwarderControllerApicreateNewInboxForwarder
     */
    createInboxForwarderOptions: CreateInboxForwarderOptions
}

export interface InboxForwarderControllerApiDeleteInboxForwarderRequest {
    /**
     * ID of inbox forwarder
     * @type string
     * @memberof InboxForwarderControllerApideleteInboxForwarder
     */
    id: string
}

export interface InboxForwarderControllerApiDeleteInboxForwardersRequest {
    /**
     * Optional inbox id to attach forwarder to
     * @type string
     * @memberof InboxForwarderControllerApideleteInboxForwarders
     */
    inboxId?: string
}

export interface InboxForwarderControllerApiGetInboxForwarderRequest {
    /**
     * ID of inbox forwarder
     * @type string
     * @memberof InboxForwarderControllerApigetInboxForwarder
     */
    id: string
}

export interface InboxForwarderControllerApiGetInboxForwarderEventsRequest {
    /**
     * ID of inbox forwarder
     * @type string
     * @memberof InboxForwarderControllerApigetInboxForwarderEvents
     */
    id: string
    /**
     * Optional page index in inbox forwarder event list pagination
     * @type number
     * @memberof InboxForwarderControllerApigetInboxForwarderEvents
     */
    page?: number
    /**
     * Optional page size in inbox forwarder event list pagination
     * @type number
     * @memberof InboxForwarderControllerApigetInboxForwarderEvents
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof InboxForwarderControllerApigetInboxForwarderEvents
     */
    sort?: 'ASC' | 'DESC'
}

export interface InboxForwarderControllerApiGetInboxForwardersRequest {
    /**
     * Optional inbox id to get forwarders from
     * @type string
     * @memberof InboxForwarderControllerApigetInboxForwarders
     */
    inboxId?: string
    /**
     * Optional page index in inbox forwarder list pagination
     * @type number
     * @memberof InboxForwarderControllerApigetInboxForwarders
     */
    page?: number
    /**
     * Optional page size in inbox forwarder list pagination
     * @type number
     * @memberof InboxForwarderControllerApigetInboxForwarders
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof InboxForwarderControllerApigetInboxForwarders
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Optional search filter
     * @type string
     * @memberof InboxForwarderControllerApigetInboxForwarders
     */
    searchFilter?: string
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof InboxForwarderControllerApigetInboxForwarders
     */
    since?: Date
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof InboxForwarderControllerApigetInboxForwarders
     */
    before?: Date
}

export interface InboxForwarderControllerApiTestInboxForwarderRequest {
    /**
     * ID of inbox forwarder
     * @type string
     * @memberof InboxForwarderControllerApitestInboxForwarder
     */
    id: string
    /**
     * 
     * @type InboxForwarderTestOptions
     * @memberof InboxForwarderControllerApitestInboxForwarder
     */
    inboxForwarderTestOptions: InboxForwarderTestOptions
}

export interface InboxForwarderControllerApiTestInboxForwardersForInboxRequest {
    /**
     * ID of inbox
     * @type string
     * @memberof InboxForwarderControllerApitestInboxForwardersForInbox
     */
    inboxId: string
    /**
     * 
     * @type InboxForwarderTestOptions
     * @memberof InboxForwarderControllerApitestInboxForwardersForInbox
     */
    inboxForwarderTestOptions: InboxForwarderTestOptions
}

export interface InboxForwarderControllerApiTestNewInboxForwarderRequest {
    /**
     * 
     * @type TestNewInboxForwarderOptions
     * @memberof InboxForwarderControllerApitestNewInboxForwarder
     */
    testNewInboxForwarderOptions: TestNewInboxForwarderOptions
}

export interface InboxForwarderControllerApiUpdateInboxForwarderRequest {
    /**
     * ID of inbox forwarder
     * @type string
     * @memberof InboxForwarderControllerApiupdateInboxForwarder
     */
    id: string
    /**
     * 
     * @type CreateInboxForwarderOptions
     * @memberof InboxForwarderControllerApiupdateInboxForwarder
     */
    createInboxForwarderOptions: CreateInboxForwarderOptions
}

export class ObjectInboxForwarderControllerApi {
    private api: ObservableInboxForwarderControllerApi

    public constructor(configuration: Configuration, requestFactory?: InboxForwarderControllerApiRequestFactory, responseProcessor?: InboxForwarderControllerApiResponseProcessor) {
        this.api = new ObservableInboxForwarderControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving
     * Create an inbox forwarder
     * @param param the request object
     */
    public createNewInboxForwarder(param: InboxForwarderControllerApiCreateNewInboxForwarderRequest, options?: Configuration): Promise<InboxForwarderDto> {
        return this.api.createNewInboxForwarder(param.inboxId, param.createInboxForwarderOptions,  options).toPromise();
    }

    /**
     * Delete inbox forwarder
     * Delete an inbox forwarder
     * @param param the request object
     */
    public deleteInboxForwarder(param: InboxForwarderControllerApiDeleteInboxForwarderRequest, options?: Configuration): Promise<void> {
        return this.api.deleteInboxForwarder(param.id,  options).toPromise();
    }

    /**
     * Delete inbox forwarders. Accepts optional inboxId filter.
     * Delete inbox forwarders
     * @param param the request object
     */
    public deleteInboxForwarders(param: InboxForwarderControllerApiDeleteInboxForwardersRequest, options?: Configuration): Promise<void> {
        return this.api.deleteInboxForwarders(param.inboxId,  options).toPromise();
    }

    /**
     * Get inbox ruleset
     * Get an inbox forwarder
     * @param param the request object
     */
    public getInboxForwarder(param: InboxForwarderControllerApiGetInboxForwarderRequest, options?: Configuration): Promise<InboxForwarderDto> {
        return this.api.getInboxForwarder(param.id,  options).toPromise();
    }

    /**
     * Get inbox ruleset events
     * Get an inbox forwarder event list
     * @param param the request object
     */
    public getInboxForwarderEvents(param: InboxForwarderControllerApiGetInboxForwarderEventsRequest, options?: Configuration): Promise<PageInboxForwarderEvents> {
        return this.api.getInboxForwarderEvents(param.id, param.page, param.size, param.sort,  options).toPromise();
    }

    /**
     * List all forwarders attached to an inbox
     * List inbox forwarders
     * @param param the request object
     */
    public getInboxForwarders(param: InboxForwarderControllerApiGetInboxForwardersRequest, options?: Configuration): Promise<PageInboxForwarderDto> {
        return this.api.getInboxForwarders(param.inboxId, param.page, param.size, param.sort, param.searchFilter, param.since, param.before,  options).toPromise();
    }

    /**
     * Test an inbox forwarder
     * Test an inbox forwarder
     * @param param the request object
     */
    public testInboxForwarder(param: InboxForwarderControllerApiTestInboxForwarderRequest, options?: Configuration): Promise<InboxForwarderTestResult> {
        return this.api.testInboxForwarder(param.id, param.inboxForwarderTestOptions,  options).toPromise();
    }

    /**
     * Test inbox forwarders for inbox
     * Test inbox forwarders for inbox
     * @param param the request object
     */
    public testInboxForwardersForInbox(param: InboxForwarderControllerApiTestInboxForwardersForInboxRequest, options?: Configuration): Promise<InboxForwarderTestResult> {
        return this.api.testInboxForwardersForInbox(param.inboxId, param.inboxForwarderTestOptions,  options).toPromise();
    }

    /**
     * Test new inbox forwarder
     * Test new inbox forwarder
     * @param param the request object
     */
    public testNewInboxForwarder(param: InboxForwarderControllerApiTestNewInboxForwarderRequest, options?: Configuration): Promise<InboxForwarderTestResult> {
        return this.api.testNewInboxForwarder(param.testNewInboxForwarderOptions,  options).toPromise();
    }

    /**
     * Update inbox ruleset
     * Update an inbox forwarder
     * @param param the request object
     */
    public updateInboxForwarder(param: InboxForwarderControllerApiUpdateInboxForwarderRequest, options?: Configuration): Promise<InboxForwarderDto> {
        return this.api.updateInboxForwarder(param.id, param.createInboxForwarderOptions,  options).toPromise();
    }

}

import { ObservableInboxReplierControllerApi } from "./ObservableAPI.ts";
import { InboxReplierControllerApiRequestFactory, InboxReplierControllerApiResponseProcessor} from "../apis/InboxReplierControllerApi.ts";

export interface InboxReplierControllerApiCreateNewInboxReplierRequest {
    /**
     * 
     * @type CreateInboxReplierOptions
     * @memberof InboxReplierControllerApicreateNewInboxReplier
     */
    createInboxReplierOptions: CreateInboxReplierOptions
}

export interface InboxReplierControllerApiDeleteInboxReplierRequest {
    /**
     * ID of inbox replier
     * @type string
     * @memberof InboxReplierControllerApideleteInboxReplier
     */
    id: string
}

export interface InboxReplierControllerApiDeleteInboxRepliersRequest {
    /**
     * Optional inbox id to attach replier to
     * @type string
     * @memberof InboxReplierControllerApideleteInboxRepliers
     */
    inboxId?: string
}

export interface InboxReplierControllerApiGetInboxReplierRequest {
    /**
     * ID of inbox replier
     * @type string
     * @memberof InboxReplierControllerApigetInboxReplier
     */
    id: string
}

export interface InboxReplierControllerApiGetInboxReplierEventsRequest {
    /**
     * ID of inbox replier
     * @type string
     * @memberof InboxReplierControllerApigetInboxReplierEvents
     */
    id: string
    /**
     * Optional page index in inbox replier event list pagination
     * @type number
     * @memberof InboxReplierControllerApigetInboxReplierEvents
     */
    page?: number
    /**
     * Optional page size in inbox replier event list pagination
     * @type number
     * @memberof InboxReplierControllerApigetInboxReplierEvents
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof InboxReplierControllerApigetInboxReplierEvents
     */
    sort?: 'ASC' | 'DESC'
}

export interface InboxReplierControllerApiGetInboxRepliersRequest {
    /**
     * Optional inbox id to get repliers from
     * @type string
     * @memberof InboxReplierControllerApigetInboxRepliers
     */
    inboxId?: string
    /**
     * Optional page index in inbox replier list pagination
     * @type number
     * @memberof InboxReplierControllerApigetInboxRepliers
     */
    page?: number
    /**
     * Optional page size in inbox replier list pagination
     * @type number
     * @memberof InboxReplierControllerApigetInboxRepliers
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof InboxReplierControllerApigetInboxRepliers
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof InboxReplierControllerApigetInboxRepliers
     */
    since?: Date
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof InboxReplierControllerApigetInboxRepliers
     */
    before?: Date
}

export interface InboxReplierControllerApiUpdateInboxReplierRequest {
    /**
     * ID of inbox replier
     * @type string
     * @memberof InboxReplierControllerApiupdateInboxReplier
     */
    id: string
    /**
     * 
     * @type UpdateInboxReplierOptions
     * @memberof InboxReplierControllerApiupdateInboxReplier
     */
    updateInboxReplierOptions: UpdateInboxReplierOptions
}

export class ObjectInboxReplierControllerApi {
    private api: ObservableInboxReplierControllerApi

    public constructor(configuration: Configuration, requestFactory?: InboxReplierControllerApiRequestFactory, responseProcessor?: InboxReplierControllerApiResponseProcessor) {
        this.api = new ObservableInboxReplierControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new inbox rule for reply toing, blocking, and allowing emails when sending and receiving
     * Create an inbox replier
     * @param param the request object
     */
    public createNewInboxReplier(param: InboxReplierControllerApiCreateNewInboxReplierRequest, options?: Configuration): Promise<InboxReplierDto> {
        return this.api.createNewInboxReplier(param.createInboxReplierOptions,  options).toPromise();
    }

    /**
     * Delete inbox replier
     * Delete an inbox replier
     * @param param the request object
     */
    public deleteInboxReplier(param: InboxReplierControllerApiDeleteInboxReplierRequest, options?: Configuration): Promise<void> {
        return this.api.deleteInboxReplier(param.id,  options).toPromise();
    }

    /**
     * Delete inbox repliers. Accepts optional inboxId filter.
     * Delete inbox repliers
     * @param param the request object
     */
    public deleteInboxRepliers(param: InboxReplierControllerApiDeleteInboxRepliersRequest, options?: Configuration): Promise<void> {
        return this.api.deleteInboxRepliers(param.inboxId,  options).toPromise();
    }

    /**
     * Get inbox ruleset
     * Get an inbox replier
     * @param param the request object
     */
    public getInboxReplier(param: InboxReplierControllerApiGetInboxReplierRequest, options?: Configuration): Promise<InboxReplierDto> {
        return this.api.getInboxReplier(param.id,  options).toPromise();
    }

    /**
     * Get inbox ruleset events
     * Get an inbox replier event list
     * @param param the request object
     */
    public getInboxReplierEvents(param: InboxReplierControllerApiGetInboxReplierEventsRequest, options?: Configuration): Promise<PageInboxReplierEvents> {
        return this.api.getInboxReplierEvents(param.id, param.page, param.size, param.sort,  options).toPromise();
    }

    /**
     * List all repliers attached to an inbox
     * List inbox repliers
     * @param param the request object
     */
    public getInboxRepliers(param: InboxReplierControllerApiGetInboxRepliersRequest, options?: Configuration): Promise<PageInboxReplierDto> {
        return this.api.getInboxRepliers(param.inboxId, param.page, param.size, param.sort, param.since, param.before,  options).toPromise();
    }

    /**
     * Update inbox ruleset
     * Update an inbox replier
     * @param param the request object
     */
    public updateInboxReplier(param: InboxReplierControllerApiUpdateInboxReplierRequest, options?: Configuration): Promise<InboxReplierDto> {
        return this.api.updateInboxReplier(param.id, param.updateInboxReplierOptions,  options).toPromise();
    }

}

import { ObservableInboxRulesetControllerApi } from "./ObservableAPI.ts";
import { InboxRulesetControllerApiRequestFactory, InboxRulesetControllerApiResponseProcessor} from "../apis/InboxRulesetControllerApi.ts";

export interface InboxRulesetControllerApiCreateNewInboxRulesetRequest {
    /**
     * 
     * @type CreateInboxRulesetOptions
     * @memberof InboxRulesetControllerApicreateNewInboxRuleset
     */
    createInboxRulesetOptions: CreateInboxRulesetOptions
    /**
     * Inbox id to attach ruleset to
     * @type string
     * @memberof InboxRulesetControllerApicreateNewInboxRuleset
     */
    inboxId?: string
}

export interface InboxRulesetControllerApiDeleteInboxRulesetRequest {
    /**
     * ID of inbox ruleset
     * @type string
     * @memberof InboxRulesetControllerApideleteInboxRuleset
     */
    id: string
}

export interface InboxRulesetControllerApiDeleteInboxRulesetsRequest {
    /**
     * Optional inbox id to attach ruleset to
     * @type string
     * @memberof InboxRulesetControllerApideleteInboxRulesets
     */
    inboxId?: string
}

export interface InboxRulesetControllerApiGetInboxRulesetRequest {
    /**
     * ID of inbox ruleset
     * @type string
     * @memberof InboxRulesetControllerApigetInboxRuleset
     */
    id: string
}

export interface InboxRulesetControllerApiGetInboxRulesetsRequest {
    /**
     * Optional inbox id to get rulesets from
     * @type string
     * @memberof InboxRulesetControllerApigetInboxRulesets
     */
    inboxId?: string
    /**
     * Optional page index in inbox ruleset list pagination
     * @type number
     * @memberof InboxRulesetControllerApigetInboxRulesets
     */
    page?: number
    /**
     * Optional page size in inbox ruleset list pagination
     * @type number
     * @memberof InboxRulesetControllerApigetInboxRulesets
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof InboxRulesetControllerApigetInboxRulesets
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Optional search filter
     * @type string
     * @memberof InboxRulesetControllerApigetInboxRulesets
     */
    searchFilter?: string
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof InboxRulesetControllerApigetInboxRulesets
     */
    since?: Date
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof InboxRulesetControllerApigetInboxRulesets
     */
    before?: Date
}

export interface InboxRulesetControllerApiTestInboxRulesetRequest {
    /**
     * ID of inbox ruleset
     * @type string
     * @memberof InboxRulesetControllerApitestInboxRuleset
     */
    id: string
    /**
     * 
     * @type InboxRulesetTestOptions
     * @memberof InboxRulesetControllerApitestInboxRuleset
     */
    inboxRulesetTestOptions: InboxRulesetTestOptions
}

export interface InboxRulesetControllerApiTestInboxRulesetsForInboxRequest {
    /**
     * ID of inbox
     * @type string
     * @memberof InboxRulesetControllerApitestInboxRulesetsForInbox
     */
    inboxId: string
    /**
     * 
     * @type InboxRulesetTestOptions
     * @memberof InboxRulesetControllerApitestInboxRulesetsForInbox
     */
    inboxRulesetTestOptions: InboxRulesetTestOptions
}

export interface InboxRulesetControllerApiTestNewInboxRulesetRequest {
    /**
     * 
     * @type TestNewInboxRulesetOptions
     * @memberof InboxRulesetControllerApitestNewInboxRuleset
     */
    testNewInboxRulesetOptions: TestNewInboxRulesetOptions
}

export class ObjectInboxRulesetControllerApi {
    private api: ObservableInboxRulesetControllerApi

    public constructor(configuration: Configuration, requestFactory?: InboxRulesetControllerApiRequestFactory, responseProcessor?: InboxRulesetControllerApiResponseProcessor) {
        this.api = new ObservableInboxRulesetControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving
     * Create an inbox ruleset
     * @param param the request object
     */
    public createNewInboxRuleset(param: InboxRulesetControllerApiCreateNewInboxRulesetRequest, options?: Configuration): Promise<InboxRulesetDto> {
        return this.api.createNewInboxRuleset(param.createInboxRulesetOptions, param.inboxId,  options).toPromise();
    }

    /**
     * Delete inbox ruleset
     * Delete an inbox ruleset
     * @param param the request object
     */
    public deleteInboxRuleset(param: InboxRulesetControllerApiDeleteInboxRulesetRequest, options?: Configuration): Promise<void> {
        return this.api.deleteInboxRuleset(param.id,  options).toPromise();
    }

    /**
     * Delete inbox rulesets. Accepts optional inboxId filter.
     * Delete inbox rulesets
     * @param param the request object
     */
    public deleteInboxRulesets(param: InboxRulesetControllerApiDeleteInboxRulesetsRequest, options?: Configuration): Promise<void> {
        return this.api.deleteInboxRulesets(param.inboxId,  options).toPromise();
    }

    /**
     * Get inbox ruleset
     * Get an inbox ruleset
     * @param param the request object
     */
    public getInboxRuleset(param: InboxRulesetControllerApiGetInboxRulesetRequest, options?: Configuration): Promise<InboxRulesetDto> {
        return this.api.getInboxRuleset(param.id,  options).toPromise();
    }

    /**
     * List all rulesets attached to an inbox
     * List inbox rulesets
     * @param param the request object
     */
    public getInboxRulesets(param: InboxRulesetControllerApiGetInboxRulesetsRequest, options?: Configuration): Promise<PageInboxRulesetDto> {
        return this.api.getInboxRulesets(param.inboxId, param.page, param.size, param.sort, param.searchFilter, param.since, param.before,  options).toPromise();
    }

    /**
     * Test an inbox ruleset
     * Test an inbox ruleset
     * @param param the request object
     */
    public testInboxRuleset(param: InboxRulesetControllerApiTestInboxRulesetRequest, options?: Configuration): Promise<InboxRulesetTestResult> {
        return this.api.testInboxRuleset(param.id, param.inboxRulesetTestOptions,  options).toPromise();
    }

    /**
     * Test inbox rulesets for inbox
     * Test inbox rulesets for inbox
     * @param param the request object
     */
    public testInboxRulesetsForInbox(param: InboxRulesetControllerApiTestInboxRulesetsForInboxRequest, options?: Configuration): Promise<InboxRulesetTestResult> {
        return this.api.testInboxRulesetsForInbox(param.inboxId, param.inboxRulesetTestOptions,  options).toPromise();
    }

    /**
     * Test new inbox ruleset
     * Test new inbox ruleset
     * @param param the request object
     */
    public testNewInboxRuleset(param: InboxRulesetControllerApiTestNewInboxRulesetRequest, options?: Configuration): Promise<InboxRulesetTestResult> {
        return this.api.testNewInboxRuleset(param.testNewInboxRulesetOptions,  options).toPromise();
    }

}

import { ObservableMailServerControllerApi } from "./ObservableAPI.ts";
import { MailServerControllerApiRequestFactory, MailServerControllerApiResponseProcessor} from "../apis/MailServerControllerApi.ts";

export interface MailServerControllerApiDescribeMailServerDomainRequest {
    /**
     * 
     * @type DescribeDomainOptions
     * @memberof MailServerControllerApidescribeMailServerDomain
     */
    describeDomainOptions: DescribeDomainOptions
}

export interface MailServerControllerApiGetDnsLookupRequest {
    /**
     * 
     * @type DNSLookupOptions
     * @memberof MailServerControllerApigetDnsLookup
     */
    dNSLookupOptions: DNSLookupOptions
}

export interface MailServerControllerApiGetIpAddressRequest {
    /**
     * 
     * @type string
     * @memberof MailServerControllerApigetIpAddress
     */
    name: string
}

export interface MailServerControllerApiVerifyEmailAddressRequest {
    /**
     * 
     * @type VerifyEmailAddressOptions
     * @memberof MailServerControllerApiverifyEmailAddress
     */
    verifyEmailAddressOptions: VerifyEmailAddressOptions
}

export class ObjectMailServerControllerApi {
    private api: ObservableMailServerControllerApi

    public constructor(configuration: Configuration, requestFactory?: MailServerControllerApiRequestFactory, responseProcessor?: MailServerControllerApiResponseProcessor) {
        this.api = new ObservableMailServerControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get DNS Mail Server records for a domain
     * @param param the request object
     */
    public describeMailServerDomain(param: MailServerControllerApiDescribeMailServerDomainRequest, options?: Configuration): Promise<DescribeMailServerDomainResult> {
        return this.api.describeMailServerDomain(param.describeDomainOptions,  options).toPromise();
    }

    /**
     * Lookup DNS records for a domain
     * @param param the request object
     */
    public getDnsLookup(param: MailServerControllerApiGetDnsLookupRequest, options?: Configuration): Promise<DNSLookupResults> {
        return this.api.getDnsLookup(param.dNSLookupOptions,  options).toPromise();
    }

    /**
     * Get IP address for a domain
     * @param param the request object
     */
    public getIpAddress(param: MailServerControllerApiGetIpAddressRequest, options?: Configuration): Promise<IPAddressResult> {
        return this.api.getIpAddress(param.name,  options).toPromise();
    }

    /**
     * Deprecated. Use the EmailVerificationController methods for more accurate and reliable functionality. Verify the existence of an email address at a given mail server.
     * @param param the request object
     */
    public verifyEmailAddress(param: MailServerControllerApiVerifyEmailAddressRequest, options?: Configuration): Promise<EmailVerificationResult> {
        return this.api.verifyEmailAddress(param.verifyEmailAddressOptions,  options).toPromise();
    }

}

import { ObservableMissedEmailControllerApi } from "./ObservableAPI.ts";
import { MissedEmailControllerApiRequestFactory, MissedEmailControllerApiResponseProcessor} from "../apis/MissedEmailControllerApi.ts";

export interface MissedEmailControllerApiGetAllMissedEmailsRequest {
    /**
     * Optional page index in list pagination
     * @type number
     * @memberof MissedEmailControllerApigetAllMissedEmails
     */
    page?: number
    /**
     * Optional page size in list pagination
     * @type number
     * @memberof MissedEmailControllerApigetAllMissedEmails
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof MissedEmailControllerApigetAllMissedEmails
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Optional search filter
     * @type string
     * @memberof MissedEmailControllerApigetAllMissedEmails
     */
    searchFilter?: string
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof MissedEmailControllerApigetAllMissedEmails
     */
    since?: Date
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof MissedEmailControllerApigetAllMissedEmails
     */
    before?: Date
    /**
     * Optional inbox ID filter
     * @type string
     * @memberof MissedEmailControllerApigetAllMissedEmails
     */
    inboxId?: string
}

export interface MissedEmailControllerApiGetAllUnknownMissedEmailsRequest {
    /**
     * Optional page index in list pagination
     * @type number
     * @memberof MissedEmailControllerApigetAllUnknownMissedEmails
     */
    page?: number
    /**
     * Optional page size in list pagination
     * @type number
     * @memberof MissedEmailControllerApigetAllUnknownMissedEmails
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof MissedEmailControllerApigetAllUnknownMissedEmails
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Optional search filter
     * @type string
     * @memberof MissedEmailControllerApigetAllUnknownMissedEmails
     */
    searchFilter?: string
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof MissedEmailControllerApigetAllUnknownMissedEmails
     */
    since?: Date
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof MissedEmailControllerApigetAllUnknownMissedEmails
     */
    before?: Date
    /**
     * Optional inbox ID filter
     * @type string
     * @memberof MissedEmailControllerApigetAllUnknownMissedEmails
     */
    inboxId?: string
}

export interface MissedEmailControllerApiGetMissedEmailRequest {
    /**
     * 
     * @type string
     * @memberof MissedEmailControllerApigetMissedEmail
     */
    missedEmailId: string
}

export interface MissedEmailControllerApiRestoreMissedEmailsRequest {
}

export interface MissedEmailControllerApiWaitForNthMissedEmailRequest {
    /**
     * Zero based index of the email to wait for. If 1 missed email already and you want to wait for the 2nd email pass index&#x3D;1
     * @type number
     * @memberof MissedEmailControllerApiwaitForNthMissedEmail
     */
    index: number
    /**
     * Optional inbox ID filter
     * @type string
     * @memberof MissedEmailControllerApiwaitForNthMissedEmail
     */
    inboxId?: string
    /**
     * Optional timeout milliseconds
     * @type number
     * @memberof MissedEmailControllerApiwaitForNthMissedEmail
     */
    timeout?: number
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof MissedEmailControllerApiwaitForNthMissedEmail
     */
    since?: Date
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof MissedEmailControllerApiwaitForNthMissedEmail
     */
    before?: Date
}

export class ObjectMissedEmailControllerApi {
    private api: ObservableMissedEmailControllerApi

    public constructor(configuration: Configuration, requestFactory?: MissedEmailControllerApiRequestFactory, responseProcessor?: MissedEmailControllerApiResponseProcessor) {
        this.api = new ObservableMissedEmailControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all MissedEmails in paginated format
     * @param param the request object
     */
    public getAllMissedEmails(param: MissedEmailControllerApiGetAllMissedEmailsRequest, options?: Configuration): Promise<PageMissedEmailProjection> {
        return this.api.getAllMissedEmails(param.page, param.size, param.sort, param.searchFilter, param.since, param.before, param.inboxId,  options).toPromise();
    }

    /**
     * Unknown missed emails are emails that were sent to MailSlurp but could not be assigned to an existing inbox.
     * Get all unknown missed emails in paginated format
     * @param param the request object
     */
    public getAllUnknownMissedEmails(param: MissedEmailControllerApiGetAllUnknownMissedEmailsRequest, options?: Configuration): Promise<PageUnknownMissedEmailProjection> {
        return this.api.getAllUnknownMissedEmails(param.page, param.size, param.sort, param.searchFilter, param.since, param.before, param.inboxId,  options).toPromise();
    }

    /**
     * List emails that were missed due to plan limits.
     * Get MissedEmail
     * @param param the request object
     */
    public getMissedEmail(param: MissedEmailControllerApiGetMissedEmailRequest, options?: Configuration): Promise<MissedEmailDto> {
        return this.api.getMissedEmail(param.missedEmailId,  options).toPromise();
    }

    /**
     * If emails were missed due to a plan limit they are saved as missed emails. If support team enables the canRestore flag these emails can be reload into your account using this method.
     * Restore missed emails
     * @param param the request object
     */
    public restoreMissedEmails(param: MissedEmailControllerApiRestoreMissedEmailsRequest, options?: Configuration): Promise<void> {
        return this.api.restoreMissedEmails( options).toPromise();
    }

    /**
     * Wait for 0 based index missed email
     * Wait for Nth missed email
     * @param param the request object
     */
    public waitForNthMissedEmail(param: MissedEmailControllerApiWaitForNthMissedEmailRequest, options?: Configuration): Promise<MissedEmailDto> {
        return this.api.waitForNthMissedEmail(param.index, param.inboxId, param.timeout, param.since, param.before,  options).toPromise();
    }

}

import { ObservablePhoneControllerApi } from "./ObservableAPI.ts";
import { PhoneControllerApiRequestFactory, PhoneControllerApiResponseProcessor} from "../apis/PhoneControllerApi.ts";

export interface PhoneControllerApiCreateEmergencyAddressRequest {
    /**
     * 
     * @type CreateEmergencyAddressOptions
     * @memberof PhoneControllerApicreateEmergencyAddress
     */
    createEmergencyAddressOptions: CreateEmergencyAddressOptions
}

export interface PhoneControllerApiDeleteEmergencyAddressRequest {
    /**
     * 
     * @type string
     * @memberof PhoneControllerApideleteEmergencyAddress
     */
    addressId: string
}

export interface PhoneControllerApiDeletePhoneNumberRequest {
    /**
     * 
     * @type string
     * @memberof PhoneControllerApideletePhoneNumber
     */
    phoneNumberId: string
}

export interface PhoneControllerApiGetEmergencyAddressRequest {
    /**
     * 
     * @type string
     * @memberof PhoneControllerApigetEmergencyAddress
     */
    addressId: string
}

export interface PhoneControllerApiGetEmergencyAddressesRequest {
}

export interface PhoneControllerApiGetPhoneNumberRequest {
    /**
     * 
     * @type string
     * @memberof PhoneControllerApigetPhoneNumber
     */
    phoneNumberId: string
}

export interface PhoneControllerApiGetPhoneNumbersRequest {
    /**
     * Optional phone country
     * @type &#39;US&#39; | &#39;GB&#39; | &#39;AU&#39;
     * @memberof PhoneControllerApigetPhoneNumbers
     */
    phoneCountry?: 'US' | 'GB' | 'AU'
    /**
     * Optional page index for list pagination
     * @type number
     * @memberof PhoneControllerApigetPhoneNumbers
     */
    page?: number
    /**
     * Optional page size for list pagination
     * @type number
     * @memberof PhoneControllerApigetPhoneNumbers
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof PhoneControllerApigetPhoneNumbers
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof PhoneControllerApigetPhoneNumbers
     */
    since?: Date
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof PhoneControllerApigetPhoneNumbers
     */
    before?: Date
}

export interface PhoneControllerApiGetPhonePlansRequest {
}

export interface PhoneControllerApiTestPhoneNumberSendSmsRequest {
    /**
     * 
     * @type string
     * @memberof PhoneControllerApitestPhoneNumberSendSms
     */
    phoneNumberId: string
    /**
     * 
     * @type TestPhoneNumberOptions
     * @memberof PhoneControllerApitestPhoneNumberSendSms
     */
    testPhoneNumberOptions: TestPhoneNumberOptions
    /**
     * 
     * @type string
     * @memberof PhoneControllerApitestPhoneNumberSendSms
     */
    xTestId?: string
}

export class ObjectPhoneControllerApi {
    private api: ObservablePhoneControllerApi

    public constructor(configuration: Configuration, requestFactory?: PhoneControllerApiRequestFactory, responseProcessor?: PhoneControllerApiResponseProcessor) {
        this.api = new ObservablePhoneControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public createEmergencyAddress(param: PhoneControllerApiCreateEmergencyAddressRequest, options?: Configuration): Promise<EmergencyAddress> {
        return this.api.createEmergencyAddress(param.createEmergencyAddressOptions,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteEmergencyAddress(param: PhoneControllerApiDeleteEmergencyAddressRequest, options?: Configuration): Promise<EmptyResponseDto> {
        return this.api.deleteEmergencyAddress(param.addressId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deletePhoneNumber(param: PhoneControllerApiDeletePhoneNumberRequest, options?: Configuration): Promise<void> {
        return this.api.deletePhoneNumber(param.phoneNumberId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getEmergencyAddress(param: PhoneControllerApiGetEmergencyAddressRequest, options?: Configuration): Promise<EmergencyAddress> {
        return this.api.getEmergencyAddress(param.addressId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getEmergencyAddresses(param: PhoneControllerApiGetEmergencyAddressesRequest, options?: Configuration): Promise<Array<EmergencyAddressDto>> {
        return this.api.getEmergencyAddresses( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getPhoneNumber(param: PhoneControllerApiGetPhoneNumberRequest, options?: Configuration): Promise<PhoneNumberDto> {
        return this.api.getPhoneNumber(param.phoneNumberId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getPhoneNumbers(param: PhoneControllerApiGetPhoneNumbersRequest, options?: Configuration): Promise<PagePhoneNumberProjection> {
        return this.api.getPhoneNumbers(param.phoneCountry, param.page, param.size, param.sort, param.since, param.before,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getPhonePlans(param: PhoneControllerApiGetPhonePlansRequest, options?: Configuration): Promise<Array<PhonePlanDto>> {
        return this.api.getPhonePlans( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public testPhoneNumberSendSms(param: PhoneControllerApiTestPhoneNumberSendSmsRequest, options?: Configuration): Promise<void> {
        return this.api.testPhoneNumberSendSms(param.phoneNumberId, param.testPhoneNumberOptions, param.xTestId,  options).toPromise();
    }

}

import { ObservableSentEmailsControllerApi } from "./ObservableAPI.ts";
import { SentEmailsControllerApiRequestFactory, SentEmailsControllerApiResponseProcessor} from "../apis/SentEmailsControllerApi.ts";

export interface SentEmailsControllerApiDeleteAllSentEmailsRequest {
}

export interface SentEmailsControllerApiDeleteSentEmailRequest {
    /**
     * 
     * @type string
     * @memberof SentEmailsControllerApideleteSentEmail
     */
    id: string
}

export interface SentEmailsControllerApiGetAllSentTrackingPixelsRequest {
    /**
     * Optional page index in sent email tracking pixel list pagination
     * @type number
     * @memberof SentEmailsControllerApigetAllSentTrackingPixels
     */
    page?: number
    /**
     * Optional page size in sent email tracking pixel list pagination
     * @type number
     * @memberof SentEmailsControllerApigetAllSentTrackingPixels
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof SentEmailsControllerApigetAllSentTrackingPixels
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Optional search filter
     * @type string
     * @memberof SentEmailsControllerApigetAllSentTrackingPixels
     */
    searchFilter?: string
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof SentEmailsControllerApigetAllSentTrackingPixels
     */
    since?: Date
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof SentEmailsControllerApigetAllSentTrackingPixels
     */
    before?: Date
}

export interface SentEmailsControllerApiGetRawSentEmailContentsRequest {
    /**
     * ID of email
     * @type string
     * @memberof SentEmailsControllerApigetRawSentEmailContents
     */
    emailId: string
}

export interface SentEmailsControllerApiGetRawSentEmailJsonRequest {
    /**
     * ID of email
     * @type string
     * @memberof SentEmailsControllerApigetRawSentEmailJson
     */
    emailId: string
}

export interface SentEmailsControllerApiGetSentDeliveryStatusRequest {
    /**
     * 
     * @type string
     * @memberof SentEmailsControllerApigetSentDeliveryStatus
     */
    deliveryId: string
}

export interface SentEmailsControllerApiGetSentDeliveryStatusesRequest {
    /**
     * Optional page index in delivery status list pagination
     * @type number
     * @memberof SentEmailsControllerApigetSentDeliveryStatuses
     */
    page?: number
    /**
     * Optional page size in delivery status list pagination
     * @type number
     * @memberof SentEmailsControllerApigetSentDeliveryStatuses
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof SentEmailsControllerApigetSentDeliveryStatuses
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof SentEmailsControllerApigetSentDeliveryStatuses
     */
    since?: Date
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof SentEmailsControllerApigetSentDeliveryStatuses
     */
    before?: Date
}

export interface SentEmailsControllerApiGetSentDeliveryStatusesBySentIdRequest {
    /**
     * ID of the sent email that you want to get the delivery status of. Sent email object is returned when sending an email
     * @type string
     * @memberof SentEmailsControllerApigetSentDeliveryStatusesBySentId
     */
    sentId: string
    /**
     * Optional page index in delivery status list pagination
     * @type number
     * @memberof SentEmailsControllerApigetSentDeliveryStatusesBySentId
     */
    page?: number
    /**
     * Optional page size in delivery status list pagination
     * @type number
     * @memberof SentEmailsControllerApigetSentDeliveryStatusesBySentId
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof SentEmailsControllerApigetSentDeliveryStatusesBySentId
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof SentEmailsControllerApigetSentDeliveryStatusesBySentId
     */
    since?: Date
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof SentEmailsControllerApigetSentDeliveryStatusesBySentId
     */
    before?: Date
}

export interface SentEmailsControllerApiGetSentEmailRequest {
    /**
     * 
     * @type string
     * @memberof SentEmailsControllerApigetSentEmail
     */
    id: string
}

export interface SentEmailsControllerApiGetSentEmailHTMLContentRequest {
    /**
     * 
     * @type string
     * @memberof SentEmailsControllerApigetSentEmailHTMLContent
     */
    id: string
}

export interface SentEmailsControllerApiGetSentEmailPreviewURLsRequest {
    /**
     * 
     * @type string
     * @memberof SentEmailsControllerApigetSentEmailPreviewURLs
     */
    id: string
}

export interface SentEmailsControllerApiGetSentEmailTrackingPixelsRequest {
    /**
     * 
     * @type string
     * @memberof SentEmailsControllerApigetSentEmailTrackingPixels
     */
    id: string
    /**
     * Optional page index in sent email tracking pixel list pagination
     * @type number
     * @memberof SentEmailsControllerApigetSentEmailTrackingPixels
     */
    page?: number
    /**
     * Optional page size in sent email tracking pixel list pagination
     * @type number
     * @memberof SentEmailsControllerApigetSentEmailTrackingPixels
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof SentEmailsControllerApigetSentEmailTrackingPixels
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Optional search filter
     * @type string
     * @memberof SentEmailsControllerApigetSentEmailTrackingPixels
     */
    searchFilter?: string
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof SentEmailsControllerApigetSentEmailTrackingPixels
     */
    since?: Date
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof SentEmailsControllerApigetSentEmailTrackingPixels
     */
    before?: Date
}

export interface SentEmailsControllerApiGetSentEmailsRequest {
    /**
     * Optional inboxId to filter sender of sent emails by
     * @type string
     * @memberof SentEmailsControllerApigetSentEmails
     */
    inboxId?: string
    /**
     * Optional page index in inbox sent email list pagination
     * @type number
     * @memberof SentEmailsControllerApigetSentEmails
     */
    page?: number
    /**
     * Optional page size in inbox sent email list pagination
     * @type number
     * @memberof SentEmailsControllerApigetSentEmails
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof SentEmailsControllerApigetSentEmails
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Optional search filter
     * @type string
     * @memberof SentEmailsControllerApigetSentEmails
     */
    searchFilter?: string
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof SentEmailsControllerApigetSentEmails
     */
    since?: Date
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof SentEmailsControllerApigetSentEmails
     */
    before?: Date
}

export interface SentEmailsControllerApiGetSentEmailsWithQueueResultsRequest {
    /**
     * Optional page index in inbox sent email list pagination
     * @type number
     * @memberof SentEmailsControllerApigetSentEmailsWithQueueResults
     */
    page?: number
    /**
     * Optional page size in inbox sent email list pagination
     * @type number
     * @memberof SentEmailsControllerApigetSentEmailsWithQueueResults
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof SentEmailsControllerApigetSentEmailsWithQueueResults
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof SentEmailsControllerApigetSentEmailsWithQueueResults
     */
    since?: Date
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof SentEmailsControllerApigetSentEmailsWithQueueResults
     */
    before?: Date
}

export interface SentEmailsControllerApiGetSentOrganizationEmailsRequest {
    /**
     * Optional inboxId to filter sender of sent emails by
     * @type string
     * @memberof SentEmailsControllerApigetSentOrganizationEmails
     */
    inboxId?: string
    /**
     * Optional page index in sent email list pagination
     * @type number
     * @memberof SentEmailsControllerApigetSentOrganizationEmails
     */
    page?: number
    /**
     * Optional page size in sent email list pagination
     * @type number
     * @memberof SentEmailsControllerApigetSentOrganizationEmails
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof SentEmailsControllerApigetSentOrganizationEmails
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Optional search filter
     * @type string
     * @memberof SentEmailsControllerApigetSentOrganizationEmails
     */
    searchFilter?: string
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof SentEmailsControllerApigetSentOrganizationEmails
     */
    since?: Date
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof SentEmailsControllerApigetSentOrganizationEmails
     */
    before?: Date
}

export interface SentEmailsControllerApiWaitForDeliveryStatusesRequest {
    /**
     * Optional sent email ID filter
     * @type string
     * @memberof SentEmailsControllerApiwaitForDeliveryStatuses
     */
    sentId?: string
    /**
     * Optional inbox ID filter
     * @type string
     * @memberof SentEmailsControllerApiwaitForDeliveryStatuses
     */
    inboxId?: string
    /**
     * Optional timeout milliseconds
     * @type number
     * @memberof SentEmailsControllerApiwaitForDeliveryStatuses
     */
    timeout?: number
    /**
     * Zero based index of the delivery status to wait for. If 1 delivery status already and you want to wait for the 2nd pass index&#x3D;1
     * @type number
     * @memberof SentEmailsControllerApiwaitForDeliveryStatuses
     */
    index?: number
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof SentEmailsControllerApiwaitForDeliveryStatuses
     */
    since?: Date
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof SentEmailsControllerApiwaitForDeliveryStatuses
     */
    before?: Date
}

export class ObjectSentEmailsControllerApi {
    private api: ObservableSentEmailsControllerApi

    public constructor(configuration: Configuration, requestFactory?: SentEmailsControllerApiRequestFactory, responseProcessor?: SentEmailsControllerApiResponseProcessor) {
        this.api = new ObservableSentEmailsControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete all sent email receipts
     * @param param the request object
     */
    public deleteAllSentEmails(param: SentEmailsControllerApiDeleteAllSentEmailsRequest, options?: Configuration): Promise<void> {
        return this.api.deleteAllSentEmails( options).toPromise();
    }

    /**
     * Delete sent email receipt
     * @param param the request object
     */
    public deleteSentEmail(param: SentEmailsControllerApiDeleteSentEmailRequest, options?: Configuration): Promise<void> {
        return this.api.deleteSentEmail(param.id,  options).toPromise();
    }

    /**
     * Get all sent email tracking pixels in paginated form
     * @param param the request object
     */
    public getAllSentTrackingPixels(param: SentEmailsControllerApiGetAllSentTrackingPixelsRequest, options?: Configuration): Promise<PageTrackingPixelProjection> {
        return this.api.getAllSentTrackingPixels(param.page, param.size, param.sort, param.searchFilter, param.since, param.before,  options).toPromise();
    }

    /**
     * Returns a raw, unparsed, and unprocessed sent email. If your client has issues processing the response it is likely due to the response content-type which is text/plain. If you need a JSON response content-type use the getRawSentEmailJson endpoint
     * Get raw sent email string. Returns unparsed raw SMTP message with headers and body.
     * @param param the request object
     */
    public getRawSentEmailContents(param: SentEmailsControllerApiGetRawSentEmailContentsRequest, options?: Configuration): Promise<string> {
        return this.api.getRawSentEmailContents(param.emailId,  options).toPromise();
    }

    /**
     * Returns a raw, unparsed, and unprocessed sent email wrapped in a JSON response object for easier handling when compared with the getRawSentEmail text/plain response
     * Get raw sent email in JSON. Unparsed SMTP message in JSON wrapper format.
     * @param param the request object
     */
    public getRawSentEmailJson(param: SentEmailsControllerApiGetRawSentEmailJsonRequest, options?: Configuration): Promise<RawEmailJson> {
        return this.api.getRawSentEmailJson(param.emailId,  options).toPromise();
    }

    /**
     * Get a sent email delivery status
     * @param param the request object
     */
    public getSentDeliveryStatus(param: SentEmailsControllerApiGetSentDeliveryStatusRequest, options?: Configuration): Promise<DeliveryStatusDto> {
        return this.api.getSentDeliveryStatus(param.deliveryId,  options).toPromise();
    }

    /**
     * Get all sent email delivery statuses
     * @param param the request object
     */
    public getSentDeliveryStatuses(param: SentEmailsControllerApiGetSentDeliveryStatusesRequest, options?: Configuration): Promise<PageDeliveryStatus> {
        return this.api.getSentDeliveryStatuses(param.page, param.size, param.sort, param.since, param.before,  options).toPromise();
    }

    /**
     * Get all sent email delivery statuses
     * @param param the request object
     */
    public getSentDeliveryStatusesBySentId(param: SentEmailsControllerApiGetSentDeliveryStatusesBySentIdRequest, options?: Configuration): Promise<PageDeliveryStatus> {
        return this.api.getSentDeliveryStatusesBySentId(param.sentId, param.page, param.size, param.sort, param.since, param.before,  options).toPromise();
    }

    /**
     * Get sent email receipt
     * @param param the request object
     */
    public getSentEmail(param: SentEmailsControllerApiGetSentEmailRequest, options?: Configuration): Promise<SentEmailDto> {
        return this.api.getSentEmail(param.id,  options).toPromise();
    }

    /**
     * Get sent email HTML content
     * @param param the request object
     */
    public getSentEmailHTMLContent(param: SentEmailsControllerApiGetSentEmailHTMLContentRequest, options?: Configuration): Promise<string> {
        return this.api.getSentEmailHTMLContent(param.id,  options).toPromise();
    }

    /**
     * Get a list of URLs for sent email content as text/html or raw SMTP message for viewing the message in a browser.
     * Get sent email URL for viewing in browser or downloading
     * @param param the request object
     */
    public getSentEmailPreviewURLs(param: SentEmailsControllerApiGetSentEmailPreviewURLsRequest, options?: Configuration): Promise<EmailPreviewUrls> {
        return this.api.getSentEmailPreviewURLs(param.id,  options).toPromise();
    }

    /**
     * Get all tracking pixels for a sent email in paginated form
     * @param param the request object
     */
    public getSentEmailTrackingPixels(param: SentEmailsControllerApiGetSentEmailTrackingPixelsRequest, options?: Configuration): Promise<PageTrackingPixelProjection> {
        return this.api.getSentEmailTrackingPixels(param.id, param.page, param.size, param.sort, param.searchFilter, param.since, param.before,  options).toPromise();
    }

    /**
     * Get all sent emails in paginated form
     * @param param the request object
     */
    public getSentEmails(param: SentEmailsControllerApiGetSentEmailsRequest, options?: Configuration): Promise<PageSentEmailProjection> {
        return this.api.getSentEmails(param.inboxId, param.page, param.size, param.sort, param.searchFilter, param.since, param.before,  options).toPromise();
    }

    /**
     * Get results of email sent with queues in paginated form
     * @param param the request object
     */
    public getSentEmailsWithQueueResults(param: SentEmailsControllerApiGetSentEmailsWithQueueResultsRequest, options?: Configuration): Promise<PageSentEmailWithQueueProjection> {
        return this.api.getSentEmailsWithQueueResults(param.page, param.size, param.sort, param.since, param.before,  options).toPromise();
    }

    /**
     * Get all sent organization emails in paginated form
     * @param param the request object
     */
    public getSentOrganizationEmails(param: SentEmailsControllerApiGetSentOrganizationEmailsRequest, options?: Configuration): Promise<PageSentEmailProjection> {
        return this.api.getSentOrganizationEmails(param.inboxId, param.page, param.size, param.sort, param.searchFilter, param.since, param.before,  options).toPromise();
    }

    /**
     * Wait for delivery statuses
     * @param param the request object
     */
    public waitForDeliveryStatuses(param: SentEmailsControllerApiWaitForDeliveryStatusesRequest, options?: Configuration): Promise<DeliveryStatusDto> {
        return this.api.waitForDeliveryStatuses(param.sentId, param.inboxId, param.timeout, param.index, param.since, param.before,  options).toPromise();
    }

}

import { ObservableSmsControllerApi } from "./ObservableAPI.ts";
import { SmsControllerApiRequestFactory, SmsControllerApiResponseProcessor} from "../apis/SmsControllerApi.ts";

export interface SmsControllerApiDeleteSmsMessageRequest {
    /**
     * 
     * @type string
     * @memberof SmsControllerApideleteSmsMessage
     */
    smsId: string
}

export interface SmsControllerApiDeleteSmsMessagesRequest {
    /**
     * 
     * @type string
     * @memberof SmsControllerApideleteSmsMessages
     */
    phoneNumberId?: string
}

export interface SmsControllerApiGetSmsMessageRequest {
    /**
     * 
     * @type string
     * @memberof SmsControllerApigetSmsMessage
     */
    smsId: string
}

export interface SmsControllerApiGetSmsMessagesPaginatedRequest {
    /**
     * Optional receiving phone number to filter SMS messages for
     * @type string
     * @memberof SmsControllerApigetSmsMessagesPaginated
     */
    phoneNumber?: string
    /**
     * Optional page index in SMS list pagination
     * @type number
     * @memberof SmsControllerApigetSmsMessagesPaginated
     */
    page?: number
    /**
     * Optional page size in SMS list pagination. Maximum size is 100. Use page index and sort to page through larger results
     * @type number
     * @memberof SmsControllerApigetSmsMessagesPaginated
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof SmsControllerApigetSmsMessagesPaginated
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Optional filter for unread SMS only. All SMS are considered unread until they are viewed in the dashboard or requested directly
     * @type boolean
     * @memberof SmsControllerApigetSmsMessagesPaginated
     */
    unreadOnly?: boolean
    /**
     * Optional filter SMSs received after given date time
     * @type Date
     * @memberof SmsControllerApigetSmsMessagesPaginated
     */
    since?: Date
    /**
     * Optional filter SMSs received before given date time
     * @type Date
     * @memberof SmsControllerApigetSmsMessagesPaginated
     */
    before?: Date
}

export interface SmsControllerApiGetUnreadSmsCountRequest {
}

export class ObjectSmsControllerApi {
    private api: ObservableSmsControllerApi

    public constructor(configuration: Configuration, requestFactory?: SmsControllerApiRequestFactory, responseProcessor?: SmsControllerApiResponseProcessor) {
        this.api = new ObservableSmsControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete an SMS message
     * Delete SMS message.
     * @param param the request object
     */
    public deleteSmsMessage(param: SmsControllerApiDeleteSmsMessageRequest, options?: Configuration): Promise<void> {
        return this.api.deleteSmsMessage(param.smsId,  options).toPromise();
    }

    /**
     * Delete all SMS messages or all messages for a given phone number
     * Delete all SMS messages
     * @param param the request object
     */
    public deleteSmsMessages(param: SmsControllerApiDeleteSmsMessagesRequest, options?: Configuration): Promise<void> {
        return this.api.deleteSmsMessages(param.phoneNumberId,  options).toPromise();
    }

    /**
     * Returns a SMS summary object with content.
     * Get SMS content including body. Expects SMS to exist by ID. For SMS that may not have arrived yet use the WaitForController.
     * @param param the request object
     */
    public getSmsMessage(param: SmsControllerApiGetSmsMessageRequest, options?: Configuration): Promise<SmsDto> {
        return this.api.getSmsMessage(param.smsId,  options).toPromise();
    }

    /**
     * By default returns all SMS messages across all phone numbers sorted by ascending created at date. Responses are paginated. You can restrict results to a list of phone number IDs. You can also filter out read messages
     * Get all SMS messages in all phone numbers in paginated form. .
     * @param param the request object
     */
    public getSmsMessagesPaginated(param: SmsControllerApiGetSmsMessagesPaginatedRequest, options?: Configuration): Promise<PageSmsProjection> {
        return this.api.getSmsMessagesPaginated(param.phoneNumber, param.page, param.size, param.sort, param.unreadOnly, param.since, param.before,  options).toPromise();
    }

    /**
     * Get number of SMS unread. Unread means has not been viewed in dashboard or returned in an email API response
     * Get unread SMS count
     * @param param the request object
     */
    public getUnreadSmsCount(param: SmsControllerApiGetUnreadSmsCountRequest, options?: Configuration): Promise<UnreadCount> {
        return this.api.getUnreadSmsCount( options).toPromise();
    }

}

import { ObservableTemplateControllerApi } from "./ObservableAPI.ts";
import { TemplateControllerApiRequestFactory, TemplateControllerApiResponseProcessor} from "../apis/TemplateControllerApi.ts";

export interface TemplateControllerApiCreateTemplateRequest {
    /**
     * 
     * @type CreateTemplateOptions
     * @memberof TemplateControllerApicreateTemplate
     */
    createTemplateOptions: CreateTemplateOptions
}

export interface TemplateControllerApiDeleteTemplateRequest {
    /**
     * Template ID
     * @type string
     * @memberof TemplateControllerApideleteTemplate
     */
    templateId: string
}

export interface TemplateControllerApiGetAllTemplatesRequest {
    /**
     * Optional page index in list pagination
     * @type number
     * @memberof TemplateControllerApigetAllTemplates
     */
    page?: number
    /**
     * Optional page size in list pagination
     * @type number
     * @memberof TemplateControllerApigetAllTemplates
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof TemplateControllerApigetAllTemplates
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof TemplateControllerApigetAllTemplates
     */
    since?: Date
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof TemplateControllerApigetAllTemplates
     */
    before?: Date
}

export interface TemplateControllerApiGetTemplateRequest {
    /**
     * Template ID
     * @type string
     * @memberof TemplateControllerApigetTemplate
     */
    templateId: string
}

export interface TemplateControllerApiGetTemplatePreviewHtmlRequest {
    /**
     * Template ID
     * @type string
     * @memberof TemplateControllerApigetTemplatePreviewHtml
     */
    templateId: string
}

export interface TemplateControllerApiGetTemplatePreviewJsonRequest {
    /**
     * Template ID
     * @type string
     * @memberof TemplateControllerApigetTemplatePreviewJson
     */
    templateId: string
}

export interface TemplateControllerApiGetTemplatesRequest {
}

export interface TemplateControllerApiUpdateTemplateRequest {
    /**
     * Template ID
     * @type string
     * @memberof TemplateControllerApiupdateTemplate
     */
    templateId: string
    /**
     * 
     * @type CreateTemplateOptions
     * @memberof TemplateControllerApiupdateTemplate
     */
    createTemplateOptions: CreateTemplateOptions
}

export class ObjectTemplateControllerApi {
    private api: ObservableTemplateControllerApi

    public constructor(configuration: Configuration, requestFactory?: TemplateControllerApiRequestFactory, responseProcessor?: TemplateControllerApiResponseProcessor) {
        this.api = new ObservableTemplateControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an email template with variables for use with templated transactional emails.
     * Create a Template
     * @param param the request object
     */
    public createTemplate(param: TemplateControllerApiCreateTemplateRequest, options?: Configuration): Promise<TemplateDto> {
        return this.api.createTemplate(param.createTemplateOptions,  options).toPromise();
    }

    /**
     * Delete template
     * Delete email template
     * @param param the request object
     */
    public deleteTemplate(param: TemplateControllerApiDeleteTemplateRequest, options?: Configuration): Promise<void> {
        return this.api.deleteTemplate(param.templateId,  options).toPromise();
    }

    /**
     * Get all templates in paginated format
     * List templates
     * @param param the request object
     */
    public getAllTemplates(param: TemplateControllerApiGetAllTemplatesRequest, options?: Configuration): Promise<PageTemplateProjection> {
        return this.api.getAllTemplates(param.page, param.size, param.sort, param.since, param.before,  options).toPromise();
    }

    /**
     * Get email template
     * Get template
     * @param param the request object
     */
    public getTemplate(param: TemplateControllerApiGetTemplateRequest, options?: Configuration): Promise<TemplateDto> {
        return this.api.getTemplate(param.templateId,  options).toPromise();
    }

    /**
     * Get email template preview with passed template variables in HTML format for browsers. Pass template variables as query params.
     * Get template preview HTML
     * @param param the request object
     */
    public getTemplatePreviewHtml(param: TemplateControllerApiGetTemplatePreviewHtmlRequest, options?: Configuration): Promise<string> {
        return this.api.getTemplatePreviewHtml(param.templateId,  options).toPromise();
    }

    /**
     * Get email template preview with passed template variables in JSON format. Pass template variables as query params.
     * Get template preview Json
     * @param param the request object
     */
    public getTemplatePreviewJson(param: TemplateControllerApiGetTemplatePreviewJsonRequest, options?: Configuration): Promise<TemplatePreview> {
        return this.api.getTemplatePreviewJson(param.templateId,  options).toPromise();
    }

    /**
     * Get all templates
     * List templates
     * @param param the request object
     */
    public getTemplates(param: TemplateControllerApiGetTemplatesRequest, options?: Configuration): Promise<Array<TemplateProjection>> {
        return this.api.getTemplates( options).toPromise();
    }

    /**
     * Update email template
     * Update template
     * @param param the request object
     */
    public updateTemplate(param: TemplateControllerApiUpdateTemplateRequest, options?: Configuration): Promise<TemplateDto> {
        return this.api.updateTemplate(param.templateId, param.createTemplateOptions,  options).toPromise();
    }

}

import { ObservableTrackingControllerApi } from "./ObservableAPI.ts";
import { TrackingControllerApiRequestFactory, TrackingControllerApiResponseProcessor} from "../apis/TrackingControllerApi.ts";

export interface TrackingControllerApiCreateTrackingPixelRequest {
    /**
     * 
     * @type CreateTrackingPixelOptions
     * @memberof TrackingControllerApicreateTrackingPixel
     */
    createTrackingPixelOptions: CreateTrackingPixelOptions
}

export interface TrackingControllerApiGetAllTrackingPixelsRequest {
    /**
     * Optional page index in list pagination
     * @type number
     * @memberof TrackingControllerApigetAllTrackingPixels
     */
    page?: number
    /**
     * Optional page size in list pagination
     * @type number
     * @memberof TrackingControllerApigetAllTrackingPixels
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof TrackingControllerApigetAllTrackingPixels
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Optional search filter
     * @type string
     * @memberof TrackingControllerApigetAllTrackingPixels
     */
    searchFilter?: string
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof TrackingControllerApigetAllTrackingPixels
     */
    since?: Date
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof TrackingControllerApigetAllTrackingPixels
     */
    before?: Date
}

export interface TrackingControllerApiGetTrackingPixelRequest {
    /**
     * 
     * @type string
     * @memberof TrackingControllerApigetTrackingPixel
     */
    id: string
}

export class ObjectTrackingControllerApi {
    private api: ObservableTrackingControllerApi

    public constructor(configuration: Configuration, requestFactory?: TrackingControllerApiRequestFactory, responseProcessor?: TrackingControllerApiResponseProcessor) {
        this.api = new ObservableTrackingControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a tracking pixel. A tracking pixel is an image that can be embedded in an email. When the email is viewed and the image is seen MailSlurp will mark the pixel as seen. Use tracking pixels to monitor email open events. You can receive open notifications via webhook or by fetching the pixel.
     * Create tracking pixel
     * @param param the request object
     */
    public createTrackingPixel(param: TrackingControllerApiCreateTrackingPixelRequest, options?: Configuration): Promise<TrackingPixelDto> {
        return this.api.createTrackingPixel(param.createTrackingPixelOptions,  options).toPromise();
    }

    /**
     * List tracking pixels in paginated form
     * Get tracking pixels
     * @param param the request object
     */
    public getAllTrackingPixels(param: TrackingControllerApiGetAllTrackingPixelsRequest, options?: Configuration): Promise<PageTrackingPixelProjection> {
        return this.api.getAllTrackingPixels(param.page, param.size, param.sort, param.searchFilter, param.since, param.before,  options).toPromise();
    }

    /**
     * Get pixel
     * @param param the request object
     */
    public getTrackingPixel(param: TrackingControllerApiGetTrackingPixelRequest, options?: Configuration): Promise<TrackingPixelDto> {
        return this.api.getTrackingPixel(param.id,  options).toPromise();
    }

}

import { ObservableUserControllerApi } from "./ObservableAPI.ts";
import { UserControllerApiRequestFactory, UserControllerApiResponseProcessor} from "../apis/UserControllerApi.ts";

export interface UserControllerApiGetJsonPropertyAsStringRequest {
    /**
     * JSON property name or dot separated path selector such as &#x60;a.b.c&#x60;
     * @type string
     * @memberof UserControllerApigetJsonPropertyAsString
     */
    property: string
    /**
     * 
     * @type any
     * @memberof UserControllerApigetJsonPropertyAsString
     */
    body: any
}

export interface UserControllerApiGetUserInfoRequest {
}

export class ObjectUserControllerApi {
    private api: ObservableUserControllerApi

    public constructor(configuration: Configuration, requestFactory?: UserControllerApiRequestFactory, responseProcessor?: UserControllerApiResponseProcessor) {
        this.api = new ObservableUserControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Utility function to extract properties from JSON objects in language where this is cumbersome.
     * @param param the request object
     */
    public getJsonPropertyAsString(param: UserControllerApiGetJsonPropertyAsStringRequest, options?: Configuration): Promise<string> {
        return this.api.getJsonPropertyAsString(param.property, param.body,  options).toPromise();
    }

    /**
     * Get account information for your user
     * @param param the request object
     */
    public getUserInfo(param: UserControllerApiGetUserInfoRequest, options?: Configuration): Promise<UserInfoDto> {
        return this.api.getUserInfo( options).toPromise();
    }

}

import { ObservableWaitForControllerApi } from "./ObservableAPI.ts";
import { WaitForControllerApiRequestFactory, WaitForControllerApiResponseProcessor} from "../apis/WaitForControllerApi.ts";

export interface WaitForControllerApiWaitForRequest {
    /**
     * 
     * @type WaitForConditions
     * @memberof WaitForControllerApiwaitFor
     */
    waitForConditions: WaitForConditions
}

export interface WaitForControllerApiWaitForEmailCountRequest {
    /**
     * Id of the inbox we are fetching emails from
     * @type string
     * @memberof WaitForControllerApiwaitForEmailCount
     */
    inboxId: string
    /**
     * Number of emails to wait for. Must be greater that 1
     * @type number
     * @memberof WaitForControllerApiwaitForEmailCount
     */
    count: number
    /**
     * Max milliseconds to wait
     * @type number
     * @memberof WaitForControllerApiwaitForEmailCount
     */
    timeout?: number
    /**
     * Optional filter for unread only
     * @type boolean
     * @memberof WaitForControllerApiwaitForEmailCount
     */
    unreadOnly?: boolean
    /**
     * Filter for emails that were received before the given timestamp
     * @type Date
     * @memberof WaitForControllerApiwaitForEmailCount
     */
    before?: Date
    /**
     * Filter for emails that were received after the given timestamp
     * @type Date
     * @memberof WaitForControllerApiwaitForEmailCount
     */
    since?: Date
    /**
     * Sort direction
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof WaitForControllerApiwaitForEmailCount
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Max milliseconds delay between calls
     * @type number
     * @memberof WaitForControllerApiwaitForEmailCount
     */
    delay?: number
}

export interface WaitForControllerApiWaitForLatestEmailRequest {
    /**
     * Id of the inbox we are fetching emails from
     * @type string
     * @memberof WaitForControllerApiwaitForLatestEmail
     */
    inboxId?: string
    /**
     * Max milliseconds to wait
     * @type number
     * @memberof WaitForControllerApiwaitForLatestEmail
     */
    timeout?: number
    /**
     * Optional filter for unread only.
     * @type boolean
     * @memberof WaitForControllerApiwaitForLatestEmail
     */
    unreadOnly?: boolean
    /**
     * Filter for emails that were before after the given timestamp
     * @type Date
     * @memberof WaitForControllerApiwaitForLatestEmail
     */
    before?: Date
    /**
     * Filter for emails that were received after the given timestamp
     * @type Date
     * @memberof WaitForControllerApiwaitForLatestEmail
     */
    since?: Date
    /**
     * Sort direction
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof WaitForControllerApiwaitForLatestEmail
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Max milliseconds delay between calls
     * @type number
     * @memberof WaitForControllerApiwaitForLatestEmail
     */
    delay?: number
}

export interface WaitForControllerApiWaitForLatestSmsRequest {
    /**
     * 
     * @type WaitForSingleSmsOptions
     * @memberof WaitForControllerApiwaitForLatestSms
     */
    waitForSingleSmsOptions: WaitForSingleSmsOptions
}

export interface WaitForControllerApiWaitForMatchingEmailsRequest {
    /**
     * Id of the inbox we are fetching emails from
     * @type string
     * @memberof WaitForControllerApiwaitForMatchingEmails
     */
    inboxId: string
    /**
     * Number of emails to wait for. Must be greater or equal to 1
     * @type number
     * @memberof WaitForControllerApiwaitForMatchingEmails
     */
    count: number
    /**
     * 
     * @type MatchOptions
     * @memberof WaitForControllerApiwaitForMatchingEmails
     */
    matchOptions: MatchOptions
    /**
     * Filter for emails that were received before the given timestamp
     * @type Date
     * @memberof WaitForControllerApiwaitForMatchingEmails
     */
    before?: Date
    /**
     * Filter for emails that were received after the given timestamp
     * @type Date
     * @memberof WaitForControllerApiwaitForMatchingEmails
     */
    since?: Date
    /**
     * Sort direction
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof WaitForControllerApiwaitForMatchingEmails
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Max milliseconds delay between calls
     * @type number
     * @memberof WaitForControllerApiwaitForMatchingEmails
     */
    delay?: number
    /**
     * Max milliseconds to wait
     * @type number
     * @memberof WaitForControllerApiwaitForMatchingEmails
     */
    timeout?: number
    /**
     * Optional filter for unread only
     * @type boolean
     * @memberof WaitForControllerApiwaitForMatchingEmails
     */
    unreadOnly?: boolean
}

export interface WaitForControllerApiWaitForMatchingFirstEmailRequest {
    /**
     * Id of the inbox we are matching an email for
     * @type string
     * @memberof WaitForControllerApiwaitForMatchingFirstEmail
     */
    inboxId: string
    /**
     * 
     * @type MatchOptions
     * @memberof WaitForControllerApiwaitForMatchingFirstEmail
     */
    matchOptions: MatchOptions
    /**
     * Max milliseconds to wait
     * @type number
     * @memberof WaitForControllerApiwaitForMatchingFirstEmail
     */
    timeout?: number
    /**
     * Optional filter for unread only
     * @type boolean
     * @memberof WaitForControllerApiwaitForMatchingFirstEmail
     */
    unreadOnly?: boolean
    /**
     * Filter for emails that were received after the given timestamp
     * @type Date
     * @memberof WaitForControllerApiwaitForMatchingFirstEmail
     */
    since?: Date
    /**
     * Filter for emails that were received before the given timestamp
     * @type Date
     * @memberof WaitForControllerApiwaitForMatchingFirstEmail
     */
    before?: Date
    /**
     * Sort direction
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof WaitForControllerApiwaitForMatchingFirstEmail
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Max milliseconds delay between calls
     * @type number
     * @memberof WaitForControllerApiwaitForMatchingFirstEmail
     */
    delay?: number
}

export interface WaitForControllerApiWaitForNthEmailRequest {
    /**
     * Id of the inbox you are fetching emails from
     * @type string
     * @memberof WaitForControllerApiwaitForNthEmail
     */
    inboxId?: string
    /**
     * Zero based index of the email to wait for. If an inbox has 1 email already and you want to wait for the 2nd email pass index&#x3D;1
     * @type number
     * @memberof WaitForControllerApiwaitForNthEmail
     */
    index?: number
    /**
     * Max milliseconds to wait for the nth email if not already present
     * @type number
     * @memberof WaitForControllerApiwaitForNthEmail
     */
    timeout?: number
    /**
     * Optional filter for unread only
     * @type boolean
     * @memberof WaitForControllerApiwaitForNthEmail
     */
    unreadOnly?: boolean
    /**
     * Filter for emails that were received after the given timestamp
     * @type Date
     * @memberof WaitForControllerApiwaitForNthEmail
     */
    since?: Date
    /**
     * Filter for emails that were received before the given timestamp
     * @type Date
     * @memberof WaitForControllerApiwaitForNthEmail
     */
    before?: Date
    /**
     * Sort direction
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof WaitForControllerApiwaitForNthEmail
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Max milliseconds delay between calls
     * @type number
     * @memberof WaitForControllerApiwaitForNthEmail
     */
    delay?: number
}

export interface WaitForControllerApiWaitForSmsRequest {
    /**
     * 
     * @type WaitForSmsConditions
     * @memberof WaitForControllerApiwaitForSms
     */
    waitForSmsConditions: WaitForSmsConditions
}

export class ObjectWaitForControllerApi {
    private api: ObservableWaitForControllerApi

    public constructor(configuration: Configuration, requestFactory?: WaitForControllerApiRequestFactory, responseProcessor?: WaitForControllerApiResponseProcessor) {
        this.api = new ObservableWaitForControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Generic waitFor method that will wait until an inbox meets given conditions or return immediately if already met
     * Wait for an email to match the provided filter conditions such as subject contains keyword.
     * @param param the request object
     */
    public waitFor(param: WaitForControllerApiWaitForRequest, options?: Configuration): Promise<Array<EmailPreview>> {
        return this.api.waitFor(param.waitForConditions,  options).toPromise();
    }

    /**
     * If inbox contains count or more emails at time of request then return count worth of emails. If not wait until the count is reached and return those or return an error if timeout is exceeded.
     * Wait for and return count number of emails. Hold connection until inbox count matches expected or timeout occurs
     * @param param the request object
     */
    public waitForEmailCount(param: WaitForControllerApiWaitForEmailCountRequest, options?: Configuration): Promise<Array<EmailPreview>> {
        return this.api.waitForEmailCount(param.inboxId, param.count, param.timeout, param.unreadOnly, param.before, param.since, param.sort, param.delay,  options).toPromise();
    }

    /**
     * Will return either the last received email or wait for an email to arrive and return that. If you need to wait for an email for a non-empty inbox set `unreadOnly=true` or see the other receive methods such as `waitForNthEmail` or `waitForEmailCount`.
     * Fetch inbox's latest email or if empty wait for an email to arrive
     * @param param the request object
     */
    public waitForLatestEmail(param: WaitForControllerApiWaitForLatestEmailRequest, options?: Configuration): Promise<Email> {
        return this.api.waitForLatestEmail(param.inboxId, param.timeout, param.unreadOnly, param.before, param.since, param.sort, param.delay,  options).toPromise();
    }

    /**
     * Wait until a phone number meets given conditions or return immediately if already met
     * Wait for the latest SMS message to match the provided filter conditions such as body contains keyword.
     * @param param the request object
     */
    public waitForLatestSms(param: WaitForControllerApiWaitForLatestSmsRequest, options?: Configuration): Promise<SmsDto> {
        return this.api.waitForLatestSms(param.waitForSingleSmsOptions,  options).toPromise();
    }

    /**
     * Perform a search of emails in an inbox with the given patterns. If results match expected count then return or else retry the search until results are found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options. An example payload is `{ matches: [{field: 'SUBJECT',should:'CONTAIN',value:'needle'}] }`. You can use an array of matches and they will be applied sequentially to filter out emails. If you want to perform matches and extractions of content using Regex patterns see the EmailController `getEmailContentMatch` method.
     * Wait or return list of emails that match simple matching patterns
     * @param param the request object
     */
    public waitForMatchingEmails(param: WaitForControllerApiWaitForMatchingEmailsRequest, options?: Configuration): Promise<Array<EmailPreview>> {
        return this.api.waitForMatchingEmails(param.inboxId, param.count, param.matchOptions, param.before, param.since, param.sort, param.delay, param.timeout, param.unreadOnly,  options).toPromise();
    }

    /**
     * Perform a search of emails in an inbox with the given patterns. If a result if found then return or else retry the search until a result is found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options. An example payload is `{ matches: [{field: 'SUBJECT',should:'CONTAIN',value:'needle'}] }`. You can use an array of matches and they will be applied sequentially to filter out emails. If you want to perform matches and extractions of content using Regex patterns see the EmailController `getEmailContentMatch` method.
     * Wait for or return the first email that matches provided MatchOptions array
     * @param param the request object
     */
    public waitForMatchingFirstEmail(param: WaitForControllerApiWaitForMatchingFirstEmailRequest, options?: Configuration): Promise<Email> {
        return this.api.waitForMatchingFirstEmail(param.inboxId, param.matchOptions, param.timeout, param.unreadOnly, param.since, param.before, param.sort, param.delay,  options).toPromise();
    }

    /**
     * If nth email is already present in inbox then return it. If not hold the connection open until timeout expires or the nth email is received and returned.
     * Wait for or fetch the email with a given index in the inbox specified. If index doesn't exist waits for it to exist or timeout to occur.
     * @param param the request object
     */
    public waitForNthEmail(param: WaitForControllerApiWaitForNthEmailRequest, options?: Configuration): Promise<Email> {
        return this.api.waitForNthEmail(param.inboxId, param.index, param.timeout, param.unreadOnly, param.since, param.before, param.sort, param.delay,  options).toPromise();
    }

    /**
     * Generic waitFor method that will wait until a phone number meets given conditions or return immediately if already met
     * Wait for an SMS message to match the provided filter conditions such as body contains keyword.
     * @param param the request object
     */
    public waitForSms(param: WaitForControllerApiWaitForSmsRequest, options?: Configuration): Promise<Array<SmsPreview>> {
        return this.api.waitForSms(param.waitForSmsConditions,  options).toPromise();
    }

}

import { ObservableWebhookControllerApi } from "./ObservableAPI.ts";
import { WebhookControllerApiRequestFactory, WebhookControllerApiResponseProcessor} from "../apis/WebhookControllerApi.ts";

export interface WebhookControllerApiCreateAccountWebhookRequest {
    /**
     * 
     * @type CreateWebhookOptions
     * @memberof WebhookControllerApicreateAccountWebhook
     */
    createWebhookOptions: CreateWebhookOptions
}

export interface WebhookControllerApiCreateWebhookRequest {
    /**
     * 
     * @type string
     * @memberof WebhookControllerApicreateWebhook
     */
    inboxId: string
    /**
     * 
     * @type CreateWebhookOptions
     * @memberof WebhookControllerApicreateWebhook
     */
    createWebhookOptions: CreateWebhookOptions
}

export interface WebhookControllerApiCreateWebhookForPhoneNumberRequest {
    /**
     * 
     * @type string
     * @memberof WebhookControllerApicreateWebhookForPhoneNumber
     */
    phoneNumberId: string
    /**
     * 
     * @type CreateWebhookOptions
     * @memberof WebhookControllerApicreateWebhookForPhoneNumber
     */
    createWebhookOptions: CreateWebhookOptions
}

export interface WebhookControllerApiDeleteAllWebhooksRequest {
    /**
     * before
     * @type Date
     * @memberof WebhookControllerApideleteAllWebhooks
     */
    before?: Date
}

export interface WebhookControllerApiDeleteWebhookRequest {
    /**
     * 
     * @type string
     * @memberof WebhookControllerApideleteWebhook
     */
    inboxId: string
    /**
     * 
     * @type string
     * @memberof WebhookControllerApideleteWebhook
     */
    webhookId: string
}

export interface WebhookControllerApiDeleteWebhookByIdRequest {
    /**
     * 
     * @type string
     * @memberof WebhookControllerApideleteWebhookById
     */
    webhookId: string
}

export interface WebhookControllerApiGetAllAccountWebhooksRequest {
    /**
     * Optional page index in list pagination
     * @type number
     * @memberof WebhookControllerApigetAllAccountWebhooks
     */
    page?: number
    /**
     * Optional page size for paginated result list.
     * @type number
     * @memberof WebhookControllerApigetAllAccountWebhooks
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof WebhookControllerApigetAllAccountWebhooks
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Optional event type
     * @type &#39;EMAIL_RECEIVED&#39; | &#39;NEW_EMAIL&#39; | &#39;NEW_CONTACT&#39; | &#39;NEW_ATTACHMENT&#39; | &#39;EMAIL_OPENED&#39; | &#39;EMAIL_READ&#39; | &#39;DELIVERY_STATUS&#39; | &#39;BOUNCE&#39; | &#39;BOUNCE_RECIPIENT&#39; | &#39;NEW_SMS&#39;
     * @memberof WebhookControllerApigetAllAccountWebhooks
     */
    eventType?: 'EMAIL_RECEIVED' | 'NEW_EMAIL' | 'NEW_CONTACT' | 'NEW_ATTACHMENT' | 'EMAIL_OPENED' | 'EMAIL_READ' | 'DELIVERY_STATUS' | 'BOUNCE' | 'BOUNCE_RECIPIENT' | 'NEW_SMS'
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof WebhookControllerApigetAllAccountWebhooks
     */
    since?: Date
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof WebhookControllerApigetAllAccountWebhooks
     */
    before?: Date
}

export interface WebhookControllerApiGetAllWebhookResultsRequest {
    /**
     * Optional page index in list pagination
     * @type number
     * @memberof WebhookControllerApigetAllWebhookResults
     */
    page?: number
    /**
     * Optional page size in list pagination
     * @type number
     * @memberof WebhookControllerApigetAllWebhookResults
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof WebhookControllerApigetAllWebhookResults
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Optional search filter
     * @type string
     * @memberof WebhookControllerApigetAllWebhookResults
     */
    searchFilter?: string
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof WebhookControllerApigetAllWebhookResults
     */
    since?: Date
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof WebhookControllerApigetAllWebhookResults
     */
    before?: Date
    /**
     * Filter for unseen exceptions only
     * @type boolean
     * @memberof WebhookControllerApigetAllWebhookResults
     */
    unseenOnly?: boolean
}

export interface WebhookControllerApiGetAllWebhooksRequest {
    /**
     * Optional page index in list pagination
     * @type number
     * @memberof WebhookControllerApigetAllWebhooks
     */
    page?: number
    /**
     * Optional page size for paginated result list.
     * @type number
     * @memberof WebhookControllerApigetAllWebhooks
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof WebhookControllerApigetAllWebhooks
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Optional search filter
     * @type string
     * @memberof WebhookControllerApigetAllWebhooks
     */
    searchFilter?: string
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof WebhookControllerApigetAllWebhooks
     */
    since?: Date
    /**
     * Filter by inboxId
     * @type string
     * @memberof WebhookControllerApigetAllWebhooks
     */
    inboxId?: string
    /**
     * Filter by phoneId
     * @type string
     * @memberof WebhookControllerApigetAllWebhooks
     */
    phoneId?: string
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof WebhookControllerApigetAllWebhooks
     */
    before?: Date
}

export interface WebhookControllerApiGetInboxWebhooksPaginatedRequest {
    /**
     * 
     * @type string
     * @memberof WebhookControllerApigetInboxWebhooksPaginated
     */
    inboxId: string
    /**
     * Optional page index in list pagination
     * @type number
     * @memberof WebhookControllerApigetInboxWebhooksPaginated
     */
    page?: number
    /**
     * Optional page size in list pagination
     * @type number
     * @memberof WebhookControllerApigetInboxWebhooksPaginated
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof WebhookControllerApigetInboxWebhooksPaginated
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Optional search filter
     * @type string
     * @memberof WebhookControllerApigetInboxWebhooksPaginated
     */
    searchFilter?: string
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof WebhookControllerApigetInboxWebhooksPaginated
     */
    since?: Date
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof WebhookControllerApigetInboxWebhooksPaginated
     */
    before?: Date
}

export interface WebhookControllerApiGetJsonSchemaForWebhookEventRequest {
    /**
     * 
     * @type &#39;EMAIL_RECEIVED&#39; | &#39;NEW_EMAIL&#39; | &#39;NEW_CONTACT&#39; | &#39;NEW_ATTACHMENT&#39; | &#39;EMAIL_OPENED&#39; | &#39;EMAIL_READ&#39; | &#39;DELIVERY_STATUS&#39; | &#39;BOUNCE&#39; | &#39;BOUNCE_RECIPIENT&#39; | &#39;NEW_SMS&#39;
     * @memberof WebhookControllerApigetJsonSchemaForWebhookEvent
     */
    event: 'EMAIL_RECEIVED' | 'NEW_EMAIL' | 'NEW_CONTACT' | 'NEW_ATTACHMENT' | 'EMAIL_OPENED' | 'EMAIL_READ' | 'DELIVERY_STATUS' | 'BOUNCE' | 'BOUNCE_RECIPIENT' | 'NEW_SMS'
}

export interface WebhookControllerApiGetJsonSchemaForWebhookPayloadRequest {
    /**
     * 
     * @type string
     * @memberof WebhookControllerApigetJsonSchemaForWebhookPayload
     */
    webhookId: string
}

export interface WebhookControllerApiGetPhoneNumberWebhooksPaginatedRequest {
    /**
     * 
     * @type string
     * @memberof WebhookControllerApigetPhoneNumberWebhooksPaginated
     */
    phoneId: string
    /**
     * Optional page index in list pagination
     * @type number
     * @memberof WebhookControllerApigetPhoneNumberWebhooksPaginated
     */
    page?: number
    /**
     * Optional page size in list pagination
     * @type number
     * @memberof WebhookControllerApigetPhoneNumberWebhooksPaginated
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof WebhookControllerApigetPhoneNumberWebhooksPaginated
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof WebhookControllerApigetPhoneNumberWebhooksPaginated
     */
    since?: Date
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof WebhookControllerApigetPhoneNumberWebhooksPaginated
     */
    before?: Date
}

export interface WebhookControllerApiGetTestWebhookPayloadRequest {
    /**
     * 
     * @type &#39;EMAIL_RECEIVED&#39; | &#39;NEW_EMAIL&#39; | &#39;NEW_CONTACT&#39; | &#39;NEW_ATTACHMENT&#39; | &#39;EMAIL_OPENED&#39; | &#39;EMAIL_READ&#39; | &#39;DELIVERY_STATUS&#39; | &#39;BOUNCE&#39; | &#39;BOUNCE_RECIPIENT&#39; | &#39;NEW_SMS&#39;
     * @memberof WebhookControllerApigetTestWebhookPayload
     */
    eventName?: 'EMAIL_RECEIVED' | 'NEW_EMAIL' | 'NEW_CONTACT' | 'NEW_ATTACHMENT' | 'EMAIL_OPENED' | 'EMAIL_READ' | 'DELIVERY_STATUS' | 'BOUNCE' | 'BOUNCE_RECIPIENT' | 'NEW_SMS'
}

export interface WebhookControllerApiGetTestWebhookPayloadBounceRequest {
}

export interface WebhookControllerApiGetTestWebhookPayloadBounceRecipientRequest {
}

export interface WebhookControllerApiGetTestWebhookPayloadDeliveryStatusRequest {
}

export interface WebhookControllerApiGetTestWebhookPayloadEmailOpenedRequest {
}

export interface WebhookControllerApiGetTestWebhookPayloadEmailReadRequest {
}

export interface WebhookControllerApiGetTestWebhookPayloadForWebhookRequest {
    /**
     * 
     * @type string
     * @memberof WebhookControllerApigetTestWebhookPayloadForWebhook
     */
    webhookId: string
}

export interface WebhookControllerApiGetTestWebhookPayloadNewAttachmentRequest {
}

export interface WebhookControllerApiGetTestWebhookPayloadNewContactRequest {
}

export interface WebhookControllerApiGetTestWebhookPayloadNewEmailRequest {
}

export interface WebhookControllerApiGetTestWebhookPayloadNewSmsRequest {
}

export interface WebhookControllerApiGetWebhookRequest {
    /**
     * 
     * @type string
     * @memberof WebhookControllerApigetWebhook
     */
    webhookId: string
}

export interface WebhookControllerApiGetWebhookResultRequest {
    /**
     * Webhook Result ID
     * @type string
     * @memberof WebhookControllerApigetWebhookResult
     */
    webhookResultId: string
}

export interface WebhookControllerApiGetWebhookResultsRequest {
    /**
     * ID of webhook to get results for
     * @type string
     * @memberof WebhookControllerApigetWebhookResults
     */
    webhookId: string
    /**
     * Optional page index in list pagination
     * @type number
     * @memberof WebhookControllerApigetWebhookResults
     */
    page?: number
    /**
     * Optional page size in list pagination
     * @type number
     * @memberof WebhookControllerApigetWebhookResults
     */
    size?: number
    /**
     * Optional createdAt sort direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof WebhookControllerApigetWebhookResults
     */
    sort?: 'ASC' | 'DESC'
    /**
     * Optional search filter
     * @type string
     * @memberof WebhookControllerApigetWebhookResults
     */
    searchFilter?: string
    /**
     * Filter by created at after the given timestamp
     * @type Date
     * @memberof WebhookControllerApigetWebhookResults
     */
    since?: Date
    /**
     * Filter by created at before the given timestamp
     * @type Date
     * @memberof WebhookControllerApigetWebhookResults
     */
    before?: Date
    /**
     * Filter for unseen exceptions only
     * @type boolean
     * @memberof WebhookControllerApigetWebhookResults
     */
    unseenOnly?: boolean
}

export interface WebhookControllerApiGetWebhookResultsUnseenErrorCountRequest {
}

export interface WebhookControllerApiGetWebhooksRequest {
    /**
     * 
     * @type string
     * @memberof WebhookControllerApigetWebhooks
     */
    inboxId: string
}

export interface WebhookControllerApiRedriveWebhookResultRequest {
    /**
     * Webhook Result ID
     * @type string
     * @memberof WebhookControllerApiredriveWebhookResult
     */
    webhookResultId: string
}

export interface WebhookControllerApiSendTestDataRequest {
    /**
     * 
     * @type string
     * @memberof WebhookControllerApisendTestData
     */
    webhookId: string
}

export interface WebhookControllerApiUpdateWebhookHeadersRequest {
    /**
     * 
     * @type string
     * @memberof WebhookControllerApiupdateWebhookHeaders
     */
    webhookId: string
    /**
     * 
     * @type WebhookHeaders
     * @memberof WebhookControllerApiupdateWebhookHeaders
     */
    webhookHeaders: WebhookHeaders
}

export interface WebhookControllerApiVerifyWebhookSignatureRequest {
    /**
     * 
     * @type VerifyWebhookSignatureOptions
     * @memberof WebhookControllerApiverifyWebhookSignature
     */
    verifyWebhookSignatureOptions: VerifyWebhookSignatureOptions
}

export class ObjectWebhookControllerApi {
    private api: ObservableWebhookControllerApi

    public constructor(configuration: Configuration, requestFactory?: WebhookControllerApiRequestFactory, responseProcessor?: WebhookControllerApiResponseProcessor) {
        this.api = new ObservableWebhookControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get notified of account level events such as bounce and bounce recipient.
     * Attach a WebHook URL to an inbox
     * @param param the request object
     */
    public createAccountWebhook(param: WebhookControllerApiCreateAccountWebhookRequest, options?: Configuration): Promise<WebhookDto> {
        return this.api.createAccountWebhook(param.createWebhookOptions,  options).toPromise();
    }

    /**
     * Get notified whenever an inbox receives an email via a WebHook URL. An emailID will be posted to this URL every time an email is received for this inbox. The URL must be publicly reachable by the MailSlurp server. You can provide basicAuth values if you wish to secure this endpoint.
     * Attach a WebHook URL to an inbox
     * @param param the request object
     */
    public createWebhook(param: WebhookControllerApiCreateWebhookRequest, options?: Configuration): Promise<WebhookDto> {
        return this.api.createWebhook(param.inboxId, param.createWebhookOptions,  options).toPromise();
    }

    /**
     * Get notified whenever a phone number receives an SMS via a WebHook URL.
     * Attach a WebHook URL to a phone number
     * @param param the request object
     */
    public createWebhookForPhoneNumber(param: WebhookControllerApiCreateWebhookForPhoneNumberRequest, options?: Configuration): Promise<WebhookDto> {
        return this.api.createWebhookForPhoneNumber(param.phoneNumberId, param.createWebhookOptions,  options).toPromise();
    }

    /**
     * Delete all webhooks
     * @param param the request object
     */
    public deleteAllWebhooks(param: WebhookControllerApiDeleteAllWebhooksRequest, options?: Configuration): Promise<void> {
        return this.api.deleteAllWebhooks(param.before,  options).toPromise();
    }

    /**
     * Delete and disable a Webhook for an Inbox
     * @param param the request object
     */
    public deleteWebhook(param: WebhookControllerApiDeleteWebhookRequest, options?: Configuration): Promise<void> {
        return this.api.deleteWebhook(param.inboxId, param.webhookId,  options).toPromise();
    }

    /**
     * Delete a webhook
     * @param param the request object
     */
    public deleteWebhookById(param: WebhookControllerApiDeleteWebhookByIdRequest, options?: Configuration): Promise<void> {
        return this.api.deleteWebhookById(param.webhookId,  options).toPromise();
    }

    /**
     * List account webhooks in paginated form. Allows for page index, page size, and sort direction.
     * List account webhooks Paginated
     * @param param the request object
     */
    public getAllAccountWebhooks(param: WebhookControllerApiGetAllAccountWebhooksRequest, options?: Configuration): Promise<PageWebhookProjection> {
        return this.api.getAllAccountWebhooks(param.page, param.size, param.sort, param.eventType, param.since, param.before,  options).toPromise();
    }

    /**
     * Get results for all webhooks
     * @param param the request object
     */
    public getAllWebhookResults(param: WebhookControllerApiGetAllWebhookResultsRequest, options?: Configuration): Promise<PageWebhookResult> {
        return this.api.getAllWebhookResults(param.page, param.size, param.sort, param.searchFilter, param.since, param.before, param.unseenOnly,  options).toPromise();
    }

    /**
     * List webhooks in paginated form. Allows for page index, page size, and sort direction.
     * List Webhooks Paginated
     * @param param the request object
     */
    public getAllWebhooks(param: WebhookControllerApiGetAllWebhooksRequest, options?: Configuration): Promise<PageWebhookProjection> {
        return this.api.getAllWebhooks(param.page, param.size, param.sort, param.searchFilter, param.since, param.inboxId, param.phoneId, param.before,  options).toPromise();
    }

    /**
     * Get paginated webhooks for an Inbox
     * @param param the request object
     */
    public getInboxWebhooksPaginated(param: WebhookControllerApiGetInboxWebhooksPaginatedRequest, options?: Configuration): Promise<PageWebhookProjection> {
        return this.api.getInboxWebhooksPaginated(param.inboxId, param.page, param.size, param.sort, param.searchFilter, param.since, param.before,  options).toPromise();
    }

    /**
     * Get JSON Schema definition for webhook payload by event
     * @param param the request object
     */
    public getJsonSchemaForWebhookEvent(param: WebhookControllerApiGetJsonSchemaForWebhookEventRequest, options?: Configuration): Promise<JSONSchemaDto> {
        return this.api.getJsonSchemaForWebhookEvent(param.event,  options).toPromise();
    }

    /**
     * Get JSON Schema definition for webhook payload
     * @param param the request object
     */
    public getJsonSchemaForWebhookPayload(param: WebhookControllerApiGetJsonSchemaForWebhookPayloadRequest, options?: Configuration): Promise<JSONSchemaDto> {
        return this.api.getJsonSchemaForWebhookPayload(param.webhookId,  options).toPromise();
    }

    /**
     * Get paginated webhooks for a phone number
     * @param param the request object
     */
    public getPhoneNumberWebhooksPaginated(param: WebhookControllerApiGetPhoneNumberWebhooksPaginatedRequest, options?: Configuration): Promise<PageWebhookProjection> {
        return this.api.getPhoneNumberWebhooksPaginated(param.phoneId, param.page, param.size, param.sort, param.since, param.before,  options).toPromise();
    }

    /**
     * Get test webhook payload example. Response content depends on eventName passed. Uses `EMAIL_RECEIVED` as default.
     * @param param the request object
     */
    public getTestWebhookPayload(param: WebhookControllerApiGetTestWebhookPayloadRequest, options?: Configuration): Promise<AbstractWebhookPayload> {
        return this.api.getTestWebhookPayload(param.eventName,  options).toPromise();
    }

    /**
     * Get webhook test payload for bounce
     * @param param the request object
     */
    public getTestWebhookPayloadBounce(param: WebhookControllerApiGetTestWebhookPayloadBounceRequest, options?: Configuration): Promise<WebhookBouncePayload> {
        return this.api.getTestWebhookPayloadBounce( options).toPromise();
    }

    /**
     * Get webhook test payload for bounce recipient
     * @param param the request object
     */
    public getTestWebhookPayloadBounceRecipient(param: WebhookControllerApiGetTestWebhookPayloadBounceRecipientRequest, options?: Configuration): Promise<WebhookBounceRecipientPayload> {
        return this.api.getTestWebhookPayloadBounceRecipient( options).toPromise();
    }

    /**
     * Get webhook test payload for delivery status event
     * @param param the request object
     */
    public getTestWebhookPayloadDeliveryStatus(param: WebhookControllerApiGetTestWebhookPayloadDeliveryStatusRequest, options?: Configuration): Promise<WebhookDeliveryStatusPayload> {
        return this.api.getTestWebhookPayloadDeliveryStatus( options).toPromise();
    }

    /**
     * Get webhook test payload for email opened event
     * @param param the request object
     */
    public getTestWebhookPayloadEmailOpened(param: WebhookControllerApiGetTestWebhookPayloadEmailOpenedRequest, options?: Configuration): Promise<WebhookEmailOpenedPayload> {
        return this.api.getTestWebhookPayloadEmailOpened( options).toPromise();
    }

    /**
     * Get webhook test payload for email opened event
     * @param param the request object
     */
    public getTestWebhookPayloadEmailRead(param: WebhookControllerApiGetTestWebhookPayloadEmailReadRequest, options?: Configuration): Promise<WebhookEmailReadPayload> {
        return this.api.getTestWebhookPayloadEmailRead( options).toPromise();
    }

    /**
     * Get example payload for webhook
     * @param param the request object
     */
    public getTestWebhookPayloadForWebhook(param: WebhookControllerApiGetTestWebhookPayloadForWebhookRequest, options?: Configuration): Promise<AbstractWebhookPayload> {
        return this.api.getTestWebhookPayloadForWebhook(param.webhookId,  options).toPromise();
    }

    /**
     * Get webhook test payload for new attachment event
     * @param param the request object
     */
    public getTestWebhookPayloadNewAttachment(param: WebhookControllerApiGetTestWebhookPayloadNewAttachmentRequest, options?: Configuration): Promise<WebhookNewAttachmentPayload> {
        return this.api.getTestWebhookPayloadNewAttachment( options).toPromise();
    }

    /**
     * Get webhook test payload for new contact event
     * @param param the request object
     */
    public getTestWebhookPayloadNewContact(param: WebhookControllerApiGetTestWebhookPayloadNewContactRequest, options?: Configuration): Promise<WebhookNewContactPayload> {
        return this.api.getTestWebhookPayloadNewContact( options).toPromise();
    }

    /**
     * Get webhook test payload for new email event
     * @param param the request object
     */
    public getTestWebhookPayloadNewEmail(param: WebhookControllerApiGetTestWebhookPayloadNewEmailRequest, options?: Configuration): Promise<WebhookNewEmailPayload> {
        return this.api.getTestWebhookPayloadNewEmail( options).toPromise();
    }

    /**
     * Get webhook test payload for new sms event
     * @param param the request object
     */
    public getTestWebhookPayloadNewSms(param: WebhookControllerApiGetTestWebhookPayloadNewSmsRequest, options?: Configuration): Promise<WebhookNewSmsPayload> {
        return this.api.getTestWebhookPayloadNewSms( options).toPromise();
    }

    /**
     * Get a webhook
     * @param param the request object
     */
    public getWebhook(param: WebhookControllerApiGetWebhookRequest, options?: Configuration): Promise<WebhookDto> {
        return this.api.getWebhook(param.webhookId,  options).toPromise();
    }

    /**
     * Get a webhook result for a webhook
     * @param param the request object
     */
    public getWebhookResult(param: WebhookControllerApiGetWebhookResultRequest, options?: Configuration): Promise<WebhookResultDto> {
        return this.api.getWebhookResult(param.webhookResultId,  options).toPromise();
    }

    /**
     * Get a webhook results for a webhook
     * @param param the request object
     */
    public getWebhookResults(param: WebhookControllerApiGetWebhookResultsRequest, options?: Configuration): Promise<PageWebhookResult> {
        return this.api.getWebhookResults(param.webhookId, param.page, param.size, param.sort, param.searchFilter, param.since, param.before, param.unseenOnly,  options).toPromise();
    }

    /**
     * Get count of unseen webhook results with error status
     * @param param the request object
     */
    public getWebhookResultsUnseenErrorCount(param: WebhookControllerApiGetWebhookResultsUnseenErrorCountRequest, options?: Configuration): Promise<UnseenErrorCountDto> {
        return this.api.getWebhookResultsUnseenErrorCount( options).toPromise();
    }

    /**
     * Get all webhooks for an Inbox
     * @param param the request object
     */
    public getWebhooks(param: WebhookControllerApiGetWebhooksRequest, options?: Configuration): Promise<Array<WebhookDto>> {
        return this.api.getWebhooks(param.inboxId,  options).toPromise();
    }

    /**
     * Allows you to resend a webhook payload that was already sent. Webhooks that fail are retried automatically for 24 hours and then put in a dead letter queue. You can retry results manually using this method.
     * Get a webhook result and try to resend the original webhook payload
     * @param param the request object
     */
    public redriveWebhookResult(param: WebhookControllerApiRedriveWebhookResultRequest, options?: Configuration): Promise<WebhookRedriveResult> {
        return this.api.redriveWebhookResult(param.webhookResultId,  options).toPromise();
    }

    /**
     * Send webhook test data
     * @param param the request object
     */
    public sendTestData(param: WebhookControllerApiSendTestDataRequest, options?: Configuration): Promise<WebhookTestResult> {
        return this.api.sendTestData(param.webhookId,  options).toPromise();
    }

    /**
     * Update a webhook request headers
     * @param param the request object
     */
    public updateWebhookHeaders(param: WebhookControllerApiUpdateWebhookHeadersRequest, options?: Configuration): Promise<WebhookDto> {
        return this.api.updateWebhookHeaders(param.webhookId, param.webhookHeaders,  options).toPromise();
    }

    /**
     * Verify a webhook payload using the messageId and signature. This allows you to be sure that MailSlurp sent the payload and not another server.
     * Verify a webhook payload signature
     * @param param the request object
     */
    public verifyWebhookSignature(param: WebhookControllerApiVerifyWebhookSignatureRequest, options?: Configuration): Promise<VerifyWebhookSignatureResults> {
        return this.api.verifyWebhookSignature(param.verifyWebhookSignatureOptions,  options).toPromise();
    }

}
