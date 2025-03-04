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

import { HttpFile } from '../http/http.ts';

export class GenerateDmarcRecordOptions {
    'domain': string;
    'version': GenerateDmarcRecordOptionsVersionEnum;
    'policy': GenerateDmarcRecordOptionsPolicyEnum;
    'subdomainPolicy'?: GenerateDmarcRecordOptionsSubdomainPolicyEnum;
    'reportEmailAddress'?: Array<string>;
    'forensicEmailAddress'?: Array<string>;
    'percentage'?: number;
    'reportFormat'?: GenerateDmarcRecordOptionsReportFormatEnum;
    'secondsBetweenReports'?: number;
    'adkim'?: GenerateDmarcRecordOptionsAdkimEnum;
    'aspf'?: GenerateDmarcRecordOptionsAspfEnum;
    'fo'?: GenerateDmarcRecordOptionsFoEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "domain",
            "baseName": "domain",
            "type": "string",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "GenerateDmarcRecordOptionsVersionEnum",
            "format": ""
        },
        {
            "name": "policy",
            "baseName": "policy",
            "type": "GenerateDmarcRecordOptionsPolicyEnum",
            "format": ""
        },
        {
            "name": "subdomainPolicy",
            "baseName": "subdomainPolicy",
            "type": "GenerateDmarcRecordOptionsSubdomainPolicyEnum",
            "format": ""
        },
        {
            "name": "reportEmailAddress",
            "baseName": "reportEmailAddress",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "forensicEmailAddress",
            "baseName": "forensicEmailAddress",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "percentage",
            "baseName": "percentage",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "reportFormat",
            "baseName": "reportFormat",
            "type": "GenerateDmarcRecordOptionsReportFormatEnum",
            "format": ""
        },
        {
            "name": "secondsBetweenReports",
            "baseName": "secondsBetweenReports",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "adkim",
            "baseName": "adkim",
            "type": "GenerateDmarcRecordOptionsAdkimEnum",
            "format": ""
        },
        {
            "name": "aspf",
            "baseName": "aspf",
            "type": "GenerateDmarcRecordOptionsAspfEnum",
            "format": ""
        },
        {
            "name": "fo",
            "baseName": "fo",
            "type": "GenerateDmarcRecordOptionsFoEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GenerateDmarcRecordOptions.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type GenerateDmarcRecordOptionsVersionEnum = "DMARC1" ;
export type GenerateDmarcRecordOptionsPolicyEnum = "NONE" | "QUARANTINE" | "REJECT" ;
export type GenerateDmarcRecordOptionsSubdomainPolicyEnum = "NONE" | "QUARANTINE" | "REJECT" ;
export type GenerateDmarcRecordOptionsReportFormatEnum = "AFRF" ;
export type GenerateDmarcRecordOptionsAdkimEnum = "STRICT" | "RELAXED" ;
export type GenerateDmarcRecordOptionsAspfEnum = "STRICT" | "RELAXED" ;
export type GenerateDmarcRecordOptionsFoEnum = "FO_0" | "FO_1" | "FO_D" | "FO_S" ;

