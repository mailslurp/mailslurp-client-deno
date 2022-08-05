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

export class CreateEmergencyAddressOptions {
    'customerName': string;
    'address1': string;
    'city': string;
    'region': string;
    'postalCode': string;
    'isoCountryCode': CreateEmergencyAddressOptionsIsoCountryCodeEnum;
    'displayName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "customerName",
            "baseName": "customerName",
            "type": "string",
            "format": ""
        },
        {
            "name": "address1",
            "baseName": "address1",
            "type": "string",
            "format": ""
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string",
            "format": ""
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "string",
            "format": ""
        },
        {
            "name": "postalCode",
            "baseName": "postalCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "isoCountryCode",
            "baseName": "isoCountryCode",
            "type": "CreateEmergencyAddressOptionsIsoCountryCodeEnum",
            "format": ""
        },
        {
            "name": "displayName",
            "baseName": "displayName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateEmergencyAddressOptions.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type CreateEmergencyAddressOptionsIsoCountryCodeEnum = "US" | "GB" ;

