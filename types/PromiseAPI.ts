import { ResponseContext, RequestContext, HttpFile } from '../http/http.ts';
import * as models from '../models/all.ts';
import { Configuration} from '../configuration.ts'

import { AbstractWebhookPayload } from '../models/AbstractWebhookPayload.ts';
import { AccountBounceBlockDto } from '../models/AccountBounceBlockDto.ts';
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
import { CanSendEmailResults } from '../models/CanSendEmailResults.ts';
import { CheckEmailBodyFeatureSupportResults } from '../models/CheckEmailBodyFeatureSupportResults.ts';
import { CheckEmailBodyResults } from '../models/CheckEmailBodyResults.ts';
import { CheckEmailClientSupportOptions } from '../models/CheckEmailClientSupportOptions.ts';
import { CheckEmailClientSupportResults } from '../models/CheckEmailClientSupportResults.ts';
import { CheckEmailFeaturesClientSupportOptions } from '../models/CheckEmailFeaturesClientSupportOptions.ts';
import { CheckEmailFeaturesClientSupportResults } from '../models/CheckEmailFeaturesClientSupportResults.ts';
import { Complaint } from '../models/Complaint.ts';
import { ConditionOption } from '../models/ConditionOption.ts';
import { ConnectorDto } from '../models/ConnectorDto.ts';
import { ConnectorImapConnectionDto } from '../models/ConnectorImapConnectionDto.ts';
import { ConnectorProjection } from '../models/ConnectorProjection.ts';
import { ConnectorSmtpConnectionDto } from '../models/ConnectorSmtpConnectionDto.ts';
import { ConnectorSyncEventDto } from '../models/ConnectorSyncEventDto.ts';
import { ConnectorSyncEventProjection } from '../models/ConnectorSyncEventProjection.ts';
import { ConnectorSyncRequestResult } from '../models/ConnectorSyncRequestResult.ts';
import { ConnectorSyncRequestResultException } from '../models/ConnectorSyncRequestResultException.ts';
import { ConnectorSyncRequestResultExceptionCause } from '../models/ConnectorSyncRequestResultExceptionCause.ts';
import { ConnectorSyncRequestResultExceptionCauseStackTrace } from '../models/ConnectorSyncRequestResultExceptionCauseStackTrace.ts';
import { ConnectorSyncResult } from '../models/ConnectorSyncResult.ts';
import { ContactDto } from '../models/ContactDto.ts';
import { ContactProjection } from '../models/ContactProjection.ts';
import { ContentMatchOptions } from '../models/ContentMatchOptions.ts';
import { CountDto } from '../models/CountDto.ts';
import { CreateAliasOptions } from '../models/CreateAliasOptions.ts';
import { CreateConnectorImapConnectionOptions } from '../models/CreateConnectorImapConnectionOptions.ts';
import { CreateConnectorOptions } from '../models/CreateConnectorOptions.ts';
import { CreateConnectorSmtpConnectionOptions } from '../models/CreateConnectorSmtpConnectionOptions.ts';
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
import { DNSLookupsOptions } from '../models/DNSLookupsOptions.ts';
import { DeliveryStatusDto } from '../models/DeliveryStatusDto.ts';
import { DescribeDomainOptions } from '../models/DescribeDomainOptions.ts';
import { DescribeMailServerDomainResult } from '../models/DescribeMailServerDomainResult.ts';
import { DomainDto } from '../models/DomainDto.ts';
import { DomainGroup } from '../models/DomainGroup.ts';
import { DomainGroupsDto } from '../models/DomainGroupsDto.ts';
import { DomainInformation } from '../models/DomainInformation.ts';
import { DomainIssuesDto } from '../models/DomainIssuesDto.ts';
import { DomainNameRecord } from '../models/DomainNameRecord.ts';
import { DomainPreview } from '../models/DomainPreview.ts';
import { DownloadAttachmentDto } from '../models/DownloadAttachmentDto.ts';
import { Email } from '../models/Email.ts';
import { EmailAnalysis } from '../models/EmailAnalysis.ts';
import { EmailContentMatchResult } from '../models/EmailContentMatchResult.ts';
import { EmailContentPartResult } from '../models/EmailContentPartResult.ts';
import { EmailFeatureCategoryName } from '../models/EmailFeatureCategoryName.ts';
import { EmailFeatureFamilyName } from '../models/EmailFeatureFamilyName.ts';
import { EmailFeatureFamilyStatistics } from '../models/EmailFeatureFamilyStatistics.ts';
import { EmailFeatureNames } from '../models/EmailFeatureNames.ts';
import { EmailFeatureOverview } from '../models/EmailFeatureOverview.ts';
import { EmailFeaturePlatformName } from '../models/EmailFeaturePlatformName.ts';
import { EmailFeaturePlatformStatistics } from '../models/EmailFeaturePlatformStatistics.ts';
import { EmailFeatureSupportFlags } from '../models/EmailFeatureSupportFlags.ts';
import { EmailFeatureSupportResult } from '../models/EmailFeatureSupportResult.ts';
import { EmailFeatureSupportStatusPercentage } from '../models/EmailFeatureSupportStatusPercentage.ts';
import { EmailFeatureVersionStatistics } from '../models/EmailFeatureVersionStatistics.ts';
import { EmailHtmlDto } from '../models/EmailHtmlDto.ts';
import { EmailLinksResult } from '../models/EmailLinksResult.ts';
import { EmailPreview } from '../models/EmailPreview.ts';
import { EmailPreviewUrls } from '../models/EmailPreviewUrls.ts';
import { EmailProjection } from '../models/EmailProjection.ts';
import { EmailRecipients } from '../models/EmailRecipients.ts';
import { EmailScreenshotResult } from '../models/EmailScreenshotResult.ts';
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
import { FakeEmailDto } from '../models/FakeEmailDto.ts';
import { FakeEmailPreview } from '../models/FakeEmailPreview.ts';
import { FakeEmailResult } from '../models/FakeEmailResult.ts';
import { FilterBouncedRecipientsOptions } from '../models/FilterBouncedRecipientsOptions.ts';
import { FilterBouncedRecipientsResult } from '../models/FilterBouncedRecipientsResult.ts';
import { FlushExpiredInboxesResult } from '../models/FlushExpiredInboxesResult.ts';
import { ForwardEmailOptions } from '../models/ForwardEmailOptions.ts';
import { GenerateBimiRecordOptions } from '../models/GenerateBimiRecordOptions.ts';
import { GenerateBimiRecordResults } from '../models/GenerateBimiRecordResults.ts';
import { GenerateDmarcRecordOptions } from '../models/GenerateDmarcRecordOptions.ts';
import { GenerateDmarcRecordResults } from '../models/GenerateDmarcRecordResults.ts';
import { GenerateMtaStsRecordOptions } from '../models/GenerateMtaStsRecordOptions.ts';
import { GenerateMtaStsRecordResults } from '../models/GenerateMtaStsRecordResults.ts';
import { GenerateTlsReportingRecordOptions } from '../models/GenerateTlsReportingRecordOptions.ts';
import { GenerateTlsReportingRecordResults } from '../models/GenerateTlsReportingRecordResults.ts';
import { GetEmailScreenshotOptions } from '../models/GetEmailScreenshotOptions.ts';
import { GravatarUrl } from '../models/GravatarUrl.ts';
import { GroupContactsDto } from '../models/GroupContactsDto.ts';
import { GroupDto } from '../models/GroupDto.ts';
import { GroupProjection } from '../models/GroupProjection.ts';
import { HTMLValidationResult } from '../models/HTMLValidationResult.ts';
import { IPAddressResult } from '../models/IPAddressResult.ts';
import { ImageIssue } from '../models/ImageIssue.ts';
import { ImapAccessDetails } from '../models/ImapAccessDetails.ts';
import { ImapEmailProjection } from '../models/ImapEmailProjection.ts';
import { ImapFlagOperationOptions } from '../models/ImapFlagOperationOptions.ts';
import { ImapMailboxStatus } from '../models/ImapMailboxStatus.ts';
import { ImapServerFetchItem } from '../models/ImapServerFetchItem.ts';
import { ImapServerFetchResult } from '../models/ImapServerFetchResult.ts';
import { ImapServerGetResult } from '../models/ImapServerGetResult.ts';
import { ImapServerListOptions } from '../models/ImapServerListOptions.ts';
import { ImapServerListResult } from '../models/ImapServerListResult.ts';
import { ImapServerSearchOptions } from '../models/ImapServerSearchOptions.ts';
import { ImapServerSearchResult } from '../models/ImapServerSearchResult.ts';
import { ImapServerStatusOptions } from '../models/ImapServerStatusOptions.ts';
import { ImapServerStatusResult } from '../models/ImapServerStatusResult.ts';
import { ImapSmtpAccessDetails } from '../models/ImapSmtpAccessDetails.ts';
import { ImapUpdateFlagsOptions } from '../models/ImapUpdateFlagsOptions.ts';
import { InboxByEmailAddressResult } from '../models/InboxByEmailAddressResult.ts';
import { InboxByNameResult } from '../models/InboxByNameResult.ts';
import { InboxDto } from '../models/InboxDto.ts';
import { InboxExistsDto } from '../models/InboxExistsDto.ts';
import { InboxForwarderDto } from '../models/InboxForwarderDto.ts';
import { InboxForwarderEventDto } from '../models/InboxForwarderEventDto.ts';
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
import { JSONSchemaDto } from '../models/JSONSchemaDto.ts';
import { LinkIssue } from '../models/LinkIssue.ts';
import { ListUnsubscribeRecipientProjection } from '../models/ListUnsubscribeRecipientProjection.ts';
import { LookupBimiDomainOptions } from '../models/LookupBimiDomainOptions.ts';
import { LookupBimiDomainResults } from '../models/LookupBimiDomainResults.ts';
import { LookupDmarcDomainOptions } from '../models/LookupDmarcDomainOptions.ts';
import { LookupDmarcDomainResults } from '../models/LookupDmarcDomainResults.ts';
import { LookupMtaStsDomainOptions } from '../models/LookupMtaStsDomainOptions.ts';
import { LookupMtaStsDomainResults } from '../models/LookupMtaStsDomainResults.ts';
import { LookupTlsReportingDomainOptions } from '../models/LookupTlsReportingDomainOptions.ts';
import { LookupTlsReportingDomainResults } from '../models/LookupTlsReportingDomainResults.ts';
import { MatchOption } from '../models/MatchOption.ts';
import { MatchOptions } from '../models/MatchOptions.ts';
import { MissedEmailDto } from '../models/MissedEmailDto.ts';
import { MissedEmailProjection } from '../models/MissedEmailProjection.ts';
import { NameServerRecord } from '../models/NameServerRecord.ts';
import { NewFakeEmailAddressResult } from '../models/NewFakeEmailAddressResult.ts';
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
import { ReplyForSms } from '../models/ReplyForSms.ts';
import { ReplyToAliasEmailOptions } from '../models/ReplyToAliasEmailOptions.ts';
import { ReplyToEmailOptions } from '../models/ReplyToEmailOptions.ts';
import { ScheduledJob } from '../models/ScheduledJob.ts';
import { ScheduledJobDto } from '../models/ScheduledJobDto.ts';
import { SearchEmailsOptions } from '../models/SearchEmailsOptions.ts';
import { SearchInboxesOptions } from '../models/SearchInboxesOptions.ts';
import { SendEmailBodyPart } from '../models/SendEmailBodyPart.ts';
import { SendEmailOptions } from '../models/SendEmailOptions.ts';
import { SendSMTPEnvelopeOptions } from '../models/SendSMTPEnvelopeOptions.ts';
import { SendWithQueueResult } from '../models/SendWithQueueResult.ts';
import { Sender } from '../models/Sender.ts';
import { SentEmailDto } from '../models/SentEmailDto.ts';
import { SentEmailProjection } from '../models/SentEmailProjection.ts';
import { SentSmsDto } from '../models/SentSmsDto.ts';
import { SetInboxFavouritedOptions } from '../models/SetInboxFavouritedOptions.ts';
import { SimpleSendEmailOptions } from '../models/SimpleSendEmailOptions.ts';
import { SmsDto } from '../models/SmsDto.ts';
import { SmsMatchOption } from '../models/SmsMatchOption.ts';
import { SmsPreview } from '../models/SmsPreview.ts';
import { SmsProjection } from '../models/SmsProjection.ts';
import { SmsReplyOptions } from '../models/SmsReplyOptions.ts';
import { SmtpAccessDetails } from '../models/SmtpAccessDetails.ts';
import { SortObject } from '../models/SortObject.ts';
import { SpellingIssue } from '../models/SpellingIssue.ts';
import { TemplateDto } from '../models/TemplateDto.ts';
import { TemplatePreview } from '../models/TemplatePreview.ts';
import { TemplateProjection } from '../models/TemplateProjection.ts';
import { TemplateVariable } from '../models/TemplateVariable.ts';
import { TestInboxRulesetReceivingOptions } from '../models/TestInboxRulesetReceivingOptions.ts';
import { TestInboxRulesetReceivingResult } from '../models/TestInboxRulesetReceivingResult.ts';
import { TestInboxRulesetSendingOptions } from '../models/TestInboxRulesetSendingOptions.ts';
import { TestInboxRulesetSendingResult } from '../models/TestInboxRulesetSendingResult.ts';
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
import { WebhookRedriveAllResult } from '../models/WebhookRedriveAllResult.ts';
import { WebhookRedriveResult } from '../models/WebhookRedriveResult.ts';
import { WebhookResultDto } from '../models/WebhookResultDto.ts';
import { WebhookTestRequest } from '../models/WebhookTestRequest.ts';
import { WebhookTestResponse } from '../models/WebhookTestResponse.ts';
import { WebhookTestResult } from '../models/WebhookTestResult.ts';
import { ObservableAliasControllerApi } from './ObservableAPI.ts';

