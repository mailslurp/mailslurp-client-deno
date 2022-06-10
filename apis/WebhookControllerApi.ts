// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { AbstractWebhookPayload } from '../models/AbstractWebhookPayload.ts';
import { CreateWebhookOptions } from '../models/CreateWebhookOptions.ts';
import { JSONSchemaDto } from '../models/JSONSchemaDto.ts';
import { PageWebhookProjection } from '../models/PageWebhookProjection.ts';
import { PageWebhookResult } from '../models/PageWebhookResult.ts';
import { UnseenErrorCountDto } from '../models/UnseenErrorCountDto.ts';
import { VerifyWebhookSignatureOptions } from '../models/VerifyWebhookSignatureOptions.ts';
import { VerifyWebhookSignatureResults } from '../models/VerifyWebhookSignatureResults.ts';
import { WebhookBouncePayload } from '../models/WebhookBouncePayload.ts';
import { WebhookBounceRecipientPayload } from '../models/WebhookBounceRecipientPayload.ts';
import { WebhookDto } from '../models/WebhookDto.ts';
import { WebhookEmailOpenedPayload } from '../models/WebhookEmailOpenedPayload.ts';
import { WebhookEmailReadPayload } from '../models/WebhookEmailReadPayload.ts';
import { WebhookNewAttachmentPayload } from '../models/WebhookNewAttachmentPayload.ts';
import { WebhookNewContactPayload } from '../models/WebhookNewContactPayload.ts';
import { WebhookNewEmailPayload } from '../models/WebhookNewEmailPayload.ts';
import { WebhookRedriveResult } from '../models/WebhookRedriveResult.ts';
import { WebhookResultDto } from '../models/WebhookResultDto.ts';
import { WebhookTestResult } from '../models/WebhookTestResult.ts';

/**
 * no description
 */
