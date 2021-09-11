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

import { SendEmailOptions } from './SendEmailOptions.ts';
import { HttpFile } from '../http/http.ts';

/**
* Options for bulk sending an email from multiple addresses. See regular `sendEmail` methods for more information.
*/
export class BulkSendEmailOptions {
    /**
    * Inboxes to send the email from
    */
    'inboxIds'?: Array<string>;
    'sendEmailOptions'?: SendEmailOptions;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "inboxIds",
            "baseName": "inboxIds",
            "type": "Array<string>",
            "format": "uuid"
        },
        {
            "name": "sendEmailOptions",
            "baseName": "sendEmailOptions",
            "type": "SendEmailOptions",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BulkSendEmailOptions.attributeTypeMap;
    }
    
    public constructor() {
    }
}

