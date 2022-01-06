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

import { DNSLookupResult } from './DNSLookupResult.ts';
import { HttpFile } from '../http/http.ts';

/**
* Results of query on domain name servers
*/
export class DNSLookupResults {
    'results'?: Array<DNSLookupResult>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<DNSLookupResult>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DNSLookupResults.attributeTypeMap;
    }
    
    public constructor() {
    }
}

