import { ResponseContext, RequestContext, HttpFile } from '../http/http.ts';
import * as models from '../models/all.ts';
import { Configuration} from '../configuration.ts'

import { AbstractWebhookPayload } from '../models/AbstractWebhookPayload.ts';
import { Alias } from '../models/Alias.ts';
import { AliasDto } from '../models/AliasDto.ts';
import { AliasProjection } from '../models/AliasProjection.ts';
import { AttachmentMetaData } from '../models/AttachmentMetaData.ts';
import { AttachmentProjection } from '../models/AttachmentProjection.ts';
import { BasicAuthOptions } from '../models/BasicAuthOptions.ts';
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
import { CreateTemplateOptions } from '../models/CreateTemplateOptions.ts';
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
import { EmailPreview } from '../models/EmailPreview.ts';
import { EmailProjection } from '../models/EmailProjection.ts';
import { EmailTextLinesResult } from '../models/EmailTextLinesResult.ts';
import { EmailVerificationResult } from '../models/EmailVerificationResult.ts';
import { ExpirationDefaults } from '../models/ExpirationDefaults.ts';
import { ExpiredInboxDto } from '../models/ExpiredInboxDto.ts';
import { ExpiredInboxRecordProjection } from '../models/ExpiredInboxRecordProjection.ts';
import { ForwardEmailOptions } from '../models/ForwardEmailOptions.ts';
import { GroupContactsDto } from '../models/GroupContactsDto.ts';
import { GroupDto } from '../models/GroupDto.ts';
import { GroupProjection } from '../models/GroupProjection.ts';
import { HTMLValidationResult } from '../models/HTMLValidationResult.ts';
import { IPAddressResult } from '../models/IPAddressResult.ts';
import { Inbox } from '../models/Inbox.ts';
import { InboxProjection } from '../models/InboxProjection.ts';
import { MatchOption } from '../models/MatchOption.ts';
import { MatchOptions } from '../models/MatchOptions.ts';
import { MissedEmail } from '../models/MissedEmail.ts';
import { MissedEmailProjection } from '../models/MissedEmailProjection.ts';
import { NameServerRecord } from '../models/NameServerRecord.ts';
import { OrganizationInboxProjection } from '../models/OrganizationInboxProjection.ts';
import { PageAlias } from '../models/PageAlias.ts';
import { PageAttachmentEntity } from '../models/PageAttachmentEntity.ts';
import { PageContactProjection } from '../models/PageContactProjection.ts';
import { PageEmailPreview } from '../models/PageEmailPreview.ts';
import { PageEmailProjection } from '../models/PageEmailProjection.ts';
import { PageExpiredInboxRecordProjection } from '../models/PageExpiredInboxRecordProjection.ts';
import { PageGroupProjection } from '../models/PageGroupProjection.ts';
import { PageInboxProjection } from '../models/PageInboxProjection.ts';
import { PageMissedEmailProjection } from '../models/PageMissedEmailProjection.ts';
import { PageOrganizationInboxProjection } from '../models/PageOrganizationInboxProjection.ts';
import { PageSentEmailProjection } from '../models/PageSentEmailProjection.ts';
import { PageTemplateProjection } from '../models/PageTemplateProjection.ts';
import { PageThreadProjection } from '../models/PageThreadProjection.ts';
import { PageWebhookProjection } from '../models/PageWebhookProjection.ts';
import { Pageable } from '../models/Pageable.ts';
import { RawEmailJson } from '../models/RawEmailJson.ts';
import { ReplyToAliasEmailOptions } from '../models/ReplyToAliasEmailOptions.ts';
import { ReplyToEmailOptions } from '../models/ReplyToEmailOptions.ts';
import { SendEmailOptions } from '../models/SendEmailOptions.ts';
import { SentEmailDto } from '../models/SentEmailDto.ts';
import { SentEmailProjection } from '../models/SentEmailProjection.ts';
import { SetInboxFavouritedOptions } from '../models/SetInboxFavouritedOptions.ts';
import { SimpleSendEmailOptions } from '../models/SimpleSendEmailOptions.ts';
import { Sort } from '../models/Sort.ts';
import { TemplateDto } from '../models/TemplateDto.ts';
import { TemplateProjection } from '../models/TemplateProjection.ts';
import { TemplateVariable } from '../models/TemplateVariable.ts';
import { ThreadProjection } from '../models/ThreadProjection.ts';
import { UnreadCount } from '../models/UnreadCount.ts';
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
import { WebhookNewAttachmentPayload } from '../models/WebhookNewAttachmentPayload.ts';
import { WebhookNewContactPayload } from '../models/WebhookNewContactPayload.ts';
import { WebhookNewEmailPayload } from '../models/WebhookNewEmailPayload.ts';
import { WebhookProjection } from '../models/WebhookProjection.ts';
import { WebhookTestRequest } from '../models/WebhookTestRequest.ts';
import { WebhookTestResponse } from '../models/WebhookTestResponse.ts';
import { WebhookTestResult } from '../models/WebhookTestResult.ts';

import { ObservableAliasControllerApi } from "./ObservableAPI.ts";
import { AliasControllerApiRequestFactory, AliasControllerApiResponseProcessor} from "../apis/AliasControllerApi.ts";

export interface AliasControllerApiCreateAliasRequest {
    /**
     * createAliasOptions
     * @type CreateAliasOptions
     * @memberof AliasControllerApicreateAlias
     */
    createAliasOptions: CreateAliasOptions
}

export interface AliasControllerApiDeleteAliasRequest {
    /**
     * aliasId
     * @type string
     * @memberof AliasControllerApideleteAlias
     */
    aliasId: string
}

export interface AliasControllerApiGetAliasRequest {
    /**
     * aliasId
     * @type string
     * @memberof AliasControllerApigetAlias
     */
    aliasId: string
}

export interface AliasControllerApiGetAliasEmailsRequest {
    /**
     * aliasId
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
}

export interface AliasControllerApiGetAliasThreadsRequest {
    /**
     * aliasId
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
     * replyToAliasEmailOptions
     * @type ReplyToAliasEmailOptions
     * @memberof AliasControllerApireplyToAliasEmail
     */
    replyToAliasEmailOptions: ReplyToAliasEmailOptions
}

export interface AliasControllerApiSendAliasEmailRequest {
    /**
     * aliasId
     * @type string
     * @memberof AliasControllerApisendAliasEmail
     */
    aliasId: string
    /**
     * Options for the email to be sent
     * @type SendEmailOptions
     * @memberof AliasControllerApisendAliasEmail
     */
    sendEmailOptions?: SendEmailOptions
}

export interface AliasControllerApiUpdateAliasRequest {
    /**
     * aliasId
     * @type string
     * @memberof AliasControllerApiupdateAlias
     */
    aliasId: string
    /**
     * updateAliasOptions
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
        return this.api.getAliasEmails(param.aliasId, param.page, param.size, param.sort,  options).toPromise();
    }

    /**
     * Returns threads created for an email alias in paginated form
     * Get threads created for an alias
     * @param param the request object
     */
    public getAliasThreads(param: AliasControllerApiGetAliasThreadsRequest, options?: Configuration): Promise<PageThreadProjection> {
        return this.api.getAliasThreads(param.aliasId, param.page, param.size, param.sort,  options).toPromise();
    }

    /**
     * Get all email aliases in paginated form
     * Get all email aliases you have created
     * @param param the request object
     */
    public getAliases(param: AliasControllerApiGetAliasesRequest, options?: Configuration): Promise<PageAlias> {
        return this.api.getAliases(param.page, param.size, param.sort,  options).toPromise();
    }

    /**
     * Send the reply to the email sender or reply-to and include same subject cc bcc etc. Reply to an email and the contents will be sent with the existing subject to the emails `to`, `cc`, and `bcc`.
     * Reply to an email
     * @param param the request object
     */
    public replyToAliasEmail(param: AliasControllerApiReplyToAliasEmailRequest, options?: Configuration): Promise<void | SentEmailDto> {
        return this.api.replyToAliasEmail(param.aliasId, param.emailId, param.replyToAliasEmailOptions,  options).toPromise();
    }

    /**
     * Send an email from an alias. Replies to the email will be forwarded to the alias masked email address
     * Send an email from an alias inbox
     * @param param the request object
     */
    public sendAliasEmail(param: AliasControllerApiSendAliasEmailRequest, options?: Configuration): Promise<void | SentEmailDto> {
        return this.api.sendAliasEmail(param.aliasId, param.sendEmailOptions,  options).toPromise();
    }

    /**
     * Update an email alias
     * @param param the request object
     */
    public updateAlias(param: AliasControllerApiUpdateAliasRequest, options?: Configuration): Promise<void | Alias> {
        return this.api.updateAlias(param.aliasId, param.updateAliasOptions,  options).toPromise();
    }

}

