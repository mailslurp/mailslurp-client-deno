import { ResponseContext, RequestContext, HttpFile } from '../http/http.ts';
import * as models from '../models/all.ts';
import { Configuration} from '../configuration.ts'
import { Observable, of, from } from '../rxjsStub.ts';
import {mergeMap, map} from  '../rxjsStub.ts';
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
import { CountDto } from '../models/CountDto.ts';
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
import { EmailPreviewUrls } from '../models/EmailPreviewUrls.ts';
import { EmailProjection } from '../models/EmailProjection.ts';
import { EmailRecipients } from '../models/EmailRecipients.ts';
import { EmailTextLinesResult } from '../models/EmailTextLinesResult.ts';
import { EmailValidationRequest } from '../models/EmailValidationRequest.ts';
import { EmailVerificationResult } from '../models/EmailVerificationResult.ts';
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
import { InboxDto } from '../models/InboxDto.ts';
import { InboxExistsDto } from '../models/InboxExistsDto.ts';
import { InboxForwarderDto } from '../models/InboxForwarderDto.ts';
import { InboxForwarderTestOptions } from '../models/InboxForwarderTestOptions.ts';
import { InboxForwarderTestResult } from '../models/InboxForwarderTestResult.ts';
import { InboxIdItem } from '../models/InboxIdItem.ts';
import { InboxIdsResult } from '../models/InboxIdsResult.ts';
import { InboxPreview } from '../models/InboxPreview.ts';
import { InboxRulesetDto } from '../models/InboxRulesetDto.ts';
import { InboxRulesetTestOptions } from '../models/InboxRulesetTestOptions.ts';
import { InboxRulesetTestResult } from '../models/InboxRulesetTestResult.ts';
import { InlineObject } from '../models/InlineObject.ts';
import { InlineObject1 } from '../models/InlineObject1.ts';
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
import { PageEmailValidationRequest } from '../models/PageEmailValidationRequest.ts';
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
import { PageableObject } from '../models/PageableObject.ts';
import { RawEmailJson } from '../models/RawEmailJson.ts';
import { Recipient } from '../models/Recipient.ts';
import { ReplyToAliasEmailOptions } from '../models/ReplyToAliasEmailOptions.ts';
import { ReplyToEmailOptions } from '../models/ReplyToEmailOptions.ts';
import { SendEmailOptions } from '../models/SendEmailOptions.ts';
import { SendSMTPEnvelopeOptions } from '../models/SendSMTPEnvelopeOptions.ts';
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
import { ValidateEmailAddressListOptions } from '../models/ValidateEmailAddressListOptions.ts';
import { ValidateEmailAddressListResult } from '../models/ValidateEmailAddressListResult.ts';
import { ValidationDto } from '../models/ValidationDto.ts';
import { ValidationMessage } from '../models/ValidationMessage.ts';
import { VerifyEmailAddressOptions } from '../models/VerifyEmailAddressOptions.ts';
import { VerifyWebhookSignatureOptions } from '../models/VerifyWebhookSignatureOptions.ts';
import { VerifyWebhookSignatureResults } from '../models/VerifyWebhookSignatureResults.ts';
import { WaitForConditions } from '../models/WaitForConditions.ts';
import { WebhookBouncePayload } from '../models/WebhookBouncePayload.ts';
import { WebhookBounceRecipientPayload } from '../models/WebhookBounceRecipientPayload.ts';
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

import { AliasControllerApiRequestFactory, AliasControllerApiResponseProcessor} from "../apis/AliasControllerApi.ts";
export class ObservableAliasControllerApi {
    private requestFactory: AliasControllerApiRequestFactory;
    private responseProcessor: AliasControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AliasControllerApiRequestFactory,
        responseProcessor?: AliasControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AliasControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AliasControllerApiResponseProcessor();
    }

    /**
     * Email aliases use a MailSlurp randomly generated email address (or a custom domain inbox that you provide) to mask or proxy a real email address. Emails sent to the alias address will be forwarded to the hidden email address it was created for. If you want to send a reply use the threadId attached
     * Create an email alias. Must be verified by clicking link inside verification email that will be sent to the address. Once verified the alias will be active.
     * @param createAliasOptions 
     */
    public createAlias(createAliasOptions: CreateAliasOptions, options?: Configuration): Observable<AliasDto> {
        const requestContextPromise = this.requestFactory.createAlias(createAliasOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAlias(rsp)));
            }));
    }
 
    /**
     * Delete an email alias
     * @param aliasId 
     */
    public deleteAlias(aliasId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteAlias(aliasId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAlias(rsp)));
            }));
    }
 
    /**
     * Get an email alias by ID
     * Get an email alias
     * @param aliasId 
     */
    public getAlias(aliasId: string, options?: Configuration): Observable<AliasDto> {
        const requestContextPromise = this.requestFactory.getAlias(aliasId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAlias(rsp)));
            }));
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
    public getAliasEmails(aliasId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Observable<PageEmailProjection> {
        const requestContextPromise = this.requestFactory.getAliasEmails(aliasId, page, size, sort, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAliasEmails(rsp)));
            }));
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
    public getAliasThreads(aliasId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Observable<PageThreadProjection> {
        const requestContextPromise = this.requestFactory.getAliasThreads(aliasId, page, size, sort, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAliasThreads(rsp)));
            }));
    }
 
    /**
     * Get all email aliases in paginated form
     * Get all email aliases you have created
     * @param page Optional page index in alias list pagination
     * @param size Optional page size in alias list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getAliases(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Observable<PageAlias> {
        const requestContextPromise = this.requestFactory.getAliases(page, size, sort, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAliases(rsp)));
            }));
    }
 
    /**
     * Send the reply to the email sender or reply-to and include same subject cc bcc etc. Reply to an email and the contents will be sent with the existing subject to the emails `to`, `cc`, and `bcc`.
     * Reply to an email
     * @param aliasId ID of the alias that email belongs to
     * @param emailId ID of the email that should be replied to
     * @param replyToAliasEmailOptions 
     */
    public replyToAliasEmail(aliasId: string, emailId: string, replyToAliasEmailOptions: ReplyToAliasEmailOptions, options?: Configuration): Observable<SentEmailDto> {
        const requestContextPromise = this.requestFactory.replyToAliasEmail(aliasId, emailId, replyToAliasEmailOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replyToAliasEmail(rsp)));
            }));
    }
 
    /**
     * Send an email from an alias. Replies to the email will be forwarded to the alias masked email address
     * Send an email from an alias inbox
     * @param aliasId 
     * @param sendEmailOptions 
     */
    public sendAliasEmail(aliasId: string, sendEmailOptions: SendEmailOptions, options?: Configuration): Observable<SentEmailDto> {
        const requestContextPromise = this.requestFactory.sendAliasEmail(aliasId, sendEmailOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendAliasEmail(rsp)));
            }));
    }
 
    /**
     * Update an email alias
     * @param aliasId 
     * @param updateAliasOptions 
     */
    public updateAlias(aliasId: string, updateAliasOptions: UpdateAliasOptions, options?: Configuration): Observable<AliasDto> {
        const requestContextPromise = this.requestFactory.updateAlias(aliasId, updateAliasOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAlias(rsp)));
            }));
    }
 
}

import { AttachmentControllerApiRequestFactory, AttachmentControllerApiResponseProcessor} from "../apis/AttachmentControllerApi.ts";
export class ObservableAttachmentControllerApi {
    private requestFactory: AttachmentControllerApiRequestFactory;
    private responseProcessor: AttachmentControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AttachmentControllerApiRequestFactory,
        responseProcessor?: AttachmentControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AttachmentControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AttachmentControllerApiResponseProcessor();
    }

    /**
     * Delete all attachments
     */
    public deleteAllAttachments(options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteAllAttachments(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAllAttachments(rsp)));
            }));
    }
 
    /**
     * Delete an attachment
     * @param attachmentId ID of attachment
     */
    public deleteAttachment(attachmentId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteAttachment(attachmentId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAttachment(rsp)));
            }));
    }
 
    /**
     * Returns the specified attachment for a given email as a base 64 encoded string. The response type is application/json. This method is similar to the `downloadAttachment` method but allows some clients to get around issues with binary responses.
     * Get email attachment as base64 encoded string as alternative to binary responses. To read the content decode the Base64 encoded contents.
     * @param attachmentId ID of attachment
     */
    public downloadAttachmentAsBase64Encoded(attachmentId: string, options?: Configuration): Observable<DownloadAttachmentDto> {
        const requestContextPromise = this.requestFactory.downloadAttachmentAsBase64Encoded(attachmentId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.downloadAttachmentAsBase64Encoded(rsp)));
            }));
    }
 
    /**
     * Returns the specified attachment for a given email as a stream / array of bytes. You can find attachment ids in email responses endpoint responses. The response type is application/octet-stream.
     * Download attachments. Get email attachment bytes. If you have trouble with byte responses try the `downloadAttachmentBase64` response endpoints.
     * @param attachmentId ID of attachment
     */
    public downloadAttachmentAsBytes(attachmentId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.downloadAttachmentAsBytes(attachmentId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.downloadAttachmentAsBytes(rsp)));
            }));
    }
 
    /**
     * Get an attachment entity
     * @param attachmentId ID of attachment
     */
    public getAttachment(attachmentId: string, options?: Configuration): Observable<AttachmentEntity> {
        const requestContextPromise = this.requestFactory.getAttachment(attachmentId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAttachment(rsp)));
            }));
    }
 
    /**
     * Returns the metadata for an attachment. It is saved separately to the content of the attachment. Contains properties `name` and `content-type` and `content-length` in bytes for a given attachment.
     * Get email attachment metadata information
     * @param attachmentId ID of attachment
     */
    public getAttachmentInfo(attachmentId: string, options?: Configuration): Observable<AttachmentMetaData> {
        const requestContextPromise = this.requestFactory.getAttachmentInfo(attachmentId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAttachmentInfo(rsp)));
            }));
    }
 
    /**
     * Get all attachments in paginated response. Each entity contains meta data for the attachment such as `name` and `content-type`. Use the `attachmentId` and the download endpoints to get the file contents.
     * Get email attachments
     * @param page Optional page index event list pagination
     * @param size Optional page size event list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param fileNameFilter Optional file name and content type search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getAttachments(page?: number, size?: number, sort?: 'ASC' | 'DESC', fileNameFilter?: string, since?: Date, before?: Date, options?: Configuration): Observable<PageAttachmentEntity> {
        const requestContextPromise = this.requestFactory.getAttachments(page, size, sort, fileNameFilter, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAttachments(rsp)));
            }));
    }
 
    /**
     * Upload an attachment for sending using base64 file encoding. Returns an array whose first element is the ID of the uploaded attachment.
     * @param uploadAttachmentOptions 
     */
    public uploadAttachment(uploadAttachmentOptions: UploadAttachmentOptions, options?: Configuration): Observable<Array<string>> {
        const requestContextPromise = this.requestFactory.uploadAttachment(uploadAttachmentOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.uploadAttachment(rsp)));
            }));
    }
 
    /**
     * Upload an attachment for sending using file byte stream input octet stream. Returns an array whose first element is the ID of the uploaded attachment.
     * @param inlineObject1 
     * @param contentType Optional contentType for file. For instance &#x60;application/pdf&#x60;
     * @param filename Optional filename to save upload with
     */
    public uploadAttachmentBytes(inlineObject1: InlineObject1, contentType?: string, filename?: string, options?: Configuration): Observable<Array<string>> {
        const requestContextPromise = this.requestFactory.uploadAttachmentBytes(inlineObject1, contentType, filename, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.uploadAttachmentBytes(rsp)));
            }));
    }
 
    /**
     * Upload an attachment for sending using a Multipart Form request. Returns an array whose first element is the ID of the uploaded attachment.
     * @param contentType Optional content type of attachment
     * @param filename Optional name of file
     * @param xFilename Optional content type header of attachment
     * @param inlineObject 
     */
    public uploadMultipartForm(contentType?: string, filename?: string, xFilename?: string, inlineObject?: InlineObject, options?: Configuration): Observable<Array<string>> {
        const requestContextPromise = this.requestFactory.uploadMultipartForm(contentType, filename, xFilename, inlineObject, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.uploadMultipartForm(rsp)));
            }));
    }
 
}

