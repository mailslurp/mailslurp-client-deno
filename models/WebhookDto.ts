/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It's designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://docs.mailslurp.com/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * OpenAPI spec version: 6.5.2
 * Contact: contact@mailslurp.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { WebhookHeaders } from './WebhookHeaders.ts';
import { HttpFile } from '../http/http.ts';

/**
* Representation of a webhook for an inbox. The URL specified will be using by MailSlurp whenever an email is received by the attached inbox. A webhook entity should have a URL that points to your server. Your server should accept HTTP/S POST requests and return a success 200. MailSlurp will retry your webhooks if they fail. See https://api.mailslurp.com/schemas/webhook-payload for the payload schema.
*/
export class WebhookDto {
    /**
    * ID of the Webhook
    */
    'id': string;
    /**
    * User ID of the Webhook
    */
    'userId': string;
    /**
    * Does webhook expect basic authentication? If true it means you created this webhook with a username and password. MailSlurp will use these in the URL to authenticate itself.
    */
    'basicAuth': boolean;
    /**
    * Name of the webhook
    */
    'name'?: string;
    /**
    * The phoneNumberId that the Webhook will be triggered by. If null then webhook triggered at account level or inbox level if inboxId set
    */
    'phoneId'?: string;
    /**
    * The inbox that the Webhook will be triggered by. If null then webhook triggered at account level or phone level if phoneId set
    */
    'inboxId'?: string;
    /**
    * URL of your server that the webhook will be sent to. The schema of the JSON that is sent is described by the payloadJsonSchema.
    */
    'url': string;
    /**
    * HTTP method that your server endpoint must listen for
    */
    'method': WebhookDtoMethodEnum;
    /**
    * Deprecated. Fetch JSON Schema for webhook using the getJsonSchemaForWebhookPayload method
    */
    'payloadJsonSchema': string;
    /**
    * When the webhook was created
    */
    'createdAt': Date;
    'updatedAt': Date;
    /**
    * Webhook trigger event name
    */
    'eventName'?: WebhookDtoEventNameEnum;
    'requestHeaders'?: WebhookHeaders;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "basicAuth",
            "baseName": "basicAuth",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "phoneId",
            "baseName": "phoneId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "inboxId",
            "baseName": "inboxId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "WebhookDtoMethodEnum",
            "format": ""
        },
        {
            "name": "payloadJsonSchema",
            "baseName": "payloadJsonSchema",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "eventName",
            "baseName": "eventName",
            "type": "WebhookDtoEventNameEnum",
            "format": ""
        },
        {
            "name": "requestHeaders",
            "baseName": "requestHeaders",
            "type": "WebhookHeaders",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WebhookDto.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type WebhookDtoMethodEnum = "GET" | "HEAD" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS" | "TRACE" ;
export type WebhookDtoEventNameEnum = "EMAIL_RECEIVED" | "NEW_EMAIL" | "NEW_CONTACT" | "NEW_ATTACHMENT" | "EMAIL_OPENED" | "EMAIL_READ" | "BOUNCE" | "BOUNCE_RECIPIENT" | "NEW_SMS" ;

