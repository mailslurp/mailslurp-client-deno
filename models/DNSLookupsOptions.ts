/**
 * MailSlurp API
 * MailSlurp is an API for sending and receiving emails and SMS from dynamically allocated email addresses and phone numbers. It's designed for developers and QA teams to test applications, process inbound emails, send templated notifications, attachments, and more.  ## Resources  - [Homepage](https://www.mailslurp.com) - Get an [API KEY](https://app.mailslurp.com/sign-up/) - Generated [SDK Clients](https://docs.mailslurp.com/) - [Examples](https://github.com/mailslurp/examples) repository
 *
 * OpenAPI spec version: 6.5.2
 * Contact: contact@mailslurp.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DNSLookupOptions } from './DNSLookupOptions.ts';
import { HttpFile } from '../http/http.ts';

/**
* Options for multiple DNS queries
*/
export class DNSLookupsOptions {
    'lookups': Array<DNSLookupOptions>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "lookups",
            "baseName": "lookups",
            "type": "Array<DNSLookupOptions>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DNSLookupsOptions.attributeTypeMap;
    }
    
    public constructor() {
    }
}

