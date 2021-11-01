/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails from dynamically allocated email addresses. It's designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://www.mailslurp.com/docs/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * OpenAPI spec version: 6.5.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

/**
* Options for forwarding an email
*/
export class ForwardEmailOptions {
    /**
    * Optional bcc recipients
    */
    'bcc'?: Array<string>;
    /**
    * Optional cc recipients
    */
    'cc'?: Array<string>;
    /**
    * Optional from override
    */
    'from'?: string;
    /**
    * Subject for forwarded email
    */
    'subject'?: string;
    /**
    * To recipients for forwarded email
    */
    'to'?: Array<string>;
    /**
    * Optionally use inbox name as display name for sender email address
    */
    'useInboxName'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
            "name": "from",
            "baseName": "from",
            "type": "string",
            "format": ""
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
            "name": "useInboxName",
            "baseName": "useInboxName",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ForwardEmailOptions.attributeTypeMap;
    }
    
    public constructor() {
    }
}