import { ObservableAttachmentControllerApi } from "./ObservableAPI.ts";
import { AttachmentControllerApiRequestFactory, AttachmentControllerApiResponseProcessor} from "../apis/AttachmentControllerApi.ts";

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
     * Optional file name and content type search filter
     * @type string
     * @memberof AttachmentControllerApigetAttachments
     */
    fileNameFilter?: string
    /**
     * Optional page index event list pagination
     * @type number
     * @memberof AttachmentControllerApigetAttachments
     */
    page?: number
    /**
     * Optional page size event list pagination
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
}

export interface AttachmentControllerApiUploadAttachmentRequest {
    /**
     * uploadOptions
     * @type UploadAttachmentOptions
     * @memberof AttachmentControllerApiuploadAttachment
     */
    uploadOptions: UploadAttachmentOptions
}

export interface AttachmentControllerApiUploadAttachmentBytesRequest {
    /**
     * Optional contentType for file. For instance &#x60;application/pdf&#x60;
     * @type string
     * @memberof AttachmentControllerApiuploadAttachmentBytes
     */
    string?: string
    /**
     * Optional filename to save upload with
     * @type string
     * @memberof AttachmentControllerApiuploadAttachmentBytes
     */
    filename?: string
    /**
     * Byte array request body
     * @type string
     * @memberof AttachmentControllerApiuploadAttachmentBytes
     */
    byteArray?: string
}

export interface AttachmentControllerApiUploadMultipartFormRequest {
    /**
     * file
     * @type HttpFile
     * @memberof AttachmentControllerApiuploadMultipartForm
     */
    file: HttpFile
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
}

export class ObjectAttachmentControllerApi {
    private api: ObservableAttachmentControllerApi