import { BounceControllerApiRequestFactory, BounceControllerApiResponseProcessor} from "../apis/BounceControllerApi.ts";
export class ObservableBounceControllerApi {
    private requestFactory: BounceControllerApiRequestFactory;
    private responseProcessor: BounceControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BounceControllerApiRequestFactory,
        responseProcessor?: BounceControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BounceControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BounceControllerApiResponseProcessor();
    }

    /**
     * Prevent email sending errors by remove recipients who have resulted in past email bounces or complaints
     * Filter a list of email recipients and remove those who have bounced
     * @param filterBouncedRecipientsOptions 
     */
    public filterBouncedRecipient(filterBouncedRecipientsOptions: FilterBouncedRecipientsOptions, options?: Configuration): Observable<FilterBouncedRecipientsResult> {
        const requestContextPromise = this.requestFactory.filterBouncedRecipient(filterBouncedRecipientsOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.filterBouncedRecipient(rsp)));
            }));
    }
 
    /**
     * Bounced emails are email you have sent that were rejected by a recipient
     * Get a bounced email.
     * @param id ID of the bounced email to fetch
     */
    public getBouncedEmail(id: string, options?: Configuration): Observable<BouncedEmailDto> {
        const requestContextPromise = this.requestFactory.getBouncedEmail(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBouncedEmail(rsp)));
            }));
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
    public getBouncedEmails(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Observable<PageBouncedEmail> {
        const requestContextPromise = this.requestFactory.getBouncedEmails(page, size, sort, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBouncedEmails(rsp)));
            }));
    }
 
    /**
     * Bounced emails are email you have sent that were rejected by a recipient
     * Get a bounced email.
     * @param id ID of the bounced recipient
     */
    public getBouncedRecipient(id: string, options?: Configuration): Observable<BouncedRecipientDto> {
        const requestContextPromise = this.requestFactory.getBouncedRecipient(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBouncedRecipient(rsp)));
            }));
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
    public getBouncedRecipients(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Observable<PageBouncedRecipients> {
        const requestContextPromise = this.requestFactory.getBouncedRecipients(page, size, sort, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBouncedRecipients(rsp)));
            }));
    }
 
}

import { BulkActionsControllerApiRequestFactory, BulkActionsControllerApiResponseProcessor} from "../apis/BulkActionsControllerApi.ts";
export class ObservableBulkActionsControllerApi {
    private requestFactory: BulkActionsControllerApiRequestFactory;
    private responseProcessor: BulkActionsControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BulkActionsControllerApiRequestFactory,
        responseProcessor?: BulkActionsControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BulkActionsControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BulkActionsControllerApiResponseProcessor();
    }

    /**
     * Bulk create Inboxes (email addresses)
     * @param count Number of inboxes to be created in bulk
     */
    public bulkCreateInboxes(count: number, options?: Configuration): Observable<Array<InboxDto>> {
        const requestContextPromise = this.requestFactory.bulkCreateInboxes(count, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bulkCreateInboxes(rsp)));
            }));
    }
 
    /**
     * Bulk Delete Inboxes
     * @param requestBody 
     */
    public bulkDeleteInboxes(requestBody: Array<string>, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.bulkDeleteInboxes(requestBody, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bulkDeleteInboxes(rsp)));
            }));
    }
 
    /**
     * Bulk Send Emails
     * @param bulkSendEmailOptions 
     */
    public bulkSendEmails(bulkSendEmailOptions: BulkSendEmailOptions, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.bulkSendEmails(bulkSendEmailOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bulkSendEmails(rsp)));
            }));
    }
 
}

import { CommonActionsControllerApiRequestFactory, CommonActionsControllerApiResponseProcessor} from "../apis/CommonActionsControllerApi.ts";
export class ObservableCommonActionsControllerApi {
    private requestFactory: CommonActionsControllerApiRequestFactory;
    private responseProcessor: CommonActionsControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CommonActionsControllerApiRequestFactory,
        responseProcessor?: CommonActionsControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CommonActionsControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CommonActionsControllerApiResponseProcessor();
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
     */
    public createNewEmailAddress(allowTeamAccess?: boolean, useDomainPool?: boolean, expiresAt?: Date, expiresIn?: number, emailAddress?: string, inboxType?: 'HTTP_INBOX' | 'SMTP_INBOX', description?: string, name?: string, tags?: Array<string>, favourite?: boolean, virtualInbox?: boolean, options?: Configuration): Observable<InboxDto> {
        const requestContextPromise = this.requestFactory.createNewEmailAddress(allowTeamAccess, useDomainPool, expiresAt, expiresIn, emailAddress, inboxType, description, name, tags, favourite, virtualInbox, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createNewEmailAddress(rsp)));
            }));
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
     */
    public createRandomInbox(allowTeamAccess?: boolean, useDomainPool?: boolean, expiresAt?: Date, expiresIn?: number, emailAddress?: string, inboxType?: 'HTTP_INBOX' | 'SMTP_INBOX', description?: string, name?: string, tags?: Array<string>, favourite?: boolean, virtualInbox?: boolean, options?: Configuration): Observable<InboxDto> {
        const requestContextPromise = this.requestFactory.createRandomInbox(allowTeamAccess, useDomainPool, expiresAt, expiresIn, emailAddress, inboxType, description, name, tags, favourite, virtualInbox, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createRandomInbox(rsp)));
            }));
    }
 
    /**
     * Deletes inbox email address
     * Delete inbox email address by inbox id
     * @param inboxId 
     */
    public deleteEmailAddress(inboxId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteEmailAddress(inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteEmailAddress(rsp)));
            }));
    }
 
    /**
     * Deletes all emails
     * Delete all emails in an inbox
     * @param inboxId 
     */
    public emptyInbox(inboxId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.emptyInbox(inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.emptyInbox(rsp)));
            }));
    }
 
    /**
     * If no senderId or inboxId provided a random email address will be used to send from.
     * Send an email
     * @param simpleSendEmailOptions 
     */
    public sendEmailSimple(simpleSendEmailOptions: SimpleSendEmailOptions, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.sendEmailSimple(simpleSendEmailOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendEmailSimple(rsp)));
            }));
    }
 
}

import { ContactControllerApiRequestFactory, ContactControllerApiResponseProcessor} from "../apis/ContactControllerApi.ts";
export class ObservableContactControllerApi {
    private requestFactory: ContactControllerApiRequestFactory;
    private responseProcessor: ContactControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ContactControllerApiRequestFactory,
        responseProcessor?: ContactControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ContactControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ContactControllerApiResponseProcessor();
    }

    /**
     * Create a contact
     * @param createContactOptions 
     */
    public createContact(createContactOptions: CreateContactOptions, options?: Configuration): Observable<ContactDto> {
        const requestContextPromise = this.requestFactory.createContact(createContactOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createContact(rsp)));
            }));
    }
 
    /**
     * Delete contact
     * @param contactId 
     */
    public deleteContact(contactId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteContact(contactId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteContact(rsp)));
            }));
    }
 
    /**
     * Get all contacts
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getAllContacts(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Observable<PageContactProjection> {
        const requestContextPromise = this.requestFactory.getAllContacts(page, size, sort, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllContacts(rsp)));
            }));
    }
 
    /**
     * Get contact
     * @param contactId 
     */
    public getContact(contactId: string, options?: Configuration): Observable<ContactDto> {
        const requestContextPromise = this.requestFactory.getContact(contactId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getContact(rsp)));
            }));
    }
 
    /**
     * Get contact vCard vcf file
     * @param contactId 
     */
    public getContactVCard(contactId: string, options?: Configuration): Observable<Array<string>> {
        const requestContextPromise = this.requestFactory.getContactVCard(contactId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getContactVCard(rsp)));
            }));
    }
 
    /**
     * Get all contacts
     */
    public getContacts(options?: Configuration): Observable<Array<ContactProjection>> {
        const requestContextPromise = this.requestFactory.getContacts(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getContacts(rsp)));
            }));
    }
 
}

import { DomainControllerApiRequestFactory, DomainControllerApiResponseProcessor} from "../apis/DomainControllerApi.ts";
export class ObservableDomainControllerApi {
    private requestFactory: DomainControllerApiRequestFactory;
    private responseProcessor: DomainControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DomainControllerApiRequestFactory,
        responseProcessor?: DomainControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DomainControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DomainControllerApiResponseProcessor();
    }

    /**
     * Add a catch all inbox to a domain so that any emails sent to it that cannot be matched will be sent to the catch all inbox generated
     * Add catch all wild card inbox to domain
     * @param id 
     */
    public addDomainWildcardCatchAll(id: string, options?: Configuration): Observable<DomainDto> {
        const requestContextPromise = this.requestFactory.addDomainWildcardCatchAll(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addDomainWildcardCatchAll(rsp)));
            }));
    }
 
    /**
     * Link a domain that you own with MailSlurp so you can create email addresses using it. Endpoint returns DNS records used for validation. You must add these verification records to your host provider's DNS setup to verify the domain.
     * Create Domain
     * @param createDomainOptions 
     */
    public createDomain(createDomainOptions: CreateDomainOptions, options?: Configuration): Observable<DomainDto> {
        const requestContextPromise = this.requestFactory.createDomain(createDomainOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDomain(rsp)));
            }));
    }
 
    /**
     * Delete a domain. This will disable any existing inboxes that use this domain.
     * Delete a domain
     * @param id 
     */
    public deleteDomain(id: string, options?: Configuration): Observable<Array<string>> {
        const requestContextPromise = this.requestFactory.deleteDomain(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteDomain(rsp)));
            }));
    }
 
    /**
     * Returns domain verification status and tokens for a given domain
     * Get a domain
     * @param id 
     */
    public getDomain(id: string, options?: Configuration): Observable<DomainDto> {
        const requestContextPromise = this.requestFactory.getDomain(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDomain(rsp)));
            }));
    }
 
    /**
     * List all custom domains you have created
     * Get domains
     */
    public getDomains(options?: Configuration): Observable<Array<DomainPreview>> {
        const requestContextPromise = this.requestFactory.getDomains(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDomains(rsp)));
            }));
    }
 
    /**
     * Update values on a domain. Note you cannot change the domain name as it is immutable. Recreate the domain if you need to alter this.
     * Update a domain
     * @param id 
     * @param updateDomainOptions 
     */
    public updateDomain(id: string, updateDomainOptions: UpdateDomainOptions, options?: Configuration): Observable<DomainDto> {
        const requestContextPromise = this.requestFactory.updateDomain(id, updateDomainOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateDomain(rsp)));
            }));
    }
 
}