import { AliasControllerApiRequestFactory, AliasControllerApiResponseProcessor} from "../apis/AliasControllerApi.ts";
export class PromiseAliasControllerApi {
    private api: ObservableAliasControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AliasControllerApiRequestFactory,
        responseProcessor?: AliasControllerApiResponseProcessor
    ) {
        this.api = new ObservableAliasControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Email aliases use a MailSlurp randomly generated email address (or a custom domain inbox that you provide) to mask or proxy a real email address. Emails sent to the alias address will be forwarded to the hidden email address it was created for. If you want to send a reply use the threadId attached
     * Create an email alias. Must be verified by clicking link inside verification email that will be sent to the address. Once verified the alias will be active.
     * @param createAliasOptions 
     */
    public createAlias(createAliasOptions: CreateAliasOptions, options?: Configuration): Promise<AliasDto> {
        const result = this.api.createAlias(createAliasOptions, options);
        return result.toPromise();
    }

    /**
     * Delete an email alias
     * @param aliasId 
     */
    public deleteAlias(aliasId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteAlias(aliasId, options);
        return result.toPromise();
    }

    /**
     * Get an email alias by ID
     * Get an email alias
     * @param aliasId 
     */
    public getAlias(aliasId: string, options?: Configuration): Promise<AliasDto> {
        const result = this.api.getAlias(aliasId, options);
        return result.toPromise();
    }

    /**
     * Get paginated emails for an alias by ID
     * Get emails for an alias
     * @param aliasId 
     * @param page Optional page index alias email list pagination
     * @param size Optional page size alias email list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Optional filter by sent after given date time
     * @param before Optional filter by sent before given date time
     */
    public getAliasEmails(aliasId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageEmailProjection> {
        const result = this.api.getAliasEmails(aliasId, page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Returns threads created for an email alias in paginated form
     * Get threads created for an alias
     * @param aliasId 
     * @param page Optional page index in thread list pagination
     * @param size Optional page size in thread list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Optional filter by sent after given date time
     * @param before Optional filter by sent before given date time
     */
    public getAliasThreads(aliasId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageThreadProjection> {
        const result = this.api.getAliasThreads(aliasId, page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Get all email aliases in paginated form
     * Get all email aliases you have created
     * @param search Optional search term
     * @param page Optional page index in alias list pagination
     * @param size Optional page size in alias list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getAliases(search?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageAlias> {
        const result = this.api.getAliases(search, page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Return a thread associated with an alias
     * Get a thread
     * @param threadId 
     */
    public getThread(threadId: string, options?: Configuration): Promise<ThreadProjection> {
        const result = this.api.getThread(threadId, options);
        return result.toPromise();
    }

    /**
     * Returns threads created for all aliases in paginated form
     * Get all threads
     * @param page Optional page index in thread list pagination
     * @param size Optional page size in thread list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Optional filter by sent after given date time
     * @param before Optional filter by sent before given date time
     */
    public getThreadsPaginated(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageThreadProjection> {
        const result = this.api.getThreadsPaginated(page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Send the reply to the email sender or reply-to and include same subject cc bcc etc. Reply to an email and the contents will be sent with the existing subject to the emails `to`, `cc`, and `bcc`.
     * Reply to an email
     * @param aliasId ID of the alias that email belongs to
     * @param emailId ID of the email that should be replied to
     * @param replyToAliasEmailOptions 
     */
    public replyToAliasEmail(aliasId: string, emailId: string, replyToAliasEmailOptions: ReplyToAliasEmailOptions, options?: Configuration): Promise<SentEmailDto> {
        const result = this.api.replyToAliasEmail(aliasId, emailId, replyToAliasEmailOptions, options);
        return result.toPromise();
    }

    /**
     * Send an email from an alias. Replies to the email will be forwarded to the alias masked email address
     * Send an email from an alias inbox
     * @param aliasId 
     * @param sendEmailOptions 
     */
    public sendAliasEmail(aliasId: string, sendEmailOptions: SendEmailOptions, options?: Configuration): Promise<SentEmailDto> {
        const result = this.api.sendAliasEmail(aliasId, sendEmailOptions, options);
        return result.toPromise();
    }

    /**
     * Update an email alias
     * @param aliasId 
     * @param updateAliasOptions 
     */
    public updateAlias(aliasId: string, updateAliasOptions: UpdateAliasOptions, options?: Configuration): Promise<AliasDto> {
        const result = this.api.updateAlias(aliasId, updateAliasOptions, options);
        return result.toPromise();
    }


}



import { ObservableAttachmentControllerApi } from './ObservableAPI.ts';

import { AttachmentControllerApiRequestFactory, AttachmentControllerApiResponseProcessor} from "../apis/AttachmentControllerApi.ts";
export class PromiseAttachmentControllerApi {
    private api: ObservableAttachmentControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AttachmentControllerApiRequestFactory,
        responseProcessor?: AttachmentControllerApiResponseProcessor
    ) {
        this.api = new ObservableAttachmentControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete all attachments
     */
    public deleteAllAttachments(options?: Configuration): Promise<void> {
        const result = this.api.deleteAllAttachments(options);
        return result.toPromise();
    }

    /**
     * Delete an attachment
     * @param attachmentId ID of attachment
     */
    public deleteAttachment(attachmentId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteAttachment(attachmentId, options);
        return result.toPromise();
    }

    /**
     * Returns the specified attachment for a given email as a base 64 encoded string. The response type is application/json. This method is similar to the `downloadAttachment` method but allows some clients to get around issues with binary responses.
     * Get email attachment as base64 encoded string as alternative to binary responses. To read the content decode the Base64 encoded contents.
     * @param attachmentId ID of attachment
     */
    public downloadAttachmentAsBase64Encoded(attachmentId: string, options?: Configuration): Promise<DownloadAttachmentDto> {
        const result = this.api.downloadAttachmentAsBase64Encoded(attachmentId, options);
        return result.toPromise();
    }

    /**
     * Returns the specified attachment for a given email as a stream / array of bytes. You can find attachment ids in email responses endpoint responses. The response type is application/octet-stream.
     * Download attachments. Get email attachment bytes. If you have trouble with byte responses try the `downloadAttachmentBase64` response endpoints.
     * @param attachmentId ID of attachment
     */
    public downloadAttachmentAsBytes(attachmentId: string, options?: Configuration): Promise<void> {
        const result = this.api.downloadAttachmentAsBytes(attachmentId, options);
        return result.toPromise();
    }

    /**
     * Get an attachment entity
     * @param attachmentId ID of attachment
     */
    public getAttachment(attachmentId: string, options?: Configuration): Promise<AttachmentEntity> {
        const result = this.api.getAttachment(attachmentId, options);
        return result.toPromise();
    }

    /**
     * Returns the metadata for an attachment. It is saved separately to the content of the attachment. Contains properties `name` and `content-type` and `content-length` in bytes for a given attachment.
     * Get email attachment metadata information
     * @param attachmentId ID of attachment
     */
    public getAttachmentInfo(attachmentId: string, options?: Configuration): Promise<AttachmentMetaData> {
        const result = this.api.getAttachmentInfo(attachmentId, options);
        return result.toPromise();
    }

    /**
     * Get all attachments in paginated response. Each entity contains meta data for the attachment such as `name` and `content-type`. Use the `attachmentId` and the download endpoints to get the file contents.
     * Get email attachments
     * @param page Optional page index for list pagination
     * @param size Optional page size for list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param fileNameFilter Optional file name and content type search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param inboxId Optional inboxId to filter attachments by
     */
    public getAttachments(page?: number, size?: number, sort?: 'ASC' | 'DESC', fileNameFilter?: string, since?: Date, before?: Date, inboxId?: string, options?: Configuration): Promise<PageAttachmentEntity> {
        const result = this.api.getAttachments(page, size, sort, fileNameFilter, since, before, inboxId, options);
        return result.toPromise();
    }

    /**
     * Upload an attachment for sending using base64 file encoding. Returns an array whose first element is the ID of the uploaded attachment.
     * @param uploadAttachmentOptions 
     */
    public uploadAttachment(uploadAttachmentOptions: UploadAttachmentOptions, options?: Configuration): Promise<Array<string>> {
        const result = this.api.uploadAttachment(uploadAttachmentOptions, options);
        return result.toPromise();
    }

    /**
     * Upload an attachment for sending using file byte stream input octet stream. Returns an array whose first element is the ID of the uploaded attachment.
     * @param contentType 
     * @param contentType2 Optional contentType for file. For instance &#x60;application/pdf&#x60;
     * @param contentId Optional content ID (CID) to save upload with
     * @param filename Optional filename to save upload with
     * @param filename2 
     */
    public uploadAttachmentBytes(contentType?: string, contentType2?: string, contentId?: string, filename?: string, filename2?: string, options?: Configuration): Promise<Array<string>> {
        const result = this.api.uploadAttachmentBytes(contentType, contentType2, contentId, filename, filename2, options);
        return result.toPromise();
    }

    /**
     * Upload an attachment for sending using a Multipart Form request. Returns an array whose first element is the ID of the uploaded attachment.
     * @param contentId Optional content ID of attachment
     * @param contentType Optional content type of attachment
     * @param filename Optional name of file
     * @param xFilename Optional content type header of attachment
     * @param inlineObject 
     */
    public uploadMultipartForm(contentId?: string, contentType?: string, filename?: string, xFilename?: string, inlineObject?: InlineObject, options?: Configuration): Promise<Array<string>> {
        const result = this.api.uploadMultipartForm(contentId, contentType, filename, xFilename, inlineObject, options);
        return result.toPromise();
    }


}



import { ObservableBounceControllerApi } from './ObservableAPI.ts';

import { BounceControllerApiRequestFactory, BounceControllerApiResponseProcessor} from "../apis/BounceControllerApi.ts";
export class PromiseBounceControllerApi {
    private api: ObservableBounceControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BounceControllerApiRequestFactory,
        responseProcessor?: BounceControllerApiResponseProcessor
    ) {
        this.api = new ObservableBounceControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Prevent email sending errors by remove recipients who have resulted in past email bounces or complaints
     * Filter a list of email recipients and remove those who have bounced
     * @param filterBouncedRecipientsOptions 
     */
    public filterBouncedRecipient(filterBouncedRecipientsOptions: FilterBouncedRecipientsOptions, options?: Configuration): Promise<FilterBouncedRecipientsResult> {
        const result = this.api.filterBouncedRecipient(filterBouncedRecipientsOptions, options);
        return result.toPromise();
    }

    /**
     * Check if account block status prevents sending
     * Can account send email
     */
    public getAccountBounceBlockStatus(options?: Configuration): Promise<AccountBounceBlockDto> {
        const result = this.api.getAccountBounceBlockStatus(options);
        return result.toPromise();
    }

    /**
     * Bounced emails are email you have sent that were rejected by a recipient
     * Get a bounced email.
     * @param id ID of the bounced email to fetch
     */
    public getBouncedEmail(id: string, options?: Configuration): Promise<BouncedEmailDto> {
        const result = this.api.getBouncedEmail(id, options);
        return result.toPromise();
    }

    /**
     * Bounced emails are email you have sent that were rejected by a recipient
     * Get paginated list of bounced emails.
     * @param page Optional page index
     * @param size Optional page size 
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getBouncedEmails(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageBouncedEmail> {
        const result = this.api.getBouncedEmails(page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Bounced emails are email you have sent that were rejected by a recipient
     * Get a bounced email.
     * @param id ID of the bounced recipient
     */
    public getBouncedRecipient(id: string, options?: Configuration): Promise<BouncedRecipientDto> {
        const result = this.api.getBouncedRecipient(id, options);
        return result.toPromise();
    }

    /**
     * Bounced recipients are email addresses that you have sent emails to that did not accept the sent email. Once a recipient is bounced you cannot send emails to that address.
     * Get paginated list of bounced recipients.
     * @param page Optional page index 
     * @param size Optional page size 
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getBouncedRecipients(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageBouncedRecipients> {
        const result = this.api.getBouncedRecipients(page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Get complaint
     * Get complaint
     * @param id ID of the complaint
     */
    public getComplaint(id: string, options?: Configuration): Promise<Complaint> {
        const result = this.api.getComplaint(id, options);
        return result.toPromise();
    }

    /**
     * SMTP complaints made against your account
     * Get paginated list of complaints.
     * @param page Optional page index 
     * @param size Optional page size 
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getComplaints(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageComplaint> {
        const result = this.api.getComplaints(page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Unsubscribed recipient have unsubscribed from a mailing list for a user or domain and cannot be contacted again.
     * Get paginated list of unsubscribed recipients.
     * @param page Optional page index
     * @param size Optional page size 
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param domainId Filter by domainId
     */
    public getListUnsubscribeRecipients(page?: number, size?: number, sort?: 'ASC' | 'DESC', domainId?: string, options?: Configuration): Promise<PageListUnsubscribeRecipients> {
        const result = this.api.getListUnsubscribeRecipients(page, size, sort, domainId, options);
        return result.toPromise();
    }


}



import { ObservableBulkActionsControllerApi } from './ObservableAPI.ts';

import { BulkActionsControllerApiRequestFactory, BulkActionsControllerApiResponseProcessor} from "../apis/BulkActionsControllerApi.ts";
export class PromiseBulkActionsControllerApi {
    private api: ObservableBulkActionsControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BulkActionsControllerApiRequestFactory,
        responseProcessor?: BulkActionsControllerApiResponseProcessor
    ) {
        this.api = new ObservableBulkActionsControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Bulk create Inboxes (email addresses)
     * @param count Number of inboxes to be created in bulk
     */
    public bulkCreateInboxes(count: number, options?: Configuration): Promise<Array<InboxDto>> {
        const result = this.api.bulkCreateInboxes(count, options);
        return result.toPromise();
    }

    /**
     * Bulk Delete Inboxes
     * @param requestBody 
     */
    public bulkDeleteInboxes(requestBody: Array<string>, options?: Configuration): Promise<void> {
        const result = this.api.bulkDeleteInboxes(requestBody, options);
        return result.toPromise();
    }

    /**
     * Bulk Send Emails
     * @param bulkSendEmailOptions 
     */
    public bulkSendEmails(bulkSendEmailOptions: BulkSendEmailOptions, options?: Configuration): Promise<void> {
        const result = this.api.bulkSendEmails(bulkSendEmailOptions, options);
        return result.toPromise();
    }


}



import { ObservableCommonActionsControllerApi } from './ObservableAPI.ts';

import { CommonActionsControllerApiRequestFactory, CommonActionsControllerApiResponseProcessor} from "../apis/CommonActionsControllerApi.ts";
export class PromiseCommonActionsControllerApi {
    private api: ObservableCommonActionsControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CommonActionsControllerApiRequestFactory,
        responseProcessor?: CommonActionsControllerApiResponseProcessor
    ) {
        this.api = new ObservableCommonActionsControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns an Inbox with an `id` and an `emailAddress`
     * Create new random inbox
     * @param allowTeamAccess 
     * @param useDomainPool 
     * @param expiresAt 
     * @param expiresIn 
     * @param emailAddress 
     * @param inboxType 
     * @param description 
     * @param name 
     * @param tags 
     * @param favourite 
     * @param virtualInbox 
     * @param useShortAddress 
     * @param domainName 
     * @param domainId 
     * @param prefix 
     */
    public createNewEmailAddress(allowTeamAccess?: boolean, useDomainPool?: boolean, expiresAt?: Date, expiresIn?: number, emailAddress?: string, inboxType?: 'HTTP_INBOX' | 'SMTP_INBOX', description?: string, name?: string, tags?: Array<string>, favourite?: boolean, virtualInbox?: boolean, useShortAddress?: boolean, domainName?: string, domainId?: string, prefix?: string, options?: Configuration): Promise<InboxDto> {
        const result = this.api.createNewEmailAddress(allowTeamAccess, useDomainPool, expiresAt, expiresIn, emailAddress, inboxType, description, name, tags, favourite, virtualInbox, useShortAddress, domainName, domainId, prefix, options);
        return result.toPromise();
    }

    /**
     * Returns an Inbox with an `id` and an `emailAddress`
     * Create new random inbox
     * @param allowTeamAccess 
     * @param useDomainPool 
     * @param expiresAt 
     * @param expiresIn 
     * @param emailAddress 
     * @param inboxType 
     * @param description 
     * @param name 
     * @param tags 
     * @param favourite 
     * @param virtualInbox 
     * @param useShortAddress 
     * @param domainName 
     * @param domainId 
     * @param prefix 
     */
    public createRandomInbox(allowTeamAccess?: boolean, useDomainPool?: boolean, expiresAt?: Date, expiresIn?: number, emailAddress?: string, inboxType?: 'HTTP_INBOX' | 'SMTP_INBOX', description?: string, name?: string, tags?: Array<string>, favourite?: boolean, virtualInbox?: boolean, useShortAddress?: boolean, domainName?: string, domainId?: string, prefix?: string, options?: Configuration): Promise<InboxDto> {
        const result = this.api.createRandomInbox(allowTeamAccess, useDomainPool, expiresAt, expiresIn, emailAddress, inboxType, description, name, tags, favourite, virtualInbox, useShortAddress, domainName, domainId, prefix, options);
        return result.toPromise();
    }

    /**
     * Deletes inbox email address
     * Delete inbox email address by inbox id
     * @param inboxId 
     */
    public deleteEmailAddress(inboxId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteEmailAddress(inboxId, options);
        return result.toPromise();
    }

    /**
     * Deletes all emails
     * Delete all emails in an inbox
     * @param inboxId 
     */
    public emptyInbox(inboxId: string, options?: Configuration): Promise<void> {
        const result = this.api.emptyInbox(inboxId, options);
        return result.toPromise();
    }

    /**
     * If no senderId or inboxId provided a random email address will be used to send from. Ensure your parameters are URL encoded.
     * Send an email using query parameters
     * @param to Email address to send to
     * @param senderId ID of inbox to send from. If null an inbox will be created for sending
     * @param body Body of the email message. Supports HTML
     * @param subject Subject line of the email
     */
    public sendEmailQuery(to: string, senderId?: string, body?: string, subject?: string, options?: Configuration): Promise<void> {
        const result = this.api.sendEmailQuery(to, senderId, body, subject, options);
        return result.toPromise();
    }

    /**
     * If no senderId or inboxId provided a random email address will be used to send from.
     * Send an email
     * @param simpleSendEmailOptions 
     */
    public sendEmailSimple(simpleSendEmailOptions: SimpleSendEmailOptions, options?: Configuration): Promise<void> {
        const result = this.api.sendEmailSimple(simpleSendEmailOptions, options);
        return result.toPromise();
    }


}



import { ObservableConnectorControllerApi } from './ObservableAPI.ts';

import { ConnectorControllerApiRequestFactory, ConnectorControllerApiResponseProcessor} from "../apis/ConnectorControllerApi.ts";
export class PromiseConnectorControllerApi {
    private api: ObservableConnectorControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ConnectorControllerApiRequestFactory,
        responseProcessor?: ConnectorControllerApiResponseProcessor
    ) {
        this.api = new ObservableConnectorControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Sync emails between external mailboxes and MailSlurp inboxes
     * Create an inbox connector
     * @param createConnectorOptions 
     */
    public createConnector(createConnectorOptions: CreateConnectorOptions, options?: Configuration): Promise<ConnectorDto> {
        const result = this.api.createConnector(createConnectorOptions, options);
        return result.toPromise();
    }

    /**
     * Allows the reading of emails in an external mailbox and syncing to a MailSlurp inbox
     * Create an inbox connector IMAP connection
     * @param id 
     * @param createConnectorImapConnectionOptions 
     */
    public createConnectorImapConnection(id: string, createConnectorImapConnectionOptions: CreateConnectorImapConnectionOptions, options?: Configuration): Promise<ConnectorImapConnectionDto> {
        const result = this.api.createConnectorImapConnection(id, createConnectorImapConnectionOptions, options);
        return result.toPromise();
    }

    /**
     * Allows sending via connector and email is routed to connected inbox and sent via SMTP
     * Create an inbox connector SMTP connection
     * @param id 
     * @param createConnectorSmtpConnectionOptions 
     */
    public createConnectorSmtpConnection(id: string, createConnectorSmtpConnectionOptions: CreateConnectorSmtpConnectionOptions, options?: Configuration): Promise<ConnectorSmtpConnectionDto> {
        const result = this.api.createConnectorSmtpConnection(id, createConnectorSmtpConnectionOptions, options);
        return result.toPromise();
    }

    /**
     * Delete all inbox connectors
     */
    public deleteAllConnector(options?: Configuration): Promise<void> {
        const result = this.api.deleteAllConnector(options);
        return result.toPromise();
    }

    /**
     * Delete an inbox connector
     * @param id 
     */
    public deleteConnector(id: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteConnector(id, options);
        return result.toPromise();
    }

    /**
     * Delete IMAP connection for external inbox
     * Delete an inbox connector IMAP connection
     * @param id 
     */
    public deleteConnectorImapConnection(id: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteConnectorImapConnection(id, options);
        return result.toPromise();
    }

    /**
     * Delete SMTP connection for external inbox
     * Delete an inbox connector SMTP connection
     * @param id 
     */
    public deleteConnectorSmtpConnection(id: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteConnectorSmtpConnection(id, options);
        return result.toPromise();
    }

    /**
     * Get all inbox connector sync events
     * @param page Optional page index in connector list pagination
     * @param size Optional page size in connector list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getAllConnectorSyncEvents(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageConnectorSyncEvents> {
        const result = this.api.getAllConnectorSyncEvents(page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Get an inbox connector
     * @param id 
     */
    public getConnector(id: string, options?: Configuration): Promise<ConnectorDto> {
        const result = this.api.getConnector(id, options);
        return result.toPromise();
    }

    /**
     * Get an inbox connector sync event
     * @param id 
     */
    public getConnectorSyncEvent(id: string, options?: Configuration): Promise<ConnectorSyncEventDto> {
        const result = this.api.getConnectorSyncEvent(id, options);
        return result.toPromise();
    }

    /**
     * Get an inbox connector sync events
     * @param id 
     * @param page Optional page index in connector list pagination
     * @param size Optional page size in connector list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getConnectorSyncEvents(id: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageConnectorSyncEvents> {
        const result = this.api.getConnectorSyncEvents(id, page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * List inbox connectors that sync external emails to MailSlurp inboxes
     * Get inbox connectors
     * @param page Optional page index in connector list pagination
     * @param size Optional page size in connector list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getConnectors(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageConnector> {
        const result = this.api.getConnectors(page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Sync an inbox connector
     * @param id 
     */
    public syncConnector(id: string, options?: Configuration): Promise<ConnectorSyncRequestResult> {
        const result = this.api.syncConnector(id, options);
        return result.toPromise();
    }

    /**
     * Update an inbox connector
     * @param id 
     * @param createConnectorOptions 
     */
    public updateConnector(id: string, createConnectorOptions: CreateConnectorOptions, options?: Configuration): Promise<ConnectorDto> {
        const result = this.api.updateConnector(id, createConnectorOptions, options);
        return result.toPromise();
    }


}



import { ObservableContactControllerApi } from './ObservableAPI.ts';

import { ContactControllerApiRequestFactory, ContactControllerApiResponseProcessor} from "../apis/ContactControllerApi.ts";
export class PromiseContactControllerApi {
    private api: ObservableContactControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ContactControllerApiRequestFactory,
        responseProcessor?: ContactControllerApiResponseProcessor
    ) {
        this.api = new ObservableContactControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a contact
     * @param createContactOptions 
     */
    public createContact(createContactOptions: CreateContactOptions, options?: Configuration): Promise<ContactDto> {
        const result = this.api.createContact(createContactOptions, options);
        return result.toPromise();
    }

    /**
     * Delete contact
     * @param contactId 
     */
    public deleteContact(contactId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteContact(contactId, options);
        return result.toPromise();
    }

    /**
     * Get all contacts
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param search Search terms
     */
    public getAllContacts(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, search?: string, options?: Configuration): Promise<PageContactProjection> {
        const result = this.api.getAllContacts(page, size, sort, since, before, search, options);
        return result.toPromise();
    }

    /**
     * Get contact
     * @param contactId 
     */
    public getContact(contactId: string, options?: Configuration): Promise<ContactDto> {
        const result = this.api.getContact(contactId, options);
        return result.toPromise();
    }

    /**
     * Get contact vCard vcf file
     * @param contactId 
     */
    public getContactVCard(contactId: string, options?: Configuration): Promise<void> {
        const result = this.api.getContactVCard(contactId, options);
        return result.toPromise();
    }

    /**
     * Get all contacts
     */
    public getContacts(options?: Configuration): Promise<Array<ContactProjection>> {
        const result = this.api.getContacts(options);
        return result.toPromise();
    }


}



import { ObservableDomainControllerApi } from './ObservableAPI.ts';

import { DomainControllerApiRequestFactory, DomainControllerApiResponseProcessor} from "../apis/DomainControllerApi.ts";
export class PromiseDomainControllerApi {
    private api: ObservableDomainControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DomainControllerApiRequestFactory,
        responseProcessor?: DomainControllerApiResponseProcessor
    ) {
        this.api = new ObservableDomainControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a catch all inbox to a domain so that any emails sent to it that cannot be matched will be sent to the catch all inbox generated
     * Add catch all wild card inbox to domain
     * @param id 
     */
    public addDomainWildcardCatchAll(id: string, options?: Configuration): Promise<DomainDto> {
        const result = this.api.addDomainWildcardCatchAll(id, options);
        return result.toPromise();
    }

    /**
     * Link a domain that you own with MailSlurp so you can create email addresses using it. Endpoint returns DNS records used for validation. You must add these verification records to your host provider's DNS setup to verify the domain.
     * Create Domain
     * @param createDomainOptions 
     */
    public createDomain(createDomainOptions: CreateDomainOptions, options?: Configuration): Promise<DomainDto> {
        const result = this.api.createDomain(createDomainOptions, options);
        return result.toPromise();
    }

    /**
     * Delete a domain. This will disable any existing inboxes that use this domain.
     * Delete a domain
     * @param id 
     */
    public deleteDomain(id: string, options?: Configuration): Promise<Array<string>> {
        const result = this.api.deleteDomain(id, options);
        return result.toPromise();
    }

    /**
     * List all domains available for use with email address creation
     * Get all usable domains
     * @param inboxType 
     */
    public getAvailableDomains(inboxType?: 'HTTP_INBOX' | 'SMTP_INBOX', options?: Configuration): Promise<DomainGroupsDto> {
        const result = this.api.getAvailableDomains(inboxType, options);
        return result.toPromise();
    }

    /**
     * Returns domain verification status and tokens for a given domain
     * Get a domain
     * @param id 
     * @param checkForErrors 
     */
    public getDomain(id: string, checkForErrors?: boolean, options?: Configuration): Promise<DomainDto> {
        const result = this.api.getDomain(id, checkForErrors, options);
        return result.toPromise();
    }

    /**
     * List domain issues for domains you have created
     * Get domain issues
     */
    public getDomainIssues(options?: Configuration): Promise<DomainIssuesDto> {
        const result = this.api.getDomainIssues(options);
        return result.toPromise();
    }

    /**
     * Get the catch all inbox for a domain for missed emails
     * Get catch all wild card inbox for domain
     * @param id 
     */
    public getDomainWildcardCatchAllInbox(id: string, options?: Configuration): Promise<InboxDto> {
        const result = this.api.getDomainWildcardCatchAllInbox(id, options);
        return result.toPromise();
    }

    /**
     * List all custom domains you have created
     * Get domains
     */
    public getDomains(options?: Configuration): Promise<Array<DomainPreview>> {
        const result = this.api.getDomains(options);
        return result.toPromise();
    }

    /**
     * List all MailSlurp domains used with non-custom email addresses
     * Get MailSlurp domains
     * @param inboxType 
     */
    public getMailSlurpDomains(inboxType?: 'HTTP_INBOX' | 'SMTP_INBOX', options?: Configuration): Promise<DomainGroupsDto> {
        const result = this.api.getMailSlurpDomains(inboxType, options);
        return result.toPromise();
    }

    /**
     * Update values on a domain. Note you cannot change the domain name as it is immutable. Recreate the domain if you need to alter this.
     * Update a domain
     * @param id 
     * @param updateDomainOptions 
     */
    public updateDomain(id: string, updateDomainOptions: UpdateDomainOptions, options?: Configuration): Promise<DomainDto> {
        const result = this.api.updateDomain(id, updateDomainOptions, options);
        return result.toPromise();
    }


}



import { ObservableEmailControllerApi } from './ObservableAPI.ts';

import { EmailControllerApiRequestFactory, EmailControllerApiResponseProcessor} from "../apis/EmailControllerApi.ts";
export class PromiseEmailControllerApi {
    private api: ObservableEmailControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EmailControllerApiRequestFactory,
        responseProcessor?: EmailControllerApiResponseProcessor
    ) {
        this.api = new ObservableEmailControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Apply RFC3501 section-2.3.2 IMAP flag operations on an email
     * Set IMAP flags associated with a message. Only supports '\\Seen' flag.
     * @param emailId 
     * @param imapFlagOperationOptions 
     */
    public applyImapFlagOperation(emailId: string, imapFlagOperationOptions: ImapFlagOperationOptions, options?: Configuration): Promise<EmailPreview> {
        const result = this.api.applyImapFlagOperation(emailId, imapFlagOperationOptions, options);
        return result.toPromise();
    }

    /**
     * Can user send email to given recipient or is the recipient blocked
     * Check if email can be sent and options are valid.
     * @param inboxId ID of the inbox you want to send the email from
     * @param sendEmailOptions 
     */
    public canSend(inboxId: string, sendEmailOptions: SendEmailOptions, options?: Configuration): Promise<CanSendEmailResults> {
        const result = this.api.canSend(inboxId, sendEmailOptions, options);
        return result.toPromise();
    }

    /**
     * Find dead links, broken images, and spelling mistakes in email body. Will call included links via HTTP so do not invoke if your links are sensitive or stateful. Any resource that returns a 4xx or 5xx response or is not reachable via HEAD or GET HTTP operations will be considered unhealthy.
     * Detect broken links, spelling, and images in email content
     * @param emailId 
     */
    public checkEmailBody(emailId: string, options?: Configuration): Promise<CheckEmailBodyResults> {
        const result = this.api.checkEmailBody(emailId, options);
        return result.toPromise();
    }

    /**
     * Detect HTML and CSS features inside an email body and return a report of email client support across different platforms and versions.
     * Show which mail clients support the HTML and CSS features used in an email body.
     * @param emailId 
     */
    public checkEmailBodyFeatureSupport(emailId: string, options?: Configuration): Promise<CheckEmailBodyFeatureSupportResults> {
        const result = this.api.checkEmailBodyFeatureSupport(emailId, options);
        return result.toPromise();
    }

    /**
     * Evaluate the features used in an email body and return a report of email client support across different platforms and versions.
     * Show which email programs and devices support the features used in an email body.
     * @param checkEmailClientSupportOptions 
     */
    public checkEmailClientSupport(checkEmailClientSupportOptions: CheckEmailClientSupportOptions, options?: Configuration): Promise<CheckEmailClientSupportResults> {
        const result = this.api.checkEmailClientSupport(checkEmailClientSupportOptions, options);
        return result.toPromise();
    }

    /**
     * Deletes all emails in your account. Be careful as emails cannot be recovered
     * Delete all emails in all inboxes.
     */
    public deleteAllEmails(options?: Configuration): Promise<void> {
        const result = this.api.deleteAllEmails(options);
        return result.toPromise();
    }

    /**
     * Deletes an email and removes it from the inbox. Deleted emails cannot be recovered.
     * Delete an email
     * @param emailId ID of email to delete
     */
    public deleteEmail(emailId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteEmail(emailId, options);
        return result.toPromise();
    }

    /**
     * Returns the specified attachment for a given email as a stream / array of bytes. You can find attachment ids in email responses endpoint responses. The response type is application/octet-stream.
     * Get email attachment bytes. Returned as `octet-stream` with content type header. If you have trouble with byte responses try the `downloadAttachmentBase64` response endpoints and convert the base 64 encoded content to a file or string.
     * @param emailId ID of email
     * @param attachmentId ID of attachment
     * @param apiKey Can pass apiKey in url for this request if you wish to download the file in a browser. Content type will be set to original content type of the attachment file. This is so that browsers can download the file correctly.
     */
    public downloadAttachment(emailId: string, attachmentId: string, apiKey?: string, options?: Configuration): Promise<void> {
        const result = this.api.downloadAttachment(emailId, attachmentId, apiKey, options);
        return result.toPromise();
    }

    /**
     * Returns the specified attachment for a given email as a base 64 encoded string. The response type is application/json. This method is similar to the `downloadAttachment` method but allows some clients to get around issues with binary responses.
     * Get email attachment as base64 encoded string as an alternative to binary responses. Decode the `base64FileContents` as a `utf-8` encoded string or array of bytes depending on the `contentType`.
     * @param emailId ID of email
     * @param attachmentId ID of attachment
     */
    public downloadAttachmentBase64(emailId: string, attachmentId: string, options?: Configuration): Promise<DownloadAttachmentDto> {
        const result = this.api.downloadAttachmentBase64(emailId, attachmentId, options);
        return result.toPromise();
    }

    /**
     * Returns the specified email body for a given email as a string
     * Get email body as string. Returned as `plain/text` with content type header.
     * @param emailId ID of email
     */
    public downloadBody(emailId: string, options?: Configuration): Promise<string> {
        const result = this.api.downloadBody(emailId, options);
        return result.toPromise();
    }

    /**
     * Returns the specified email body for a given email as a stream / array of bytes.
     * Get email body in bytes. Returned as `octet-stream` with content type header.
     * @param emailId ID of email
     */
    public downloadBodyBytes(emailId: string, options?: Configuration): Promise<void> {
        const result = this.api.downloadBodyBytes(emailId, options);
        return result.toPromise();
    }

    /**
     * Forward an existing email to new recipients. The sender of the email will be the inbox that received the email you are forwarding. You can override the sender with the `from` option. Note you must have access to the from address in MailSlurp to use the override. For more control consider fetching the email and sending it a new using the send email endpoints.
     * Forward email to recipients
     * @param emailId ID of email
     * @param forwardEmailOptions 
     */
    public forwardEmail(emailId: string, forwardEmailOptions: ForwardEmailOptions, options?: Configuration): Promise<SentEmailDto> {
        const result = this.api.forwardEmail(emailId, forwardEmailOptions, options);
        return result.toPromise();
    }

    /**
     * Returns the metadata such as name and content-type for a given attachment and email.
     * Get email attachment metadata. This is the `contentType` and `contentLength` of an attachment. To get the individual attachments  use the `downloadAttachment` methods.
     * @param emailId ID of email
     * @param attachmentId ID of attachment
     */
    public getAttachmentMetaData(emailId: string, attachmentId: string, options?: Configuration): Promise<AttachmentMetaData> {
        const result = this.api.getAttachmentMetaData(emailId, attachmentId, options);
        return result.toPromise();
    }

    /**
     * Returns a email summary object with headers and content. To retrieve the raw unparsed email use the getRawEmail endpoints
     * Get email content including headers and body. Expects email to exist by ID. For emails that may not have arrived yet use the WaitForController.
     * @param emailId 
     * @param decode Decode email body quoted-printable encoding to plain text. SMTP servers often encode text using quoted-printable format (for instance &#x60;&#x3D;D7&#x60;). This can be a pain for testing
     */
    public getEmail(emailId: string, decode?: boolean, options?: Configuration): Promise<Email> {
        const result = this.api.getEmail(emailId, decode, options);
        return result.toPromise();
    }

    /**
     * Returns an array of attachment metadata such as name and content-type for a given email if present.
     * Get all email attachment metadata. Metadata includes name and size of attachments.
     * @param emailId ID of email
     */
    public getEmailAttachments(emailId: string, options?: Configuration): Promise<Array<AttachmentMetaData>> {
        const result = this.api.getEmailAttachments(emailId, options);
        return result.toPromise();
    }

    /**
     * Return the matches for a given Java style regex pattern. Do not include the typical `/` at start or end of regex in some languages. Given an example `your code is: 12345` the pattern to extract match looks like `code is: (\\d{6})`. This will return an array of matches with the first matching the entire pattern and the subsequent matching the groups: `['code is: 123456', '123456']` See https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html for more information of available patterns. 
     * Get email content regex pattern match results. Runs regex against email body and returns match groups.
     * @param emailId ID of email to match against
     * @param contentMatchOptions 
     */
    public getEmailContentMatch(emailId: string, contentMatchOptions: ContentMatchOptions, options?: Configuration): Promise<EmailContentMatchResult> {
        const result = this.api.getEmailContentMatch(emailId, contentMatchOptions, options);
        return result.toPromise();
    }

    /**
     * Get email body content parts from a multipart email message for a given content type
     * Get email content part by content type
     * @param emailId ID of email to match against
     * @param contentType Content type
     */
    public getEmailContentPart(emailId: string, contentType: string, options?: Configuration): Promise<EmailContentPartResult> {
        const result = this.api.getEmailContentPart(emailId, contentType, options);
        return result.toPromise();
    }

    /**
     * Get email count
     */
    public getEmailCount(options?: Configuration): Promise<CountDto> {
        const result = this.api.getEmailCount(options);
        return result.toPromise();
    }

    /**
     * Retrieve email content as HTML response for viewing in browsers. Decodes quoted-printable entities and converts charset to UTF-8. Pass your API KEY as a request parameter when viewing in a browser: `?apiKey=xxx`. Returns content-type `text/html;charset=utf-8` so you must call expecting that content response not JSON. For JSON response see the `getEmailHTMLJson` method.
     * Get email content as HTML. For displaying emails in browser context.
     * @param emailId 
     * @param decode 
     * @param replaceCidImages 
     */
    public getEmailHTML(emailId: string, decode?: boolean, replaceCidImages?: boolean, options?: Configuration): Promise<string> {
        const result = this.api.getEmailHTML(emailId, decode, replaceCidImages, options);
        return result.toPromise();
    }

    /**
     * Retrieve email content as HTML response. Decodes quoted-printable entities and converts charset to UTF-8. Returns content-type `application/json;charset=utf-8` so you must call expecting that content response not JSON.
     * Get email content as HTML in JSON wrapper. For fetching entity decoded HTML content
     * @param emailId 
     * @param decode 
     * @param replaceCidImages 
     */
    public getEmailHTMLJson(emailId: string, decode?: boolean, replaceCidImages?: boolean, options?: Configuration): Promise<EmailHtmlDto> {
        const result = this.api.getEmailHTMLJson(emailId, decode, replaceCidImages, options);
        return result.toPromise();
    }

    /**
     * Parse an email body and return the content as an array of text. HTML parsing uses JSoup which supports JQuery/CSS style selectors
     * Parse and return text from an email, stripping HTML and decoding encoded characters
     * @param emailId ID of email to perform HTML query on
     * @param htmlSelector HTML selector to search for. Uses JQuery/JSoup/CSS style selector like &#39;.my-div&#39; to match content. See https://jsoup.org/apidocs/org/jsoup/select/Selector.html for more information.
     */
    public getEmailHTMLQuery(emailId: string, htmlSelector: string, options?: Configuration): Promise<EmailTextLinesResult> {
        const result = this.api.getEmailHTMLQuery(emailId, htmlSelector, options);
        return result.toPromise();
    }

    /**
     * HTML parsing uses JSoup and UNIX line separators. Searches content for href attributes
     * Parse and return list of links found in an email (only works for HTML content)
     * @param emailId ID of email to fetch text for
     */
    public getEmailLinks(emailId: string, options?: Configuration): Promise<EmailLinksResult> {
        const result = this.api.getEmailLinks(emailId, options);
        return result.toPromise();
    }

    /**
     * Get a list of URLs for email content as text/html or raw SMTP message for viewing the message in a browser.
     * Get email URLs for viewing in browser or downloading
     * @param emailId 
     */
    public getEmailPreviewURLs(emailId: string, options?: Configuration): Promise<EmailPreviewUrls> {
        const result = this.api.getEmailPreviewURLs(emailId, options);
        return result.toPromise();
    }

    /**
     * Capture image of email screenshot and return as base64 encoded string. Useful for embedding in HTML. Be careful as this may contain sensitive information.
     * Take a screenshot of an email in a browser and return base64 encoded string
     * @param emailId 
     * @param getEmailScreenshotOptions 
     */
    public getEmailScreenshotAsBase64(emailId: string, getEmailScreenshotOptions: GetEmailScreenshotOptions, options?: Configuration): Promise<EmailScreenshotResult> {
        const result = this.api.getEmailScreenshotAsBase64(emailId, getEmailScreenshotOptions, options);
        return result.toPromise();
    }

    /**
     * Returns binary octet-stream of screenshot of the given email
     * Take a screenshot of an email in a browser
     * @param emailId 
     * @param getEmailScreenshotOptions 
     */
    public getEmailScreenshotAsBinary(emailId: string, getEmailScreenshotOptions: GetEmailScreenshotOptions, options?: Configuration): Promise<void> {
        const result = this.api.getEmailScreenshotAsBinary(emailId, getEmailScreenshotOptions, options);
        return result.toPromise();
    }

    /**
     * Parse an email body and return the content as an array of strings. HTML parsing uses JSoup and UNIX line separators.
     * Parse and return text from an email, stripping HTML and decoding encoded characters
     * @param emailId ID of email to fetch text for
     * @param decodeHtmlEntities Decode HTML entities
     * @param lineSeparator Line separator character
     */
    public getEmailTextLines(emailId: string, decodeHtmlEntities?: boolean, lineSeparator?: string, options?: Configuration): Promise<EmailTextLinesResult> {
        const result = this.api.getEmailTextLines(emailId, decodeHtmlEntities, lineSeparator, options);
        return result.toPromise();
    }

    /**
     * By default returns all emails across all inboxes sorted by ascending created at date. Responses are paginated. You can restrict results to a list of inbox IDs. You can also filter out read messages
     * Get all emails in all inboxes in paginated form. Email API list all.
     * @param inboxId Optional inbox ids to filter by. Can be repeated. By default will use all inboxes belonging to your account.
     * @param page Optional page index in email list pagination
     * @param size Optional page size in email list pagination. Maximum size is 100. Use page index and sort to page through larger results
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param unreadOnly Optional filter for unread emails only. All emails are considered unread until they are viewed in the dashboard or requested directly
     * @param searchFilter Optional search filter. Searches email recipients, sender, subject, email address and ID. Does not search email body
     * @param since Optional filter emails received after given date time
     * @param before Optional filter emails received before given date time
     */
    public getEmailsOffsetPaginated(inboxId?: Array<string>, page?: number, size?: number, sort?: 'ASC' | 'DESC', unreadOnly?: boolean, searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Promise<PageEmailProjection> {
        const result = this.api.getEmailsOffsetPaginated(inboxId, page, size, sort, unreadOnly, searchFilter, since, before, options);
        return result.toPromise();
    }

    /**
     * By default returns all emails across all inboxes sorted by ascending created at date. Responses are paginated. You can restrict results to a list of inbox IDs. You can also filter out read messages
     * Get all emails in all inboxes in paginated form. Email API list all.
     * @param inboxId Optional inbox ids to filter by. Can be repeated. By default will use all inboxes belonging to your account.
     * @param page Optional page index in email list pagination
     * @param size Optional page size in email list pagination. Maximum size is 100. Use page index and sort to page through larger results
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param unreadOnly Optional filter for unread emails only. All emails are considered unread until they are viewed in the dashboard or requested directly
     * @param searchFilter Optional search filter. Searches email recipients, sender, subject, email address and ID. Does not search email body
     * @param since Optional filter emails received after given date time. If unset will use time 24hours prior to now.
     * @param before Optional filter emails received before given date time
     */
    public getEmailsPaginated(inboxId?: Array<string>, page?: number, size?: number, sort?: 'ASC' | 'DESC', unreadOnly?: boolean, searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Promise<PageEmailProjection> {
        const result = this.api.getEmailsPaginated(inboxId, page, size, sort, unreadOnly, searchFilter, since, before, options);
        return result.toPromise();
    }

    /**
     * Get gravatar url for email address
     * @param emailAddress 
     * @param size 
     */
    public getGravatarUrlForEmailAddress(emailAddress: string, size?: string, options?: Configuration): Promise<GravatarUrl> {
        const result = this.api.getGravatarUrlForEmailAddress(emailAddress, size, options);
        return result.toPromise();
    }

    /**
     * Get the newest email in all inboxes or in a passed set of inbox IDs
     * Get latest email in all inboxes. Most recently received.
     * @param inboxIds Optional set of inboxes to filter by. Only get the latest email from these inbox IDs. If not provided will search across all inboxes
     */
    public getLatestEmail(inboxIds?: Array<string>, options?: Configuration): Promise<Email> {
        const result = this.api.getLatestEmail(inboxIds, options);
        return result.toPromise();
    }

    /**
     * Get the newest email in all inboxes or in a passed set of inbox IDs
     * Get latest email in an inbox. Use `WaitForController` to get emails that may not have arrived yet.
     * @param inboxId ID of the inbox you want to get the latest email from
     */
    public getLatestEmailInInbox1(inboxId: string, options?: Configuration): Promise<Email> {
        const result = this.api.getLatestEmailInInbox1(inboxId, options);
        return result.toPromise();
    }

    /**
     * By default returns all emails across all team inboxes sorted by ascending created at date. Responses are paginated. You can restrict results to a list of inbox IDs. You can also filter out read messages
     * Get all organization emails. List team or shared test email accounts
     * @param inboxId Optional inbox ids to filter by. Can be repeated. By default will use all inboxes belonging to your account.
     * @param page Optional page index in email list pagination
     * @param size Optional page size in email list pagination. Maximum size is 100. Use page index and sort to page through larger results
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param unreadOnly Optional filter for unread emails only. All emails are considered unread until they are viewed in the dashboard or requested directly
     * @param searchFilter Optional search filter search filter for emails.
     * @param since Optional filter emails received after given date time. If unset will use time 24hours prior to now.
     * @param before Optional filter emails received before given date time
     */
    public getOrganizationEmailsPaginated(inboxId?: Array<string>, page?: number, size?: number, sort?: 'ASC' | 'DESC', unreadOnly?: boolean, searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Promise<PageEmailProjection> {
        const result = this.api.getOrganizationEmailsPaginated(inboxId, page, size, sort, unreadOnly, searchFilter, since, before, options);
        return result.toPromise();
    }

    /**
     * Returns a raw, unparsed, and unprocessed email. If your client has issues processing the response it is likely due to the response content-type which is text/plain. If you need a JSON response content-type use the getRawEmailJson endpoint
     * Get raw email string. Returns unparsed raw SMTP message with headers and body.
     * @param emailId ID of email
     */
    public getRawEmailContents(emailId: string, options?: Configuration): Promise<void> {
        const result = this.api.getRawEmailContents(emailId, options);
        return result.toPromise();
    }

    /**
     * Returns a raw, unparsed, and unprocessed email wrapped in a JSON response object for easier handling when compared with the getRawEmail text/plain response
     * Get raw email in JSON. Unparsed SMTP message in JSON wrapper format.
     * @param emailId ID of email
     */
    public getRawEmailJson(emailId: string, options?: Configuration): Promise<RawEmailJson> {
        const result = this.api.getRawEmailJson(emailId, options);
        return result.toPromise();
    }

    /**
     * Get number of emails unread. Unread means has not been viewed in dashboard or returned in an email API response
     * Get unread email count
     */
    public getUnreadEmailCount(options?: Configuration): Promise<UnreadCount> {
        const result = this.api.getUnreadEmailCount(options);
        return result.toPromise();
    }

    /**
     * Marks an email as read or unread. Pass boolean read flag to set value. This is useful if you want to read an email but keep it as unread
     * Mark an email as read on unread
     * @param emailId 
     * @param read What value to assign to email read property. Default true.
     */
    public markAsRead(emailId: string, read?: boolean, options?: Configuration): Promise<EmailPreview> {
        const result = this.api.markAsRead(emailId, read, options);
        return result.toPromise();
    }

    /**
     * Send the reply to the email sender or reply-to and include same subject cc bcc etc. Reply to an email and the contents will be sent with the existing subject to the emails `to`, `cc`, and `bcc`.
     * Reply to an email
     * @param emailId ID of the email that should be replied to
     * @param replyToEmailOptions 
     */
    public replyToEmail(emailId: string, replyToEmailOptions: ReplyToEmailOptions, options?: Configuration): Promise<SentEmailDto> {
        const result = this.api.replyToEmail(emailId, replyToEmailOptions, options);
        return result.toPromise();
    }

    /**
     * Search emails by given criteria return matches in paginated format. Searches against email recipients, sender, subject, email address and ID. Does not search email body
     * Get all emails by search criteria. Return in paginated form.
     * @param searchEmailsOptions 
     */
    public searchEmails(searchEmailsOptions: SearchEmailsOptions, options?: Configuration): Promise<PageEmailProjection> {
        const result = this.api.searchEmails(searchEmailsOptions, options);
        return result.toPromise();
    }

    /**
     * Alias for `InboxController.sendEmail` method - see original method for full details. Sends an email from a given inbox that you have created. If no inbox is supplied a random inbox will be created for you and used to send the email.
     * Send email
     * @param sendEmailOptions 
     * @param inboxId ID of the inbox you want to send the email from
     * @param useDomainPool Use domain pool. Optionally create inbox to send from using the mailslurp domain pool.
     * @param virtualSend Optionally create inbox to send from that is a virtual inbox and won&#39;t send to external addresses
     */
    public sendEmailSourceOptional(sendEmailOptions: SendEmailOptions, inboxId?: string, useDomainPool?: boolean, virtualSend?: boolean, options?: Configuration): Promise<void> {
        const result = this.api.sendEmailSourceOptional(sendEmailOptions, inboxId, useDomainPool, virtualSend, options);
        return result.toPromise();
    }

    /**
     * Validate the HTML content of email if HTML is found. Considered valid if no HTML is present.
     * Validate email HTML contents
     * @param emailId ID of email
     */
    public validateEmail(emailId: string, options?: Configuration): Promise<ValidationDto> {
        const result = this.api.validateEmail(emailId, options);
        return result.toPromise();
    }


}



import { ObservableEmailVerificationControllerApi } from './ObservableAPI.ts';

import { EmailVerificationControllerApiRequestFactory, EmailVerificationControllerApiResponseProcessor} from "../apis/EmailVerificationControllerApi.ts";
export class PromiseEmailVerificationControllerApi {
    private api: ObservableEmailVerificationControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EmailVerificationControllerApiRequestFactory,
        responseProcessor?: EmailVerificationControllerApiResponseProcessor
    ) {
        this.api = new ObservableEmailVerificationControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete all validation requests
     */
    public deleteAllValidationRequests(options?: Configuration): Promise<void> {
        const result = this.api.deleteAllValidationRequests(options);
        return result.toPromise();
    }

    /**
     * Delete a validation record
     * @param id 
     */
    public deleteValidationRequest(id: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteValidationRequest(id, options);
        return result.toPromise();
    }

    /**
     * Validate a list of email addresses. Per unit billing. See your plan for pricing.
     * @param page Optional page index in list pagination
     * @param size Optional page size for paginated result list.
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param isValid Filter where email is valid is true or false
     */
    public getValidationRequests(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, isValid?: boolean, options?: Configuration): Promise<PageEmailValidationRequest> {
        const result = this.api.getValidationRequests(page, size, sort, searchFilter, since, before, isValid, options);
        return result.toPromise();
    }

    /**
     * Validate a list of email addresses. Per unit billing. See your plan for pricing.
     * @param validateEmailAddressListOptions 
     */
    public validateEmailAddressList(validateEmailAddressListOptions: ValidateEmailAddressListOptions, options?: Configuration): Promise<ValidateEmailAddressListResult> {
        const result = this.api.validateEmailAddressList(validateEmailAddressListOptions, options);
        return result.toPromise();
    }


}



import { ObservableExpiredControllerApi } from './ObservableAPI.ts';

import { ExpiredControllerApiRequestFactory, ExpiredControllerApiResponseProcessor} from "../apis/ExpiredControllerApi.ts";
export class PromiseExpiredControllerApi {
    private api: ObservableExpiredControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ExpiredControllerApiRequestFactory,
        responseProcessor?: ExpiredControllerApiResponseProcessor
    ) {
        this.api = new ObservableExpiredControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Return default times used for inbox expiration
     * Get default expiration settings
     */
    public getExpirationDefaults(options?: Configuration): Promise<ExpirationDefaults> {
        const result = this.api.getExpirationDefaults(options);
        return result.toPromise();
    }

    /**
     * Use the inboxId to return an ExpiredInboxRecord if an inbox has expired. Inboxes expire and are disabled if an expiration date is set or plan requires. Returns 404 if no expired inbox is found for the inboxId
     * Get expired inbox record for a previously existing inbox
     * @param inboxId ID of inbox you want to retrieve (not the inbox ID)
     */
    public getExpiredInboxByInboxId(inboxId: string, options?: Configuration): Promise<ExpiredInboxDto> {
        const result = this.api.getExpiredInboxByInboxId(inboxId, options);
        return result.toPromise();
    }

    /**
     * Inboxes created with an expiration date will expire after the given date and be moved to an ExpiredInbox entity. You can still read emails in the inbox but it can no longer send or receive emails. Fetch the expired inboxes to view the old inboxes properties
     * Get an expired inbox record
     * @param expiredId ID of the ExpiredInboxRecord you want to retrieve. This is different from the ID of the inbox you are interested in. See other methods for getting ExpiredInboxRecord for an inbox inboxId
     */
    public getExpiredInboxRecord(expiredId: string, options?: Configuration): Promise<ExpiredInboxDto> {
        const result = this.api.getExpiredInboxRecord(expiredId, options);
        return result.toPromise();
    }

    /**
     * Inboxes created with an expiration date will expire after the given date. An ExpiredInboxRecord is created that records the inboxes old ID and email address. You can still read emails in the inbox (using the inboxes old ID) but the email address associated with the inbox can no longer send or receive emails. Fetch expired inbox records to view the old inboxes properties
     * List records of expired inboxes
     * @param page Optional page index in inbox sent email list pagination
     * @param size Optional page size in inbox sent email list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getExpiredInboxes(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageExpiredInboxRecordProjection> {
        const result = this.api.getExpiredInboxes(page, size, sort, since, before, options);
        return result.toPromise();
    }


}



import { ObservableExportControllerApi } from './ObservableAPI.ts';

import { ExportControllerApiRequestFactory, ExportControllerApiResponseProcessor} from "../apis/ExportControllerApi.ts";
export class PromiseExportControllerApi {
    private api: ObservableExportControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ExportControllerApiRequestFactory,
        responseProcessor?: ExportControllerApiResponseProcessor
    ) {
        this.api = new ObservableExportControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Export inboxes link callable via browser
     * @param exportType 
     * @param apiKey 
     * @param outputFormat 
     * @param filter 
     * @param listSeparatorToken 
     * @param excludePreviouslyExported 
     * @param createdEarliestTime 
     * @param createdOldestTime 
     */
    public exportEntities(exportType: 'INBOXES' | 'CONTACTS' | 'ATTACHMENTS' | 'EMAILS', apiKey: string, outputFormat: 'CSV_DEFAULT' | 'CSV_EXCEL', filter?: string, listSeparatorToken?: string, excludePreviouslyExported?: boolean, createdEarliestTime?: Date, createdOldestTime?: Date, options?: Configuration): Promise<string> {
        const result = this.api.exportEntities(exportType, apiKey, outputFormat, filter, listSeparatorToken, excludePreviouslyExported, createdEarliestTime, createdOldestTime, options);
        return result.toPromise();
    }

    /**
     * Get export link
     * @param exportType 
     * @param exportOptions 
     * @param apiKey 
     */
    public getExportLink(exportType: 'INBOXES' | 'CONTACTS' | 'ATTACHMENTS' | 'EMAILS', exportOptions: ExportOptions, apiKey?: string, options?: Configuration): Promise<ExportLink> {
        const result = this.api.getExportLink(exportType, exportOptions, apiKey, options);
        return result.toPromise();
    }


}



import { ObservableFormControllerApi } from './ObservableAPI.ts';

import { FormControllerApiRequestFactory, FormControllerApiResponseProcessor} from "../apis/FormControllerApi.ts";
export class PromiseFormControllerApi {
    private api: ObservableFormControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FormControllerApiRequestFactory,
        responseProcessor?: FormControllerApiResponseProcessor
    ) {
        this.api = new ObservableFormControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint allows you to submit HTML forms and receive the field values and files via email.   #### Parameters The endpoint looks for special meta parameters in the form fields OR in the URL request parameters. The meta parameters can be used to specify the behaviour of the email.   You must provide at-least a `_to` email address to tell the endpoint where the form should be emailed. These can be submitted as hidden HTML input fields with the corresponding `name` attributes or as URL query parameters such as `?_to=test@example.com`  The endpoint takes all other form fields that are named and includes them in the message body of the email. Files are sent as attachments.  #### Submitting This endpoint accepts form submission via POST method. It accepts `application/x-www-form-urlencoded`, and `multipart/form-data` content-types.  #### HTML Example ```html <form    action=\"https://api.mailslurp.com/forms\"   method=\"post\" >   <input name=\"_to\" type=\"hidden\" value=\"test@example.com\"/>   <textarea name=\"feedback\"></textarea>   <button type=\"submit\">Submit</button> </form> ```  #### URL Example ```html <form    action=\"https://api.mailslurp.com/forms?_to=test@example.com\"   method=\"post\" >   <textarea name=\"feedback\"></textarea>   <button type=\"submit\">Submit</button> </form> ```    The email address is specified by a `_to` field OR is extracted from an email alias specified by a `_toAlias` field (see the alias controller for more information).  Endpoint accepts .  You can specify a content type in HTML forms using the `enctype` attribute, for instance: `<form enctype=\"multipart/form-data\">`.  
     * Submit a form to be parsed and sent as an email to an address determined by the form fields
     * @param to The email address that submitted form should be sent to.
     * @param subject Optional subject of the email that will be sent.
     * @param redirectTo Optional URL to redirect form submitter to after submission. If not present user will see a success message.
     * @param emailAddress Email address of the submitting user. Include this if you wish to record the submitters email address and reply to it later.
     * @param successMessage Optional success message to display if no _redirectTo present.
     * @param spamCheck Optional but recommended field that catches spammers out. Include as a hidden form field but LEAVE EMPTY. Spam-bots will usually fill every field. If the _spamCheck field is filled the form submission will be ignored.
     * @param otherParameters All other parameters or fields will be accepted and attached to the sent email. This includes files and any HTML form field with a name. These fields will become the body of the email that is sent.
     */
    public submitForm(to?: string, subject?: string, redirectTo?: string, emailAddress?: string, successMessage?: string, spamCheck?: string, otherParameters?: string, options?: Configuration): Promise<string> {
        const result = this.api.submitForm(to, subject, redirectTo, emailAddress, successMessage, spamCheck, otherParameters, options);
        return result.toPromise();
    }


}



import { ObservableGroupControllerApi } from './ObservableAPI.ts';

import { GroupControllerApiRequestFactory, GroupControllerApiResponseProcessor} from "../apis/GroupControllerApi.ts";
export class PromiseGroupControllerApi {
    private api: ObservableGroupControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GroupControllerApiRequestFactory,
        responseProcessor?: GroupControllerApiResponseProcessor
    ) {
        this.api = new ObservableGroupControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add contacts to a group
     * @param groupId 
     * @param updateGroupContacts 
     */
    public addContactsToGroup(groupId: string, updateGroupContacts: UpdateGroupContacts, options?: Configuration): Promise<GroupContactsDto> {
        const result = this.api.addContactsToGroup(groupId, updateGroupContacts, options);
        return result.toPromise();
    }

    /**
     * Create a group
     * @param createGroupOptions 
     */
    public createGroup(createGroupOptions: CreateGroupOptions, options?: Configuration): Promise<GroupDto> {
        const result = this.api.createGroup(createGroupOptions, options);
        return result.toPromise();
    }

    /**
     * Delete group
     * @param groupId 
     */
    public deleteGroup(groupId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteGroup(groupId, options);
        return result.toPromise();
    }

    /**
     * Get all Contact Groups in paginated format
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getAllGroups(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageGroupProjection> {
        const result = this.api.getAllGroups(page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Get group
     * @param groupId 
     */
    public getGroup(groupId: string, options?: Configuration): Promise<GroupDto> {
        const result = this.api.getGroup(groupId, options);
        return result.toPromise();
    }

    /**
     * Get group and contacts belonging to it
     * @param groupId 
     */
    public getGroupWithContacts(groupId: string, options?: Configuration): Promise<GroupContactsDto> {
        const result = this.api.getGroupWithContacts(groupId, options);
        return result.toPromise();
    }

    /**
     * Get group and paginated contacts belonging to it
     * @param groupId 
     * @param page Optional page index in group contact pagination
     * @param size Optional page size in group contact pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getGroupWithContactsPaginated(groupId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageContactProjection> {
        const result = this.api.getGroupWithContactsPaginated(groupId, page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Get all groups
     */
    public getGroups(options?: Configuration): Promise<Array<GroupProjection>> {
        const result = this.api.getGroups(options);
        return result.toPromise();
    }

    /**
     * Remove contacts from a group
     * @param groupId 
     * @param updateGroupContacts 
     */
    public removeContactsFromGroup(groupId: string, updateGroupContacts: UpdateGroupContacts, options?: Configuration): Promise<GroupContactsDto> {
        const result = this.api.removeContactsFromGroup(groupId, updateGroupContacts, options);
        return result.toPromise();
    }


}



import { ObservableImapControllerApi } from './ObservableAPI.ts';

import { ImapControllerApiRequestFactory, ImapControllerApiResponseProcessor} from "../apis/ImapControllerApi.ts";
export class PromiseImapControllerApi {
    private api: ObservableImapControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ImapControllerApiRequestFactory,
        responseProcessor?: ImapControllerApiResponseProcessor
    ) {
        this.api = new ObservableImapControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch message in an inbox
     * @param seqNum 
     * @param inboxId Inbox ID to search
     */
    public imapServerFetch(seqNum: number, inboxId?: string, options?: Configuration): Promise<ImapServerFetchResult> {
        const result = this.api.imapServerFetch(seqNum, inboxId, options);
        return result.toPromise();
    }

    /**
     * Get a message by email ID
     * @param emailId Email ID to get
     * @param inboxId Inbox ID to search
     */
    public imapServerGet(emailId: string, inboxId?: string, options?: Configuration): Promise<ImapServerGetResult> {
        const result = this.api.imapServerGet(emailId, inboxId, options);
        return result.toPromise();
    }

    /**
     * List messages in an inbox
     * @param imapServerListOptions 
     * @param inboxId Inbox ID to list
     */
    public imapServerList(imapServerListOptions: ImapServerListOptions, inboxId?: string, options?: Configuration): Promise<ImapServerListResult> {
        const result = this.api.imapServerList(imapServerListOptions, inboxId, options);
        return result.toPromise();
    }

    /**
     * Search messages in an inbox
     * @param imapServerSearchOptions 
     * @param inboxId Inbox ID to search
     */
    public imapServerSearch(imapServerSearchOptions: ImapServerSearchOptions, inboxId?: string, options?: Configuration): Promise<ImapServerSearchResult> {
        const result = this.api.imapServerSearch(imapServerSearchOptions, inboxId, options);
        return result.toPromise();
    }

    /**
     * Get status for mailbox
     * @param imapServerStatusOptions 
     * @param inboxId Inbox ID to list
     */
    public imapServerStatus(imapServerStatusOptions: ImapServerStatusOptions, inboxId?: string, options?: Configuration): Promise<ImapServerStatusResult> {
        const result = this.api.imapServerStatus(imapServerStatusOptions, inboxId, options);
        return result.toPromise();
    }

    /**
     * Update message flags
     * @param imapUpdateFlagsOptions 
     * @param inboxId 
     */
    public imapServerUpdateFlags(imapUpdateFlagsOptions: ImapUpdateFlagsOptions, inboxId?: string, options?: Configuration): Promise<void> {
        const result = this.api.imapServerUpdateFlags(imapUpdateFlagsOptions, inboxId, options);
        return result.toPromise();
    }


}



import { ObservableInboxControllerApi } from './ObservableAPI.ts';

import { InboxControllerApiRequestFactory, InboxControllerApiResponseProcessor} from "../apis/InboxControllerApi.ts";
export class PromiseInboxControllerApi {
    private api: ObservableInboxControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: InboxControllerApiRequestFactory,
        responseProcessor?: InboxControllerApiResponseProcessor
    ) {
        this.api = new ObservableInboxControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a scheduled email job and cancel it. Will fail if status of job is already cancelled, failed, or complete.
     * Cancel a scheduled email job
     * @param jobId 
     */
    public cancelScheduledJob(jobId: string, options?: Configuration): Promise<ScheduledJobDto> {
        const result = this.api.cancelScheduledJob(jobId, options);
        return result.toPromise();
    }

    /**
     * Create a new inbox and with a randomized email address to send and receive from. Pass emailAddress parameter if you wish to use a specific email address. Creating an inbox is required before sending or receiving emails. If writing tests it is recommended that you create a new inbox during each test method so that it is unique and empty. 
     * Create an inbox email address. An inbox has a real email address and can send and receive emails. Inboxes can be either `SMTP` or `HTTP` inboxes.
     * @param emailAddress A custom email address to use with the inbox. Defaults to null. When null MailSlurp will assign a random email address to the inbox such as &#x60;123@mailslurp.com&#x60;. If you use the &#x60;useDomainPool&#x60; option when the email address is null it will generate an email address with a more varied domain ending such as &#x60;123@mailslurp.info&#x60; or &#x60;123@mailslurp.biz&#x60;. When a custom email address is provided the address is split into a domain and the domain is queried against your user. If you have created the domain in the MailSlurp dashboard and verified it you can use any email address that ends with the domain. Note domain types must match the inbox type - so &#x60;SMTP&#x60; inboxes will only work with &#x60;SMTP&#x60; type domains. Avoid &#x60;SMTP&#x60; inboxes if you need to send emails as they can only receive. Send an email to this address and the inbox will receive and store it for you. To retrieve the email use the Inbox and Email Controller endpoints with the inbox ID.
     * @param tags Tags that inbox has been tagged with. Tags can be added to inboxes to group different inboxes within an account. You can also search for inboxes by tag in the dashboard UI.
     * @param name Optional name of the inbox. Displayed in the dashboard for easier search and used as the sender name when sending emails.
     * @param description Optional description of the inbox for labelling purposes. Is shown in the dashboard and can be used with
     * @param useDomainPool Use the MailSlurp domain name pool with this inbox when creating the email address. Defaults to null. If enabled the inbox will be an email address with a domain randomly chosen from a list of the MailSlurp domains. This is useful when the default &#x60;@mailslurp.com&#x60; email addresses used with inboxes are blocked or considered spam by a provider or receiving service. When domain pool is enabled an email address will be generated ending in &#x60;@mailslurp.{world,info,xyz,...}&#x60; . This means a TLD is randomly selecting from a list of &#x60;.biz&#x60;, &#x60;.info&#x60;, &#x60;.xyz&#x60; etc to add variance to the generated email addresses. When null or false MailSlurp uses the default behavior of &#x60;@mailslurp.com&#x60; or custom email address provided by the emailAddress field. Note this feature is only available for &#x60;HTTP&#x60; inbox types.
     * @param favourite Is the inbox a favorite. Marking an inbox as a favorite is typically done in the dashboard for quick access or filtering
     * @param expiresAt Optional inbox expiration date. If null then this inbox is permanent and the emails in it won&#39;t be deleted. If an expiration date is provided or is required by your plan the inbox will be closed when the expiration time is reached. Expired inboxes still contain their emails but can no longer send or receive emails. An ExpiredInboxRecord is created when an inbox and the email address and inbox ID are recorded. The expiresAt property is a timestamp string in ISO DateTime Format yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSXXX.
     * @param expiresIn Number of milliseconds that inbox should exist for
     * @param allowTeamAccess DEPRECATED (team access is always true). Grant team access to this inbox and the emails that belong to it for team members of your organization.
     * @param inboxType HTTP (default) or SMTP inbox type. HTTP inboxes are default and best solution for most cases. SMTP inboxes are more reliable for public inbound email consumption (but do not support sending emails). When using custom domains the domain type must match the inbox type. HTTP inboxes are processed by AWS SES while SMTP inboxes use a custom mail server running at &#x60;mx.mailslurp.com&#x60;.
     * @param virtualInbox Virtual inbox prevents any outbound emails from being sent. It creates sent email records but will never send real emails to recipients. Great for testing and faking email sending.
     * @param useShortAddress Use a shorter email address under 31 characters
     * @param domainId ID of custom domain to use for email address.
     * @param domainName FQDN domain name for the domain you have verified. Will be appended with a randomly assigned recipient name. Use the &#x60;emailAddress&#x60; option instead to specify the full custom inbox.
     * @param prefix Prefix to add before the email address for easier labelling or identification.
     */
    public createInbox(emailAddress?: string, tags?: Array<string>, name?: string, description?: string, useDomainPool?: boolean, favourite?: boolean, expiresAt?: Date, expiresIn?: number, allowTeamAccess?: boolean, inboxType?: 'HTTP_INBOX' | 'SMTP_INBOX', virtualInbox?: boolean, useShortAddress?: boolean, domainId?: string, domainName?: string, prefix?: string, options?: Configuration): Promise<InboxDto> {
        const result = this.api.createInbox(emailAddress, tags, name, description, useDomainPool, favourite, expiresAt, expiresIn, allowTeamAccess, inboxType, virtualInbox, useShortAddress, domainId, domainName, prefix, options);
        return result.toPromise();
    }

    /**
     * Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving
     * Create an inbox ruleset
     * @param inboxId inboxId
     * @param createInboxRulesetOptions 
     */
    public createInboxRuleset(inboxId: string, createInboxRulesetOptions: CreateInboxRulesetOptions, options?: Configuration): Promise<InboxRulesetDto> {
        const result = this.api.createInboxRuleset(inboxId, createInboxRulesetOptions, options);
        return result.toPromise();
    }

    /**
     * Create an inbox with default options. Uses MailSlurp domain pool address and is private.
     */
    public createInboxWithDefaults(options?: Configuration): Promise<InboxDto> {
        const result = this.api.createInboxWithDefaults(options);
        return result.toPromise();
    }

    /**
     * Additional endpoint that allows inbox creation with request body options. Can be more flexible that other methods for some clients.
     * Create an inbox with options. Extended options for inbox creation.
     * @param createInboxDto 
     */
    public createInboxWithOptions(createInboxDto: CreateInboxDto, options?: Configuration): Promise<InboxDto> {
        const result = this.api.createInboxWithOptions(createInboxDto, options);
        return result.toPromise();
    }

    /**
     * Deletes all emails in an inbox. Be careful as emails cannot be recovered
     * Delete all emails in a given inboxes.
     * @param inboxId 
     */
    public deleteAllInboxEmails(inboxId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteAllInboxEmails(inboxId, options);
        return result.toPromise();
    }

    /**
     * Permanently delete all inboxes and associated email addresses. This will also delete all emails within the inboxes. Be careful as inboxes cannot be recovered once deleted. Note: deleting inboxes will not impact your usage limits. Monthly inbox creation limits are based on how many inboxes were created in the last 30 days, not how many inboxes you currently have.
     * Delete all inboxes
     */
    public deleteAllInboxes(options?: Configuration): Promise<void> {
        const result = this.api.deleteAllInboxes(options);
        return result.toPromise();
    }

    /**
     * Permanently delete all inboxes by description
     * Delete inboxes by description
     * @param description 
     */
    public deleteAllInboxesByDescription(description: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteAllInboxesByDescription(description, options);
        return result.toPromise();
    }

    /**
     * Permanently delete all inboxes by name
     * Delete inboxes by name
     * @param name 
     */
    public deleteAllInboxesByName(name: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteAllInboxesByName(name, options);
        return result.toPromise();
    }

    /**
     * Permanently delete all inboxes by tag
     * Delete inboxes by tag
     * @param tag 
     */
    public deleteAllInboxesByTag(tag: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteAllInboxesByTag(tag, options);
        return result.toPromise();
    }

    /**
     * Permanently delete an inbox and associated email address as well as all emails within the given inbox. This action cannot be undone. Note: deleting an inbox will not affect your account usage. Monthly inbox usage is based on how many inboxes you create within 30 days, not how many exist at time of request.
     * Delete inbox
     * @param inboxId 
     */
    public deleteInbox(inboxId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteInbox(inboxId, options);
        return result.toPromise();
    }

    /**
     * Check if inboxes exist by email address. Useful if you are sending emails to mailslurp addresses
     * Does inbox exist
     * @param emailAddress Email address
     * @param allowCatchAll 
     */
    public doesInboxExist(emailAddress: string, allowCatchAll?: boolean, options?: Configuration): Promise<InboxExistsDto> {
        const result = this.api.doesInboxExist(emailAddress, allowCatchAll, options);
        return result.toPromise();
    }

    /**
     * Remove any expired inboxes for your account (instead of waiting for scheduled removal on server)
     * Remove expired inboxes
     * @param before Optional expired at before flag to flush expired inboxes that have expired before the given time
     */
    public flushExpired(before?: Date, options?: Configuration): Promise<FlushExpiredInboxesResult> {
        const result = this.api.flushExpired(before, options);
        return result.toPromise();
    }

    /**
     * List inboxes in paginated form. The results are available on the `content` property of the returned object. This method allows for page index (zero based), page size (how many results to return), and a sort direction (based on createdAt time). You Can also filter by whether an inbox is favorited or use email address pattern. This method is the recommended way to query inboxes. The alternative `getInboxes` method returns a full list of inboxes but is limited to 100 results.
     * List All Inboxes Paginated
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param favourite Optionally filter results for favourites only
     * @param search Optionally filter by search words partial matching ID, tags, name, and email address
     * @param tag Optionally filter by tags. Will return inboxes that include given tags
     * @param teamAccess DEPRECATED. Optionally filter by team access.
     * @param since Optional filter by created after given date time
     * @param before Optional filter by created before given date time
     * @param inboxType Optional filter by inbox type
     * @param inboxFunction Optional filter by inbox function
     * @param domainId Optional domain ID filter
     */
    public getAllInboxes(page?: number, size?: number, sort?: 'ASC' | 'DESC', favourite?: boolean, search?: string, tag?: string, teamAccess?: boolean, since?: Date, before?: Date, inboxType?: 'HTTP_INBOX' | 'SMTP_INBOX', inboxFunction?: 'ALIAS' | 'THREAD' | 'CATCH_ALL' | 'CONNECTOR', domainId?: string, options?: Configuration): Promise<PageInboxProjection> {
        const result = this.api.getAllInboxes(page, size, sort, favourite, search, tag, teamAccess, since, before, inboxType, inboxFunction, domainId, options);
        return result.toPromise();
    }

    /**
     * List inboxes in paginated form. The results are available on the `content` property of the returned object. This method allows for page index (zero based), page size (how many results to return), and a sort direction (based on createdAt time). You Can also filter by whether an inbox is favorited or use email address pattern. This method is the recommended way to query inboxes. The alternative `getInboxes` method returns a full list of inboxes but is limited to 100 results.
     * List All Inboxes Offset Paginated
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param favourite Optionally filter results for favourites only
     * @param search Optionally filter by search words partial matching ID, tags, name, and email address
     * @param tag Optionally filter by tags. Will return inboxes that include given tags
     * @param teamAccess DEPRECATED. Optionally filter by team access.
     * @param since Optional filter by created after given date time
     * @param before Optional filter by created before given date time
     * @param inboxType Optional filter by inbox type
     * @param inboxFunction Optional filter by inbox function
     * @param domainId Optional domain ID filter
     */
    public getAllInboxesOffsetPaginated(page?: number, size?: number, sort?: 'ASC' | 'DESC', favourite?: boolean, search?: string, tag?: string, teamAccess?: boolean, since?: Date, before?: Date, inboxType?: 'HTTP_INBOX' | 'SMTP_INBOX', inboxFunction?: 'ALIAS' | 'THREAD' | 'CATCH_ALL' | 'CONNECTOR', domainId?: string, options?: Configuration): Promise<PageInboxProjection> {
        const result = this.api.getAllInboxesOffsetPaginated(page, size, sort, favourite, search, tag, teamAccess, since, before, inboxType, inboxFunction, domainId, options);
        return result.toPromise();
    }

    /**
     * Schedule sending of emails using scheduled jobs. These can be inbox or account level.
     * Get all scheduled email sending jobs for account
     * @param page Optional page index in scheduled job list pagination
     * @param size Optional page size in scheduled job list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getAllScheduledJobs(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageScheduledJobs> {
        const result = this.api.getAllScheduledJobs(page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Get all email delivery statuses for an inbox
     * @param inboxId 
     * @param page Optional page index in delivery status list pagination
     * @param size Optional page size in delivery status list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getDeliveryStatusesByInboxId(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageDeliveryStatus> {
        const result = this.api.getDeliveryStatusesByInboxId(inboxId, page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * List emails that an inbox has received. Only emails that are sent to the inbox's email address will appear in the inbox. It may take several seconds for any email you send to an inbox's email address to appear in the inbox. To make this endpoint wait for a minimum number of emails use the `minCount` parameter. The server will retry the inbox database until the `minCount` is satisfied or the `retryTimeout` is reached
     * Get emails in an Inbox. This method is not idempotent as it allows retries and waits if you want certain conditions to be met before returning. For simple listing and sorting of known emails use the email controller instead.
     * @param inboxId Id of inbox that emails belongs to
     * @param size Alias for limit. Assessed first before assessing any passed limit.
     * @param limit Limit the result set, ordered by received date time sort direction. Maximum 100. For more listing options see the email controller
     * @param sort Sort the results by received date and direction ASC or DESC
     * @param retryTimeout Maximum milliseconds to spend retrying inbox database until minCount emails are returned
     * @param delayTimeout 
     * @param minCount Minimum acceptable email count. Will cause request to hang (and retry) until minCount is satisfied or retryTimeout is reached.
     * @param unreadOnly 
     * @param before Exclude emails received after this ISO 8601 date time
     * @param since Exclude emails received before this ISO 8601 date time
     */
    public getEmails(inboxId: string, size?: number, limit?: number, sort?: 'ASC' | 'DESC', retryTimeout?: number, delayTimeout?: number, minCount?: number, unreadOnly?: boolean, before?: Date, since?: Date, options?: Configuration): Promise<Array<EmailPreview>> {
        const result = this.api.getEmails(inboxId, size, limit, sort, retryTimeout, delayTimeout, minCount, unreadOnly, before, since, options);
        return result.toPromise();
    }

    /**
     * Get IMAP access usernames and passwords
     * @param inboxId Inbox ID
     */
    public getImapAccess(inboxId?: string, options?: Configuration): Promise<ImapAccessDetails> {
        const result = this.api.getImapAccess(inboxId, options);
        return result.toPromise();
    }

    /**
     * Get IMAP and SMTP access usernames and passwords
     * @param inboxId Inbox ID
     */
    public getImapSmtpAccess(inboxId?: string, options?: Configuration): Promise<ImapSmtpAccessDetails> {
        const result = this.api.getImapSmtpAccess(inboxId, options);
        return result.toPromise();
    }

    /**
     * Get IMAP and SMTP access details in .env format
     * @param inboxId Inbox ID
     */
    public getImapSmtpAccessEnv(inboxId?: string, options?: Configuration): Promise<string> {
        const result = this.api.getImapSmtpAccessEnv(inboxId, options);
        return result.toPromise();
    }

    /**
     * Returns an inbox's properties, including its email address and ID.
     * Get Inbox. Returns properties of an inbox.
     * @param inboxId 
     */
    public getInbox(inboxId: string, options?: Configuration): Promise<InboxDto> {
        const result = this.api.getInbox(inboxId, options);
        return result.toPromise();
    }

    /**
     * Get a inbox result by email address
     * Search for an inbox with the provided email address
     * @param emailAddress 
     */
    public getInboxByEmailAddress(emailAddress: string, options?: Configuration): Promise<InboxByEmailAddressResult> {
        const result = this.api.getInboxByEmailAddress(emailAddress, options);
        return result.toPromise();
    }

    /**
     * Get a inbox result by name
     * Search for an inbox with the given name
     * @param name 
     */
    public getInboxByName(name: string, options?: Configuration): Promise<InboxByNameResult> {
        const result = this.api.getInboxByName(name, options);
        return result.toPromise();
    }

    /**
     * Get total inbox count
     */
    public getInboxCount(options?: Configuration): Promise<CountDto> {
        const result = this.api.getInboxCount(options);
        return result.toPromise();
    }

    /**
     * Get email count in inbox
     * @param inboxId Id of inbox that emails belongs to
     */
    public getInboxEmailCount(inboxId: string, options?: Configuration): Promise<CountDto> {
        const result = this.api.getInboxEmailCount(inboxId, options);
        return result.toPromise();
    }

    /**
     * Get a paginated list of emails in an inbox. Does not hold connections open.
     * Get inbox emails paginated
     * @param inboxId Id of inbox that emails belongs to
     * @param page Optional page index in inbox emails list pagination
     * @param size Optional page size in inbox emails list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Optional filter by received after given date time
     * @param before Optional filter by received before given date time
     */
    public getInboxEmailsPaginated(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageEmailPreview> {
        const result = this.api.getInboxEmailsPaginated(inboxId, page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Get list of inbox IDs
     * Get all inbox IDs
     */
    public getInboxIds(options?: Configuration): Promise<InboxIdsResult> {
        const result = this.api.getInboxIds(options);
        return result.toPromise();
    }

    /**
     * Returns an inbox's sent email receipts. Call individual sent email endpoints for more details. Note for privacy reasons the full body of sent emails is never stored. An MD5 hash hex is available for comparison instead.
     * Get Inbox Sent Emails
     * @param inboxId 
     * @param page Optional page index in inbox sent email list pagination
     * @param size Optional page size in inbox sent email list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional sent email search
     * @param since Optional filter by sent after given date time
     * @param before Optional filter by sent before given date time
     */
    public getInboxSentEmails(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Promise<PageSentEmailProjection> {
        const result = this.api.getInboxSentEmails(inboxId, page, size, sort, searchFilter, since, before, options);
        return result.toPromise();
    }

    /**
     * Get all inbox tags
     * Get inbox tags
     */
    public getInboxTags(options?: Configuration): Promise<Array<string>> {
        const result = this.api.getInboxTags(options);
        return result.toPromise();
    }

    /**
     * List the inboxes you have created. Note use of the more advanced `getAllInboxes` is recommended and allows paginated access using a limit and sort parameter.
     * List Inboxes and email addresses
     * @param size Optional result size limit. Note an automatic limit of 100 results is applied. See the paginated &#x60;getAllEmails&#x60; for larger queries.
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Optional filter by created after given date time
     * @param excludeCatchAllInboxes Optional exclude catch all inboxes
     * @param before Optional filter by created before given date time
     */
    public getInboxes(size?: number, sort?: 'ASC' | 'DESC', since?: Date, excludeCatchAllInboxes?: boolean, before?: Date, options?: Configuration): Promise<Array<InboxDto>> {
        const result = this.api.getInboxes(size, sort, since, excludeCatchAllInboxes, before, options);
        return result.toPromise();
    }

    /**
     * Get the newest email in an inbox or wait for one to arrive
     * Get latest email in an inbox. Use `WaitForController` to get emails that may not have arrived yet.
     * @param inboxId ID of the inbox you want to get the latest email from
     * @param timeoutMillis Timeout milliseconds to wait for latest email
     */
    public getLatestEmailInInbox(inboxId: string, timeoutMillis: number, options?: Configuration): Promise<Email> {
        const result = this.api.getLatestEmailInInbox(inboxId, timeoutMillis, options);
        return result.toPromise();
    }

    /**
     * List organization inboxes in paginated form. These are inboxes created with `allowTeamAccess` flag enabled. Organization inboxes are `readOnly` for non-admin users. The results are available on the `content` property of the returned object. This method allows for page index (zero based), page size (how many results to return), and a sort direction (based on createdAt time). 
     * List Organization Inboxes Paginated
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Optional filter by created after given date time
     * @param before Optional filter by created before given date time
     */
    public getOrganizationInboxes(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Promise<PageOrganizationInboxProjection> {
        const result = this.api.getOrganizationInboxes(page, size, sort, searchFilter, since, before, options);
        return result.toPromise();
    }

    /**
     * Get a scheduled email job details.
     * Get a scheduled email job
     * @param jobId 
     */
    public getScheduledJob(jobId: string, options?: Configuration): Promise<ScheduledJobDto> {
        const result = this.api.getScheduledJob(jobId, options);
        return result.toPromise();
    }

    /**
     * Schedule sending of emails using scheduled jobs.
     * Get all scheduled email sending jobs for the inbox
     * @param inboxId 
     * @param page Optional page index in scheduled job list pagination
     * @param size Optional page size in scheduled job list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getScheduledJobsByInboxId(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageScheduledJobs> {
        const result = this.api.getScheduledJobsByInboxId(inboxId, page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Get SMTP access usernames and passwords
     * @param inboxId Inbox ID
     */
    public getSmtpAccess(inboxId?: string, options?: Configuration): Promise<SmtpAccessDetails> {
        const result = this.api.getSmtpAccess(inboxId, options);
        return result.toPromise();
    }

    /**
     * List all rulesets attached to an inbox
     * List inbox rulesets
     * @param inboxId 
     * @param page Optional page index in inbox ruleset list pagination
     * @param size Optional page size in inbox ruleset list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Optional filter by created after given date time
     * @param before Optional filter by created before given date time
     */
    public listInboxRulesets(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Promise<PageInboxRulesetDto> {
        const result = this.api.listInboxRulesets(inboxId, page, size, sort, searchFilter, since, before, options);
        return result.toPromise();
    }

    /**
     * List all tracking pixels sent from an inbox
     * List inbox tracking pixels
     * @param inboxId 
     * @param page Optional page index in inbox tracking pixel list pagination
     * @param size Optional page size in inbox tracking pixel list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Optional filter by created after given date time
     * @param before Optional filter by created before given date time
     */
    public listInboxTrackingPixels(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Promise<PageTrackingPixelProjection> {
        const result = this.api.listInboxTrackingPixels(inboxId, page, size, sort, searchFilter, since, before, options);
        return result.toPromise();
    }

    /**
     * Search inboxes and return in paginated form. The results are available on the `content` property of the returned object. This method allows for page index (zero based), page size (how many results to return), and a sort direction (based on createdAt time). You Can also filter by whether an inbox is favorited or use email address pattern. This method is the recommended way to query inboxes. The alternative `getInboxes` method returns a full list of inboxes but is limited to 100 results.
     * Search all inboxes and return matching inboxes
     * @param searchInboxesOptions 
     */
    public searchInboxes(searchInboxesOptions: SearchInboxesOptions, options?: Configuration): Promise<PageInboxProjection> {
        const result = this.api.searchInboxes(searchInboxesOptions, options);
        return result.toPromise();
    }

    /**
     * Send an email from an inbox's email address.  The request body should contain the `SendEmailOptions` that include recipients, attachments, body etc. See `SendEmailOptions` for all available properties. Note the `inboxId` refers to the inbox's id not the inbox's email address. See https://www.mailslurp.com/guides/ for more information on how to send emails. This method does not return a sent email entity due to legacy reasons. To send and get a sent email as returned response use the sister method `sendEmailAndConfirm`.
     * Send Email
     * @param inboxId ID of the inbox you want to send the email from
     * @param sendEmailOptions 
     */
    public sendEmail(inboxId: string, sendEmailOptions: SendEmailOptions, options?: Configuration): Promise<void> {
        const result = this.api.sendEmail(inboxId, sendEmailOptions, options);
        return result.toPromise();
    }

    /**
     * Sister method for standard `sendEmail` method with the benefit of returning a `SentEmail` entity confirming the successful sending of the email with a link to the sent object created for it.
     * Send email and return sent confirmation
     * @param inboxId ID of the inbox you want to send the email from
     * @param sendEmailOptions 
     */
    public sendEmailAndConfirm(inboxId: string, sendEmailOptions: SendEmailOptions, options?: Configuration): Promise<SentEmailDto> {
        const result = this.api.sendEmailAndConfirm(inboxId, sendEmailOptions, options);
        return result.toPromise();
    }

    /**
     * Send an email using a queue. Will place the email onto a queue that will then be processed and sent. Use this queue method to enable any failed email sending to be recovered. This will prevent lost emails when sending if your account encounters a block or payment issue.
     * Send email with queue
     * @param inboxId ID of the inbox you want to send the email from
     * @param validateBeforeEnqueue Validate before adding to queue
     * @param sendEmailOptions 
     */
    public sendEmailWithQueue(inboxId: string, validateBeforeEnqueue: boolean, sendEmailOptions: SendEmailOptions, options?: Configuration): Promise<void> {
        const result = this.api.sendEmailWithQueue(inboxId, validateBeforeEnqueue, sendEmailOptions, options);
        return result.toPromise();
    }

    /**
     * Send email using an SMTP envelope containing RCPT TO, MAIL FROM, and a SMTP BODY.
     * Send email using an SMTP mail envelope and message body and return sent confirmation
     * @param inboxId ID of the inbox you want to send the email from
     * @param sendSMTPEnvelopeOptions 
     */
    public sendSmtpEnvelope(inboxId: string, sendSMTPEnvelopeOptions: SendSMTPEnvelopeOptions, options?: Configuration): Promise<SentEmailDto> {
        const result = this.api.sendSmtpEnvelope(inboxId, sendSMTPEnvelopeOptions, options);
        return result.toPromise();
    }

    /**
     * Send an inbox a test email to test email receiving is working
     * Send a test email to inbox
     * @param inboxId 
     */
    public sendTestEmail(inboxId: string, options?: Configuration): Promise<void> {
        const result = this.api.sendTestEmail(inboxId, options);
        return result.toPromise();
    }

    /**
     * Send an email using a delay. Will place the email onto a scheduler that will then be processed and sent. Use delays to schedule email sending.
     * Send email with with delay or schedule
     * @param inboxId ID of the inbox you want to send the email from
     * @param sendEmailOptions 
     * @param sendAtTimestamp Sending timestamp
     * @param sendAtNowPlusSeconds Send after n seconds
     * @param validateBeforeEnqueue Validate before adding to queue
     */
    public sendWithSchedule(inboxId: string, sendEmailOptions: SendEmailOptions, sendAtTimestamp?: Date, sendAtNowPlusSeconds?: number, validateBeforeEnqueue?: boolean, options?: Configuration): Promise<ScheduledJobDto> {
        const result = this.api.sendWithSchedule(inboxId, sendEmailOptions, sendAtTimestamp, sendAtNowPlusSeconds, validateBeforeEnqueue, options);
        return result.toPromise();
    }

    /**
     * Set and return new favourite state for an inbox
     * Set inbox favourited state
     * @param inboxId ID of inbox to set favourite state
     * @param setInboxFavouritedOptions 
     */
    public setInboxFavourited(inboxId: string, setInboxFavouritedOptions: SetInboxFavouritedOptions, options?: Configuration): Promise<InboxDto> {
        const result = this.api.setInboxFavourited(inboxId, setInboxFavouritedOptions, options);
        return result.toPromise();
    }

    /**
     * Update editable fields on an inbox
     * Update Inbox. Change name and description. Email address is not editable.
     * @param inboxId 
     * @param updateInboxOptions 
     */
    public updateInbox(inboxId: string, updateInboxOptions: UpdateInboxOptions, options?: Configuration): Promise<InboxDto> {
        const result = this.api.updateInbox(inboxId, updateInboxOptions, options);
        return result.toPromise();
    }


}



import { ObservableInboxForwarderControllerApi } from './ObservableAPI.ts';

import { InboxForwarderControllerApiRequestFactory, InboxForwarderControllerApiResponseProcessor} from "../apis/InboxForwarderControllerApi.ts";
export class PromiseInboxForwarderControllerApi {
    private api: ObservableInboxForwarderControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: InboxForwarderControllerApiRequestFactory,
        responseProcessor?: InboxForwarderControllerApiResponseProcessor
    ) {
        this.api = new ObservableInboxForwarderControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving
     * Create an inbox forwarder
     * @param inboxId Inbox id to attach forwarder to
     * @param createInboxForwarderOptions 
     */
    public createNewInboxForwarder(inboxId: string, createInboxForwarderOptions: CreateInboxForwarderOptions, options?: Configuration): Promise<InboxForwarderDto> {
        const result = this.api.createNewInboxForwarder(inboxId, createInboxForwarderOptions, options);
        return result.toPromise();
    }

    /**
     * Delete inbox forwarder
     * Delete an inbox forwarder
     * @param id ID of inbox forwarder
     */
    public deleteInboxForwarder(id: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteInboxForwarder(id, options);
        return result.toPromise();
    }

    /**
     * Delete inbox forwarders. Accepts optional inboxId filter.
     * Delete inbox forwarders
     * @param inboxId Optional inbox id to attach forwarder to
     */
    public deleteInboxForwarders(inboxId?: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteInboxForwarders(inboxId, options);
        return result.toPromise();
    }

    /**
     * Get all inbox forwarder events
     * Get all inbox forwarder events
     * @param page Optional page index in inbox forwarder event list pagination
     * @param size Optional page size in inbox forwarder event list pagination
     * @param inboxId Optional inbox ID to filter for
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getAllInboxForwarderEvents(page?: number, size?: number, inboxId?: string, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageInboxForwarderEvents> {
        const result = this.api.getAllInboxForwarderEvents(page, size, inboxId, sort, options);
        return result.toPromise();
    }

    /**
     * Get forwarder event
     * Get a forwarder event
     * @param eventId ID of inbox forwarder event
     */
    public getForwarderEvent(eventId: string, options?: Configuration): Promise<InboxForwarderEventDto> {
        const result = this.api.getForwarderEvent(eventId, options);
        return result.toPromise();
    }

    /**
     * Get inbox forwarder
     * Get an inbox forwarder
     * @param id ID of inbox forwarder
     */
    public getInboxForwarder(id: string, options?: Configuration): Promise<InboxForwarderDto> {
        const result = this.api.getInboxForwarder(id, options);
        return result.toPromise();
    }

    /**
     * Get inbox forwarder event
     * Get an inbox forwarder event
     * @param id ID of inbox forwarder
     * @param eventId ID of inbox forwarder event
     */
    public getInboxForwarderEvent(id: string, eventId: string, options?: Configuration): Promise<InboxForwarderEventDto> {
        const result = this.api.getInboxForwarderEvent(id, eventId, options);
        return result.toPromise();
    }

    /**
     * Get inbox forwarder events
     * Get an inbox forwarder event list
     * @param id ID of inbox forwarder
     * @param page Optional page index in inbox forwarder event list pagination
     * @param size Optional page size in inbox forwarder event list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getInboxForwarderEvents(id: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageInboxForwarderEvents> {
        const result = this.api.getInboxForwarderEvents(id, page, size, sort, options);
        return result.toPromise();
    }

    /**
     * List all forwarders attached to an inbox
     * List inbox forwarders
     * @param inboxId Optional inbox id to get forwarders from
     * @param page Optional page index in inbox forwarder list pagination
     * @param size Optional page size in inbox forwarder list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getInboxForwarders(inboxId?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Promise<PageInboxForwarderDto> {
        const result = this.api.getInboxForwarders(inboxId, page, size, sort, searchFilter, since, before, options);
        return result.toPromise();
    }

    /**
     * Test an inbox forwarder
     * Test an inbox forwarder
     * @param id ID of inbox forwarder
     * @param inboxForwarderTestOptions 
     */
    public testInboxForwarder(id: string, inboxForwarderTestOptions: InboxForwarderTestOptions, options?: Configuration): Promise<InboxForwarderTestResult> {
        const result = this.api.testInboxForwarder(id, inboxForwarderTestOptions, options);
        return result.toPromise();
    }

    /**
     * Test inbox forwarders for inbox
     * Test inbox forwarders for inbox
     * @param inboxId ID of inbox
     * @param inboxForwarderTestOptions 
     */
    public testInboxForwardersForInbox(inboxId: string, inboxForwarderTestOptions: InboxForwarderTestOptions, options?: Configuration): Promise<InboxForwarderTestResult> {
        const result = this.api.testInboxForwardersForInbox(inboxId, inboxForwarderTestOptions, options);
        return result.toPromise();
    }

    /**
     * Test new inbox forwarder
     * Test new inbox forwarder
     * @param testNewInboxForwarderOptions 
     */
    public testNewInboxForwarder(testNewInboxForwarderOptions: TestNewInboxForwarderOptions, options?: Configuration): Promise<InboxForwarderTestResult> {
        const result = this.api.testNewInboxForwarder(testNewInboxForwarderOptions, options);
        return result.toPromise();
    }

    /**
     * Update inbox forwarder
     * Update an inbox forwarder
     * @param id ID of inbox forwarder
     * @param createInboxForwarderOptions 
     */
    public updateInboxForwarder(id: string, createInboxForwarderOptions: CreateInboxForwarderOptions, options?: Configuration): Promise<InboxForwarderDto> {
        const result = this.api.updateInboxForwarder(id, createInboxForwarderOptions, options);
        return result.toPromise();
    }


}



import { ObservableInboxReplierControllerApi } from './ObservableAPI.ts';

import { InboxReplierControllerApiRequestFactory, InboxReplierControllerApiResponseProcessor} from "../apis/InboxReplierControllerApi.ts";
export class PromiseInboxReplierControllerApi {
    private api: ObservableInboxReplierControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: InboxReplierControllerApiRequestFactory,
        responseProcessor?: InboxReplierControllerApiResponseProcessor
    ) {
        this.api = new ObservableInboxReplierControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new inbox rule for reply toing, blocking, and allowing emails when sending and receiving
     * Create an inbox replier
     * @param createInboxReplierOptions 
     */
    public createNewInboxReplier(createInboxReplierOptions: CreateInboxReplierOptions, options?: Configuration): Promise<InboxReplierDto> {
        const result = this.api.createNewInboxReplier(createInboxReplierOptions, options);
        return result.toPromise();
    }

    /**
     * Delete inbox replier
     * Delete an inbox replier
     * @param id ID of inbox replier
     */
    public deleteInboxReplier(id: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteInboxReplier(id, options);
        return result.toPromise();
    }

    /**
     * Delete inbox repliers. Accepts optional inboxId filter.
     * Delete inbox repliers
     * @param inboxId Optional inbox id to attach replier to
     */
    public deleteInboxRepliers(inboxId?: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteInboxRepliers(inboxId, options);
        return result.toPromise();
    }

    /**
     * Get inbox ruleset
     * Get an inbox replier
     * @param id ID of inbox replier
     */
    public getInboxReplier(id: string, options?: Configuration): Promise<InboxReplierDto> {
        const result = this.api.getInboxReplier(id, options);
        return result.toPromise();
    }

    /**
     * Get inbox ruleset events
     * Get an inbox replier event list
     * @param id ID of inbox replier
     * @param page Optional page index in inbox replier event list pagination
     * @param size Optional page size in inbox replier event list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getInboxReplierEvents(id: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageInboxReplierEvents> {
        const result = this.api.getInboxReplierEvents(id, page, size, sort, options);
        return result.toPromise();
    }

    /**
     * List all repliers attached to an inbox
     * List inbox repliers
     * @param inboxId Optional inbox id to get repliers from
     * @param page Optional page index in inbox replier list pagination
     * @param size Optional page size in inbox replier list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getInboxRepliers(inboxId?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageInboxReplierDto> {
        const result = this.api.getInboxRepliers(inboxId, page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Update inbox ruleset
     * Update an inbox replier
     * @param id ID of inbox replier
     * @param updateInboxReplierOptions 
     */
    public updateInboxReplier(id: string, updateInboxReplierOptions: UpdateInboxReplierOptions, options?: Configuration): Promise<InboxReplierDto> {
        const result = this.api.updateInboxReplier(id, updateInboxReplierOptions, options);
        return result.toPromise();
    }


}



import { ObservableInboxRulesetControllerApi } from './ObservableAPI.ts';

import { InboxRulesetControllerApiRequestFactory, InboxRulesetControllerApiResponseProcessor} from "../apis/InboxRulesetControllerApi.ts";
export class PromiseInboxRulesetControllerApi {
    private api: ObservableInboxRulesetControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: InboxRulesetControllerApiRequestFactory,
        responseProcessor?: InboxRulesetControllerApiResponseProcessor
    ) {
        this.api = new ObservableInboxRulesetControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving
     * Create an inbox ruleset
     * @param createInboxRulesetOptions 
     * @param inboxId Inbox id to attach ruleset to
     */
    public createNewInboxRuleset(createInboxRulesetOptions: CreateInboxRulesetOptions, inboxId?: string, options?: Configuration): Promise<InboxRulesetDto> {
        const result = this.api.createNewInboxRuleset(createInboxRulesetOptions, inboxId, options);
        return result.toPromise();
    }

    /**
     * Delete inbox ruleset
     * Delete an inbox ruleset
     * @param id ID of inbox ruleset
     */
    public deleteInboxRuleset(id: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteInboxRuleset(id, options);
        return result.toPromise();
    }

    /**
     * Delete inbox rulesets. Accepts optional inboxId filter.
     * Delete inbox rulesets
     * @param inboxId Optional inbox id to attach ruleset to
     */
    public deleteInboxRulesets(inboxId?: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteInboxRulesets(inboxId, options);
        return result.toPromise();
    }

    /**
     * Get inbox ruleset
     * Get an inbox ruleset
     * @param id ID of inbox ruleset
     */
    public getInboxRuleset(id: string, options?: Configuration): Promise<InboxRulesetDto> {
        const result = this.api.getInboxRuleset(id, options);
        return result.toPromise();
    }

    /**
     * List all rulesets attached to an inbox
     * List inbox rulesets
     * @param inboxId Optional inbox id to get rulesets from
     * @param page Optional page index in inbox ruleset list pagination
     * @param size Optional page size in inbox ruleset list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getInboxRulesets(inboxId?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Promise<PageInboxRulesetDto> {
        const result = this.api.getInboxRulesets(inboxId, page, size, sort, searchFilter, since, before, options);
        return result.toPromise();
    }

    /**
     * Test an inbox ruleset
     * Test an inbox ruleset
     * @param id ID of inbox ruleset
     * @param inboxRulesetTestOptions 
     */
    public testInboxRuleset(id: string, inboxRulesetTestOptions: InboxRulesetTestOptions, options?: Configuration): Promise<InboxRulesetTestResult> {
        const result = this.api.testInboxRuleset(id, inboxRulesetTestOptions, options);
        return result.toPromise();
    }

    /**
     * Test whether inbound emails from an email address would be blocked or allowed by inbox rulesets
     * Test receiving with inbox rulesets
     * @param testInboxRulesetReceivingOptions 
     */
    public testInboxRulesetReceiving(testInboxRulesetReceivingOptions: TestInboxRulesetReceivingOptions, options?: Configuration): Promise<TestInboxRulesetReceivingResult> {
        const result = this.api.testInboxRulesetReceiving(testInboxRulesetReceivingOptions, options);
        return result.toPromise();
    }

    /**
     * Test whether outbound emails to an email address would be blocked or allowed by inbox rulesets
     * Test sending with inbox rulesets
     * @param testInboxRulesetSendingOptions 
     */
    public testInboxRulesetSending(testInboxRulesetSendingOptions: TestInboxRulesetSendingOptions, options?: Configuration): Promise<TestInboxRulesetSendingResult> {
        const result = this.api.testInboxRulesetSending(testInboxRulesetSendingOptions, options);
        return result.toPromise();
    }

    /**
     * Test inbox rulesets for inbox
     * Test inbox rulesets for inbox
     * @param inboxId ID of inbox
     * @param inboxRulesetTestOptions 
     */
    public testInboxRulesetsForInbox(inboxId: string, inboxRulesetTestOptions: InboxRulesetTestOptions, options?: Configuration): Promise<InboxRulesetTestResult> {
        const result = this.api.testInboxRulesetsForInbox(inboxId, inboxRulesetTestOptions, options);
        return result.toPromise();
    }

    /**
     * Test new inbox ruleset
     * Test new inbox ruleset
     * @param testNewInboxRulesetOptions 
     */
    public testNewInboxRuleset(testNewInboxRulesetOptions: TestNewInboxRulesetOptions, options?: Configuration): Promise<InboxRulesetTestResult> {
        const result = this.api.testNewInboxRuleset(testNewInboxRulesetOptions, options);
        return result.toPromise();
    }


}



import { ObservableMailServerControllerApi } from './ObservableAPI.ts';

import { MailServerControllerApiRequestFactory, MailServerControllerApiResponseProcessor} from "../apis/MailServerControllerApi.ts";
export class PromiseMailServerControllerApi {
    private api: ObservableMailServerControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MailServerControllerApiRequestFactory,
        responseProcessor?: MailServerControllerApiResponseProcessor
    ) {
        this.api = new ObservableMailServerControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get DNS Mail Server records for a domain
     * @param describeDomainOptions 
     */
    public describeMailServerDomain(describeDomainOptions: DescribeDomainOptions, options?: Configuration): Promise<DescribeMailServerDomainResult> {
        const result = this.api.describeMailServerDomain(describeDomainOptions, options);
        return result.toPromise();
    }

    /**
     * Lookup DNS records for a domain
     * @param dNSLookupOptions 
     */
    public getDnsLookup(dNSLookupOptions: DNSLookupOptions, options?: Configuration): Promise<DNSLookupResults> {
        const result = this.api.getDnsLookup(dNSLookupOptions, options);
        return result.toPromise();
    }

    /**
     * Lookup DNS records for multiple domains
     * @param dNSLookupsOptions 
     */
    public getDnsLookups(dNSLookupsOptions: DNSLookupsOptions, options?: Configuration): Promise<DNSLookupResults> {
        const result = this.api.getDnsLookups(dNSLookupsOptions, options);
        return result.toPromise();
    }

    /**
     * Get IP address for a domain
     * @param name 
     */
    public getIpAddress(name: string, options?: Configuration): Promise<IPAddressResult> {
        const result = this.api.getIpAddress(name, options);
        return result.toPromise();
    }

    /**
     * Deprecated. Use the EmailVerificationController methods for more accurate and reliable functionality. Verify the existence of an email address at a given mail server.
     * @param verifyEmailAddressOptions 
     */
    public verifyEmailAddress(verifyEmailAddressOptions: VerifyEmailAddressOptions, options?: Configuration): Promise<EmailVerificationResult> {
        const result = this.api.verifyEmailAddress(verifyEmailAddressOptions, options);
        return result.toPromise();
    }


}



import { ObservableMissedEmailControllerApi } from './ObservableAPI.ts';

import { MissedEmailControllerApiRequestFactory, MissedEmailControllerApiResponseProcessor} from "../apis/MissedEmailControllerApi.ts";
export class PromiseMissedEmailControllerApi {
    private api: ObservableMissedEmailControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MissedEmailControllerApiRequestFactory,
        responseProcessor?: MissedEmailControllerApiResponseProcessor
    ) {
        this.api = new ObservableMissedEmailControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all MissedEmails in paginated format
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param inboxId Optional inbox ID filter
     */
    public getAllMissedEmails(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, inboxId?: string, options?: Configuration): Promise<PageMissedEmailProjection> {
        const result = this.api.getAllMissedEmails(page, size, sort, searchFilter, since, before, inboxId, options);
        return result.toPromise();
    }

    /**
     * Unknown missed emails are emails that were sent to MailSlurp but could not be assigned to an existing inbox.
     * Get all unknown missed emails in paginated format
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param inboxId Optional inbox ID filter
     */
    public getAllUnknownMissedEmails(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, inboxId?: string, options?: Configuration): Promise<PageUnknownMissedEmailProjection> {
        const result = this.api.getAllUnknownMissedEmails(page, size, sort, searchFilter, since, before, inboxId, options);
        return result.toPromise();
    }

    /**
     * List emails that were missed due to plan limits.
     * Get MissedEmail
     * @param missedEmailId 
     */
    public getMissedEmail(missedEmailId: string, options?: Configuration): Promise<MissedEmailDto> {
        const result = this.api.getMissedEmail(missedEmailId, options);
        return result.toPromise();
    }

    /**
     * If emails were missed due to a plan limit they are saved as missed emails. If support team enables the canRestore flag these emails can be reload into your account using this method.
     * Restore missed emails
     */
    public restoreMissedEmails(options?: Configuration): Promise<void> {
        const result = this.api.restoreMissedEmails(options);
        return result.toPromise();
    }

    /**
     * Wait for 0 based index missed email
     * Wait for Nth missed email
     * @param index Zero based index of the email to wait for. If 1 missed email already and you want to wait for the 2nd email pass index&#x3D;1
     * @param inboxId Optional inbox ID filter
     * @param timeout Optional timeout milliseconds
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public waitForNthMissedEmail(index: number, inboxId?: string, timeout?: number, since?: Date, before?: Date, options?: Configuration): Promise<MissedEmailDto> {
        const result = this.api.waitForNthMissedEmail(index, inboxId, timeout, since, before, options);
        return result.toPromise();
    }


}



import { ObservablePhoneControllerApi } from './ObservableAPI.ts';

import { PhoneControllerApiRequestFactory, PhoneControllerApiResponseProcessor} from "../apis/PhoneControllerApi.ts";
export class PromisePhoneControllerApi {
    private api: ObservablePhoneControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PhoneControllerApiRequestFactory,
        responseProcessor?: PhoneControllerApiResponseProcessor
    ) {
        this.api = new ObservablePhoneControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param createEmergencyAddressOptions 
     */
    public createEmergencyAddress(createEmergencyAddressOptions: CreateEmergencyAddressOptions, options?: Configuration): Promise<EmergencyAddress> {
        const result = this.api.createEmergencyAddress(createEmergencyAddressOptions, options);
        return result.toPromise();
    }

    /**
     * @param addressId 
     */
    public deleteEmergencyAddress(addressId: string, options?: Configuration): Promise<EmptyResponseDto> {
        const result = this.api.deleteEmergencyAddress(addressId, options);
        return result.toPromise();
    }

    /**
     * @param phoneNumberId 
     */
    public deletePhoneNumber(phoneNumberId: string, options?: Configuration): Promise<void> {
        const result = this.api.deletePhoneNumber(phoneNumberId, options);
        return result.toPromise();
    }

    /**
     * @param addressId 
     */
    public getEmergencyAddress(addressId: string, options?: Configuration): Promise<EmergencyAddress> {
        const result = this.api.getEmergencyAddress(addressId, options);
        return result.toPromise();
    }

    /**
     */
    public getEmergencyAddresses(options?: Configuration): Promise<Array<EmergencyAddressDto>> {
        const result = this.api.getEmergencyAddresses(options);
        return result.toPromise();
    }

    /**
     * @param phoneNumberId 
     */
    public getPhoneNumber(phoneNumberId: string, options?: Configuration): Promise<PhoneNumberDto> {
        const result = this.api.getPhoneNumber(phoneNumberId, options);
        return result.toPromise();
    }

    /**
     * @param phoneCountry Optional phone country
     * @param page Optional page index for list pagination
     * @param size Optional page size for list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getPhoneNumbers(phoneCountry?: 'US' | 'GB' | 'AU', page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PagePhoneNumberProjection> {
        const result = this.api.getPhoneNumbers(phoneCountry, page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     */
    public getPhonePlans(options?: Configuration): Promise<Array<PhonePlanDto>> {
        const result = this.api.getPhonePlans(options);
        return result.toPromise();
    }

    /**
     * @param phoneNumberId 
     * @param testPhoneNumberOptions 
     * @param xTestId 
     */
    public testPhoneNumberSendSms(phoneNumberId: string, testPhoneNumberOptions: TestPhoneNumberOptions, xTestId?: string, options?: Configuration): Promise<void> {
        const result = this.api.testPhoneNumberSendSms(phoneNumberId, testPhoneNumberOptions, xTestId, options);
        return result.toPromise();
    }


}



import { ObservableSentEmailsControllerApi } from './ObservableAPI.ts';

import { SentEmailsControllerApiRequestFactory, SentEmailsControllerApiResponseProcessor} from "../apis/SentEmailsControllerApi.ts";
export class PromiseSentEmailsControllerApi {
    private api: ObservableSentEmailsControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SentEmailsControllerApiRequestFactory,
        responseProcessor?: SentEmailsControllerApiResponseProcessor
    ) {
        this.api = new ObservableSentEmailsControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete all sent email receipts
     */
    public deleteAllSentEmails(options?: Configuration): Promise<void> {
        const result = this.api.deleteAllSentEmails(options);
        return result.toPromise();
    }

    /**
     * Delete sent email receipt
     * @param id 
     */
    public deleteSentEmail(id: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteSentEmail(id, options);
        return result.toPromise();
    }

    /**
     * Get all sent email tracking pixels in paginated form
     * @param page Optional page index in sent email tracking pixel list pagination
     * @param size Optional page size in sent email tracking pixel list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getAllSentTrackingPixels(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Promise<PageTrackingPixelProjection> {
        const result = this.api.getAllSentTrackingPixels(page, size, sort, searchFilter, since, before, options);
        return result.toPromise();
    }

    /**
     * Returns a raw, unparsed, and unprocessed sent email. If your client has issues processing the response it is likely due to the response content-type which is text/plain. If you need a JSON response content-type use the getRawSentEmailJson endpoint
     * Get raw sent email string. Returns unparsed raw SMTP message with headers and body.
     * @param emailId ID of email
     */
    public getRawSentEmailContents(emailId: string, options?: Configuration): Promise<void> {
        const result = this.api.getRawSentEmailContents(emailId, options);
        return result.toPromise();
    }

    /**
     * Returns a raw, unparsed, and unprocessed sent email wrapped in a JSON response object for easier handling when compared with the getRawSentEmail text/plain response
     * Get raw sent email in JSON. Unparsed SMTP message in JSON wrapper format.
     * @param emailId ID of email
     */
    public getRawSentEmailJson(emailId: string, options?: Configuration): Promise<RawEmailJson> {
        const result = this.api.getRawSentEmailJson(emailId, options);
        return result.toPromise();
    }

    /**
     * Get a sent email delivery status
     * @param deliveryId 
     */
    public getSentDeliveryStatus(deliveryId: string, options?: Configuration): Promise<DeliveryStatusDto> {
        const result = this.api.getSentDeliveryStatus(deliveryId, options);
        return result.toPromise();
    }

    /**
     * Get all sent email delivery statuses
     * @param page Optional page index in delivery status list pagination
     * @param size Optional page size in delivery status list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getSentDeliveryStatuses(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageDeliveryStatus> {
        const result = this.api.getSentDeliveryStatuses(page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Get all sent email delivery statuses
     * @param sentId ID of the sent email that you want to get the delivery status of. Sent email object is returned when sending an email
     * @param page Optional page index in delivery status list pagination
     * @param size Optional page size in delivery status list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getSentDeliveryStatusesBySentId(sentId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageDeliveryStatus> {
        const result = this.api.getSentDeliveryStatusesBySentId(sentId, page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Get sent email receipt
     * @param id 
     */
    public getSentEmail(id: string, options?: Configuration): Promise<SentEmailDto> {
        const result = this.api.getSentEmail(id, options);
        return result.toPromise();
    }

    /**
     * Get sent email HTML content
     * @param id 
     */
    public getSentEmailHTMLContent(id: string, options?: Configuration): Promise<string> {
        const result = this.api.getSentEmailHTMLContent(id, options);
        return result.toPromise();
    }

    /**
     * Get a list of URLs for sent email content as text/html or raw SMTP message for viewing the message in a browser.
     * Get sent email URL for viewing in browser or downloading
     * @param id 
     */
    public getSentEmailPreviewURLs(id: string, options?: Configuration): Promise<EmailPreviewUrls> {
        const result = this.api.getSentEmailPreviewURLs(id, options);
        return result.toPromise();
    }

    /**
     * Get all tracking pixels for a sent email in paginated form
     * @param id 
     * @param page Optional page index in sent email tracking pixel list pagination
     * @param size Optional page size in sent email tracking pixel list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getSentEmailTrackingPixels(id: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Promise<PageTrackingPixelProjection> {
        const result = this.api.getSentEmailTrackingPixels(id, page, size, sort, searchFilter, since, before, options);
        return result.toPromise();
    }

    /**
     * Get all sent emails in paginated form
     * @param inboxId Optional inboxId to filter sender of sent emails by
     * @param page Optional page index in inbox sent email list pagination
     * @param size Optional page size in inbox sent email list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getSentEmails(inboxId?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Promise<PageSentEmailProjection> {
        const result = this.api.getSentEmails(inboxId, page, size, sort, searchFilter, since, before, options);
        return result.toPromise();
    }

    /**
     * Get results of email sent with queues in paginated form
     * @param page Optional page index in inbox sent email list pagination
     * @param size Optional page size in inbox sent email list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getSentEmailsWithQueueResults(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageSentEmailWithQueueProjection> {
        const result = this.api.getSentEmailsWithQueueResults(page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Get all sent organization emails in paginated form
     * @param inboxId Optional inboxId to filter sender of sent emails by
     * @param page Optional page index in sent email list pagination
     * @param size Optional page size in sent email list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getSentOrganizationEmails(inboxId?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Promise<PageSentEmailProjection> {
        const result = this.api.getSentOrganizationEmails(inboxId, page, size, sort, searchFilter, since, before, options);
        return result.toPromise();
    }

    /**
     * Wait for delivery statuses
     * @param sentId Optional sent email ID filter
     * @param inboxId Optional inbox ID filter
     * @param timeout Optional timeout milliseconds
     * @param index Zero based index of the delivery status to wait for. If 1 delivery status already and you want to wait for the 2nd pass index&#x3D;1
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public waitForDeliveryStatuses(sentId?: string, inboxId?: string, timeout?: number, index?: number, since?: Date, before?: Date, options?: Configuration): Promise<DeliveryStatusDto> {
        const result = this.api.waitForDeliveryStatuses(sentId, inboxId, timeout, index, since, before, options);
        return result.toPromise();
    }


}



import { ObservableSmsControllerApi } from './ObservableAPI.ts';

import { SmsControllerApiRequestFactory, SmsControllerApiResponseProcessor} from "../apis/SmsControllerApi.ts";
export class PromiseSmsControllerApi {
    private api: ObservableSmsControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SmsControllerApiRequestFactory,
        responseProcessor?: SmsControllerApiResponseProcessor
    ) {
        this.api = new ObservableSmsControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete an SMS message
     * Delete SMS message.
     * @param smsId 
     */
    public deleteSmsMessage(smsId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteSmsMessage(smsId, options);
        return result.toPromise();
    }

    /**
     * Delete all SMS messages or all messages for a given phone number
     * Delete all SMS messages
     * @param phoneNumberId 
     */
    public deleteSmsMessages(phoneNumberId?: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteSmsMessages(phoneNumberId, options);
        return result.toPromise();
    }

    /**
     * Get reply for an SMS message.
     * Get reply for an SMS message
     * @param smsId 
     */
    public getReplyForSmsMessage(smsId: string, options?: Configuration): Promise<ReplyForSms> {
        const result = this.api.getReplyForSmsMessage(smsId, options);
        return result.toPromise();
    }

    /**
     * Get number of SMS
     * Get SMS count
     */
    public getSmsCount(options?: Configuration): Promise<CountDto> {
        const result = this.api.getSmsCount(options);
        return result.toPromise();
    }

    /**
     * Returns a SMS summary object with content.
     * Get SMS content including body. Expects SMS to exist by ID. For SMS that may not have arrived yet use the WaitForController.
     * @param smsId 
     */
    public getSmsMessage(smsId: string, options?: Configuration): Promise<SmsDto> {
        const result = this.api.getSmsMessage(smsId, options);
        return result.toPromise();
    }

    /**
     * By default returns all SMS messages across all phone numbers sorted by ascending created at date. Responses are paginated. You can restrict results to a list of phone number IDs. You can also filter out read messages
     * Get all SMS messages in all phone numbers in paginated form. .
     * @param phoneNumber Optional receiving phone number to filter SMS messages for
     * @param page Optional page index in SMS list pagination
     * @param size Optional page size in SMS list pagination. Maximum size is 100. Use page index and sort to page through larger results
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param unreadOnly Optional filter for unread SMS only. All SMS are considered unread until they are viewed in the dashboard or requested directly
     * @param since Optional filter SMSs received after given date time
     * @param before Optional filter SMSs received before given date time
     */
    public getSmsMessagesPaginated(phoneNumber?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', unreadOnly?: boolean, since?: Date, before?: Date, options?: Configuration): Promise<PageSmsProjection> {
        const result = this.api.getSmsMessagesPaginated(phoneNumber, page, size, sort, unreadOnly, since, before, options);
        return result.toPromise();
    }

    /**
     * Get number of SMS unread. Unread means has not been viewed in dashboard or returned in an email API response
     * Get unread SMS count
     */
    public getUnreadSmsCount(options?: Configuration): Promise<UnreadCount> {
        const result = this.api.getUnreadSmsCount(options);
        return result.toPromise();
    }

    /**
     * Reply to an SMS message.
     * Send a reply to a received SMS message. Replies are sent from the receiving number.
     * @param smsId 
     * @param smsReplyOptions 
     */
    public replyToSmsMessage(smsId: string, smsReplyOptions: SmsReplyOptions, options?: Configuration): Promise<SentSmsDto> {
        const result = this.api.replyToSmsMessage(smsId, smsReplyOptions, options);
        return result.toPromise();
    }


}



import { ObservableTemplateControllerApi } from './ObservableAPI.ts';

import { TemplateControllerApiRequestFactory, TemplateControllerApiResponseProcessor} from "../apis/TemplateControllerApi.ts";
export class PromiseTemplateControllerApi {
    private api: ObservableTemplateControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TemplateControllerApiRequestFactory,
        responseProcessor?: TemplateControllerApiResponseProcessor
    ) {
        this.api = new ObservableTemplateControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an email template with variables for use with templated transactional emails.
     * Create a Template
     * @param createTemplateOptions 
     */
    public createTemplate(createTemplateOptions: CreateTemplateOptions, options?: Configuration): Promise<TemplateDto> {
        const result = this.api.createTemplate(createTemplateOptions, options);
        return result.toPromise();
    }

    /**
     * Delete template
     * Delete email template
     * @param templateId Template ID
     */
    public deleteTemplate(templateId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteTemplate(templateId, options);
        return result.toPromise();
    }

    /**
     * Get all templates in paginated format
     * List templates
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getAllTemplates(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageTemplateProjection> {
        const result = this.api.getAllTemplates(page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Get email template
     * Get template
     * @param templateId Template ID
     */
    public getTemplate(templateId: string, options?: Configuration): Promise<TemplateDto> {
        const result = this.api.getTemplate(templateId, options);
        return result.toPromise();
    }

    /**
     * Get email template preview with passed template variables in HTML format for browsers. Pass template variables as query params.
     * Get template preview HTML
     * @param templateId Template ID
     */
    public getTemplatePreviewHtml(templateId: string, options?: Configuration): Promise<string> {
        const result = this.api.getTemplatePreviewHtml(templateId, options);
        return result.toPromise();
    }

    /**
     * Get email template preview with passed template variables in JSON format. Pass template variables as query params.
     * Get template preview Json
     * @param templateId Template ID
     */
    public getTemplatePreviewJson(templateId: string, options?: Configuration): Promise<TemplatePreview> {
        const result = this.api.getTemplatePreviewJson(templateId, options);
        return result.toPromise();
    }

    /**
     * Get all templates
     * List templates
     */
    public getTemplates(options?: Configuration): Promise<Array<TemplateProjection>> {
        const result = this.api.getTemplates(options);
        return result.toPromise();
    }

    /**
     * Update email template
     * Update template
     * @param templateId Template ID
     * @param createTemplateOptions 
     */
    public updateTemplate(templateId: string, createTemplateOptions: CreateTemplateOptions, options?: Configuration): Promise<TemplateDto> {
        const result = this.api.updateTemplate(templateId, createTemplateOptions, options);
        return result.toPromise();
    }


}



import { ObservableToolsControllerApi } from './ObservableAPI.ts';

import { ToolsControllerApiRequestFactory, ToolsControllerApiResponseProcessor} from "../apis/ToolsControllerApi.ts";
export class PromiseToolsControllerApi {
    private api: ObservableToolsControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ToolsControllerApiRequestFactory,
        responseProcessor?: ToolsControllerApiResponseProcessor
    ) {
        this.api = new ObservableToolsControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Check email client support for email HTML and CSS features
     * @param checkEmailFeaturesClientSupportOptions 
     */
    public checkEmailFeaturesClientSupport(checkEmailFeaturesClientSupportOptions: CheckEmailFeaturesClientSupportOptions, options?: Configuration): Promise<CheckEmailFeaturesClientSupportResults> {
        const result = this.api.checkEmailFeaturesClientSupport(checkEmailFeaturesClientSupportOptions, options);
        return result.toPromise();
    }

    /**
     * Create a new email address using the fake email domains
     */
    public createNewFakeEmailAddress(options?: Configuration): Promise<NewFakeEmailAddressResult> {
        const result = this.api.createNewFakeEmailAddress(options);
        return result.toPromise();
    }

    /**
     * Create a BIMI record policy
     * @param generateBimiRecordOptions 
     */
    public generateBimiRecord(generateBimiRecordOptions: GenerateBimiRecordOptions, options?: Configuration): Promise<GenerateBimiRecordResults> {
        const result = this.api.generateBimiRecord(generateBimiRecordOptions, options);
        return result.toPromise();
    }

    /**
     * Create a DMARC record policy
     * @param generateDmarcRecordOptions 
     */
    public generateDmarcRecord(generateDmarcRecordOptions: GenerateDmarcRecordOptions, options?: Configuration): Promise<GenerateDmarcRecordResults> {
        const result = this.api.generateDmarcRecord(generateDmarcRecordOptions, options);
        return result.toPromise();
    }

    /**
     * Create a TLS reporting record policy
     * @param generateMtaStsRecordOptions 
     */
    public generateMtaStsRecord(generateMtaStsRecordOptions: GenerateMtaStsRecordOptions, options?: Configuration): Promise<GenerateMtaStsRecordResults> {
        const result = this.api.generateMtaStsRecord(generateMtaStsRecordOptions, options);
        return result.toPromise();
    }

    /**
     * Create a TLS reporting record policy
     * @param generateTlsReportingRecordOptions 
     */
    public generateTlsReportingRecord(generateTlsReportingRecordOptions: GenerateTlsReportingRecordOptions, options?: Configuration): Promise<GenerateTlsReportingRecordResults> {
        const result = this.api.generateTlsReportingRecord(generateTlsReportingRecordOptions, options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public getFakeEmailById(id: string, options?: Configuration): Promise<FakeEmailResult> {
        const result = this.api.getFakeEmailById(id, options);
        return result.toPromise();
    }

    /**
     * @param emailAddress 
     * @param page 
     */
    public getFakeEmailsForAddress(emailAddress: string, page?: number, options?: Configuration): Promise<Array<FakeEmailPreview>> {
        const result = this.api.getFakeEmailsForAddress(emailAddress, page, options);
        return result.toPromise();
    }

    /**
     * Lookup a BIMI record policy
     * @param lookupBimiDomainOptions 
     */
    public lookupBimiDomain(lookupBimiDomainOptions: LookupBimiDomainOptions, options?: Configuration): Promise<LookupBimiDomainResults> {
        const result = this.api.lookupBimiDomain(lookupBimiDomainOptions, options);
        return result.toPromise();
    }

    /**
     * Lookup a DMARC record policy
     * @param lookupDmarcDomainOptions 
     */
    public lookupDmarcDomain(lookupDmarcDomainOptions: LookupDmarcDomainOptions, options?: Configuration): Promise<LookupDmarcDomainResults> {
        const result = this.api.lookupDmarcDomain(lookupDmarcDomainOptions, options);
        return result.toPromise();
    }

    /**
     * Lookup a MTA-STS domain policy
     * @param lookupMtaStsDomainOptions 
     */
    public lookupMtaStsDomain(lookupMtaStsDomainOptions: LookupMtaStsDomainOptions, options?: Configuration): Promise<LookupMtaStsDomainResults> {
        const result = this.api.lookupMtaStsDomain(lookupMtaStsDomainOptions, options);
        return result.toPromise();
    }

    /**
     * Lookup a TLS reporting domain policy
     * @param lookupTlsReportingDomainOptions 
     */
    public lookupTlsReportingDomain(lookupTlsReportingDomainOptions: LookupTlsReportingDomainOptions, options?: Configuration): Promise<LookupTlsReportingDomainResults> {
        const result = this.api.lookupTlsReportingDomain(lookupTlsReportingDomainOptions, options);
        return result.toPromise();
    }


}



import { ObservableTrackingControllerApi } from './ObservableAPI.ts';

import { TrackingControllerApiRequestFactory, TrackingControllerApiResponseProcessor} from "../apis/TrackingControllerApi.ts";
export class PromiseTrackingControllerApi {
    private api: ObservableTrackingControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TrackingControllerApiRequestFactory,
        responseProcessor?: TrackingControllerApiResponseProcessor
    ) {
        this.api = new ObservableTrackingControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a tracking pixel. A tracking pixel is an image that can be embedded in an email. When the email is viewed and the image is seen MailSlurp will mark the pixel as seen. Use tracking pixels to monitor email open events. You can receive open notifications via webhook or by fetching the pixel.
     * Create tracking pixel
     * @param createTrackingPixelOptions 
     */
    public createTrackingPixel(createTrackingPixelOptions: CreateTrackingPixelOptions, options?: Configuration): Promise<TrackingPixelDto> {
        const result = this.api.createTrackingPixel(createTrackingPixelOptions, options);
        return result.toPromise();
    }

    /**
     * List tracking pixels in paginated form
     * Get tracking pixels
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getAllTrackingPixels(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Promise<PageTrackingPixelProjection> {
        const result = this.api.getAllTrackingPixels(page, size, sort, searchFilter, since, before, options);
        return result.toPromise();
    }

    /**
     * Get pixel
     * @param id 
     */
    public getTrackingPixel(id: string, options?: Configuration): Promise<TrackingPixelDto> {
        const result = this.api.getTrackingPixel(id, options);
        return result.toPromise();
    }


}



import { ObservableUserControllerApi } from './ObservableAPI.ts';

import { UserControllerApiRequestFactory, UserControllerApiResponseProcessor} from "../apis/UserControllerApi.ts";
export class PromiseUserControllerApi {
    private api: ObservableUserControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UserControllerApiRequestFactory,
        responseProcessor?: UserControllerApiResponseProcessor
    ) {
        this.api = new ObservableUserControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Utility function to extract properties from JSON objects in language where this is cumbersome.
     * @param property JSON property name or dot separated path selector such as &#x60;a.b.c&#x60;
     * @param body 
     */
    public getJsonPropertyAsString(property: string, body: any, options?: Configuration): Promise<string> {
        const result = this.api.getJsonPropertyAsString(property, body, options);
        return result.toPromise();
    }

    /**
     * Get account information for your user
     */
    public getUserInfo(options?: Configuration): Promise<UserInfoDto> {
        const result = this.api.getUserInfo(options);
        return result.toPromise();
    }


}



import { ObservableWaitForControllerApi } from './ObservableAPI.ts';

import { WaitForControllerApiRequestFactory, WaitForControllerApiResponseProcessor} from "../apis/WaitForControllerApi.ts";
export class PromiseWaitForControllerApi {
    private api: ObservableWaitForControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WaitForControllerApiRequestFactory,
        responseProcessor?: WaitForControllerApiResponseProcessor
    ) {
        this.api = new ObservableWaitForControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Generic waitFor method that will wait until an inbox meets given conditions or return immediately if already met
     * Wait for an email to match the provided filter conditions such as subject contains keyword.
     * @param waitForConditions 
     */
    public waitFor(waitForConditions: WaitForConditions, options?: Configuration): Promise<Array<EmailPreview>> {
        const result = this.api.waitFor(waitForConditions, options);
        return result.toPromise();
    }

    /**
     * If inbox contains count or more emails at time of request then return count worth of emails. If not wait until the count is reached and return those or return an error if timeout is exceeded.
     * Wait for and return count number of emails. Hold connection until inbox count matches expected or timeout occurs
     * @param inboxId Id of the inbox we are fetching emails from
     * @param count Number of emails to wait for. Must be greater that 1
     * @param timeout Max milliseconds to wait
     * @param unreadOnly Optional filter for unread only
     * @param before Filter for emails that were received before the given timestamp
     * @param since Filter for emails that were received after the given timestamp
     * @param sort Sort direction
     * @param delay Max milliseconds delay between calls
     */
    public waitForEmailCount(inboxId: string, count: number, timeout?: number, unreadOnly?: boolean, before?: Date, since?: Date, sort?: 'ASC' | 'DESC', delay?: number, options?: Configuration): Promise<Array<EmailPreview>> {
        const result = this.api.waitForEmailCount(inboxId, count, timeout, unreadOnly, before, since, sort, delay, options);
        return result.toPromise();
    }

    /**
     * Will return either the last received email or wait for an email to arrive and return that. If you need to wait for an email for a non-empty inbox set `unreadOnly=true` or see the other receive methods such as `waitForNthEmail` or `waitForEmailCount`.
     * Fetch inbox's latest email or if empty wait for an email to arrive
     * @param inboxId Id of the inbox we are fetching emails from
     * @param timeout Max milliseconds to wait
     * @param unreadOnly Optional filter for unread only.
     * @param before Filter for emails that were before after the given timestamp
     * @param since Filter for emails that were received after the given timestamp
     * @param sort Sort direction
     * @param delay Max milliseconds delay between calls
     */
    public waitForLatestEmail(inboxId?: string, timeout?: number, unreadOnly?: boolean, before?: Date, since?: Date, sort?: 'ASC' | 'DESC', delay?: number, options?: Configuration): Promise<Email> {
        const result = this.api.waitForLatestEmail(inboxId, timeout, unreadOnly, before, since, sort, delay, options);
        return result.toPromise();
    }

    /**
     * Wait until a phone number meets given conditions or return immediately if already met
     * Wait for the latest SMS message to match the provided filter conditions such as body contains keyword.
     * @param waitForSingleSmsOptions 
     */
    public waitForLatestSms(waitForSingleSmsOptions: WaitForSingleSmsOptions, options?: Configuration): Promise<SmsDto> {
        const result = this.api.waitForLatestSms(waitForSingleSmsOptions, options);
        return result.toPromise();
    }

    /**
     * Perform a search of emails in an inbox with the given patterns. If results match expected count then return or else retry the search until results are found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options. An example payload is `{ matches: [{field: 'SUBJECT',should:'CONTAIN',value:'needle'}] }`. You can use an array of matches and they will be applied sequentially to filter out emails. If you want to perform matches and extractions of content using Regex patterns see the EmailController `getEmailContentMatch` method.
     * Wait or return list of emails that match simple matching patterns
     * @param inboxId Id of the inbox we are fetching emails from
     * @param count Number of emails to wait for. Must be greater or equal to 1
     * @param matchOptions 
     * @param before Filter for emails that were received before the given timestamp
     * @param since Filter for emails that were received after the given timestamp
     * @param sort Sort direction
     * @param delay Max milliseconds delay between calls
     * @param timeout Max milliseconds to wait
     * @param unreadOnly Optional filter for unread only
     */
    public waitForMatchingEmails(inboxId: string, count: number, matchOptions: MatchOptions, before?: Date, since?: Date, sort?: 'ASC' | 'DESC', delay?: number, timeout?: number, unreadOnly?: boolean, options?: Configuration): Promise<Array<EmailPreview>> {
        const result = this.api.waitForMatchingEmails(inboxId, count, matchOptions, before, since, sort, delay, timeout, unreadOnly, options);
        return result.toPromise();
    }

    /**
     * Perform a search of emails in an inbox with the given patterns. If a result if found then return or else retry the search until a result is found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options. An example payload is `{ matches: [{field: 'SUBJECT',should:'CONTAIN',value:'needle'}] }`. You can use an array of matches and they will be applied sequentially to filter out emails. If you want to perform matches and extractions of content using Regex patterns see the EmailController `getEmailContentMatch` method.
     * Wait for or return the first email that matches provided MatchOptions array
     * @param inboxId Id of the inbox we are matching an email for
     * @param matchOptions 
     * @param timeout Max milliseconds to wait
     * @param unreadOnly Optional filter for unread only
     * @param since Filter for emails that were received after the given timestamp
     * @param before Filter for emails that were received before the given timestamp
     * @param sort Sort direction
     * @param delay Max milliseconds delay between calls
     */
    public waitForMatchingFirstEmail(inboxId: string, matchOptions: MatchOptions, timeout?: number, unreadOnly?: boolean, since?: Date, before?: Date, sort?: 'ASC' | 'DESC', delay?: number, options?: Configuration): Promise<Email> {
        const result = this.api.waitForMatchingFirstEmail(inboxId, matchOptions, timeout, unreadOnly, since, before, sort, delay, options);
        return result.toPromise();
    }

    /**
     * If nth email is already present in inbox then return it. If not hold the connection open until timeout expires or the nth email is received and returned.
     * Wait for or fetch the email with a given index in the inbox specified. If index doesn't exist waits for it to exist or timeout to occur.
     * @param inboxId Id of the inbox you are fetching emails from
     * @param index Zero based index of the email to wait for. If an inbox has 1 email already and you want to wait for the 2nd email pass index&#x3D;1
     * @param timeout Max milliseconds to wait for the nth email if not already present
     * @param unreadOnly Optional filter for unread only
     * @param since Filter for emails that were received after the given timestamp
     * @param before Filter for emails that were received before the given timestamp
     * @param sort Sort direction
     * @param delay Max milliseconds delay between calls
     */
    public waitForNthEmail(inboxId?: string, index?: number, timeout?: number, unreadOnly?: boolean, since?: Date, before?: Date, sort?: 'ASC' | 'DESC', delay?: number, options?: Configuration): Promise<Email> {
        const result = this.api.waitForNthEmail(inboxId, index, timeout, unreadOnly, since, before, sort, delay, options);
        return result.toPromise();
    }

    /**
     * Generic waitFor method that will wait until a phone number meets given conditions or return immediately if already met
     * Wait for an SMS message to match the provided filter conditions such as body contains keyword.
     * @param waitForSmsConditions 
     */
    public waitForSms(waitForSmsConditions: WaitForSmsConditions, options?: Configuration): Promise<Array<SmsPreview>> {
        const result = this.api.waitForSms(waitForSmsConditions, options);
        return result.toPromise();
    }


}



import { ObservableWebhookControllerApi } from './ObservableAPI.ts';

import { WebhookControllerApiRequestFactory, WebhookControllerApiResponseProcessor} from "../apis/WebhookControllerApi.ts";
export class PromiseWebhookControllerApi {
    private api: ObservableWebhookControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WebhookControllerApiRequestFactory,
        responseProcessor?: WebhookControllerApiResponseProcessor
    ) {
        this.api = new ObservableWebhookControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get notified of account level events such as bounce and bounce recipient.
     * Attach a WebHook URL to an inbox
     * @param createWebhookOptions 
     */
    public createAccountWebhook(createWebhookOptions: CreateWebhookOptions, options?: Configuration): Promise<WebhookDto> {
        const result = this.api.createAccountWebhook(createWebhookOptions, options);
        return result.toPromise();
    }

    /**
     * Get notified whenever an inbox receives an email via a WebHook URL. An emailID will be posted to this URL every time an email is received for this inbox. The URL must be publicly reachable by the MailSlurp server. You can provide basicAuth values if you wish to secure this endpoint.
     * Attach a WebHook URL to an inbox
     * @param inboxId 
     * @param createWebhookOptions 
     */
    public createWebhook(inboxId: string, createWebhookOptions: CreateWebhookOptions, options?: Configuration): Promise<WebhookDto> {
        const result = this.api.createWebhook(inboxId, createWebhookOptions, options);
        return result.toPromise();
    }

    /**
     * Get notified whenever a phone number receives an SMS via a WebHook URL.
     * Attach a WebHook URL to a phone number
     * @param phoneNumberId 
     * @param createWebhookOptions 
     */
    public createWebhookForPhoneNumber(phoneNumberId: string, createWebhookOptions: CreateWebhookOptions, options?: Configuration): Promise<WebhookDto> {
        const result = this.api.createWebhookForPhoneNumber(phoneNumberId, createWebhookOptions, options);
        return result.toPromise();
    }

    /**
     * Delete all webhooks
     * @param before before
     */
    public deleteAllWebhooks(before?: Date, options?: Configuration): Promise<void> {
        const result = this.api.deleteAllWebhooks(before, options);
        return result.toPromise();
    }

    /**
     * Delete and disable a Webhook for an Inbox
     * @param inboxId 
     * @param webhookId 
     */
    public deleteWebhook(inboxId: string, webhookId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteWebhook(inboxId, webhookId, options);
        return result.toPromise();
    }

    /**
     * Delete a webhook
     * @param webhookId 
     */
    public deleteWebhookById(webhookId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteWebhookById(webhookId, options);
        return result.toPromise();
    }

    /**
     * List account webhooks in paginated form. Allows for page index, page size, and sort direction.
     * List account webhooks Paginated
     * @param page Optional page index in list pagination
     * @param size Optional page size for paginated result list.
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param eventType Optional event type
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getAllAccountWebhooks(page?: number, size?: number, sort?: 'ASC' | 'DESC', eventType?: 'EMAIL_RECEIVED' | 'NEW_EMAIL' | 'NEW_CONTACT' | 'NEW_ATTACHMENT' | 'EMAIL_OPENED' | 'EMAIL_READ' | 'DELIVERY_STATUS' | 'BOUNCE' | 'BOUNCE_RECIPIENT' | 'NEW_SMS', since?: Date, before?: Date, options?: Configuration): Promise<PageWebhookProjection> {
        const result = this.api.getAllAccountWebhooks(page, size, sort, eventType, since, before, options);
        return result.toPromise();
    }

    /**
     * Get results for all webhooks
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param unseenOnly Filter for unseen exceptions only
     * @param resultType Filter by result type
     * @param eventName Filter by event name
     * @param minStatusCode Minimum response status
     * @param maxStatusCode Maximum response status
     * @param inboxId Inbox ID
     * @param smsId Sms ID
     * @param attachmentId Attachment ID
     * @param emailId Email ID
     * @param phoneId Phone ID
     */
    public getAllWebhookResults(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, unseenOnly?: boolean, resultType?: 'BAD_RESPONSE' | 'EXCEPTION' | 'SUCCESS' | 'REDRIVEN', eventName?: 'EMAIL_RECEIVED' | 'NEW_EMAIL' | 'NEW_CONTACT' | 'NEW_ATTACHMENT' | 'EMAIL_OPENED' | 'EMAIL_READ' | 'DELIVERY_STATUS' | 'BOUNCE' | 'BOUNCE_RECIPIENT' | 'NEW_SMS', minStatusCode?: number, maxStatusCode?: number, inboxId?: string, smsId?: string, attachmentId?: string, emailId?: string, phoneId?: string, options?: Configuration): Promise<PageWebhookResult> {
        const result = this.api.getAllWebhookResults(page, size, sort, searchFilter, since, before, unseenOnly, resultType, eventName, minStatusCode, maxStatusCode, inboxId, smsId, attachmentId, emailId, phoneId, options);
        return result.toPromise();
    }

    /**
     * List webhooks in paginated form. Allows for page index, page size, and sort direction.
     * List Webhooks Paginated
     * @param page Optional page index in list pagination
     * @param size Optional page size for paginated result list.
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param inboxId Filter by inboxId
     * @param phoneId Filter by phoneId
     * @param before Filter by created at before the given timestamp
     */
    public getAllWebhooks(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, inboxId?: string, phoneId?: string, before?: Date, options?: Configuration): Promise<PageWebhookProjection> {
        const result = this.api.getAllWebhooks(page, size, sort, searchFilter, since, inboxId, phoneId, before, options);
        return result.toPromise();
    }

    /**
     * Get paginated webhooks for an Inbox
     * @param inboxId 
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getInboxWebhooksPaginated(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Promise<PageWebhookProjection> {
        const result = this.api.getInboxWebhooksPaginated(inboxId, page, size, sort, searchFilter, since, before, options);
        return result.toPromise();
    }

    /**
     * Get JSON Schema definition for webhook payload by event
     * @param event 
     */
    public getJsonSchemaForWebhookEvent(event: 'EMAIL_RECEIVED' | 'NEW_EMAIL' | 'NEW_CONTACT' | 'NEW_ATTACHMENT' | 'EMAIL_OPENED' | 'EMAIL_READ' | 'DELIVERY_STATUS' | 'BOUNCE' | 'BOUNCE_RECIPIENT' | 'NEW_SMS', options?: Configuration): Promise<JSONSchemaDto> {
        const result = this.api.getJsonSchemaForWebhookEvent(event, options);
        return result.toPromise();
    }

    /**
     * Get JSON Schema definition for webhook payload
     * @param webhookId 
     */
    public getJsonSchemaForWebhookPayload(webhookId: string, options?: Configuration): Promise<JSONSchemaDto> {
        const result = this.api.getJsonSchemaForWebhookPayload(webhookId, options);
        return result.toPromise();
    }

    /**
     * Get paginated webhooks for a phone number
     * @param phoneId 
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getPhoneNumberWebhooksPaginated(phoneId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageWebhookProjection> {
        const result = this.api.getPhoneNumberWebhooksPaginated(phoneId, page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Get test webhook payload example. Response content depends on eventName passed. Uses `EMAIL_RECEIVED` as default.
     * @param eventName 
     */
    public getTestWebhookPayload(eventName?: 'EMAIL_RECEIVED' | 'NEW_EMAIL' | 'NEW_CONTACT' | 'NEW_ATTACHMENT' | 'EMAIL_OPENED' | 'EMAIL_READ' | 'DELIVERY_STATUS' | 'BOUNCE' | 'BOUNCE_RECIPIENT' | 'NEW_SMS', options?: Configuration): Promise<AbstractWebhookPayload> {
        const result = this.api.getTestWebhookPayload(eventName, options);
        return result.toPromise();
    }

    /**
     * Get webhook test payload for bounce
     */
    public getTestWebhookPayloadBounce(options?: Configuration): Promise<WebhookBouncePayload> {
        const result = this.api.getTestWebhookPayloadBounce(options);
        return result.toPromise();
    }

    /**
     * Get webhook test payload for bounce recipient
     */
    public getTestWebhookPayloadBounceRecipient(options?: Configuration): Promise<WebhookBounceRecipientPayload> {
        const result = this.api.getTestWebhookPayloadBounceRecipient(options);
        return result.toPromise();
    }

    /**
     * Get webhook test payload for delivery status event
     */
    public getTestWebhookPayloadDeliveryStatus(options?: Configuration): Promise<WebhookDeliveryStatusPayload> {
        const result = this.api.getTestWebhookPayloadDeliveryStatus(options);
        return result.toPromise();
    }

    /**
     * Get webhook test payload for email opened event
     */
    public getTestWebhookPayloadEmailOpened(options?: Configuration): Promise<WebhookEmailOpenedPayload> {
        const result = this.api.getTestWebhookPayloadEmailOpened(options);
        return result.toPromise();
    }

    /**
     * Get webhook test payload for email opened event
     */
    public getTestWebhookPayloadEmailRead(options?: Configuration): Promise<WebhookEmailReadPayload> {
        const result = this.api.getTestWebhookPayloadEmailRead(options);
        return result.toPromise();
    }

    /**
     * Get example payload for webhook
     * @param webhookId 
     */
    public getTestWebhookPayloadForWebhook(webhookId: string, options?: Configuration): Promise<AbstractWebhookPayload> {
        const result = this.api.getTestWebhookPayloadForWebhook(webhookId, options);
        return result.toPromise();
    }

    /**
     * Get webhook test payload for new attachment event
     */
    public getTestWebhookPayloadNewAttachment(options?: Configuration): Promise<WebhookNewAttachmentPayload> {
        const result = this.api.getTestWebhookPayloadNewAttachment(options);
        return result.toPromise();
    }

    /**
     * Get webhook test payload for new contact event
     */
    public getTestWebhookPayloadNewContact(options?: Configuration): Promise<WebhookNewContactPayload> {
        const result = this.api.getTestWebhookPayloadNewContact(options);
        return result.toPromise();
    }

    /**
     * Get webhook test payload for new email event
     */
    public getTestWebhookPayloadNewEmail(options?: Configuration): Promise<WebhookNewEmailPayload> {
        const result = this.api.getTestWebhookPayloadNewEmail(options);
        return result.toPromise();
    }

    /**
     * Get webhook test payload for new sms event
     */
    public getTestWebhookPayloadNewSms(options?: Configuration): Promise<WebhookNewSmsPayload> {
        const result = this.api.getTestWebhookPayloadNewSms(options);
        return result.toPromise();
    }

    /**
     * Get a webhook
     * @param webhookId 
     */
    public getWebhook(webhookId: string, options?: Configuration): Promise<WebhookDto> {
        const result = this.api.getWebhook(webhookId, options);
        return result.toPromise();
    }

    /**
     * Get a webhook result for a webhook
     * @param webhookResultId Webhook Result ID
     */
    public getWebhookResult(webhookResultId: string, options?: Configuration): Promise<WebhookResultDto> {
        const result = this.api.getWebhookResult(webhookResultId, options);
        return result.toPromise();
    }

    /**
     * Get a webhook results for a webhook
     * @param webhookId ID of webhook to get results for
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param unseenOnly Filter for unseen exceptions only
     * @param resultType Filter by result type
     * @param eventName Filter by event name
     * @param minStatusCode Minimum response status
     * @param maxStatusCode Maximum response status
     * @param inboxId Inbox ID
     * @param smsId Sms ID
     * @param attachmentId Attachment ID
     * @param emailId Email ID
     * @param phoneId Phone ID
     */
    public getWebhookResults(webhookId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, unseenOnly?: boolean, resultType?: 'BAD_RESPONSE' | 'EXCEPTION' | 'SUCCESS' | 'REDRIVEN', eventName?: 'EMAIL_RECEIVED' | 'NEW_EMAIL' | 'NEW_CONTACT' | 'NEW_ATTACHMENT' | 'EMAIL_OPENED' | 'EMAIL_READ' | 'DELIVERY_STATUS' | 'BOUNCE' | 'BOUNCE_RECIPIENT' | 'NEW_SMS', minStatusCode?: number, maxStatusCode?: number, inboxId?: string, smsId?: string, attachmentId?: string, emailId?: string, phoneId?: string, options?: Configuration): Promise<PageWebhookResult> {
        const result = this.api.getWebhookResults(webhookId, page, size, sort, searchFilter, since, before, unseenOnly, resultType, eventName, minStatusCode, maxStatusCode, inboxId, smsId, attachmentId, emailId, phoneId, options);
        return result.toPromise();
    }

    /**
     * Get a webhook results count for a webhook
     * @param webhookId ID of webhook to get results for
     */
    public getWebhookResultsCount(webhookId: string, options?: Configuration): Promise<CountDto> {
        const result = this.api.getWebhookResultsCount(webhookId, options);
        return result.toPromise();
    }

    /**
     * Get count of unseen webhook results with error status
     */
    public getWebhookResultsUnseenErrorCount(options?: Configuration): Promise<UnseenErrorCountDto> {
        const result = this.api.getWebhookResultsUnseenErrorCount(options);
        return result.toPromise();
    }

    /**
     * Get all webhooks for an Inbox
     * @param inboxId 
     */
    public getWebhooks(inboxId: string, options?: Configuration): Promise<Array<WebhookDto>> {
        const result = this.api.getWebhooks(inboxId, options);
        return result.toPromise();
    }

    /**
     * Allows you to resend webhook payloads for any recorded webhook result that failed to deliver the payload.
     * Redrive all webhook results that have failed status
     */
    public redriveAllWebhookResults(options?: Configuration): Promise<WebhookRedriveAllResult> {
        const result = this.api.redriveAllWebhookResults(options);
        return result.toPromise();
    }

    /**
     * Allows you to resend a webhook payload that was already sent. Webhooks that fail are retried automatically for 24 hours and then put in a dead letter queue. You can retry results manually using this method.
     * Get a webhook result and try to resend the original webhook payload
     * @param webhookResultId Webhook Result ID
     */
    public redriveWebhookResult(webhookResultId: string, options?: Configuration): Promise<WebhookRedriveResult> {
        const result = this.api.redriveWebhookResult(webhookResultId, options);
        return result.toPromise();
    }

    /**
     * Send webhook test data
     * @param webhookId 
     */
    public sendTestData(webhookId: string, options?: Configuration): Promise<WebhookTestResult> {
        const result = this.api.sendTestData(webhookId, options);
        return result.toPromise();
    }

    /**
     * Update a webhook request headers
     * @param webhookId 
     * @param webhookHeaders 
     */
    public updateWebhookHeaders(webhookId: string, webhookHeaders: WebhookHeaders, options?: Configuration): Promise<WebhookDto> {
        const result = this.api.updateWebhookHeaders(webhookId, webhookHeaders, options);
        return result.toPromise();
    }

    /**
     * Verify a webhook payload using the messageId and signature. This allows you to be sure that MailSlurp sent the payload and not another server.
     * Verify a webhook payload signature
     * @param verifyWebhookSignatureOptions 
     */
    public verifyWebhookSignature(verifyWebhookSignatureOptions: VerifyWebhookSignatureOptions, options?: Configuration): Promise<VerifyWebhookSignatureResults> {
        const result = this.api.verifyWebhookSignature(verifyWebhookSignatureOptions, options);
        return result.toPromise();
    }

    /**
     * Wait for webhook results for a webhook
     * @param webhookId ID of webhook to get results for
     * @param expectedCount Expected result count
     * @param timeout Max time to wait in milliseconds
     */
    public waitForWebhookResults(webhookId: string, expectedCount: number, timeout: number, options?: Configuration): Promise<Array<WebhookResultDto>> {
        const result = this.api.waitForWebhookResults(webhookId, expectedCount, timeout, options);
        return result.toPromise();
    }


}