    public constructor(configuration: Configuration, requestFactory?: AttachmentControllerApiRequestFactory, responseProcessor?: AttachmentControllerApiResponseProcessor) {
        this.api = new ObservableAttachmentControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Email attachments are essentially files with meta data. Files are byte arrays and the meta data is a content type and a filename. These properties allow email clients to display the filename and icon etc. When sending emails with attachments first upload each attachment with an upload endpoint. Record the returned attachment ID and use it with subsequent email sending. For legacy reasons the ID is returned as the first element in an array. Only a single ID is ever returned. To send the attachments pass a list of attachment IDs with `SendEmailOptions` when sending an email. Using the upload endpoints prior to sending mean attachments can easily be reused.
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
    public downloadAttachmentAsBytes(param: AttachmentControllerApiDownloadAttachmentAsBytesRequest, options?: Configuration): Promise<string> {
        return this.api.downloadAttachmentAsBytes(param.attachmentId,  options).toPromise();
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
        return this.api.getAttachments(param.fileNameFilter, param.page, param.size, param.sort,  options).toPromise();
    }

    /**
     * Email attachments are essentially files with meta data. Files are byte arrays and the meta data is a content type and a filename. These properties allow email clients to display the filename and icon etc. When sending emails with attachments first upload each attachment with an upload endpoint. Record the returned attachment ID and use it with subsequent email sending. For legacy reasons the ID is returned as the first element in an array. Only a single ID is ever returned. To send the attachments pass a list of attachment IDs with `SendEmailOptions` when sending an email. Using the upload endpoints prior to sending mean attachments can easily be reused.
     * Upload an attachment for sending using base64 file encoding. Returns an array whose first element is the ID of the uploaded attachment.
     * @param param the request object
     */
    public uploadAttachment(param: AttachmentControllerApiUploadAttachmentRequest, options?: Configuration): Promise<Array<string>> {
        return this.api.uploadAttachment(param.uploadOptions,  options).toPromise();
    }

    /**
     * Email attachments are essentially files with meta data. Files are byte arrays and the meta data is a content type and a filename. These properties allow email clients to display the filename and icon etc. When sending emails with attachments first upload each attachment with an upload endpoint. Record the returned attachment ID and use it with subsequent email sending. For legacy reasons the ID is returned as the first element in an array. Only a single ID is ever returned. To send the attachments pass a list of attachment IDs with `SendEmailOptions` when sending an email. Using the upload endpoints prior to sending mean attachments can easily be reused.
     * Upload an attachment for sending using file byte stream input octet stream. Returns an array whose first element is the ID of the uploaded attachment.
     * @param param the request object
     */
    public uploadAttachmentBytes(param: AttachmentControllerApiUploadAttachmentBytesRequest, options?: Configuration): Promise<Array<string>> {
        return this.api.uploadAttachmentBytes(param.string, param.filename, param.byteArray,  options).toPromise();
    }

    /**
     * Email attachments are essentially files with meta data. Files are byte arrays and the meta data is a content type and a filename. These properties allow email clients to display the filename and icon etc. When sending emails with attachments first upload each attachment with an upload endpoint. Record the returned attachment ID and use it with subsequent email sending. For legacy reasons the ID is returned as the first element in an array. Only a single ID is ever returned. To send the attachments pass a list of attachment IDs with `SendEmailOptions` when sending an email. Using the upload endpoints prior to sending mean attachments can easily be reused.
     * Upload an attachment for sending using a Multipart Form request. Returns an array whose first element is the ID of the uploaded attachment.
     * @param param the request object
     */
    public uploadMultipartForm(param: AttachmentControllerApiUploadMultipartFormRequest, options?: Configuration): Promise<Array<string>> {
        return this.api.uploadMultipartForm(param.file, param.contentType, param.filename, param.xFilename,  options).toPromise();
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
     * ids
     * @type Array&lt;string&gt;
     * @memberof BulkActionsControllerApibulkDeleteInboxes
     */
    ids: Array<string>
}

export interface BulkActionsControllerApiBulkSendEmailsRequest {
    /**
     * bulkSendEmailOptions
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
    public bulkCreateInboxes(param: BulkActionsControllerApiBulkCreateInboxesRequest, options?: Configuration): Promise<Array<Inbox>> {
        return this.api.bulkCreateInboxes(param.count,  options).toPromise();
    }

    /**
     * Bulk Delete Inboxes
     * @param param the request object
     */
    public bulkDeleteInboxes(param: BulkActionsControllerApiBulkDeleteInboxesRequest, options?: Configuration): Promise<void> {
        return this.api.bulkDeleteInboxes(param.ids,  options).toPromise();
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
     * allowTeamAccess
     * @type boolean
     * @memberof CommonActionsControllerApicreateNewEmailAddress
     */
    allowTeamAccess?: boolean
    /**
     * expiresAt
     * @type Date
     * @memberof CommonActionsControllerApicreateNewEmailAddress
     */
    expiresAt?: Date
    /**
     * expiresIn
     * @type number
     * @memberof CommonActionsControllerApicreateNewEmailAddress
     */
    expiresIn?: number
    /**
     * useDomainPool
     * @type boolean
     * @memberof CommonActionsControllerApicreateNewEmailAddress
     */
    useDomainPool?: boolean
}

export interface CommonActionsControllerApiCreateNewEmailAddress1Request {
    /**
     * allowTeamAccess
     * @type boolean
     * @memberof CommonActionsControllerApicreateNewEmailAddress1
     */
    allowTeamAccess?: boolean
    /**
     * expiresAt
     * @type Date
     * @memberof CommonActionsControllerApicreateNewEmailAddress1
     */
    expiresAt?: Date
    /**
     * expiresIn
     * @type number
     * @memberof CommonActionsControllerApicreateNewEmailAddress1
     */
    expiresIn?: number
    /**
     * useDomainPool
     * @type boolean
     * @memberof CommonActionsControllerApicreateNewEmailAddress1
     */
    useDomainPool?: boolean
}

export interface CommonActionsControllerApiEmptyInboxRequest {
    /**
     * inboxId
     * @type string
     * @memberof CommonActionsControllerApiemptyInbox
     */
    inboxId: string
}

export interface CommonActionsControllerApiSendEmailSimpleRequest {
    /**
     * emailOptions
     * @type SimpleSendEmailOptions
     * @memberof CommonActionsControllerApisendEmailSimple
     */
    emailOptions: SimpleSendEmailOptions
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
    public createNewEmailAddress(param: CommonActionsControllerApiCreateNewEmailAddressRequest, options?: Configuration): Promise<Inbox> {
        return this.api.createNewEmailAddress(param.allowTeamAccess, param.expiresAt, param.expiresIn, param.useDomainPool,  options).toPromise();
    }

    /**
     * Returns an Inbox with an `id` and an `emailAddress`
     * Create new random inbox
     * @param param the request object
     */
    public createNewEmailAddress1(param: CommonActionsControllerApiCreateNewEmailAddress1Request, options?: Configuration): Promise<Inbox> {
        return this.api.createNewEmailAddress1(param.allowTeamAccess, param.expiresAt, param.expiresIn, param.useDomainPool,  options).toPromise();
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
        return this.api.sendEmailSimple(param.emailOptions,  options).toPromise();
    }

}

import { ObservableContactControllerApi } from "./ObservableAPI.ts";
import { ContactControllerApiRequestFactory, ContactControllerApiResponseProcessor} from "../apis/ContactControllerApi.ts";

export interface ContactControllerApiCreateContactRequest {
    /**
     * createContactOptions
     * @type CreateContactOptions
     * @memberof ContactControllerApicreateContact
     */
    createContactOptions: CreateContactOptions
}

export interface ContactControllerApiDeleteContactRequest {
    /**
     * contactId
     * @type string
     * @memberof ContactControllerApideleteContact
     */
    contactId: string
}

export interface ContactControllerApiGetAllContactsRequest {
    /**
     * Optional page index in inbox list pagination
     * @type number
     * @memberof ContactControllerApigetAllContacts
     */
    page?: number
    /**
     * Optional page size in inbox list pagination
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
}

export interface ContactControllerApiGetContactRequest {
    /**
     * contactId
     * @type string
     * @memberof ContactControllerApigetContact
     */
    contactId: string
}

export interface ContactControllerApiGetContactVCardRequest {
    /**
     * contactId
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
        return this.api.getAllContacts(param.page, param.size, param.sort,  options).toPromise();
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
    public getContactVCard(param: ContactControllerApiGetContactVCardRequest, options?: Configuration): Promise<string> {
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
     * id
     * @type string
     * @memberof DomainControllerApiaddDomainWildcardCatchAll
     */
    id: string
}

export interface DomainControllerApiCreateDomainRequest {
    /**
     * domainOptions
     * @type CreateDomainOptions
     * @memberof DomainControllerApicreateDomain
     */
    domainOptions: CreateDomainOptions
}

export interface DomainControllerApiDeleteDomainRequest {
    /**
     * id
     * @type string
     * @memberof DomainControllerApideleteDomain
     */
    id: string
}

export interface DomainControllerApiGetDomainRequest {
    /**
     * id
     * @type string
     * @memberof DomainControllerApigetDomain
     */
    id: string
}

export interface DomainControllerApiGetDomainsRequest {
}

export interface DomainControllerApiUpdateDomainRequest {
    /**
     * id
     * @type string
     * @memberof DomainControllerApiupdateDomain
     */
    id: string
    /**
     * updateDomainDto
     * @type UpdateDomainOptions
     * @memberof DomainControllerApiupdateDomain
     */
    updateDomainDto: UpdateDomainOptions
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
    public addDomainWildcardCatchAll(param: DomainControllerApiAddDomainWildcardCatchAllRequest, options?: Configuration): Promise<void | DomainDto> {
        return this.api.addDomainWildcardCatchAll(param.id,  options).toPromise();
    }

    /**
     * Link a domain that you own with MailSlurp so you can create email addresses using it. Endpoint returns DNS records used for validation. You must add these verification records to your host provider's DNS setup to verify the domain.
     * Create Domain
     * @param param the request object
     */
    public createDomain(param: DomainControllerApiCreateDomainRequest, options?: Configuration): Promise<DomainDto> {
        return this.api.createDomain(param.domainOptions,  options).toPromise();
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
        return this.api.getDomain(param.id,  options).toPromise();
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
    public updateDomain(param: DomainControllerApiUpdateDomainRequest, options?: Configuration): Promise<void | DomainDto> {
        return this.api.updateDomain(param.id, param.updateDomainDto,  options).toPromise();
    }

}

import { ObservableEmailControllerApi } from "./ObservableAPI.ts";
import { EmailControllerApiRequestFactory, EmailControllerApiResponseProcessor} from "../apis/EmailControllerApi.ts";

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
     * ID of attachment
     * @type string
     * @memberof EmailControllerApidownloadAttachment
     */
    attachmentId: string
    /**
     * ID of email
     * @type string
     * @memberof EmailControllerApidownloadAttachment
     */
    emailId: string
    /**
     * Can pass apiKey in url for this request if you wish to download the file in a browser. Content type will be set to original content type of the attachment file. This is so that browsers can download the file correctly.
     * @type string
     * @memberof EmailControllerApidownloadAttachment
     */
    apiKey?: string
}

export interface EmailControllerApiDownloadAttachmentBase64Request {
    /**
     * ID of attachment
     * @type string
     * @memberof EmailControllerApidownloadAttachmentBase64
     */
    attachmentId: string
    /**
     * ID of email
     * @type string
     * @memberof EmailControllerApidownloadAttachmentBase64
     */
    emailId: string
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
     * forwardEmailOptions
     * @type ForwardEmailOptions
     * @memberof EmailControllerApiforwardEmail
     */
    forwardEmailOptions: ForwardEmailOptions
}

export interface EmailControllerApiGetAttachmentMetaDataRequest {
    /**
     * ID of attachment
     * @type string
     * @memberof EmailControllerApigetAttachmentMetaData
     */
    attachmentId: string
    /**
     * ID of email
     * @type string
     * @memberof EmailControllerApigetAttachmentMetaData
     */
    emailId: string
}

export interface EmailControllerApiGetAttachments1Request {
    /**
     * ID of email
     * @type string
     * @memberof EmailControllerApigetAttachments1
     */
    emailId: string
}

export interface EmailControllerApiGetEmailRequest {
    /**
     * emailId
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

export interface EmailControllerApiGetEmailContentMatchRequest {
    /**
     * ID of email to match against
     * @type string
     * @memberof EmailControllerApigetEmailContentMatch
     */
    emailId: string
    /**
     * contentMatchOptions
     * @type ContentMatchOptions
     * @memberof EmailControllerApigetEmailContentMatch
     */
    contentMatchOptions: ContentMatchOptions
}

export interface EmailControllerApiGetEmailHTMLRequest {
    /**
     * emailId
     * @type string
     * @memberof EmailControllerApigetEmailHTML
     */
    emailId: string
    /**
     * decode
     * @type boolean
     * @memberof EmailControllerApigetEmailHTML
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
    htmlSelector?: string
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
}

export interface EmailControllerApiGetLatestEmailRequest {
    /**
     * Optional set of inboxes to filter by. Only get the latest email from these inbox IDs
     * @type Array&lt;string&gt;
     * @memberof EmailControllerApigetLatestEmail
     */
    inboxIds?: Array<string>
}

export interface EmailControllerApiGetLatestEmailInInboxRequest {
    /**
     * ID of the inbox you want to get the latest email from
     * @type string
     * @memberof EmailControllerApigetLatestEmailInInbox
     */
    inboxId?: string
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

export interface EmailControllerApiReplyToEmailRequest {
    /**
     * ID of the email that should be replied to
     * @type string
     * @memberof EmailControllerApireplyToEmail
     */
    emailId: string
    /**
     * replyToEmailOptions
     * @type ReplyToEmailOptions
     * @memberof EmailControllerApireplyToEmail
     */
    replyToEmailOptions: ReplyToEmailOptions
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
    public downloadAttachment(param: EmailControllerApiDownloadAttachmentRequest, options?: Configuration): Promise<string> {
        return this.api.downloadAttachment(param.attachmentId, param.emailId, param.apiKey,  options).toPromise();
    }

    /**
     * Returns the specified attachment for a given email as a base 64 encoded string. The response type is application/json. This method is similar to the `downloadAttachment` method but allows some clients to get around issues with binary responses.
     * Get email attachment as base64 encoded string as an alternative to binary responses. Decode the `base64FileContents` as a `utf-8` encoded string or array of bytes depending on the `contentType`.
     * @param param the request object
     */
    public downloadAttachmentBase64(param: EmailControllerApiDownloadAttachmentBase64Request, options?: Configuration): Promise<DownloadAttachmentDto> {
        return this.api.downloadAttachmentBase64(param.attachmentId, param.emailId,  options).toPromise();
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
    public downloadBodyBytes(param: EmailControllerApiDownloadBodyBytesRequest, options?: Configuration): Promise<string> {
        return this.api.downloadBodyBytes(param.emailId,  options).toPromise();
    }

    /**
     * Forward an existing email to new recipients. The sender of the email will be the inbox that received the email you are forwarding. You can override the sender with the `from` option. Note you must have access to the from address in MailSlurp to use the override. For more control consider fetching the email and sending it a new using the send email endpoints.
     * Forward email to recipients
     * @param param the request object
     */
    public forwardEmail(param: EmailControllerApiForwardEmailRequest, options?: Configuration): Promise<void> {
        return this.api.forwardEmail(param.emailId, param.forwardEmailOptions,  options).toPromise();
    }

    /**
     * Returns the metadata such as name and content-type for a given attachment and email.
     * Get email attachment metadata. This is the `contentType` and `contentLength` of an attachment. To get the individual attachments  use the `downloadAttachment` methods.
     * @param param the request object
     */
    public getAttachmentMetaData(param: EmailControllerApiGetAttachmentMetaDataRequest, options?: Configuration): Promise<AttachmentMetaData> {
        return this.api.getAttachmentMetaData(param.attachmentId, param.emailId,  options).toPromise();
    }

    /**
     * Returns an array of attachment metadata such as name and content-type for a given email if present.
     * Get all email attachment metadata. Metadata includes name and size of attachments.
     * @param param the request object
     */
    public getAttachments1(param: EmailControllerApiGetAttachments1Request, options?: Configuration): Promise<Array<AttachmentMetaData>> {
        return this.api.getAttachments1(param.emailId,  options).toPromise();
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
     * Return the matches for a given Java style regex pattern. Do not include the typical `/` at start or end of regex in some languages. Given an example `your code is: 12345` the pattern to extract match looks like `code is: (\\d{6})`. This will return an array of matches with the first matching the entire pattern and the subsequent matching the groups: `['code is: 123456', '123456']` See https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html for more information of available patterns. 
     * Get email content regex pattern match results. Runs regex against email body and returns match groups.
     * @param param the request object
     */
    public getEmailContentMatch(param: EmailControllerApiGetEmailContentMatchRequest, options?: Configuration): Promise<void | EmailContentMatchResult> {
        return this.api.getEmailContentMatch(param.emailId, param.contentMatchOptions,  options).toPromise();
    }

    /**
     * Retrieve email content as HTML response for viewing in browsers. Decodes quoted-printable entities and converts charset to UTF-8. Pass your API KEY as a request parameter when viewing in a browser: `?apiKey=xxx`
     * Get email content as HTML. For displaying emails in browser context.
     * @param param the request object
     */
    public getEmailHTML(param: EmailControllerApiGetEmailHTMLRequest, options?: Configuration): Promise<string> {
        return this.api.getEmailHTML(param.emailId, param.decode,  options).toPromise();
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
        return this.api.getEmailsPaginated(param.inboxId, param.page, param.size, param.sort, param.unreadOnly,  options).toPromise();
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
    public getLatestEmailInInbox(param: EmailControllerApiGetLatestEmailInInboxRequest, options?: Configuration): Promise<Email> {
        return this.api.getLatestEmailInInbox(param.inboxId,  options).toPromise();
    }

    /**
     * By default returns all emails across all team inboxes sorted by ascending created at date. Responses are paginated. You can restrict results to a list of inbox IDs. You can also filter out read messages
     * Get all organization emails. List team or shared test email accounts
     * @param param the request object
     */
    public getOrganizationEmailsPaginated(param: EmailControllerApiGetOrganizationEmailsPaginatedRequest, options?: Configuration): Promise<PageEmailProjection> {
        return this.api.getOrganizationEmailsPaginated(param.inboxId, param.page, param.size, param.sort, param.unreadOnly,  options).toPromise();
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
     * Send the reply to the email sender or reply-to and include same subject cc bcc etc. Reply to an email and the contents will be sent with the existing subject to the emails `to`, `cc`, and `bcc`.
     * Reply to an email
     * @param param the request object
     */
    public replyToEmail(param: EmailControllerApiReplyToEmailRequest, options?: Configuration): Promise<void | SentEmailDto> {
        return this.api.replyToEmail(param.emailId, param.replyToEmailOptions,  options).toPromise();
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
     * ID of the ExpiredInboxRecord you want to retrieve. This is different from the ID of the inbox you are interested in. See other methods for getting ExpiredInboxRecord for an inbox inboxId)
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
        return this.api.getExpiredInboxes(param.page, param.size, param.sort,  options).toPromise();
    }

}

import { ObservableFormControllerApi } from "./ObservableAPI.ts";
import { FormControllerApiRequestFactory, FormControllerApiResponseProcessor} from "../apis/FormControllerApi.ts";

export interface FormControllerApiSubmitFormRequest {
    /**
     * Email address of the submitting user. Include this if you wish to record the submitters email address and reply to it later.
     * @type string
     * @memberof FormControllerApisubmitForm
     */
    emailAddress?: string
    /**
     * Optional URL to redirect form submitter to after submission. If not present user will see a success message.
     * @type string
     * @memberof FormControllerApisubmitForm
     */
    redirectTo?: string
    /**
     * Optional but recommended field that catches spammers out. Include as a hidden form field but LEAVE EMPTY. Spam-bots will usually fill every field. If the _spamCheck field is filled the form submission will be ignored.
     * @type string
     * @memberof FormControllerApisubmitForm
     */
    spamCheck?: string
    /**
     * Optional subject of the email that will be sent.
     * @type string
     * @memberof FormControllerApisubmitForm
     */
    subject?: string
    /**
     * Optional success message to display if no _redirectTo present.
     * @type string
     * @memberof FormControllerApisubmitForm
     */
    successMessage?: string
    /**
     * The email address that submitted form should be sent to.
     * @type string
     * @memberof FormControllerApisubmitForm
     */
    to?: string
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
    public submitForm(param: FormControllerApiSubmitFormRequest, options?: Configuration): Promise<void | string> {
        return this.api.submitForm(param.emailAddress, param.redirectTo, param.spamCheck, param.subject, param.successMessage, param.to, param.otherParameters,  options).toPromise();
    }

}

import { ObservableGroupControllerApi } from "./ObservableAPI.ts";
import { GroupControllerApiRequestFactory, GroupControllerApiResponseProcessor} from "../apis/GroupControllerApi.ts";

export interface GroupControllerApiAddContactsToGroupRequest {
    /**
     * groupId
     * @type string
     * @memberof GroupControllerApiaddContactsToGroup
     */
    groupId: string
    /**
     * updateGroupContactsOption
     * @type UpdateGroupContacts
     * @memberof GroupControllerApiaddContactsToGroup
     */
    updateGroupContactsOption: UpdateGroupContacts
}

export interface GroupControllerApiCreateGroupRequest {
    /**
     * createGroupOptions
     * @type CreateGroupOptions
     * @memberof GroupControllerApicreateGroup
     */
    createGroupOptions: CreateGroupOptions
}

export interface GroupControllerApiDeleteGroupRequest {
    /**
     * groupId
     * @type string
     * @memberof GroupControllerApideleteGroup
     */
    groupId: string
}

export interface GroupControllerApiGetAllGroupsRequest {
    /**
     * Optional page index in inbox list pagination
     * @type number
     * @memberof GroupControllerApigetAllGroups
     */
    page?: number
    /**
     * Optional page size in inbox list pagination
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
}

export interface GroupControllerApiGetGroupRequest {
    /**
     * groupId
     * @type string
     * @memberof GroupControllerApigetGroup
     */
    groupId: string
}

export interface GroupControllerApiGetGroupWithContactsRequest {
    /**
     * groupId
     * @type string
     * @memberof GroupControllerApigetGroupWithContacts
     */
    groupId: string
}

export interface GroupControllerApiGetGroupWithContactsPaginatedRequest {
    /**
     * groupId
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
}

export interface GroupControllerApiGetGroupsRequest {
}

export interface GroupControllerApiRemoveContactsFromGroupRequest {
    /**
     * groupId
     * @type string
     * @memberof GroupControllerApiremoveContactsFromGroup
     */
    groupId: string
    /**
     * updateGroupContactsOption
     * @type UpdateGroupContacts
     * @memberof GroupControllerApiremoveContactsFromGroup
     */
    updateGroupContactsOption: UpdateGroupContacts
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
    public addContactsToGroup(param: GroupControllerApiAddContactsToGroupRequest, options?: Configuration): Promise<void | GroupContactsDto> {
        return this.api.addContactsToGroup(param.groupId, param.updateGroupContactsOption,  options).toPromise();
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
        return this.api.getAllGroups(param.page, param.size, param.sort,  options).toPromise();
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
        return this.api.getGroupWithContactsPaginated(param.groupId, param.page, param.size, param.sort,  options).toPromise();
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
    public removeContactsFromGroup(param: GroupControllerApiRemoveContactsFromGroupRequest, options?: Configuration): Promise<void | GroupContactsDto> {
        return this.api.removeContactsFromGroup(param.groupId, param.updateGroupContactsOption,  options).toPromise();
    }

}

import { ObservableInboxControllerApi } from "./ObservableAPI.ts";
import { InboxControllerApiRequestFactory, InboxControllerApiResponseProcessor} from "../apis/InboxControllerApi.ts";

export interface InboxControllerApiCreateInboxRequest {
    /**
     * Grant team access to this inbox and the emails that belong to it for team members of your organization.
     * @type boolean
     * @memberof InboxControllerApicreateInbox
     */
    allowTeamAccess?: boolean
    /**
     * Optional description of the inbox for labelling purposes. Is shown in the dashboard and can be used with
     * @type string
     * @memberof InboxControllerApicreateInbox
     */
    description?: string
    /**
     * A custom email address to use with the inbox. Defaults to null. When null MailSlurp will assign a random email address to the inbox such as &#x60;123@mailslurp.com&#x60;. If you use the &#x60;useDomainPool&#x60; option when the email address is null it will generate an email address with a more varied domain ending such as &#x60;123@mailslurp.info&#x60; or &#x60;123@mailslurp.biz&#x60;. When a custom email address is provided the address is split into a domain and the domain is queried against your user. If you have created the domain in the MailSlurp dashboard and verified it you can use any email address that ends with the domain. Note domain types must match the inbox type - so &#x60;SMTP&#x60; inboxes will only work with &#x60;SMTP&#x60; type domains. Send an email to this address and the inbox will receive and store it for you. To retrieve the email use the Inbox and Email Controller endpoints with the inbox ID.
     * @type string
     * @memberof InboxControllerApicreateInbox
     */
    emailAddress?: string
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
     * Is the inbox a favorite. Marking an inbox as a favorite is typically done in the dashboard for quick access or filtering
     * @type boolean
     * @memberof InboxControllerApicreateInbox
     */
    favourite?: boolean
    /**
     * HTTP (default) or SMTP inbox type. HTTP inboxes are best for testing while SMTP inboxes are more reliable for public inbound email consumption. When using custom domains the domain type must match the inbox type. HTTP inboxes are processed by AWS SES while SMTP inboxes use a custom mail server running at &#x60;mx.mailslurp.com&#x60;.
     * @type &#39;HTTP_INBOX&#39; | &#39;SMTP_INBOX&#39;
     * @memberof InboxControllerApicreateInbox
     */
    inboxType?: 'HTTP_INBOX' | 'SMTP_INBOX'
    /**
     * Optional name of the inbox. Displayed in the dashboard for easier search and used as the sender name when sending emails.
     * @type string
     * @memberof InboxControllerApicreateInbox
     */
    name?: string
    /**
     * Tags that inbox has been tagged with. Tags can be added to inboxes to group different inboxes within an account. You can also search for inboxes by tag in the dashboard UI.
     * @type Array&lt;string&gt;
     * @memberof InboxControllerApicreateInbox
     */
    tags?: Array<string>
    /**
     * Use the MailSlurp domain name pool with this inbox when creating the email address. Defaults to null. If enabled the inbox will be an email address with a domain randomly chosen from a list of the MailSlurp domains. This is useful when the default &#x60;@mailslurp.com&#x60; email addresses used with inboxes are blocked or considered spam by a provider or receiving service. When domain pool is enabled an email address will be generated ending in &#x60;@mailslurp.{world,info,xyz,...}&#x60; . This means a TLD is randomly selecting from a list of &#x60;.biz&#x60;, &#x60;.info&#x60;, &#x60;.xyz&#x60; etc to add variance to the generated email addresses. When null or false MailSlurp uses the default behavior of &#x60;@mailslurp.com&#x60; or custom email address provided by the emailAddress field. Note this feature is only available for &#x60;HTTP&#x60; inbox types.
     * @type boolean
     * @memberof InboxControllerApicreateInbox
     */
    useDomainPool?: boolean
}

export interface InboxControllerApiCreateInboxWithDefaultsRequest {
}

export interface InboxControllerApiCreateInboxWithOptionsRequest {
    /**
     * createInboxDto
     * @type CreateInboxDto
     * @memberof InboxControllerApicreateInboxWithOptions
     */
    createInboxDto: CreateInboxDto
}

export interface InboxControllerApiDeleteAllInboxesRequest {
}

export interface InboxControllerApiDeleteInboxRequest {
    /**
     * inboxId
     * @type string
     * @memberof InboxControllerApideleteInbox
     */
    inboxId: string
}

export interface InboxControllerApiGetAllInboxesRequest {
    /**
     * Optionally filter results for favourites only
     * @type boolean
     * @memberof InboxControllerApigetAllInboxes
     */
    favourite?: boolean
    /**
     * Optional page index in inbox list pagination
     * @type number
     * @memberof InboxControllerApigetAllInboxes
     */
    page?: number
    /**
     * Optionally filter by search words partial matching ID, tags, name, and email address
     * @type string
     * @memberof InboxControllerApigetAllInboxes
     */
    search?: string
    /**
     * Optional page size in inbox list pagination
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
     * Optionally filter by tags. Will return inboxes that include given tags
     * @type string
     * @memberof InboxControllerApigetAllInboxes
     */
    tag?: string
    /**
     * Optionally filter by team access. Defaults to false so organization inboxes are not included
     * @type boolean
     * @memberof InboxControllerApigetAllInboxes
     */
    teamAccess?: boolean
}

export interface InboxControllerApiGetEmailsRequest {
    /**
     * Id of inbox that emails belongs to
     * @type string
     * @memberof InboxControllerApigetEmails
     */
    inboxId: string
    /**
     * Limit the result set, ordered by received date time sort direction. Maximum 100. For more listing options see the email controller
     * @type number
     * @memberof InboxControllerApigetEmails
     */
    limit?: number
    /**
     * Minimum acceptable email count. Will cause request to hang (and retry) until minCount is satisfied or retryTimeout is reached.
     * @type number
     * @memberof InboxControllerApigetEmails
     */
    minCount?: number
    /**
     * Maximum milliseconds to spend retrying inbox database until minCount emails are returned
     * @type number
     * @memberof InboxControllerApigetEmails
     */
    retryTimeout?: number
    /**
     * Exclude emails received before this ISO 8601 date time
     * @type Date
     * @memberof InboxControllerApigetEmails
     */
    since?: Date
    /**
     * Alias for limit. Assessed first before assessing any passed limit.
     * @type number
     * @memberof InboxControllerApigetEmails
     */
    size?: number
    /**
     * Sort the results by received date and direction ASC or DESC
     * @type &#39;ASC&#39; | &#39;DESC&#39;
     * @memberof InboxControllerApigetEmails
     */
    sort?: 'ASC' | 'DESC'
}

export interface InboxControllerApiGetInboxRequest {
    /**
     * inboxId
     * @type string
     * @memberof InboxControllerApigetInbox
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
}

export interface InboxControllerApiGetInboxSentEmailsRequest {
    /**
     * inboxId
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
}

export interface InboxControllerApiGetOrganizationInboxesRequest {
    /**
     * Optional page index in inbox list pagination
     * @type number
     * @memberof InboxControllerApigetOrganizationInboxes
     */
    page?: number
    /**
     * Optional page size in inbox list pagination
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
}

export interface InboxControllerApiSendEmailRequest {
    /**
     * ID of the inbox you want to send the email from
     * @type string
     * @memberof InboxControllerApisendEmail
     */
    inboxId: string
    /**
     * Options for the email
     * @type SendEmailOptions
     * @memberof InboxControllerApisendEmail
     */
    sendEmailOptions?: SendEmailOptions
}

export interface InboxControllerApiSendEmailAndConfirmRequest {
    /**
     * ID of the inbox you want to send the email from
     * @type string
     * @memberof InboxControllerApisendEmailAndConfirm
     */
    inboxId: string
    /**
     * Options for the email
     * @type SendEmailOptions
     * @memberof InboxControllerApisendEmailAndConfirm
     */
    sendEmailOptions?: SendEmailOptions
}

export interface InboxControllerApiSendTestEmailRequest {
    /**
     * inboxId
     * @type string
     * @memberof InboxControllerApisendTestEmail
     */
    inboxId: string
}

export interface InboxControllerApiSetInboxFavouritedRequest {
    /**
     * inboxId
     * @type string
     * @memberof InboxControllerApisetInboxFavourited
     */
    inboxId: string
    /**
     * setInboxFavouritedOptions
     * @type SetInboxFavouritedOptions
     * @memberof InboxControllerApisetInboxFavourited
     */
    setInboxFavouritedOptions: SetInboxFavouritedOptions
}

export interface InboxControllerApiUpdateInboxRequest {
    /**
     * inboxId
     * @type string
     * @memberof InboxControllerApiupdateInbox
     */
    inboxId: string
    /**
     * updateInboxOptions
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
     * Create a new inbox and with a randomized email address to send and receive from. Pass emailAddress parameter if you wish to use a specific email address. Creating an inbox is required before sending or receiving emails. If writing tests it is recommended that you create a new inbox during each test method so that it is unique and empty. 
     * Create an inbox email address. An inbox has a real email address and can send and receive emails. Inboxes can be either `SMTP` or `HTTP` inboxes.
     * @param param the request object
     */
    public createInbox(param: InboxControllerApiCreateInboxRequest, options?: Configuration): Promise<Inbox> {
        return this.api.createInbox(param.allowTeamAccess, param.description, param.emailAddress, param.expiresAt, param.expiresIn, param.favourite, param.inboxType, param.name, param.tags, param.useDomainPool,  options).toPromise();
    }

    /**
     * Create an inbox with default options. Uses MailSlurp domain pool address and is private.
     * @param param the request object
     */
    public createInboxWithDefaults(param: InboxControllerApiCreateInboxWithDefaultsRequest, options?: Configuration): Promise<Inbox> {
        return this.api.createInboxWithDefaults( options).toPromise();
    }

    /**
     * Additional endpoint that allows inbox creation with request body options. Can be more flexible that other methods for some clients.
     * Create an inbox with options. Extended options for inbox creation.
     * @param param the request object
     */
    public createInboxWithOptions(param: InboxControllerApiCreateInboxWithOptionsRequest, options?: Configuration): Promise<Inbox> {
        return this.api.createInboxWithOptions(param.createInboxDto,  options).toPromise();
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
     * List inboxes in paginated form. The results are available on the `content` property of the returned object. This method allows for page index (zero based), page size (how many results to return), and a sort direction (based on createdAt time). You Can also filter by whether an inbox is favorited or use email address pattern. This method is the recommended way to query inboxes. The alternative `getInboxes` method returns a full list of inboxes but is limited to 100 results. Results do not include team access inboxes by default. Use organization method to list team inboxes or set `teamAccess` to true.
     * List All Inboxes Paginated
     * @param param the request object
     */
    public getAllInboxes(param: InboxControllerApiGetAllInboxesRequest, options?: Configuration): Promise<PageInboxProjection> {
        return this.api.getAllInboxes(param.favourite, param.page, param.search, param.size, param.sort, param.tag, param.teamAccess,  options).toPromise();
    }

    /**
     * List emails that an inbox has received. Only emails that are sent to the inbox's email address will appear in the inbox. It may take several seconds for any email you send to an inbox's email address to appear in the inbox. To make this endpoint wait for a minimum number of emails use the `minCount` parameter. The server will retry the inbox database until the `minCount` is satisfied or the `retryTimeout` is reached
     * Get emails in an Inbox. This method is not idempotent as it allows retries and waits if you want certain conditions to be met before returning. For simple listing and sorting of known emails use the email controller instead.
     * @param param the request object
     */
    public getEmails(param: InboxControllerApiGetEmailsRequest, options?: Configuration): Promise<Array<EmailPreview>> {
        return this.api.getEmails(param.inboxId, param.limit, param.minCount, param.retryTimeout, param.since, param.size, param.sort,  options).toPromise();
    }

    /**
     * Returns an inbox's properties, including its email address and ID.
     * Get Inbox. Returns properties of an inbox.
     * @param param the request object
     */
    public getInbox(param: InboxControllerApiGetInboxRequest, options?: Configuration): Promise<Inbox> {
        return this.api.getInbox(param.inboxId,  options).toPromise();
    }

    /**
     * Get a paginated list of emails in an inbox. Does not hold connections open.
     * Get inbox emails paginated
     * @param param the request object
     */
    public getInboxEmailsPaginated(param: InboxControllerApiGetInboxEmailsPaginatedRequest, options?: Configuration): Promise<PageEmailPreview> {
        return this.api.getInboxEmailsPaginated(param.inboxId, param.page, param.size, param.sort,  options).toPromise();
    }

    /**
     * Returns an inbox's sent email receipts. Call individual sent email endpoints for more details. Note for privacy reasons the full body of sent emails is never stored. An MD5 hash hex is available for comparison instead.
     * Get Inbox Sent Emails
     * @param param the request object
     */
    public getInboxSentEmails(param: InboxControllerApiGetInboxSentEmailsRequest, options?: Configuration): Promise<PageSentEmailProjection> {
        return this.api.getInboxSentEmails(param.inboxId, param.page, param.size, param.sort,  options).toPromise();
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
     * List the inboxes you have created. Note use of the more advanced `getAllEmails` is recommended. You can provide a limit and sort parameter.
     * List Inboxes and email eddresses
     * @param param the request object
     */
    public getInboxes(param: InboxControllerApiGetInboxesRequest, options?: Configuration): Promise<Array<Inbox>> {
        return this.api.getInboxes(param.size, param.sort,  options).toPromise();
    }

    /**
     * List organization inboxes in paginated form. These are inboxes created with `allowTeamAccess` flag enabled. Organization inboxes are `readOnly` for non-admin users. The results are available on the `content` property of the returned object. This method allows for page index (zero based), page size (how many results to return), and a sort direction (based on createdAt time). 
     * List Organization Inboxes Paginated
     * @param param the request object
     */
    public getOrganizationInboxes(param: InboxControllerApiGetOrganizationInboxesRequest, options?: Configuration): Promise<PageOrganizationInboxProjection> {
        return this.api.getOrganizationInboxes(param.page, param.size, param.sort,  options).toPromise();
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
     * Send an inbox a test email to test email receiving is working
     * Send a test email to inbox
     * @param param the request object
     */
    public sendTestEmail(param: InboxControllerApiSendTestEmailRequest, options?: Configuration): Promise<void> {
        return this.api.sendTestEmail(param.inboxId,  options).toPromise();
    }

    /**
     * Set and return new favourite state for an inbox
     * Set inbox favourited state
     * @param param the request object
     */
    public setInboxFavourited(param: InboxControllerApiSetInboxFavouritedRequest, options?: Configuration): Promise<void | Inbox> {
        return this.api.setInboxFavourited(param.inboxId, param.setInboxFavouritedOptions,  options).toPromise();
    }

    /**
     * Update editable fields on an inbox
     * Update Inbox. Change name and description. Email address is not editable.
     * @param param the request object
     */
    public updateInbox(param: InboxControllerApiUpdateInboxRequest, options?: Configuration): Promise<void | Inbox> {
        return this.api.updateInbox(param.inboxId, param.updateInboxOptions,  options).toPromise();
    }

}

import { ObservableMailServerControllerApi } from "./ObservableAPI.ts";
import { MailServerControllerApiRequestFactory, MailServerControllerApiResponseProcessor} from "../apis/MailServerControllerApi.ts";

export interface MailServerControllerApiDescribeMailServerDomainRequest {
    /**
     * describeOptions
     * @type DescribeDomainOptions
     * @memberof MailServerControllerApidescribeMailServerDomain
     */
    describeOptions: DescribeDomainOptions
}

export interface MailServerControllerApiGetDnsLookupRequest {
    /**
     * dnsLookupOptions
     * @type DNSLookupOptions
     * @memberof MailServerControllerApigetDnsLookup
     */
    dnsLookupOptions: DNSLookupOptions
}

export interface MailServerControllerApiGetIpAddressRequest {
    /**
     * name
     * @type string
     * @memberof MailServerControllerApigetIpAddress
     */
    name: string
}

export interface MailServerControllerApiVerifyEmailAddressRequest {
    /**
     * verifyOptions
     * @type VerifyEmailAddressOptions
     * @memberof MailServerControllerApiverifyEmailAddress
     */
    verifyOptions: VerifyEmailAddressOptions
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
    public describeMailServerDomain(param: MailServerControllerApiDescribeMailServerDomainRequest, options?: Configuration): Promise<void | DescribeMailServerDomainResult> {
        return this.api.describeMailServerDomain(param.describeOptions,  options).toPromise();
    }

    /**
     * Lookup DNS records for a domain
     * @param param the request object
     */
    public getDnsLookup(param: MailServerControllerApiGetDnsLookupRequest, options?: Configuration): Promise<void | DNSLookupResults> {
        return this.api.getDnsLookup(param.dnsLookupOptions,  options).toPromise();
    }

    /**
     * Get IP address for a domain
     * @param param the request object
     */
    public getIpAddress(param: MailServerControllerApiGetIpAddressRequest, options?: Configuration): Promise<IPAddressResult | void> {
        return this.api.getIpAddress(param.name,  options).toPromise();
    }

    /**
     * Verify the existence of an email address at a given mail server.
     * @param param the request object
     */
    public verifyEmailAddress(param: MailServerControllerApiVerifyEmailAddressRequest, options?: Configuration): Promise<void | EmailVerificationResult> {
        return this.api.verifyEmailAddress(param.verifyOptions,  options).toPromise();
    }

}

import { ObservableMissedEmailControllerApi } from "./ObservableAPI.ts";
import { MissedEmailControllerApiRequestFactory, MissedEmailControllerApiResponseProcessor} from "../apis/MissedEmailControllerApi.ts";

export interface MissedEmailControllerApiGetAllMissedEmailsRequest {
    /**
     * Optional page index in inbox list pagination
     * @type number
     * @memberof MissedEmailControllerApigetAllMissedEmails
     */
    page?: number
    /**
     * Optional page size in inbox list pagination
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
}

export interface MissedEmailControllerApiGetMissedEmailRequest {
    /**
     * MissedEmailId
     * @type string
     * @memberof MissedEmailControllerApigetMissedEmail
     */
    missedEmailId: string
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
        return this.api.getAllMissedEmails(param.page, param.size, param.sort,  options).toPromise();
    }

    /**
     * Get MissedEmail
     * @param param the request object
     */
    public getMissedEmail(param: MissedEmailControllerApiGetMissedEmailRequest, options?: Configuration): Promise<MissedEmail> {
        return this.api.getMissedEmail(param.missedEmailId,  options).toPromise();
    }

}

import { ObservableSentEmailsControllerApi } from "./ObservableAPI.ts";
import { SentEmailsControllerApiRequestFactory, SentEmailsControllerApiResponseProcessor} from "../apis/SentEmailsControllerApi.ts";

export interface SentEmailsControllerApiGetSentEmailRequest {
    /**
     * id
     * @type string
     * @memberof SentEmailsControllerApigetSentEmail
     */
    id: string
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
}

export interface SentEmailsControllerApiGetSentOrganizationEmailsRequest {
    /**
     * Optional inboxId to filter sender of sent emails by
     * @type string
     * @memberof SentEmailsControllerApigetSentOrganizationEmails
     */
    inboxId?: string
    /**
     * Optional page index in inbox sent email list pagination
     * @type number
     * @memberof SentEmailsControllerApigetSentOrganizationEmails
     */
    page?: number
    /**
     * Optional page size in inbox sent email list pagination
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
}

export class ObjectSentEmailsControllerApi {
    private api: ObservableSentEmailsControllerApi

    public constructor(configuration: Configuration, requestFactory?: SentEmailsControllerApiRequestFactory, responseProcessor?: SentEmailsControllerApiResponseProcessor) {
        this.api = new ObservableSentEmailsControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get sent email receipt
     * @param param the request object
     */
    public getSentEmail(param: SentEmailsControllerApiGetSentEmailRequest, options?: Configuration): Promise<SentEmailDto> {
        return this.api.getSentEmail(param.id,  options).toPromise();
    }

    /**
     * Get all sent emails in paginated form
     * @param param the request object
     */
    public getSentEmails(param: SentEmailsControllerApiGetSentEmailsRequest, options?: Configuration): Promise<PageSentEmailProjection> {
        return this.api.getSentEmails(param.inboxId, param.page, param.size, param.sort,  options).toPromise();
    }

    /**
     * Get all sent organization emails in paginated form
     * @param param the request object
     */
    public getSentOrganizationEmails(param: SentEmailsControllerApiGetSentOrganizationEmailsRequest, options?: Configuration): Promise<PageSentEmailProjection> {
        return this.api.getSentOrganizationEmails(param.inboxId, param.page, param.size, param.sort,  options).toPromise();
    }

}

import { ObservableTemplateControllerApi } from "./ObservableAPI.ts";
import { TemplateControllerApiRequestFactory, TemplateControllerApiResponseProcessor} from "../apis/TemplateControllerApi.ts";

export interface TemplateControllerApiCreateTemplateRequest {
    /**
     * createTemplateOptions
     * @type CreateTemplateOptions
     * @memberof TemplateControllerApicreateTemplate
     */
    createTemplateOptions: CreateTemplateOptions
}

export interface TemplateControllerApiDeleteTemplateRequest {
    /**
     * TemplateId
     * @type string
     * @memberof TemplateControllerApideleteTemplate
     */
    templateId: string
}

export interface TemplateControllerApiGetAllTemplatesRequest {
    /**
     * Optional page index in inbox list pagination
     * @type number
     * @memberof TemplateControllerApigetAllTemplates
     */
    page?: number
    /**
     * Optional page size in inbox list pagination
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
}

export interface TemplateControllerApiGetTemplateRequest {
    /**
     * TemplateId
     * @type string
     * @memberof TemplateControllerApigetTemplate
     */
    templateId: string
}

export interface TemplateControllerApiGetTemplatesRequest {
}

export class ObjectTemplateControllerApi {
    private api: ObservableTemplateControllerApi

    public constructor(configuration: Configuration, requestFactory?: TemplateControllerApiRequestFactory, responseProcessor?: TemplateControllerApiResponseProcessor) {
        this.api = new ObservableTemplateControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a Template
     * @param param the request object
     */
    public createTemplate(param: TemplateControllerApiCreateTemplateRequest, options?: Configuration): Promise<TemplateDto> {
        return this.api.createTemplate(param.createTemplateOptions,  options).toPromise();
    }

    /**
     * Delete Template
     * @param param the request object
     */
    public deleteTemplate(param: TemplateControllerApiDeleteTemplateRequest, options?: Configuration): Promise<void> {
        return this.api.deleteTemplate(param.templateId,  options).toPromise();
    }

    /**
     * Get all Templates in paginated format
     * @param param the request object
     */
    public getAllTemplates(param: TemplateControllerApiGetAllTemplatesRequest, options?: Configuration): Promise<PageTemplateProjection> {
        return this.api.getAllTemplates(param.page, param.size, param.sort,  options).toPromise();
    }

    /**
     * Get Template
     * @param param the request object
     */
    public getTemplate(param: TemplateControllerApiGetTemplateRequest, options?: Configuration): Promise<TemplateDto> {
        return this.api.getTemplate(param.templateId,  options).toPromise();
    }

    /**
     * Get all Templates
     * @param param the request object
     */
    public getTemplates(param: TemplateControllerApiGetTemplatesRequest, options?: Configuration): Promise<Array<TemplateProjection>> {
        return this.api.getTemplates( options).toPromise();
    }

}

import { ObservableWaitForControllerApi } from "./ObservableAPI.ts";
import { WaitForControllerApiRequestFactory, WaitForControllerApiResponseProcessor} from "../apis/WaitForControllerApi.ts";

export interface WaitForControllerApiWaitForRequest {
    /**
     * Conditions to apply to emails that you are waiting for
     * @type WaitForConditions
     * @memberof WaitForControllerApiwaitFor
     */
    waitForConditions?: WaitForConditions
}

export interface WaitForControllerApiWaitForEmailCountRequest {
    /**
     * Number of emails to wait for. Must be greater that 1
     * @type number
     * @memberof WaitForControllerApiwaitForEmailCount
     */
    count?: number
    /**
     * Id of the inbox we are fetching emails from
     * @type string
     * @memberof WaitForControllerApiwaitForEmailCount
     */
    inboxId?: string
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
}

export interface WaitForControllerApiWaitForMatchingEmailRequest {
    /**
     * matchOptions
     * @type MatchOptions
     * @memberof WaitForControllerApiwaitForMatchingEmail
     */
    matchOptions: MatchOptions
    /**
     * Number of emails to wait for. Must be greater that 1
     * @type number
     * @memberof WaitForControllerApiwaitForMatchingEmail
     */
    count?: number
    /**
     * Id of the inbox we are fetching emails from
     * @type string
     * @memberof WaitForControllerApiwaitForMatchingEmail
     */
    inboxId?: string
    /**
     * Max milliseconds to wait
     * @type number
     * @memberof WaitForControllerApiwaitForMatchingEmail
     */
    timeout?: number
    /**
     * Optional filter for unread only
     * @type boolean
     * @memberof WaitForControllerApiwaitForMatchingEmail
     */
    unreadOnly?: boolean
}

export interface WaitForControllerApiWaitForMatchingFirstEmailRequest {
    /**
     * matchOptions
     * @type MatchOptions
     * @memberof WaitForControllerApiwaitForMatchingFirstEmail
     */
    matchOptions: MatchOptions
    /**
     * Id of the inbox we are matching an email for
     * @type string
     * @memberof WaitForControllerApiwaitForMatchingFirstEmail
     */
    inboxId?: string
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
    public waitFor(param: WaitForControllerApiWaitForRequest, options?: Configuration): Promise<Array<EmailPreview> | void> {
        return this.api.waitFor(param.waitForConditions,  options).toPromise();
    }

    /**
     * If inbox contains count or more emails at time of request then return count worth of emails. If not wait until the count is reached and return those or return an error if timeout is exceeded.
     * Wait for and return count number of emails. Hold connection until inbox count matches expected or timeout occurs
     * @param param the request object
     */
    public waitForEmailCount(param: WaitForControllerApiWaitForEmailCountRequest, options?: Configuration): Promise<Array<EmailPreview>> {
        return this.api.waitForEmailCount(param.count, param.inboxId, param.timeout, param.unreadOnly,  options).toPromise();
    }

    /**
     * Will return either the last received email or wait for an email to arrive and return that. If you need to wait for an email for a non-empty inbox set `unreadOnly=true` or see the other receive methods such as `waitForNthEmail` or `waitForEmailCount`.
     * Fetch inbox's latest email or if empty wait for an email to arrive
     * @param param the request object
     */
    public waitForLatestEmail(param: WaitForControllerApiWaitForLatestEmailRequest, options?: Configuration): Promise<Email> {
        return this.api.waitForLatestEmail(param.inboxId, param.timeout, param.unreadOnly,  options).toPromise();
    }

    /**
     * Perform a search of emails in an inbox with the given patterns. If results match expected count then return or else retry the search until results are found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options. An example payload is `{ matches: [{field: 'SUBJECT',should:'CONTAIN',value:'needle'}] }`. You can use an array of matches and they will be applied sequentially to filter out emails. If you want to perform matches and extractions of content using Regex patterns see the EmailController `getEmailContentMatch` method.
     * Wait or return list of emails that match simple matching patterns
     * @param param the request object
     */
    public waitForMatchingEmail(param: WaitForControllerApiWaitForMatchingEmailRequest, options?: Configuration): Promise<Array<EmailPreview> | void> {
        return this.api.waitForMatchingEmail(param.matchOptions, param.count, param.inboxId, param.timeout, param.unreadOnly,  options).toPromise();
    }

    /**
     * Perform a search of emails in an inbox with the given patterns. If a result if found then return or else retry the search until a result is found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options. An example payload is `{ matches: [{field: 'SUBJECT',should:'CONTAIN',value:'needle'}] }`. You can use an array of matches and they will be applied sequentially to filter out emails. If you want to perform matches and extractions of content using Regex patterns see the EmailController `getEmailContentMatch` method.
     * Wait for or return the first email that matches provided MatchOptions array
     * @param param the request object
     */
    public waitForMatchingFirstEmail(param: WaitForControllerApiWaitForMatchingFirstEmailRequest, options?: Configuration): Promise<Email | void> {
        return this.api.waitForMatchingFirstEmail(param.matchOptions, param.inboxId, param.timeout, param.unreadOnly,  options).toPromise();
    }

    /**
     * If nth email is already present in inbox then return it. If not hold the connection open until timeout expires or the nth email is received and returned.
     * Wait for or fetch the email with a given index in the inbox specified. IF indx doesn't exist waits for it to exist or timeout to occur.
     * @param param the request object
     */
    public waitForNthEmail(param: WaitForControllerApiWaitForNthEmailRequest, options?: Configuration): Promise<Email> {
        return this.api.waitForNthEmail(param.inboxId, param.index, param.timeout, param.unreadOnly,  options).toPromise();
    }

}

import { ObservableWebhookControllerApi } from "./ObservableAPI.ts";
import { WebhookControllerApiRequestFactory, WebhookControllerApiResponseProcessor} from "../apis/WebhookControllerApi.ts";

export interface WebhookControllerApiCreateWebhookRequest {
    /**
     * inboxId
     * @type string
     * @memberof WebhookControllerApicreateWebhook
     */
    inboxId: string
    /**
     * webhookOptions
     * @type CreateWebhookOptions
     * @memberof WebhookControllerApicreateWebhook
     */
    webhookOptions: CreateWebhookOptions
}

export interface WebhookControllerApiDeleteWebhookRequest {
    /**
     * inboxId
     * @type string
     * @memberof WebhookControllerApideleteWebhook
     */
    inboxId: string
    /**
     * webhookId
     * @type string
     * @memberof WebhookControllerApideleteWebhook
     */
    webhookId: string
}

export interface WebhookControllerApiGetAllWebhooksRequest {
    /**
     * Optional page index in list pagination
     * @type number
     * @memberof WebhookControllerApigetAllWebhooks
     */
    page?: number
    /**
     * Optional page size in list pagination
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
}

export interface WebhookControllerApiGetTestWebhookPayloadRequest {
    /**
     * eventName
     * @type &#39;EMAIL_RECEIVED&#39; | &#39;NEW_EMAIL&#39; | &#39;NEW_CONTACT&#39; | &#39;NEW_ATTACHMENT&#39;
     * @memberof WebhookControllerApigetTestWebhookPayload
     */
    eventName?: 'EMAIL_RECEIVED' | 'NEW_EMAIL' | 'NEW_CONTACT' | 'NEW_ATTACHMENT'
}

export interface WebhookControllerApiGetTestWebhookPayloadNewAttachmentRequest {
}

export interface WebhookControllerApiGetTestWebhookPayloadNewContactRequest {
}

export interface WebhookControllerApiGetTestWebhookPayloadNewEmailRequest {
}

export interface WebhookControllerApiGetWebhookRequest {
    /**
     * webhookId
     * @type string
     * @memberof WebhookControllerApigetWebhook
     */
    webhookId: string
}

export interface WebhookControllerApiGetWebhooksRequest {
    /**
     * inboxId
     * @type string
     * @memberof WebhookControllerApigetWebhooks
     */
    inboxId: string
}

export interface WebhookControllerApiSendTestDataRequest {
    /**
     * webhookId
     * @type string
     * @memberof WebhookControllerApisendTestData
     */
    webhookId: string
}

export class ObjectWebhookControllerApi {
    private api: ObservableWebhookControllerApi

    public constructor(configuration: Configuration, requestFactory?: WebhookControllerApiRequestFactory, responseProcessor?: WebhookControllerApiResponseProcessor) {
        this.api = new ObservableWebhookControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get notified whenever an inbox receives an email via a WebHook URL. An emailID will be posted to this URL every time an email is received for this inbox. The URL must be publicly reachable by the MailSlurp server. You can provide basicAuth values if you wish to secure this endpoint.
     * Attach a WebHook URL to an inbox
     * @param param the request object
     */
    public createWebhook(param: WebhookControllerApiCreateWebhookRequest, options?: Configuration): Promise<WebhookDto> {
        return this.api.createWebhook(param.inboxId, param.webhookOptions,  options).toPromise();
    }

    /**
     * Delete and disable a Webhook for an Inbox
     * @param param the request object
     */
    public deleteWebhook(param: WebhookControllerApiDeleteWebhookRequest, options?: Configuration): Promise<void> {
        return this.api.deleteWebhook(param.inboxId, param.webhookId,  options).toPromise();
    }

    /**
     * List webhooks in paginated form. Allows for page index, page size, and sort direction.
     * List Webhooks Paginated
     * @param param the request object
     */
    public getAllWebhooks(param: WebhookControllerApiGetAllWebhooksRequest, options?: Configuration): Promise<PageWebhookProjection> {
        return this.api.getAllWebhooks(param.page, param.size, param.sort,  options).toPromise();
    }

    /**
     * Get test webhook payload example. Response content depends on eventName passed. Uses `EMAIL_RECEIVED` as default.
     * @param param the request object
     */
    public getTestWebhookPayload(param: WebhookControllerApiGetTestWebhookPayloadRequest, options?: Configuration): Promise<AbstractWebhookPayload> {
        return this.api.getTestWebhookPayload(param.eventName,  options).toPromise();
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
     * Get a webhook for an Inbox
     * @param param the request object
     */
    public getWebhook(param: WebhookControllerApiGetWebhookRequest, options?: Configuration): Promise<WebhookDto> {
        return this.api.getWebhook(param.webhookId,  options).toPromise();
    }

    /**
     * Get all webhooks for an Inbox
     * @param param the request object
     */
    public getWebhooks(param: WebhookControllerApiGetWebhooksRequest, options?: Configuration): Promise<Array<WebhookDto>> {
        return this.api.getWebhooks(param.inboxId,  options).toPromise();
    }

    /**
     * Send webhook test data
     * @param param the request object
     */
    public sendTestData(param: WebhookControllerApiSendTestDataRequest, options?: Configuration): Promise<WebhookTestResult> {
        return this.api.sendTestData(param.webhookId,  options).toPromise();
    }

}
