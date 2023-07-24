// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { GenerateBimiRecordOptions } from '../models/GenerateBimiRecordOptions.ts';
import { GenerateBimiRecordResults } from '../models/GenerateBimiRecordResults.ts';
import { GenerateDmarcRecordOptions } from '../models/GenerateDmarcRecordOptions.ts';
import { GenerateDmarcRecordResults } from '../models/GenerateDmarcRecordResults.ts';
import { GenerateMtaStsRecordOptions } from '../models/GenerateMtaStsRecordOptions.ts';
import { GenerateMtaStsRecordResults } from '../models/GenerateMtaStsRecordResults.ts';
import { GenerateTlsReportingRecordOptions } from '../models/GenerateTlsReportingRecordOptions.ts';
import { GenerateTlsReportingRecordResults } from '../models/GenerateTlsReportingRecordResults.ts';
import { LookupBimiDomainOptions } from '../models/LookupBimiDomainOptions.ts';
import { LookupBimiDomainResults } from '../models/LookupBimiDomainResults.ts';
import { LookupDmarcDomainOptions } from '../models/LookupDmarcDomainOptions.ts';
import { LookupDmarcDomainResults } from '../models/LookupDmarcDomainResults.ts';
import { LookupMtaStsDomainOptions } from '../models/LookupMtaStsDomainOptions.ts';
import { LookupMtaStsDomainResults } from '../models/LookupMtaStsDomainResults.ts';
import { LookupTlsReportingDomainOptions } from '../models/LookupTlsReportingDomainOptions.ts';
import { LookupTlsReportingDomainResults } from '../models/LookupTlsReportingDomainResults.ts';

/**
 * no description
 */
