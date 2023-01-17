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

import { BasicAuthOptions } from './BasicAuthOptions.ts';
import { WebhookHeaders } from './WebhookHeaders.ts';
import { HttpFile } from '../http/http.ts';

/**
* Options for creating a webhook. Webhooks can be attached to inboxes and MailSlurp will POST a webhook payload to the URL specified whenever the webhook's event is triggered. Webhooks are great for processing many inbound emails and responding to other events at scale. Customize the payload sent to your endpoint by setting the `requestBodyTemplate` property to a string with moustache style variables. Property names from the standard payload model for the given event are available as variables.
*/
export class CreateWebhookOptions {
    /**
    * Public URL on your server that MailSlurp can post WebhookNotification payload to when an email is received or an event is trigger. The payload of the submitted JSON is dependent on the webhook event type. See docs.mailslurp.com/webhooks for event payload documentation.
    */
    'url': string;
    'basicAuth'?: BasicAuthOptions;
    /**
    * Optional name for the webhook
    */
    'name'?: string;
    /**
    * Optional webhook event name. Default is `EMAIL_RECEIVED` and is triggered when an email is received by the inbox associated with the webhook. Payload differ according to the webhook event name.
    */
    'eventName'?: CreateWebhookOptionsEventNameEnum;
    'includeHeaders'?: WebhookHeaders;
    /**
    * Template for the JSON body of the webhook request that will be sent to your server. Use Moustache style `{{variableName}}` templating to use parts of the standard webhook payload for the given event.
    */
    'requestBodyTemplate'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "basicAuth",
            "baseName": "basicAuth",
            "type": "BasicAuthOptions",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "eventName",
            "baseName": "eventName",
            "type": "CreateWebhookOptionsEventNameEnum",
            "format": ""
        },
        {
            "name": "includeHeaders",
            "baseName": "includeHeaders",
            "type": "WebhookHeaders",
            "format": ""
        },
        {
            "name": "requestBodyTemplate",
            "baseName": "requestBodyTemplate",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateWebhookOptions.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type CreateWebhookOptionsEventNameEnum = "EMAIL_RECEIVED" | "NEW_EMAIL" | "NEW_CONTACT" | "NEW_ATTACHMENT" | "EMAIL_OPENED" | "EMAIL_READ" | "DELIVERY_STATUS" | "BOUNCE" | "BOUNCE_RECIPIENT" | "NEW_SMS" ;