import { EmailControllerApiRequestFactory, EmailControllerApiResponseProcessor} from "../apis/EmailControllerApi.ts";
export class ObservableEmailControllerApi {
    private requestFactory: EmailControllerApiRequestFactory;
    private responseProcessor: EmailControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EmailControllerApiRequestFactory,
        responseProcessor?: EmailControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EmailControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EmailControllerApiResponseProcessor();
    }

    /**
     * Apply RFC3501 section-2.3.2 IMAP flag operations on an email
     * Set IMAP flags associated with a message. Only supports '\\Seen' flag.
     * @param emailId 
     * @param imapFlagOperationOptions 
     */
    public applyImapFlagOperation(emailId: string, imapFlagOperationOptions: ImapFlagOperationOptions, options?: Configuration): Observable<EmailPreview> {
        const requestContextPromise = this.requestFactory.applyImapFlagOperation(emailId, imapFlagOperationOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.applyImapFlagOperation(rsp)));
            }));
    }
 
    /**
     * Deletes all emails in your account. Be careful as emails cannot be recovered
     * Delete all emails in all inboxes.
     */
    public deleteAllEmails(options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteAllEmails(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAllEmails(rsp)));
            }));
    }
 
    /**
     * Deletes an email and removes it from the inbox. Deleted emails cannot be recovered.
     * Delete an email
     * @param emailId ID of email to delete
     */
    public deleteEmail(emailId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteEmail(emailId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteEmail(rsp)));
            }));
    }
 
    /**
     * Returns the specified attachment for a given email as a stream / array of bytes. You can find attachment ids in email responses endpoint responses. The response type is application/octet-stream.
     * Get email attachment bytes. Returned as `octet-stream` with content type header. If you have trouble with byte responses try the `downloadAttachmentBase64` response endpoints and convert the base 64 encoded content to a file or string.
     * @param emailId ID of email
     * @param attachmentId ID of attachment
     * @param apiKey Can pass apiKey in url for this request if you wish to download the file in a browser. Content type will be set to original content type of the attachment file. This is so that browsers can download the file correctly.
     */
    public downloadAttachment(emailId: string, attachmentId: string, apiKey?: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.downloadAttachment(emailId, attachmentId, apiKey, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.downloadAttachment(rsp)));
            }));
    }
 
    /**
     * Returns the specified attachment for a given email as a base 64 encoded string. The response type is application/json. This method is similar to the `downloadAttachment` method but allows some clients to get around issues with binary responses.
     * Get email attachment as base64 encoded string as an alternative to binary responses. Decode the `base64FileContents` as a `utf-8` encoded string or array of bytes depending on the `contentType`.
     * @param emailId ID of email
     * @param attachmentId ID of attachment
     */
    public downloadAttachmentBase64(emailId: string, attachmentId: string, options?: Configuration): Observable<DownloadAttachmentDto> {
        const requestContextPromise = this.requestFactory.downloadAttachmentBase64(emailId, attachmentId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.downloadAttachmentBase64(rsp)));
            }));
    }
 
    /**
     * Returns the specified email body for a given email as a string
     * Get email body as string. Returned as `plain/text` with content type header.
     * @param emailId ID of email
     */
    public downloadBody(emailId: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.downloadBody(emailId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.downloadBody(rsp)));
            }));
    }
 
    /**
     * Returns the specified email body for a given email as a stream / array of bytes.
     * Get email body in bytes. Returned as `octet-stream` with content type header.
     * @param emailId ID of email
     */
    public downloadBodyBytes(emailId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.downloadBodyBytes(emailId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.downloadBodyBytes(rsp)));
            }));
    }
 
    /**
     * Forward an existing email to new recipients. The sender of the email will be the inbox that received the email you are forwarding. You can override the sender with the `from` option. Note you must have access to the from address in MailSlurp to use the override. For more control consider fetching the email and sending it a new using the send email endpoints.
     * Forward email to recipients
     * @param emailId ID of email
     * @param forwardEmailOptions 
     */
    public forwardEmail(emailId: string, forwardEmailOptions: ForwardEmailOptions, options?: Configuration): Observable<SentEmailDto> {
        const requestContextPromise = this.requestFactory.forwardEmail(emailId, forwardEmailOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.forwardEmail(rsp)));
            }));
    }
 
    /**
     * Returns the metadata such as name and content-type for a given attachment and email.
     * Get email attachment metadata. This is the `contentType` and `contentLength` of an attachment. To get the individual attachments  use the `downloadAttachment` methods.
     * @param emailId ID of email
     * @param attachmentId ID of attachment
     */
    public getAttachmentMetaData(emailId: string, attachmentId: string, options?: Configuration): Observable<AttachmentMetaData> {
        const requestContextPromise = this.requestFactory.getAttachmentMetaData(emailId, attachmentId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAttachmentMetaData(rsp)));
            }));
    }
 
    /**
     * Returns a email summary object with headers and content. To retrieve the raw unparsed email use the getRawEmail endpoints
     * Get email content including headers and body. Expects email to exist by ID. For emails that may not have arrived yet use the WaitForController.
     * @param emailId 
     * @param decode Decode email body quoted-printable encoding to plain text. SMTP servers often encode text using quoted-printable format (for instance &#x60;&#x3D;D7&#x60;). This can be a pain for testing
     */
    public getEmail(emailId: string, decode?: boolean, options?: Configuration): Observable<Email> {
        const requestContextPromise = this.requestFactory.getEmail(emailId, decode, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmail(rsp)));
            }));
    }
 
    /**
     * Returns an array of attachment metadata such as name and content-type for a given email if present.
     * Get all email attachment metadata. Metadata includes name and size of attachments.
     * @param emailId ID of email
     */
    public getEmailAttachments(emailId: string, options?: Configuration): Observable<Array<AttachmentMetaData>> {
        const requestContextPromise = this.requestFactory.getEmailAttachments(emailId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailAttachments(rsp)));
            }));
    }
 
    /**
     * Return the matches for a given Java style regex pattern. Do not include the typical `/` at start or end of regex in some languages. Given an example `your code is: 12345` the pattern to extract match looks like `code is: (\\d{6})`. This will return an array of matches with the first matching the entire pattern and the subsequent matching the groups: `['code is: 123456', '123456']` See https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html for more information of available patterns. 
     * Get email content regex pattern match results. Runs regex against email body and returns match groups.
     * @param emailId ID of email to match against
     * @param contentMatchOptions 
     */
    public getEmailContentMatch(emailId: string, contentMatchOptions: ContentMatchOptions, options?: Configuration): Observable<EmailContentMatchResult> {
        const requestContextPromise = this.requestFactory.getEmailContentMatch(emailId, contentMatchOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailContentMatch(rsp)));
            }));
    }
 
    /**
     * Get email count
     */
    public getEmailCount(options?: Configuration): Observable<CountDto> {
        const requestContextPromise = this.requestFactory.getEmailCount(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailCount(rsp)));
            }));
    }
 
    /**
     * Retrieve email content as HTML response for viewing in browsers. Decodes quoted-printable entities and converts charset to UTF-8. Pass your API KEY as a request parameter when viewing in a browser: `?apiKey=xxx`
     * Get email content as HTML. For displaying emails in browser context.
     * @param emailId 
     * @param decode 
     */
    public getEmailHTML(emailId: string, decode?: boolean, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getEmailHTML(emailId, decode, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailHTML(rsp)));
            }));
    }
 
    /**
     * Parse an email body and return the content as an array of text. HTML parsing uses JSoup which supports JQuery/CSS style selectors
     * Parse and return text from an email, stripping HTML and decoding encoded characters
     * @param emailId ID of email to perform HTML query on
     * @param htmlSelector HTML selector to search for. Uses JQuery/JSoup/CSS style selector like &#39;.my-div&#39; to match content. See https://jsoup.org/apidocs/org/jsoup/select/Selector.html for more information.
     */
    public getEmailHTMLQuery(emailId: string, htmlSelector: string, options?: Configuration): Observable<EmailTextLinesResult> {
        const requestContextPromise = this.requestFactory.getEmailHTMLQuery(emailId, htmlSelector, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailHTMLQuery(rsp)));
            }));
    }
 
    /**
     * HTML parsing uses JSoup and UNIX line separators. Searches content for href attributes
     * Parse and return list of links found in an email (only works for HTML content)
     * @param emailId ID of email to fetch text for
     */
    public getEmailLinks(emailId: string, options?: Configuration): Observable<EmailLinksResult> {
        const requestContextPromise = this.requestFactory.getEmailLinks(emailId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailLinks(rsp)));
            }));
    }
 
    /**
     * Get a list of URLs for email content as text/html or raw SMTP message for viewing the message in a browser.
     * Get email URLs for viewing in browser or downloading
     * @param emailId 
     */
    public getEmailPreviewURLs(emailId: string, options?: Configuration): Observable<EmailPreviewUrls> {
        const requestContextPromise = this.requestFactory.getEmailPreviewURLs(emailId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailPreviewURLs(rsp)));
            }));
    }
 
    /**
     * Parse an email body and return the content as an array of strings. HTML parsing uses JSoup and UNIX line separators.
     * Parse and return text from an email, stripping HTML and decoding encoded characters
     * @param emailId ID of email to fetch text for
     * @param decodeHtmlEntities Decode HTML entities
     * @param lineSeparator Line separator character
     */
    public getEmailTextLines(emailId: string, decodeHtmlEntities?: boolean, lineSeparator?: string, options?: Configuration): Observable<EmailTextLinesResult> {
        const requestContextPromise = this.requestFactory.getEmailTextLines(emailId, decodeHtmlEntities, lineSeparator, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailTextLines(rsp)));
            }));
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
    public getEmailsPaginated(inboxId?: Array<string>, page?: number, size?: number, sort?: 'ASC' | 'DESC', unreadOnly?: boolean, searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Observable<PageEmailProjection> {
        const requestContextPromise = this.requestFactory.getEmailsPaginated(inboxId, page, size, sort, unreadOnly, searchFilter, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmailsPaginated(rsp)));
            }));
    }
 
    /**
     * Get gravatar url for email address
     * @param emailAddress 
     * @param size 
     */
    public getGravatarUrlForEmailAddress(emailAddress: string, size?: string, options?: Configuration): Observable<GravatarUrl> {
        const requestContextPromise = this.requestFactory.getGravatarUrlForEmailAddress(emailAddress, size, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGravatarUrlForEmailAddress(rsp)));
            }));
    }
 
    /**
     * Get the newest email in all inboxes or in a passed set of inbox IDs
     * Get latest email in all inboxes. Most recently received.
     * @param inboxIds Optional set of inboxes to filter by. Only get the latest email from these inbox IDs. If not provided will search across all inboxes
     */
    public getLatestEmail(inboxIds?: Array<string>, options?: Configuration): Observable<Email> {
        const requestContextPromise = this.requestFactory.getLatestEmail(inboxIds, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLatestEmail(rsp)));
            }));
    }
 
    /**
     * Get the newest email in all inboxes or in a passed set of inbox IDs
     * Get latest email in an inbox. Use `WaitForController` to get emails that may not have arrived yet.
     * @param inboxId ID of the inbox you want to get the latest email from
     */
    public getLatestEmailInInbox1(inboxId: string, options?: Configuration): Observable<Email> {
        const requestContextPromise = this.requestFactory.getLatestEmailInInbox1(inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLatestEmailInInbox1(rsp)));
            }));
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
     * @param since Optional filter emails received after given date time
     * @param before Optional filter emails received before given date time
     */
    public getOrganizationEmailsPaginated(inboxId?: Array<string>, page?: number, size?: number, sort?: 'ASC' | 'DESC', unreadOnly?: boolean, searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Observable<PageEmailProjection> {
        const requestContextPromise = this.requestFactory.getOrganizationEmailsPaginated(inboxId, page, size, sort, unreadOnly, searchFilter, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrganizationEmailsPaginated(rsp)));
            }));
    }
 
    /**
     * Returns a raw, unparsed, and unprocessed email. If your client has issues processing the response it is likely due to the response content-type which is text/plain. If you need a JSON response content-type use the getRawEmailJson endpoint
     * Get raw email string. Returns unparsed raw SMTP message with headers and body.
     * @param emailId ID of email
     */
    public getRawEmailContents(emailId: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getRawEmailContents(emailId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRawEmailContents(rsp)));
            }));
    }
 
    /**
     * Returns a raw, unparsed, and unprocessed email wrapped in a JSON response object for easier handling when compared with the getRawEmail text/plain response
     * Get raw email in JSON. Unparsed SMTP message in JSON wrapper format.
     * @param emailId ID of email
     */
    public getRawEmailJson(emailId: string, options?: Configuration): Observable<RawEmailJson> {
        const requestContextPromise = this.requestFactory.getRawEmailJson(emailId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRawEmailJson(rsp)));
            }));
    }
 
    /**
     * Get number of emails unread. Unread means has not been viewed in dashboard or returned in an email API response
     * Get unread email count
     */
    public getUnreadEmailCount(options?: Configuration): Observable<UnreadCount> {
        const requestContextPromise = this.requestFactory.getUnreadEmailCount(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUnreadEmailCount(rsp)));
            }));
    }
 
    /**
     * Marks an email as read or unread. Pass boolean read flag to set value. This is useful if you want to read an email but keep it as unread
     * Mark an email as read on unread
     * @param emailId 
     * @param read What value to assign to email read property. Default true.
     */
    public markAsRead(emailId: string, read?: boolean, options?: Configuration): Observable<EmailPreview> {
        const requestContextPromise = this.requestFactory.markAsRead(emailId, read, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.markAsRead(rsp)));
            }));
    }
 
    /**
     * Send the reply to the email sender or reply-to and include same subject cc bcc etc. Reply to an email and the contents will be sent with the existing subject to the emails `to`, `cc`, and `bcc`.
     * Reply to an email
     * @param emailId ID of the email that should be replied to
     * @param replyToEmailOptions 
     */
    public replyToEmail(emailId: string, replyToEmailOptions: ReplyToEmailOptions, options?: Configuration): Observable<SentEmailDto> {
        const requestContextPromise = this.requestFactory.replyToEmail(emailId, replyToEmailOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replyToEmail(rsp)));
            }));
    }
 
    /**
     * Alias for `InboxController.sendEmail` method - see original method for full details. Sends an email from a given inbox that you have created. If no inbox is supplied a random inbox will be created for you and used to send the email.
     * Send email
     * @param inboxId ID of the inbox you want to send the email from
     * @param sendEmailOptions 
     * @param useDomainPool Use domain pool. Optionally create inbox to send from using the mailslurp domain pool.
     * @param virtualSend Optionally create inbox to send from that is a virtual inbox and won&#39;t send to external addresses
     */
    public sendEmailSourceOptional(inboxId: string, sendEmailOptions: SendEmailOptions, useDomainPool?: boolean, virtualSend?: boolean, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.sendEmailSourceOptional(inboxId, sendEmailOptions, useDomainPool, virtualSend, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendEmailSourceOptional(rsp)));
            }));
    }
 
    /**
     * Validate the HTML content of email if HTML is found. Considered valid if no HTML is present.
     * Validate email HTML contents
     * @param emailId ID of email
     */
    public validateEmail(emailId: string, options?: Configuration): Observable<ValidationDto> {
        const requestContextPromise = this.requestFactory.validateEmail(emailId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.validateEmail(rsp)));
            }));
    }
 
}

