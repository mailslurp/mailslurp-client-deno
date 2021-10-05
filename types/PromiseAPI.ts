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
import { BounceRecipient } from '../models/BounceRecipient.ts';
import { BouncedEmailDto } from '../models/BouncedEmailDto.ts';
import { BouncedRecipientDto } from '../models/BouncedRecipientDto.ts';
import { BulkSendEmailOptions } from '../models/BulkSendEmailOptions.ts';
import { ConditionOption } from '../models/ConditionOption.ts';
import { ContactDto } from '../models/ContactDto.ts';
import { ContactProjection } from '../models/ContactProjection.ts';
import { ContentMatchOptions } from '../models/ContentMatchOptions.ts';
import { CreateAliasOptions } from '../models/CreateAliasOptions.ts';
import { CreateContactOptions } from '../models/CreateContactOptions.ts';
import { CreateDomainOptions } from '../models/CreateDomainOptions.ts';
import { CreateGroupOptions } from '../models/CreateGroupOptions.ts';
import { CreateInboxDto } from '../models/CreateInboxDto.ts';
import { CreateInboxForwarderOptions } from '../models/CreateInboxForwarderOptions.ts';
import { CreateInboxRulesetOptions } from '../models/CreateInboxRulesetOptions.ts';
import { CreateTemplateOptions } from '../models/CreateTemplateOptions.ts';
import { CreateTrackingPixelOptions } from '../models/CreateTrackingPixelOptions.ts';
import { CreateWebhookOptions } from '../models/CreateWebhookOptions.ts';
import { DNSLookupOptions } from '../models/DNSLookupOptions.ts';
import { DNSLookupResult } from '../models/DNSLookupResult.ts';
import { DNSLookupResults } from '../models/DNSLookupResults.ts';
import { DescribeDomainOptions } from '../models/DescribeDomainOptions.ts';
import { DescribeMailServerDomainResult } from '../models/DescribeMailServerDomainResult.ts';
import { DomainDto } from '../models/DomainDto.ts';
import { DomainNameRecord } from '../models/DomainNameRecord.ts';
import { DomainPreview } from '../models/DomainPreview.ts';
import { DownloadAttachmentDto } from '../models/DownloadAttachmentDto.ts';
import { Email } from '../models/Email.ts';
import { EmailAnalysis } from '../models/EmailAnalysis.ts';
import { EmailContentMatchResult } from '../models/EmailContentMatchResult.ts';
import { EmailLinksResult } from '../models/EmailLinksResult.ts';
import { EmailPreview } from '../models/EmailPreview.ts';
import { EmailProjection } from '../models/EmailProjection.ts';
import { EmailRecipients } from '../models/EmailRecipients.ts';
import { EmailTextLinesResult } from '../models/EmailTextLinesResult.ts';
import { EmailVerificationResult } from '../models/EmailVerificationResult.ts';
import { ExpirationDefaults } from '../models/ExpirationDefaults.ts';
import { ExpiredInboxDto } from '../models/ExpiredInboxDto.ts';
import { ExpiredInboxRecordProjection } from '../models/ExpiredInboxRecordProjection.ts';
import { ExportLink } from '../models/ExportLink.ts';
import { ExportOptions } from '../models/ExportOptions.ts';
import { FlushExpiredInboxesResult } from '../models/FlushExpiredInboxesResult.ts';
import { ForwardEmailOptions } from '../models/ForwardEmailOptions.ts';
import { GravatarUrl } from '../models/GravatarUrl.ts';
import { GroupContactsDto } from '../models/GroupContactsDto.ts';
import { GroupDto } from '../models/GroupDto.ts';
import { GroupProjection } from '../models/GroupProjection.ts';
import { HTMLValidationResult } from '../models/HTMLValidationResult.ts';
import { IPAddressResult } from '../models/IPAddressResult.ts';
import { Inbox } from '../models/Inbox.ts';
import { InboxForwarderDto } from '../models/InboxForwarderDto.ts';
import { InboxForwarderTestOptions } from '../models/InboxForwarderTestOptions.ts';
import { InboxForwarderTestResult } from '../models/InboxForwarderTestResult.ts';
import { InboxPreview } from '../models/InboxPreview.ts';
import { InboxRulesetDto } from '../models/InboxRulesetDto.ts';
import { InboxRulesetTestOptions } from '../models/InboxRulesetTestOptions.ts';
import { InboxRulesetTestResult } from '../models/InboxRulesetTestResult.ts';
import { JSONSchemaDto } from '../models/JSONSchemaDto.ts';
import { MatchOption } from '../models/MatchOption.ts';
import { MatchOptions } from '../models/MatchOptions.ts';
import { MissedEmail } from '../models/MissedEmail.ts';
import { MissedEmailProjection } from '../models/MissedEmailProjection.ts';
import { NameServerRecord } from '../models/NameServerRecord.ts';
import { OrganizationInboxProjection } from '../models/OrganizationInboxProjection.ts';
import { PageAlias } from '../models/PageAlias.ts';
import { PageAttachmentEntity } from '../models/PageAttachmentEntity.ts';
import { PageBouncedEmail } from '../models/PageBouncedEmail.ts';
import { PageBouncedRecipients } from '../models/PageBouncedRecipients.ts';
import { PageContactProjection } from '../models/PageContactProjection.ts';
import { PageEmailPreview } from '../models/PageEmailPreview.ts';
import { PageEmailProjection } from '../models/PageEmailProjection.ts';
import { PageExpiredInboxRecordProjection } from '../models/PageExpiredInboxRecordProjection.ts';
import { PageGroupProjection } from '../models/PageGroupProjection.ts';
import { PageInboxForwarderDto } from '../models/PageInboxForwarderDto.ts';
import { PageInboxProjection } from '../models/PageInboxProjection.ts';
import { PageInboxRulesetDto } from '../models/PageInboxRulesetDto.ts';
import { PageMissedEmailProjection } from '../models/PageMissedEmailProjection.ts';
import { PageOrganizationInboxProjection } from '../models/PageOrganizationInboxProjection.ts';
import { PageSentEmailProjection } from '../models/PageSentEmailProjection.ts';
import { PageTemplateProjection } from '../models/PageTemplateProjection.ts';
import { PageThreadProjection } from '../models/PageThreadProjection.ts';
import { PageTrackingPixelProjection } from '../models/PageTrackingPixelProjection.ts';
import { PageUnknownMissedEmailProjection } from '../models/PageUnknownMissedEmailProjection.ts';
import { PageWebhookProjection } from '../models/PageWebhookProjection.ts';
import { PageWebhookResult } from '../models/PageWebhookResult.ts';
import { Pageable } from '../models/Pageable.ts';
import { RawEmailJson } from '../models/RawEmailJson.ts';
import { Recipient } from '../models/Recipient.ts';
import { ReplyToAliasEmailOptions } from '../models/ReplyToAliasEmailOptions.ts';
import { ReplyToEmailOptions } from '../models/ReplyToEmailOptions.ts';
import { SendEmailOptions } from '../models/SendEmailOptions.ts';
import { Sender } from '../models/Sender.ts';
import { SentEmailDto } from '../models/SentEmailDto.ts';
import { SentEmailProjection } from '../models/SentEmailProjection.ts';
import { SetInboxFavouritedOptions } from '../models/SetInboxFavouritedOptions.ts';
import { SimpleSendEmailOptions } from '../models/SimpleSendEmailOptions.ts';
import { Sort } from '../models/Sort.ts';
import { TemplateDto } from '../models/TemplateDto.ts';
import { TemplateProjection } from '../models/TemplateProjection.ts';
import { TemplateVariable } from '../models/TemplateVariable.ts';
import { TestNewInboxForwarderOptions } from '../models/TestNewInboxForwarderOptions.ts';
import { TestNewInboxRulesetOptions } from '../models/TestNewInboxRulesetOptions.ts';
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
import { UploadAttachmentOptions } from '../models/UploadAttachmentOptions.ts';
import { ValidationDto } from '../models/ValidationDto.ts';
import { ValidationMessage } from '../models/ValidationMessage.ts';
import { VerifyEmailAddressOptions } from '../models/VerifyEmailAddressOptions.ts';
import { WaitForConditions } from '../models/WaitForConditions.ts';
import { WebhookDto } from '../models/WebhookDto.ts';
import { WebhookEmailOpenedPayload } from '../models/WebhookEmailOpenedPayload.ts';
import { WebhookEmailReadPayload } from '../models/WebhookEmailReadPayload.ts';
import { WebhookNewAttachmentPayload } from '../models/WebhookNewAttachmentPayload.ts';
import { WebhookNewContactPayload } from '../models/WebhookNewContactPayload.ts';
import { WebhookNewEmailPayload } from '../models/WebhookNewEmailPayload.ts';
import { WebhookProjection } from '../models/WebhookProjection.ts';
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
     * @param createAliasOptions createAliasOptions
     */
    public createAlias(createAliasOptions: CreateAliasOptions, options?: Configuration): Promise<AliasDto> {
        const result = this.api.createAlias(createAliasOptions, options);
        return result.toPromise();
    }

    /**
     * Delete an email alias
     * @param aliasId aliasId
     */
    public deleteAlias(aliasId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteAlias(aliasId, options);
        return result.toPromise();
    }

    /**
     * Get an email alias by ID
     * Get an email alias
     * @param aliasId aliasId
     */
    public getAlias(aliasId: string, options?: Configuration): Promise<AliasDto> {
        const result = this.api.getAlias(aliasId, options);
        return result.toPromise();
    }

    /**
     * Get paginated emails for an alias by ID
     * Get emails for an alias
     * @param aliasId aliasId
     * @param before Optional filter by sent before given date time
     * @param page Optional page index alias email list pagination
     * @param since Optional filter by sent after given date time
     * @param size Optional page size alias email list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getAliasEmails(aliasId: string, before?: Date, page?: number, since?: Date, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageEmailProjection> {
        const result = this.api.getAliasEmails(aliasId, before, page, since, size, sort, options);
        return result.toPromise();
    }

    /**
     * Returns threads created for an email alias in paginated form
     * Get threads created for an alias
     * @param aliasId aliasId
     * @param before Optional filter by sent before given date time
     * @param page Optional page index in thread list pagination
     * @param since Optional filter by sent after given date time
     * @param size Optional page size in thread list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getAliasThreads(aliasId: string, before?: Date, page?: number, since?: Date, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageThreadProjection> {
        const result = this.api.getAliasThreads(aliasId, before, page, since, size, sort, options);
        return result.toPromise();
    }

    /**
     * Get all email aliases in paginated form
     * Get all email aliases you have created
     * @param before Filter by created at before the given timestamp
     * @param page Optional page index in alias list pagination
     * @param since Filter by created at after the given timestamp
     * @param size Optional page size in alias list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getAliases(before?: Date, page?: number, since?: Date, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageAlias> {
        const result = this.api.getAliases(before, page, since, size, sort, options);
        return result.toPromise();
    }

    /**
     * Send the reply to the email sender or reply-to and include same subject cc bcc etc. Reply to an email and the contents will be sent with the existing subject to the emails `to`, `cc`, and `bcc`.
     * Reply to an email
     * @param aliasId ID of the alias that email belongs to
     * @param emailId ID of the email that should be replied to
     * @param replyToAliasEmailOptions replyToAliasEmailOptions
     */
    public replyToAliasEmail(aliasId: string, emailId: string, replyToAliasEmailOptions: ReplyToAliasEmailOptions, options?: Configuration): Promise<void | SentEmailDto> {
        const result = this.api.replyToAliasEmail(aliasId, emailId, replyToAliasEmailOptions, options);
        return result.toPromise();
    }

    /**
     * Send an email from an alias. Replies to the email will be forwarded to the alias masked email address
     * Send an email from an alias inbox
     * @param aliasId aliasId
     * @param sendEmailOptions Options for the email to be sent
     */
    public sendAliasEmail(aliasId: string, sendEmailOptions?: SendEmailOptions, options?: Configuration): Promise<void | SentEmailDto> {
        const result = this.api.sendAliasEmail(aliasId, sendEmailOptions, options);
        return result.toPromise();
    }

    /**
     * Update an email alias
     * @param aliasId aliasId
     * @param updateAliasOptions updateAliasOptions
     */
    public updateAlias(aliasId: string, updateAliasOptions: UpdateAliasOptions, options?: Configuration): Promise<void | AliasDto> {
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
     * Email attachments are essentially files with meta data. Files are byte arrays and the meta data is a content type and a filename. These properties allow email clients to display the filename and icon etc. When sending emails with attachments first upload each attachment with an upload endpoint. Record the returned attachment ID and use it with subsequent email sending. For legacy reasons the ID is returned as the first element in an array. Only a single ID is ever returned. To send the attachments pass a list of attachment IDs with `SendEmailOptions` when sending an email. Using the upload endpoints prior to sending mean attachments can easily be reused.
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
    public downloadAttachmentAsBytes(attachmentId: string, options?: Configuration): Promise<string> {
        const result = this.api.downloadAttachmentAsBytes(attachmentId, options);
        return result.toPromise();
    }

    /**
     * Email attachments are essentially files with meta data. Files are byte arrays and the meta data is a content type and a filename. These properties allow email clients to display the filename and icon etc. When sending emails with attachments first upload each attachment with an upload endpoint. Record the returned attachment ID and use it with subsequent email sending. For legacy reasons the ID is returned as the first element in an array. Only a single ID is ever returned. To send the attachments pass a list of attachment IDs with `SendEmailOptions` when sending an email. Using the upload endpoints prior to sending mean attachments can easily be reused.
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
     * @param before Filter by created at before the given timestamp
     * @param fileNameFilter Optional file name and content type search filter
     * @param page Optional page index event list pagination
     * @param since Filter by created at after the given timestamp
     * @param size Optional page size event list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getAttachments(before?: Date, fileNameFilter?: string, page?: number, since?: Date, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageAttachmentEntity> {
        const result = this.api.getAttachments(before, fileNameFilter, page, since, size, sort, options);
        return result.toPromise();
    }

    /**
     * Email attachments are essentially files with meta data. Files are byte arrays and the meta data is a content type and a filename. These properties allow email clients to display the filename and icon etc. When sending emails with attachments first upload each attachment with an upload endpoint. Record the returned attachment ID and use it with subsequent email sending. For legacy reasons the ID is returned as the first element in an array. Only a single ID is ever returned. To send the attachments pass a list of attachment IDs with `SendEmailOptions` when sending an email. Using the upload endpoints prior to sending mean attachments can easily be reused.
     * Upload an attachment for sending using base64 file encoding. Returns an array whose first element is the ID of the uploaded attachment.
     * @param uploadOptions uploadOptions
     */
    public uploadAttachment(uploadOptions: UploadAttachmentOptions, options?: Configuration): Promise<Array<string>> {
        const result = this.api.uploadAttachment(uploadOptions, options);
        return result.toPromise();
    }

    /**
     * Email attachments are essentially files with meta data. Files are byte arrays and the meta data is a content type and a filename. These properties allow email clients to display the filename and icon etc. When sending emails with attachments first upload each attachment with an upload endpoint. Record the returned attachment ID and use it with subsequent email sending. For legacy reasons the ID is returned as the first element in an array. Only a single ID is ever returned. To send the attachments pass a list of attachment IDs with `SendEmailOptions` when sending an email. Using the upload endpoints prior to sending mean attachments can easily be reused.
     * Upload an attachment for sending using file byte stream input octet stream. Returns an array whose first element is the ID of the uploaded attachment.
     * @param contentType Optional contentType for file. For instance &#x60;application/pdf&#x60;
     * @param filename Optional filename to save upload with
     * @param byteArray Byte array request body
     */
    public uploadAttachmentBytes(contentType?: string, filename?: string, byteArray?: string, options?: Configuration): Promise<Array<string>> {
        const result = this.api.uploadAttachmentBytes(contentType, filename, byteArray, options);
        return result.toPromise();
    }

    /**
     * Email attachments are essentially files with meta data. Files are byte arrays and the meta data is a content type and a filename. These properties allow email clients to display the filename and icon etc. When sending emails with attachments first upload each attachment with an upload endpoint. Record the returned attachment ID and use it with subsequent email sending. For legacy reasons the ID is returned as the first element in an array. Only a single ID is ever returned. To send the attachments pass a list of attachment IDs with `SendEmailOptions` when sending an email. Using the upload endpoints prior to sending mean attachments can easily be reused.
     * Upload an attachment for sending using a Multipart Form request. Returns an array whose first element is the ID of the uploaded attachment.
     * @param file file
     * @param contentType Optional content type of attachment
     * @param filename Optional name of file
     * @param xFilename Optional content type header of attachment
     */
    public uploadMultipartForm(file: HttpFile, contentType?: string, filename?: string, xFilename?: string, options?: Configuration): Promise<Array<string>> {
        const result = this.api.uploadMultipartForm(file, contentType, filename, xFilename, options);
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
     * @param before Filter by created at before the given timestamp
     * @param page Optional page index 
     * @param since Filter by created at after the given timestamp
     * @param size Optional page size 
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getBouncedEmails(before?: Date, page?: number, since?: Date, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageBouncedEmail> {
        const result = this.api.getBouncedEmails(before, page, since, size, sort, options);
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
     * @param before Filter by created at before the given timestamp
     * @param page Optional page index 
     * @param since Filter by created at after the given timestamp
     * @param size Optional page size 
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getBouncedRecipients(before?: Date, page?: number, since?: Date, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageBouncedRecipients> {
        const result = this.api.getBouncedRecipients(before, page, since, size, sort, options);
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
    public bulkCreateInboxes(count: number, options?: Configuration): Promise<Array<Inbox>> {
        const result = this.api.bulkCreateInboxes(count, options);
        return result.toPromise();
    }

    /**
     * Bulk Delete Inboxes
     * @param ids ids
     */
    public bulkDeleteInboxes(ids: Array<string>, options?: Configuration): Promise<void> {
        const result = this.api.bulkDeleteInboxes(ids, options);
        return result.toPromise();
    }

    /**
     * Bulk Send Emails
     * @param bulkSendEmailOptions bulkSendEmailOptions
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
     * @param allowTeamAccess allowTeamAccess
     * @param description description
     * @param emailAddress emailAddress
     * @param expiresAt expiresAt
     * @param expiresIn expiresIn
     * @param favourite favourite
     * @param inboxType inboxType
     * @param name name
     * @param tags tags
     * @param useDomainPool useDomainPool
     */
    public createNewEmailAddress(allowTeamAccess?: boolean, description?: string, emailAddress?: string, expiresAt?: Date, expiresIn?: number, favourite?: boolean, inboxType?: 'HTTP_INBOX' | 'SMTP_INBOX', name?: string, tags?: Array<string>, useDomainPool?: boolean, options?: Configuration): Promise<Inbox> {
        const result = this.api.createNewEmailAddress(allowTeamAccess, description, emailAddress, expiresAt, expiresIn, favourite, inboxType, name, tags, useDomainPool, options);
        return result.toPromise();
    }

    /**
     * Returns an Inbox with an `id` and an `emailAddress`
     * Create new random inbox
     * @param allowTeamAccess allowTeamAccess
     * @param description description
     * @param emailAddress emailAddress
     * @param expiresAt expiresAt
     * @param expiresIn expiresIn
     * @param favourite favourite
     * @param inboxType inboxType
     * @param name name
     * @param tags tags
     * @param useDomainPool useDomainPool
     */
    public createNewEmailAddress1(allowTeamAccess?: boolean, description?: string, emailAddress?: string, expiresAt?: Date, expiresIn?: number, favourite?: boolean, inboxType?: 'HTTP_INBOX' | 'SMTP_INBOX', name?: string, tags?: Array<string>, useDomainPool?: boolean, options?: Configuration): Promise<Inbox> {
        const result = this.api.createNewEmailAddress1(allowTeamAccess, description, emailAddress, expiresAt, expiresIn, favourite, inboxType, name, tags, useDomainPool, options);
        return result.toPromise();
    }

    /**
     * Deletes all emails
     * Delete all emails in an inbox
     * @param inboxId inboxId
     */
    public emptyInbox(inboxId: string, options?: Configuration): Promise<void> {
        const result = this.api.emptyInbox(inboxId, options);
        return result.toPromise();
    }

    /**
     * If no senderId or inboxId provided a random email address will be used to send from.
     * Send an email
     * @param emailOptions emailOptions
     */
    public sendEmailSimple(emailOptions: SimpleSendEmailOptions, options?: Configuration): Promise<void> {
        const result = this.api.sendEmailSimple(emailOptions, options);
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
     * @param createContactOptions createContactOptions
     */
    public createContact(createContactOptions: CreateContactOptions, options?: Configuration): Promise<ContactDto> {
        const result = this.api.createContact(createContactOptions, options);
        return result.toPromise();
    }

    /**
     * Delete contact
     * @param contactId contactId
     */
    public deleteContact(contactId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteContact(contactId, options);
        return result.toPromise();
    }

    /**
     * Get all contacts
     * @param before Filter by created at before the given timestamp
     * @param page Optional page index in list pagination
     * @param since Filter by created at after the given timestamp
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getAllContacts(before?: Date, page?: number, since?: Date, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageContactProjection> {
        const result = this.api.getAllContacts(before, page, since, size, sort, options);
        return result.toPromise();
    }

    /**
     * Get contact
     * @param contactId contactId
     */
    public getContact(contactId: string, options?: Configuration): Promise<ContactDto> {
        const result = this.api.getContact(contactId, options);
        return result.toPromise();
    }

    /**
     * Get contact vCard vcf file
     * @param contactId contactId
     */
    public getContactVCard(contactId: string, options?: Configuration): Promise<string> {
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
     * @param id id
     */
    public addDomainWildcardCatchAll(id: string, options?: Configuration): Promise<void | DomainDto> {
        const result = this.api.addDomainWildcardCatchAll(id, options);
        return result.toPromise();
    }

    /**
     * Link a domain that you own with MailSlurp so you can create email addresses using it. Endpoint returns DNS records used for validation. You must add these verification records to your host provider's DNS setup to verify the domain.
     * Create Domain
     * @param domainOptions domainOptions
     */
    public createDomain(domainOptions: CreateDomainOptions, options?: Configuration): Promise<DomainDto> {
        const result = this.api.createDomain(domainOptions, options);
        return result.toPromise();
    }

    /**
     * Delete a domain. This will disable any existing inboxes that use this domain.
     * Delete a domain
     * @param id id
     */
    public deleteDomain(id: string, options?: Configuration): Promise<Array<string>> {
        const result = this.api.deleteDomain(id, options);
        return result.toPromise();
    }

    /**
     * Returns domain verification status and tokens for a given domain
     * Get a domain
     * @param id id
     */
    public getDomain(id: string, options?: Configuration): Promise<DomainDto> {
        const result = this.api.getDomain(id, options);
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
     * Update values on a domain. Note you cannot change the domain name as it is immutable. Recreate the domain if you need to alter this.
     * Update a domain
     * @param id id
     * @param updateDomainDto updateDomainDto
     */
    public updateDomain(id: string, updateDomainDto: UpdateDomainOptions, options?: Configuration): Promise<void | DomainDto> {
        const result = this.api.updateDomain(id, updateDomainDto, options);
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
     * @param attachmentId ID of attachment
     * @param emailId ID of email
     * @param apiKey Can pass apiKey in url for this request if you wish to download the file in a browser. Content type will be set to original content type of the attachment file. This is so that browsers can download the file correctly.
     */
    public downloadAttachment(attachmentId: string, emailId: string, apiKey?: string, options?: Configuration): Promise<string> {
        const result = this.api.downloadAttachment(attachmentId, emailId, apiKey, options);
        return result.toPromise();
    }

    /**
     * Returns the specified attachment for a given email as a base 64 encoded string. The response type is application/json. This method is similar to the `downloadAttachment` method but allows some clients to get around issues with binary responses.
     * Get email attachment as base64 encoded string as an alternative to binary responses. Decode the `base64FileContents` as a `utf-8` encoded string or array of bytes depending on the `contentType`.
     * @param attachmentId ID of attachment
     * @param emailId ID of email
     */
    public downloadAttachmentBase64(attachmentId: string, emailId: string, options?: Configuration): Promise<DownloadAttachmentDto> {
        const result = this.api.downloadAttachmentBase64(attachmentId, emailId, options);
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
    public downloadBodyBytes(emailId: string, options?: Configuration): Promise<string> {
        const result = this.api.downloadBodyBytes(emailId, options);
        return result.toPromise();
    }

    /**
     * Forward an existing email to new recipients. The sender of the email will be the inbox that received the email you are forwarding. You can override the sender with the `from` option. Note you must have access to the from address in MailSlurp to use the override. For more control consider fetching the email and sending it a new using the send email endpoints.
     * Forward email to recipients
     * @param emailId ID of email
     * @param forwardEmailOptions forwardEmailOptions
     */
    public forwardEmail(emailId: string, forwardEmailOptions: ForwardEmailOptions, options?: Configuration): Promise<SentEmailDto> {
        const result = this.api.forwardEmail(emailId, forwardEmailOptions, options);
        return result.toPromise();
    }

    /**
     * Returns the metadata such as name and content-type for a given attachment and email.
     * Get email attachment metadata. This is the `contentType` and `contentLength` of an attachment. To get the individual attachments  use the `downloadAttachment` methods.
     * @param attachmentId ID of attachment
     * @param emailId ID of email
     */
    public getAttachmentMetaData(attachmentId: string, emailId: string, options?: Configuration): Promise<AttachmentMetaData> {
        const result = this.api.getAttachmentMetaData(attachmentId, emailId, options);
        return result.toPromise();
    }

    /**
     * Returns an array of attachment metadata such as name and content-type for a given email if present.
     * Get all email attachment metadata. Metadata includes name and size of attachments.
     * @param emailId ID of email
     */
    public getAttachments1(emailId: string, options?: Configuration): Promise<Array<AttachmentMetaData>> {
        const result = this.api.getAttachments1(emailId, options);
        return result.toPromise();
    }

    /**
     * Returns a email summary object with headers and content. To retrieve the raw unparsed email use the getRawEmail endpoints
     * Get email content including headers and body. Expects email to exist by ID. For emails that may not have arrived yet use the WaitForController.
     * @param emailId emailId
     * @param decode Decode email body quoted-printable encoding to plain text. SMTP servers often encode text using quoted-printable format (for instance &#x60;&#x3D;D7&#x60;). This can be a pain for testing
     */
    public getEmail(emailId: string, decode?: boolean, options?: Configuration): Promise<Email> {
        const result = this.api.getEmail(emailId, decode, options);
        return result.toPromise();
    }

    /**
     * Return the matches for a given Java style regex pattern. Do not include the typical `/` at start or end of regex in some languages. Given an example `your code is: 12345` the pattern to extract match looks like `code is: (\\d{6})`. This will return an array of matches with the first matching the entire pattern and the subsequent matching the groups: `['code is: 123456', '123456']` See https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html for more information of available patterns. 
     * Get email content regex pattern match results. Runs regex against email body and returns match groups.
     * @param emailId ID of email to match against
     * @param contentMatchOptions contentMatchOptions
     */
    public getEmailContentMatch(emailId: string, contentMatchOptions: ContentMatchOptions, options?: Configuration): Promise<void | EmailContentMatchResult> {
        const result = this.api.getEmailContentMatch(emailId, contentMatchOptions, options);
        return result.toPromise();
    }

    /**
     * Retrieve email content as HTML response for viewing in browsers. Decodes quoted-printable entities and converts charset to UTF-8. Pass your API KEY as a request parameter when viewing in a browser: `?apiKey=xxx`
     * Get email content as HTML. For displaying emails in browser context.
     * @param emailId emailId
     * @param decode decode
     */
    public getEmailHTML(emailId: string, decode?: boolean, options?: Configuration): Promise<string> {
        const result = this.api.getEmailHTML(emailId, decode, options);
        return result.toPromise();
    }

    /**
     * Parse an email body and return the content as an array of text. HTML parsing uses JSoup which supports JQuery/CSS style selectors
     * Parse and return text from an email, stripping HTML and decoding encoded characters
     * @param emailId ID of email to perform HTML query on
     * @param htmlSelector HTML selector to search for. Uses JQuery/JSoup/CSS style selector like &#39;.my-div&#39; to match content. See https://jsoup.org/apidocs/org/jsoup/select/Selector.html for more information.
     */
    public getEmailHTMLQuery(emailId: string, htmlSelector?: string, options?: Configuration): Promise<EmailTextLinesResult> {
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
     * @param before Optional filter emails received before given date time
     * @param inboxId Optional inbox ids to filter by. Can be repeated. By default will use all inboxes belonging to your account.
     * @param page Optional page index in email list pagination
     * @param searchFilter Optional search filter. Searches email recipients, sender, subject, email address and ID. Does not search email body
     * @param since Optional filter emails received after given date time
     * @param size Optional page size in email list pagination. Maximum size is 100. Use page index and sort to page through larger results
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param unreadOnly Optional filter for unread emails only. All emails are considered unread until they are viewed in the dashboard or requested directly
     */
    public getEmailsPaginated(before?: Date, inboxId?: Array<string>, page?: number, searchFilter?: string, since?: Date, size?: number, sort?: 'ASC' | 'DESC', unreadOnly?: boolean, options?: Configuration): Promise<PageEmailProjection> {
        const result = this.api.getEmailsPaginated(before, inboxId, page, searchFilter, since, size, sort, unreadOnly, options);
        return result.toPromise();
    }

    /**
     * Get gravatar url for email address
     * @param emailAddress emailAddress
     * @param size size
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
    public getLatestEmailInInbox(inboxId?: string, options?: Configuration): Promise<Email> {
        const result = this.api.getLatestEmailInInbox(inboxId, options);
        return result.toPromise();
    }

    /**
     * By default returns all emails across all team inboxes sorted by ascending created at date. Responses are paginated. You can restrict results to a list of inbox IDs. You can also filter out read messages
     * Get all organization emails. List team or shared test email accounts
     * @param before Optional filter emails received before given date time
     * @param inboxId Optional inbox ids to filter by. Can be repeated. By default will use all inboxes belonging to your account.
     * @param page Optional page index in email list pagination
     * @param searchFilter Optional search filter search filter for emails.
     * @param since Optional filter emails received after given date time
     * @param size Optional page size in email list pagination. Maximum size is 100. Use page index and sort to page through larger results
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param unreadOnly Optional filter for unread emails only. All emails are considered unread until they are viewed in the dashboard or requested directly
     */
    public getOrganizationEmailsPaginated(before?: Date, inboxId?: Array<string>, page?: number, searchFilter?: string, since?: Date, size?: number, sort?: 'ASC' | 'DESC', unreadOnly?: boolean, options?: Configuration): Promise<PageEmailProjection> {
        const result = this.api.getOrganizationEmailsPaginated(before, inboxId, page, searchFilter, since, size, sort, unreadOnly, options);
        return result.toPromise();
    }

    /**
     * Returns a raw, unparsed, and unprocessed email. If your client has issues processing the response it is likely due to the response content-type which is text/plain. If you need a JSON response content-type use the getRawEmailJson endpoint
     * Get raw email string. Returns unparsed raw SMTP message with headers and body.
     * @param emailId ID of email
     */
    public getRawEmailContents(emailId: string, options?: Configuration): Promise<string> {
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
     * @param emailId emailId
     * @param read What value to assign to email read property. Default true.
     */
    public markAsRead(emailId: string, read?: boolean, options?: Configuration): Promise<void | EmailPreview> {
        const result = this.api.markAsRead(emailId, read, options);
        return result.toPromise();
    }

    /**
     * Send the reply to the email sender or reply-to and include same subject cc bcc etc. Reply to an email and the contents will be sent with the existing subject to the emails `to`, `cc`, and `bcc`.
     * Reply to an email
     * @param emailId ID of the email that should be replied to
     * @param replyToEmailOptions replyToEmailOptions
     */
    public replyToEmail(emailId: string, replyToEmailOptions: ReplyToEmailOptions, options?: Configuration): Promise<void | SentEmailDto> {
        const result = this.api.replyToEmail(emailId, replyToEmailOptions, options);
        return result.toPromise();
    }

    /**
     * Alias for `InboxController.sendEmail` method - see original method for full details. Sends an email from a given inbox that you have created. If no inbox is supplied a random inbox will be created for you and used to send the email.
     * Send email
     * @param inboxId ID of the inbox you want to send the email from
     * @param useDomainPool Use domain pool. Optionally create inbox to send from using the mailslurp domain pool.
     * @param sendEmailOptions Options for the email
     */
    public sendEmailSourceOptional(inboxId?: string, useDomainPool?: boolean, sendEmailOptions?: SendEmailOptions, options?: Configuration): Promise<void> {
        const result = this.api.sendEmailSourceOptional(inboxId, useDomainPool, sendEmailOptions, options);
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
     * @param expiredId ID of the ExpiredInboxRecord you want to retrieve. This is different from the ID of the inbox you are interested in. See other methods for getting ExpiredInboxRecord for an inbox inboxId)
     */
    public getExpiredInboxRecord(expiredId: string, options?: Configuration): Promise<ExpiredInboxDto> {
        const result = this.api.getExpiredInboxRecord(expiredId, options);
        return result.toPromise();
    }

    /**
     * Inboxes created with an expiration date will expire after the given date. An ExpiredInboxRecord is created that records the inboxes old ID and email address. You can still read emails in the inbox (using the inboxes old ID) but the email address associated with the inbox can no longer send or receive emails. Fetch expired inbox records to view the old inboxes properties
     * List records of expired inboxes
     * @param before Filter by created at before the given timestamp
     * @param page Optional page index in inbox sent email list pagination
     * @param since Filter by created at after the given timestamp
     * @param size Optional page size in inbox sent email list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getExpiredInboxes(before?: Date, page?: number, since?: Date, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageExpiredInboxRecordProjection> {
        const result = this.api.getExpiredInboxes(before, page, since, size, sort, options);
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
     * @param apiKey apiKey
     * @param exportType exportType
     * @param outputFormat outputFormat
     * @param createdEarliestTime createdEarliestTime
     * @param createdOldestTime createdOldestTime
     * @param excludePreviouslyExported excludePreviouslyExported
     * @param filter filter
     * @param listSeparatorToken listSeparatorToken
     */
    public exportEntities(apiKey: string, exportType: 'INBOXES' | 'CONTACTS' | 'ATTACHMENTS' | 'EMAILS', outputFormat: 'CSV_DEFAULT' | 'CSV_EXCEL', createdEarliestTime?: Date, createdOldestTime?: Date, excludePreviouslyExported?: boolean, filter?: string, listSeparatorToken?: string, options?: Configuration): Promise<string> {
        const result = this.api.exportEntities(apiKey, exportType, outputFormat, createdEarliestTime, createdOldestTime, excludePreviouslyExported, filter, listSeparatorToken, options);
        return result.toPromise();
    }

    /**
     * Get export link
     * @param exportType exportType
     * @param exportOptions exportOptions
     * @param apiKey apiKey
     */
    public getExportLink(exportType: 'INBOXES' | 'CONTACTS' | 'ATTACHMENTS' | 'EMAILS', exportOptions: ExportOptions, apiKey?: string, options?: Configuration): Promise<void | ExportLink> {
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
     * @param emailAddress Email address of the submitting user. Include this if you wish to record the submitters email address and reply to it later.
     * @param redirectTo Optional URL to redirect form submitter to after submission. If not present user will see a success message.
     * @param spamCheck Optional but recommended field that catches spammers out. Include as a hidden form field but LEAVE EMPTY. Spam-bots will usually fill every field. If the _spamCheck field is filled the form submission will be ignored.
     * @param subject Optional subject of the email that will be sent.
     * @param successMessage Optional success message to display if no _redirectTo present.
     * @param to The email address that submitted form should be sent to.
     * @param otherParameters All other parameters or fields will be accepted and attached to the sent email. This includes files and any HTML form field with a name. These fields will become the body of the email that is sent.
     */
    public submitForm(emailAddress?: string, redirectTo?: string, spamCheck?: string, subject?: string, successMessage?: string, to?: string, otherParameters?: string, options?: Configuration): Promise<void | string> {
        const result = this.api.submitForm(emailAddress, redirectTo, spamCheck, subject, successMessage, to, otherParameters, options);
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
     * @param groupId groupId
     * @param updateGroupContactsOption updateGroupContactsOption
     */
    public addContactsToGroup(groupId: string, updateGroupContactsOption: UpdateGroupContacts, options?: Configuration): Promise<void | GroupContactsDto> {
        const result = this.api.addContactsToGroup(groupId, updateGroupContactsOption, options);
        return result.toPromise();
    }

    /**
     * Create a group
     * @param createGroupOptions createGroupOptions
     */
    public createGroup(createGroupOptions: CreateGroupOptions, options?: Configuration): Promise<GroupDto> {
        const result = this.api.createGroup(createGroupOptions, options);
        return result.toPromise();
    }

    /**
     * Delete group
     * @param groupId groupId
     */
    public deleteGroup(groupId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteGroup(groupId, options);
        return result.toPromise();
    }

    /**
     * Get all Contact Groups in paginated format
     * @param before Filter by created at before the given timestamp
     * @param page Optional page index in list pagination
     * @param since Filter by created at after the given timestamp
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getAllGroups(before?: Date, page?: number, since?: Date, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageGroupProjection> {
        const result = this.api.getAllGroups(before, page, since, size, sort, options);
        return result.toPromise();
    }

    /**
     * Get group
     * @param groupId groupId
     */
    public getGroup(groupId: string, options?: Configuration): Promise<GroupDto> {
        const result = this.api.getGroup(groupId, options);
        return result.toPromise();
    }

    /**
     * Get group and contacts belonging to it
     * @param groupId groupId
     */
    public getGroupWithContacts(groupId: string, options?: Configuration): Promise<GroupContactsDto> {
        const result = this.api.getGroupWithContacts(groupId, options);
        return result.toPromise();
    }

    /**
     * Get group and paginated contacts belonging to it
     * @param groupId groupId
     * @param before Filter by created at before the given timestamp
     * @param page Optional page index in group contact pagination
     * @param since Filter by created at after the given timestamp
     * @param size Optional page size in group contact pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getGroupWithContactsPaginated(groupId: string, before?: Date, page?: number, since?: Date, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageContactProjection> {
        const result = this.api.getGroupWithContactsPaginated(groupId, before, page, since, size, sort, options);
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
     * @param groupId groupId
     * @param updateGroupContactsOption updateGroupContactsOption
     */
    public removeContactsFromGroup(groupId: string, updateGroupContactsOption: UpdateGroupContacts, options?: Configuration): Promise<void | GroupContactsDto> {
        const result = this.api.removeContactsFromGroup(groupId, updateGroupContactsOption, options);
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
     * Create a new inbox and with a randomized email address to send and receive from. Pass emailAddress parameter if you wish to use a specific email address. Creating an inbox is required before sending or receiving emails. If writing tests it is recommended that you create a new inbox during each test method so that it is unique and empty. 
     * Create an inbox email address. An inbox has a real email address and can send and receive emails. Inboxes can be either `SMTP` or `HTTP` inboxes.
     * @param allowTeamAccess DEPRECATED (team access is always true). Grant team access to this inbox and the emails that belong to it for team members of your organization.
     * @param description Optional description of the inbox for labelling purposes. Is shown in the dashboard and can be used with
     * @param emailAddress A custom email address to use with the inbox. Defaults to null. When null MailSlurp will assign a random email address to the inbox such as &#x60;123@mailslurp.com&#x60;. If you use the &#x60;useDomainPool&#x60; option when the email address is null it will generate an email address with a more varied domain ending such as &#x60;123@mailslurp.info&#x60; or &#x60;123@mailslurp.biz&#x60;. When a custom email address is provided the address is split into a domain and the domain is queried against your user. If you have created the domain in the MailSlurp dashboard and verified it you can use any email address that ends with the domain. Note domain types must match the inbox type - so &#x60;SMTP&#x60; inboxes will only work with &#x60;SMTP&#x60; type domains. Send an email to this address and the inbox will receive and store it for you. To retrieve the email use the Inbox and Email Controller endpoints with the inbox ID.
     * @param expiresAt Optional inbox expiration date. If null then this inbox is permanent and the emails in it won&#39;t be deleted. If an expiration date is provided or is required by your plan the inbox will be closed when the expiration time is reached. Expired inboxes still contain their emails but can no longer send or receive emails. An ExpiredInboxRecord is created when an inbox and the email address and inbox ID are recorded. The expiresAt property is a timestamp string in ISO DateTime Format yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSXXX.
     * @param expiresIn Number of milliseconds that inbox should exist for
     * @param favourite Is the inbox a favorite. Marking an inbox as a favorite is typically done in the dashboard for quick access or filtering
     * @param inboxType HTTP (default) or SMTP inbox type. HTTP inboxes are best for testing while SMTP inboxes are more reliable for public inbound email consumption. When using custom domains the domain type must match the inbox type. HTTP inboxes are processed by AWS SES while SMTP inboxes use a custom mail server running at &#x60;mx.mailslurp.com&#x60;.
     * @param name Optional name of the inbox. Displayed in the dashboard for easier search and used as the sender name when sending emails.
     * @param tags Tags that inbox has been tagged with. Tags can be added to inboxes to group different inboxes within an account. You can also search for inboxes by tag in the dashboard UI.
     * @param useDomainPool Use the MailSlurp domain name pool with this inbox when creating the email address. Defaults to null. If enabled the inbox will be an email address with a domain randomly chosen from a list of the MailSlurp domains. This is useful when the default &#x60;@mailslurp.com&#x60; email addresses used with inboxes are blocked or considered spam by a provider or receiving service. When domain pool is enabled an email address will be generated ending in &#x60;@mailslurp.{world,info,xyz,...}&#x60; . This means a TLD is randomly selecting from a list of &#x60;.biz&#x60;, &#x60;.info&#x60;, &#x60;.xyz&#x60; etc to add variance to the generated email addresses. When null or false MailSlurp uses the default behavior of &#x60;@mailslurp.com&#x60; or custom email address provided by the emailAddress field. Note this feature is only available for &#x60;HTTP&#x60; inbox types.
     */
    public createInbox(allowTeamAccess?: boolean, description?: string, emailAddress?: string, expiresAt?: Date, expiresIn?: number, favourite?: boolean, inboxType?: 'HTTP_INBOX' | 'SMTP_INBOX', name?: string, tags?: Array<string>, useDomainPool?: boolean, options?: Configuration): Promise<Inbox> {
        const result = this.api.createInbox(allowTeamAccess, description, emailAddress, expiresAt, expiresIn, favourite, inboxType, name, tags, useDomainPool, options);
        return result.toPromise();
    }

    /**
     * Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving
     * Create an inbox ruleset
     * @param inboxId inboxId
     * @param createInboxRulesetOptions createInboxRulesetOptions
     */
    public createInboxRuleset(inboxId: string, createInboxRulesetOptions: CreateInboxRulesetOptions, options?: Configuration): Promise<void | InboxRulesetDto> {
        const result = this.api.createInboxRuleset(inboxId, createInboxRulesetOptions, options);
        return result.toPromise();
    }

    /**
     * Create an inbox with default options. Uses MailSlurp domain pool address and is private.
     */
    public createInboxWithDefaults(options?: Configuration): Promise<Inbox> {
        const result = this.api.createInboxWithDefaults(options);
        return result.toPromise();
    }

    /**
     * Additional endpoint that allows inbox creation with request body options. Can be more flexible that other methods for some clients.
     * Create an inbox with options. Extended options for inbox creation.
     * @param createInboxDto createInboxDto
     */
    public createInboxWithOptions(createInboxDto: CreateInboxDto, options?: Configuration): Promise<Inbox> {
        const result = this.api.createInboxWithOptions(createInboxDto, options);
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
     * Permanently delete an inbox and associated email address as well as all emails within the given inbox. This action cannot be undone. Note: deleting an inbox will not affect your account usage. Monthly inbox usage is based on how many inboxes you create within 30 days, not how many exist at time of request.
     * Delete inbox
     * @param inboxId inboxId
     */
    public deleteInbox(inboxId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteInbox(inboxId, options);
        return result.toPromise();
    }

    /**
     * Remove any expired inboxes for your account (instead of waiting for scheduled removal on server)
     * Remove expired inboxes
     * @param before Optional expired at before flag to flush expired inboxes that have expired before the given time
     */
    public flushExpired(before?: Date, options?: Configuration): Promise<FlushExpiredInboxesResult | void> {
        const result = this.api.flushExpired(before, options);
        return result.toPromise();
    }

    /**
     * List inboxes in paginated form. The results are available on the `content` property of the returned object. This method allows for page index (zero based), page size (how many results to return), and a sort direction (based on createdAt time). You Can also filter by whether an inbox is favorited or use email address pattern. This method is the recommended way to query inboxes. The alternative `getInboxes` method returns a full list of inboxes but is limited to 100 results.
     * List All Inboxes Paginated
     * @param before Optional filter by created before given date time
     * @param favourite Optionally filter results for favourites only
     * @param page Optional page index in list pagination
     * @param search Optionally filter by search words partial matching ID, tags, name, and email address
     * @param since Optional filter by created after given date time
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param tag Optionally filter by tags. Will return inboxes that include given tags
     * @param teamAccess DEPRECATED. Optionally filter by team access.
     */
    public getAllInboxes(before?: Date, favourite?: boolean, page?: number, search?: string, since?: Date, size?: number, sort?: 'ASC' | 'DESC', tag?: string, teamAccess?: boolean, options?: Configuration): Promise<PageInboxProjection> {
        const result = this.api.getAllInboxes(before, favourite, page, search, since, size, sort, tag, teamAccess, options);
        return result.toPromise();
    }

    /**
     * List emails that an inbox has received. Only emails that are sent to the inbox's email address will appear in the inbox. It may take several seconds for any email you send to an inbox's email address to appear in the inbox. To make this endpoint wait for a minimum number of emails use the `minCount` parameter. The server will retry the inbox database until the `minCount` is satisfied or the `retryTimeout` is reached
     * Get emails in an Inbox. This method is not idempotent as it allows retries and waits if you want certain conditions to be met before returning. For simple listing and sorting of known emails use the email controller instead.
     * @param inboxId Id of inbox that emails belongs to
     * @param before Exclude emails received after this ISO 8601 date time
     * @param delayTimeout delayTimeout
     * @param limit Limit the result set, ordered by received date time sort direction. Maximum 100. For more listing options see the email controller
     * @param minCount Minimum acceptable email count. Will cause request to hang (and retry) until minCount is satisfied or retryTimeout is reached.
     * @param retryTimeout Maximum milliseconds to spend retrying inbox database until minCount emails are returned
     * @param since Exclude emails received before this ISO 8601 date time
     * @param size Alias for limit. Assessed first before assessing any passed limit.
     * @param sort Sort the results by received date and direction ASC or DESC
     * @param unreadOnly unreadOnly
     */
    public getEmails(inboxId: string, before?: Date, delayTimeout?: number, limit?: number, minCount?: number, retryTimeout?: number, since?: Date, size?: number, sort?: 'ASC' | 'DESC', unreadOnly?: boolean, options?: Configuration): Promise<Array<EmailPreview>> {
        const result = this.api.getEmails(inboxId, before, delayTimeout, limit, minCount, retryTimeout, since, size, sort, unreadOnly, options);
        return result.toPromise();
    }

    /**
     * Returns an inbox's properties, including its email address and ID.
     * Get Inbox. Returns properties of an inbox.
     * @param inboxId inboxId
     */
    public getInbox(inboxId: string, options?: Configuration): Promise<Inbox> {
        const result = this.api.getInbox(inboxId, options);
        return result.toPromise();
    }

    /**
     * Get a paginated list of emails in an inbox. Does not hold connections open.
     * Get inbox emails paginated
     * @param inboxId Id of inbox that emails belongs to
     * @param before Optional filter by received before given date time
     * @param page Optional page index in inbox emails list pagination
     * @param since Optional filter by received after given date time
     * @param size Optional page size in inbox emails list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getInboxEmailsPaginated(inboxId: string, before?: Date, page?: number, since?: Date, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageEmailPreview> {
        const result = this.api.getInboxEmailsPaginated(inboxId, before, page, since, size, sort, options);
        return result.toPromise();
    }

    /**
     * Returns an inbox's sent email receipts. Call individual sent email endpoints for more details. Note for privacy reasons the full body of sent emails is never stored. An MD5 hash hex is available for comparison instead.
     * Get Inbox Sent Emails
     * @param inboxId inboxId
     * @param before Optional filter by sent before given date time
     * @param page Optional page index in inbox sent email list pagination
     * @param searchFilter Optional sent email search
     * @param since Optional filter by sent after given date time
     * @param size Optional page size in inbox sent email list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getInboxSentEmails(inboxId: string, before?: Date, page?: number, searchFilter?: string, since?: Date, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageSentEmailProjection> {
        const result = this.api.getInboxSentEmails(inboxId, before, page, searchFilter, since, size, sort, options);
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
     * List the inboxes you have created. Note use of the more advanced `getAllEmails` is recommended and allows paginated access using a limit and sort parameter.
     * List Inboxes and email addresses
     * @param before Optional filter by created before given date time
     * @param since Optional filter by created after given date time
     * @param size Optional result size limit. Note an automatic limit of 100 results is applied. See the paginated &#x60;getAllEmails&#x60; for larger queries.
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getInboxes(before?: Date, since?: Date, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<Array<Inbox>> {
        const result = this.api.getInboxes(before, since, size, sort, options);
        return result.toPromise();
    }

    /**
     * List organization inboxes in paginated form. These are inboxes created with `allowTeamAccess` flag enabled. Organization inboxes are `readOnly` for non-admin users. The results are available on the `content` property of the returned object. This method allows for page index (zero based), page size (how many results to return), and a sort direction (based on createdAt time). 
     * List Organization Inboxes Paginated
     * @param before Optional filter by created before given date time
     * @param page Optional page index in list pagination
     * @param searchFilter Optional search filter
     * @param since Optional filter by created after given date time
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getOrganizationInboxes(before?: Date, page?: number, searchFilter?: string, since?: Date, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageOrganizationInboxProjection> {
        const result = this.api.getOrganizationInboxes(before, page, searchFilter, since, size, sort, options);
        return result.toPromise();
    }

    /**
     * List all rulesets attached to an inbox
     * List inbox rulesets
     * @param inboxId inboxId
     * @param before Optional filter by created before given date time
     * @param page Optional page index in inbox ruleset list pagination
     * @param searchFilter Optional search filter
     * @param since Optional filter by created after given date time
     * @param size Optional page size in inbox ruleset list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public listInboxRulesets(inboxId: string, before?: Date, page?: number, searchFilter?: string, since?: Date, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageInboxRulesetDto> {
        const result = this.api.listInboxRulesets(inboxId, before, page, searchFilter, since, size, sort, options);
        return result.toPromise();
    }

    /**
     * List all tracking pixels sent from an inbox
     * List inbox tracking pixels
     * @param inboxId inboxId
     * @param before Optional filter by created before given date time
     * @param page Optional page index in inbox tracking pixel list pagination
     * @param searchFilter Optional search filter
     * @param since Optional filter by created after given date time
     * @param size Optional page size in inbox tracking pixel list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public listInboxTrackingPixels(inboxId: string, before?: Date, page?: number, searchFilter?: string, since?: Date, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageTrackingPixelProjection> {
        const result = this.api.listInboxTrackingPixels(inboxId, before, page, searchFilter, since, size, sort, options);
        return result.toPromise();
    }

    /**
     * Send an email from an inbox's email address.  The request body should contain the `SendEmailOptions` that include recipients, attachments, body etc. See `SendEmailOptions` for all available properties. Note the `inboxId` refers to the inbox's id not the inbox's email address. See https://www.mailslurp.com/guides/ for more information on how to send emails. This method does not return a sent email entity due to legacy reasons. To send and get a sent email as returned response use the sister method `sendEmailAndConfirm`.
     * Send Email
     * @param inboxId ID of the inbox you want to send the email from
     * @param sendEmailOptions Options for the email
     */
    public sendEmail(inboxId: string, sendEmailOptions?: SendEmailOptions, options?: Configuration): Promise<void> {
        const result = this.api.sendEmail(inboxId, sendEmailOptions, options);
        return result.toPromise();
    }

    /**
     * Sister method for standard `sendEmail` method with the benefit of returning a `SentEmail` entity confirming the successful sending of the email with a link to the sent object created for it.
     * Send email and return sent confirmation
     * @param inboxId ID of the inbox you want to send the email from
     * @param sendEmailOptions Options for the email
     */
    public sendEmailAndConfirm(inboxId: string, sendEmailOptions?: SendEmailOptions, options?: Configuration): Promise<SentEmailDto> {
        const result = this.api.sendEmailAndConfirm(inboxId, sendEmailOptions, options);
        return result.toPromise();
    }

    /**
     * Send an inbox a test email to test email receiving is working
     * Send a test email to inbox
     * @param inboxId inboxId
     */
    public sendTestEmail(inboxId: string, options?: Configuration): Promise<void> {
        const result = this.api.sendTestEmail(inboxId, options);
        return result.toPromise();
    }

    /**
     * Set and return new favourite state for an inbox
     * Set inbox favourited state
     * @param inboxId inboxId
     * @param setInboxFavouritedOptions setInboxFavouritedOptions
     */
    public setInboxFavourited(inboxId: string, setInboxFavouritedOptions: SetInboxFavouritedOptions, options?: Configuration): Promise<void | Inbox> {
        const result = this.api.setInboxFavourited(inboxId, setInboxFavouritedOptions, options);
        return result.toPromise();
    }

    /**
     * Update editable fields on an inbox
     * Update Inbox. Change name and description. Email address is not editable.
     * @param inboxId inboxId
     * @param updateInboxOptions updateInboxOptions
     */
    public updateInbox(inboxId: string, updateInboxOptions: UpdateInboxOptions, options?: Configuration): Promise<void | Inbox> {
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
     * @param createInboxForwarderOptions createInboxForwarderOptions
     * @param inboxId Inbox id to attach forwarder to
     */
    public createNewInboxForwarder(createInboxForwarderOptions: CreateInboxForwarderOptions, inboxId?: string, options?: Configuration): Promise<InboxForwarderDto | void> {
        const result = this.api.createNewInboxForwarder(createInboxForwarderOptions, inboxId, options);
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
     * Get inbox ruleset
     * Get an inbox forwarder
     * @param id ID of inbox forwarder
     */
    public getInboxForwarder(id: string, options?: Configuration): Promise<InboxForwarderDto> {
        const result = this.api.getInboxForwarder(id, options);
        return result.toPromise();
    }

    /**
     * List all forwarders attached to an inbox
     * List inbox forwarders
     * @param before Filter by created at before the given timestamp
     * @param inboxId Optional inbox id to get forwarders from
     * @param page Optional page index in inbox forwarder list pagination
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param size Optional page size in inbox forwarder list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getInboxForwarders(before?: Date, inboxId?: string, page?: number, searchFilter?: string, since?: Date, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageInboxForwarderDto> {
        const result = this.api.getInboxForwarders(before, inboxId, page, searchFilter, since, size, sort, options);
        return result.toPromise();
    }

    /**
     * Test an inbox forwarder
     * Test an inbox forwarder
     * @param id ID of inbox forwarder
     * @param inboxForwarderTestOptions inboxForwarderTestOptions
     */
    public testInboxForwarder(id: string, inboxForwarderTestOptions: InboxForwarderTestOptions, options?: Configuration): Promise<void | InboxForwarderTestResult> {
        const result = this.api.testInboxForwarder(id, inboxForwarderTestOptions, options);
        return result.toPromise();
    }

    /**
     * Test inbox forwarders for inbox
     * Test inbox forwarders for inbox
     * @param inboxId ID of inbox
     * @param inboxForwarderTestOptions inboxForwarderTestOptions
     */
    public testInboxForwardersForInbox(inboxId: string, inboxForwarderTestOptions: InboxForwarderTestOptions, options?: Configuration): Promise<void | InboxForwarderTestResult> {
        const result = this.api.testInboxForwardersForInbox(inboxId, inboxForwarderTestOptions, options);
        return result.toPromise();
    }

    /**
     * Test new inbox forwarder
     * Test new inbox forwarder
     * @param testNewInboxForwarderOptions testNewInboxForwarderOptions
     */
    public testNewInboxForwarder(testNewInboxForwarderOptions: TestNewInboxForwarderOptions, options?: Configuration): Promise<void | InboxForwarderTestResult> {
        const result = this.api.testNewInboxForwarder(testNewInboxForwarderOptions, options);
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
     * @param createInboxRulesetOptions createInboxRulesetOptions
     * @param inboxId Inbox id to attach ruleset to
     */
    public createNewInboxRuleset(createInboxRulesetOptions: CreateInboxRulesetOptions, inboxId?: string, options?: Configuration): Promise<void | InboxRulesetDto> {
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
     * @param before Filter by created at before the given timestamp
     * @param inboxId Optional inbox id to get rulesets from
     * @param page Optional page index in inbox ruleset list pagination
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param size Optional page size in inbox ruleset list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getInboxRulesets(before?: Date, inboxId?: string, page?: number, searchFilter?: string, since?: Date, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageInboxRulesetDto> {
        const result = this.api.getInboxRulesets(before, inboxId, page, searchFilter, since, size, sort, options);
        return result.toPromise();
    }

    /**
     * Test an inbox ruleset
     * Test an inbox ruleset
     * @param id ID of inbox ruleset
     * @param inboxRulesetTestOptions inboxRulesetTestOptions
     */
    public testInboxRuleset(id: string, inboxRulesetTestOptions: InboxRulesetTestOptions, options?: Configuration): Promise<InboxRulesetTestResult | void> {
        const result = this.api.testInboxRuleset(id, inboxRulesetTestOptions, options);
        return result.toPromise();
    }

    /**
     * Test inbox rulesets for inbox
     * Test inbox rulesets for inbox
     * @param inboxId ID of inbox
     * @param inboxRulesetTestOptions inboxRulesetTestOptions
     */
    public testInboxRulesetsForInbox(inboxId: string, inboxRulesetTestOptions: InboxRulesetTestOptions, options?: Configuration): Promise<InboxRulesetTestResult | void> {
        const result = this.api.testInboxRulesetsForInbox(inboxId, inboxRulesetTestOptions, options);
        return result.toPromise();
    }

    /**
     * Test new inbox ruleset
     * Test new inbox ruleset
     * @param testNewInboxRulesetOptions testNewInboxRulesetOptions
     */
    public testNewInboxRuleset(testNewInboxRulesetOptions: TestNewInboxRulesetOptions, options?: Configuration): Promise<InboxRulesetTestResult | void> {
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
     * @param describeOptions describeOptions
     */
    public describeMailServerDomain(describeOptions: DescribeDomainOptions, options?: Configuration): Promise<void | DescribeMailServerDomainResult> {
        const result = this.api.describeMailServerDomain(describeOptions, options);
        return result.toPromise();
    }

    /**
     * Lookup DNS records for a domain
     * @param dnsLookupOptions dnsLookupOptions
     */
    public getDnsLookup(dnsLookupOptions: DNSLookupOptions, options?: Configuration): Promise<void | DNSLookupResults> {
        const result = this.api.getDnsLookup(dnsLookupOptions, options);
        return result.toPromise();
    }

    /**
     * Get IP address for a domain
     * @param name name
     */
    public getIpAddress(name: string, options?: Configuration): Promise<IPAddressResult | void> {
        const result = this.api.getIpAddress(name, options);
        return result.toPromise();
    }

    /**
     * Verify the existence of an email address at a given mail server.
     * @param verifyOptions verifyOptions
     */
    public verifyEmailAddress(verifyOptions: VerifyEmailAddressOptions, options?: Configuration): Promise<void | EmailVerificationResult> {
        const result = this.api.verifyEmailAddress(verifyOptions, options);
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
     * @param before Filter by created at before the given timestamp
     * @param inboxId Optional inbox ID filter
     * @param page Optional page index in list pagination
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getAllMissedEmails(before?: Date, inboxId?: string, page?: number, searchFilter?: string, since?: Date, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageMissedEmailProjection> {
        const result = this.api.getAllMissedEmails(before, inboxId, page, searchFilter, since, size, sort, options);
        return result.toPromise();
    }

    /**
     * Unknown missed emails are emails that were sent to MailSlurp but could not be assigned to an existing inbox.
     * Get all unknown missed emails in paginated format
     * @param before Filter by created at before the given timestamp
     * @param inboxId Optional inbox ID filter
     * @param page Optional page index in list pagination
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getAllUnknownMissedEmails(before?: Date, inboxId?: string, page?: number, searchFilter?: string, since?: Date, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageUnknownMissedEmailProjection> {
        const result = this.api.getAllUnknownMissedEmails(before, inboxId, page, searchFilter, since, size, sort, options);
        return result.toPromise();
    }

    /**
     * Get MissedEmail
     * @param missedEmailId missedEmailId
     */
    public getMissedEmail(missedEmailId: string, options?: Configuration): Promise<MissedEmail> {
        const result = this.api.getMissedEmail(missedEmailId, options);
        return result.toPromise();
    }

    /**
     * Wait for 0 based index missed email
     * Wait for Nth missed email
     * @param before Filter by created at before the given timestamp
     * @param inboxId Optional inbox ID filter
     * @param index Zero based index of the email to wait for. If 1 missed email already and you want to wait for the 2nd email pass index&#x3D;1
     * @param since Filter by created at after the given timestamp
     * @param timeout Optional timeout milliseconds
     */
    public waitForNthMissedEmail(before?: Date, inboxId?: string, index?: number, since?: Date, timeout?: number, options?: Configuration): Promise<MissedEmail> {
        const result = this.api.waitForNthMissedEmail(before, inboxId, index, since, timeout, options);
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
     * Get all sent email tracking pixels in paginated form
     * @param before Filter by created at before the given timestamp
     * @param page Optional page index in sent email tracking pixel list pagination
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param size Optional page size in sent email tracking pixel list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getAllSentTrackingPixels(before?: Date, page?: number, searchFilter?: string, since?: Date, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageTrackingPixelProjection> {
        const result = this.api.getAllSentTrackingPixels(before, page, searchFilter, since, size, sort, options);
        return result.toPromise();
    }

    /**
     * Get sent email receipt
     * @param id id
     */
    public getSentEmail(id: string, options?: Configuration): Promise<SentEmailDto> {
        const result = this.api.getSentEmail(id, options);
        return result.toPromise();
    }

    /**
     * Get sent email HTML content
     * @param id id
     */
    public getSentEmailHTMLContent(id: string, options?: Configuration): Promise<string> {
        const result = this.api.getSentEmailHTMLContent(id, options);
        return result.toPromise();
    }

    /**
     * Get all tracking pixels for a sent email in paginated form
     * @param id id
     * @param before Filter by created at before the given timestamp
     * @param page Optional page index in sent email tracking pixel list pagination
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param size Optional page size in sent email tracking pixel list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getSentEmailTrackingPixels(id: string, before?: Date, page?: number, searchFilter?: string, since?: Date, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageTrackingPixelProjection> {
        const result = this.api.getSentEmailTrackingPixels(id, before, page, searchFilter, since, size, sort, options);
        return result.toPromise();
    }

    /**
     * Get all sent emails in paginated form
     * @param before Filter by created at before the given timestamp
     * @param inboxId Optional inboxId to filter sender of sent emails by
     * @param page Optional page index in inbox sent email list pagination
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param size Optional page size in inbox sent email list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getSentEmails(before?: Date, inboxId?: string, page?: number, searchFilter?: string, since?: Date, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageSentEmailProjection> {
        const result = this.api.getSentEmails(before, inboxId, page, searchFilter, since, size, sort, options);
        return result.toPromise();
    }

    /**
     * Get all sent organization emails in paginated form
     * @param before Filter by created at before the given timestamp
     * @param inboxId Optional inboxId to filter sender of sent emails by
     * @param page Optional page index in sent email list pagination
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param size Optional page size in sent email list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getSentOrganizationEmails(before?: Date, inboxId?: string, page?: number, searchFilter?: string, since?: Date, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageSentEmailProjection> {
        const result = this.api.getSentOrganizationEmails(before, inboxId, page, searchFilter, since, size, sort, options);
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
     * Create a Template
     * @param createTemplateOptions createTemplateOptions
     */
    public createTemplate(createTemplateOptions: CreateTemplateOptions, options?: Configuration): Promise<TemplateDto> {
        const result = this.api.createTemplate(createTemplateOptions, options);
        return result.toPromise();
    }

    /**
     * Delete Template
     * @param templateId templateId
     */
    public deleteTemplate(templateId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteTemplate(templateId, options);
        return result.toPromise();
    }

    /**
     * Get all Templates in paginated format
     * @param before Filter by created at before the given timestamp
     * @param page Optional page index in list pagination
     * @param since Filter by created at after the given timestamp
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getAllTemplates(before?: Date, page?: number, since?: Date, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageTemplateProjection> {
        const result = this.api.getAllTemplates(before, page, since, size, sort, options);
        return result.toPromise();
    }

    /**
     * Get Template
     * @param templateId templateId
     */
    public getTemplate(templateId: string, options?: Configuration): Promise<TemplateDto> {
        const result = this.api.getTemplate(templateId, options);
        return result.toPromise();
    }

    /**
     * Get all Templates
     */
    public getTemplates(options?: Configuration): Promise<Array<TemplateProjection>> {
        const result = this.api.getTemplates(options);
        return result.toPromise();
    }

    /**
     * Update a Template
     * @param templateId templateId
     * @param createTemplateOptions createTemplateOptions
     */
    public updateTemplate(templateId: string, createTemplateOptions: CreateTemplateOptions, options?: Configuration): Promise<TemplateDto> {
        const result = this.api.updateTemplate(templateId, createTemplateOptions, options);
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
     * @param createTrackingPixelOptions createTrackingPixelOptions
     */
    public createTrackingPixel(createTrackingPixelOptions: CreateTrackingPixelOptions, options?: Configuration): Promise<TrackingPixelDto> {
        const result = this.api.createTrackingPixel(createTrackingPixelOptions, options);
        return result.toPromise();
    }

    /**
     * List tracking pixels in paginated form
     * Get tracking pixels
     * @param before Filter by created at before the given timestamp
     * @param page Optional page index in list pagination
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getAllTrackingPixels(before?: Date, page?: number, searchFilter?: string, since?: Date, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageTrackingPixelProjection> {
        const result = this.api.getAllTrackingPixels(before, page, searchFilter, since, size, sort, options);
        return result.toPromise();
    }

    /**
     * Get pixel
     * @param id id
     */
    public getTrackingPixel(id: string, options?: Configuration): Promise<TrackingPixelDto> {
        const result = this.api.getTrackingPixel(id, options);
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
     * @param waitForConditions Conditions to apply to emails that you are waiting for
     */
    public waitFor(waitForConditions?: WaitForConditions, options?: Configuration): Promise<Array<EmailPreview> | void> {
        const result = this.api.waitFor(waitForConditions, options);
        return result.toPromise();
    }

    /**
     * If inbox contains count or more emails at time of request then return count worth of emails. If not wait until the count is reached and return those or return an error if timeout is exceeded.
     * Wait for and return count number of emails. Hold connection until inbox count matches expected or timeout occurs
     * @param before Filter for emails that were received before the given timestamp
     * @param count Number of emails to wait for. Must be greater that 1
     * @param delay Max milliseconds delay between calls
     * @param inboxId Id of the inbox we are fetching emails from
     * @param since Filter for emails that were received after the given timestamp
     * @param sort Sort direction
     * @param timeout Max milliseconds to wait
     * @param unreadOnly Optional filter for unread only
     */
    public waitForEmailCount(before?: Date, count?: number, delay?: number, inboxId?: string, since?: Date, sort?: 'ASC' | 'DESC', timeout?: number, unreadOnly?: boolean, options?: Configuration): Promise<Array<EmailPreview>> {
        const result = this.api.waitForEmailCount(before, count, delay, inboxId, since, sort, timeout, unreadOnly, options);
        return result.toPromise();
    }

    /**
     * Will return either the last received email or wait for an email to arrive and return that. If you need to wait for an email for a non-empty inbox set `unreadOnly=true` or see the other receive methods such as `waitForNthEmail` or `waitForEmailCount`.
     * Fetch inbox's latest email or if empty wait for an email to arrive
     * @param before Filter for emails that were before after the given timestamp
     * @param delay Max milliseconds delay between calls
     * @param inboxId Id of the inbox we are fetching emails from
     * @param since Filter for emails that were received after the given timestamp
     * @param sort Sort direction
     * @param timeout Max milliseconds to wait
     * @param unreadOnly Optional filter for unread only.
     */
    public waitForLatestEmail(before?: Date, delay?: number, inboxId?: string, since?: Date, sort?: 'ASC' | 'DESC', timeout?: number, unreadOnly?: boolean, options?: Configuration): Promise<Email> {
        const result = this.api.waitForLatestEmail(before, delay, inboxId, since, sort, timeout, unreadOnly, options);
        return result.toPromise();
    }

    /**
     * Perform a search of emails in an inbox with the given patterns. If results match expected count then return or else retry the search until results are found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options. An example payload is `{ matches: [{field: 'SUBJECT',should:'CONTAIN',value:'needle'}] }`. You can use an array of matches and they will be applied sequentially to filter out emails. If you want to perform matches and extractions of content using Regex patterns see the EmailController `getEmailContentMatch` method.
     * Wait or return list of emails that match simple matching patterns
     * @param matchOptions matchOptions
     * @param before Filter for emails that were received before the given timestamp
     * @param count Number of emails to wait for. Must be greater or equal to 1
     * @param delay Max milliseconds delay between calls
     * @param inboxId Id of the inbox we are fetching emails from
     * @param since Filter for emails that were received after the given timestamp
     * @param sort Sort direction
     * @param timeout Max milliseconds to wait
     * @param unreadOnly Optional filter for unread only
     */
    public waitForMatchingEmails(matchOptions: MatchOptions, before?: Date, count?: number, delay?: number, inboxId?: string, since?: Date, sort?: 'ASC' | 'DESC', timeout?: number, unreadOnly?: boolean, options?: Configuration): Promise<Array<EmailPreview> | void> {
        const result = this.api.waitForMatchingEmails(matchOptions, before, count, delay, inboxId, since, sort, timeout, unreadOnly, options);
        return result.toPromise();
    }

    /**
     * Perform a search of emails in an inbox with the given patterns. If a result if found then return or else retry the search until a result is found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options. An example payload is `{ matches: [{field: 'SUBJECT',should:'CONTAIN',value:'needle'}] }`. You can use an array of matches and they will be applied sequentially to filter out emails. If you want to perform matches and extractions of content using Regex patterns see the EmailController `getEmailContentMatch` method.
     * Wait for or return the first email that matches provided MatchOptions array
     * @param matchOptions matchOptions
     * @param before Filter for emails that were received before the given timestamp
     * @param delay Max milliseconds delay between calls
     * @param inboxId Id of the inbox we are matching an email for
     * @param since Filter for emails that were received after the given timestamp
     * @param sort Sort direction
     * @param timeout Max milliseconds to wait
     * @param unreadOnly Optional filter for unread only
     */
    public waitForMatchingFirstEmail(matchOptions: MatchOptions, before?: Date, delay?: number, inboxId?: string, since?: Date, sort?: 'ASC' | 'DESC', timeout?: number, unreadOnly?: boolean, options?: Configuration): Promise<Email | void> {
        const result = this.api.waitForMatchingFirstEmail(matchOptions, before, delay, inboxId, since, sort, timeout, unreadOnly, options);
        return result.toPromise();
    }

    /**
     * If nth email is already present in inbox then return it. If not hold the connection open until timeout expires or the nth email is received and returned.
     * Wait for or fetch the email with a given index in the inbox specified. If index doesn't exist waits for it to exist or timeout to occur.
     * @param before Filter for emails that were received before the given timestamp
     * @param delay Max milliseconds delay between calls
     * @param inboxId Id of the inbox you are fetching emails from
     * @param index Zero based index of the email to wait for. If an inbox has 1 email already and you want to wait for the 2nd email pass index&#x3D;1
     * @param since Filter for emails that were received after the given timestamp
     * @param sort Sort direction
     * @param timeout Max milliseconds to wait for the nth email if not already present
     * @param unreadOnly Optional filter for unread only
     */
    public waitForNthEmail(before?: Date, delay?: number, inboxId?: string, index?: number, since?: Date, sort?: 'ASC' | 'DESC', timeout?: number, unreadOnly?: boolean, options?: Configuration): Promise<Email> {
        const result = this.api.waitForNthEmail(before, delay, inboxId, index, since, sort, timeout, unreadOnly, options);
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
     * Get notified whenever an inbox receives an email via a WebHook URL. An emailID will be posted to this URL every time an email is received for this inbox. The URL must be publicly reachable by the MailSlurp server. You can provide basicAuth values if you wish to secure this endpoint.
     * Attach a WebHook URL to an inbox
     * @param inboxId inboxId
     * @param webhookOptions webhookOptions
     */
    public createWebhook(inboxId: string, webhookOptions: CreateWebhookOptions, options?: Configuration): Promise<WebhookDto> {
        const result = this.api.createWebhook(inboxId, webhookOptions, options);
        return result.toPromise();
    }

    /**
     * Delete all webhooks
     */
    public deleteAllWebhooks(options?: Configuration): Promise<void> {
        const result = this.api.deleteAllWebhooks(options);
        return result.toPromise();
    }

    /**
     * Delete and disable a Webhook for an Inbox
     * @param inboxId inboxId
     * @param webhookId webhookId
     */
    public deleteWebhook(inboxId: string, webhookId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteWebhook(inboxId, webhookId, options);
        return result.toPromise();
    }

    /**
     * Get results for all webhooks
     * @param before Filter by created at before the given timestamp
     * @param page Optional page index in list pagination
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param unseenOnly Filter for unseen exceptions only
     */
    public getAllWebhookResults(before?: Date, page?: number, searchFilter?: string, since?: Date, size?: number, sort?: 'ASC' | 'DESC', unseenOnly?: boolean, options?: Configuration): Promise<PageWebhookResult> {
        const result = this.api.getAllWebhookResults(before, page, searchFilter, since, size, sort, unseenOnly, options);
        return result.toPromise();
    }

    /**
     * List webhooks in paginated form. Allows for page index, page size, and sort direction.
     * List Webhooks Paginated
     * @param before Filter by created at before the given timestamp
     * @param page Optional page index in list pagination
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param size Optional page size for paginated result list.
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getAllWebhooks(before?: Date, page?: number, searchFilter?: string, since?: Date, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageWebhookProjection> {
        const result = this.api.getAllWebhooks(before, page, searchFilter, since, size, sort, options);
        return result.toPromise();
    }

    /**
     * Get paginated webhooks for an Inbox
     * @param inboxId inboxId
     * @param before Filter by created at before the given timestamp
     * @param page Optional page index in list pagination
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getInboxWebhooksPaginated(inboxId: string, before?: Date, page?: number, searchFilter?: string, since?: Date, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageWebhookProjection> {
        const result = this.api.getInboxWebhooksPaginated(inboxId, before, page, searchFilter, since, size, sort, options);
        return result.toPromise();
    }

    /**
     * Get JSON Schema definition for webhook payload
     * @param webhookId webhookId
     */
    public getJsonSchemaForWebhookPayload(webhookId: string, options?: Configuration): Promise<JSONSchemaDto> {
        const result = this.api.getJsonSchemaForWebhookPayload(webhookId, options);
        return result.toPromise();
    }

    /**
     * Get test webhook payload example. Response content depends on eventName passed. Uses `EMAIL_RECEIVED` as default.
     * @param eventName eventName
     */
    public getTestWebhookPayload(eventName?: 'EMAIL_RECEIVED' | 'NEW_EMAIL' | 'NEW_CONTACT' | 'NEW_ATTACHMENT' | 'EMAIL_OPENED' | 'EMAIL_READ', options?: Configuration): Promise<AbstractWebhookPayload> {
        const result = this.api.getTestWebhookPayload(eventName, options);
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
     * @param webhookId webhookId
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
     * Get a webhook for an Inbox
     * @param webhookId webhookId
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
     * @param before Filter by created at before the given timestamp
     * @param page Optional page index in list pagination
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param unseenOnly Filter for unseen exceptions only
     */
    public getWebhookResults(webhookId: string, before?: Date, page?: number, searchFilter?: string, since?: Date, size?: number, sort?: 'ASC' | 'DESC', unseenOnly?: boolean, options?: Configuration): Promise<PageWebhookResult> {
        const result = this.api.getWebhookResults(webhookId, before, page, searchFilter, since, size, sort, unseenOnly, options);
        return result.toPromise();
    }

    /**
     * Get count of unseen webhook results with error status
     * @param inboxId inboxId
     */
    public getWebhookResultsUnseenErrorCount(inboxId: string, options?: Configuration): Promise<UnseenErrorCountDto> {
        const result = this.api.getWebhookResultsUnseenErrorCount(inboxId, options);
        return result.toPromise();
    }

    /**
     * Get all webhooks for an Inbox
     * @param inboxId inboxId
     */
    public getWebhooks(inboxId: string, options?: Configuration): Promise<Array<WebhookDto>> {
        const result = this.api.getWebhooks(inboxId, options);
        return result.toPromise();
    }

    /**
     * Allows you to resend a webhook payload that was already sent. Webhooks that fail are retried automatically for 24 hours and then put in a dead letter queue. You can retry results manually using this method.
     * Get a webhook result and try to resend the original webhook payload
     * @param webhookResultId Webhook Result ID
     */
    public redriveWebhookResult(webhookResultId: string, options?: Configuration): Promise<void | WebhookRedriveResult> {
        const result = this.api.redriveWebhookResult(webhookResultId, options);
        return result.toPromise();
    }

    /**
     * Send webhook test data
     * @param webhookId webhookId
     */
    public sendTestData(webhookId: string, options?: Configuration): Promise<WebhookTestResult> {
        const result = this.api.sendTestData(webhookId, options);
        return result.toPromise();
    }


}