export class WebhookControllerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get notified of account level events such as bounce and bounce recipient.
     * Attach a WebHook URL to an inbox
     * @param createWebhookOptions 
     */
    public async createAccountWebhook(createWebhookOptions: CreateWebhookOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'createWebhookOptions' is not null or undefined
        if (createWebhookOptions === null || createWebhookOptions === undefined) {
            throw new RequiredError('Required parameter createWebhookOptions was null or undefined when calling createAccountWebhook.');
        }


        // Path Params
        const localVarPath = '/webhooks';

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
            ObjectSerializer.serialize(createWebhookOptions, "CreateWebhookOptions", ""),
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
     * Get notified whenever an inbox receives an email via a WebHook URL. An emailID will be posted to this URL every time an email is received for this inbox. The URL must be publicly reachable by the MailSlurp server. You can provide basicAuth values if you wish to secure this endpoint.
     * Attach a WebHook URL to an inbox
     * @param inboxId 
     * @param createWebhookOptions 
     */
    public async createWebhook(inboxId: string, createWebhookOptions: CreateWebhookOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'inboxId' is not null or undefined
        if (inboxId === null || inboxId === undefined) {
            throw new RequiredError('Required parameter inboxId was null or undefined when calling createWebhook.');
        }


        // verify required parameter 'createWebhookOptions' is not null or undefined
        if (createWebhookOptions === null || createWebhookOptions === undefined) {
            throw new RequiredError('Required parameter createWebhookOptions was null or undefined when calling createWebhook.');
        }


        // Path Params
        const localVarPath = '/inboxes/{inboxId}/webhooks'
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
            ObjectSerializer.serialize(createWebhookOptions, "CreateWebhookOptions", ""),
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
     * Delete all webhooks
     */
    public async deleteAllWebhooks(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/webhooks';

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
     * Delete and disable a Webhook for an Inbox
     * @param inboxId 
     * @param webhookId 
     */
    public async deleteWebhook(inboxId: string, webhookId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'inboxId' is not null or undefined
        if (inboxId === null || inboxId === undefined) {
            throw new RequiredError('Required parameter inboxId was null or undefined when calling deleteWebhook.');
        }


        // verify required parameter 'webhookId' is not null or undefined
        if (webhookId === null || webhookId === undefined) {
            throw new RequiredError('Required parameter webhookId was null or undefined when calling deleteWebhook.');
        }


        // Path Params
        const localVarPath = '/inboxes/{inboxId}/webhooks/{webhookId}'
            .replace('{' + 'inboxId' + '}', encodeURIComponent(String(inboxId)))
            .replace('{' + 'webhookId' + '}', encodeURIComponent(String(webhookId)));

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
     * Delete a webhook
     * @param webhookId 
     */
    public async deleteWebhookById(webhookId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'webhookId' is not null or undefined
        if (webhookId === null || webhookId === undefined) {
            throw new RequiredError('Required parameter webhookId was null or undefined when calling deleteWebhookById.');
        }


        // Path Params
        const localVarPath = '/webhooks/{webhookId}'
            .replace('{' + 'webhookId' + '}', encodeURIComponent(String(webhookId)));

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
     * Get results for all webhooks
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param unseenOnly Filter for unseen exceptions only
     */
    public async getAllWebhookResults(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, unseenOnly?: boolean, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;








        // Path Params
        const localVarPath = '/webhooks/results';

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
        if (searchFilter !== undefined) {
            requestContext.setQueryParam("searchFilter", ObjectSerializer.serialize(searchFilter, "string", ""));
        }
        if (since !== undefined) {
            requestContext.setQueryParam("since", ObjectSerializer.serialize(since, "Date", "date-time"));
        }
        if (before !== undefined) {
            requestContext.setQueryParam("before", ObjectSerializer.serialize(before, "Date", "date-time"));
        }
        if (unseenOnly !== undefined) {
            requestContext.setQueryParam("unseenOnly", ObjectSerializer.serialize(unseenOnly, "boolean", ""));
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
     * List webhooks in paginated form. Allows for page index, page size, and sort direction.
     * List Webhooks Paginated
     * @param page Optional page index in list pagination
     * @param size Optional page size for paginated result list.
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public async getAllWebhooks(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;







        // Path Params
        const localVarPath = '/webhooks/paginated';

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
        if (searchFilter !== undefined) {
            requestContext.setQueryParam("searchFilter", ObjectSerializer.serialize(searchFilter, "string", ""));
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
     * Get paginated webhooks for an Inbox
     * @param inboxId 
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public async getInboxWebhooksPaginated(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'inboxId' is not null or undefined
        if (inboxId === null || inboxId === undefined) {
            throw new RequiredError('Required parameter inboxId was null or undefined when calling getInboxWebhooksPaginated.');
        }








        // Path Params
        const localVarPath = '/inboxes/{inboxId}/webhooks/paginated'
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
        if (searchFilter !== undefined) {
            requestContext.setQueryParam("searchFilter", ObjectSerializer.serialize(searchFilter, "string", ""));
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
     * Get JSON Schema definition for webhook payload by event
     * @param event 
     */
    public async getJsonSchemaForWebhookEvent(event: 'EMAIL_RECEIVED' | 'NEW_EMAIL' | 'NEW_CONTACT' | 'NEW_ATTACHMENT' | 'EMAIL_OPENED' | 'EMAIL_READ' | 'BOUNCE' | 'BOUNCE_RECIPIENT', options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'event' is not null or undefined
        if (event === null || event === undefined) {
            throw new RequiredError('Required parameter event was null or undefined when calling getJsonSchemaForWebhookEvent.');
        }


        // Path Params
        const localVarPath = '/webhooks/schema';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (event !== undefined) {
            requestContext.setQueryParam("event", ObjectSerializer.serialize(event, "'EMAIL_RECEIVED' | 'NEW_EMAIL' | 'NEW_CONTACT' | 'NEW_ATTACHMENT' | 'EMAIL_OPENED' | 'EMAIL_READ' | 'BOUNCE' | 'BOUNCE_RECIPIENT'", ""));
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
     * Get JSON Schema definition for webhook payload
     * @param webhookId 
     */
    public async getJsonSchemaForWebhookPayload(webhookId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'webhookId' is not null or undefined
        if (webhookId === null || webhookId === undefined) {
            throw new RequiredError('Required parameter webhookId was null or undefined when calling getJsonSchemaForWebhookPayload.');
        }


        // Path Params
        const localVarPath = '/webhooks/{webhookId}/schema'
            .replace('{' + 'webhookId' + '}', encodeURIComponent(String(webhookId)));

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
     * Get test webhook payload example. Response content depends on eventName passed. Uses `EMAIL_RECEIVED` as default.
     * @param eventName 
     */
    public async getTestWebhookPayload(eventName?: 'EMAIL_RECEIVED' | 'NEW_EMAIL' | 'NEW_CONTACT' | 'NEW_ATTACHMENT' | 'EMAIL_OPENED' | 'EMAIL_READ' | 'BOUNCE' | 'BOUNCE_RECIPIENT', options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;


        // Path Params
        const localVarPath = '/webhooks/test';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (eventName !== undefined) {
            requestContext.setQueryParam("eventName", ObjectSerializer.serialize(eventName, "'EMAIL_RECEIVED' | 'NEW_EMAIL' | 'NEW_CONTACT' | 'NEW_ATTACHMENT' | 'EMAIL_OPENED' | 'EMAIL_READ' | 'BOUNCE' | 'BOUNCE_RECIPIENT'", ""));
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
     * Get webhook test payload for bounce
     */
    public async getTestWebhookPayloadBounce(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/webhooks/test/email-bounce-payload';

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
     * Get webhook test payload for bounce recipient
     */
    public async getTestWebhookPayloadBounceRecipient(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/webhooks/test/email-bounce-recipient-payload';

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
     * Get webhook test payload for email opened event
     */
    public async getTestWebhookPayloadEmailOpened(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/webhooks/test/email-opened-payload';

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
     * Get webhook test payload for email opened event
     */
    public async getTestWebhookPayloadEmailRead(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/webhooks/test/email-read-payload';

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
     * Get example payload for webhook
     * @param webhookId 
     */
    public async getTestWebhookPayloadForWebhook(webhookId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'webhookId' is not null or undefined
        if (webhookId === null || webhookId === undefined) {
            throw new RequiredError('Required parameter webhookId was null or undefined when calling getTestWebhookPayloadForWebhook.');
        }


        // Path Params
        const localVarPath = '/webhooks/{webhookId}/example'
            .replace('{' + 'webhookId' + '}', encodeURIComponent(String(webhookId)));

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
     * Get webhook test payload for new attachment event
     */
    public async getTestWebhookPayloadNewAttachment(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/webhooks/test/new-attachment-payload';

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
     * Get webhook test payload for new contact event
     */
    public async getTestWebhookPayloadNewContact(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/webhooks/test/new-contact-payload';

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
     * Get webhook test payload for new email event
     */
    public async getTestWebhookPayloadNewEmail(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/webhooks/test/new-email-payload';

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
     * Get a webhook
     * @param webhookId 
     */
    public async getWebhook(webhookId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'webhookId' is not null or undefined
        if (webhookId === null || webhookId === undefined) {
            throw new RequiredError('Required parameter webhookId was null or undefined when calling getWebhook.');
        }


        // Path Params
        const localVarPath = '/webhooks/{webhookId}'
            .replace('{' + 'webhookId' + '}', encodeURIComponent(String(webhookId)));

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
     * Get a webhook result for a webhook
     * @param webhookResultId Webhook Result ID
     */
    public async getWebhookResult(webhookResultId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'webhookResultId' is not null or undefined
        if (webhookResultId === null || webhookResultId === undefined) {
            throw new RequiredError('Required parameter webhookResultId was null or undefined when calling getWebhookResult.');
        }


        // Path Params
        const localVarPath = '/webhooks/results/{webhookResultId}'
            .replace('{' + 'webhookResultId' + '}', encodeURIComponent(String(webhookResultId)));

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
    public async getWebhookResults(webhookId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, unseenOnly?: boolean, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'webhookId' is not null or undefined
        if (webhookId === null || webhookId === undefined) {
            throw new RequiredError('Required parameter webhookId was null or undefined when calling getWebhookResults.');
        }









        // Path Params
        const localVarPath = '/webhooks/{webhookId}/results'
            .replace('{' + 'webhookId' + '}', encodeURIComponent(String(webhookId)));

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
        if (searchFilter !== undefined) {
            requestContext.setQueryParam("searchFilter", ObjectSerializer.serialize(searchFilter, "string", ""));
        }
        if (since !== undefined) {
            requestContext.setQueryParam("since", ObjectSerializer.serialize(since, "Date", "date-time"));
        }
        if (before !== undefined) {
            requestContext.setQueryParam("before", ObjectSerializer.serialize(before, "Date", "date-time"));
        }
        if (unseenOnly !== undefined) {
            requestContext.setQueryParam("unseenOnly", ObjectSerializer.serialize(unseenOnly, "boolean", ""));
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
     * Get count of unseen webhook results with error status
     */
    public async getWebhookResultsUnseenErrorCount(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/webhooks/results/unseen-count';

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
     * Get all webhooks for an Inbox
     * @param inboxId 
     */
    public async getWebhooks(inboxId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'inboxId' is not null or undefined
        if (inboxId === null || inboxId === undefined) {
            throw new RequiredError('Required parameter inboxId was null or undefined when calling getWebhooks.');
        }


        // Path Params
        const localVarPath = '/inboxes/{inboxId}/webhooks'
            .replace('{' + 'inboxId' + '}', encodeURIComponent(String(inboxId)));

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
     * Allows you to resend a webhook payload that was already sent. Webhooks that fail are retried automatically for 24 hours and then put in a dead letter queue. You can retry results manually using this method.
     * Get a webhook result and try to resend the original webhook payload
     * @param webhookResultId Webhook Result ID
     */
    public async redriveWebhookResult(webhookResultId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'webhookResultId' is not null or undefined
        if (webhookResultId === null || webhookResultId === undefined) {
            throw new RequiredError('Required parameter webhookResultId was null or undefined when calling redriveWebhookResult.');
        }


        // Path Params
        const localVarPath = '/webhooks/results/{webhookResultId}/redrive'
            .replace('{' + 'webhookResultId' + '}', encodeURIComponent(String(webhookResultId)));

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
     * Send webhook test data
     * @param webhookId 
     */
    public async sendTestData(webhookId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'webhookId' is not null or undefined
        if (webhookId === null || webhookId === undefined) {
            throw new RequiredError('Required parameter webhookId was null or undefined when calling sendTestData.');
        }


        // Path Params
        const localVarPath = '/webhooks/{webhookId}/test'
            .replace('{' + 'webhookId' + '}', encodeURIComponent(String(webhookId)));

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
     * Verify a webhook payload using the messageId and signature. This allows you to be sure that MailSlurp sent the payload and not another server.
     * Verify a webhook payload signature
     * @param verifyWebhookSignatureOptions 
     */
    public async verifyWebhookSignature(verifyWebhookSignatureOptions: VerifyWebhookSignatureOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'verifyWebhookSignatureOptions' is not null or undefined
        if (verifyWebhookSignatureOptions === null || verifyWebhookSignatureOptions === undefined) {
            throw new RequiredError('Required parameter verifyWebhookSignatureOptions was null or undefined when calling verifyWebhookSignature.');
        }


        // Path Params
        const localVarPath = '/webhooks/verify';

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
            ObjectSerializer.serialize(verifyWebhookSignatureOptions, "VerifyWebhookSignatureOptions", ""),
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

export class WebhookControllerApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAccountWebhook
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createAccountWebhook(response: ResponseContext): Promise<WebhookDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: WebhookDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookDto", ""
            ) as WebhookDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WebhookDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookDto", ""
            ) as WebhookDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createWebhook
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createWebhook(response: ResponseContext): Promise<WebhookDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: WebhookDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookDto", ""
            ) as WebhookDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WebhookDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookDto", ""
            ) as WebhookDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAllWebhooks
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteAllWebhooks(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to deleteWebhook
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteWebhook(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to deleteWebhookById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteWebhookById(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
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
     * @params response Response returned by the server for a request to getAllWebhookResults
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllWebhookResults(response: ResponseContext): Promise<PageWebhookResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PageWebhookResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageWebhookResult", ""
            ) as PageWebhookResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PageWebhookResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageWebhookResult", ""
            ) as PageWebhookResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllWebhooks
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllWebhooks(response: ResponseContext): Promise<PageWebhookProjection > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PageWebhookProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageWebhookProjection", ""
            ) as PageWebhookProjection;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PageWebhookProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageWebhookProjection", ""
            ) as PageWebhookProjection;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getInboxWebhooksPaginated
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getInboxWebhooksPaginated(response: ResponseContext): Promise<PageWebhookProjection > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PageWebhookProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageWebhookProjection", ""
            ) as PageWebhookProjection;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PageWebhookProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageWebhookProjection", ""
            ) as PageWebhookProjection;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getJsonSchemaForWebhookEvent
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getJsonSchemaForWebhookEvent(response: ResponseContext): Promise<JSONSchemaDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: JSONSchemaDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JSONSchemaDto", ""
            ) as JSONSchemaDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: JSONSchemaDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JSONSchemaDto", ""
            ) as JSONSchemaDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getJsonSchemaForWebhookPayload
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getJsonSchemaForWebhookPayload(response: ResponseContext): Promise<JSONSchemaDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: JSONSchemaDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JSONSchemaDto", ""
            ) as JSONSchemaDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: JSONSchemaDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JSONSchemaDto", ""
            ) as JSONSchemaDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTestWebhookPayload
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTestWebhookPayload(response: ResponseContext): Promise<AbstractWebhookPayload > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AbstractWebhookPayload = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AbstractWebhookPayload", ""
            ) as AbstractWebhookPayload;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AbstractWebhookPayload = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AbstractWebhookPayload", ""
            ) as AbstractWebhookPayload;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTestWebhookPayloadBounce
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTestWebhookPayloadBounce(response: ResponseContext): Promise<WebhookBouncePayload > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WebhookBouncePayload = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookBouncePayload", ""
            ) as WebhookBouncePayload;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WebhookBouncePayload = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookBouncePayload", ""
            ) as WebhookBouncePayload;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTestWebhookPayloadBounceRecipient
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTestWebhookPayloadBounceRecipient(response: ResponseContext): Promise<WebhookBounceRecipientPayload > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WebhookBounceRecipientPayload = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookBounceRecipientPayload", ""
            ) as WebhookBounceRecipientPayload;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WebhookBounceRecipientPayload = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookBounceRecipientPayload", ""
            ) as WebhookBounceRecipientPayload;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTestWebhookPayloadEmailOpened
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTestWebhookPayloadEmailOpened(response: ResponseContext): Promise<WebhookEmailOpenedPayload > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WebhookEmailOpenedPayload = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookEmailOpenedPayload", ""
            ) as WebhookEmailOpenedPayload;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WebhookEmailOpenedPayload = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookEmailOpenedPayload", ""
            ) as WebhookEmailOpenedPayload;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTestWebhookPayloadEmailRead
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTestWebhookPayloadEmailRead(response: ResponseContext): Promise<WebhookEmailReadPayload > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WebhookEmailReadPayload = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookEmailReadPayload", ""
            ) as WebhookEmailReadPayload;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WebhookEmailReadPayload = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookEmailReadPayload", ""
            ) as WebhookEmailReadPayload;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTestWebhookPayloadForWebhook
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTestWebhookPayloadForWebhook(response: ResponseContext): Promise<AbstractWebhookPayload > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: AbstractWebhookPayload = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AbstractWebhookPayload", ""
            ) as AbstractWebhookPayload;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AbstractWebhookPayload = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AbstractWebhookPayload", ""
            ) as AbstractWebhookPayload;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTestWebhookPayloadNewAttachment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTestWebhookPayloadNewAttachment(response: ResponseContext): Promise<WebhookNewAttachmentPayload > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WebhookNewAttachmentPayload = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookNewAttachmentPayload", ""
            ) as WebhookNewAttachmentPayload;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WebhookNewAttachmentPayload = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookNewAttachmentPayload", ""
            ) as WebhookNewAttachmentPayload;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTestWebhookPayloadNewContact
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTestWebhookPayloadNewContact(response: ResponseContext): Promise<WebhookNewContactPayload > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WebhookNewContactPayload = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookNewContactPayload", ""
            ) as WebhookNewContactPayload;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WebhookNewContactPayload = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookNewContactPayload", ""
            ) as WebhookNewContactPayload;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTestWebhookPayloadNewEmail
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTestWebhookPayloadNewEmail(response: ResponseContext): Promise<WebhookNewEmailPayload > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WebhookNewEmailPayload = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookNewEmailPayload", ""
            ) as WebhookNewEmailPayload;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WebhookNewEmailPayload = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookNewEmailPayload", ""
            ) as WebhookNewEmailPayload;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getWebhook
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getWebhook(response: ResponseContext): Promise<WebhookDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WebhookDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookDto", ""
            ) as WebhookDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WebhookDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookDto", ""
            ) as WebhookDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getWebhookResult
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getWebhookResult(response: ResponseContext): Promise<WebhookResultDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WebhookResultDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookResultDto", ""
            ) as WebhookResultDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WebhookResultDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookResultDto", ""
            ) as WebhookResultDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getWebhookResults
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getWebhookResults(response: ResponseContext): Promise<PageWebhookResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PageWebhookResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageWebhookResult", ""
            ) as PageWebhookResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PageWebhookResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageWebhookResult", ""
            ) as PageWebhookResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getWebhookResultsUnseenErrorCount
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getWebhookResultsUnseenErrorCount(response: ResponseContext): Promise<UnseenErrorCountDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UnseenErrorCountDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UnseenErrorCountDto", ""
            ) as UnseenErrorCountDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UnseenErrorCountDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UnseenErrorCountDto", ""
            ) as UnseenErrorCountDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getWebhooks
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getWebhooks(response: ResponseContext): Promise<Array<WebhookDto> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<WebhookDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<WebhookDto>", ""
            ) as Array<WebhookDto>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<WebhookDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<WebhookDto>", ""
            ) as Array<WebhookDto>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to redriveWebhookResult
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async redriveWebhookResult(response: ResponseContext): Promise<WebhookRedriveResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: WebhookRedriveResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookRedriveResult", ""
            ) as WebhookRedriveResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WebhookRedriveResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookRedriveResult", ""
            ) as WebhookRedriveResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to sendTestData
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async sendTestData(response: ResponseContext): Promise<WebhookTestResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: WebhookTestResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookTestResult", ""
            ) as WebhookTestResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: WebhookTestResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "WebhookTestResult", ""
            ) as WebhookTestResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to verifyWebhookSignature
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async verifyWebhookSignature(response: ResponseContext): Promise<VerifyWebhookSignatureResults > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VerifyWebhookSignatureResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerifyWebhookSignatureResults", ""
            ) as VerifyWebhookSignatureResults;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: VerifyWebhookSignatureResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VerifyWebhookSignatureResults", ""
            ) as VerifyWebhookSignatureResults;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