import { EmailVerificationControllerApiRequestFactory, EmailVerificationControllerApiResponseProcessor} from "../apis/EmailVerificationControllerApi.ts";
export class ObservableEmailVerificationControllerApi {
    private requestFactory: EmailVerificationControllerApiRequestFactory;
    private responseProcessor: EmailVerificationControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EmailVerificationControllerApiRequestFactory,
        responseProcessor?: EmailVerificationControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EmailVerificationControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EmailVerificationControllerApiResponseProcessor();
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
    public getValidationRequests(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, isValid?: boolean, options?: Configuration): Observable<PageEmailValidationRequest> {
        const requestContextPromise = this.requestFactory.getValidationRequests(page, size, sort, searchFilter, since, before, isValid, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getValidationRequests(rsp)));
            }));
    }
 
    /**
     * Validate a list of email addresses. Per unit billing. See your plan for pricing.
     * @param validateEmailAddressListOptions 
     */
    public validateEmailAddressList(validateEmailAddressListOptions: ValidateEmailAddressListOptions, options?: Configuration): Observable<ValidateEmailAddressListResult> {
        const requestContextPromise = this.requestFactory.validateEmailAddressList(validateEmailAddressListOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.validateEmailAddressList(rsp)));
            }));
    }
 
}

import { ExpiredControllerApiRequestFactory, ExpiredControllerApiResponseProcessor} from "../apis/ExpiredControllerApi.ts";
export class ObservableExpiredControllerApi {
    private requestFactory: ExpiredControllerApiRequestFactory;
    private responseProcessor: ExpiredControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ExpiredControllerApiRequestFactory,
        responseProcessor?: ExpiredControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ExpiredControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ExpiredControllerApiResponseProcessor();
    }

    /**
     * Return default times used for inbox expiration
     * Get default expiration settings
     */
    public getExpirationDefaults(options?: Configuration): Observable<ExpirationDefaults> {
        const requestContextPromise = this.requestFactory.getExpirationDefaults(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getExpirationDefaults(rsp)));
            }));
    }
 
    /**
     * Use the inboxId to return an ExpiredInboxRecord if an inbox has expired. Inboxes expire and are disabled if an expiration date is set or plan requires. Returns 404 if no expired inbox is found for the inboxId
     * Get expired inbox record for a previously existing inbox
     * @param inboxId ID of inbox you want to retrieve (not the inbox ID)
     */
    public getExpiredInboxByInboxId(inboxId: string, options?: Configuration): Observable<ExpiredInboxDto> {
        const requestContextPromise = this.requestFactory.getExpiredInboxByInboxId(inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getExpiredInboxByInboxId(rsp)));
            }));
    }
 
    /**
     * Inboxes created with an expiration date will expire after the given date and be moved to an ExpiredInbox entity. You can still read emails in the inbox but it can no longer send or receive emails. Fetch the expired inboxes to view the old inboxes properties
     * Get an expired inbox record
     * @param expiredId ID of the ExpiredInboxRecord you want to retrieve. This is different from the ID of the inbox you are interested in. See other methods for getting ExpiredInboxRecord for an inbox inboxId
     */
    public getExpiredInboxRecord(expiredId: string, options?: Configuration): Observable<ExpiredInboxDto> {
        const requestContextPromise = this.requestFactory.getExpiredInboxRecord(expiredId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getExpiredInboxRecord(rsp)));
            }));
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
    public getExpiredInboxes(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Observable<PageExpiredInboxRecordProjection> {
        const requestContextPromise = this.requestFactory.getExpiredInboxes(page, size, sort, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getExpiredInboxes(rsp)));
            }));
    }
 
}

import { ExportControllerApiRequestFactory, ExportControllerApiResponseProcessor} from "../apis/ExportControllerApi.ts";
export class ObservableExportControllerApi {
    private requestFactory: ExportControllerApiRequestFactory;
    private responseProcessor: ExportControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ExportControllerApiRequestFactory,
        responseProcessor?: ExportControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ExportControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ExportControllerApiResponseProcessor();
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
    public exportEntities(exportType: 'INBOXES' | 'CONTACTS' | 'ATTACHMENTS' | 'EMAILS', apiKey: string, outputFormat: 'CSV_DEFAULT' | 'CSV_EXCEL', filter?: string, listSeparatorToken?: string, excludePreviouslyExported?: boolean, createdEarliestTime?: Date, createdOldestTime?: Date, options?: Configuration): Observable<Array<string>> {
        const requestContextPromise = this.requestFactory.exportEntities(exportType, apiKey, outputFormat, filter, listSeparatorToken, excludePreviouslyExported, createdEarliestTime, createdOldestTime, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.exportEntities(rsp)));
            }));
    }
 
    /**
     * Get export link
     * @param exportType 
     * @param exportOptions 
     * @param apiKey 
     */
    public getExportLink(exportType: 'INBOXES' | 'CONTACTS' | 'ATTACHMENTS' | 'EMAILS', exportOptions: ExportOptions, apiKey?: string, options?: Configuration): Observable<ExportLink> {
        const requestContextPromise = this.requestFactory.getExportLink(exportType, exportOptions, apiKey, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getExportLink(rsp)));
            }));
    }
 
}

import { FormControllerApiRequestFactory, FormControllerApiResponseProcessor} from "../apis/FormControllerApi.ts";
export class ObservableFormControllerApi {
    private requestFactory: FormControllerApiRequestFactory;
    private responseProcessor: FormControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FormControllerApiRequestFactory,
        responseProcessor?: FormControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FormControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FormControllerApiResponseProcessor();
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
    public submitForm(to?: string, subject?: string, redirectTo?: string, emailAddress?: string, successMessage?: string, spamCheck?: string, otherParameters?: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.submitForm(to, subject, redirectTo, emailAddress, successMessage, spamCheck, otherParameters, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.submitForm(rsp)));
            }));
    }
 
}

import { GroupControllerApiRequestFactory, GroupControllerApiResponseProcessor} from "../apis/GroupControllerApi.ts";
export class ObservableGroupControllerApi {
    private requestFactory: GroupControllerApiRequestFactory;
    private responseProcessor: GroupControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GroupControllerApiRequestFactory,
        responseProcessor?: GroupControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GroupControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GroupControllerApiResponseProcessor();
    }

    /**
     * Add contacts to a group
     * @param groupId 
     * @param updateGroupContacts 
     */
    public addContactsToGroup(groupId: string, updateGroupContacts: UpdateGroupContacts, options?: Configuration): Observable<GroupContactsDto> {
        const requestContextPromise = this.requestFactory.addContactsToGroup(groupId, updateGroupContacts, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addContactsToGroup(rsp)));
            }));
    }
 
    /**
     * Create a group
     * @param createGroupOptions 
     */
    public createGroup(createGroupOptions: CreateGroupOptions, options?: Configuration): Observable<GroupDto> {
        const requestContextPromise = this.requestFactory.createGroup(createGroupOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createGroup(rsp)));
            }));
    }
 
    /**
     * Delete group
     * @param groupId 
     */
    public deleteGroup(groupId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteGroup(groupId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteGroup(rsp)));
            }));
    }
 
    /**
     * Get all Contact Groups in paginated format
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getAllGroups(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Observable<PageGroupProjection> {
        const requestContextPromise = this.requestFactory.getAllGroups(page, size, sort, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllGroups(rsp)));
            }));
    }
 
    /**
     * Get group
     * @param groupId 
     */
    public getGroup(groupId: string, options?: Configuration): Observable<GroupDto> {
        const requestContextPromise = this.requestFactory.getGroup(groupId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGroup(rsp)));
            }));
    }
 
    /**
     * Get group and contacts belonging to it
     * @param groupId 
     */
    public getGroupWithContacts(groupId: string, options?: Configuration): Observable<GroupContactsDto> {
        const requestContextPromise = this.requestFactory.getGroupWithContacts(groupId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGroupWithContacts(rsp)));
            }));
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
    public getGroupWithContactsPaginated(groupId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Observable<PageContactProjection> {
        const requestContextPromise = this.requestFactory.getGroupWithContactsPaginated(groupId, page, size, sort, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGroupWithContactsPaginated(rsp)));
            }));
    }
 
    /**
     * Get all groups
     */
    public getGroups(options?: Configuration): Observable<Array<GroupProjection>> {
        const requestContextPromise = this.requestFactory.getGroups(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGroups(rsp)));
            }));
    }
 
    /**
     * Remove contacts from a group
     * @param groupId 
     * @param updateGroupContacts 
     */
    public removeContactsFromGroup(groupId: string, updateGroupContacts: UpdateGroupContacts, options?: Configuration): Observable<GroupContactsDto> {
        const requestContextPromise = this.requestFactory.removeContactsFromGroup(groupId, updateGroupContacts, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeContactsFromGroup(rsp)));
            }));
    }
 
}

