/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It's designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository
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
* Preview of an email message. For full message (including body and attachments) call the `getEmail` or other email endpoints with the provided email ID.
*/
export class EmailPreview {
    /**
    * ID of the email entity
    */
    'id': string;
    /**
    * The subject line of the email message as specified by SMTP subject header
    */
    'subject'?: string;
    /**
    * List of `To` recipient email addresses that the email was addressed to. See recipients object for names.
    */
    'to': Array<string>;
    /**
    * Who the email was sent from. An email address - see fromName for the sender name.
    */
    'from'?: string;
    /**
    * List of `BCC` recipients email addresses that the email was addressed to. See recipients object for names.
    */
    'bcc'?: Array<string>;
    /**
    * List of `CC` recipients email addresses that the email was addressed to. See recipients object for names.
    */
    'cc'?: Array<string>;
    /**
    * When was the email received by MailSlurp
    */
    'createdAt': Date;
    /**
    * Read flag. Has the email ever been viewed in the dashboard or fetched via the API with a hydrated body? If so the email is marked as read. Paginated results do not affect read status. Read status is different to email opened event as it depends on your own account accessing the email. Email opened is determined by tracking pixels sent to other uses if enable during sending. You can listened for both email read and email opened events using webhooks.
    */
    'read'?: boolean;
    /**
    * List of IDs of attachments found in the email. Use these IDs with the Inbox and Email Controllers to download attachments and attachment meta data such as filesize, name, extension.
    */
    'attachments'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string",
            "format": ""
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "from",
            "baseName": "from",
            "type": "string",
            "format": ""
        },
        {
            "name": "bcc",
            "baseName": "bcc",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "cc",
            "baseName": "cc",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "read",
            "baseName": "read",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "attachments",
            "baseName": "attachments",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EmailPreview.attributeTypeMap;
    }
    
    public constructor() {
    }
}

