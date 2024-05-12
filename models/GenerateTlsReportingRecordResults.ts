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

export class GenerateTlsReportingRecordResults {
    'name': string;
    /**
    * Domain Name Server Record Types
    */
    'type': GenerateTlsReportingRecordResultsTypeEnum;
    'ttl': number;
    'value': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "GenerateTlsReportingRecordResultsTypeEnum",
            "format": ""
        },
        {
            "name": "ttl",
            "baseName": "ttl",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GenerateTlsReportingRecordResults.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type GenerateTlsReportingRecordResultsTypeEnum = "A" | "NS" | "MD" | "MF" | "CNAME" | "SOA" | "MB" | "MG" | "MR" | "NULL" | "WKS" | "PTR" | "HINFO" | "MINFO" | "MX" | "TXT" | "RP" | "AFSDB" | "X25" | "ISDN" | "RT" | "NSAP" | "NSAP_PTR" | "SIG" | "KEY" | "PX" | "GPOS" | "AAAA" | "LOC" | "NXT" | "EID" | "NIMLOC" | "SRV" | "ATMA" | "NAPTR" | "KX" | "CERT" | "A6" | "DNAME" | "SINK" | "OPT" | "APL" | "DS" | "SSHFP" | "IPSECKEY" | "RRSIG" | "NSEC" | "DNSKEY" | "DHCID" | "NSEC3" | "NSEC3PARAM" | "TLSA" | "SMIMEA" | "HIP" | "NINFO" | "RKEY" | "TALINK" | "CDS" | "CDNSKEY" | "OPENPGPKEY" | "CSYNC" | "ZONEMD" | "SVCB" | "HTTPS" | "SPF" | "UINFO" | "UID" | "GID" | "UNSPEC" | "NID" | "L32" | "L64" | "LP" | "EUI48" | "EUI64" | "TKEY" | "TSIG" | "IXFR" | "AXFR" | "MAILB" | "MAILA" | "ANY" | "URI" | "CAA" | "AVC" | "DOA" | "AMTRELAY" | "TA" | "DLV" ;