import { InboxControllerApiRequestFactory, InboxControllerApiResponseProcessor} from "../apis/InboxControllerApi.ts";
export class ObservableInboxControllerApi {
    private requestFactory: InboxControllerApiRequestFactory;
    private responseProcessor: InboxControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: InboxControllerApiRequestFactory,
        responseProcessor?: InboxControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InboxControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InboxControllerApiResponseProcessor();
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
     */
    public createInbox(emailAddress?: string, tags?: Array<string>, name?: string, description?: string, useDomainPool?: boolean, favourite?: boolean, expiresAt?: Date, expiresIn?: number, allowTeamAccess?: boolean, inboxType?: 'HTTP_INBOX' | 'SMTP_INBOX', virtualInbox?: boolean, options?: Configuration): Observable<InboxDto> {
        const requestContextPromise = this.requestFactory.createInbox(emailAddress, tags, name, description, useDomainPool, favourite, expiresAt, expiresIn, allowTeamAccess, inboxType, virtualInbox, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createInbox(rsp)));
            }));
    }
 
    /**
     * Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving
     * Create an inbox ruleset
     * @param inboxId inboxId
     * @param createInboxRulesetOptions 
     */
    public createInboxRuleset(inboxId: string, createInboxRulesetOptions: CreateInboxRulesetOptions, options?: Configuration): Observable<InboxRulesetDto> {
        const requestContextPromise = this.requestFactory.createInboxRuleset(inboxId, createInboxRulesetOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createInboxRuleset(rsp)));
            }));
    }
 
    /**
     * Create an inbox with default options. Uses MailSlurp domain pool address and is private.
     */
    public createInboxWithDefaults(options?: Configuration): Observable<InboxDto> {
        const requestContextPromise = this.requestFactory.createInboxWithDefaults(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createInboxWithDefaults(rsp)));
            }));
    }
 
    /**
     * Additional endpoint that allows inbox creation with request body options. Can be more flexible that other methods for some clients.
     * Create an inbox with options. Extended options for inbox creation.
     * @param createInboxDto 
     */
    public createInboxWithOptions(createInboxDto: CreateInboxDto, options?: Configuration): Observable<InboxDto> {
        const requestContextPromise = this.requestFactory.createInboxWithOptions(createInboxDto, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createInboxWithOptions(rsp)));
            }));
    }
 
    /**
     * Deletes all emails in an inbox. Be careful as emails cannot be recovered
     * Delete all emails in a given inboxes.
     * @param inboxId 
     */
    public deleteAllInboxEmails(inboxId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteAllInboxEmails(inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAllInboxEmails(rsp)));
            }));
    }
 
    /**
     * Permanently delete all inboxes and associated email addresses. This will also delete all emails within the inboxes. Be careful as inboxes cannot be recovered once deleted. Note: deleting inboxes will not impact your usage limits. Monthly inbox creation limits are based on how many inboxes were created in the last 30 days, not how many inboxes you currently have.
     * Delete all inboxes
     */
    public deleteAllInboxes(options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteAllInboxes(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAllInboxes(rsp)));
            }));
    }
 
    /**
     * Permanently delete an inbox and associated email address as well as all emails within the given inbox. This action cannot be undone. Note: deleting an inbox will not affect your account usage. Monthly inbox usage is based on how many inboxes you create within 30 days, not how many exist at time of request.
     * Delete inbox
     * @param inboxId 
     */
    public deleteInbox(inboxId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteInbox(inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteInbox(rsp)));
            }));
    }
 
    /**
     * Check if inboxes exist by email address. Useful if you are sending emails to mailslurp addresses
     * Does inbox exist
     * @param emailAddress Email address
     */
    public doesInboxExist(emailAddress: string, options?: Configuration): Observable<InboxExistsDto> {
        const requestContextPromise = this.requestFactory.doesInboxExist(emailAddress, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.doesInboxExist(rsp)));
            }));
    }
 
    /**
     * Remove any expired inboxes for your account (instead of waiting for scheduled removal on server)
     * Remove expired inboxes
     * @param before Optional expired at before flag to flush expired inboxes that have expired before the given time
     */
    public flushExpired(before?: Date, options?: Configuration): Observable<FlushExpiredInboxesResult> {
        const requestContextPromise = this.requestFactory.flushExpired(before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.flushExpired(rsp)));
            }));
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
     */
    public getAllInboxes(page?: number, size?: number, sort?: 'ASC' | 'DESC', favourite?: boolean, search?: string, tag?: string, teamAccess?: boolean, since?: Date, before?: Date, options?: Configuration): Observable<PageInboxProjection> {
        const requestContextPromise = this.requestFactory.getAllInboxes(page, size, sort, favourite, search, tag, teamAccess, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllInboxes(rsp)));
            }));
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
    public getEmails(inboxId: string, size?: number, limit?: number, sort?: 'ASC' | 'DESC', retryTimeout?: number, delayTimeout?: number, minCount?: number, unreadOnly?: boolean, before?: Date, since?: Date, options?: Configuration): Observable<Array<EmailPreview>> {
        const requestContextPromise = this.requestFactory.getEmails(inboxId, size, limit, sort, retryTimeout, delayTimeout, minCount, unreadOnly, before, since, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEmails(rsp)));
            }));
    }
 
    /**
     * Get IMAP and SMTP access usernames and passwords
     * @param inboxId Inbox ID
     */
    public getImapSmtpAccess(inboxId?: string, options?: Configuration): Observable<ImapSmtpAccessDetails> {
        const requestContextPromise = this.requestFactory.getImapSmtpAccess(inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getImapSmtpAccess(rsp)));
            }));
    }
 
    /**
     * Returns an inbox's properties, including its email address and ID.
     * Get Inbox. Returns properties of an inbox.
     * @param inboxId 
     */
    public getInbox(inboxId: string, options?: Configuration): Observable<InboxDto> {
        const requestContextPromise = this.requestFactory.getInbox(inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInbox(rsp)));
            }));
    }
 
    /**
     * Get a inbox result by email address
     * Search for an inbox with the provided email address
     * @param emailAddress 
     */
    public getInboxByEmailAddress(emailAddress: string, options?: Configuration): Observable<InboxByEmailAddressResult> {
        const requestContextPromise = this.requestFactory.getInboxByEmailAddress(emailAddress, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxByEmailAddress(rsp)));
            }));
    }
 
    /**
     * Get total inbox count
     */
    public getInboxCount(options?: Configuration): Observable<CountDto> {
        const requestContextPromise = this.requestFactory.getInboxCount(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxCount(rsp)));
            }));
    }
 
    /**
     * Get email count in inbox
     * @param inboxId Id of inbox that emails belongs to
     */
    public getInboxEmailCount(inboxId: string, options?: Configuration): Observable<CountDto> {
        const requestContextPromise = this.requestFactory.getInboxEmailCount(inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxEmailCount(rsp)));
            }));
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
    public getInboxEmailsPaginated(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Observable<PageEmailPreview> {
        const requestContextPromise = this.requestFactory.getInboxEmailsPaginated(inboxId, page, size, sort, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxEmailsPaginated(rsp)));
            }));
    }
 
    /**
     * Get list of inbox IDs
     * Get all inbox IDs
     */
    public getInboxIds(options?: Configuration): Observable<InboxIdsResult> {
        const requestContextPromise = this.requestFactory.getInboxIds(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxIds(rsp)));
            }));
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
    public getInboxSentEmails(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Observable<PageSentEmailProjection> {
        const requestContextPromise = this.requestFactory.getInboxSentEmails(inboxId, page, size, sort, searchFilter, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxSentEmails(rsp)));
            }));
    }
 
    /**
     * Get all inbox tags
     * Get inbox tags
     */
    public getInboxTags(options?: Configuration): Observable<Array<string>> {
        const requestContextPromise = this.requestFactory.getInboxTags(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxTags(rsp)));
            }));
    }
 
    /**
     * List the inboxes you have created. Note use of the more advanced `getAllEmails` is recommended and allows paginated access using a limit and sort parameter.
     * List Inboxes and email addresses
     * @param size Optional result size limit. Note an automatic limit of 100 results is applied. See the paginated &#x60;getAllEmails&#x60; for larger queries.
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Optional filter by created after given date time
     * @param before Optional filter by created before given date time
     */
    public getInboxes(size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Observable<Array<InboxDto>> {
        const requestContextPromise = this.requestFactory.getInboxes(size, sort, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxes(rsp)));
            }));
    }
 
    /**
     * Get the newest email in an inbox or wait for one to arrive
     * Get latest email in an inbox. Use `WaitForController` to get emails that may not have arrived yet.
     * @param inboxId ID of the inbox you want to get the latest email from
     * @param timeoutMillis Timeout milliseconds to wait for latest email
     */
    public getLatestEmailInInbox(inboxId: string, timeoutMillis: number, options?: Configuration): Observable<Email> {
        const requestContextPromise = this.requestFactory.getLatestEmailInInbox(inboxId, timeoutMillis, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLatestEmailInInbox(rsp)));
            }));
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
    public getOrganizationInboxes(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Observable<PageOrganizationInboxProjection> {
        const requestContextPromise = this.requestFactory.getOrganizationInboxes(page, size, sort, searchFilter, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrganizationInboxes(rsp)));
            }));
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
    public listInboxRulesets(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Observable<PageInboxRulesetDto> {
        const requestContextPromise = this.requestFactory.listInboxRulesets(inboxId, page, size, sort, searchFilter, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listInboxRulesets(rsp)));
            }));
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
    public listInboxTrackingPixels(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Observable<PageTrackingPixelProjection> {
        const requestContextPromise = this.requestFactory.listInboxTrackingPixels(inboxId, page, size, sort, searchFilter, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listInboxTrackingPixels(rsp)));
            }));
    }
 
    /**
     * Send an email from an inbox's email address.  The request body should contain the `SendEmailOptions` that include recipients, attachments, body etc. See `SendEmailOptions` for all available properties. Note the `inboxId` refers to the inbox's id not the inbox's email address. See https://www.mailslurp.com/guides/ for more information on how to send emails. This method does not return a sent email entity due to legacy reasons. To send and get a sent email as returned response use the sister method `sendEmailAndConfirm`.
     * Send Email
     * @param inboxId ID of the inbox you want to send the email from
     * @param sendEmailOptions 
     */
    public sendEmail(inboxId: string, sendEmailOptions: SendEmailOptions, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.sendEmail(inboxId, sendEmailOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendEmail(rsp)));
            }));
    }
 
    /**
     * Sister method for standard `sendEmail` method with the benefit of returning a `SentEmail` entity confirming the successful sending of the email with a link to the sent object created for it.
     * Send email and return sent confirmation
     * @param inboxId ID of the inbox you want to send the email from
     * @param sendEmailOptions 
     */
    public sendEmailAndConfirm(inboxId: string, sendEmailOptions: SendEmailOptions, options?: Configuration): Observable<SentEmailDto> {
        const requestContextPromise = this.requestFactory.sendEmailAndConfirm(inboxId, sendEmailOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendEmailAndConfirm(rsp)));
            }));
    }
 
    /**
     * Send an email using a queue. Will place the email onto a queue that will then be processed and sent. Use this queue method to enable any failed email sending to be recovered. This will prevent lost emails when sending if your account encounters a block or payment issue.
     * Send email with queue
     * @param inboxId ID of the inbox you want to send the email from
     * @param validateBeforeEnqueue Validate before adding to queue
     * @param sendEmailOptions 
     */
    public sendEmailWithQueue(inboxId: string, validateBeforeEnqueue: boolean, sendEmailOptions: SendEmailOptions, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.sendEmailWithQueue(inboxId, validateBeforeEnqueue, sendEmailOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendEmailWithQueue(rsp)));
            }));
    }
 
    /**
     * Send email using an SMTP envelope containing RCPT TO, MAIL FROM, and a SMTP BODY.
     * Send email using an SMTP mail envelope and message body and return sent confirmation
     * @param inboxId ID of the inbox you want to send the email from
     * @param sendSMTPEnvelopeOptions 
     */
    public sendSmtpEnvelope(inboxId: string, sendSMTPEnvelopeOptions: SendSMTPEnvelopeOptions, options?: Configuration): Observable<SentEmailDto> {
        const requestContextPromise = this.requestFactory.sendSmtpEnvelope(inboxId, sendSMTPEnvelopeOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendSmtpEnvelope(rsp)));
            }));
    }
 
    /**
     * Send an inbox a test email to test email receiving is working
     * Send a test email to inbox
     * @param inboxId 
     */
    public sendTestEmail(inboxId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.sendTestEmail(inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendTestEmail(rsp)));
            }));
    }
 
    /**
     * Set and return new favourite state for an inbox
     * Set inbox favourited state
     * @param inboxId ID of inbox to set favourite state
     * @param setInboxFavouritedOptions 
     */
    public setInboxFavourited(inboxId: string, setInboxFavouritedOptions: SetInboxFavouritedOptions, options?: Configuration): Observable<InboxDto> {
        const requestContextPromise = this.requestFactory.setInboxFavourited(inboxId, setInboxFavouritedOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setInboxFavourited(rsp)));
            }));
    }
 
    /**
     * Update editable fields on an inbox
     * Update Inbox. Change name and description. Email address is not editable.
     * @param inboxId 
     * @param updateInboxOptions 
     */
    public updateInbox(inboxId: string, updateInboxOptions: UpdateInboxOptions, options?: Configuration): Observable<InboxDto> {
        const requestContextPromise = this.requestFactory.updateInbox(inboxId, updateInboxOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateInbox(rsp)));
            }));
    }
 
}

