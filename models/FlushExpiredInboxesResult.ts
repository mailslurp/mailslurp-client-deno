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
* Result from calling expire on any inboxes that have applicable expiration dates given current time.
*/
export class FlushExpiredInboxesResult {
    'inboxIds': Array<string>;
    'expireBefore': Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "inboxIds",
            "baseName": "inboxIds",
            "type": "Array<string>",
            "format": "uuid"
        },
        {
            "name": "expireBefore",
            "baseName": "expireBefore",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return FlushExpiredInboxesResult.attributeTypeMap;
    }
    
    public constructor() {
    }
}

