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
* Options for DNS query. 
*/
export class DNSLookupOptions {
    /**
    * List of record types you wish to query such as MX, DNS, TXT, NS, A etc.
    */
    'hostname': string;
    /**
    * List of record types you wish to query such as MX, DNS, TXT, NS, A etc.
    */
    'recordTypes': Array<DNSLookupOptionsRecordTypesEnum>;
    /**
    * Optionally control whether to omit the final dot in full DNS name values.
    */
    'omitFinalDNSDot': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "hostname",
            "baseName": "hostname",
            "type": "string",
            "format": ""
        },
        {
            "name": "recordTypes",
            "baseName": "recordTypes",
            "type": "Array<DNSLookupOptionsRecordTypesEnum>",
            "format": ""
        },
        {
            "name": "omitFinalDNSDot",
            "baseName": "omitFinalDNSDot",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DNSLookupOptions.attributeTypeMap;
    }
    
    public constructor() {
    }
}


export type DNSLookupOptionsRecordTypesEnum = "A" | "NS" | "MD" | "MF" | "CNAME" | "SOA" | "MB" | "MG" | "MR" | "NULL" | "WKS" | "PTR" | "HINFO" | "MINFO" | "MX" | "TXT" | "RP" | "AFSDB" | "X25" | "ISDN" | "RT" | "NSAP" | "NSAP_PTR" | "SIG" | "KEY" | "PX" | "GPOS" | "AAAA" | "LOC" | "NXT" | "EID" | "NIMLOC" | "SRV" | "ATMA" | "NAPTR" | "KX" | "CERT" | "A6" | "DNAME" | "SINK" | "OPT" | "APL" | "DS" | "SSHFP" | "IPSECKEY" | "RRSIG" | "NSEC" | "DNSKEY" | "DHCID" | "NSEC3" | "NSEC3PARAM" | "TLSA" | "SMIMEA" | "HIP" | "NINFO" | "RKEY" | "TALINK" | "CDS" | "CDNSKEY" | "OPENPGPKEY" | "CSYNC" | "ZONEMD" | "SVCB" | "HTTPS" | "SPF" | "UINFO" | "UID" | "GID" | "UNSPEC" | "NID" | "L32" | "L64" | "LP" | "EUI48" | "EUI64" | "TKEY" | "TSIG" | "IXFR" | "AXFR" | "MAILB" | "MAILA" | "ANY" | "URI" | "CAA" | "AVC" | "DOA" | "AMTRELAY" | "TA" | "DLV" ;