import { InboxForwarderControllerApiRequestFactory, InboxForwarderControllerApiResponseProcessor} from "../apis/InboxForwarderControllerApi.ts";
export class ObservableInboxForwarderControllerApi {
    private requestFactory: InboxForwarderControllerApiRequestFactory;
    private responseProcessor: InboxForwarderControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: InboxForwarderControllerApiRequestFactory,
        responseProcessor?: InboxForwarderControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InboxForwarderControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InboxForwarderControllerApiResponseProcessor();
    }

    /**
     * Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving
     * Create an inbox forwarder
     * @param inboxId Inbox id to attach forwarder to
     * @param createInboxForwarderOptions 
     */
    public createNewInboxForwarder(inboxId: string, createInboxForwarderOptions: CreateInboxForwarderOptions, options?: Configuration): Observable<InboxForwarderDto> {
        const requestContextPromise = this.requestFactory.createNewInboxForwarder(inboxId, createInboxForwarderOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createNewInboxForwarder(rsp)));
            }));
    }
 
    /**
     * Delete inbox forwarder
     * Delete an inbox forwarder
     * @param id ID of inbox forwarder
     */
    public deleteInboxForwarder(id: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteInboxForwarder(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteInboxForwarder(rsp)));
            }));
    }
 
    /**
     * Delete inbox forwarders. Accepts optional inboxId filter.
     * Delete inbox forwarders
     * @param inboxId Optional inbox id to attach forwarder to
     */
    public deleteInboxForwarders(inboxId?: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteInboxForwarders(inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteInboxForwarders(rsp)));
            }));
    }
 
    /**
     * Get inbox ruleset
     * Get an inbox forwarder
     * @param id ID of inbox forwarder
     */
    public getInboxForwarder(id: string, options?: Configuration): Observable<InboxForwarderDto> {
        const requestContextPromise = this.requestFactory.getInboxForwarder(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxForwarder(rsp)));
            }));
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
    public getInboxForwarders(inboxId?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Observable<PageInboxForwarderDto> {
        const requestContextPromise = this.requestFactory.getInboxForwarders(inboxId, page, size, sort, searchFilter, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxForwarders(rsp)));
            }));
    }
 
    /**
     * Test an inbox forwarder
     * Test an inbox forwarder
     * @param id ID of inbox forwarder
     * @param inboxForwarderTestOptions 
     */
    public testInboxForwarder(id: string, inboxForwarderTestOptions: InboxForwarderTestOptions, options?: Configuration): Observable<InboxForwarderTestResult> {
        const requestContextPromise = this.requestFactory.testInboxForwarder(id, inboxForwarderTestOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testInboxForwarder(rsp)));
            }));
    }
 
    /**
     * Test inbox forwarders for inbox
     * Test inbox forwarders for inbox
     * @param inboxId ID of inbox
     * @param inboxForwarderTestOptions 
     */
    public testInboxForwardersForInbox(inboxId: string, inboxForwarderTestOptions: InboxForwarderTestOptions, options?: Configuration): Observable<InboxForwarderTestResult> {
        const requestContextPromise = this.requestFactory.testInboxForwardersForInbox(inboxId, inboxForwarderTestOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testInboxForwardersForInbox(rsp)));
            }));
    }
 
    /**
     * Test new inbox forwarder
     * Test new inbox forwarder
     * @param testNewInboxForwarderOptions 
     */
    public testNewInboxForwarder(testNewInboxForwarderOptions: TestNewInboxForwarderOptions, options?: Configuration): Observable<InboxForwarderTestResult> {
        const requestContextPromise = this.requestFactory.testNewInboxForwarder(testNewInboxForwarderOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testNewInboxForwarder(rsp)));
            }));
    }
 
}

import { InboxRulesetControllerApiRequestFactory, InboxRulesetControllerApiResponseProcessor} from "../apis/InboxRulesetControllerApi.ts";
export class ObservableInboxRulesetControllerApi {
    private requestFactory: InboxRulesetControllerApiRequestFactory;
    private responseProcessor: InboxRulesetControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: InboxRulesetControllerApiRequestFactory,
        responseProcessor?: InboxRulesetControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InboxRulesetControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InboxRulesetControllerApiResponseProcessor();
    }

    /**
     * Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving
     * Create an inbox ruleset
     * @param inboxId Inbox id to attach ruleset to
     * @param createInboxRulesetOptions 
     */
    public createNewInboxRuleset(inboxId: string, createInboxRulesetOptions: CreateInboxRulesetOptions, options?: Configuration): Observable<InboxRulesetDto> {
        const requestContextPromise = this.requestFactory.createNewInboxRuleset(inboxId, createInboxRulesetOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createNewInboxRuleset(rsp)));
            }));
    }
 
    /**
     * Delete inbox ruleset
     * Delete an inbox ruleset
     * @param id ID of inbox ruleset
     */
    public deleteInboxRuleset(id: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteInboxRuleset(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteInboxRuleset(rsp)));
            }));
    }
 
    /**
     * Delete inbox rulesets. Accepts optional inboxId filter.
     * Delete inbox rulesets
     * @param inboxId Optional inbox id to attach ruleset to
     */
    public deleteInboxRulesets(inboxId?: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteInboxRulesets(inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteInboxRulesets(rsp)));
            }));
    }
 
    /**
     * Get inbox ruleset
     * Get an inbox ruleset
     * @param id ID of inbox ruleset
     */
    public getInboxRuleset(id: string, options?: Configuration): Observable<InboxRulesetDto> {
        const requestContextPromise = this.requestFactory.getInboxRuleset(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxRuleset(rsp)));
            }));
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
    public getInboxRulesets(inboxId?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Observable<PageInboxRulesetDto> {
        const requestContextPromise = this.requestFactory.getInboxRulesets(inboxId, page, size, sort, searchFilter, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxRulesets(rsp)));
            }));
    }
 
    /**
     * Test an inbox ruleset
     * Test an inbox ruleset
     * @param id ID of inbox ruleset
     * @param inboxRulesetTestOptions 
     */
    public testInboxRuleset(id: string, inboxRulesetTestOptions: InboxRulesetTestOptions, options?: Configuration): Observable<InboxRulesetTestResult> {
        const requestContextPromise = this.requestFactory.testInboxRuleset(id, inboxRulesetTestOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testInboxRuleset(rsp)));
            }));
    }
 
    /**
     * Test inbox rulesets for inbox
     * Test inbox rulesets for inbox
     * @param inboxId ID of inbox
     * @param inboxRulesetTestOptions 
     */
    public testInboxRulesetsForInbox(inboxId: string, inboxRulesetTestOptions: InboxRulesetTestOptions, options?: Configuration): Observable<InboxRulesetTestResult> {
        const requestContextPromise = this.requestFactory.testInboxRulesetsForInbox(inboxId, inboxRulesetTestOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testInboxRulesetsForInbox(rsp)));
            }));
    }
 
    /**
     * Test new inbox ruleset
     * Test new inbox ruleset
     * @param testNewInboxRulesetOptions 
     */
    public testNewInboxRuleset(testNewInboxRulesetOptions: TestNewInboxRulesetOptions, options?: Configuration): Observable<InboxRulesetTestResult> {
        const requestContextPromise = this.requestFactory.testNewInboxRuleset(testNewInboxRulesetOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.testNewInboxRuleset(rsp)));
            }));
    }
 
}

import { MailServerControllerApiRequestFactory, MailServerControllerApiResponseProcessor} from "../apis/MailServerControllerApi.ts";
export class ObservableMailServerControllerApi {
    private requestFactory: MailServerControllerApiRequestFactory;
    private responseProcessor: MailServerControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MailServerControllerApiRequestFactory,
        responseProcessor?: MailServerControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MailServerControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MailServerControllerApiResponseProcessor();
    }

    /**
     * Get DNS Mail Server records for a domain
     * @param describeDomainOptions 
     */
    public describeMailServerDomain(describeDomainOptions: DescribeDomainOptions, options?: Configuration): Observable<DescribeMailServerDomainResult> {
        const requestContextPromise = this.requestFactory.describeMailServerDomain(describeDomainOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.describeMailServerDomain(rsp)));
            }));
    }
 
    /**
     * Lookup DNS records for a domain
     * @param dNSLookupOptions 
     */
    public getDnsLookup(dNSLookupOptions: DNSLookupOptions, options?: Configuration): Observable<DNSLookupResults> {
        const requestContextPromise = this.requestFactory.getDnsLookup(dNSLookupOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDnsLookup(rsp)));
            }));
    }
 
    /**
     * Get IP address for a domain
     * @param name 
     */
    public getIpAddress(name: string, options?: Configuration): Observable<IPAddressResult> {
        const requestContextPromise = this.requestFactory.getIpAddress(name, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getIpAddress(rsp)));
            }));
    }
 
    /**
     * Deprecated. Use the EmailVerificationController methods for more accurate and reliable functionality. Verify the existence of an email address at a given mail server.
     * @param verifyEmailAddressOptions 
     */
    public verifyEmailAddress(verifyEmailAddressOptions: VerifyEmailAddressOptions, options?: Configuration): Observable<EmailVerificationResult> {
        const requestContextPromise = this.requestFactory.verifyEmailAddress(verifyEmailAddressOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.verifyEmailAddress(rsp)));
            }));
    }
 
}