export class ToolsControllerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a BIMI record policy
     * @param generateBimiRecordOptions 
     */
    public async generateBimiRecord(generateBimiRecordOptions: GenerateBimiRecordOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'generateBimiRecordOptions' is not null or undefined
        if (generateBimiRecordOptions === null || generateBimiRecordOptions === undefined) {
            throw new RequiredError('Required parameter generateBimiRecordOptions was null or undefined when calling generateBimiRecord.');
        }


        // Path Params
        const localVarPath = '/tools/generate-bimi-record';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(generateBimiRecordOptions, "GenerateBimiRecordOptions", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["API_KEY"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create a DMARC record policy
     * @param generateDmarcRecordOptions 
     */
    public async generateDmarcRecord(generateDmarcRecordOptions: GenerateDmarcRecordOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'generateDmarcRecordOptions' is not null or undefined
        if (generateDmarcRecordOptions === null || generateDmarcRecordOptions === undefined) {
            throw new RequiredError('Required parameter generateDmarcRecordOptions was null or undefined when calling generateDmarcRecord.');
        }


        // Path Params
        const localVarPath = '/tools/generate-dmarc-record';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(generateDmarcRecordOptions, "GenerateDmarcRecordOptions", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["API_KEY"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create a TLS reporting record policy
     * @param generateMtaStsRecordOptions 
     */
    public async generateMtaStsRecord(generateMtaStsRecordOptions: GenerateMtaStsRecordOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'generateMtaStsRecordOptions' is not null or undefined
        if (generateMtaStsRecordOptions === null || generateMtaStsRecordOptions === undefined) {
            throw new RequiredError('Required parameter generateMtaStsRecordOptions was null or undefined when calling generateMtaStsRecord.');
        }


        // Path Params
        const localVarPath = '/tools/generate-mta-sts-record';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(generateMtaStsRecordOptions, "GenerateMtaStsRecordOptions", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["API_KEY"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create a TLS reporting record policy
     * @param generateTlsReportingRecordOptions 
     */
    public async generateTlsReportingRecord(generateTlsReportingRecordOptions: GenerateTlsReportingRecordOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'generateTlsReportingRecordOptions' is not null or undefined
        if (generateTlsReportingRecordOptions === null || generateTlsReportingRecordOptions === undefined) {
            throw new RequiredError('Required parameter generateTlsReportingRecordOptions was null or undefined when calling generateTlsReportingRecord.');
        }


        // Path Params
        const localVarPath = '/tools/generate-tls-reporting-record';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(generateTlsReportingRecordOptions, "GenerateTlsReportingRecordOptions", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["API_KEY"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Lookup a BIMI record policy
     * @param lookupBimiDomainOptions 
     */
    public async lookupBimiDomain(lookupBimiDomainOptions: LookupBimiDomainOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'lookupBimiDomainOptions' is not null or undefined
        if (lookupBimiDomainOptions === null || lookupBimiDomainOptions === undefined) {
            throw new RequiredError('Required parameter lookupBimiDomainOptions was null or undefined when calling lookupBimiDomain.');
        }


        // Path Params
        const localVarPath = '/tools/lookup-bimi-domain';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(lookupBimiDomainOptions, "LookupBimiDomainOptions", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["API_KEY"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Lookup a DMARC record policy
     * @param lookupDmarcDomainOptions 
     */
    public async lookupDmarcDomain(lookupDmarcDomainOptions: LookupDmarcDomainOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'lookupDmarcDomainOptions' is not null or undefined
        if (lookupDmarcDomainOptions === null || lookupDmarcDomainOptions === undefined) {
            throw new RequiredError('Required parameter lookupDmarcDomainOptions was null or undefined when calling lookupDmarcDomain.');
        }


        // Path Params
        const localVarPath = '/tools/lookup-dmarc-domain';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(lookupDmarcDomainOptions, "LookupDmarcDomainOptions", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["API_KEY"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Lookup a MTA-STS domain policy
     * @param lookupMtaStsDomainOptions 
     */
    public async lookupMtaStsDomain(lookupMtaStsDomainOptions: LookupMtaStsDomainOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'lookupMtaStsDomainOptions' is not null or undefined
        if (lookupMtaStsDomainOptions === null || lookupMtaStsDomainOptions === undefined) {
            throw new RequiredError('Required parameter lookupMtaStsDomainOptions was null or undefined when calling lookupMtaStsDomain.');
        }


        // Path Params
        const localVarPath = '/tools/lookup-mta-sts-domain';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(lookupMtaStsDomainOptions, "LookupMtaStsDomainOptions", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["API_KEY"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Lookup a TLS reporting domain policy
     * @param lookupTlsReportingDomainOptions 
     */
    public async lookupTlsReportingDomain(lookupTlsReportingDomainOptions: LookupTlsReportingDomainOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'lookupTlsReportingDomainOptions' is not null or undefined
        if (lookupTlsReportingDomainOptions === null || lookupTlsReportingDomainOptions === undefined) {
            throw new RequiredError('Required parameter lookupTlsReportingDomainOptions was null or undefined when calling lookupTlsReportingDomain.');
        }


        // Path Params
        const localVarPath = '/tools/lookup-tls-reporting-domain';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(lookupTlsReportingDomainOptions, "LookupTlsReportingDomainOptions", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["API_KEY"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ToolsControllerApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to generateBimiRecord
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async generateBimiRecord(response: ResponseContext): Promise<GenerateBimiRecordResults > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GenerateBimiRecordResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenerateBimiRecordResults", ""
            ) as GenerateBimiRecordResults;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GenerateBimiRecordResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenerateBimiRecordResults", ""
            ) as GenerateBimiRecordResults;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to generateDmarcRecord
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async generateDmarcRecord(response: ResponseContext): Promise<GenerateDmarcRecordResults > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GenerateDmarcRecordResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenerateDmarcRecordResults", ""
            ) as GenerateDmarcRecordResults;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GenerateDmarcRecordResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenerateDmarcRecordResults", ""
            ) as GenerateDmarcRecordResults;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to generateMtaStsRecord
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async generateMtaStsRecord(response: ResponseContext): Promise<GenerateMtaStsRecordResults > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GenerateMtaStsRecordResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenerateMtaStsRecordResults", ""
            ) as GenerateMtaStsRecordResults;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GenerateMtaStsRecordResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenerateMtaStsRecordResults", ""
            ) as GenerateMtaStsRecordResults;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to generateTlsReportingRecord
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async generateTlsReportingRecord(response: ResponseContext): Promise<GenerateTlsReportingRecordResults > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GenerateTlsReportingRecordResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenerateTlsReportingRecordResults", ""
            ) as GenerateTlsReportingRecordResults;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GenerateTlsReportingRecordResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GenerateTlsReportingRecordResults", ""
            ) as GenerateTlsReportingRecordResults;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to lookupBimiDomain
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async lookupBimiDomain(response: ResponseContext): Promise<LookupBimiDomainResults > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LookupBimiDomainResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupBimiDomainResults", ""
            ) as LookupBimiDomainResults;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LookupBimiDomainResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupBimiDomainResults", ""
            ) as LookupBimiDomainResults;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to lookupDmarcDomain
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async lookupDmarcDomain(response: ResponseContext): Promise<LookupDmarcDomainResults > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LookupDmarcDomainResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupDmarcDomainResults", ""
            ) as LookupDmarcDomainResults;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LookupDmarcDomainResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupDmarcDomainResults", ""
            ) as LookupDmarcDomainResults;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to lookupMtaStsDomain
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async lookupMtaStsDomain(response: ResponseContext): Promise<LookupMtaStsDomainResults > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LookupMtaStsDomainResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupMtaStsDomainResults", ""
            ) as LookupMtaStsDomainResults;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LookupMtaStsDomainResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupMtaStsDomainResults", ""
            ) as LookupMtaStsDomainResults;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to lookupTlsReportingDomain
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async lookupTlsReportingDomain(response: ResponseContext): Promise<LookupTlsReportingDomainResults > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: LookupTlsReportingDomainResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupTlsReportingDomainResults", ""
            ) as LookupTlsReportingDomainResults;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: LookupTlsReportingDomainResults = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "LookupTlsReportingDomainResults", ""
            ) as LookupTlsReportingDomainResults;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
