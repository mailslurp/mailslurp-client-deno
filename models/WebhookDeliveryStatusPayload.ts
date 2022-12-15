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

import { HttpFile } from '../http/http.ts';

/**
* DELIVERY_STATUS webhook payload. Sent to your webhook url endpoint via HTTP POST when an email delivery status is created. This could be a successful delivery or a delivery failure.
*/
export class WebhookDeliveryStatusPayload {
    /**
    * Idempotent message ID. Store this ID locally or in a database to prevent message duplication.
    */
    'messageId': string;
    /**
    * ID of webhook entity being triggered
    */
    'webhookId': string;
    /**
    * Name of the event type webhook is being triggered for.
    */
    'eventName': WebhookDeliveryStatusPayloadEventNameEnum;
    /**
    * Name of the webhook being triggered
    */
    'webhookName'?: string;
    /**
    * ID of delivery status
    */
    'id': string;
    /**
    * User ID of event
    */
    'userId': string;
    /**
    * ID of sent email
    */
    'sentId'?: string;
    /**
    * IP address of the remote Mail Transfer Agent
    */
    'remoteMtaIp'?: string;
    /**
    * Id of the inbox
    */
    'inboxId'?: string;
    /**
    * Mail Transfer Agent reporting delivery status
    */
    'reportingMta'?: string;
    /**
    * Recipients for delivery
    */
    'recipients'?: Array<string>;
    /**
    * SMTP server response message
    */
    'smtpResponse'?: string;
    /**
    * SMTP server status
    */
    'smtpStatusCode'?: number;
    /**
    * Time in milliseconds for delivery processing
    */
    'processingTimeMillis'?: number;
    /**
    * Time event was received
    */
    'received'?: Date;
    /**
    * Email subject
    */
    'subject'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "messageId",
            "baseName": "messageId",
            "type": "string",
            "format": ""
        },
        {
            "name": "webhookId",
            "baseName": "webhookId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "eventName",
            "baseName": "eventName",
            "type": "WebhookDeliveryStatusPayloadEventNameEnum",
            "format": ""
        },
        {
            "name": "webhookName",
            "baseName": "webhookName",
            "type": "string",
            "format": ""
        },
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
            "name": "sentId",
            "baseName": "sentId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "remoteMtaIp",
            "baseName": "remoteMtaIp",
            "type": "string",
            "format": ""
        },
        {
            "name": "inboxId",
            "baseName": "inboxId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "reportingMta",
            "baseName": "reportingMta",
            "type": "string",
            "format": ""
        },
        {
            "name": "recipients",
            "baseName": "recipients",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "smtpResponse",
            "baseName": "smtpResponse",
            "type": "string",
            "format": ""
        },
        {
            "name": "smtpStatusCode",
            "baseName": "smtpStatusCode",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "processingTimeMillis",
            "baseName": "processingTimeMillis",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "received",
            "baseName": "received",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WebhookDeliveryStatusPayload.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type WebhookDeliveryStatusPayloadEventNameEnum = "EMAIL_RECEIVED" | "NEW_EMAIL" | "NEW_CONTACT" | "NEW_ATTACHMENT" | "EMAIL_OPENED" | "EMAIL_READ" | "DELIVERY_STATUS" | "BOUNCE" | "BOUNCE_RECIPIENT" | "NEW_SMS" ;