import { MissedEmailControllerApiRequestFactory, MissedEmailControllerApiResponseProcessor} from "../apis/MissedEmailControllerApi.ts";
export class ObservableMissedEmailControllerApi {
    private requestFactory: MissedEmailControllerApiRequestFactory;
    private responseProcessor: MissedEmailControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MissedEmailControllerApiRequestFactory,
        responseProcessor?: MissedEmailControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MissedEmailControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MissedEmailControllerApiResponseProcessor();
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
    public getAllMissedEmails(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, inboxId?: string, options?: Configuration): Observable<PageMissedEmailProjection> {
        const requestContextPromise = this.requestFactory.getAllMissedEmails(page, size, sort, searchFilter, since, before, inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllMissedEmails(rsp)));
            }));
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
    public getAllUnknownMissedEmails(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, inboxId?: string, options?: Configuration): Observable<PageUnknownMissedEmailProjection> {
        const requestContextPromise = this.requestFactory.getAllUnknownMissedEmails(page, size, sort, searchFilter, since, before, inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllUnknownMissedEmails(rsp)));
            }));
    }
 
    /**
     * Get MissedEmail
     * @param missedEmailId 
     */
    public getMissedEmail(missedEmailId: string, options?: Configuration): Observable<MissedEmail> {
        const requestContextPromise = this.requestFactory.getMissedEmail(missedEmailId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMissedEmail(rsp)));
            }));
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
    public waitForNthMissedEmail(index: number, inboxId?: string, timeout?: number, since?: Date, before?: Date, options?: Configuration): Observable<MissedEmail> {
        const requestContextPromise = this.requestFactory.waitForNthMissedEmail(index, inboxId, timeout, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.waitForNthMissedEmail(rsp)));
            }));
    }
 
}

import { SentEmailsControllerApiRequestFactory, SentEmailsControllerApiResponseProcessor} from "../apis/SentEmailsControllerApi.ts";
export class ObservableSentEmailsControllerApi {
    private requestFactory: SentEmailsControllerApiRequestFactory;
    private responseProcessor: SentEmailsControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SentEmailsControllerApiRequestFactory,
        responseProcessor?: SentEmailsControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SentEmailsControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SentEmailsControllerApiResponseProcessor();
    }

    /**
     * Delete all sent email receipts
     */
    public deleteAllSentEmails(options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteAllSentEmails(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAllSentEmails(rsp)));
            }));
    }
 
    /**
     * Delete sent email receipt
     * @param id 
     */
    public deleteSentEmail(id: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteSentEmail(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteSentEmail(rsp)));
            }));
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
    public getAllSentTrackingPixels(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Observable<PageTrackingPixelProjection> {
        const requestContextPromise = this.requestFactory.getAllSentTrackingPixels(page, size, sort, searchFilter, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllSentTrackingPixels(rsp)));
            }));
    }
 
    /**
     * Returns a raw, unparsed, and unprocessed sent email. If your client has issues processing the response it is likely due to the response content-type which is text/plain. If you need a JSON response content-type use the getRawSentEmailJson endpoint
     * Get raw sent email string. Returns unparsed raw SMTP message with headers and body.
     * @param emailId ID of email
     */
    public getRawSentEmailContents(emailId: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getRawSentEmailContents(emailId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRawSentEmailContents(rsp)));
            }));
    }
 
    /**
     * Returns a raw, unparsed, and unprocessed sent email wrapped in a JSON response object for easier handling when compared with the getRawSentEmail text/plain response
     * Get raw sent email in JSON. Unparsed SMTP message in JSON wrapper format.
     * @param emailId ID of email
     */
    public getRawSentEmailJson(emailId: string, options?: Configuration): Observable<RawEmailJson> {
        const requestContextPromise = this.requestFactory.getRawSentEmailJson(emailId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRawSentEmailJson(rsp)));
            }));
    }
 
    /**
     * Get sent email receipt
     * @param id 
     */
    public getSentEmail(id: string, options?: Configuration): Observable<SentEmailDto> {
        const requestContextPromise = this.requestFactory.getSentEmail(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSentEmail(rsp)));
            }));
    }
 
    /**
     * Get sent email HTML content
     * @param id 
     */
    public getSentEmailHTMLContent(id: string, options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getSentEmailHTMLContent(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSentEmailHTMLContent(rsp)));
            }));
    }
 
    /**
     * Get a list of URLs for sent email content as text/html or raw SMTP message for viewing the message in a browser.
     * Get sent email URL for viewing in browser or downloading
     * @param id 
     */
    public getSentEmailPreviewURLs(id: string, options?: Configuration): Observable<EmailPreviewUrls> {
        const requestContextPromise = this.requestFactory.getSentEmailPreviewURLs(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSentEmailPreviewURLs(rsp)));
            }));
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
    public getSentEmailTrackingPixels(id: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Observable<PageTrackingPixelProjection> {
        const requestContextPromise = this.requestFactory.getSentEmailTrackingPixels(id, page, size, sort, searchFilter, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSentEmailTrackingPixels(rsp)));
            }));
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
    public getSentEmails(inboxId?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Observable<PageSentEmailProjection> {
        const requestContextPromise = this.requestFactory.getSentEmails(inboxId, page, size, sort, searchFilter, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSentEmails(rsp)));
            }));
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
    public getSentOrganizationEmails(inboxId?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Observable<PageSentEmailProjection> {
        const requestContextPromise = this.requestFactory.getSentOrganizationEmails(inboxId, page, size, sort, searchFilter, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSentOrganizationEmails(rsp)));
            }));
    }
 
}

import { TemplateControllerApiRequestFactory, TemplateControllerApiResponseProcessor} from "../apis/TemplateControllerApi.ts";
export class ObservableTemplateControllerApi {
    private requestFactory: TemplateControllerApiRequestFactory;
    private responseProcessor: TemplateControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TemplateControllerApiRequestFactory,
        responseProcessor?: TemplateControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TemplateControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TemplateControllerApiResponseProcessor();
    }

    /**
     * Create an email template with variables for use with templated transactional emails.
     * Create a Template
     * @param createTemplateOptions 
     */
    public createTemplate(createTemplateOptions: CreateTemplateOptions, options?: Configuration): Observable<TemplateDto> {
        const requestContextPromise = this.requestFactory.createTemplate(createTemplateOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTemplate(rsp)));
            }));
    }
 
    /**
     * Delete template
     * Delete email template
     * @param templateId Template ID
     */
    public deleteTemplate(templateId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteTemplate(templateId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTemplate(rsp)));
            }));
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
    public getAllTemplates(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Observable<PageTemplateProjection> {
        const requestContextPromise = this.requestFactory.getAllTemplates(page, size, sort, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllTemplates(rsp)));
            }));
    }
 
    /**
     * Get email template
     * Get template
     * @param templateId Template ID
     */
    public getTemplate(templateId: string, options?: Configuration): Observable<TemplateDto> {
        const requestContextPromise = this.requestFactory.getTemplate(templateId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTemplate(rsp)));
            }));
    }
 
    /**
     * Get all templates
     * List templates
     */
    public getTemplates(options?: Configuration): Observable<Array<TemplateProjection>> {
        const requestContextPromise = this.requestFactory.getTemplates(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTemplates(rsp)));
            }));
    }
 
    /**
     * Update email template
     * Update template
     * @param templateId Template ID
     * @param createTemplateOptions 
     */
    public updateTemplate(templateId: string, createTemplateOptions: CreateTemplateOptions, options?: Configuration): Observable<TemplateDto> {
        const requestContextPromise = this.requestFactory.updateTemplate(templateId, createTemplateOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateTemplate(rsp)));
            }));
    }
 
}

import { TrackingControllerApiRequestFactory, TrackingControllerApiResponseProcessor} from "../apis/TrackingControllerApi.ts";
export class ObservableTrackingControllerApi {
    private requestFactory: TrackingControllerApiRequestFactory;
    private responseProcessor: TrackingControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TrackingControllerApiRequestFactory,
        responseProcessor?: TrackingControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TrackingControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TrackingControllerApiResponseProcessor();
    }

    /**
     * Create a tracking pixel. A tracking pixel is an image that can be embedded in an email. When the email is viewed and the image is seen MailSlurp will mark the pixel as seen. Use tracking pixels to monitor email open events. You can receive open notifications via webhook or by fetching the pixel.
     * Create tracking pixel
     * @param createTrackingPixelOptions 
     */
    public createTrackingPixel(createTrackingPixelOptions: CreateTrackingPixelOptions, options?: Configuration): Observable<TrackingPixelDto> {
        const requestContextPromise = this.requestFactory.createTrackingPixel(createTrackingPixelOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTrackingPixel(rsp)));
            }));
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
    public getAllTrackingPixels(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Observable<PageTrackingPixelProjection> {
        const requestContextPromise = this.requestFactory.getAllTrackingPixels(page, size, sort, searchFilter, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllTrackingPixels(rsp)));
            }));
    }
 
    /**
     * Get pixel
     * @param id 
     */
    public getTrackingPixel(id: string, options?: Configuration): Observable<TrackingPixelDto> {
        const requestContextPromise = this.requestFactory.getTrackingPixel(id, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTrackingPixel(rsp)));
            }));
    }
 
}

import { WaitForControllerApiRequestFactory, WaitForControllerApiResponseProcessor} from "../apis/WaitForControllerApi.ts";
export class ObservableWaitForControllerApi {
    private requestFactory: WaitForControllerApiRequestFactory;
    private responseProcessor: WaitForControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: WaitForControllerApiRequestFactory,
        responseProcessor?: WaitForControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WaitForControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WaitForControllerApiResponseProcessor();
    }

    /**
     * Generic waitFor method that will wait until an inbox meets given conditions or return immediately if already met
     * Wait for an email to match the provided filter conditions such as subject contains keyword.
     * @param waitForConditions 
     */
    public waitFor(waitForConditions: WaitForConditions, options?: Configuration): Observable<Array<EmailPreview>> {
        const requestContextPromise = this.requestFactory.waitFor(waitForConditions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.waitFor(rsp)));
            }));
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
    public waitForEmailCount(inboxId: string, count: number, timeout?: number, unreadOnly?: boolean, before?: Date, since?: Date, sort?: 'ASC' | 'DESC', delay?: number, options?: Configuration): Observable<Array<EmailPreview>> {
        const requestContextPromise = this.requestFactory.waitForEmailCount(inboxId, count, timeout, unreadOnly, before, since, sort, delay, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.waitForEmailCount(rsp)));
            }));
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
    public waitForLatestEmail(inboxId?: string, timeout?: number, unreadOnly?: boolean, before?: Date, since?: Date, sort?: 'ASC' | 'DESC', delay?: number, options?: Configuration): Observable<Email> {
        const requestContextPromise = this.requestFactory.waitForLatestEmail(inboxId, timeout, unreadOnly, before, since, sort, delay, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.waitForLatestEmail(rsp)));
            }));
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
    public waitForMatchingEmails(inboxId: string, count: number, matchOptions: MatchOptions, before?: Date, since?: Date, sort?: 'ASC' | 'DESC', delay?: number, timeout?: number, unreadOnly?: boolean, options?: Configuration): Observable<Array<EmailPreview>> {
        const requestContextPromise = this.requestFactory.waitForMatchingEmails(inboxId, count, matchOptions, before, since, sort, delay, timeout, unreadOnly, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.waitForMatchingEmails(rsp)));
            }));
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
    public waitForMatchingFirstEmail(inboxId: string, matchOptions: MatchOptions, timeout?: number, unreadOnly?: boolean, since?: Date, before?: Date, sort?: 'ASC' | 'DESC', delay?: number, options?: Configuration): Observable<Email> {
        const requestContextPromise = this.requestFactory.waitForMatchingFirstEmail(inboxId, matchOptions, timeout, unreadOnly, since, before, sort, delay, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.waitForMatchingFirstEmail(rsp)));
            }));
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
    public waitForNthEmail(inboxId?: string, index?: number, timeout?: number, unreadOnly?: boolean, since?: Date, before?: Date, sort?: 'ASC' | 'DESC', delay?: number, options?: Configuration): Observable<Email> {
        const requestContextPromise = this.requestFactory.waitForNthEmail(inboxId, index, timeout, unreadOnly, since, before, sort, delay, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.waitForNthEmail(rsp)));
            }));
    }
 
}

