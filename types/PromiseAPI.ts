import { ResponseContext, RequestContext, HttpFile } from '../http/http.ts';
import * as models from '../models/all.ts';
import { Configuration} from '../configuration.ts'

import { Alias } from '../models/Alias.ts';
import { AliasDto } from '../models/AliasDto.ts';
import { AliasProjection } from '../models/AliasProjection.ts';
import { AttachmentMetaData } from '../models/AttachmentMetaData.ts';
import { BasicAuthOptions } from '../models/BasicAuthOptions.ts';
import { BulkSendEmailOptions } from '../models/BulkSendEmailOptions.ts';
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
import { WebhookProjection } from '../models/WebhookProjection.ts';
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
     * @param page Optional page index alias email list pagination
     * @param size Optional page size alias email list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getAliasEmails(aliasId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageEmailProjection> {
        const result = this.api.getAliasEmails(aliasId, page, size, sort, options);
        return result.toPromise();
    }

    /**
     * Returns threads created for an email alias in paginated form
     * Get threads created for an alias
     * @param aliasId aliasId
     * @param page Optional page index in thread list pagination
     * @param size Optional page size in thread list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getAliasThreads(aliasId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageThreadProjection> {
        const result = this.api.getAliasThreads(aliasId, page, size, sort, options);
        return result.toPromise();
    }

    /**
     * Get all email aliases in paginated form
     * Get all email aliases you have created
     * @param page Optional page index in alias list pagination
     * @param size Optional page size in alias list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getAliases(page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageAlias> {
        const result = this.api.getAliases(page, size, sort, options);
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
    public updateAlias(aliasId: string, updateAliasOptions: UpdateAliasOptions, options?: Configuration): Promise<void | Alias> {
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
     * @param string Optional contentType for file. For instance &#x60;application/pdf&#x60;
     * @param filename Optional filename to save upload with
     * @param byteArray Byte array request body
     */
    public uploadAttachmentBytes(string?: string, filename?: string, byteArray?: string, options?: Configuration): Promise<Array<string>> {
        const result = this.api.uploadAttachmentBytes(string, filename, byteArray, options);
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
     * @param expiresAt expiresAt
     * @param expiresIn expiresIn
     * @param useDomainPool useDomainPool
     */
    public createNewEmailAddress(allowTeamAccess?: boolean, expiresAt?: Date, expiresIn?: number, useDomainPool?: boolean, options?: Configuration): Promise<Inbox> {
        const result = this.api.createNewEmailAddress(allowTeamAccess, expiresAt, expiresIn, useDomainPool, options);
        return result.toPromise();
    }

    /**
     * Returns an Inbox with an `id` and an `emailAddress`
     * Create new random inbox
     * @param allowTeamAccess allowTeamAccess
     * @param expiresAt expiresAt
     * @param expiresIn expiresIn
     * @param useDomainPool useDomainPool
     */
    public createNewEmailAddress1(allowTeamAccess?: boolean, expiresAt?: Date, expiresIn?: number, useDomainPool?: boolean, options?: Configuration): Promise<Inbox> {
        const result = this.api.createNewEmailAddress1(allowTeamAccess, expiresAt, expiresIn, useDomainPool, options);
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
     * @param page Optional page index in inbox list pagination
     * @param size Optional page size in inbox list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getAllContacts(page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageContactProjection> {
        const result = this.api.getAllContacts(page, size, sort, options);
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
     * Delete all emails
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
     * Get email attachment bytes. If you have trouble with byte responses try the `downloadAttachmentBase64` response endpoints.
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
     * Get email attachment as base64 encoded string (alternative to binary responses)
     * @param attachmentId ID of attachment
     * @param emailId ID of email
     */
    public downloadAttachmentBase64(attachmentId: string, emailId: string, options?: Configuration): Promise<DownloadAttachmentDto> {
        const result = this.api.downloadAttachmentBase64(attachmentId, emailId, options);
        return result.toPromise();
    }

    /**
     * Forward an existing email to new recipients.
     * Forward email
     * @param emailId ID of email
     * @param forwardEmailOptions forwardEmailOptions
     */
    public forwardEmail(emailId: string, forwardEmailOptions: ForwardEmailOptions, options?: Configuration): Promise<void> {
        const result = this.api.forwardEmail(emailId, forwardEmailOptions, options);
        return result.toPromise();
    }

    /**
     * Returns the metadata such as name and content-type for a given attachment and email.
     * Get email attachment metadata
     * @param attachmentId ID of attachment
     * @param emailId ID of email
     */
    public getAttachmentMetaData(attachmentId: string, emailId: string, options?: Configuration): Promise<AttachmentMetaData> {
        const result = this.api.getAttachmentMetaData(attachmentId, emailId, options);
        return result.toPromise();
    }

    /**
     * Returns an array of attachment metadata such as name and content-type for a given email if present.
     * Get all email attachment metadata
     * @param emailId ID of email
     */
    public getAttachments(emailId: string, options?: Configuration): Promise<Array<AttachmentMetaData>> {
        const result = this.api.getAttachments(emailId, options);
        return result.toPromise();
    }

    /**
     * Returns a email summary object with headers and content. To retrieve the raw unparsed email use the getRawEmail endpoints
     * Get email content
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
     * Get email content as HTML
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
     * Get all emails
     * @param inboxId Optional inbox ids to filter by. Can be repeated. By default will use all inboxes belonging to your account.
     * @param page Optional page index in email list pagination
     * @param size Optional page size in email list pagination. Maximum size is 100. Use page index and sort to page through larger results
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param unreadOnly Optional filter for unread emails only. All emails are considered unread until they are viewed in the dashboard or requested directly
     */
    public getEmailsPaginated(inboxId?: Array<string>, page?: number, size?: number, sort?: 'ASC' | 'DESC', unreadOnly?: boolean, options?: Configuration): Promise<PageEmailProjection> {
        const result = this.api.getEmailsPaginated(inboxId, page, size, sort, unreadOnly, options);
        return result.toPromise();
    }

    /**
     * Get the newest email in all inboxes or in a passed set of inbox IDs
     * Get latest email
     * @param inboxIds Optional set of inboxes to filter by. Only get the latest email from these inbox IDs
     */
    public getLatestEmail(inboxIds?: Array<string>, options?: Configuration): Promise<Email> {
        const result = this.api.getLatestEmail(inboxIds, options);
        return result.toPromise();
    }

    /**
     * Get the newest email in all inboxes or in a passed set of inbox IDs
     * Get latest email
     * @param inboxId ID of the inbox you want to get the latest email from
     */
    public getLatestEmailInInbox(inboxId?: string, options?: Configuration): Promise<Email> {
        const result = this.api.getLatestEmailInInbox(inboxId, options);
        return result.toPromise();
    }

    /**
     * By default returns all emails across all team inboxes sorted by ascending created at date. Responses are paginated. You can restrict results to a list of inbox IDs. You can also filter out read messages
     * Get all organization emails
     * @param inboxId Optional inbox ids to filter by. Can be repeated. By default will use all inboxes belonging to your account.
     * @param page Optional page index in email list pagination
     * @param size Optional page size in email list pagination. Maximum size is 100. Use page index and sort to page through larger results
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param unreadOnly Optional filter for unread emails only. All emails are considered unread until they are viewed in the dashboard or requested directly
     */
    public getOrganizationEmailsPaginated(inboxId?: Array<string>, page?: number, size?: number, sort?: 'ASC' | 'DESC', unreadOnly?: boolean, options?: Configuration): Promise<PageEmailProjection> {
        const result = this.api.getOrganizationEmailsPaginated(inboxId, page, size, sort, unreadOnly, options);
        return result.toPromise();
    }

    /**
     * Returns a raw, unparsed, and unprocessed email. If your client has issues processing the response it is likely due to the response content-type which is text/plain. If you need a JSON response content-type use the getRawEmailJson endpoint
     * Get raw email string
     * @param emailId ID of email
     */
    public getRawEmailContents(emailId: string, options?: Configuration): Promise<string> {
        const result = this.api.getRawEmailContents(emailId, options);
        return result.toPromise();
    }

    /**
     * Returns a raw, unparsed, and unprocessed email wrapped in a JSON response object for easier handling when compared with the getRawEmail text/plain response
     * Get raw email in JSON
     * @param emailId ID of email
     */
    public getRawEmailJson(emailId: string, options?: Configuration): Promise<RawEmailJson> {
        const result = this.api.getRawEmailJson(emailId, options);
        return result.toPromise();
    }

    /**
     * Get number of emails unread
     * Get unread email count
     */
    public getUnreadEmailCount(options?: Configuration): Promise<UnreadCount> {
        const result = this.api.getUnreadEmailCount(options);
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
     * Validate the HTML content of email if HTML is found. Considered valid if no HTML.
     * Validate email
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
     * @param page Optional page index in inbox sent email list pagination
     * @param size Optional page size in inbox sent email list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getExpiredInboxes(page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageExpiredInboxRecordProjection> {
        const result = this.api.getExpiredInboxes(page, size, sort, options);
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
     * @param page Optional page index in inbox list pagination
     * @param size Optional page size in inbox list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getAllGroups(page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageGroupProjection> {
        const result = this.api.getAllGroups(page, size, sort, options);
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
     * @param page Optional page index in group contact pagination
     * @param size Optional page size in group contact pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getGroupWithContactsPaginated(groupId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageContactProjection> {
        const result = this.api.getGroupWithContactsPaginated(groupId, page, size, sort, options);
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
     * Create an Inbox (email address)
     * @param allowTeamAccess Grant team access to this inbox and the emails that belong to it for team members of your organization.
     * @param description Optional description of the inbox for labelling purposes. Is shown in the dashboard and can be used with
     * @param emailAddress A custom email address to use with the inbox. Defaults to null. When null MailSlurp will assign a random email address to the inbox such as &#x60;123@mailslurp.com&#x60;. If you use the &#x60;useDomainPool&#x60; option when the email address is null it will generate an email address with a more varied domain ending such as &#x60;123@mailslurp.info&#x60; or &#x60;123@mailslurp.biz&#x60;. When a custom email address is provided the address is split into a domain and the domain is queried against your user. If you have created the domain in the MailSlurp dashboard and verified it you can use any email address that ends with the domain. Send an email to this address and the inbox will receive and store it for you. To retrieve the email use the Inbox and Email Controller endpoints with the inbox ID.
     * @param expiresAt Optional inbox expiration date. If null then this inbox is permanent and the emails in it won&#39;t be deleted. If an expiration date is provided or is required by your plan the inbox will be closed when the expiration time is reached. Expired inboxes still contain their emails but can no longer send or receive emails. An ExpiredInboxRecord is created when an inbox and the email address and inbox ID are recorded. The expiresAt property is a timestamp string in ISO DateTime Format yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSXXX.
     * @param expiresIn Number of milliseconds that inbox should exist for
     * @param favourite Is the inbox favorited. Favouriting inboxes is typically done in the dashboard for quick access or filtering
     * @param name Optional name of the inbox. Displayed in the dashboard for easier search
     * @param tags Tags that inbox has been tagged with. Tags can be added to inboxes to group different inboxes within an account. You can also search for inboxes by tag in the dashboard UI.
     * @param useDomainPool Use the MailSlurp domain name pool with this inbox when creating the email address. Defaults to null. If enabled the inbox will be an email address with a domain randomly chosen from a list of the MailSlurp domains. This is useful when the default &#x60;@mailslurp.com&#x60; email addresses used with inboxes are blocked or considered spam by a provider or receiving service. When domain pool is enabled an email address will be generated ending in &#x60;@mailslurp.{world,info,xyz,...}&#x60; . This means a TLD is randomly selecting from a list of &#x60;.biz&#x60;, &#x60;.info&#x60;, &#x60;.xyz&#x60; etc to add variance to the generated email addresses. When null or false MailSlurp uses the default behavior of &#x60;@mailslurp.com&#x60; or custom email address provided by the emailAddress field.
     */
    public createInbox(allowTeamAccess?: boolean, description?: string, emailAddress?: string, expiresAt?: Date, expiresIn?: number, favourite?: boolean, name?: string, tags?: Array<string>, useDomainPool?: boolean, options?: Configuration): Promise<Inbox> {
        const result = this.api.createInbox(allowTeamAccess, description, emailAddress, expiresAt, expiresIn, favourite, name, tags, useDomainPool, options);
        return result.toPromise();
    }

    /**
     * Additional endpoint that allows inbox creation with request body options. Can be more flexible that other methods for some clients.
     * Create an inbox with additional options
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
     * List inboxes in paginated form. The results are available on the `content` property of the returned object. This method allows for page index (zero based), page size (how many results to return), and a sort direction (based on createdAt time). You Can also filter by whether an inbox is favorited or use email address pattern. This method is the recommended way to query inboxes. The alternative `getInboxes` method returns a full list of inboxes but is limited to 100 results. Results do not include team access inboxes by default. Use organization method to list team inboxes or set `teamAccess` to true.
     * List All Inboxes Paginated
     * @param favourite Optionally filter results for favourites only
     * @param page Optional page index in inbox list pagination
     * @param search Optionally filter by search words partial matching ID, tags, name, and email address
     * @param size Optional page size in inbox list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param tag Optionally filter by tags. Will return inboxes that include given tags
     * @param teamAccess Optionally filter by team access. Defaults to false so organization inboxes are not included
     */
    public getAllInboxes(favourite?: boolean, page?: number, search?: string, size?: number, sort?: 'ASC' | 'DESC', tag?: string, teamAccess?: boolean, options?: Configuration): Promise<PageInboxProjection> {
        const result = this.api.getAllInboxes(favourite, page, search, size, sort, tag, teamAccess, options);
        return result.toPromise();
    }

    /**
     * List emails that an inbox has received. Only emails that are sent to the inbox's email address will appear in the inbox. It may take several seconds for any email you send to an inbox's email address to appear in the inbox. To make this endpoint wait for a minimum number of emails use the `minCount` parameter. The server will retry the inbox database until the `minCount` is satisfied or the `retryTimeout` is reached
     * Get emails in an Inbox. This method is not idempotent as it allows retries and waits if you want certain conditions to be met before returning. For simple listing and sorting of known emails use the email controller instead.
     * @param inboxId Id of inbox that emails belongs to
     * @param limit Limit the result set, ordered by received date time sort direction. Maximum 100. For more listing options see the email controller
     * @param minCount Minimum acceptable email count. Will cause request to hang (and retry) until minCount is satisfied or retryTimeout is reached.
     * @param retryTimeout Maximum milliseconds to spend retrying inbox database until minCount emails are returned
     * @param since Exclude emails received before this ISO 8601 date time
     * @param size Alias for limit. Assessed first before assessing any passed limit.
     * @param sort Sort the results by received date and direction ASC or DESC
     */
    public getEmails(inboxId: string, limit?: number, minCount?: number, retryTimeout?: number, since?: Date, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<Array<EmailPreview>> {
        const result = this.api.getEmails(inboxId, limit, minCount, retryTimeout, since, size, sort, options);
        return result.toPromise();
    }

    /**
     * Returns an inbox's properties, including its email address and ID.
     * Get Inbox
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
     * @param page Optional page index in inbox emails list pagination
     * @param size Optional page size in inbox emails list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getInboxEmailsPaginated(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageEmailPreview> {
        const result = this.api.getInboxEmailsPaginated(inboxId, page, size, sort, options);
        return result.toPromise();
    }

    /**
     * Returns an inbox's sent email receipts. Call individual sent email endpoints for more details. Note for privacy reasons the full body of sent emails is never stored. An MD5 hash hex is available for comparison instead.
     * Get Inbox Sent Emails
     * @param inboxId inboxId
     * @param page Optional page index in inbox sent email list pagination
     * @param size Optional page size in inbox sent email list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getInboxSentEmails(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageSentEmailProjection> {
        const result = this.api.getInboxSentEmails(inboxId, page, size, sort, options);
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
     * List the inboxes you have created. Note use of the more advanced `getAllEmails` is recommended. You can provide a limit and sort parameter.
     * List Inboxes / Email Addresses
     * @param size Optional result size limit. Note an automatic limit of 100 results is applied. See the paginated &#x60;getAllEmails&#x60; for larger queries.
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getInboxes(size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<Array<Inbox>> {
        const result = this.api.getInboxes(size, sort, options);
        return result.toPromise();
    }

    /**
     * List organization inboxes in paginated form. These are inboxes created with `allowTeamAccess` flag enabled. Organization inboxes are `readOnly` for non-admin users. The results are available on the `content` property of the returned object. This method allows for page index (zero based), page size (how many results to return), and a sort direction (based on createdAt time). 
     * List Organization Inboxes Paginated
     * @param page Optional page index in inbox list pagination
     * @param size Optional page size in inbox list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getOrganizationInboxes(page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageOrganizationInboxProjection> {
        const result = this.api.getOrganizationInboxes(page, size, sort, options);
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
     * Sister method for standard `sendEmail` method with the benefit of returning a `SentEmail` entity confirming the successful sending of the email with link the the sent object created for it.
     * Send email and return sent confirmation
     * @param inboxId ID of the inbox you want to send the email from
     * @param sendEmailOptions Options for the email
     */
    public sendEmailAndConfirm(inboxId: string, sendEmailOptions?: SendEmailOptions, options?: Configuration): Promise<SentEmailDto> {
        const result = this.api.sendEmailAndConfirm(inboxId, sendEmailOptions, options);
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
     * Update Inbox
     * @param inboxId inboxId
     * @param updateInboxOptions updateInboxOptions
     */
    public updateInbox(inboxId: string, updateInboxOptions: UpdateInboxOptions, options?: Configuration): Promise<void | Inbox> {
        const result = this.api.updateInbox(inboxId, updateInboxOptions, options);
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
     * @param page Optional page index in inbox list pagination
     * @param size Optional page size in inbox list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getAllMissedEmails(page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageMissedEmailProjection> {
        const result = this.api.getAllMissedEmails(page, size, sort, options);
        return result.toPromise();
    }

    /**
     * Get MissedEmail
     * @param missedEmailId MissedEmailId
     */
    public getMissedEmail(missedEmailId: string, options?: Configuration): Promise<MissedEmail> {
        const result = this.api.getMissedEmail(missedEmailId, options);
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
     * Get sent email receipt
     * @param id id
     */
    public getSentEmail(id: string, options?: Configuration): Promise<SentEmailDto> {
        const result = this.api.getSentEmail(id, options);
        return result.toPromise();
    }

    /**
     * Get all sent emails in paginated form
     * @param inboxId Optional inboxId to filter sender of sent emails by
     * @param page Optional page index in inbox sent email list pagination
     * @param size Optional page size in inbox sent email list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getSentEmails(inboxId?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageSentEmailProjection> {
        const result = this.api.getSentEmails(inboxId, page, size, sort, options);
        return result.toPromise();
    }

    /**
     * Get all sent organization emails in paginated form
     * @param inboxId Optional inboxId to filter sender of sent emails by
     * @param page Optional page index in inbox sent email list pagination
     * @param size Optional page size in inbox sent email list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getSentOrganizationEmails(inboxId?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageSentEmailProjection> {
        const result = this.api.getSentOrganizationEmails(inboxId, page, size, sort, options);
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
     * @param templateId TemplateId
     */
    public deleteTemplate(templateId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteTemplate(templateId, options);
        return result.toPromise();
    }

    /**
     * Get all Templates in paginated format
     * @param page Optional page index in inbox list pagination
     * @param size Optional page size in inbox list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getAllTemplates(page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageTemplateProjection> {
        const result = this.api.getAllTemplates(page, size, sort, options);
        return result.toPromise();
    }

    /**
     * Get Template
     * @param templateId TemplateId
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
     * Wait for conditions to be met
     * @param waitForConditions Conditions to wait for
     */
    public waitFor(waitForConditions?: WaitForConditions, options?: Configuration): Promise<Array<EmailPreview> | void> {
        const result = this.api.waitFor(waitForConditions, options);
        return result.toPromise();
    }

    /**
     * If inbox contains count or more emails at time of request then return count worth of emails. If not wait until the count is reached and return those or return an error if timeout is exceeded.
     * Wait for and return count number of emails 
     * @param count Number of emails to wait for. Must be greater that 1
     * @param inboxId Id of the inbox we are fetching emails from
     * @param timeout Max milliseconds to wait
     * @param unreadOnly Optional filter for unread only
     */
    public waitForEmailCount(count?: number, inboxId?: string, timeout?: number, unreadOnly?: boolean, options?: Configuration): Promise<Array<EmailPreview>> {
        const result = this.api.waitForEmailCount(count, inboxId, timeout, unreadOnly, options);
        return result.toPromise();
    }

    /**
     * Will return either the last received email or wait for an email to arrive and return that. If you need to wait for an email for a non-empty inbox set `unreadOnly=true` or see the other receive methods such as `waitForNthEmail` or `waitForEmailCount`.
     * Fetch inbox's latest email or if empty wait for an email to arrive
     * @param inboxId Id of the inbox we are fetching emails from
     * @param timeout Max milliseconds to wait
     * @param unreadOnly Optional filter for unread only.
     */
    public waitForLatestEmail(inboxId?: string, timeout?: number, unreadOnly?: boolean, options?: Configuration): Promise<Email> {
        const result = this.api.waitForLatestEmail(inboxId, timeout, unreadOnly, options);
        return result.toPromise();
    }

    /**
     * Perform a search of emails in an inbox with the given patterns. If results match expected count then return or else retry the search until results are found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options. An example payload is `{ matches: [{field: 'SUBJECT',should:'CONTAIN',value:'needle'}] }`. You can use an array of matches and they will be applied sequentially to filter out emails. If you want to perform matches and extractions of content using Regex patterns see the EmailController `getEmailContentMatch` method.
     * Wait or return list of emails that match simple matching patterns
     * @param matchOptions matchOptions
     * @param count Number of emails to wait for. Must be greater that 1
     * @param inboxId Id of the inbox we are fetching emails from
     * @param timeout Max milliseconds to wait
     * @param unreadOnly Optional filter for unread only
     */
    public waitForMatchingEmail(matchOptions: MatchOptions, count?: number, inboxId?: string, timeout?: number, unreadOnly?: boolean, options?: Configuration): Promise<Array<EmailPreview> | void> {
        const result = this.api.waitForMatchingEmail(matchOptions, count, inboxId, timeout, unreadOnly, options);
        return result.toPromise();
    }

    /**
     * Perform a search of emails in an inbox with the given patterns. If a result if found then return or else retry the search until a result is found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options. An example payload is `{ matches: [{field: 'SUBJECT',should:'CONTAIN',value:'needle'}] }`. You can use an array of matches and they will be applied sequentially to filter out emails. If you want to perform matches and extractions of content using Regex patterns see the EmailController `getEmailContentMatch` method.
     * Wait for or return the first email that matches proved MatchOptions array
     * @param matchOptions matchOptions
     * @param inboxId Id of the inbox we are matching an email for
     * @param timeout Max milliseconds to wait
     * @param unreadOnly Optional filter for unread only
     */
    public waitForMatchingFirstEmail(matchOptions: MatchOptions, inboxId?: string, timeout?: number, unreadOnly?: boolean, options?: Configuration): Promise<Email | void> {
        const result = this.api.waitForMatchingFirstEmail(matchOptions, inboxId, timeout, unreadOnly, options);
        return result.toPromise();
    }

    /**
     * If nth email is already present in inbox then return it. If not hold the connection open until timeout expires or the nth email is received and returned.
     * Wait for or fetch the email with a given index in the inbox specified
     * @param inboxId Id of the inbox you are fetching emails from
     * @param index Zero based index of the email to wait for. If an inbox has 1 email already and you want to wait for the 2nd email pass index&#x3D;1
     * @param timeout Max milliseconds to wait for the nth email if not already present
     * @param unreadOnly Optional filter for unread only
     */
    public waitForNthEmail(inboxId?: string, index?: number, timeout?: number, unreadOnly?: boolean, options?: Configuration): Promise<Email> {
        const result = this.api.waitForNthEmail(inboxId, index, timeout, unreadOnly, options);
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
     * Delete and disable a Webhook for an Inbox
     * @param inboxId inboxId
     * @param webhookId webhookId
     */
    public deleteWebhook(inboxId: string, webhookId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteWebhook(inboxId, webhookId, options);
        return result.toPromise();
    }

    /**
     * List webhooks in paginated form. Allows for page index, page size, and sort direction.
     * List Webhooks Paginated
     * @param page Optional page index in inbox list pagination
     * @param size Optional page size in inbox list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getAllWebhooks(page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageWebhookProjection> {
        const result = this.api.getAllWebhooks(page, size, sort, options);
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
     * Get all Webhooks for an Inbox
     * @param inboxId inboxId
     */
    public getWebhooks(inboxId: string, options?: Configuration): Promise<Array<WebhookDto>> {
        const result = this.api.getWebhooks(inboxId, options);
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