import { WebhookControllerApiRequestFactory, WebhookControllerApiResponseProcessor} from "../apis/WebhookControllerApi.ts";
export class ObservableWebhookControllerApi {
    private requestFactory: WebhookControllerApiRequestFactory;
    private responseProcessor: WebhookControllerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: WebhookControllerApiRequestFactory,
        responseProcessor?: WebhookControllerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new WebhookControllerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new WebhookControllerApiResponseProcessor();
    }

    /**
     * Get notified of account level events such as bounce and bounce recipient.
     * Attach a WebHook URL to an inbox
     * @param createWebhookOptions 
     */
    public createAccountWebhook(createWebhookOptions: CreateWebhookOptions, options?: Configuration): Observable<WebhookDto> {
        const requestContextPromise = this.requestFactory.createAccountWebhook(createWebhookOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAccountWebhook(rsp)));
            }));
    }
 
    /**
     * Get notified whenever an inbox receives an email via a WebHook URL. An emailID will be posted to this URL every time an email is received for this inbox. The URL must be publicly reachable by the MailSlurp server. You can provide basicAuth values if you wish to secure this endpoint.
     * Attach a WebHook URL to an inbox
     * @param inboxId 
     * @param createWebhookOptions 
     */
    public createWebhook(inboxId: string, createWebhookOptions: CreateWebhookOptions, options?: Configuration): Observable<WebhookDto> {
        const requestContextPromise = this.requestFactory.createWebhook(inboxId, createWebhookOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createWebhook(rsp)));
            }));
    }
 
    /**
     * Delete all webhooks
     */
    public deleteAllWebhooks(options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteAllWebhooks(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAllWebhooks(rsp)));
            }));
    }
 
    /**
     * Delete and disable a Webhook for an Inbox
     * @param inboxId 
     * @param webhookId 
     */
    public deleteWebhook(inboxId: string, webhookId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteWebhook(inboxId, webhookId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteWebhook(rsp)));
            }));
    }
 
    /**
     * Delete a webhook
     * @param webhookId 
     */
    public deleteWebhookById(webhookId: string, options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteWebhookById(webhookId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteWebhookById(rsp)));
            }));
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
     */
    public getAllWebhookResults(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, unseenOnly?: boolean, options?: Configuration): Observable<PageWebhookResult> {
        const requestContextPromise = this.requestFactory.getAllWebhookResults(page, size, sort, searchFilter, since, before, unseenOnly, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllWebhookResults(rsp)));
            }));
    }
 
    /**
     * List webhooks in paginated form. Allows for page index, page size, and sort direction.
     * List Webhooks Paginated
     * @param page Optional page index in list pagination
     * @param size Optional page size for paginated result list.
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getAllWebhooks(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Observable<PageWebhookProjection> {
        const requestContextPromise = this.requestFactory.getAllWebhooks(page, size, sort, searchFilter, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllWebhooks(rsp)));
            }));
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
    public getInboxWebhooksPaginated(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Observable<PageWebhookProjection> {
        const requestContextPromise = this.requestFactory.getInboxWebhooksPaginated(inboxId, page, size, sort, searchFilter, since, before, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxWebhooksPaginated(rsp)));
            }));
    }
 
    /**
     * Get JSON Schema definition for webhook payload by event
     * @param event 
     */
    public getJsonSchemaForWebhookEvent(event: 'EMAIL_RECEIVED' | 'NEW_EMAIL' | 'NEW_CONTACT' | 'NEW_ATTACHMENT' | 'EMAIL_OPENED' | 'EMAIL_READ' | 'BOUNCE' | 'BOUNCE_RECIPIENT', options?: Configuration): Observable<JSONSchemaDto> {
        const requestContextPromise = this.requestFactory.getJsonSchemaForWebhookEvent(event, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getJsonSchemaForWebhookEvent(rsp)));
            }));
    }
 
    /**
     * Get JSON Schema definition for webhook payload
     * @param webhookId 
     */
    public getJsonSchemaForWebhookPayload(webhookId: string, options?: Configuration): Observable<JSONSchemaDto> {
        const requestContextPromise = this.requestFactory.getJsonSchemaForWebhookPayload(webhookId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getJsonSchemaForWebhookPayload(rsp)));
            }));
    }
 
    /**
     * Get test webhook payload example. Response content depends on eventName passed. Uses `EMAIL_RECEIVED` as default.
     * @param eventName 
     */
    public getTestWebhookPayload(eventName?: 'EMAIL_RECEIVED' | 'NEW_EMAIL' | 'NEW_CONTACT' | 'NEW_ATTACHMENT' | 'EMAIL_OPENED' | 'EMAIL_READ' | 'BOUNCE' | 'BOUNCE_RECIPIENT', options?: Configuration): Observable<AbstractWebhookPayload> {
        const requestContextPromise = this.requestFactory.getTestWebhookPayload(eventName, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTestWebhookPayload(rsp)));
            }));
    }
 
    /**
     * Get webhook test payload for bounce
     */
    public getTestWebhookPayloadBounce(options?: Configuration): Observable<WebhookBouncePayload> {
        const requestContextPromise = this.requestFactory.getTestWebhookPayloadBounce(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTestWebhookPayloadBounce(rsp)));
            }));
    }
 
    /**
     * Get webhook test payload for bounce recipient
     */
    public getTestWebhookPayloadBounceRecipient(options?: Configuration): Observable<WebhookBounceRecipientPayload> {
        const requestContextPromise = this.requestFactory.getTestWebhookPayloadBounceRecipient(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTestWebhookPayloadBounceRecipient(rsp)));
            }));
    }
 
    /**
     * Get webhook test payload for email opened event
     */
    public getTestWebhookPayloadEmailOpened(options?: Configuration): Observable<WebhookEmailOpenedPayload> {
        const requestContextPromise = this.requestFactory.getTestWebhookPayloadEmailOpened(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTestWebhookPayloadEmailOpened(rsp)));
            }));
    }
 
    /**
     * Get webhook test payload for email opened event
     */
    public getTestWebhookPayloadEmailRead(options?: Configuration): Observable<WebhookEmailReadPayload> {
        const requestContextPromise = this.requestFactory.getTestWebhookPayloadEmailRead(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTestWebhookPayloadEmailRead(rsp)));
            }));
    }
 
    /**
     * Get example payload for webhook
     * @param webhookId 
     */
    public getTestWebhookPayloadForWebhook(webhookId: string, options?: Configuration): Observable<AbstractWebhookPayload> {
        const requestContextPromise = this.requestFactory.getTestWebhookPayloadForWebhook(webhookId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTestWebhookPayloadForWebhook(rsp)));
            }));
    }
 
    /**
     * Get webhook test payload for new attachment event
     */
    public getTestWebhookPayloadNewAttachment(options?: Configuration): Observable<WebhookNewAttachmentPayload> {
        const requestContextPromise = this.requestFactory.getTestWebhookPayloadNewAttachment(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTestWebhookPayloadNewAttachment(rsp)));
            }));
    }
 
    /**
     * Get webhook test payload for new contact event
     */
    public getTestWebhookPayloadNewContact(options?: Configuration): Observable<WebhookNewContactPayload> {
        const requestContextPromise = this.requestFactory.getTestWebhookPayloadNewContact(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTestWebhookPayloadNewContact(rsp)));
            }));
    }
 
    /**
     * Get webhook test payload for new email event
     */
    public getTestWebhookPayloadNewEmail(options?: Configuration): Observable<WebhookNewEmailPayload> {
        const requestContextPromise = this.requestFactory.getTestWebhookPayloadNewEmail(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTestWebhookPayloadNewEmail(rsp)));
            }));
    }
 
    /**
     * Get a webhook
     * @param webhookId 
     */
    public getWebhook(webhookId: string, options?: Configuration): Observable<WebhookDto> {
        const requestContextPromise = this.requestFactory.getWebhook(webhookId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWebhook(rsp)));
            }));
    }
 
    /**
     * Get a webhook result for a webhook
     * @param webhookResultId Webhook Result ID
     */
    public getWebhookResult(webhookResultId: string, options?: Configuration): Observable<WebhookResultDto> {
        const requestContextPromise = this.requestFactory.getWebhookResult(webhookResultId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWebhookResult(rsp)));
            }));
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
     */
    public getWebhookResults(webhookId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, unseenOnly?: boolean, options?: Configuration): Observable<PageWebhookResult> {
        const requestContextPromise = this.requestFactory.getWebhookResults(webhookId, page, size, sort, searchFilter, since, before, unseenOnly, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWebhookResults(rsp)));
            }));
    }
 
    /**
     * Get count of unseen webhook results with error status
     */
    public getWebhookResultsUnseenErrorCount(options?: Configuration): Observable<UnseenErrorCountDto> {
        const requestContextPromise = this.requestFactory.getWebhookResultsUnseenErrorCount(options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWebhookResultsUnseenErrorCount(rsp)));
            }));
    }
 
    /**
     * Get all webhooks for an Inbox
     * @param inboxId 
     */
    public getWebhooks(inboxId: string, options?: Configuration): Observable<Array<WebhookDto>> {
        const requestContextPromise = this.requestFactory.getWebhooks(inboxId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getWebhooks(rsp)));
            }));
    }
 
    /**
     * Allows you to resend a webhook payload that was already sent. Webhooks that fail are retried automatically for 24 hours and then put in a dead letter queue. You can retry results manually using this method.
     * Get a webhook result and try to resend the original webhook payload
     * @param webhookResultId Webhook Result ID
     */
    public redriveWebhookResult(webhookResultId: string, options?: Configuration): Observable<WebhookRedriveResult> {
        const requestContextPromise = this.requestFactory.redriveWebhookResult(webhookResultId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.redriveWebhookResult(rsp)));
            }));
    }
 
    /**
     * Send webhook test data
     * @param webhookId 
     */
    public sendTestData(webhookId: string, options?: Configuration): Observable<WebhookTestResult> {
        const requestContextPromise = this.requestFactory.sendTestData(webhookId, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendTestData(rsp)));
            }));
    }
 
    /**
     * Verify a webhook payload using the messageId and signature. This allows you to be sure that MailSlurp sent the payload and not another server.
     * Verify a webhook payload signature
     * @param verifyWebhookSignatureOptions 
     */
    public verifyWebhookSignature(verifyWebhookSignatureOptions: VerifyWebhookSignatureOptions, options?: Configuration): Observable<VerifyWebhookSignatureResults> {
        const requestContextPromise = this.requestFactory.verifyWebhookSignature(verifyWebhookSignatureOptions, options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.verifyWebhookSignature(rsp)));
            }));
    }
 
}
